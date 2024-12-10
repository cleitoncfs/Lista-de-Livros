import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/Lista-de-Livros/",
    build: {
        outDir: "build", // Define o diretório de saída como 'build'
    },
});
