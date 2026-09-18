# Ecossistema Livit

> A visão completa de produto, marca e engenharia está em [docs/README.md](./docs/README.md).

Ecossistema digital construído em Angular 21. A experiência principal moderniza a marca original Livit Labs, enquanto o módulo Livit Invest demonstra um produto financeiro responsivo, acessível e orientado a domínio.

## O que demonstra

- Angular standalone, Signals, controle de fluxo moderno e lazy loading
- Estado reativo desacoplado da fonte de dados por `MarketRepository`
- Landing institucional do ecossistema Livit em `/`
- Experiência Livit Labs em `/labs`, fiel à identidade visual roxa original
- Dashboard Livit Invest em `/invest`, com patrimônio, carteira e gráficos SVG leves
- Dashboard Livit Flow em `/flow`, com hábitos, metas e progresso semanal
- Boleta com Reactive Forms, validação e feedback assíncrono
- Contratos TypeScript imutáveis prontos para uma API REST real
- Change detection `OnPush`, budgets de bundle e layout responsivo
- Testes unitários com Vitest e boas práticas de acessibilidade
- Iconografia profissional e tree-shakable com `@lucide/angular`

## Executar

Requer Node.js 22.12+ (este projeto foi validado com Node 22.21).

```bash
npm install --legacy-peer-deps
npm start
```

Acesse `http://localhost:4200`.

## Qualidade

```bash
npm test -- --watch=false
npm run build
```

## Arquitetura

```text
src/app/
├── core/
│   ├── data/       # porta de dados e adapter mock
│   ├── models/     # contratos do domínio
│   └── state/      # estado e regras da carteira
├── features/
│   ├── labs/       # experiência principal da marca
│   └── dashboard/  # módulo Livit Invest sob demanda
└── shared/          # componentes visuais reutilizáveis
```

Para integrar um backend, implemente `MarketRepository` com `HttpClient` e altere o provider em `app.config.ts`. Para cotações em tempo real, o mesmo adapter pode expor um stream WebSocket sem acoplar os componentes ao transporte.

> Dados e ordens são simulados. O projeto não realiza operações financeiras reais.
