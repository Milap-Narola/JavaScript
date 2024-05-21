let count = document.getElementsByClassName("count");
let data = [];
const countData = () => {
    for (let i = 0; i < count.length; i++) {

        data.push(1);
        if (data[i] != count[i].getAttribute("max-data")) {
            data[i]++;
        }
        count[i].innerHTML = data[i];
    }
}
let main = document.getElementById("counter");
window.onscroll = function () {
    let timer = setInterval(() => {
        let topEle = main.offsetTop;
        let btmEle = main.offsetTop + main.clientHeight;
        let topScreen = window.pageYOffset;
        let btmScreen = window.pageYOffset + window.innerHeight;
        if (btmScreen > topEle && topScreen < btmEle) {
            countData();
        }
        else {
            clearInterval(timer);
            for (let i = 0; i < count.length; i++) {
                count[i].innerHTML = 1;
                data = [];
            }
        }
    }, 10);
}