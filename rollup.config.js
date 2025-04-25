// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import url from 'rollup-plugin-url';
import copy from 'rollup-plugin-copy';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: true
        },
        {
            file: 'dist/index.min.js',
            format: 'umd',
            name: 'CelestialBodies',
            plugins: [terser()],
            sourcemap: true,
            globals: {
                'three': 'THREE'
            }
        }
    ],
    plugins: [
        // Copy textures to the output directory instead of inlining them
        copy({
            targets: [
                {
                    src: 'src/assets/textures/**/*',
                    dest: 'dist/assets/textures'
                }
            ]
        }),
        // Use URL plugin with publicPath option
        url({
            limit: 0, // Don't inline any files, always use URLs
            include: ['**/*.jpg', '**/*.png'],
            emitFiles: true,
            fileName: 'assets/textures/[name][extname]',
            publicPath: 'assets/'
        }),
        resolve(),
        commonjs()
    ],
    external: ['three']
};