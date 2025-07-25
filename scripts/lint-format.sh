#!/bin/bash

# Exit on error
set -e

# Run ESLint for linting
npx eslint "src/**/*.{js,jsx,ts,tsx}" --fix

# Run Prettier for formatting
npx prettier --write "src/**/*.{js,jsx,ts,tsx,json,md,css,scss,html}"

echo "Linting and formatting complete!"
