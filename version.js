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
    full:    'v1.0-COMMERCIAL-LITIGATION-P3.2+F3',
    major:   1,
    minor:   0,
    patch:   3,
    build:   '2026-06-13',
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
        { patch: 'F3',    build: '2026-06-14', desc: 'Tradução EN-US completa do questionário (50 perguntas x 5 campos = 250 strings, campos *EN aditivos); UNIFED_RenderTop3 e computeTopQuestions selecionam por currentLang com fallback PT; PDF secção 12 (Questionário TOP3) bilingue' }
    ])
});
console.log('[UNIFED-VERSION] ✅ Version manifest carregado:', window.UNIFED_VERSION.full);
