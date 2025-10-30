function checkAnswer(question, answer) {
  const result = document.getElementById("result");

  if (question === 1 && answer === "A") {
    result.innerText = "✅ Correct! Governance = creating and enforcing policies.";
  } else if (question === 2 && answer === "A") {
    result.innerText = "✅ Right! Compliance = ensuring policies follow laws and standards.";
  } else {
    result.innerText = "❌ Not quite, try again!";
  }
}
