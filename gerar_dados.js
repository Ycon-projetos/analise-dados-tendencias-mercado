import { writeFile } from 'fs/promises';

const QUANTIDADE_REGISTROS = 300;

const setores = ['Varejo_Alimentar', 'Vestuario', 'Automotivo', 'Construcao'];
const bairros = ['Campolim', 'Centro', 'Éden', 'Vila Helena', 'General Carneiro', 'Cerrado', 'Trujillo', 'Wanel Ville', 'Santa Rosália', 'Vila Hortência'];
const canais = ['E-commerce', 'Presencial', 'Presencial']; 
const dias = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo'];

function gerarValor(setor) {
    if (setor === 'Construcao') return (Math.random() * (2500 - 150) + 150).toFixed(2);
    if (setor === 'Automotivo') return (Math.random() * (1200 - 80) + 80).toFixed(2);
    if (setor === 'Vestuario') return (Math.random() * (350 - 30) + 30).toFixed(2);
    return (Math.random() * (180 - 15) + 15).toFixed(2);
}

async function iniciarGeracao() {
    try {
        let csvContent = 'id_transacao,setor_mercado,bairro_sorocaba,valor_venda,dia_semana,canal_compra\n';
        
        // O laço agora lê a constante declarada no topo
        for (let i = 1; i <= QUANTIDADE_REGISTROS; i++) {
            const setor = setores[Math.floor(Math.random() * setores.length)];
            const bairro = bairros[Math.floor(Math.random() * bairros.length)];
            const valor = gerarValor(setor);
            
            let dia = dias[Math.floor(Math.random() * dias.length)];
            if (Math.random() > 0.4) {
                dia = Math.random() > 0.5 ? 'Sexta-Feira' : 'Sábado';
            }

            const canal = canais[Math.floor(Math.random() * canais.length)];
            
            csvContent += `${i},${setor},${bairro},${valor},${dia},${canal}\n`;
        }

        await writeFile('./massa_dados.csv', csvContent, 'utf-8');
        
        // Linha 35 corrigida: A variável agora existe e será concatenada dinamicamente
        console.log('\n[SUCESSO] Arquivo massa_dados.csv gerado via ESM com ' + QUANTIDADE_REGISTROS + ' registros em Sorocaba!');
        
    } catch (error) {
        console.error('[ERRO] Falha ao gerar o dataset:', error.message);
    }
}

iniciarGeracao();