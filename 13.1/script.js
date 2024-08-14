let posts = [];
function sendPost(event) {
  event.preventDefault();
  let postText = document.querySelector("#textPost");
  document.body.appendChild(document.createElement("div.text")).textContent =
    postText.value;
  posts.push({
    id: Date.now,
    date: Date.toLocaleDateString(),
    text: postText.value,
  });

  postText.value = "";
}
