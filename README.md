# CodeCrush.link Business Homepage Template (WIP)

Welcome to the [CodeCrush.link Business Homepage Template](https://www.codecrush.link) project! This project serves as a pet project that can potentially be used as a template for creating business homepages in the future. It is built using Next.js, utilizing the create-react-app bootstrapping, and incorporates components from the next-ui component library. The deployment process is automated using GitHub Actions, with the website being hosted in an AWS S3 bucket and distributed via CloudFront.

## Table of Contents

- [Accessing the Website](#accessing-the-website)
- [Technologies Used](#technologies-used)
- [Components](#components)
- [Deployment](#deployment)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)

## Accessing the Website

The deployed website can be accessed at [www.codecrush.link](https://www.codecrush.link). This is the live version of the business homepage template generated from the latest code in the `main` branch.

## Technologies Used
* Next.js
* React
* Next UI
* AWS Bucket, Route53, Cloud Front

## Components

The project utilizes the [next-ui component library](https://nextui.org/) for building UI components. These components are located in the `components/` directory. You can customize and extend these components to match your business's branding and design requirements.

## Deployment

The project is set up for automated deployment using GitHub Actions. Whenever code is pushed or merged into the `main` branch, the GitHub Actions workflow is triggered. This workflow builds the project, generates optimized assets, and deploys them to an AWS S3 bucket. The website content is then distributed via CloudFront for optimal performance.

## Folder Structure

The project's folder structure is organized as follows:

- `components/`: Contains reusable UI components built using the next-ui library.
- `pages/`: Houses the main pages of the website.
- `public/`: Stores static assets such as images, fonts, and other resources.
- `styles/`: Includes global and component-specific styling using CSS or other styling solutions.
- `utils/`: Contains utility functions or helper scripts.

## Getting Started

To get started with the project, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory using the command line.
3. Run `npm install` to install the required dependencies.
4. Start the development server with `npm run dev`.
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

Feel free to explore, modify, and adapt this project to create your own professional business homepage. If you have any questions or need assistance, don't hesitate to reach out.

Happy coding!






