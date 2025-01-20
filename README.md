## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

This project includes an `.env.example` file that provides a template for environment variables. The following variable is defined:

```plaintext
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

- **NEXT_PUBLIC_API_BASE_URL**: Specifies the base URL for the API. This can be modified to point to different environments (e.g., staging or production).

To use this file, copy it to `.env.local` and adjust the values as needed:

```bash
cp .env.example .env.local
```


## Running Tests

This project uses [Jest](https://jestjs.io/) as its testing framework.

### Running All Tests

To execute all tests, use the following command:

```bash
npm test
# or
yarn test
# or
pnpm test
```

