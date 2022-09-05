# CLI Trivia quiz game 

This is second project created in Neo G camp, LevelZero for markTwo to expand on programming constructs in Javascript.

This is a quiz game on Fun Trivia questions. 

## Features

This app expands on markOne assignment. Hence, few features are common among both.

- Welcomes user by taking username as input

- Keeps score of a right or wrong answer

- Displays current score on each question's answer based on correctness

- Bonus: On reaching a certain score, promotes user to appropriate level

- Displays initial scoreboard and updates and displays updated scoreboard after the game, if user beats the high score

- Bonus: uses Chalk for enhanced display on terminal by highlighting important communication through colors, italics, underline etc.

- Bonus: uses readline-sync.keyInSelect for MCQ type questions

- Bonus: uses readline-sync.keyInYN to ask binary questions to user such as displaying of game guidelines and starting the game.

### Scoring system for levels

1. In Beginner Level, On a right answer, user will earn 2 points and on a wrong answer user will lose 1 point.

2. In Novice Level, On a right answer, user will earn 3 points and on a wrong answer user will lose 1 point.

3. In Competent Level, On a right answer, user will earn 4 points and on a wrong answer user will lose 2 point.


### Promotion system for levels

- There are 4 questions each in beginner, novice and competent level.

- If a user earns 6 points in beginner level, he is promoted to competent directly, if he scores less than 6 but atleast 4, user is promoted to novice. If user earns less than 4, game is over after four questions in beginner level.

- If a user earns 10 points in novice level, he is promoted to competent, if he scores less than 10 ,game is over at novice level.

- If a user earns 18 points in competent level, he is awarded a star badge at end of the game, else only game score is displayed.

## Learnings


- read detailed documentation of readline-sync and its methods
- incorporated readline-sync for MCQ type questions
- learned to use chalk on both Repl and vscode



## URL for App


This CLI App was created using Repl.

URL - https://replit.com/@radhika2104/CLI-Trivia-Game?v=1?embed=1&output=1

Note: repl.run is now deprecated. To run the app, click on run after opening the URL.

