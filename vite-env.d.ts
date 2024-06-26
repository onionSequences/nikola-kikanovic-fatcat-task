declare const __CWD__: string;

interface ImportMetaEnv {
    readonly VITE_USERS_API: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
