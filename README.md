# Car Dealer App

Car Dealer App is a simple application that allows users to filter and view vehicle models based on make and year. Built using **Next.js**, **TypeScript**, and **Tailwind CSS**, this app fetches data from the NHTSA API to provide up-to-date vehicle information.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Features

- **Vehicle Filter**: Allows users to filter vehicles by make and year.
- **Dynamic Fetching**: Retrieves vehicle makes and models from the NHTSA API.
- **Responsive Design**: Adapts to different screen sizes for an optimal user experience.

## Project Structure

```
car-dealer-app/
├── public/                # Public assets
├── src/
│   ├── app/
│   │   ├── fonts/         # Custom fonts (if any)
│   │   ├── result/[makeId]/[year]/page.tsx  # Results page for filtered vehicles
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Main layout for the app
│   │   ├── page.tsx       # Home page
│   ├── components/
│   │   ├── FilterForm.tsx # Filter form component
│   │   └── VehicleList.tsx # Component for displaying vehicle models
│   ├── utils/
│   │   ├── apiUtils.ts    # Utility for API functions
│   │   └── fetchVehicles.ts # API function to fetch makes and models
├── .env.local             # Environment variables
├── .eslintrc.json         # ESLint configuration
├── next.config.js         # Next.js configuration
├── package.json           # Project metadata and dependencies
├── postcss.config.js      # PostCSS configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/car-dealer-app.git
   cd car-dealer-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file in the root directory and add the following variable:
   ```plaintext
   NEXT_PUBLIC_API_URL=https://vpic.nhtsa.dot.gov/api/
   ```

## Usage

1. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The app will be running on `http://localhost:3000`.

2. **Build for Production**:
   ```bash
   npm run build
   ```

3. **Run in Production Mode**:
   After building, you can start the app in production mode with:
   ```bash
   npm start
   ```

## Environment Variables

| Variable               | Description                                     |
|------------------------|-------------------------------------------------|
| `NEXT_PUBLIC_API_URL`  | Base URL for the NHTSA API                      |

## Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm start`**: Runs the app in production mode.
- **`npm run lint`**: Lints the code using ESLint.

## Technologies Used

- **Next.js**: React framework for server-side rendering and routing.
- **TypeScript**: Type-safe JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **NHTSA API**: Provides vehicle data for makes and models.

## License

This project is licensed under the MIT License.
