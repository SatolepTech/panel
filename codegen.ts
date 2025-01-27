import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  documents: [
    'src/modules/**/graphql/mutations/*.graphql',
    'src/modules/**/graphql/queries/*.graphql',
    '!*.hooks.{ts,tsx}',
    '!*.operations.{ts,tsx}'
  ],
  generates: {
    'src/graphql/schema.ts': {
      config: {
        skipTypename: true,
        withHooks: false
      },
      plugins: [
        'typescript',
        { add: { content: '/* eslint-disable */' } }
      ]
    },
    'src/graphql': {
      config: {
        skipTypename: true,
        withHooks: false
      },
      plugins: [
        'typescript-operations',
        'typescript-urql',
        { add: { content: '/* eslint-disable */' } }
      ],
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'schema.ts',
        extension: '.generated.tsx',
        folder: '@generated'
      }
    }
  },
  hooks: {
    afterOneFileWrite: 'eslint --fix'
  },
  schema: `${process.env.API_URL}/graphql`,
  overwrite: true
}

export default config
