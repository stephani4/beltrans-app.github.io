import {defineConfig} from "vite";

export default () => {
    return defineConfig({
        base: 'beltrans-app.github.io',
        //...(mode === 'production' ? {} : {base: 'beltrans-app.github.io'}),
        build: {
            outDir: './dist/beltrans-app.github.io'
        }
    })
}