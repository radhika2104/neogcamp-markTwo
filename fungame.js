// Incorporate Optional Chalk, more readline-sync.keyInYN features
const chalk = require('chalk');
var readlineSync = require('readline-sync');
var username = readlineSync.question('Please enter your name: ');
console.log('Welcome, ' + chalk.cyanBright(username.charAt(0).toUpperCase()) + chalk.cyanBright(username.substr(1)) + '!');
console.log('');
console.log(chalk.cyanBright('Surprise! This is going to be a fun game with random trivia questions!'))
boolresponse = readlineSync.keyInYN(['Do you want to review game and score guidelines?'])
if (boolresponse === true) {
  console.log('');
  console.log(chalk.underline('Game Guidelines:'));
  console.log('');
  console.log('To exit, press Ctrl+C or press [0] from options.');
  console.log('');
  console.log('Enter "a","b" or "c" to select any option and press Enter.');
  console.log('');
  console.log(chalk.underline('Scoring System'));
  console.log('1. In Beginner Level, On a right answer, you will earn 2 points and on a wrong answer you will lose 1 point.');
  console.log('2. In Novice Level, On a right answer, you will earn 3 points and on a wrong answer you will lose 1 point.');
  console.log('3. In Competent Level, On a right answer, you will earn 4 points and on a wrong answer you will lose 2 point.');
  console.log('');
}


var player = {
  name: 'Ruchika',
  score: 3
}

var HighScores = [player]

function printScoreBoard() {
  console.log('')
  console.log(chalk.underline('Scoreboard:'));
  console.log(HighScores[0].name + ' : ' + HighScores[0].score);
  console.log('')
}

printScoreBoard()

console.log(chalk.cyanBright(`Let\'s see if you can beat the highest score ${player.score}. All the best!`));
console.log('');

// index = readlineSync.keyInSelect(items[, query[, options]])
var questionOne = {
  question: 'Qs. What do Americans refer to ‘pizza’ as? \n  ',
  items: ['Pie', 'Bread', 'Parantha'],
  answer: 1
}

var questionTwo = {
  question: 'Qs. Which movie star entered a look-a-like content about himself only to come 3rd in it? \n',
  items: ['Marilyn Monroe', 'Charlie Chaplin', 'Johnny Depp'],
  answer: 2
}

var questionThree = {
  question: 'Qs. What is the collective noun for a group of pandas? \n ',
  items: ['Shaol', 'School', 'Embarassment'],
  answer: 3
}

var questionFour = {
  question: 'Qs. In Georgia (the state), it’s illegal to eat what with a fork? \n ',
  items: ['Momos', 'Fried Chicken', 'Pizza'],
  answer: 2
}

var questionFive = {
  question: 'Qs. From which country do French fries originate from? \n ',
  items: ['France', 'Netherlands', 'Belgium'],
  answer: 3
}

var questionSix = {
  question: 'Qs. Which sea creature has three hearts? \n ',
  items: ['Whale', 'Octopus', 'Shark'],
  answer: 2
}

var questionSeven = {
  question: 'Qs. Which European country eats the most chocolate per capita? \n ',
  items: ['France', 'Germany', 'Switzerland'],
  answer: 3
}

var questionEight = {
  question: 'Qs. What Nut Is Used To Make Marzipan? \n ',
  items: ['Almonds', 'Walnut', 'Hazelnut'],
  answer: 1
}

var questionNine = {
  question: 'Qs. What Color Is Giraffe\'s Tongue? \n ',
  items: ['Reddish-Pink', 'Greyish-Green', 'Blue-Black'],
  answer: 3
}

var questionTen = {
  question: 'Qs. With What Did The Ancient Romans Dye Their Hair? \n ',
  items: ['Bird Poop', 'Cow Dung', 'Henna'],
  answer: 1
}

var questionEleven = {
  question: 'Qs. Which Character On The TV Show Friends Once Got His/Her Head Stuck In A Turkey? \n ',
  items: ['Joey', 'Phoebe', 'Monica'],
  answer: 1
}

var questionTwelve = {
  question: 'Qs. Which Country Owns Every Panda In The World? \n ',
  items: ['Nepal', 'Japan', 'China'],
  answer: 3
}

var Level0 = [
  questionOne, questionTwo, questionThree, questionFour
]

var Level1 = [
  questionFive, questionSix, questionSeven, questionEight,
]

var Level2 = [
  questionNine, questionTen, questionEleven, questionTwelve
]



var gameScore = 0;



function playLevelTwo(questionArray) {
  console.log('')
  console.log(chalk.underline('Level 2 (Competent): '));
  console.log('');
  for (var i = 0; i < questionArray.length; i++) {
    // var input = readlineSync.question(questionArray[i].question);
    var input = Number(readlineSync.keyInSelect(questionArray[i].items,
      questionArray[i].question, { hideEchoBack: false }));
    if ((input + 1) === 0) {
      process.exit()
    }
    else if ((input + 1) === questionArray[i].answer) {
      gameScore += 4
      console.log('')
      console.log(chalk.yellow.italic(('You are right! Your new score is ') + gameScore))
    }
    else {
      gameScore -= 2
      console.log('')
      console.log(chalk.yellow.italic(('Oops! You are wrong. Your new score is ') + gameScore))
    }
    console.log('');
    console.log('');
  }

  if (gameScore >= 18) {
    console.log(chalk.bgMagenta('Wow! You are a star.'));
    console.log('Your score is ' + gameScore);
  } else {
    console.log(chalk.red('Game Over!'));
    console.log('Your score is ' + gameScore);
  }
  if (gameScore >= HighScores[0].score) {
    HighScores[0].name = username
    HighScores[0].score = gameScore
    console.log(chalk.cyanBright('You just made a new High Score!'))
    console.log('\n Updating ScoreBoard...\n')
    printScoreBoard()
  }
}

function playLevelOne(questionArray) {
  console.log('')
  console.log(chalk.underline('Level 1 (Novice):'));
  console.log('');
  LevelTwo = null;
  for (var i = 0; i < questionArray.length; i++) {
    if (gameScore >= 10) {
      console.log(chalk.cyanBright("Bravo!! You have been promoted to Competent!"));
      console.log();
      console.log();
      LevelTwo = true;
      break;
    }
    else {
      // var input = readlineSync.question(questionArray[i].question);
      var input = Number(readlineSync.keyInSelect(questionArray[i].items,
        questionArray[i].question, { hideEchoBack: false }));
      if ((input + 1) === 0) {
        process.exit()
      }
      else if ((input + 1) === questionArray[i].answer) {
        gameScore += 3
        console.log('')
        console.log(chalk.yellow.italic(('You are right! Your new score is ') + gameScore))
      }
      else {
        gameScore -= 1
        console.log('')
        console.log(chalk.yellow.italic(('Oops! You are wrong. Your new score is ') + gameScore))
      }
    }
    console.log('');
    console.log('');
  }
  if (LevelTwo === true) {
    playLevelTwo(Level2);
  } else {
    console.log('Your game score is: ' + gameScore)
    if (gameScore >= HighScores[0].score) {
      HighScores[0].name = username
      HighScores[0].score = gameScore
      console.log(chalk.cyanBright('You just made a new High Score!'))
      console.log('\n Updating ScoreBoard...\n')
      printScoreBoard()
    }
    console.log(chalk.red('Game Over! You were just one LEVEL away from highest. Try again!'));

  }
}

function game(Level0) {
  console.log('');
  console.log(chalk.underline('Level 0 (Beginner):'));
  console.log('');
  LevelOne = null;
  LevelTwo = null;

  for (var i = 0; i < Level0.length; i++) {
    if (gameScore >= 4 && LevelOne !== true) {
      console.log(chalk.cyanBright("Bravo!! You have been promoted to Novice!"));
      console.log();

      LevelOne = true;
      console.log(chalk.magenta.italic("See if you can answer more to directly play Competent!"))
      console.log();
      var input = Number(readlineSync.keyInSelect(Level0[i].items,
        Level0[i].question, { hideEchoBack: false }));
      console.log('');
      if ((input + 1) === 0) {
        process.exit()
      }
      else if ((input + 1) === Level0[i].answer) {
        gameScore += 2
        console.log('')
        console.log(chalk.yellow.italic(('You are right! Your new score is ') + gameScore))
      } else {
        gameScore -= 1
        console.log('')
        console.log(chalk.yellow.italic(('Oops! You are wrong. Your new score is ') + gameScore))
      }
    }
    else if (gameScore >= 6) {
      console.log(chalk.bgMagenta("Wohoo!! You just skipped a level. You have been promoted to Competent!"));
      LevelTwo = true;
      console.log();
      console.log();
      break;
    }
    else {
      // index = readlineSync.keyInSelect(items[, query[, options]])
      //var input = readlineSync.question(Level0[i].question);
      var input = Number(readlineSync.keyInSelect(Level0[i].items,
        Level0[i].question, { hideEchoBack: false }));
      if ((input + 1) === 0) {
        process.exit()
      }
      else if ((input + 1) === Level0[i].answer) {
        gameScore += 2
        console.log('')
        console.log(chalk.yellow.italic(('You are right! Your new score is ') + gameScore))
      } else {
        gameScore -= 1
        console.log('')
        console.log(chalk.yellow.italic(('Oops! You are wrong. Your new score is ') + gameScore))
      }
    }

    console.log('');
    console.log('');
  }
  // check if LevelOne is True or LevelTwo
  if (LevelTwo == true) {
    playLevelTwo(Level2);
  }
  else if ((LevelOne === true && LevelTwo !== true) || (gameScore >= 4)) {
    console.log(chalk.cyanBright('You have qualified for LEVEL 1...'))
    playLevelOne(Level1);
  }
  else {
    console.log('Your game score is: ' + gameScore)
    if (gameScore >= HighScores[0].score) {
      HighScores[0].name = username
      HighScores[0].score = gameScore
      console.log(chalk.magenta('You just made a new High Score! Send us a screenshot with friends.'))
      console.log('\n Updating ScoreBoard...\n')
      printScoreBoard()
    }
    console.log(chalk.red('Game Over! Try better next time for higher levels!'))
  }
}

boolPlaygame = readlineSync.keyInYN(['Press "Y" to start game or press "N" to exit..'])
if (boolPlaygame === true) {
  game(Level0)
} else {
  process.exit();
}
