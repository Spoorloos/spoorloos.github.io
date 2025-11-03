import { basename } from "node:path";

const localeModules = import.meta.glob<any>("../locales/*.json", { eager: true });

export const locales = Object.fromEntries(
    Object.entries(localeModules).map(([path, locale]) => {
        return [basename(path, ".json"), locale];
    })
);
