import type { StorybookConfig } from "@storybook/react-vite";
import { UserConfig } from "vite";
// import type { AddonOptionsVite } from "@storybook/addon-coverage";
import { BaseViteConfig } from "../vite.config.lib";
// @ts-ignore
import path from "path";
//import Inspect from "vite-plugin-inspect";

//Do not delete this mocks Router
// import * as Mock from "../src/__mocks__/function_mocks/@tanstack/RouterMock";

const SRC_BASE = __dirname + "./../src/";
// import { visualizer } from "rollup-plugin-visualizer";

import { createMockAliases } from "./create-mock-alias";
// import visualizer from "rollup-plugin-visualizer";
import { createMissingAssetsPlugin } from "./vite-plugin-missing-assets";
import { tsgoChecker } from "./vite-plugin-tsgo-checker";

// const coverageConfig: AddonOptionsVite = {
// istanbul: {
// include: ['**/stories/**'],
// exclude: ['**/exampleDirectory/**'],
// },
// };
const ignoredFolders = ["__model_mocks__", "@stores"];

const mockAliases = createMockAliases(SRC_BASE, ignoredFolders);

const config: StorybookConfig = {
  stories: [
    "../src/core/**/_*.stories.@(js|jsx|mjs|ts|tsx)",
    // "../src/common/**/_*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  addons: [
    "@storybook/addon-coverage",
    "@storybook/addon-docs",
    "@storybook/addon-vitest"
  ],

  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import("vite");
    const istanbul = (await import("vite-plugin-istanbul")).default;

    // Create a modified BaseViteConfig without external dependencies for Storybook
    const storybookBaseConfig = { ...BaseViteConfig };
    if (storybookBaseConfig.build?.rollupOptions) {
      // Remove external dependencies for Storybook build
      delete storybookBaseConfig.build.rollupOptions.external;
    }

    const WithBaseConfig = mergeConfig(config, storybookBaseConfig);
    return mergeConfig(WithBaseConfig, {
      resolve: {
        alias: {
          ...mockAliases,
        },
      },
      define: {
        global: "globalThis",
        "process.env": {},
      },
      plugins: [
        // visualizer({
        //   open: true, // Automatically open the visualization in your browser
        //   filename: "bundle-analysis.html", // Output file name
        //   template: "treemap", // Visualization type ('treemap', 'sunburst', etc.)
        // }),
        istanbul({
          include: ["**/stories/**"],
          exclude: ["node_modules", "test/"],
          extension: [".ts", ".tsx"],
          requireEnv: false,
        }),
        createMissingAssetsPlugin(),
        // Add TypeScript 7 (tsgo) type checking
        tsgoChecker({
          tsconfigPath: "../tsconfig.lib.json",
          root: path.resolve(__dirname, ".."),
          overlay: true,
        }),
      ],
      // Add dependencies to pre-optimization
      server: {
        fs: {
          allow: [".."],
        },
      },
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
      commonjsOptions: {
        transformMixedEsModules: true,
        strictRequires: true,
      },
    } as UserConfig);
  },

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  staticDirs: [path.resolve(`${SRC_BASE}/custom-hooks/use-dynamic-import`)],
  docs: {},

  typescript: {
    check: true, // Enable TypeScript checking
    // reactDocgen: "react-docgen",
    reactDocgen: "react-docgen", // Use react-docgen
    skipCompiler: false, // Enable TypeScript compiler
    reactDocgenTypescriptOptions: {
      // exclude: ["*EngagementPlannerCalendar.tsx"],
      compilerOptions: {
        maxNodeModuleJsDepth: 1,
      },
      // Use tsgo for type checking
      tsconfigPath: path.resolve(__dirname, "../tsconfig.lib.json"),
    },
  },
};

export default config;
