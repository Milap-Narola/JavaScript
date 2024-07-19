const API_KEY = 'AIzaSyCKDej9AdKJxHIYT1qB5bSRTfESpQCKA6w'; 
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';


const getdata = async (query) => {
    let req = await fetch(`${YOUTUBE_API_URL}/search?part=snippet&q=${query}&type=video&key=${API_KEY}`);
    let res = await req.json();
    mapper(res.items);
}

const mapper = (data) => {
    document.getElementById("show_data").innerHTML = "";

    data.map((item) => {
        let poster = document.createElement("img");
        poster.src = item.snippet.thumbnails.high.url;
        poster.setAttribute("id", "poster");

        poster.addEventListener("click", () => {
            localStorage.setItem("videoId", item.id.videoId);
            showVideoPage();
        });

        let title = document.createElement("h6");
        title.innerHTML = item.snippet.title;

        let channel = document.createElement("div");
        channel.innerHTML = item.snippet.channelTitle;
        channel.setAttribute("class", "channel");

        let box = document.createElement("div");
        box.append(poster, title, channel);
        box.setAttribute("id", "box");
        document.getElementById("show_data").append(box);
    });
}


const handledata = (e) => {
    e.preventDefault();
    let search = document.getElementById("input").value;
    getdata(search);
}


if (document.getElementById("search-form")) {
    document.querySelector(".search-btn").addEventListener("click", handledata);
}


const showVideoPage = async () => {
    document.getElementById("search-section").style.display = "none";
    document.getElementById("video-section").style.display = "block";

    const videoId = localStorage.getItem("videoId");

    if (videoId) {
        const response = await fetch(`${YOUTUBE_API_URL}/videos?part=snippet&id=${videoId}&key=${API_KEY}`);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            const videoUrl = `https://www.youtube.com/embed/${videoId}`;
            const iframe = document.createElement("iframe");
            iframe.src = videoUrl;
            iframe.width = "800";
            iframe.height = "450";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;

            document.getElementById("video-container").innerHTML = "";
            document.getElementById("video-container").appendChild(iframe);
        } else {
            document.getElementById("video-container").innerHTML = "<p>Video details not found.</p>";
        }
    } else {
        document.getElementById("video-container").innerHTML = "<p>No video selected.</p>";
    }
}


document.getElementById("back-link")?.addEventListener("click", () => {
    document.getElementById("search-section").style.display = "block";
    document.getElementById("video-section").style.display = "none";
    localStorage.removeItem("videoId");
});
