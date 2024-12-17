import withNuxt from './.nuxt/eslint.config.mjs'
import vueEslintParser from 'vue-eslint-parser';

const nuxtConfig = await withNuxt();

export default [ ...nuxtConfig,
    {
      files: ['*.vue'],
      languageOptions: {
        parser: vueEslintParser,
      },
    },
  ];
