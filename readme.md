# TypeScript Backend Setup

## Overview

This project is a TypeScript-based backend setup designed for building RESTful APIs. It leverages modern development tools and practices to ensure a robust, maintainable, and scalable codebase. The setup includes configurations for linting, formatting, testing, and building the project, making it an ideal starting point for backend development.

## Features

- **TypeScript**: Strongly typed JavaScript for better code quality and maintainability.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Database Migrations**: Managed using `db-migrate` for easy database schema changes.
- **Testing**: Configured with Mocha, Chai, and Sinon for comprehensive testing.
- **Linting and Formatting**: Ensured by ESLint and Prettier.
- **Environment Management**: Handled by `dotenv` and `dotenv-webpack`.
- **Webpack**: For bundling the application.
- **Code Coverage**: Integrated with NYC for test coverage reporting.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:
    ```sh
    git clone git@github.com:Jason-bolt/typescript-setup-REST.git
    cd typescript-setup-REST
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables.

### Scripts

The project includes several npm scripts for common tasks:


```6:21:package.json
  "scripts": {
    "dev": "webpack --watch --mode development",
    "build": "webpack --mode production",
    "migrate": "db-migrate --migrations-dir ./src/config/database/migrations",
    "migrate:up": "npm run migrate up",
    "migrate:down": "npm run migrate down",
    "migrate:reset": "npm run migrate reset",
    "migrate:create": "npm run migrate create",
    "seed:create": "npm run migrate create:seeds",
    "seed:up": "npm run migrate up:seeds",
    "seed:down": "npm run migrate down:seeds",
    "seed:reset": "npm run migrate reset:seeds",
    "db:reset": "npm run seed:reset && npm run migrate:reset && npm run migrate:up && npm run seed:up",
    "lint": "eslint . --ext .ts,.js",
    "format": "prettier --write \"src/**/*.{js,ts,json,md}\"",
    "test": "cross-env NODE_ENV=test nyc --reporter=lcov --reporter=text --reporter=text-summary mocha -r ts-node/register src/**/*.test.ts --exclude src/config/**/*.ts --timeout 15000 --exit"
  }
```


- **`npm run dev`**: Start the development server with Webpack in watch mode.
- **`npm run build`**: Build the project for production.
- **`npm run migrate`**: Run database migrations.
- **`npm run seed`**: Run database seeders.
- **`npm run lint`**: Lint the codebase using ESLint.
- **`npm run format`**: Format the codebase using Prettier.
- **`npm run test`**: Run tests with Mocha and generate coverage reports.

### Project Structure

The project follows a modular structure for better organization and scalability:

```plaintext
src/
├── config/             # Configuration files
├── modules/            # Feature modules
│   └── admin/          # Example module
├── routes/             # API routes
├── utils/              # Utility functions
└── index.ts            # Entry point
```

### Configuration

#### TypeScript

TypeScript configuration is managed via `tsconfig.json`:


```1:44:tsconfig.json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */
  }
}
```


#### ESLint

ESLint configuration is managed via `.eslintrc.json`:


```1:14:.eslintrc.json
{
  "parser": "@typescript-eslint/parser",
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "parserOptions": {
    "ecmaVersion": "es6",
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": "error",
    "@typescript-eslint/no-unused-vars": ["error"],
    "indent": ["error", 2]
  }
}

```


#### Prettier

Prettier configuration is managed via `.prettierrc.json`:


```1:7:.prettierrc.json
{
    "semi": true,
    "singleQuote": false,
    "tabWidth": 2,
    "useTabs": false
}

```


#### Webpack

Webpack configuration is managed via `webpack.config.js`:


```1:42:webpack.config.js
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './index.ts', // Your entry point file
  devtool: 'source-map',
  mode: process.env.NODE_ENV || 'development',
  target: 'node', // Specify we're targeting Node.js environment
  externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // Exclude Node.js modules from the bundle
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply this rule to TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: process.env.PORT || 3003
},
  resolve: {
    extensions: ['.ts', '.js', '...'], // Resolve these extensions
  },
  plugins: [
    new NodePolyfillPlugin(),
    new NodemonPlugin(),
    new Dotenv(),
    new webpack.EnvironmentPlugin({ ...process.env })
],
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
};
```


### Code Coverage

Code coverage reports are generated using NYC and can be found in the `coverage` directory. The coverage report provides detailed insights into the test coverage of your codebase.

### Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

### License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

### Author

Jason Kwame Appiatu

---

Feel free to customize this README to better fit your project's needs. Happy coding!