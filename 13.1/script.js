function sendPost(event) {
  event.preventDefault();
  const postText = document.querySelector("#textPost");
  post = {
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    text: postText.value,
  };

  postText.value = "";
  localStorage.setItem(`post-${post.id}`, JSON.stringify(post));
  showPost(post)
}

function renderPosts() {

}

function showPost(post) {
  const postContainer = document.createElement("div");
  postContainer.classList.add("post");

  const postText = document.createElement("div");
  postText.classList.add("text");
  postText.textContent = post.text;

  const postDate = document.createElement("div");
  postDate.classList.add("date");
  postDate.textContent = post.date;
  
  const postID = document.createElement("div");
  postID.classList.add("id");
  postID.textContent = post.id;

  document.body.appendChild(postContainer).append(postText, postDate, postID);

}