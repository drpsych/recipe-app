# Recipe-App

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description
"what's for dinner?" is the ultimate solution for culinary enthusiasts and home cooks alike. This project is an application that allows users to explore a wide variety of recipes, offering inspiration and guidance for your next meal.

**Features:**
- Discover Recipes: Browse through a curated collection of recipes with beautiful imagery and easy-to-follow instructions.
- Search Functionality: Find exactly what you're craving with our intuitive search feature.
- Instructions: View detailed instructions on how to make each recipe.
- Ingredient List: Keep track of ingredients you have or need for each recipe.

Technologies Used
- React.js for a component-based architecture
- React Router for seamless navigation
- React Icons for visually appealing iconography
- Web Vitals for performance tracking
- Spoonacular API for recipe data

*Application will need API key from Spoonacular to work, see [API Key](#api-key) below for instructions.*

## Table of Contents
- [Recipe-App](#recipe-app)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Key](#api-key)
  - [Contributing](#contributing)
  - [License](#license)

## Prerequisites

Before running the app, make sure you have Node.js installed on your system. You can download it from [Node.js](https://nodejs.org/en) website.

## Installation
To install what's for dinner?:

1. Clone the repository:

```
git clone https://github.com/drpsych/recipe-app.git
```

2. Navigate to the project directory:

```
cd recipe-app
```

3. Install dependencies:

```
npm install
```
## Usage
Once the repository is cloned and dependencies are installed, run the following command to start the application.

4. Start the development server:

```
npm start
```

The app should now be running at http://localhost:3000.

## API Key
1. Navigate to [Spoonacular](https://spoonacular.com/food-api) website: 
   
   ![1](https://github.com/drpsych/recipe-app/assets/62787554/cd415ac9-673c-4059-b419-313502f10cf7)
   
2. Sign up for an account at Spoonacular, or sign in if account is already active.

   ![2](https://github.com/drpsych/recipe-app/assets/62787554/627e3871-7dae-487e-8ad4-b27efc6a2c89)

3. Navigate to "Profile" section and click on "Show/Hide API Key". 
   
   ![3](https://github.com/drpsych/recipe-app/assets/62787554/764414db-d628-4b95-9045-cdb9cbe095c7)

4. Copy the API key and paste it into the .env file.
   
   1. Create a .env file in the root directory of the project.
   
   2. Add the following line to the .env file, replacing &lt;YOUR_API_KEY&gt; with your actual Spoonacular API key:
       ```
       REACT_APP_API_KEY=<YOUR_API_KEY>
       ```
      ![4](https://github.com/drpsych/recipe-app/assets/62787554/0d7f15b3-84f1-4f4b-a066-634406e95922)

5. If application is running with the `npm start` command, stop the application server by pressing <kbd>CTRL</kbd>+<kbd>C</kbd> in the terminal window. Altering a .env file requires the application to be restarted.
   
6. Restart the application server: ```npm start```

## Contributing

We welcome contributions to this project! Here are some ways you can help:

-   Report bugs and make feature requests by opening a GitHub issue. Be sure to include clear steps to reproduce the bug so we can fix it quickly.

-   Submit pull requests to fix bugs or add new features. Make sure your PR has a clear description of the problem you're trying to solve or the feature you'd like to add.

-   Improve documentation by submitting pull requests or opening issues for anything that's confusing or missing. Good documentation makes a project more welcoming to new contributors.

-   Participate in code reviews when PRs are opened. Check for bugs, gaps in test coverage, or unnecessary complexity. Offer suggestions to improve the code while being respectful.

-   Help answer questions from other users that come up in issues or discussions. Our community grows stronger when we share knowledge with others.

Thanks for making this project better for everyone!

## License
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
