import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/TestActions/',
  ignoreDeadLinks: true,
  title: "Test for GitHub Pages",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: (term) => {
              if (typeof term === 'string') term = term.toLowerCase();
              // @ts-ignore
              const segmenter = Intl.Segmenter && new Intl.Segmenter("ja-JP", { granularity: "word" });
              if (!segmenter) return [term];
              const tokens = [];
              for (const seg of segmenter.segment(term)) {
                // @ts-ignore
                tokens.push(seg.segment);
              }
              return tokens;
            },
          },
          searchOptions: {
            combineWith: 'AND', // important for search chinese
            processTerm: (term) => {
              if (typeof term === 'string') term = term.toLowerCase();
              // @ts-ignore
              const segmenter = Intl.Segmenter && new Intl.Segmenter("ja-JP", { granularity: "word" });
              if (!segmenter) return term;
              const tokens = [];
              for (const seg of segmenter.segment(term)) {
                // @ts-ignore
                tokens.push(seg.segment);
              }
              return tokens;
            },
          },
        },
      },
    },
  }
})
