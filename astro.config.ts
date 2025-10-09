// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import path from "node:path";
import fs from "node:fs";

const srcFolder = path.resolve(import.meta.dirname, "./src/");
const localesFolder = path.resolve(srcFolder, "./locales/");
const locales = fs.readdirSync(localesFolder).map((lang) => path.parse(lang).name);

// https://astro.build/config
export default defineConfig({
    site: "https://www.spoorloos.xyz/",
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@": srcFolder,
            },
        },
    },
    integrations: [sitemap()],
    i18n: {
        locales,
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: false,
        },
    },
});
