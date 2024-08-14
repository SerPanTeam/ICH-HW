renderPosts();

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
  let posts = [];
  for (let i = localStorage.length - 1; i >= 0; i--) {
    if (localStorage.key(i).startsWith('post-'))
      posts.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  posts.sort((a, b) => a.id - b.id).forEach(val => showPost(val))
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

  postContainer.append(postText, postDate, postID);
  document.body.querySelector("#postContainer").prepend(postContainer);

}