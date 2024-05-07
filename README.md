# Image Generator

> Generate an image based on the descriptions you provide using [Dall-E 3](https://openai.com/index/dall-e)

## Prerequisites

Ensure you have the following installed on your system

- Node.js: ver. 14.x or newer
- npm(Node Package Manager) or Yarn

Once you have these system dependencies installed, run the following to install the necessary packages.

```
npm install
# or
yarn install
# or
pnpm install
```

## Environment Configuration

This application utilizes [OpenAI](https://openai.com/) API to generate the images based on the description submitted. You will need an API key from the service to make successful requests.

Once you have created an account on their platform and have acquired an API key add `.env` to the root of the project directory

```
OPENAI_API_KEY=
```

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

## Learn More

To learn more about Next.js:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
