/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    '@stardust-configs/eslint-config/environments/browser',
    '@stardust-configs/eslint-config/environments/node',
    '@stardust-configs/eslint-config/environments/es2023',
    '@stardust-configs/eslint-config/configs/prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        '@stardust-configs/eslint-config/configs/typescript',
        '@stardust-configs/eslint-config/configs/react',
        '@stardust-configs/eslint-config/configs/next',
      ],
    },
  ],
}
