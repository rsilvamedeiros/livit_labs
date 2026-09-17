# Arquitetura de informação e jornadas

## Mapa público desejado

```text
/
├── /labs
│   ├── /labs/produtos
│   ├── /labs/produtos/:slug
│   ├── /labs/ingredientes
│   └── /labs/qualidade
├── /invest
│   ├── /invest/mercado
│   ├── /invest/carteira
│   └── /invest/ordens
├── /flow
│   ├── /flow/hoje
│   ├── /flow/habitos
│   ├── /flow/metas
│   └── /flow/insights
├── /sobre
├── /conteudos
├── /privacidade
└── /termos
```

Áreas autenticadas podem futuramente usar `/app/invest` e `/app/flow`. Essa separação evita misturar páginas públicas indexáveis com aplicações privadas.

## Landing institucional

A página `/` deve:

1. Explicar a promessa central da Livit em uma frase.
2. Apresentar os três pilares sem privilegiar artificialmente um deles.
3. Mostrar como os produtos se conectam.
4. Permitir explorar cada produto sem exigir cadastro.
5. Demonstrar confiança, transparência e responsabilidade.
6. Encerrar com chamadas específicas para Labs, Invest e Flow.

## Jornada: conhecer o ecossistema

```text
Descoberta → Entendimento da proposta → Escolha de um pilar
           → Página do produto → Demonstração → Cadastro ou próxima ação
```

## Jornada: Flow

```text
Criar conta → Escolher um objetivo → Criar ou aceitar uma rotina sugerida
            → Check-in diário → Revisão semanal → Ajustar rotina
```

## Jornada: Invest

```text
Visão geral → Selecionar ativo → Analisar informações
            → Simular ordem → Revisar → Confirmar → Acompanhar status
```

## Navegação global

- A marca Livit sempre leva à landing institucional.
- Um seletor de produtos permite alternar entre Labs, Invest e Flow.
- A navegação interna de cada produto usa sua própria cor de destaque.
- Avisos de ambiente simulado aparecem persistentemente no Invest enquanto aplicável.
- O usuário nunca deve confundir uma ação educativa com uma transação real.

