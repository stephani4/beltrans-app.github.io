import {defineConfig} from "vite";

export default () => {
    return defineConfig({
        base: 'beltrans-app.github.io',
        //...(mode === 'production' ? {} : {base: 'beltrans-app.github.io'}),
        // build: {
        //     outDir: '../beltrans.local/www'
        // }
    })
}