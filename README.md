## Getting Started

This project uses Sanity as the CMS

You can find the Sanity Studio repo [here](https://github.com/faishal123/devdifferent-assignment-sanity-studio)

To run the Sanity Stduio in your local environment, you can start by cloning the [repository](https://github.com/faishal123/devdifferent-assignment-sanity-studio)

and then inside the cloned repository, you can just run these commands:
```bash
npm install && npm run dev
```
You can open [http://localhost:3333](http://localhost:3333) to access the Sanity Studio in your local environment

After that you'll need to set the environment variables inside this Next.js project
```
SANITY_PROJECT_ID
SANITY_DATASET
SANITY_API_VERSION
```

And then, you can run the Next.js development server:

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
