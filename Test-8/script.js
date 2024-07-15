<<<<<<< HEAD

=======
>>>>>>> 775c476e070eea593bc4584e9d7ba306ef618d06
const player = document.getElementById("player");
const progress = document.getElementById("progress");
const playbtn = document.getElementById("playbtn");
const prevbtn = document.getElementById("prevbtn");
const nextbtn = document.getElementById("nextbtn");
const titleDisplay = document.getElementById("title");
const artistDisplay = document.getElementById("artist");
const current = document.getElementById("current");
const songImg = document.getElementById("songImg");

const songs = [
    {
        title: "Jadon Khabran Ch Aunda Tera Naam",
        artist: "Sidhu Moose Wala",
        src: "https://youtu.be/WeweCvrU2fM?si=xU8U2P0Jtqv1bMrfhttps://rr2---sn-cvh76nl6.googlevideo.com/videoplayback?expire=1721044894&ei=PruUZq_WE6K06dsPt9el2A0&ip=144.76.140.134&id=o-ANVTrmiKU53RsEVdJRaZd6QgqJB_FL-ejePWjOvc0XhG&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=audio%2Fwebm&rqh=1&gir=yes&clen=4941379&dur=282.121&lmt=1717064284430163&keepalive=yes&c=ANDROID_TESTSUITE&txp=5432434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgHENpNG5Lmv_EhP8IAKUFkOBEx7-gAxM0R_vs1MgAeKYCIQC02FmqPQ2IdXMLbM7ruBoAEE0WaS5Zf170-tM0xsYetw%3D%3D&rm=sn-4g5ezk76&fexp=24350516,24350518&req_id=9d1f77ec9e99a3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-bu2a-nu8s7s&cms_redirect=yes&cmsv=e&mh=-7&mip=27.116.48.74&mm=29&mn=sn-cvh76nl6&ms=rdu&mt=1721023016&mv=m&mvi=2&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AHlkHjAwRgIhAI55YtEcM23NYxUpadNd7onk9ope-F5LTWoYKNNsCuVkAiEAhaI2GwnUX63_6Poiy54BGrqGKWULieUfWfCqYvEa5m8%3D",
        img: ""
    },
    {
        title: "Another Song",
        artist: "Siddhu Moosewala",
        src: "./audio/Jdo Khabra Ch Aunda Tera Naam(PagalWorld.com.so).mp3",
        img: "./images/another-song.jpg"
    },
    {
        title: "Third Song",
        artist: "Pawan Singh Bhojpuriya",
        src: "./audio/Lolipop Lagelu (Remix) - Dj Noise(PagalWorld.com.so).mp3",
        img: "./images/third-song.jpg"
    },
    {
        title: "Fourth Song",
        artist: "Jubin Nautiyal",
        src: "./audio/Lut Gaye(PagalWorld.com.so).mp3",
        img: "./images/fourth-song.jpg"
    },
    {
        title: "Fifth Song",
        artist: "Nowhere",
        src: "./audio/Faded(PagalWorld.com.so).mp3",
        img: "./images/fifth-song.jpg"
    }
];

let currentIndex = 0;


const takesong = (index) => {
    const { src, title, artist, img } = songs[index];
    player.src = src;
    titleDisplay.innerText = title;
    artistDisplay.innerText = artist;
    songImg.src = img;
};


const playPause = () => {
    if (player.paused) {
        player.play();
        playbtn.classList.remove("paused");
    } else {
        player.pause();
        playbtn.classList.add("paused");
    }
};

playbtn.addEventListener("click", playPause);


player.onplay = () => {
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
};

player.onpause = () => {
    playbtn.classList.add("fa-play");
    playbtn.classList.remove("fa-pause");
};


player.ontimeupdate = () => {
    let ct = player.currentTime;
    current.innerHTML = timeFormat(ct);

    let duration = player.duration;
    let prog = Math.floor((ct * 100) / duration);
    progress.style.width = prog + "%";
};


const timeFormat = (ct) => {
    let minutes = Math.floor(ct / 60);
    let seconds = Math.floor(ct % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
};


prevbtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    player.play();
});


nextbtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    player.play();
});


takesong(currentIndex);
