# Matching Game

## Overview
The `PlayGame` component is a React component designed for a matching game application. This component handles the gameplay mechanics, card shuffling, user interactions, and progression tracking.

## Github Link :- [https://github.com/Asharma070320/Matching_Game_Project](https://github.com/Asharma070320/Matching_Game_Project/tree/main)
## Hosted Link :- https://matching-game-project.vercel.app/

### ScreenShots :- 
![Screenshot 2024-03-17 125002](https://github.com/Asharma070320/Matching_Game_Project/assets/127501344/8e9e3687-29ff-4418-bd30-b5bbc79a355b)
![Screenshot 2024-03-17 125014](https://github.com/Asharma070320/Matching_Game_Project/assets/127501344/41eb1181-b7f2-4c15-97ff-f95b3e8a30d2)
![Screenshot 2024-03-17 125025](https://github.com/Asharma070320/Matching_Game_Project/assets/127501344/e07fafd7-0066-43a6-8a2f-ae6f93b8cb2a)
![Screenshot 2024-03-17 125035](https://github.com/Asharma070320/Matching_Game_Project/assets/127501344/ff3878af-3fbe-4f6e-a1bf-be1f82c7d73d)
![Screenshot 2024-03-17 125042](https://github.com/Asharma070320/Matching_Game_Project/assets/127501344/6e903c34-5863-4955-835d-eb8bda78319a)

# Key Points for PlayGame Component:

1. **Import Statements**: The component imports necessary dependencies from React and React Router DOM, as well as the `Card` component and image assets.

2. **State Management**: State variables are used to track pink and blue cards, selected choices, filled progress, and remaining lives.

3. **Card Data**: Hardcoded data arrays (`pCards` and `bCards`) hold information about card images, IDs, matching status, and types (pink or blue).

4. **Shuffle Cards**: Functions `shufflePinkCards` and `shuffleBlueCards` shuffle the pink and blue card arrays respectively using the Fisher-Yates shuffle algorithm.

5. **User Interactions**: The `handleChoice` function manages user interactions by setting the selected card choices.

6. **Game Logic**: The `useEffect` hook is used to check for matches between chosen cards. If a match is found, cards are marked as matched and progress is updated. If no match is found, the number of remaining lives is decremented.

7. **Overlay Notification**: An overlay notification is displayed when a match is found, showing the matched cards.

8. **Progress Bar**: A progress bar indicates the user's progression through the game.

9. **Navigation**: Users can navigate back to the instructions page using the back button.

10. **Component Rendering**: The component renders the game interface including pink and blue card grids, progress bar, remaining lives, and back button.

These key points summarize the main functionality and structure of the `PlayGame` component.

## Dependencies
- `react`: React library for building user interfaces.
- `react-router-dom`: React Router library for navigation within the application.

## Functionality
- **Card Matching**: Users can select two cards, one from the pink-themed set and another from the blue-themed set, to match them.
- **Progress Tracking**: The progress bar indicates the user's progress towards completing the game.
- **Life Counter**: Users have a limited number of chances (lives) to match the cards. The remaining chances are displayed.
- **Overlay Notification**: When a match is found, an overlay notification displays the matched cards.
- **Navigation**: Users can navigate back to the instructions page using the back button.

## Components
- **Card**: Renders individual cards with their respective images and handles user interactions.

## State Management
- **useState**: Manages state variables for pink cards, blue cards, selected choices, filled progress, and remaining lives.
- **useRef**: Provides a reference to the overlay notification element for manipulation.

## Effects
- **useEffect**: Handles side effects such as shuffling cards, checking for matches, and updating game state.








