var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("Enter your name player ? ");
console.log("Hey player...!"  +userName);
console.log("----------");
console.log(" Welcome to your favourite sport quiz i.e cricket quiz ");
console.log("----------");
console.log("Select the appropriate option i.e a or b or c");
console.log("----------");
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer)
{
  console.log("Anddd That's a Good Shot..!");
  score = score + 1;
}
else
{
  console.log("Ugh... That's a Bad shot..!");
}
console.log("Current score : ", score)
console.log("----------");
}
var questions =
[
  {
    question: "1. Who is the first Indian to score 100 run's in test cricket ? a. Amar Singh b. Jahangir Khan c. Lala Amarnath ",
    answer: "c"
  },
  {
    question: "2. Who scored highest centuries in women cricket ? a. Meg Lanning b. Ellyse Perry c. Tayla Vlaeminck ",
    answer: "b"
  },
  {
    question: "3. Who scored first double century in ODI ? a. Belinda Clark b. Sachin Tendulkar c. ab de villiers ",
    answer: "a"
  },
  {
    question: "4. First Indian to score triple-century in test cricket ? a. Virender Sehwag b. Sachin Tendulkar c. V.V.S Laxman ",
    answer: "a"
  },
  {
    question: "5. Who is First Indian women cricketer to take hat-trick in ODI ? a. Deepti Sharma  b. Shikha Pandey  c. Ekta Bisht ",
    answer: "c"
  },
  {
    question: "6. First captian of Indian women Cricket Team ? a. Shantha Rangaswamy b. Mithali Raj  c. Smriti Mandhana ",
    answer: "a"
  },
  {
    question: "7. Who is Most Wicket taker in ODI ? a. Anil Kumble b. Shane Warne c. Muttiah Muralitharan ",
    answer: "a"
  },
  {
    question: "8. Who is the only woman's cricketer who have scalped more than 200 ODI wickets ? a. Jhulan Goswami b. Rajeshwari Gayakwad c. Poonam Yadav ",
    answer: "a"
  },
  {
    question: "9. Who was first Indian women umpire ? a. GS Lakshmi b. Anjali Rai c. Claire Polosak ",
    answer: "c"
  }
];
for (var i = 0; i<questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
};
console.log("There You go , You have scored : ", score); 
console.log("Send a screen-shot of your score");