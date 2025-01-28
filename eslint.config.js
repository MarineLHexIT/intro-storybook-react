import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import importPlugin from 'eslint-plugin-import';
import path from "path";
import {fileURLToPath} from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: {
            globals: globals.browser,
            parser: {
                ecmaVersion: "latest",
                ecmaFeatures: {
                    jsx: true
                },
                sourceType: "module",
                tsconfigRoot: path.resolve(__dirname, "tsconfig.json"),
                project: ["./tsconfig.json"],
            }
        },
        settings: {
            "import/resolver": {
                typescript: {
                    project: "./tsconfig.json",
                }
            },
            "react": {
                version: "detect",
            }
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    importPlugin.flatConfigs.recommended,
    {
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/jsx-use-react": "off",
            "react/jsx-uses-react": "error",
            "react/jsx-uses-vars": "error",
            "react/no-unescaped-entities": "off",
        }
    },
];