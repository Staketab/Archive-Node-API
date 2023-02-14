import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'src/schema.ts',
  generates: {
    './src/resolvers-types.ts': {
      config: {
        enumValues: {
          BlockStatusFilter: './models/types#BlockStatusFilter',
        },
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};
export default config;