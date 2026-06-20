/**
 * ============================================================================
 * UNIFED-PROBATUM | VERSION MANIFEST (patch_unifed_macro_v13 — P13)
 * ============================================================================
 * Fonte única de verdade para a versão do sistema.
 * Carregado PRIMEIRO em index.html (antes de qualquer outro script).
 * Norma: D.L. n.º 28/2019 — rastreabilidade de versões de software técnico-jurídica.
 * ============================================================================
 */
window.UNIFED_VERSION = Object.freeze({
    full:    'v1.0-COMMERCIAL-LITIGATION-P3.2+F4',
    major:   1,
    minor:   0,
    patch:   4,
    build:   '2026-06-15',
    corte:   'v1.0-COMMERCIAL-LITIGATION',
    // Histórico de patches para rastreabilidade forense (D.L. n.º 28/2019)
    history: Object.freeze([
        { patch: 'P13',   build: '2025-03-15', desc: 'Versão inicial COMMERCIAL-LITIGATION' },
        { patch: 'P3.1a', build: '2026-06-12', desc: 'Substituição léxica global (164 ocorrências); guard Merkle; Z-Score IC99%; scrubbing V8; TSA config' },
        { patch: 'P3.1b', build: '2026-06-13', desc: 'Cirurgias 1-5: TOP3_READY; Z-Score integrado; operatorToken; rota TSA 502/504; alerta forense' },
        { patch: 'P3.1c', build: '2026-06-13', desc: 'Hash UPPERCASE normalizado; checksum dinâmico; PATCH_REGISTRY actualizado; sintaxe JS validada' },
        { patch: 'P3.2',  build: '2026-06-13', desc: 'Retificações cirúrgicas DEMO: RGIT léxico (nexus/enrichment/script/translations/questionnaire); IVA-6% label; checksumEsperado fallback; Invalid Date (timestampUnix); selado lógica unificada (hash≥16 chars); sessionId dinâmico em activateDemoMode; masterHash→activeForensicSession sync (2 pontos); macro prioridade cross.impacto*' },
        { patch: 'F1',    build: '2026-06-14', desc: 'Fix duplo alerta "TOP3 Confirmado" (guard dataset.hooked partilhado entre index.html e script.js); remoção de unifed_contraperiria_export__1_.js (órfão)' },
        { patch: 'F2',    build: '2026-06-14', desc: 'Fix "TENDÊNCIA: undefined" no bloco ATF do PDF (fallback bilingue "DADOS INSUFICIENTES"/"INSUFFICIENT DATA", sem alterar motor ATF); i18n de renderCustodyLog e showBlockchainExplain (painel Cadeia de Custódia + modal de verificação)' },
        { patch: 'F3',    build: '2026-06-14', desc: 'Tradução EN-US completa do questionário (50 perguntas x 5 campos = 250 strings, campos *EN aditivos); UNIFED_RenderTop3 e computeTopQuestions selecionam por currentLang com fallback PT; PDF secção 12 (Questionário TOP3) bilingue' },
        { patch: 'F4',    build: '2026-06-15', desc: 'CIR-01/01b: gerarMasterHashFinal UPPERCASE uniforme (3 paths: sha256Hash/CryptoJS/WebCrypto); CIR-02: monthlyData+faturaPlataforma injectado em activateDemoMode (fix Z-Score IC99% 534,15€ vs 83,98€); CIR-03: safeTranslate refactorizado (eliminação duplo if/else + redundância isContentEditable); CIR-04: expectedHashes SHA-256 reais em unifed_architecture_report.js (substituição de valores fictícios por hash calculado); CIR-05: DAC7 "Comunicação de Operações" (ex-"Reportagem"); CIR-06: "Palavra-passe" PT-PT estrito em auth.js; CIR-07: "terminate and sanitize" + AO90 panel.html/architecture_report; F4-MEDIA: campo analysis.mediaMensalReal criado em performForensicCrossings e exposto como contrato de interface; _syncPureDashboard pure-wc-finding-4 migrado de cadeia opaca (impactoMensalMercado/38000) para análise.mediaMensalReal; version.js actualizado P3.2+F4' },
        { patch: 'RETIF-ZERO-ENTROPY-01/02', build: '2026-06-19', status: 'DEPRECATED_F11', desc: 'unifed_triada_export.js: _fallbackId derivado de CryptoJS.SHA256(masterHash) em vez de Date.now() (zero entropia temporal); deepSanitizePayload bloqueada se demoMode!==true. Estado: substituído por correções subsequentes da Fase 12 — mantido para rastreabilidade histórica (D.L. n.º 28/2019).' },
        { patch: 'RETIF-MERKLE-SYNC-01/02', build: '2026-06-19', status: 'ACTIVE_F12', desc: 'unifed_merkle_engine.js: eidas2Compliant:true (literal) substituído por leitura dinâmica de UNIFEDSystem.config.eidas2Compliant; unifed_architecture_report.js: hash de unifed_merkle_engine.js sincronizado em MODULE_INTEGRITY e expectedHashes — circularidade da cadeia de custódia restaurada.' }
    ])
});
console.log('[UNIFED-VERSION] ✅ Version manifest carregado:', window.UNIFED_VERSION.full);
