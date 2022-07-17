// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const INTERVAL_TO_SECONDS = {
  week: 604800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

const INTERVAL_TO_SECONDS_FORMAT = {
  week: "w",
  day: "d",
  hour: "h",
  minute: "m",
  second: "s",
};

function solution(X) {
  // write your code in JavaScript (Node.js 8.9.4)

  let remainder = X;

  let maxTransformation = 2;
  let numberOfTransformation = 0;
  let answers = [];

  for (const [interval, valueInSeconds] of Object.entries(
    INTERVAL_TO_SECONDS
  )) {
    if (remainder / valueInSeconds > 1) {
      if (numberOfTransformation === maxTransformation) {
        answers[maxTransformation - 1] = [
          answers[maxTransformation - 1][0] + 1,
          answers[maxTransformation - 1][1],
        ];
        break;
      } else {
        answers.push([
          Math.floor(remainder / valueInSeconds),
          INTERVAL_TO_SECONDS_FORMAT[interval],
        ]);
      }

      remainder = remainder % valueInSeconds;
      numberOfTransformation++;
    }
  }
  const answer = answers.map(([value, format]) => `${value}${format}`).join("");
  return answer;
}
