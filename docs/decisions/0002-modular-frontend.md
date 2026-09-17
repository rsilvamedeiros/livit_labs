# ADR 0002 — Monólito frontend modular

- **Status:** Aceito
- **Data:** 2026-09-17

## Contexto

O ecossistema terá experiências diferentes, mas ainda é desenvolvido como um único produto e por uma estrutura pequena. Microfrontends adicionariam deploy, dependências, comunicação e observabilidade distribuídos antes de existir essa necessidade.

## Decisão

Manter uma aplicação Angular única, organizada por features carregadas sob demanda e contratos de domínio isolados.

## Consequências

- Entrega e desenvolvimento local continuam simples.
- Componentes e identidade podem ser compartilhados diretamente.
- Limites de feature devem ser respeitados por estrutura e revisão.
- A arquitetura pode evoluir quando times e ciclos de deploy justificarem a separação.

## Alternativas consideradas

- Microfrontends desde o início: rejeitados pelo custo operacional prematuro.
- Três repositórios independentes: rejeitados por duplicar infraestrutura e design system nesta fase.

