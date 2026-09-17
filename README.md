# Livit Invest

Plataforma demonstrativa de investimentos construída em Angular 21. O projeto transforma a antiga landing page da Livit Labs em um produto financeiro responsivo, acessível e orientado a domínio.

## O que demonstra

- Angular standalone, Signals, controle de fluxo moderno e lazy loading
- Estado reativo desacoplado da fonte de dados por `MarketRepository`
- Dashboard de patrimônio, carteira, radar de ativos e gráficos SVG leves
- Boleta com Reactive Forms, validação e feedback assíncrono
- Contratos TypeScript imutáveis prontos para uma API REST real
- Change detection `OnPush`, budgets de bundle e layout responsivo
- Testes unitários com Vitest e boas práticas de acessibilidade

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
│   └── dashboard/  # feature carregada sob demanda
└── shared/          # componentes visuais reutilizáveis
```

Para integrar um backend, implemente `MarketRepository` com `HttpClient` e altere o provider em `app.config.ts`. Para cotações em tempo real, o mesmo adapter pode expor um stream WebSocket sem acoplar os componentes ao transporte.

> Dados e ordens são simulados. O projeto não realiza operações financeiras reais.
