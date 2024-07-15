
const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'audio/ATTRACTION - SUKHA  PRODGK.mp3',
        displayName: 'Attraction',
        cover: 'audio/images (2).jpeg',
        artist: 'SUKHA',
    },
    {
        path: 'audio/LOVE SICK _ Sidhu Moose Wala  AR Paisley  Mxrci  Official Visual Video  New Song 2022.mp3',
        displayName: 'Love Sick',
        cover: 'audio/images.jpeg',
        artist: 'Sidhu Moose Wala',
    },
    {
        path: 'audio/Sangdi - Sukha  Manni Sandhu (Official Video).mp3',
        displayName: 'Sangdi',
        cover: 'audio/image(5).jpg',
        artist: 'Manni Sandhu',
    }, 
    {
        path: 'audio/Saun Di Jhadi - OtaaL (Official Music Video).mp3',
        displayName: 'Saun Di Jhadi',
        cover: 'audio/Music-Language.jpg',
        artist: 'Otaal',
    }, 
    {
        path: 'audio/Tauba Tauba  Bad Newz  Vicky Kaushal  Triptii Dimri  Karan Aujla  In cinemas 19th July.mp3',
        displayName: 'Tauba Tauba',
        cover: 'audio/images (1).jpeg',
        artist: 'Karan Aujla',
    }
];

let musicIndex = 0;
let isPlaying = false;

const togglePlay=()=> {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

const playMusic=()=> {
    isPlaying = true;

    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

const pauseMusic=()=> {
    isPlaying = false;

    playBtn.classList.replace('fa-pause', 'fa-play');

    playBtn.setAttribute('title', 'Play');
    music.pause();
}

const loadMusic=(song)=> {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
}

const changeMusic =(direction)=> {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

const updateProgressBar =()=> {
    let { duration, currentTime } = music;
    let progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

const setProgressBar =(e)=> {
    let width = playerProgress.clientWidth;
    let clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);
