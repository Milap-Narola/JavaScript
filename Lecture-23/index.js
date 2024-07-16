const toggleBtn = document.getElementById("toggle");
const navBar = document.querySelector(".nav-bar");
const sideBar = document.querySelector(".side-bar");
const video = document.querySelector(".main-page .videos");
const vidCards = document.querySelectorAll(".videos .card");
const vidIcons = document.querySelectorAll(".videos .card .icons i");

toggleBtn.addEventListener("click",  ()=> {
    navBar.classList.toggle("hide");
    sideBar.classList.toggle("show");
});

document.getElementById('toggle').addEventListener('click',  ()=> {
    document.querySelector('.nav-bar').classList.toggle('active');
});

document.querySelector('.search-btn').addEventListener('click',  () =>{
    const searchText = document.querySelector('.search-box input').value;
    alert('Search for: ' + searchText);
});

document.querySelectorAll('.card .icons i').forEach(icon => {
    icon.addEventListener('click', ()=> {
        const action = this.classList.contains('fa-clock') ? 'Watch Later' : 'Add to Playlist';
        alert(action + ' action clicked');
    });
});

document.querySelectorAll('.side-bar ul li i').forEach(icon => {
    icon.addEventListener('click',  ()=> {
        const action = this.classList.contains('fa-home') ? 'Home' :
            this.classList.contains('fa-compass') ? 'Explore' :
                this.classList.contains('fa-chart-line') ? 'Subscriptions' :
                    this.classList.contains('fa-caret-square-right') ? 'Library' : 'Other';
        alert(action + ' icon clicked');
    });
});

const fetchVideos = async () => {

    let req = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=js&type=video&key=AIzaSyDypeeji_RP50cVWDQ4Vq6ZQd7EaiqGuhk')
    let res = await req.json();
    displayVideos(res)
    return res;
}


const displayVideos = (res) => {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';

    res.map(video => {
        let videoCard = `<div class="card">
                <div class="card-image">
                    <img src="${video.thumbnail}" alt="${video.title}">
                </div>
                <div class="content">
                    <img src="${video.channelThumbnail}" alt="${video.channelName}">
                    <div class="info">
                        <h4>${video.title}</h4>
                        <p>${video.channelName} • ${video.views} views • ${video.publishedAt}</p>
                    </div>
                </div>
                <div class="icons">
                    <i class="fas fa-clock"></i>
                    <i class="fas fa-list"></i>
                </div>
            </div>
        `;
        videoContainer.innerHTML += videoCard;

        console.log(vidCards);
    });
}


fetchVideos()