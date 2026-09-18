# Identidade e design system

## Arquitetura da marca

**Livit** é a marca-mãe. Cada produto usa o mesmo nome, tipografia-base e princípios de interação, com uma cor de destaque própria.

| Contexto | Cor principal | Função |
|---|---|---|
| Livit institucional | `#4D226D` | Conectar as verticais |
| Livit Labs | `#6C3695` | Bem-estar, origem da marca |
| Livit Invest | `#C8F560` sobre `#09100E` | Precisão e mercado em tempo real |
| Livit Flow | `#6D6AF4` com `#FF8A72` | Movimento, foco e progresso |

As cores do Flow são uma direção inicial e devem passar por validação de contraste antes da implementação.

## Personalidade

- Clara, humana e confiante.
- Tecnológica sem parecer fria.
- Otimista sem fazer promessas irreais.
- Precisa em contextos financeiros e de saúde.

## Voz

Preferir: “Veja sua evolução nesta semana.”

Evitar: “Você falhou sua meta novamente.”

Preferir: “Esta é uma simulação. Revise os valores antes de continuar.”

Evitar: “Lucro garantido com um clique.”

## Fundamentos visuais

- Tipografia de interface: Manrope ou equivalente sem serifa.
- Tipografia editorial: Georgia como fallback até definição de fonte licenciada.
- Tipografia de dados: DM Mono.
- Iconografia de interface: Lucide via `@lucide/angular`, com traço consistente e importação individual por componente.
- Espaçamento baseado em múltiplos de 4 px.
- Componentes com foco visível e área interativa mínima de 44 × 44 px.
- Movimento deve informar mudança de estado e respeitar `prefers-reduced-motion`.
- Gráficos nunca dependem apenas de cor; devem incluir rótulos, sinais ou padrões.

Símbolos Unicode podem aparecer em conteúdo editorial, mas ações, navegação e conceitos funcionais devem preferir ícones Lucide para manter consistência visual e acessibilidade.

## Tokens pretendidos

```text
brand.*       identidade institucional
labs.*        experiência de bem-estar
invest.*      experiência financeira
flow.*        experiência de hábitos
semantic.*    sucesso, atenção, erro e informação
surface.*     fundos e elevação
content.*     texto e ícones
```

Os tokens devem substituir valores hexadecimais locais conforme o design system for extraído para componentes compartilhados.

## Acessibilidade

- Meta: WCAG 2.2 nível AA.
- Contraste mínimo de 4,5:1 para texto normal.
- Navegação completa por teclado.
- HTML semântico antes de ARIA.
- Estados de carregamento e mensagens anunciados por leitores de tela.
- Conteúdo compreensível sem animações ou imagens.
