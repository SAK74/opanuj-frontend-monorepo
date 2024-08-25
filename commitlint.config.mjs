/**
 * @type {import('@commitlint/types').UserConfig}
 */
export default {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  rules: {
    'body-case': [2, 'always', 'lower-case'],
  },
  prompt: {
    messages: {},
    questions: {
      type: {
        description: 'Please input type',
      },
    },
  },
};
