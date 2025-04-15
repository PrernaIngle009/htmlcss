const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const soundI = document.querySelector(".sound");
const like = document.querySelector(".like");
const twitter = document.querySelector(".tweet");
const show = document.getElementById("show");
const mainContainer = document.getElementById("main");
const likedContainer = document.getElementById("more");
const likedList = document.getElementById("likedQuotes");
const closeBtn = document.getElementById("close");
let likedQuotes = [];
async function getQuotes(url) {
  let response = await fetch(url); //will fetch the url
  var data = await response.json(); //convert response into js
  quote.innerHTML = `"${data.content}"`; //add data into quotes
  author.innerHTML = data.author;
}
getQuotes(api_url);

soundI.addEventListener("click", () => {
  if (speechSynthesis.speaking) {
    // To check if it is already speaking
    speechSynthesis.cancel();
  } else {
    let utterance = new SpeechSynthesisUtterance( //if not then create new object
      `${quote.innerText} by ${author.innerText}`
    );
    speechSynthesis.speak(utterance); //speak and speaking both have different purpose
  }
});

twitter.addEventListener("click", () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" + //twitter share link
      quote.innerHTML +
      "---by" +
      author.innerHTML,
    "tweet Window",
    "width=600, height=500" //to open twitter window
  );
});

like.addEventListener("click", function () {
  // Log to check if the click event is triggering

  const currentQ = quote.innerText;
  const currentA = author.innerText;
  // Check if the quote is already liked
  const isLiked = likedQuotes.some((item) => {
    return item.text === currentQ && item.author === currentA;
  });

  // If it's not liked, add it to the likedQuotes array and fill the heart
  if (!isLiked) {
    likedQuotes.push({ text: currentQ, author: currentA });
    like.classList.remove("ri-heart-line"); // Remove the empty heart class
    like.classList.add("ri-heart-fill"); // Add the filled heart class
  } else {
    // If it's already liked, remove it from the likedQuotes array and unfill the heart
    likedQuotes = likedQuotes.filter(
      (item) => item.text !== currentQ || item.author !== currentA
    );
    like.classList.remove("ri-heart-fill");
    like.classList.add("ri-heart-line");
  }
});

likedContainer.style.display = "none";
show.addEventListener("click", () => {
  console.log("Showing liked quotes:", likedQuotes);
  likedContainer.style.display = "flex";
  mainContainer.classList.add("blur");
  likedList.innerHTML = "";
  likedQuotes.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `"${item.text}"-${item.author}`;
    likedList.appendChild(li);
  });
});
closeBtn.addEventListener("click", () => {
  likedContainer.style.display = "none";
  mainContainer.classList.remove("blur");
});
