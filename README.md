# Template for Next.js app with styled-components

This example features how you use a different styling solution than [styled-jsx](https://github.com/vercel/styled-jsx) that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).

This example uses the Rust-based [SWC](https://nextjs.org/docs/advanced-features/compiler#styled-components) in Next.js for better performance than Babel.

Currently, only the `ssr` and `displayName` transforms have been implemented. These two transforms are the main requirement for using `styled-components` in Next.js.

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and using [Next.js Compiler for Styled Components](https://nextjs.org/docs/advanced-features/compiler#styled-components). Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org/docs/advanced-features/custom-app) component.

## Getting Started

1. Clone this repo:

```
git clone https://github.com/niklaspeterson/next-styled-components-template.git`
# or
gh repo clone NiklasPeterson/next-styled-components-templat
```
2. Navigate to the directory and run:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit and save the file.

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNiklasPeterson%2Fnext-styled-components-template)

## Deploy to Netlify options

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/niklaspeterson/next-styled-components-template)


## Dependencies

- [Next.js](https://nextjs.org/)
- [Styled-components](https://www.styled-components.com)
