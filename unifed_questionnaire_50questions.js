/**
 * ============================================================================
 * INOVAÇÃO #1: MULTI-AXIS ADVERSARIAL QUESTIONNAIRE (50 QUESTÕES)
 * ============================================================================
 * Base de Questões para Admissibilidade Técnico-Jurídica (Nível Tribunal)
 * Estruturadas em 5 Eixos: Cadeia Custódia, DAC7 vs SAF-T, Nexus-Zero, 
 * Algoritmo e Responsabilidade Tributária (RGIT)
 * 
 * RETIFICAÇÃO CIRÚRGICA: Inserção de Modelo Estatístico para Cálculo de Dano
 * ============================================================================
 */

window.UNIFED_QUESTIONNAIRE = {
    metadata: {
        version: '1.0',
        totalQuestions: 50,
        axes: 5,
        lastUpdated: new Date().toISOString(),
        compliance: ['ISO/IEC 27037:2012', 'NIST SP 800-86', 'Art. 327º CPP']
    },

    questions: [
        // ────────────────────────────────────────────────────────────────────
        // EIXO A: CADEIA DE CUSTÓDIA ISO 27037 (Q1-Q10)
        // ────────────────────────────────────────────────────────────────────
        {
            id: 'A001',
            axis: 'A',
            title: 'Cadeia de Custódia ISO 27037',
            text: 'A origem dos dados (Extrato Bancário, SAF-T PT, DAC7) foi documentada com identificação temporal precisa (timestamp RFC 3161)?',
            norma: 'ISO/IEC 27037:2012 § 5.3 (Identificação e Documentação de Evidência Digital)',
            implicacao: 'Sem documentação temporal rigorosa, a admissibilidade da prova técnico-jurídica fica comprometida.',
            defesa: 'O consultor técnico deve produzir certificado de timestamp autenticado para cada ficheiro de entrada.',
            titleEN: 'ISO 27037 Chain of Custody',
            textEN: 'Was the origin of the data (Bank Statement, SAF-T PT, DAC7) documented with precise temporal identification (RFC 3161 timestamp)?',
            normaEN: 'ISO/IEC 27037:2012 § 5.3 (Identification and Documentation of Digital Evidence)',
            implicacaoEN: 'Without rigorous temporal documentation, the admissibility of the technical-legal evidence is compromised.',
            defesaEN: 'The technical consultant must produce an authenticated timestamp certificate for each input file.'
        },
        {
            id: 'A002',
            axis: 'A',
            title: 'Cadeia de Custódia ISO 27037',
            text: 'Os ficheiros originais foram preservados em ambiente de apenas leitura (read-only) durante toda a análise?',
            norma: 'ISO/IEC 27037:2012 § 5.1 (Preservação de Integridade)',
            implicacao: 'Modificações accidentais ou intencionais durante análise invalidam a cadeia de custódia.',
            defesa: 'Demonstrar isolamento em contentor forense ou ambiente virtualizado com restrições de escrita.',
            titleEN: 'ISO 27037 Chain of Custody',
            textEN: 'Were the original files preserved in a read-only environment throughout the entire analysis?',
            normaEN: 'ISO/IEC 27037:2012 § 5.1 (Integrity Preservation)',
            implicacaoEN: 'Accidental or intentional modifications during analysis invalidate the chain of custody.',
            defesaEN: 'Demonstrate isolation in a forensic container or virtualized environment with write restrictions.'
        },
        {
            id: 'A003',
            axis: 'A',
            title: 'Cadeia de Custódia ISO 27037',
            text: 'O hash SHA-256 original de cada ficheiro foi calculado e armazenado antes de qualquer processamento?',
            norma: 'ISO/IEC 27037:2012 § 5.2 (Integridade Criptográfica)',
            implicacao: 'Sem hash inicial, não há prova de não-corrupção do arquivo.',
            defesa: 'Fornecer manifesto SHA-256 com assinatura digital do consultor técnico e timestamp.',
            titleEN: 'ISO 27037 Chain of Custody',
            textEN: 'Was the original SHA-256 hash of each file calculated and stored before any processing?',
            normaEN: 'ISO/IEC 27037:2012 § 5.2 (Cryptographic Integrity)',
            implicacaoEN: 'Without an initial hash, there is no proof that the file was not corrupted.',
            defesaEN: 'Provide a SHA-256 manifest with the technical consultant\'s digital signature and timestamp.'
        },
        {
            id: 'A004',
            axis: 'A',
            title: 'Cadeia de Custódia ISO 27037',
            text: 'Existe registro de quem acedeu aos dados, em que altura e com que privilégios de leitura/escrita?',
            norma: 'ISO/IEC 27037:2012 § 5.4 (Auditoria de Acesso)',
            implicacao: 'Sem logs de acesso, não é possível refutar alegações de manipulação posterior.',
            defesa: 'Exportar ForensicLogger completo com timestamps de cada operação realizada.',
            titleEN: 'ISO 27037 Chain of Custody',
            textEN: 'Is there a record of who accessed the data, when, and with what read/write privileges?',
            normaEN: 'ISO/IEC 27037:2012 § 5.4 (Access Audit)',
            implicacaoEN: 'Without access logs, it is not possible to refute allegations of subsequent manipulation.',
            defesaEN: 'Export the complete ForensicLogger with timestamps for each operation performed.'
        },
        {
            id: 'A005',
            axis: 'A',
            title: 'Cadeia de Custódia ISO 27037',
            text: 'Os dados foram processados num ambiente isolado (offline ou rede separada) sem contacto com internet pública?',
            norma: 'ISO/IEC 27037:2012 § 4.1 (Isolamento de Ambiente)',
            implicacao: 'Sem isolamento, existem riscos de contaminação ou interferência externa.',
            defesa: 'Demonstrar que o motor UNIFED roda offline localmente, sem sincronização em nuvem.',
            titleEN: 'ISO 27037 Chain of Custody',
            textEN: 'Were the data processed in an isolated environment (offline or separate network) without contact with the public internet?',
            normaEN: 'ISO/IEC 27037:2012 § 4.1 (Environment Isolation)',
            implicacaoEN: 'Without isolation, there are risks of contamination or external interference.',
            defesaEN: 'Demonstrate that the UNIFED engine runs locally offline, without cloud synchronization.'
        },
        {
            id: 'A006',
            axis: 'A',
            title: 'Cadeia de Custódia ISO 27037',
            text: 'O consultor técnico tem competência certificada em ferramentas forenses digitais (ex: ISO/IEC 27037, NIST)?',
            norma: 'NIST SP 800-86 § 2 (Qualificação do Investigador)',
            implicacao: 'Falta de competência técnica pode levar à exclusão do testemunho técnico-jurídica.',
            defesa: 'Fornecer curriculum vitae com certificações forenses e experiência comprovada.',
            titleEN: 'ISO 27037 Chain of Custody',
            textEN: 'Does the technical consultant hold certified competence in digital forensic tools (e.g., ISO/IEC 27037, NIST)?',
            normaEN: 'NIST SP 800-86 § 2 (Investigator Qualification)',
            implicacaoEN: 'Lack of technical competence may lead to the exclusion of the technical-legal testimony.',
            defesaEN: 'Provide a curriculum vitae with forensic certifications and proven experience.'
        },
        {
            id: 'A007',
            axis: 'A',
            title: 'Cadeia de Custódia ISO 27037',
            text: 'Existe cadeia de custódia documentada entre a obtenção dos dados e a análise (ex: quem recebeu, assinou, quando)?',
            norma: 'Art. 125º CPP (Obrigações do Consultor Técnico)',
            implicacao: 'Sem cadeia de custódia, a prova pode ser declarada ilegal e inadmissível.',
            defesa: 'Produzir formulários de transferência assinados ou declarações de custódia.',
            titleEN: 'ISO 27037 Chain of Custody',
            textEN: 'Is there a documented chain of custody between data acquisition and analysis (e.g., who received it, signed it, when)?',
            normaEN: 'Art. 125 CPP (Technical Consultant\'s Obligations)',
            implicacaoEN: 'Without a chain of custody, the evidence may be declared unlawful and inadmissible.',
            defesaEN: 'Produce signed transfer forms or custody declarations.'
        },
        {
            id: 'A008',
            axis: 'A',
            title: 'Cadeia de Custódia ISO 27037',
            text: 'Foram utilizadas ferramentas de análise validadas e com rastreabilidade forense (não modificadas, com checksums)?',
            norma: 'ISO/IEC 27037:2012 § 6 (Ferramentas Forenses Validadas)',
            implicacao: 'Ferramentas não validadas comprometem a fiabilidade dos resultados.',
            defesa: 'Documentar versão exata das ferramentas, hashes de binários, e certificações.',
            titleEN: 'ISO 27037 Chain of Custody',
            textEN: 'Were validated analysis tools with forensic traceability used (unmodified, with checksums)?',
            normaEN: 'ISO/IEC 27037:2012 § 6 (Validated Forensic Tools)',
            implicacaoEN: 'Unvalidated tools compromise the reliability of the results.',
            defesaEN: 'Document the exact tool version, binary hashes, and certifications.'
        },
        {
            id: 'A009',
            axis: 'A',
            title: 'Cadeia de Custódia ISO 27037',
            text: 'O motor de análise (UNIFED) está documentado com fluxogramas, pseudocódigo e argumentos técnicos que justifiquem cada cálculo?',
            norma: 'Art. 125º, al. a) CPP (Fundamentação Técnica Obrigatória)',
            implicacao: 'Sem documentação, o tribunal não consegue avaliar a metodologia e pode rejeitar a consultoria técnica.',
            defesa: 'Produzir Relatório Técnico com Anexos de Metodologia, Algoritmos, e Validação.',
            titleEN: 'ISO 27037 Chain of Custody',
            textEN: 'Is the analysis engine (UNIFED) documented with flowcharts, pseudocode, and technical arguments justifying each calculation?',
            normaEN: 'Art. 125, para. a) CPP (Mandatory Technical Reasoning)',
            implicacaoEN: 'Without documentation, the court cannot assess the methodology and may reject the technical consultancy.',
            defesaEN: 'Produce a Technical Report with Annexes on Methodology, Algorithms, and Validation.'
        },
        {
            id: 'A010',
            axis: 'A',
            title: 'Cadeia de Custódia ISO 27037',
            text: 'Todos os dados intermediários (buffers, caches, ficheiros temporários) foram eliminados após processamento ou arquivados em custódia?',
            norma: 'ISO/IEC 27037:2012 § 7 (Limpeza e Retenção)',
            implicacao: 'Deixar ficheiros temporários pode levar a remoção/corrupção involuntária.',
            defesa: 'Demonstrar protocolo de eliminação segura de dados intermediários (ex: shred com múltiplas passagens).',
            titleEN: 'ISO 27037 Chain of Custody',
            textEN: 'Were all intermediate data (buffers, caches, temporary files) deleted after processing or archived in custody?',
            normaEN: 'ISO/IEC 27037:2012 § 7 (Cleanup and Retention)',
            implicacaoEN: 'Leaving temporary files behind may lead to unintended removal/corruption.',
            defesaEN: 'Demonstrate a secure deletion protocol for intermediate data (e.g., multi-pass shred).'
        },

        // ────────────────────────────────────────────────────────────────────
        // EIXO B: TRIANGULAÇÃO DAC7 vs SAF-T (Q11-Q20)
        // ────────────────────────────────────────────────────────────────────
        {
            id: 'B001',
            axis: 'B',
            title: 'Triangulação DAC7 vs SAF-T',
            text: 'Os dados DAC7 (relato de operador) estão desagregados a nível de transação unitária, permitindo mapeamento 1:1 com linhas SAF-T?',
            norma: 'Diretiva UE 2021/514 (DAC7) § 8 (Granularidade de Dados)',
            implicacao: 'Sem granularidade, é impossível validar discrepâncias específicas.',
            defesa: 'Produzir tabela de mapeamento com transação SAF-T ↔ transação DAC7 lado-a-lado.',
            titleEN: 'DAC7 vs SAF-T Triangulation',
            textEN: 'Is the DAC7 data (operator report) disaggregated at unit-transaction level, allowing 1:1 mapping with SAF-T lines?',
            normaEN: 'EU Directive 2021/514 (DAC7) § 8 (Data Granularity)',
            implicacaoEN: 'Without granularity, it is impossible to validate specific discrepancies.',
            defesaEN: 'Produce a side-by-side SAF-T transaction ↔ DAC7 transaction mapping table.'
        },
        {
            id: 'B002',
            axis: 'B',
            title: 'Triangulação DAC7 vs SAF-T',
            text: 'Foram identificadas omissões de faturação (faturas em extrato bancário mas não em SAF-T)?',
            norma: 'Art. 29.º n.º1 al. b) CIVA (Obrigação de Faturação)',
            implicacao: 'Omissões são indicadores de sonegação fiscal intencional — Art. 103.º RGIT (Fraude Fiscal).',
            defesa: 'Listar explicitamente cada fatura omitida, valor, data e NIF cliente.',
            titleEN: 'DAC7 vs SAF-T Triangulation',
            textEN: 'Were invoicing omissions identified (invoices present in the bank statement but not in SAF-T)?',
            normaEN: 'Art. 29, no. 1, b) CIVA (Invoicing Obligation)',
            implicacaoEN: 'Omissions are indicators of intentional tax evasion — Art. 103 RGIT (Tax Fraud).',
            defesaEN: 'Explicitly list each omitted invoice, amount, date, and client tax ID.'
        },
        {
            id: 'B003',
            axis: 'B',
            title: 'Triangulação DAC7 vs SAF-T',
            text: 'Foram identificadas subfaturações (fatura em SAF-T com valor menor do que em extrato bancário)?',
            norma: 'Art. 103.º RGIT (Fraude Fiscal — Subdeclaração)',
            implicacao: 'Subfaturações indicam manipulação intencional de registos contabilísticos.',
            defesa: 'Calcular diferença de valor (€ e %), itemizar por período e cliente.',
            titleEN: 'DAC7 vs SAF-T Triangulation',
            textEN: 'Were under-invoicings identified (invoice in SAF-T with a lower amount than in the bank statement)?',
            normaEN: 'Art. 103 RGIT (Tax Fraud — Under-declaration)',
            implicacaoEN: 'Under-invoicing indicates intentional manipulation of accounting records.',
            defesaEN: 'Calculate the value difference (€ and %), itemized by period and client.'
        },
        {
            id: 'B004',
            axis: 'B',
            title: 'Triangulação DAC7 vs SAF-T',
            text: 'Os períodos de reporte DAC7 (geralmente trimestral) foram desagregados em períodos SAF-T diários ou mensais para máxima precisão?',
            norma: 'D.L. n.º 28/2019 de 15 de fevereiro § 3.1.2 (Granularidade Temporal)',
            implicacao: 'Granularidade insuficiente mascara omissões dentro do mesmo trimestre.',
            defesa: 'Demonstrar análise diária ou semanal além de análise trimestral agregada.',
            titleEN: 'DAC7 vs SAF-T Triangulation',
            textEN: 'Were the DAC7 reporting periods (typically quarterly) disaggregated into daily or monthly SAF-T periods for maximum precision?',
            normaEN: 'Decree-Law No. 28/2019 of February 15, § 3.1.2 (Temporal Granularity)',
            implicacaoEN: 'Insufficient granularity masks omissions within the same quarter.',
            defesaEN: 'Demonstrate daily or weekly analysis in addition to aggregated quarterly analysis.'
        },
        {
            id: 'B005',
            axis: 'B',
            title: 'Triangulação DAC7 vs SAF-T',
            text: 'Foi realizada reconciliação de IVA entre SAF-T (IVA faturado) e DAC7 (IVA declarado)?',
            norma: 'Art. 2º, n.º 1, al. i) CIVA (Autoliquidação Reversa)',
            implicacao: 'Divergências de IVA indicam potencial evasão (IVA Omitido × 23%).',
            defesa: 'Tabela comparativa: IVA em SAF-T vs IVA em DAC7, com cálculo de diferença.',
            titleEN: 'DAC7 vs SAF-T Triangulation',
            textEN: 'Was a VAT reconciliation performed between SAF-T (invoiced VAT) and DAC7 (declared VAT)?',
            normaEN: 'Art. 2, no. 1, i) CIVA (Reverse Self-Assessment)',
            implicacaoEN: 'VAT discrepancies indicate potential evasion (VAT Omitted × 23%).',
            defesaEN: 'Comparative table: VAT in SAF-T vs VAT in DAC7, with calculated difference.'
        },
        {
            id: 'B006',
            axis: 'B',
            title: 'Triangulação DAC7 vs SAF-T',
            text: 'Foram comparados os períodos de liquidação (datas de pagamento) entre SAF-T e extrato bancário para detectar atrasos anormais?',
            norma: 'NIST SP 800-86 § 3.5 (Análise Temporal)',
            implicacao: 'Liquidações atrasadas ou fora de padrão sugerem manipulação deliberada.',
            defesa: 'Gráfico de distribuição de atrasos de pagamento (dias entre fatura e crédito).',
            titleEN: 'DAC7 vs SAF-T Triangulation',
            textEN: 'Were settlement periods (payment dates) compared between SAF-T and the bank statement to detect abnormal delays?',
            normaEN: 'NIST SP 800-86 § 3.5 (Temporal Analysis)',
            implicacaoEN: 'Delayed or out-of-pattern settlements suggest deliberate manipulation.',
            defesaEN: 'Distribution chart of payment delays (days between invoice and credit).'
        },
        {
            id: 'B007',
            axis: 'B',
            title: 'Triangulação DAC7 vs SAF-T',
            text: 'Os números de série de fatura foram validados para continuidade e ausência de lacunas (ex: fatura 001, 002, 004 — falta 003)?',
            norma: 'Art. 103.º, n.º 2 RGIT (Fraude Fiscal — Sequência de Faturação)',
            implicacao: 'Lacunas na sequência indicam omissões deliberadas.',
            defesa: 'Listar lacunas detectadas, períodos afetados e quantificação de faturas omitidas.',
            titleEN: 'DAC7 vs SAF-T Triangulation',
            textEN: 'Were invoice serial numbers validated for continuity and absence of gaps (e.g., invoice 001, 002, 004 — 003 missing)?',
            normaEN: 'Art. 103, no. 2 RGIT (Tax Fraud — Invoicing Sequence)',
            implicacaoEN: 'Gaps in the sequence indicate deliberate omissions.',
            defesaEN: 'List detected gaps, affected periods, and quantification of omitted invoices.'
        },
        {
            id: 'B008',
            axis: 'B',
            title: 'Triangulação DAC7 vs SAF-T',
            text: 'Foram analisados os operadores/clientes (NIFs) em SAF-T vs DAC7 para identificar contas fantasma ou remoções?',
            norma: 'Art. 78º CIVA § 3 (Contrapartes Válidas)',
            implicacao: 'Operadores não registados ou removidos indicam manipulação intencional.',
            defesa: 'Lista de diferenças de NIFs entre bases de dados, com explicações.',
            titleEN: 'DAC7 vs SAF-T Triangulation',
            textEN: 'Were the operators/clients (tax IDs) in SAF-T vs DAC7 analyzed to identify ghost accounts or removals?',
            normaEN: 'Art. 78 CIVA § 3 (Valid Counterparties)',
            implicacaoEN: 'Unregistered or removed operators indicate intentional manipulation.',
            defesaEN: 'List of tax ID differences between databases, with explanations.'
        },
        {
            id: 'B009',
            axis: 'B',
            title: 'Triangulação DAC7 vs SAF-T',
            text: 'Foi realizada análise de moedas (EUR vs estrangeiras) para validar conversão e potencial manipulação cambial?',
            norma: 'Art. 78º CIVA § 1, al. b) (Moeda e Conversão)',
            implicacao: 'Conversão incorreta pode servir como máscara para subdeclaração.',
            defesa: 'Tabela de conversões, taxas usadas, e reconciliação posterior.',
            titleEN: 'DAC7 vs SAF-T Triangulation',
            textEN: 'Was a currency analysis (EUR vs foreign) performed to validate conversion and potential exchange-rate manipulation?',
            normaEN: 'Art. 78 CIVA § 1, b) (Currency and Conversion)',
            implicacaoEN: 'Incorrect conversion can serve as a mask for under-declaration.',
            defesaEN: 'Table of conversions, rates used, and subsequent reconciliation.'
        },
        {
            id: 'B010',
            axis: 'B',
            title: 'Triangulação DAC7 vs SAF-T',
            text: 'Foram identificadas reversões (créditos) anormais que poderiam servir para cancele de facturas declaradas?',
            norma: 'Art. 80º CIVA (Notas de Crédito)',
            implicacao: 'Reversões em massa sugerem tentativa de dissimular omissões anteriores.',
            defesa: 'Análise de padrões de reversão: frequência, valores, NIFs afetados.',
            titleEN: 'DAC7 vs SAF-T Triangulation',
            textEN: 'Were abnormal reversals (credits) identified that could serve to cancel declared invoices?',
            normaEN: 'Art. 80 CIVA (Credit Notes)',
            implicacaoEN: 'Mass reversals suggest an attempt to conceal prior omissions.',
            defesaEN: 'Analysis of reversal patterns: frequency, amounts, affected tax IDs.'
        },

        // ────────────────────────────────────────────────────────────────────
        // EIXO C: NEXUS-ZERO / APROPRIAÇÃO INDEVIDA (Q21-Q30)
        // ────────────────────────────────────────────────────────────────────
        {
            id: 'C001',
            axis: 'C',
            title: 'Nexus-Zero / Apropriação Indevida',
            text: 'A plataforma digital (ex: BOLT, Uber) declara ter remuneração zero sobre as comissões retidas (Nexus-Zero)?',
            norma: 'Art. 2º, n.º 1, al. i) CIVA (Operações Zero-Rated)',
            implicacao: 'Se verdadeiro, não há IVA devido. Se falso, constitui omissão de faturação.',
            defesa: 'Validar documentação contratual e comunicação da plataforma sobre modelo de comissão.',
            titleEN: 'Nexus-Zero / Undue Appropriation',
            textEN: 'Does the digital platform (e.g., BOLT, Uber) declare zero remuneration on the commissions retained (Nexus-Zero)?',
            normaEN: 'Art. 2, no. 1, i) CIVA (Zero-Rated Operations)',
            implicacaoEN: 'If true, no VAT is due. If false, it constitutes an invoicing omission.',
            defesaEN: 'Validate contractual documentation and the platform\'s communications regarding the commission model.'
        },
        {
            id: 'C002',
            axis: 'C',
            title: 'Nexus-Zero / Apropriação Indevida',
            text: 'A diferença entre comissão declarada (SAF-T) e comissão real (Extrato Bancário) é material (>5%)?',
            norma: 'Art. 36º, n.º 11 CIVA (Zona Cinzenta — Valores Retidos)',
            implicacao: 'Diferenças materiais sugerem apropriação indevida de valores pela plataforma.',
            defesa: 'Cálculo de % omissão, análise de tendência mensal, projeção anual.',
            titleEN: 'Nexus-Zero / Undue Appropriation',
            textEN: 'Is the difference between the declared commission (SAF-T) and the actual commission (bank statement) material (>5%)?',
            normaEN: 'Art. 36, no. 11 CIVA (Gray Zone — Retained Amounts)',
            implicacaoEN: 'Material differences suggest undue appropriation of amounts by the platform.',
            defesaEN: 'Calculate the % omission, monthly trend analysis, annual projection.'
        },
        {
            id: 'C003',
            axis: 'C',
            title: 'Nexus-Zero / Apropriação Indevida',
            text: 'Existe evidência de que a plataforma retém valores mas não os declara ao operador em extracto detalhado (discriminação)?',
            norma: 'Art. 29.º n.º1 al. b) CIVA (Faturação com Discriminação — Discriminação Obrigatória)',
            implicacao: 'Sem discriminação clara, o operador não consegue validar legitimidade das retenções.',
            defesa: 'Solicitar extracts detalhados à plataforma ou comprovar recusa de fornecer.',
            titleEN: 'Nexus-Zero / Undue Appropriation',
            textEN: 'Is there evidence that the platform retains amounts but does not disclose them to the operator in a detailed statement (itemization)?',
            normaEN: 'Art. 29, no. 1, b) CIVA (Itemized Invoicing — Mandatory Breakdown)',
            implicacaoEN: 'Without clear itemization, the operator cannot validate the legitimacy of the retentions.',
            defesaEN: 'Request detailed statements from the platform or prove refusal to provide them.'
        },
        {
            id: 'C004',
            axis: 'C',
            title: 'Nexus-Zero / Apropriação Indevida',
            text: 'As comissões retidas foram remuneração legítima da plataforma (2-25%) ou representam roubo de valores (>50% em casos extremos)?',
            norma: 'Art. 36º CIVA (Limites de Comissão Permitida)',
            implicacao: 'Comissões excessivas não justificadas representam enriquecimento ilícito.',
            defesa: 'Comparar % de comissão com padrão de mercado (benchmarking internacional).',
            titleEN: 'Nexus-Zero / Undue Appropriation',
            textEN: 'Were the retained commissions legitimate remuneration for the platform (2-25%) or do they represent the theft of amounts (>50% in extreme cases)?',
            normaEN: 'Art. 36 CIVA (Permitted Commission Limits)',
            implicacaoEN: 'Unjustified excessive commissions represent unjust enrichment.',
            defesaEN: 'Compare the commission % with market standards (international benchmarking).'
        },
        {
            id: 'C005',
            axis: 'C',
            title: 'Nexus-Zero / Apropriação Indevida',
            text: 'Foram rastreadas transferências internas da plataforma (ex: de conta de retenção para conta operacional) sem justificativa contabilística?',
            norma: 'NIST SP 800-86 § 3.3 (Rastreamento de Fundos)',
            implicacao: 'Transferências sem justificativa indicam transferência de responsabilidade.',
            defesa: 'Solicitar extracts bancários da plataforma ou demonstração de impossibilidade.',
            titleEN: 'Nexus-Zero / Undue Appropriation',
            textEN: 'Were the platform\'s internal transfers traced (e.g., from a retention account to an operating account) without accounting justification?',
            normaEN: 'NIST SP 800-86 § 3.3 (Funds Tracing)',
            implicacaoEN: 'Unjustified transfers indicate a shift of liability.',
            defesaEN: 'Request the platform\'s bank statements or demonstrate impossibility of obtaining them.'
        },
        {
            id: 'C006',
            axis: 'C',
            title: 'Nexus-Zero / Apropriação Indevida',
            text: 'Existe evidência de que a plataforma utiliza valores retidos para fins próprios (cash flow interno) sem remuneração ao operador?',
            norma: 'Art. 103.º RGIT (Fraude Fiscal — Apropriação Indevida)',
            implicacao: 'Utilização de valores sem consentimento expresso constitui desvio de bens.',
            defesa: 'Análise de saídas de caixa da plataforma comparadas com depósitos de retenção.',
            titleEN: 'Nexus-Zero / Undue Appropriation',
            textEN: 'Is there evidence that the platform uses retained amounts for its own purposes (internal cash flow) without remunerating the operator?',
            normaEN: 'Art. 103 RGIT (Tax Fraud — Undue Appropriation)',
            implicacaoEN: 'Use of funds without express consent constitutes misappropriation of assets.',
            defesaEN: 'Analysis of the platform\'s cash outflows compared with retention deposits.'
        },
        {
            id: 'C007',
            axis: 'C',
            title: 'Nexus-Zero / Apropriação Indevida',
            text: 'A plataforma ofereceu incentivos monetários temporários (ex: bónus) que depois foram deduzidos tacitamente das futuras comissões?',
            norma: 'Art. 36º CIVA § 5 (Descontos e Incentivos)',
            implicacao: 'Deduções tacitas sem consentimento prévio constituem fraude.',
            defesa: 'Cronologia de incentivos vs. cronologia de reduções em comissão futura.',
            titleEN: 'Nexus-Zero / Undue Appropriation',
            textEN: 'Did the platform offer temporary monetary incentives (e.g., bonuses) that were later tacitly deducted from future commissions?',
            normaEN: 'Art. 36 CIVA § 5 (Discounts and Incentives)',
            implicacaoEN: 'Tacit deductions without prior consent constitute fraud.',
            defesaEN: 'Timeline of incentives vs. timeline of reductions in future commission.'
        },
        {
            id: 'C008',
            axis: 'C',
            title: 'Nexus-Zero / Apropriação Indevida',
            text: 'Houve alteração unilateral do contrato (ex: aumento de comissão retenção de 10% para 30%) sem consentimento do operador?',
            norma: 'Art. 36º, n.º 7 CIVA (Modificação de Termos Contratuais)',
            implicacao: 'Alterações unilaterais sem consentimento são nulas contratualmente.',
            defesa: 'Datas de mudanças contratuais, notificações ao operador, aceite/rejeite.',
            titleEN: 'Nexus-Zero / Undue Appropriation',
            textEN: 'Was there a unilateral contract change (e.g., retention commission increased from 10% to 30%) without the operator\'s consent?',
            normaEN: 'Art. 36, no. 7 CIVA (Modification of Contractual Terms)',
            implicacaoEN: 'Unilateral changes without consent are contractually void.',
            defesaEN: 'Dates of contractual changes, notifications to the operator, acceptance/rejection.'
        },
        {
            id: 'C009',
            axis: 'C',
            title: 'Nexus-Zero / Apropriação Indevida',
            text: 'A retenção ocorre em moeda estrangeira com conversão adversa (ex: USD→EUR a taxa acima do mercado) beneficiando a plataforma?',
            norma: 'Art. 80º CIVA (Conversão Cambial Legítima)',
            implicacao: 'Conversão adversa com margem não divulgada representa apropriação.',
            defesa: 'Comparar taxas aplicadas com taxas do BCE no mesmo dia.',
            titleEN: 'Nexus-Zero / Undue Appropriation',
            textEN: 'Does the retention occur in foreign currency with adverse conversion (e.g., USD→EUR at an above-market rate) benefiting the platform?',
            normaEN: 'Art. 80 CIVA (Legitimate Currency Conversion)',
            implicacaoEN: 'Adverse conversion with an undisclosed margin represents appropriation.',
            defesaEN: 'Compare the rates applied with ECB rates on the same day.'
        },
        {
            id: 'C010',
            axis: 'C',
            title: 'Nexus-Zero / Apropriação Indevida',
            text: 'O sistema de retenção é automático (algoritmo) ou manual (revisão humana), e há possibilidade de erro ou manipulação?',
            norma: 'Art. 125º CPP § 1 (Metodologia Transparente)',
            implicacao: 'Sem transparência, não há como refutar alegações de manipulação deliberada.',
            defesa: 'Documentação do algoritmo, logs de cada operação de retenção, auditoria.',
            titleEN: 'Nexus-Zero / Undue Appropriation',
            textEN: 'Is the retention system automatic (algorithm) or manual (human review), and is there a possibility of error or manipulation?',
            normaEN: 'Art. 125 CPP § 1 (Transparent Methodology)',
            implicacaoEN: 'Without transparency, there is no way to refute allegations of deliberate manipulation.',
            defesaEN: 'Algorithm documentation, logs of each retention operation, audit trail.'
        },

        // ────────────────────────────────────────────────────────────────────
        // EIXO D: ALGORITMO & FALIBILIDADE (Q31-Q40)
        // ────────────────────────────────────────────────────────────────────
        {
            id: 'D001',
            axis: 'D',
            title: 'Algoritmo & Falibilidade',
            text: 'O motor de análise (UNIFED) passou em validação independente (ex: auditoria de terceiros) comprovando ausência de viés?',
            norma: 'NIST SP 800-86 § 2.3 (Validação de Ferramentas)',
            implicacao: 'Sem validação, a ferramenta pode ser contestada como parcial.',
            defesa: 'Produzir relatório de auditoria independente ou certificação de uso legítimo.',
            titleEN: 'Algorithm & Fallibility',
            textEN: 'Has the analysis engine (UNIFED) undergone independent validation (e.g., third-party audit) confirming the absence of bias?',
            normaEN: 'NIST SP 800-86 § 2.3 (Tool Validation)',
            implicacaoEN: 'Without validation, the tool may be challenged as biased.',
            defesaEN: 'Produce an independent audit report or certification of legitimate use.'
        },
        {
            id: 'D002',
            axis: 'D',
            title: 'Algoritmo & Falibilidade',
            text: 'O algoritmo foi testado com dados conhecidos (ex: testes de regressão) para validar outputs?',
            norma: 'ISO/IEC 27037:2012 § 6.1 (Validação de Outputs)',
            implicacao: 'Sem testes conhecidos, não há prova de que o algoritmo funciona.',
            defesa: 'Fornecer casos de teste documentados (inputs, outputs esperados, outputs reais).',
            titleEN: 'Algorithm & Fallibility',
            textEN: 'Was the algorithm tested with known data (e.g., regression tests) to validate outputs?',
            normaEN: 'ISO/IEC 27037:2012 § 6.1 (Output Validation)',
            implicacaoEN: 'Without known tests, there is no proof that the algorithm works.',
            defesaEN: 'Provide documented test cases (inputs, expected outputs, actual outputs).'
        },
        {
            id: 'D003',
            axis: 'D',
            title: 'Algoritmo & Falibilidade',
            text: 'O algoritmo foi testado com dados adversariais (ex: tentativas de bypassing) para provar robustez?',
            norma: 'NIST SP 800-86 § 3.7 (Testes de Resiliência)',
            implicacao: 'Sem testes adversariais, o algoritmo pode ser facilmente contornado.',
            defesa: 'Documentação de testes de resistência (fuzzing, edge cases, limites).',
            titleEN: 'Algorithm & Fallibility',
            textEN: 'Was the algorithm tested with adversarial data (e.g., bypass attempts) to prove robustness?',
            normaEN: 'NIST SP 800-86 § 3.7 (Resilience Testing)',
            implicacaoEN: 'Without adversarial testing, the algorithm can be easily circumvented.',
            defesaEN: 'Documentation of resilience testing (fuzzing, edge cases, limits).'
        },
        {
            id: 'D004',
            axis: 'D',
            title: 'Algoritmo & Falibilidade',
            text: 'A precisão do algoritmo foi quantificada (ex: taxa de falsos positivos/negativos < 1%)?',
            norma: 'Art. 125º CPP (Precisão Técnica Obrigatória)',
            implicacao: 'Sem quantificação, o tribunal não consegue avaliar fiabilidade.',
            defesa: 'Fornecer matriz de confusão, precisão, recall, F1-score.',
            titleEN: 'Algorithm & Fallibility',
            textEN: 'Has the accuracy of the algorithm been quantified (e.g., false positive/negative rate < 1%)?',
            normaEN: 'Art. 125 CPP (Mandatory Technical Precision)',
            implicacaoEN: 'Without quantification, the court cannot assess reliability.',
            defesaEN: 'Provide a confusion matrix, precision, recall, F1-score.'
        },
        {
            id: 'D005',
            axis: 'D',
            title: 'Algoritmo & Falibilidade',
            text: 'O algoritmo foi comparado com métodos alternativos (ex: análise manual vs. automatizada) e demonstra superioridade ou equivalência?',
            norma: 'NIST SP 800-86 § 2.2 (Comparação de Métodos)',
            implicacao: 'Sem comparação, não há prova de que o método escolhido é o melhor.',
            defesa: 'Tabela comparativa de métodos com análise de pros/contras.',
            titleEN: 'Algorithm & Fallibility',
            textEN: 'Has the algorithm been compared with alternative methods (e.g., manual vs. automated analysis) and does it demonstrate superiority or equivalence?',
            normaEN: 'NIST SP 800-86 § 2.2 (Method Comparison)',
            implicacaoEN: 'Without comparison, there is no proof that the chosen method is the best.',
            defesaEN: 'Comparative table of methods with pros/cons analysis.'
        },
        {
            id: 'D006',
            axis: 'D',
            title: 'Algoritmo & Falibilidade',
            text: 'O algoritmo é determinístico (mesmos inputs sempre geram mesmos outputs) ou estocástico (com elemento aleatório)?',
            norma: 'ISO/IEC 27037:2012 § 5.5 (Reprodutibilidade)',
            implicacao: 'Algoritmos estocásticos são difíceis de reproduzir em contradita.',
            defesa: 'Documentar seeds de aleatoriedade e garantir reprodutibilidade total.',
            titleEN: 'Algorithm & Fallibility',
            textEN: 'Is the algorithm deterministic (same inputs always produce the same outputs) or stochastic (with a random element)?',
            normaEN: 'ISO/IEC 27037:2012 § 5.5 (Reproducibility)',
            implicacaoEN: 'Stochastic algorithms are difficult to reproduce under cross-examination.',
            defesaEN: 'Document randomness seeds and ensure full reproducibility.'
        },
        {
            id: 'D007',
            axis: 'D',
            title: 'Algoritmo & Falibilidade',
            text: 'O código-fonte do algoritmo foi disponibilizado para revisão técnica da defesa (open-source ou under NDA)?',
            norma: 'Art. 327º CPP (Direito ao Contraditório)',
            implicacao: 'Sem acesso ao código, a defesa não consegue validar metodologia.',
            defesa: 'Fornecer código sob NDA, passando por revisão do tribunal.',
            titleEN: 'Algorithm & Fallibility',
            textEN: 'Was the algorithm\'s source code made available for technical review by the defense (open-source or under NDA)?',
            normaEN: 'Art. 327 CPP (Right to Adversarial Proceedings)',
            implicacaoEN: 'Without access to the code, the defense cannot validate the methodology.',
            defesaEN: 'Provide the code under NDA, subject to court review.'
        },
        {
            id: 'D008',
            axis: 'D',
            title: 'Algoritmo & Falibilidade',
            text: 'Foram documentados todos os pressupostos do algoritmo (ex: assume que SAF-T é fidedigno) e validados antes de usar?',
            norma: 'Art. 125º, al. a) CPP (Pressupostos Técnicos)',
            implicacao: 'Pressupostos não validados são ponto de ataque da defesa.',
            defesa: 'Lista de pressupostos com validação de cada um (ex: "SAF-T é fidedigno porque X").',
            titleEN: 'Algorithm & Fallibility',
            textEN: 'Were all of the algorithm’s assumptions documented (e.g., it assumes SAF-T is reliable) and validated before use?',
            normaEN: 'Art. 125, para. a) CPP (Technical Assumptions)',
            implicacaoEN: 'Unvalidated assumptions are a point of attack for the defense.',
            defesaEN: 'List of assumptions with validation for each (e.g., "SAF-T is reliable because X").'
        },
        {
            id: 'D009',
            axis: 'D',
            title: 'Algoritmo & Falibilidade',
            text: 'O algoritmo produz outputs explicáveis (ex: "omissão detectada porque fatura X não aparece em SAF-T") ou é caixa-preta?',
            norma: 'NIST SP 800-86 § 4.1 (Explicabilidade)',
            implicacao: 'Algoritmos caixa-preta são menos credíveis em tribunal.',
            defesa: 'Fornecer explicação legível para cada finding/recomendação do algoritmo.',
            titleEN: 'Algorithm & Fallibility',
            textEN: 'Does the algorithm produce explainable outputs (e.g., "omission detected because invoice X does not appear in SAF-T") or is it a black box?',
            normaEN: 'NIST SP 800-86 § 4.1 (Explainability)',
            implicacaoEN: 'Black-box algorithms are less credible in court.',
            defesaEN: 'Provide a readable explanation for each finding/recommendation of the algorithm.'
        },
        {
            id: 'D010',
            axis: 'D',
            title: 'Algoritmo & Falibilidade',
            text: 'Existe documentação de limites conhecidos do algoritmo (ex: "não detecta omissões <€100") e recomendações de uso?',
            norma: 'ISO/IEC 27037:2012 § 6.2 (Limitações Documentadas)',
            implicacao: 'Sem documentação de limites, o tribunal pode desconfiar de findings nos limites.',
            defesa: 'Manual de utilizador com seção "Limitações Conhecidas".',
            titleEN: 'Algorithm & Fallibility',
            textEN: 'Is there documentation of known algorithm limits (e.g., "does not detect omissions < €100") and usage recommendations?',
            normaEN: 'ISO/IEC 27037:2012 § 6.2 (Documented Limitations)',
            implicacaoEN: 'Without documentation of limits, the court may distrust findings at the boundaries.',
            defesaEN: 'User manual with a "Known Limitations" section.'
        },

        // ────────────────────────────────────────────────────────────────────
        // EIXO E: RESPONSABILIDADE TRIBUTÁRIA RGIT (Q41-Q50)
        // ────────────────────────────────────────────────────────────────────
        {
            id: 'E001',
            axis: 'E',
            title: 'Responsabilidade Tributária (RGIT)',
            text: 'O operador cumpriu a obrigação de declaração ao RGIT (Regime Geral das Infracções Tributárias) dentro do prazo legal?',
            norma: 'Art. 114.º RGIT (Prazos de Entrega e Incumprimento Declarativo)',
            implicacao: 'Falta de declaração dentro do prazo é infração autónoma.',
            defesa: 'Verificar data de entrega oficial da declaração vs. data limite (31 Maio do ano seguinte).',
            titleEN: 'Tax Liability (RGIT)',
            textEN: 'Did the operator comply with the reporting obligation under the RGIT (General Regime of Tax Infractions) within the legal deadline?',
            normaEN: 'Art. 114 RGIT (Filing Deadlines and Non-Compliance with Reporting Obligations)',
            implicacaoEN: 'Failure to file within the deadline is a standalone infraction.',
            defesaEN: 'Check the official filing date of the return vs. the deadline (May 31 of the following year).'
        },
        {
            id: 'E002',
            axis: 'E',
            title: 'Responsabilidade Tributária (RGIT)',
            text: 'A omissão de rendimentos detectada é intencional (dolosa) ou resultado de erro administrativo (culpa)?',
            norma: 'Art. 103.º RGIT (Fraude Fiscal — Graus de Culpabilidade)',
            implicacao: 'Intenção agrava significativamente as sanções (até 150% vs. 15% por engano).',
            defesa: 'Análise de padrões: se a omissão é sistemática, sugere intenção; se pontual, sugere erro.',
            titleEN: 'Tax Liability (RGIT)',
            textEN: 'Is the detected income omission intentional (willful) or the result of administrative error (negligence)?',
            normaEN: 'Art. 103 RGIT (Tax Fraud — Degrees of Culpability)',
            implicacaoEN: 'Intent significantly aggravates sanctions (up to 150% vs. 15% for mistake).',
            defesaEN: 'Pattern analysis: if the omission is systematic, it suggests intent; if isolated, it suggests error.'
        },
        {
            id: 'E003',
            axis: 'E',
            title: 'Responsabilidade Tributária (RGIT)',
            text: 'O operador realizou diligência devida para validar as retenções da plataforma (ex: solicitando esclarecimentos)?',
            norma: 'Art. 29.º n.º1 al. b) CIVA (Dever de Validação de Faturação)',
            implicacao: 'Negligência do operador em validar não elimina responsabilidade da plataforma.',
            defesa: 'Cronologia de contactos do operador com plataforma solicitando esclarecimentos.',
            titleEN: 'Tax Liability (RGIT)',
            textEN: 'Did the operator exercise due diligence to validate the platform\'s retentions (e.g., by requesting clarifications)?',
            normaEN: 'Art. 29, no. 1, b) CIVA (Duty to Validate Invoicing)',
            implicacaoEN: 'The operator\'s negligence in validating does not eliminate the platform\'s liability.',
            defesaEN: 'Timeline of the operator\'s contacts with the platform requesting clarifications.'
        },
        {
            id: 'E004',
            axis: 'E',
            title: 'Responsabilidade Tributária (RGIT)',
            text: 'A plataforma agiu de boa fé ao reter valores (ex: cumprindo legislação local) ou com intenção deliberada de sonegar?',
            norma: 'Art. 36º CIVA (Princípio da Boa Fé)',
            implicacao: 'Boa fé reduz culpabilidade; intenção deliberada agrava sanções.',
            defesa: 'Documentação de comunicação com autoridades sobre conformidade.',
            titleEN: 'Tax Liability (RGIT)',
            textEN: 'Did the platform act in good faith when retaining amounts (e.g., complying with local legislation) or with deliberate intent to evade?',
            normaEN: 'Art. 36 CIVA (Principle of Good Faith)',
            implicacaoEN: 'Good faith reduces culpability; deliberate intent aggravates sanctions.',
            defesaEN: 'Documentation of communications with authorities regarding compliance.'
        },
        {
            id: 'E005',
            axis: 'E',
            title: 'Responsabilidade Tributária (RGIT)',
            text: 'O imposto evadido durante a omissão foi posteriormente regularizado (ex: após descoberta) ou mantém-se em aberto?',
            norma: 'Art. 22.º RGIT (Regularização Espontânea — Atenuação de Sanções)',
            implicacao: 'Regularização espontânea reduz sanções; falta de regularização agrava.',
            defesa: 'Data de regularização, valor regularizado, juros e multas pagas.',
            titleEN: 'Tax Liability (RGIT)',
            textEN: 'Was the tax evaded during the omission subsequently regularized (e.g., after discovery), or does it remain outstanding?',
            normaEN: 'Art. 22 RGIT (Voluntary Regularization — Mitigation of Sanctions)',
            implicacaoEN: 'Voluntary regularization reduces sanctions; failure to regularize aggravates them.',
            defesaEN: 'Regularization date, regularized amount, interest and fines paid.'
        },
        {
            id: 'E006',
            axis: 'E',
            title: 'Responsabilidade Tributária (RGIT)',
            text: 'A plataforma era obrigada a emitir fatura (ex: pelo montante da retenção) ou estava isenta por legislação local?',
            norma: 'Art. 29.º n.º1 al. b) CIVA (Obrigação de Faturação)',
            implicacao: 'Isenção legal elimina responsabilidade; obrigação não cumprida constitui infração fiscal — Art. 103.º RGIT.',
            defesa: 'Documentação da legislação local aplicável (ex: país de residência da plataforma).',
            titleEN: 'Tax Liability (RGIT)',
            textEN: 'Was the platform required to issue an invoice (e.g., for the amount retained) or was it exempt under local legislation?',
            normaEN: 'Art. 29, no. 1, b) CIVA (Invoicing Obligation)',
            implicacaoEN: 'A legal exemption eliminates liability; an unfulfilled obligation constitutes a tax infraction — Art. 103 RGIT.',
            defesaEN: 'Documentation of the applicable local legislation (e.g., the platform\'s country of residence).'
        },
        {
            id: 'E007',
            axis: 'E',
            title: 'Responsabilidade Tributária (RGIT)',
            text: 'A retenção de valores pela plataforma ocorreu em território português (sujeita ao RGIT) ou em país estrangeiro?',
            norma: 'Art. 2º, n.º 1, al. i) CIVA (Territorialidade)',
            implicacao: 'Se em estrangeiro, a responsabilidade pode ser dividida (Art. 32.º RGPD / D.L. n.º 28/2019).',
            defesa: 'Domicílio fiscal da plataforma, local de residência do operador, ponto de execução.',
            titleEN: 'Tax Liability (RGIT)',
            textEN: 'Did the platform\'s retention of amounts occur in Portuguese territory (subject to the RGIT) or in a foreign country?',
            normaEN: 'Art. 2, no. 1, i) CIVA (Territoriality)',
            implicacaoEN: 'If abroad, liability may be apportioned (Art. 32 GDPR / Decree-Law No. 28/2019).',
            defesaEN: 'Platform\'s tax domicile, operator\'s place of residence, place of performance.'
        },
        {
            id: 'E008',
            axis: 'E',
            title: 'Responsabilidade Tributária (RGIT)',
            text: 'O operador tinha direito de dedução de IVA sobre as comissões realmente remuneradas ou sobre as comissões declaradas em SAF-T?',
            norma: 'Art. 19.º a 25.º CIVA (Direito à Dedução de IVA)',
            implicacao: 'Dedução excessiva baseada em valores inflacionados também constitui infração.',
            defesa: 'Reconciliação de deduções reclamadas vs. valores realmente despendidos.',
            titleEN: 'Tax Liability (RGIT)',
            textEN: 'Was the operator entitled to deduct VAT on the commissions actually paid, or on the commissions declared in SAF-T?',
            normaEN: 'Art. 19 to 25 CIVA (Right to Deduct VAT)',
            implicacaoEN: 'Excessive deduction based on inflated amounts also constitutes an infraction.',
            defesaEN: 'Reconciliation of claimed deductions vs. amounts actually disbursed.'
        },
        {
            id: 'E009',
            axis: 'E',
            title: 'Responsabilidade Tributária (RGIT)',
            text: 'A plataforma beneficiou-se de regime fiscal especial (ex: isenção startup) que poderia justificar a retenção sem declaração?',
            norma: 'Art. 9.º e Art. 53.º CIVA (Isenções e Regimes Especiais)',
            implicacao: 'Regime especial pode eliminar responsabilidade, mas deve ser legalmente comprovado.',
            defesa: 'Documentação de aprovação de regime especial pela autoridade tributária.',
            titleEN: 'Tax Liability (RGIT)',
            textEN: 'Did the platform benefit from a special tax regime (e.g., a startup exemption) that could justify retention without declaration?',
            normaEN: 'Art. 9 and Art. 53 CIVA (Exemptions and Special Regimes)',
            implicacaoEN: 'A special regime may eliminate liability, but it must be legally substantiated.',
            defesaEN: 'Documentation of the special regime approval by the tax authority.'
        },
        {
            id: 'E010',
            axis: 'E',
            title: 'Responsabilidade Tributária (RGIT)',
            text: 'Qual é a quota de responsabilidade entre operador (submissão de SAF-T) e plataforma (retenção e não-declaração)?',
            norma: 'Art. 125º CPP (Análise de Causalidade)',
            implicacao: 'Tribunal pode distribuir responsabilidade de forma proporcional.',
            defesa: 'Análise de causalidade: quem originou a omissão, quem poderia ter evitado.',
            titleEN: 'Tax Liability (RGIT)',
            textEN: 'What is the share of liability between the operator (SAF-T submission) and the platform (retention and non-declaration)?',
            normaEN: 'Art. 125 CPP (Causation Analysis)',
            implicacaoEN: 'The court may apportion liability proportionally.',
            defesaEN: 'Causation analysis: who originated the omission, who could have prevented it.'
        }
    ],

    getQuestionsByAxis: function(axis) {
        return this.questions.filter(q => q.axis === axis);
    },

    /**
     * HEURÍSTICA FORENSE: Score de Relevância Causal Automático
     * Calcula o TOP 3 dinâmico baseado nas métricas de análise
     * Determinístico: mesmas métricas = mesmo TOP 3
     * @param {Object} analysisMetrics - Métricas da análise (omissão, frota, caducidade, risco, revenueGap, expenseGap, saftGross, etc.)
     * @returns {Array} Top 3 questões ordenadas por relevância causal
     */
    computeTopQuestions: function(analysisMetrics) {
        console.log('[QUESTIONNAIRE-HEURISTIC] 🧠 Computando TOP 3 Dinâmico (Ponderação Estática por Eixos de Discrepância)...');

        const metrics = analysisMetrics || {
            omissionPct: 0,
            frotaSize: 0,
            periodsCovered: 0,
            cadducityYears: 0,
            verdict: 'RISCO_BAIXO',
            ivaOmitted: 0,
            btorDivergence: 0,
            revenueGap: 0,
            expenseGap: 0,
            saftGross: 0
        };

        // Pesos base por eixo (ajustados dinamicamente conforme as discrepâncias)
        let weights = { A: 0, B: 0, C: 0, D: 0, E: 0 };

        // --- REGRA 1: Gap de Despesas/Comissões (Expense Gap) ---
        if (metrics.expenseGap > 0 && metrics.omissionPct > 50) {
            weights.C += 40;  // Eixo C: Nexus-Zero / Apropriação Indevida
            weights.B += 20;  // Triangulação DAC7 vs SAF-T
        } else if (metrics.expenseGap > 0) {
            weights.C += 20;
        }

        // --- REGRA 2: Gap de Receita (SAF-T vs DAC7) ---
        if (metrics.revenueGap > 0 && metrics.saftGross && (metrics.revenueGap / metrics.saftGross) > 0.15) {
            weights.B += 40;  // Eixo B prioritário
            weights.E += 20;  // Responsabilidade Tributária RGIT
        } else if (metrics.revenueGap > 0) {
            weights.B += 20;
        }

        // --- REGRA 3: Omissão de IVA elevada ---
        if (metrics.ivaOmitted > 5000) {
            weights.B += 30;
            weights.E += 20;
        }

        // --- REGRA 4: Frota grande → cadeia de custódia e responsabilidade ---
        if (metrics.frotaSize > 50) {
            weights.A += 35;
            weights.E += 25;
        } else if (metrics.frotaSize > 10) {
            weights.A += 20;
            weights.E += 15;
        }

        // --- REGRA 5: Períodos plurianuais → caducidade e custódia ---
        if (metrics.periodsCovered >= 24) {
            weights.A += 25;
            weights.E += 20;
        }

        // --- REGRA 6: Verdict crítico → algoritmo e triangulação ---
        if (metrics.verdict === 'RISCO_CRÍTICO' || metrics.verdict === 'CRITICAL RISK') {
            weights.D += 35;
            weights.B += 30;
        } else if (metrics.verdict === 'RISCO_ALTO' || metrics.verdict === 'HIGH RISK') {
            weights.D += 20;
            weights.B += 20;
        }

        // --- REGRA 7: Caducidade iminente ---
        if (metrics.cadducityYears >= 3) {
            weights.E += 30;
        }

        console.log('[HEURISTIC] ⚖️ Weights Finais: A=' + weights.A + ', B=' + weights.B + ', C=' + weights.C + ', D=' + weights.D + ', E=' + weights.E);

        // Calcular score para cada questão (sem random, apenas pesos + ID como desempate determinístico)
        const scoredQuestions = this.questions.map(function(q) {
            const axisWeight = weights[q.axis] || 0;
            // Desempate determinístico baseado no ID (apenas para ordenação, sem influência no peso real)
            const idHash = q.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const deterministicModifier = (idHash % 1000) / 10000; // mínimo, apenas para quebrar empates
            const relevanceScore = axisWeight + deterministicModifier;
            return { question: q, score: relevanceScore };
        });

        scoredQuestions.sort((a, b) => b.score - a.score);
        const top3 = scoredQuestions.slice(0, 3).map(sq => ({
            id: sq.question.id,
            axis: sq.question.axis,
            title: sq.question.title,
            text: sq.question.text,
            norma: sq.question.norma,
            implicacao: sq.question.implicacao,
            defesa: sq.question.defesa,
            // ── FASE 3 — propagação dos campos EN-US (i18n) ──────────────────
            // Sem estes campos, UNIFED_RenderTop3() e o PDF (secção 12) não
            // têm acesso às traduções, mesmo que existam em this.questions.
            titleEN: sq.question.titleEN,
            textEN: sq.question.textEN,
            normaEN: sq.question.normaEN,
            implicacaoEN: sq.question.implicacaoEN,
            defesaEN: sq.question.defesaEN,
            // ── FIM FASE 3 ────────────────────────────────────────────────────
            relevanceScore: sq.score.toFixed(2)
        }));

        console.log('[QUESTIONNAIRE-HEURISTIC] ✅ TOP 3 Computado (estático por eixos de discrepância)');
        top3.forEach((q, i) => {
            console.log('  ' + (i+1) + '. ' + q.id + ' (Eixo ' + q.axis + ') — Score: ' + q.relevanceScore);
        });
        return top3;
    },

    exportAsJSON: function() {
        return {
            metadata: this.metadata,
            questions: this.questions,
            exportDate: new Date().toISOString()
        };
    },

    /**
     * =========================================================================
     * FASE 3.1 — MODELO ESTATÍSTICO DE CÁLCULO DE DANO (ASSINATURA DUAL)
     * =========================================================================
     * Aceita dois modos de invocação sem quebrar chamadas legadas:
     *
     *   MODO A — ESCALAR (legado, compatibilidade retroactiva):
     *     calcularDanoConservador(mediaMensal: number, nMotoristas: number)
     *     → Aplica intervalo de confiança sintético baseado em variância
     *       assumida de 15% sobre a média (conservador mas fundamentado).
     *
     *   MODO B — VECTOR (novo, estatisticamente defensável em juízo):
     *     calcularDanoConservador(seriesMensais: number[], nMotoristas: number)
     *     → Calcula média e desvio padrão amostral a partir dos valores reais
     *       mensais. Aplica Z = 2.576 (IC 99%) sobre o erro padrão da média.
     *       Elimina o multiplicador fixo 0.85 (heurística arbitrária).
     *
     * A detecção do modo é feita por Array.isArray(seriesMensais).
     * Nenhuma chamada existente com assinatura escalar é afectada.
     *
     * Norma: Art. 344.º, n.º 2 CC (certeza do cálculo); NIST SP 800-86 §3.
     *
     * @param {number|Array<number>} entradaDano - Escalar (€/mês) ou vector de valores mensais
     * @param {number} nMotoristas - Universo amostral de operadores (default 38.000)
     * @returns {number} Materialidade financeira defensável (€/ano); nunca negativo
     */
    calcularDanoConservador: function(entradaDano, nMotoristas = 38000) {
        // ── Validação do universo amostral ────────────────────────────────────
        if (typeof nMotoristas !== 'number' || isNaN(nMotoristas) || nMotoristas <= 0) {
            console.error('[MODELO ESTATÍSTICO] Erro: nMotoristas deve ser um número positivo.');
            return 0;
        }

        // ── MODO B: entrada é vector de valores mensais ───────────────────────
        if (Array.isArray(entradaDano)) {
            const seriesMensais = entradaDano.filter(v => typeof v === 'number' && !isNaN(v) && v >= 0);
            if (seriesMensais.length < 2) {
                console.error('[MODELO ESTATÍSTICO] Erro: vector insuficiente (mínimo 2 valores) para cálculo de variância.');
                return 0;
            }
            const n            = seriesMensais.length;
            const mediaAmostral = seriesMensais.reduce((a, b) => a + b, 0) / n;
            // Variância amostral (denominador n-1 de Bessel)
            const variancia    = seriesMensais.reduce((acc, v) => acc + Math.pow(v - mediaAmostral, 2), 0) / (n - 1);
            const desvioPadrao = Math.sqrt(variancia);
            // Erro padrão da média e margem de erro a IC 99% (Z = 2.576)
            const Z_99         = 2.576;
            const erroPadrao   = desvioPadrao / Math.sqrt(n);
            const margemErro   = Z_99 * erroPadrao;
            const mediaConservadora = Math.max(0, mediaAmostral - margemErro);
            const danoAnual    = mediaConservadora * nMotoristas * 12;
            console.log(
                `[MODELO ESTATÍSTICO — MODO B] n=${n} meses | Média=€${mediaAmostral.toFixed(2)} | ` +
                `DP=€${desvioPadrao.toFixed(2)} | Margem IC99%=€${margemErro.toFixed(2)} | ` +
                `Média Conservadora=€${mediaConservadora.toFixed(2)} | Dano Anual=€${danoAnual.toFixed(2)}`
            );
            return danoAnual;
        }

        // ── MODO A: entrada é escalar (compatibilidade retroactiva) ───────────
        const mediaMensal = entradaDano;
        if (typeof mediaMensal !== 'number' || isNaN(mediaMensal) || mediaMensal < 0) {
            console.error('[MODELO ESTATÍSTICO] Erro: mediaMensal deve ser um número não negativo.');
            return 0;
        }
        // Variância sintética: assume desvio padrão = 15% da média (conservador).
        // IC 99% (Z = 2.576) sobre erro padrão estimado com n=12 meses como proxy.
        const Z_99_escalar     = 2.576;
        const dpSintetico      = mediaMensal * 0.15;
        const erroPadraoProxy  = dpSintetico / Math.sqrt(12);
        const margemErroProxy  = Z_99_escalar * erroPadraoProxy;
        const mediaConservadora = Math.max(0, mediaMensal - margemErroProxy);
        const dano             = mediaConservadora * nMotoristas * 12;
        console.log(
            `[MODELO ESTATÍSTICO — MODO A] Entrada escalar: €${mediaMensal}/mês | ` +
            `DP sintético (15%)=€${dpSintetico.toFixed(2)} | Margem IC99% (n=12 proxy)=€${margemErroProxy.toFixed(2)} | ` +
            `Média Conservadora=€${mediaConservadora.toFixed(2)} | Dano Anual=€${dano.toFixed(2)}`
        );
        return dano;
    }
};

// Disponibilizar também como função global para compatibilidade com chamadas externas
// Assinatura mantida: aceita escalar ou vector como primeiro argumento.
window.calcularDanoConservador = function(entradaDano, nMotoristas = 38000) {
    return window.UNIFED_QUESTIONNAIRE.calcularDanoConservador(entradaDano, nMotoristas);
};

// Utilitário auxiliar: constrói o vector seriesMensais[] a partir de UNIFEDSystem.monthlyData
// Permite chamadas Modo B sem refatorar os locais de invocação existentes.
window.calcularDanoComSeriesMensais = function(nMotoristas = 38000) {
    const monthlyData = (window.UNIFEDSystem && window.UNIFEDSystem.monthlyData) || {};
    const monthKeys   = Object.keys(monthlyData).sort();
    if (monthKeys.length < 2) {
        console.warn('[MODELO ESTATÍSTICO] monthlyData insuficiente — a usar calcularDanoConservador em Modo A.');
        const analysis = (window.UNIFEDSystem && window.UNIFEDSystem.analysis) || {};
        const cross    = analysis.crossings || {};
        const mediaMensalFallback = cross.discrepanciaMensalMedia || 0;
        return window.calcularDanoConservador(mediaMensalFallback, nMotoristas);
    }
    const seriesMensais = monthKeys.map(m =>
        Math.abs((monthlyData[m].despesas || 0) - (monthlyData[m].faturaPlataforma || 0))
    );
    return window.UNIFED_QUESTIONNAIRE.calcularDanoConservador(seriesMensais, nMotoristas);
};

console.log('[UNIFED-QUESTIONNAIRE] ✅ Multi-Axis Adversarial Questionnaire Loaded (50 Q, 5 Axes)');
console.log('[UNIFED-QUESTIONNAIRE] ✅ Modelo Estatístico para Cálculo de Dano integrado (calcularDanoConservador)');