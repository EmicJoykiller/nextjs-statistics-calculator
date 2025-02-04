
![Capture](https://github.com/user-attachments/assets/1fea4736-e94d-4494-9d65-fee360fe4b8a)


The "Statistics Calculator" is a fully interactive web application developed with Next.js and React that allows users to input a list of numbers, separated by commas, and calculate key statistical metrics. The app calculates and displays the mean, median, mode, range, variance, and standard deviation of the numbers entered. It provides an intuitive user interface using Tailwind CSS, with a glassmorphism design that gives a modern and visually appealing look.

The app employs Next.js for server-side rendering and React's useState hook for managing state, handling the input field and calculated results. A function parses the input string into an array of numbers, followed by various calculations using JavaScript methods like reduce(), sort(), and Math.max(). The mode is calculated by determining the most frequent numbers, with logic to account for cases when no mode is present.

Tailwind CSS is used for styling, including the custom glassmorphism effect that adds a translucent, frosted-glass look to the background. The application is fully responsive and performs well on a variety of devices. This project showcases the developer's skills in building dynamic, user-friendly applications with Next.js and React, while integrating modern design patterns and efficient state management.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
