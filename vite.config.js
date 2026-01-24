import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    base: "/mixology/",
    define: {
        "process.env": {},
    },
    plugins: [
        vue(),
        VitePWA({
            manifest: {
                name: "Mixology",
                theme_color: "#5c913b",
            },
            registerType: "autoUpdate",
        }),
    ],
    build: {
        minify: true,
        lib: {
            entry: resolve(__dirname, "src/main.js"),
            name: "vue-boilerplate",
            fileName: "[name]",
            formats: ["es"],
        },
        rollupOptions: {
            input: ["./index.html"],
            output: {
                assetFileNames: ({ name }) => {
                    if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
                        return "assets/images/[name][extname]";
                    }
                    if (/\.css$/.test(name ?? "")) {
                        return "[name][extname]";
                    }
                    // default
                    return "assets/[name]-[hash][extname]";
                },
            },
        },
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
});
