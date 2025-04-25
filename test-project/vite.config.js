import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'celestial-bodies',
            fileName: (format) => `celestial-bodies.${format}.js`,
        },
        rollupOptions: {
            // Make sure assets like textures are bundled or copied properly
            assetsInclude: ['**/*.jpg', '**/*.png', '**/*.jpeg', '**/*.gif']
        }
    }
})
