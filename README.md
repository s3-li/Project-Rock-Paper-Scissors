# Project-Rock-Paper-Scissors
# Project: A Rock, Paper, Scissors game program built using JavaScript

## What is the project?
The Rock, Paper, Scissors project is a game program designed to allow the user to play against the computer, all within a web browser. The concept is based upon the game where two individuals compete to beat the other’s hand by picking an object as stated in the game’s name.

When both individuals have picked an object, they are compared against each other to determine the result - either being: a win, a loss, or, a draw. The conditions to determine the result are as follows:

    • Rock beats scissors.
    • Scissors beats paper.
    • Paper beats rock.
    • Matching objects results in a draw.

All of this will be played from within a web browser with the result displayed in the browser developer console. As such, and at this stage, only JavaScript will be required for this program.


## Plan
    1. User picks an object.
    2. Computer picks a random object.
    3. The user’s object is compared against the computer’s object.
    4. A decision is made to determine the result.
    5. A console message is displayed to inform the user of their pick, the computer’s pick and the game result.


### User input
    • How do we ask the user to pick an object?

### Assigning random choice to the computer’s pick
    • How do I get the computer to “pick” a random object?
    • The random function could work (but as far as I know it only generates a number).
    • But then each object could be assigned to a unique number.
    • What kind of number functions can be used to generate a random number?
    • Would the number be an integer for ease of comparison later?

### Comparing results
    • How would the statement be written?
    • What operands should I consider? User, computer.

### Deciding the result
    • After getting both inputs, I need to make a decision...
    • Conditional statements (true/false) can be used to determine the result.
    • The structure will be based upon If...Else, else if statements.
    • Could implementing a switch statement be more useful here to compare multiple choices?

### Output
    • The results will be displayed to the web browser console – a simple console.log(result) function should suffice.
    
## What I've learnt
This is the first major project where I gained some insight into the methodologies of software development lifecycles. This project taught me how to analyse, plan, design and build a "Rock, Paper, Scissors" game in JavaScript. The importance of knowing and understanding the project allowed me to define what was required. From there, it was easier to identify the keys parts to implement within the program. By breaking down the intial problem, I found it became easier to address the smaller components and eventually bring together the concepts into something workable.

Other things: defining variables, conditional statements, logical operators, defining functions, applying arguments, code checking, atomic commits.
