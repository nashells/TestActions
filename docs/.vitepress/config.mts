// import { defineConfig } from "vitepress"
import { withMermaid } from "vitepress-plugin-mermaid"
import { generateSidebar } from "vitepress-sidebar"
// import { withMermaid } from "vitepress-plugin-mermaid"
// import csp from 'vite-plugin-csp'

// export default defineConfig({
export default withMermaid({
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

    sidebar: generateSidebar({
        documentRootPath: 'docs',
        useTitleFromFileHeading: true,
        collapsed: false,
        excludePattern: ['**_index.md'],
        useFolderTitleFromIndexFile: true,
        manualSortFileNameByPriority: ['TopLevelRequirements', 'ArchitectureDriver',],
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    // your existing vitepress config...
    // optionally, you can pass MermaidConfig
    mermaid: {
      // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
    // optionally set additional config for plugin itself with MermaidPluginConfig
    mermaidPlugin: {
      class: "mermaid my-class", // set additional css classes for parent container 
    },
    
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: (term) => {
              if (typeof term === 'string') term = term.toLowerCase();
              const segmenter = Intl.Segmenter && new Intl.Segmenter("ja-JP", { granularity: "word" });
              if (!segmenter) return [term];
              const tokens = [];
              for (const seg of segmenter.segment(term)) {
                // @ts-ignore
                // ignore spaces
                if (seg.segment.trim() !== '') tokens.push(seg.segment);
              }
              return tokens;
            },
          },
          // searchOptions: {
          //   combineWith: "AND",
          //   processTerm: (term) => {
          //     if (typeof term === 'string') term = term.toLowerCase();
          //     // @ts-ignore
          //     const segmenter = Intl.Segmenter && new Intl.Segmenter("ja-JP", { granularity: "word" });
          //     if (!segmenter) return term;
          //     const tokens = [];
          //     for (const seg of segmenter.segment(term)) {
          //       // @ts-ignore
          //       tokens.push(seg.segment);
          //     }
          //     return tokens;
          //   },
          // },
        },
      },
    },
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          format: 'es',
          sourcemap: false,
        },
      },
    },
  }

  // mermaid: {
  //   // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  // },
  // // optionally set additional config for plugin itself with MermaidPluginConfig
  // mermaidPlugin: {
  //   class: "mermaid my-class", // set additional css classes for parent container 
  // },
})
