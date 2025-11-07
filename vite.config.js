import {defineConfig} from "vite";

export default (envs) => {
    const { mode } = envs;

    const config = {
        build: {},
    };

    if (mode === 'production') {
        config.build.outDir = '../beltrans.local/www'
    }

    if (mode === 'development') {
        config.base = 'beltrans-app.github.io';
    }

    return defineConfig(config)
}