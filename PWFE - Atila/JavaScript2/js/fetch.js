const url_fetch = "https://jsonplaceholder.typicode.com/posts"

const loadingElement = document.querySelector("#loading_fetch");
const postsContainer = document.querySelector("#posts-container_fetch");

const postPage = document.querySelector('#post');
const postContainer = document.querySelector('#post-container');
const commentContainer = document.querySelector('#comments-container');

const commentForm = document.querySelector('#comment-form');
const emailInput = document.querySelector('#email');
const bodyInput = document.querySelector('#body_textArea');


// GET id from URL

const urlSearchParams = new URLSearchParams(window.location.search);
const postID = urlSearchParams.get("id");

// GET all posts

async function getAllPosts() {
    
    const response = await fetch(url_fetch);

    console.log(response);
    
    const data = await response.json();
    
    console.log(data);

    loadingElement.classList.add('hide');

    data.map((post) => {
        const div = document.createElement("div");

        const title = document.createElement("h2");
        const body = document.createElement("p");
        const link = document.createElement("a");

        title.innertext = post.title;
        body.innerText = post.body;
        link.innerText = "LER";
        link.setAttribute("href", `./post.html?id=${post.id}`);

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        postsContainer.appendChild(div);

    });
};

// GET individual post

async function getPost(id) {
    const [responsePost, responseComments] = await Promise.all([
        fetch(`${url_fetch}/${id}`),
        fetch(`${url_fetch}/${id}/comments`)
    ])
    const dataPost = await responsePost.json();

    const dataComments = await responseComments.json();

    loadingElement.classList.add("hide");
    postPage.classList.remove("hide");

    const title =document.createElement('h1');
    const body = document.createElement('p');

    title.innerText = dataPost.title;
    body.innerText = dataPost.body;

    postContainer.appendChild(title);
    postContainer.appendChild(body);

    console.log(dataComments)
    dataComments.map((Comment => {
        createComment(Comment);

    }));
};

//create comment
function createComment(comment) {
    const div = document.createElement("div");
    const email = document.createElement("h3");
    const commentBody = document.createElement("p");
    
    email.innerText = comment.email;
    commentBody.innerText = comment.body;

    div.appendChild(email);
    div.appendChild(commentBody);

    commentContainer.appendChild(div);
};

//Post a commente
async function postComment(comment) {
    const response = await fetch(`${url_fetch}/${postID}/comments`,{
        method: "POST",
        body: comment,
        headers:{
            "Content-type": "application/json",
        },
    });
    const data = await response.json();

    createComment(data);
}

if(!postID){
    getAllPosts();
}else{
    getPost(postID);

    //add event to comment form

    commentForm.addEventListener("submit", (elements) =>{
        elements.preventDefault();

        let comment = {
            email: emailInput.value,
            body: bodyInput.value,
        };
        comment = JSON.stringify(comment);

        postComment(comment);
    });
    
};