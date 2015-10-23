System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  "typescriptOptions": {
    "module": "commonjs",
    "emitDecoratorMetadata": true
  },
  paths: {
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "typescript": "npm:typescript@1.6.2"
  },
  "packages": {
    "app": {
      "main": "index.ts",
      "defaultExtension": "ts"
    }
  }
});
