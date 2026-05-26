# 📊 Engenharia de Dados e Análise de Tendências de Mercado - Sorocaba/SP

Este repositório contém a arquitetura lógica de um pipeline de processamento e análise estatística descritiva desenvolvido como **Projeto de Atividade de Extensão Universitária (Curso de ADS - Estácio)**, sob o escopo da disciplina *Análise de Dados*.

O projeto foi concebido e homologado em parceria institucional com a empresa **Ycon Inteligência e Tecnologia (CNPJ: 34.362.470/0001-17)**, sediada no polo tecnológico de **Sorocaba - SP**, visando solucionar a baixa letramento de dados (*data literacy*) de empreendedores locais, mitigando tomadas de decisão ineficientes por meio do processamento automatizado de dados de consumo.

## 🛠️ Stack Tecnológica
* **Runtime:** Node.js (v18+)
* **Padrão de Módulos:** ECMAScript Modules (ESM)
* **Arquitetura do Pipeline:** Processamento de Fluxo Assíncrono Nativo (`fs/promises`)
* **Abordagem Estatística:** Análise Descritiva de Tendência Central e Distribuição de Frequências

## 📁 Estrutura do Projeto
* `massa_dados.csv`: Dataset contendo registros estruturados de transações comerciais regionais (anonimizados e descaracterizados para conformidade com a LGPD e sigilo comercial), segmentados pelos principais bairros de Sorocaba (Campolim, Vila Hortência, Centro, Éden, Vila Helena, General Carneiro, Cerrado, Trujillo, Wanel Ville e Santa Rosália).
* `index.js`: Motor analítico responsável pela carga assíncrona, higienização de quebras de linha (`\r` Carriage Return), parsing de strings e cálculo automatizado de KPIs.
* `config.json`: Manifesto de governança contendo os metadados do projeto, informações acadêmicas do desenvolvedor e chaves lógicas de execução dos algoritmos.
* `package.json`: Configurações de dependências do ambiente Node.js.

## 📈 Indicadores Mapeados no Pipeline
1. **Faturamento Bruto Consolidado:** Totalização financeira do volume transacionado na amostragem regional.
2. **Ticket Médio Comercial:** Métrica de tendência central que dita o poder médio de compra por transação.
3. **Sazonalidade Semanal:** Mapeamento de picos de tráfego por dia da semana para otimização de estoque.
4. **Preferência de Canal de Distribuição:** Segmentação do comportamento de compra entre ambientes físicos (*Presencial*) e digitais (*E-commerce*).
5. **Densidade Geográfica:** Distribuição de volume de mercado por bairros de Sorocaba-SP.

---
**Desenvolvido por:** Ramon Bianco Gonçalves  
**Matrícula:** 202401194166 | ADS - Estácio  
**Homologação Técnica:** Vitor Hugo de Paula Pereira (Diretor de Tecnologia - Ycon)