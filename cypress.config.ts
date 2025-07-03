import {defineConfig} from 'cypress';
import mochawesome from 'cypress-mochawesome-reporter/plugin';
import * as dotenv from 'dotenv';
import {resolve} from 'path';

dotenv.config({
    path: resolve(__dirname, `config/env/${process.env.CYPRESS_ENV || 'dev'}.env`),
});

const baseUrl = process.env.BASE_URL;
if (!baseUrl) {
    console.warn(
        '⚠️ Variável BASE_URL não definida. Usando "https://fakerestapi.azurewebsites.net" como valor padrão.'
    );
}

export default defineConfig({
    e2e: {
        baseUrl: baseUrl || 'https://fakerestapi.azurewebsites.net',
        defaultCommandTimeout: 10000,
        pageLoadTimeout: 120000,
        viewportWidth: 1280,
        viewportHeight: 720,
        screenshotOnRunFailure: true,
        video: false,
        setupNodeEvents(on, config) {
            on('task', {
                log(message: string) {
                    console.log(message);
                    return null;
                },
            });
            mochawesome(on);
            return config;
        },
        reporter: 'cypress-mochawesome-reporter',
        reporterOptions: {
            reportDir: 'cypress/reports',
            overwrite: false,
            html: true,
            json: true,
            charts: true,
            embeddedScreenshots: true,
            saveAllAttempts: false,
        },
        experimentalRunAllSpecs: true,
    },
});
