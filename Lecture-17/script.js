document.addEventListener('DOMContentLoaded', (event) => {
    const imageUrl = "https://img.freepik.com/premium-photo/colorful-bird-with-purple-green-background_574881-1411.jpg";
    localStorage.setItem('image', imageUrl);

    const displayImage = document.getElementById('displayImage');
    displayImage.src = localStorage.getItem('image') || '';


    const counts = {
        likeBtn:(localStorage.getItem('likeBtnCount')) || 0,
        commentBtn:(localStorage.getItem('commentBtnCount')) || 0,
        shareBtn:(localStorage.getItem('shareBtnCount')) || 0
    };


    const countNAlert = (buttonId, message) => {
        counts[buttonId]++;
        localStorage.setItem(buttonId + 'Count', counts[buttonId]);
        alert(`${message} Total: ${counts[buttonId]}`);
    };


    document.getElementById('likeBtn').addEventListener('click', () => {
        countNAlert('likeBtn', 'You liked the image!');
        likeBtn.style="color:red"
    });

    document.getElementById('commentBtn').addEventListener('click', () => {
        countNAlert('commentBtn', 'You commented on the image!');
        commentBtn.style="color:green"
    });

    document.getElementById('shareBtn').addEventListener('click', () => {
        countNAlert('shareBtn', 'You shared the image!');
        shareBtn.style="color:darkblue"
    });
});

