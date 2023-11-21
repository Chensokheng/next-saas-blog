import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// # Getting Started with Next.js

// Next.js is a popular React framework that makes it easy to build server-side rendered React applications. In this blog post, we'll go through the basics of getting started with Next.js.

// ## Installation

// To start using Next.js, you need to install it in your project. You can do this using npm or yarn. Open your terminal and run:

// ```bash
// npm install next
// # or
// yarn add next
// ```

// ## Creating a Simple Next.js App

// Once Next.js is installed, you can create a simple app by creating a pages directory and adding an index.js file inside it. The pages directory is a special directory in Next.js where each file becomes a route in your application.

// ```javascript
// // pages/index.js
// import React from 'react';

// const HomePage = () => {
//   return (
//     <div>
//       <h1>Welcome to My Next.js App</h1>
//       <p>This is a simple Next.js app.</p>
//     </div>
//   );
// };

// export default HomePage;
// ```

// ## Running Your Next.js App

// To run your Next.js app, use the following command:

// ```bash
// npm run dev
// # or
// yarn dev
// ```

// This command starts the development server, and you can access your app at [http://localhost:3000](http://localhost:3000).

// ## Conclusion

// That's it! You've just created a basic Next.js app. Next.js provides a powerful framework for building React applications with features like automatic code splitting, server-side rendering, and more.

// Explore the [Next.js documentation](https://nextjs.org/docs) for more advanced features and customization options.
// `;
