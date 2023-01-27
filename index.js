const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]



let num0 = posts[0].likes;
let num1 = posts[1].likes;
let num2 = posts[2].likes;

const postSection = document.querySelector("#posts")

renderPosts() 

// Like icons
const likeIcon0 = document.querySelector("#like-icon0")
const likeIcon1 = document.querySelector("#like-icon1")
const likeIcon2 = document.querySelector("#like-icon2")


// Likes displayed on post
const likes0 = document.querySelector("#likes0")
const likes1 = document.querySelector("#likes1")
const likes2 = document.querySelector("#likes2")


likeIcon0.addEventListener("click", function(){
    num0++;
    likes0.textContent = num0 + " Likes"
})

likeIcon1.addEventListener("click", function(){
    num1++;
    likes1.textContent = num1 + " Likes"
})

likeIcon2.addEventListener("click", function(){
    num2++;
    likes2.textContent = num2 + " Likes"
})


function renderPosts() {
    let post = "";
    for (let i=0; i < posts.length; i++) {
        post += 
        `
         <div class="user-info">
                    <img class="avatar" src="${posts[i].avatar}" alt="${posts[i].name}'s' avatar">
                       <div class="user-name-location">
                         <h3> ${posts[i].name} </h3>
                         <p> ${posts[i].location} </p>
                       </div>
                  </div>
                  <img src="${posts[i].post}" alt="${posts[i].name}'s post">
                 <div class="icons">
                     <img class="icon" id="like-icon${i}" src="images/icon-heart.png" alt="heart icon">
                     <img class="icon" id="comment-icon" src="images/icon-comment.png" alt="comment icon">
                       <img class="icon" id="dm-icon" src="images/icon-dm.png" alt="dm icon"> 
                 </div>
                 <div class="interactions"> 
                      <p id="likes${i}">${posts[i].likes} likes</p>
                      <p><span>${posts[i].username}</span> ${posts[i].comment}</p>
                 </div>
                 <div class="post-divider"></div>
        `
    } postSection.innerHTML = post;
    
}

    // HMTL MARKUP
    // <section class="container">
    //               <div class="user-info">
    //                 <img class="avatar" src="images/avatar-vangogh.jpg" alt="Vangogh's avatar">
    //                    <div class="user-name-location">
    //                      <h3> Vincent van Gogh </h3>
    //                      <p> Zudert, Netherlands </p>
    //                    </div>
    //               </div>
    //               <img src="images/post-vangogh.jpg" alt="Vangogh's post">
    //              <div class="icons">
    //                  <img class="icon" id="like-icon1" src="images/icon-heart.png" alt="heart icon">
    //                  <img class="icon" id="comment-icon" src="images/icon-comment.png" alt="comment icon">
    //                    <img class="icon" id="dm-icon" src="images/icon-dm.png" alt="dm icon"> 
    //              </div>
    //              <div class="interactions"> 
    //                   <p id="likes-el1"></p>
    //                   <p><span>Vincey1853</span> just took a few mushrooms lol</p>
    //              </div>
    //              <div class="post-divider"></div>
    //     </section>















