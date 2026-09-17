# Métricas, segurança e governança

## Métrica norteadora

**Pessoas que completam uma ação útil e compreendida em um produto Livit por semana.**

“Útil” significa uma ação que aproxima o usuário de um objetivo declarado; abrir o aplicativo ou receber uma notificação não conta isoladamente.

## Métricas por produto

### Institucional

- Compreensão dos três produtos em pesquisa qualitativa.
- Navegação qualificada para cada vertical.
- Performance, acessibilidade e conclusão de chamadas principais.

### Labs

- Visualização de informações de composição e qualidade.
- Busca resolvida sem contato de suporte.
- Retenção de conteúdo educativo, sem usar alegações de saúde como métrica persuasiva.

### Invest

- Ordens simuladas concluídas sem erro.
- Tempo para compreender patrimônio e risco.
- Taxa de erros recuperados e estabilidade do feed.

### Flow

- Hábitos com check-in após 7 e 28 dias.
- Rotinas ajustadas pelo próprio usuário.
- Percepção de utilidade, não apenas sequência acumulada.

## Privacidade

- Consentimento granular por finalidade e por produto.
- Minimização, retenção definida e exclusão verificável.
- Exportação de dados em formato portável.
- Dados de saúde e financeiros tratados como altamente sensíveis.
- Integração entre verticais desativada por padrão.
- Inventário de dados e base legal documentados antes de produção.

## Segurança

- Threat modeling para autenticação, ordens e integrações.
- Dependências monitoradas e atualizadas.
- CSP, proteção contra XSS/CSRF e headers de segurança.
- Logs sem tokens, valores sensíveis ou conteúdo pessoal desnecessário.
- Rate limiting, idempotência e trilha de auditoria no backend.
- Plano de resposta a incidentes antes de operar dados reais.

## IA responsável

- Toda sugestão informa que foi gerada ou assistida por IA.
- Usuário revisa e confirma mudanças.
- Não enviar dados financeiros ou de saúde a modelos sem consentimento e contrato adequados.
- Respostas não substituem profissionais de saúde ou investimentos.
- Prompts, modelos e avaliações relevantes devem ser versionados.
- Avaliar segurança, utilidade e vieses antes de liberar uma funcionalidade.

## Definição de pronto

Uma funcionalidade está pronta quando:

- atende aos critérios de aceitação;
- possui estados de loading, vazio, erro e sucesso;
- funciona por teclado e com tecnologias assistivas relevantes;
- possui testes proporcionais ao risco;
- não expõe dados sensíveis;
- tem eventos analíticos documentados, se aplicável;
- atualiza documentação e contratos afetados;
- passa por build de produção sem regressão de budget.

