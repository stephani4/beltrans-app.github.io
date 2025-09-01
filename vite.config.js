import {defineConfig} from "vite";

export default ({mode}) => {
    return defineConfig({
        ...(mode === 'production' ? {} : {base: 'beltrans-app.github.io'}),
        build: {
            outDir: '../beltrans.local/www'
        }
    })
}