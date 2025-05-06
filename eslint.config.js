import {defineConfig} from 'eslint/config';
import expoConfig from 'eslint-config-expo/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
    expoConfig,
    eslintPluginPrettierRecommended,
    {
        ignores: ['dist/*'],
    },
]);
