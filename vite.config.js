import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: "public/assets/livros.json", // Caminho do arquivo JSON
                    dest: "assets", // Diretório de destino no build
                },
            ],
        }),
    ],
    base: "/Lista-de-Livros/",
    build: {
        outDir: "build", // Define o diretório de saída como 'build'
    },
});
