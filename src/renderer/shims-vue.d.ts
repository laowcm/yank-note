declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>
  export default component
}

declare module 'markdown-it-sub'
declare module 'markdown-it-sup'
declare module 'markdown-it-mark'
declare module 'markdown-it-abbr'
declare module 'markdown-it-container'
declare module 'markdown-it-task-lists'
declare module 'markdown-it-attrs'
declare module 'markdown-it-multimd-table'
declare module 'markdown-it-katex'
declare module 'markdown-it-emoji/dist/full.cjs.js'
declare module 'markdown-it-emoji/lib/data/full.mjs'
declare module 'joplin-turndown-plugin-gfm'
declare module '@json-editor/json-editor'
declare module 'monaco-editor/esm/vs/basic-languages/markdown/markdown.js'
declare module 'monaco-editor/esm/vs/editor/contrib/folding/indentRangeProvider.js'
declare module 'monaco-editor/esm/vs/base/common/uri.js'
declare module '@fe/others/monaco-indent-range-provider.js'
declare module 'filenamify/browser'
declare module 'katex'
declare module 'xterm-theme'
declare module 'parse-author'
declare module 'js-untar'
declare module 'semver'
declare module 'path-browserify' {
  import path from 'path'
  export default path
}

declare interface Window {
  ctx: any;
  embedCtx: any;
  registerPlugin: any;
  documentSaved: boolean;
  monaco: any;
  kityminder: any;
  kityminderM: any;
  kityM: any;
  _INIT_SETTINGS: any;
  scheduler?: {
    yield?: () => Promise<void>;
    postTask: (task: () => void, options?: { priority?: 'user-blocking' | 'background' }) => Promise<void>;
  };
}

declare const __APP_VERSION__: string
