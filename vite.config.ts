import react from '@vitejs/plugin-react';
import path from 'path';
import sass from 'sass';
import { defineConfig } from 'vite';
// @ts-expect-error Could not find a declaration file
import eslint from 'vite-plugin-eslint';

export default defineConfig(({ mode, command }) => {
    const plugins = [react()];
    if (mode === 'development') {
        plugins.push([eslint()]);
    }
    return {
        plugins,
        base: '/Home/',
        resolve: {
            alias: [
                { find: 'shared', replacement: path.resolve(__dirname, 'src/shared') },
                { find: 'entities', replacement: path.resolve(__dirname, 'src/entities') },
                { find: 'features', replacement: path.resolve(__dirname, 'src/features') },
                { find: 'widgets', replacement: path.resolve(__dirname, 'src/widgets') },
                { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
                { find: 'app', replacement: path.resolve(__dirname, 'src/app') },
            ],
        },
        css: {
            preprocessorOptions: {
                scss: {
                    implementation: sass,
                },
            },
        },
        build: {
            sourcemap: false,
        },
        server: {
            port: 5001,
        },
    };
});
