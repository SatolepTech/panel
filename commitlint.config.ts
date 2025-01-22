export default {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-conventionalcommits',
  prompt: {
    settings: {},
    messages: {
      skip: ':skip',
      max: 'Máximo de %d caracteres',
      min: 'No mínimo %d caracteres',
      emptyWarning: 'Não pode estar vazio',
      upperLimitWarning: 'Acima do limite',
      lowerLimitWarning: 'Abaixo do limite'
    },
    questions: {
      type: {
        description:
          'Selecione o tipo de alteração que você está fazendo:',
        enum: {
          feat: {
            description: 'Uma nova funcionalidade',
            title: 'Funcionalidades',
            emoji: '✨'
          },
          fix: {
            description: 'Correção de um bug',
            title: 'Correções de Bug',
            emoji: '🐛'
          },
          docs: {
            description: 'Alterações apenas na documentação',
            title: 'Documentação',
            emoji: '📚'
          },
          style: {
            description:
              'Alterações que não afetam o significado do código (espaços em branco, formatação, ponto e vírgula ausente, etc)',
            title: 'Estilos',
            emoji: '💎'
          },
          refactor: {
            description:
              'Uma alteração no código que não corrige um bug nem adiciona uma funcionalidade',
            title: 'Refatoração de Código',
            emoji: '📦'
          },
          perf: {
            description:
              'Uma alteração no código que melhora o desempenho',
            title: 'Melhorias de Desempenho',
            emoji: '🚀'
          },
          test: {
            description:
              'Adicionando testes ausentes ou corrigindo testes existentes',
            title: 'Testes',
            emoji: '🚨'
          },
          build: {
            description:
              'Alterações que afetam o sistema de build ou dependências externas (exemplos: gulp, broccoli, npm)',
            title: 'Builds',
            emoji: '🛠'
          },
          ci: {
            description:
              'Alterações nos arquivos e scripts de configuração de CI (exemplos: Travis, Circle, BrowserStack, SauceLabs)',
            title: 'Integrações Contínuas',
            emoji: '⚙️'
          },
          chore: {
            description:
              'Outras alterações que não modificam arquivos de código ou teste',
            title: 'Tarefas',
            emoji: '♻️'
          },
          revert: {
            description: 'Reverte um commit anterior',
            title: 'Reversões',
            emoji: '🗑'
          }
        }
      },
      scope: {
        description:
          'Qual é o escopo desta alteração (ex.: componente ou nome do arquivo)?'
      },
      subject: {
        description:
          'Escreva uma descrição curta e imperativa da alteração'
      },
      body: {
        description: 'Forneça uma descrição mais longa da alteração'
      },
      isBreaking: {
        description: 'Há alterações que quebram compatibilidade?'
      },
      breakingBody: {
        description:
          'Um commit com BREAKING CHANGE exige uma descrição detalhada. Insira uma descrição mais longa do próprio commit'
      },
      breaking: {
        description:
          'Descreva as alterações que quebram compatibilidade'
      },
      isIssueAffected: {
        description: 'Esta alteração afeta algum problema aberto?'
      },
      issuesBody: {
        description:
          'Se problemas forem encerrados, o commit exige uma descrição detalhada. Insira uma descrição mais longa do próprio commit'
      },
      issues: {
        description:
          'Adicione referências de problemas (ex.: "fix #123", "re #123").'
      }
    }
  }
}
