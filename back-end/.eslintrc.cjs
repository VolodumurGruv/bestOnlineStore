module.exports = {
  "plugins": [
    "mongo"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es2021": true,
    "mongo/server-side": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:security/recommended",
    "plugin:import/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "node/file-extension-in-import": [
      "error",
      "always"
    ],
    "node/prefer-global/buffer": [
      "error",
      "always"
    ],
    "node/prefer-global/console": [
      "error",
      "always"
    ],
    "node/prefer-global/process": [
      "error",
      "always"
    ],
    "node/prefer-global/url-search-params": [
      "error",
      "always"
    ],
    "node/prefer-global/url": [
      "error",
      "always"
    ],
    "node/prefer-promises/dns": "error",
    "node/prefer-promises/fs": "error",
    "spaced-comment": "off",
    "no-console": "warn",
    "consistent-return": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "no-process-exit": "off",
    "no-param-reassign": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next|val" }],
    "node/no-unsupported-features/es-syntax": [
      "error",
      {
        "version": ">=16.0.0",
        "ignores": ["modules"]
      }
    ],
    "import/extensions": [
      "error",
      {
        "js": "ignorePackages"
      }
    ]
  }
};
