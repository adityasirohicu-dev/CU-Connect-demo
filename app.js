function showPage(pageId){

    const pages = document.querySelectorAll(".page");

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document
        .getElementById(pageId)
        .classList.add("active");

}
function showChatTab(tab){

    const personal =
    document.getElementById("personalChats");

    const community =
    document.getElementById("communityChats");

    const personalBtn =
    document.getElementById("personalBtn");

    const communityBtn =
    document.getElementById("communityBtn");

    if(tab==="personal"){

        personal.style.display="block";
        community.style.display="none";

        personalBtn.classList.add("active-tab");
        communityBtn.classList.remove("active-tab");

    }

    else{

        community.style.display="block";
        personal.style.display="none";

        communityBtn.classList.add("active-tab");
        personalBtn.classList.remove("active-tab");

    }

}
const chats = {

aryan:[
{
type:"received",
text:"Bro are you joining the hackathon?"
},
{
type:"sent",
text:"Yes 🚀"
},
{
type:"received",
text:"Let's build a team."
}
],

priya:[
{
type:"received",
text:"Did you complete the Java assignment?"
},
{
type:"sent",
text:"Almost done."
}
],

rahul:[
{
type:"received",
text:"Want to discuss startup ideas?"
},
{
type:"sent",
text:"Sure 🚀"
}
],

yash:[
{
type:"received",
text:"I'm gay."
},
{
type:"sent",
text:"I knew 😂"
}
]

};

let currentChat = "aryan";

function loadPersonalChat(user){

currentChat = user;

const title =
document.getElementById("chatTitle");

const messages =
document.getElementById("chatMessages");

messages.innerHTML="";

if(user==="aryan"){
title.innerText="Aryan Singh";
}

if(user==="priya"){
title.innerText="Priya Sharma";
}

if(user==="rahul"){
title.innerText="Rahul Verma";
}
if(user==="yash"){
title.innerText="Yash Srivastava";
}

chats[user].forEach(msg=>{

messages.innerHTML += `
<div class="message ${msg.type}">
${msg.text}
</div>
`;

});

}

function sendMessage(){

const input =
document.getElementById("messageInput");

const text = input.value.trim();

if(text==="") return;

chats[currentChat].push({
type:"sent",
text:text
});

input.value="";

loadPersonalChat(currentChat);

}

window.onload=function(){

loadPersonalChat("aryan");

};
// CREATE POST MODAL

const createPostBtn =
document.getElementById("createPostBtn");

const createPostModal =
document.getElementById("createPostModal");

const closeModal =
document.getElementById("closeModal");

let createMode = "post";

createPostBtn.onclick = function(){

    createMode = "post";

    document.getElementById("modalTitle").innerText =
    "Create Post";

    createPostModal.style.display = "flex";

}
const createStoryBtn =
document.getElementById("createStoryBtn");

createStoryBtn.onclick = function(){

    createMode = "story";

    document.getElementById("modalTitle").innerText =
    "Create Story";

    createPostModal.style.display = "flex";

}

closeModal.onclick = function(){

    createPostModal.style.display = "none";

}

window.onclick = function(event){

    if(event.target == createPostModal){

        createPostModal.style.display = "none";

    }

}
const publishPost =
document.getElementById("publishPost");

publishPost.onclick = function(){

    const title =
    document.getElementById("postTitle").value;

    const content =
    document.getElementById("postContent").value;

    if(title.trim()==="" || content.trim()===""){

        alert("Please fill all fields.");

        return;

    }

    const post = document.createElement("div");

    post.className = "post";

    post.innerHTML = `

        <div class="post-header">

            <img src="https://i.pravatar.cc/60?img=5">

            <div>

                <h3>Aditya Sirohi</h3>

                <p>CSE Core • 2nd Year</p>

            </div>

        </div>

        <div class="caption">

            <h3>${title}</h3>

            <br>

            <p>${content}</p>

        </div>

        <div class="post-actions">

            <button>❤️ Like</button>

            <button>💬 Comment</button>

            <button>📤 Share</button>

        </div>

    `;

    const postsContainer =
    document.getElementById("postsContainer");

    postsContainer.prepend(post);

    document.getElementById("postTitle").value="";

    document.getElementById("postContent").value="";

    createPostModal.style.display="none";

}
const stories = [

{
type:"image",

name:"You",

profile:"https://i.pravatar.cc/150?img=5",

media:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",

caption:"Building CU Connect 🚀"
},

{
type:"image",

name:"Aryan",

profile:"https://i.pravatar.cc/150?img=12",

media:"https://images.unsplash.com/photo-1511578314322-379afb476865?w=900",

caption:"Hackathon tomorrow!"
},

{
    type:"image",
name:"Priya",
profile:"https://i.pravatar.cc/150?img=18",
media:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
caption:"Late night coding ☕"
},

{
    type:"image",
name:"Rahul",

profile:"https://i.pravatar.cc/150?img=22",
media:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900",
caption:"AI Workshop"
},

{
    type:"image",
name:"Yash",

profile:"https://i.pravatar.cc/150?img=28",
media:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",
caption:"College vibes"
},

{
    type:"image",
name:"Ananya",

profile:"https://i.pravatar.cc/150?img=35",
media:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900",
caption:"Library day"
},

{
    type:"image",
name:"Karan",
profile:"https://i.pravatar.cc/150?img=40",
media:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900",
caption:"Working hard"
},

{
    type:"image",
name:"Riya",
profile:"https://i.pravatar.cc/150?img=47",
media:"https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=900",
caption:"Coffee + Coding"
},

{
    type:"image",
name:"Dev",
profile:"https://i.pravatar.cc/150?img=52",
media:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900",
caption:"Campus life ❤️"
}

];

function openStory(index){

    window.currentStory = index;


    const story = stories[index];

    document.getElementById("storyViewer").style.display = "flex";

    document.getElementById("storyProfile").src = story.profile;

    document.getElementById("storyUsername").innerText = story.name;

    const storyImage = document.getElementById("storyImage");
const storyVideo = document.getElementById("storyVideo");

if(story.type === "image"){

    storyImage.style.display = "block";
    storyVideo.style.display = "none";

    storyImage.src = story.media;

}
else if(story.type === "video"){

    storyImage.style.display = "none";
    storyVideo.style.display = "block";

    storyVideo.src = story.media;

}

    document.getElementById("storyCaption").innerText = story.caption;

    const progress = document.getElementById("storyProgressBar");

    progress.style.transition = "none";
    progress.style.width = "0%";

    setTimeout(() => {

        progress.style.transition = "width 5s linear";
        progress.style.width = "100%";

    }, 50);

}

document.getElementById("closeStory").onclick = function(){

    document.getElementById("storyViewer").style.display = "none";

}

document.getElementById("nextStory").onclick = function(){

    window.currentStory++;

    if(window.currentStory >= stories.length){

        window.currentStory = 0;

    }

    openStory(window.currentStory);

}

document.getElementById("prevStory").onclick = function(){

    window.currentStory--;

    if(window.currentStory < 0){

        window.currentStory = stories.length - 1;

    }

    openStory(window.currentStory);

}

document.getElementById("storyViewer").onclick = function(e){

    if(e.target.id === "storyViewer"){

        document.getElementById("storyViewer").style.display = "none";

    }

}

window.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        document.getElementById("storyViewer").style.display="none";

    }

    if(e.key==="ArrowRight"){

        document.getElementById("nextStory").click();

    }

    if(e.key==="ArrowLeft"){

        document.getElementById("prevStory").click();

    }

});
