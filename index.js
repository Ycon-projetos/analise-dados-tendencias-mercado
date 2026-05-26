import { readFile } from 'fs/promises';

async function executarPipelineAnalise() {
    try {
        // 1. Carga de metadados corporativos e acadêmicos
        const configFile = await readFile(new URL('./config.json', import.meta.url), 'utf-8');
        const config = JSON.parse(configFile);

        console.log(`\n[PIPELINE] Iniciando processamento estatístico para: ${config.partner}`);
        console.log(`[PIPELINE] Escopo Geográfico: ${config.geography}\n`);

        // 2. Leitura assíncrona do Dataset de Comportamento de Consumo (CSV)
        const csvFile = await readFile(new URL('./massa_dados.csv', import.meta.url), 'utf-8');
        const linhas = csvFile.split('\n').filter(linha => linha.trim() !== '');
        
        // Remove o cabeçalho do arquivo CSV
        linhas.shift();

        let faturamentoTotal = 0;
        let totalTransacoes = 0;
        
        const metricasSazonalidade = {};
        const metricasCanais = {};
        const metricasBairros = {};

        // 3. Algoritmo de Higienização e Processamento de Fluxo
        for (const linha of linhas) {
            //eliminar resíduos invisíveis (\r) e espaços em branco com .map(col => col.trim())
            const [id, setor, bairro, valor_venda, dia_semana, canal_compra] = linha.split(',').map(col => col.trim());
            
            if (!valor_venda) continue;

            const valor = parseFloat(valor_venda);
            faturamentoTotal += valor;
            totalTransacoes++;

            // Agrupamento estatístico por frequência de ocorrência
            metricasSazonalidade[dia_semana] = (metricasSazonalidade[dia_semana] || 0) + 1;
            metricasCanais[canal_compra] = (metricasCanais[canal_compra] || 0) + 1;
            metricasBairros[bairro] = (metricasBairros[bairro] || 0) + 1;
        }

        // 4. Cálculo da métrica de Tendência Central (Ticket Médio)
        const ticketMedio = faturamentoTotal / totalTransacoes;

        // 5. Output Analítico Humano e Profissional no Console
        console.log("=================== RELATÓRIO ANALÍTICO DE MERCADO ===================");
        console.log(`Faturamento Total Bruto Analisado : R$ ${faturamentoTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
        console.log(`Volume Total de Transações Computadas: ${totalTransacoes}`);
        console.log(`Ticket Médio do Consumidor Regional : R$ ${ticketMedio.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
        
        console.log("\n[SAZONALIDADE] Distribuição de Compras por Dia da Semana:");
        console.dir(metricasSazonalidade);

        console.log("\n[COMPORTAMENTO] Preferência de Canais de Distribuição:");
        console.dir(metricasCanais);

        console.log("\n[GEOLOCALIZAÇÃO] Volume de Transações por Bairro de Sorocaba:");
        console.dir(metricasBairros);
        console.log("======================================================================");

        console.log(`\n[SUCESSO] Pipeline finalizado por: ${config.academic_info.student} (RA: ${config.academic_info.ra})`);
        console.log("[SUCESSO] Dados limpos e prontos para a homologação da diretoria técnica.");

    } catch (error) {
        console.error("[CRITICAL ERROR] Falha na execução do pipeline de dados:", error.message);
    }
}

executarPipelineAnalise();