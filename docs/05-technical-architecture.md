# Arquitetura técnica

## Objetivos

- Permitir que cada produto evolua sem duplicar fundamentos.
- Manter carregamento inicial pequeno por meio de lazy loading.
- Isolar regras de domínio de HTTP, WebSocket e armazenamento.
- Preparar autenticação e observabilidade sem antecipar complexidade desnecessária.

## Estratégia inicial

Um **monólito frontend modular em Angular** é suficiente para a fase atual. Labs, Invest e Flow devem ser features isoladas dentro da mesma aplicação. Microfrontends só devem ser considerados quando existirem times independentes, deploys realmente autônomos e custo de coordenação mensurável.

```text
src/app/
├── core/
│   ├── auth/
│   ├── config/
│   ├── http/
│   ├── observability/
│   └── shell/
├── features/
│   ├── institutional/
│   ├── labs/
│   ├── invest/
│   └── flow/
└── shared/
    ├── ui/
    ├── directives/
    └── utilities/
```

O repositório ainda não segue integralmente essa estrutura; ela representa o estado desejado para as próximas fases.

## Padrões

### Componentes

- Standalone components.
- `ChangeDetectionStrategy.OnPush` por padrão.
- Signals para estado local e derivado.
- Componentes de apresentação não acessam HTTP diretamente.
- Rotas de produto carregadas sob demanda.

### Dados

Cada domínio define portas abstratas, como `MarketRepository`. Adapters concretos atendem mocks, REST, WebSocket ou armazenamento local.

```text
Component → Store/Facade → Repository → REST/WebSocket/Storage
```

### Estado

- Estado de componente: Signals locais.
- Estado da feature: store/facade fornecida no escopo da rota.
- Estado global: apenas sessão, preferências e configuração transversal.
- Nenhuma biblioteca global de estado será adotada antes de existir necessidade comprovada.

## Contratos de API

- OpenAPI como fonte de verdade para REST.
- Eventos assíncronos versionados e documentados.
- Datas em ISO 8601 e valores monetários com moeda explícita.
- Identificadores opacos; não expor sequência interna de banco.
- Erros seguem um envelope estável com código, mensagem segura e `correlationId`.

Exemplo:

```json
{
  "code": "ORDER_PRICE_CHANGED",
  "message": "A cotação mudou. Revise a ordem antes de confirmar.",
  "correlationId": "req_01J..."
}
```

## Tempo real

O Invest poderá receber cotações e status de ordens por WebSocket. O adapter deve:

- reconectar com backoff e jitter;
- informar qualidade da conexão;
- descartar mensagens antigas por sequência ou timestamp;
- reduzir frequência de renderização quando necessário;
- usar REST como fallback para recuperar o estado canônico.

## Persistência do Flow

O MVP pode usar repository local para prototipação. Uma evolução deve sincronizar com API, manter fila offline idempotente e resolver conflitos de forma previsível.

## Autenticação

- OIDC/OAuth 2.1 com Authorization Code + PKCE.
- Sessão preferencialmente protegida por cookie `HttpOnly`, `Secure` e `SameSite` adequado.
- Autorização validada no backend; guards melhoram UX, mas não são controle de segurança.
- Step-up authentication para operações financeiras sensíveis.

## Qualidade

- Testes unitários para regras e estado.
- Testes de componente para formulários e acessibilidade.
- Testes E2E para jornadas críticas.
- Contract tests para adapters de API.
- Budgets de bundle e Lighthouse acompanhados no CI.
- Formatação, análise estática, testes e build bloqueiam merge quando falham.

## Ambientes

```text
local → preview por pull request → staging → produção
```

Configurações são injetadas em runtime ou build e nunca contêm segredos no frontend.

