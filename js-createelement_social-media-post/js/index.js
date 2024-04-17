console.clear();

const bodyElement = document.body;




function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);



// Exercise:
// Use document.createElement() and append another social media post to the body.


const newPost = document.createElement("article");
newPost.classList.add("post");

console.log(newPost);


const newPostContent = document.createElement("p");
newPostContent.classList.add("post__content");
newPostContent.innerHTML = "Another new social media post";
newPost.append(newPostContent);

const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");

const newPostUsername = document.createElement("span");
newPostUsername.classList.add("post__username");
newPostUsername.innerHTML = "@other_user";
newPostFooter.append(newPostUsername);

const newPostLikeBtn = document.createElement("button");
newPostLikeBtn.classList.add("post__button");
newPostLikeBtn.setAttribute("data-js", "like-button");
newPostLikeBtn.setAttribute("type", "button");

newPostLikeBtn.innerHTML = " ♥ Like";
newPostFooter.append(newPostLikeBtn);


newPost.append(newPostFooter);

bodyElement.append(newPost);


newPostLikeBtn.addEventListener("click", handleLikeButtonClick);


