// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { resolve } from "node:path";
import { locales } from "./src/scripts/localization";

// https://astro.build/config
export default defineConfig({
    site: "https://www.spoorloos.xyz/",
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@": resolve(import.meta.dirname, "./src/"),
            },
        },
    },
    integrations: [sitemap()],
    i18n: {
        locales: Object.keys(locales),
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: false,
        },
    },
});
