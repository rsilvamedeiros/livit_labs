# Roadmap de produto

O roadmap organiza resultados, não datas rígidas. Cada fase deve ser validada antes da próxima.

## Fase 0 — Fundação documental

**Objetivo:** alinhar visão e reduzir retrabalho.

- [x] Definir Livit como marca-mãe.
- [x] Definir Labs, Invest e Flow.
- [x] Mapear arquitetura de informação desejada.
- [x] Registrar direção técnica e visual.
- [ ] Revisar linguagem legal de saúde e investimentos.
- [ ] Transformar itens do roadmap em backlog priorizado.

## Fase 1 — Livit institucional

**Objetivo:** explicar e divulgar o ecossistema.

- [x] Landing pública em `/`.
- [x] Seções para corpo, patrimônio e rotina.
- Páginas `/sobre`, `/privacidade` e `/termos`.
- Metadados sociais, SEO técnico e dados estruturados.
- Analytics com consentimento e eventos documentados.
- [x] Migração da experiência Labs para `/labs`.

**Critério de saída:** uma pessoa que não conhece a Livit compreende os três produtos e encontra o próximo passo em poucos segundos.

## Fase 2 — Design system

**Objetivo:** dar consistência e velocidade às três verticais.

- Tokens semânticos e temas por produto.
- Tipografia, grid, espaçamento e iconografia.
- Button, link, input, select, dialog, toast, card e skeleton.
- Componentes de dados: tabela, métrica, gráfico e empty state.
- Documentação visual e testes de acessibilidade.

## Fase 3 — Livit Flow MVP

**Objetivo:** validar criação e manutenção de hábitos.

- [ ] Onboarding leve.
- [x] Visão “Hoje”.
- [ ] CRUD completo de hábitos e metas.
- [x] Check-in interativo e histórico semanal demonstrativo.
- [ ] Persistência local por repository.
- [ ] PWA básica e funcionamento offline.
- [ ] Testes E2E da jornada principal.

**Critério de saída:** usuário cria um hábito, registra progresso por uma semana e entende sua consistência.

## Fase 4 — Evolução do Livit Invest

**Objetivo:** aproximar o demonstrador de uma plataforma financeira real.

- Separação do domínio `invest`.
- API REST mockada por contrato OpenAPI.
- Feed WebSocket simulado.
- Livro de ofertas e status de ordens.
- Tratamento de indisponibilidade, reconexão e concorrência.
- Gráficos acessíveis e virtualização de grandes listas.

## Fase 5 — Evolução do Livit Labs

**Objetivo:** transformar conteúdo de marca em experiência de produto confiável.

- Catálogo e detalhes de produto.
- Biblioteca de ingredientes.
- Conteúdo e busca.
- Rastreabilidade e central de qualidade.
- Revisão jurídica de todas as alegações.

## Fase 6 — Conta Livit

**Objetivo:** integrar produtos sem misturar dados indevidamente.

- Identidade única.
- Central de consentimentos.
- Preferências e notificações.
- Navegação entre produtos autenticados.
- Integrações opcionais entre Flow, Labs e Invest.

## Backlog futuro

- Aplicativo móvel ou shell instalável avançado.
- Internacionalização.
- Personalização assistida por IA.
- Integrações com calendário e dispositivos.
- Backend cloud e infraestrutura como código.
- Experimentos controlados com métricas éticas.
