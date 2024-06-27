import navbar from "../components/Navbar.js";
import getValue from "../components/getValue.js";

let isLogin = localStorage.getItem("isLogin") || false;
let userdetails = JSON.parse(localStorage.getItem("user"));
if (!isLogin) {
    window.location.href = "/Test-7/html/signup.html"
}
if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username)
}
else {
    document.getElementById("navbar").innerHTML = navbar()
}

let data = [
    {
        id: 1,
        title: "Rishikesh",
        description: "Rishikesh is the city of India. It is the most populous city for yoga India.",
        image: [
            "https://uttarakhandtourism.gov.in/sites/default/files/2021-03/Rishikesh%20Banner1.jpg",
            "https://www.localguidesconnect.com/t5/image/serverpage/image-id/500420iF817930C22D4315C/image-size/large?v=v2&px=999"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem('likes_1')) || 0,
        price: 3000
    },
    {
        id: 2,
        title: "Amritsar",
        description: "Amritsar is the city of India. It is the most populous city for golden temple India.",
        image: [
            "https://static.toiimg.com/photo/53393616.cms",
            "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/09/29/Pictures/_7023be14-c39b-11e8-9e8c-b17643e39fb5.jpg"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem('likes_2')) || 0,
        price: 3200
    },
    {
        id: 3,
        title: "Agra",
        description: "Agra is the city of India. It is the most populous for Taj mahal in India.",
        image: [
            "https://static.toiimg.com/thumb/msid-105717782,width-748,height-499,resizemode=4,imgsize-107610/.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Jahangiri_Mahal-Red_Fort-Agra-India5356.JPG/556px-Jahangiri_Mahal-Red_Fort-Agra-India5356.JPG"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem('likes_3')) || 0,
        price: 3000
    },
    {
        id: 4,
        title: "Jaipur",
        description: "Jaipur is the city of India. It is the most populous for pink city in India.",
        image: [
            "https://i3.wp.com/www.travelstart.co.za/blog/wp-content/uploads/2019/08/Jaipur-47.jpg",
            "https://www.oyorooms.com/travel-guide/wp-content/uploads/2022/03/Need-a-Vacation-Heres-Jaipur-The-Pink-Citys-Top-Must-See-Attractions.jpg"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem('likes_4')) || 0,
        price: 5000
    },
    {
        id: 5,
        title: "Kolkata",
        description: "Kolkata is the city of India. It is the most populous for historically city in India.",
        image: [
            "https://cdn.enjoytravel.com/img/travel-news/kolkata-was-previously-called-calcutta.jpg",
            "https://sundayguardianlive.com/wp-content/uploads/2021/04/Prasenjit-K-Basu_Kolkata.jpg"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem('likes_5')) || 0,
        price: 5500
    },
    {
        id: 6,
        title: "Hyderabad",
        description: "Hyderabad is the city of India. It is the most populous for pearls city in India.",
        image: [
            "https://newsmeter.in/h-upload/2023/12/21/360664-whatsapp-image-2023-12-21-at-94400-am.webp",
            "https://cdn.siasat.com/wp-content/uploads/2023/10/2023_10img08_Oct_2023_PTI10_08_2023_000020B-scaled.jpg"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem('likes_6')) || 0,
        price: 2500
    },
];

const handleLike = (index) => {
    data[index].likes += 1;
    let likesElement = document.getElementsByClassName("likes")[index];
    if (likesElement) {
        likesElement.innerHTML = `Likes: ${data[index].likes}`;
    }
    localStorage.setItem(`likes_${data[index].id}`, JSON.stringify(data[index].likes));
};

const isExists = (id) => {
    let booking = JSON.parse(localStorage.getItem("booking")) || [];
    let temp = booking.filter((item) => item.id === id);
    return temp.length > 0;
};

const handleBooking = (ele) => {
    let booking = JSON.parse(localStorage.getItem("booking")) || [];
    if (isExists(ele.id)) {
        booking = booking.map((item) => {
            if (item.id === ele.id) {
                item.qty += 1;
            }
            return item;
        });
        alert("One more added successfully");
    } else {
        booking.push({ ...ele, qty: 1 });
        alert("Thanks for Booking!");

        window.location.href = "/Test-7/html/Book.html"
    }

    localStorage.setItem("booking", JSON.stringify(booking));
};

const tourData = (data) => {
    document.getElementById("tour-container").innerHTML = '';
    data.forEach((ele, index) => {
        let div = document.createElement("div");

        let title = document.createElement("h1");
        title.innerHTML = ele.title;

        let image = document.createElement("img");
        image.src = ele.image[1];
        image.classList.add("images");

        let description = document.createElement("h6");
        description.innerHTML = `About: ${ele.description}`;

        let price = document.createElement("h3");
        price.innerHTML = `Price: ${ele.price}`;

        let btn1 = document.createElement("span");
        btn1.innerHTML = `<i class="fa-regular fa-heart"></i>`;
        btn1.addEventListener("click", () => handleLike(index));
        btn1.classList.add("btn1");

        let btnParent = document.createElement("div");
        let btn2 = document.createElement("button");
        btn2.innerHTML = "Book Now";
        btn2.classList.add("btn2");
        btn2.addEventListener("click", () => handleBooking(ele));

        let likesParagraph = document.createElement("p");
        likesParagraph.classList.add("likes");
        likesParagraph.innerHTML = `Likes: ${ele.likes}`;

        btnParent.append(btn1, btn2);
        div.append(image, title, description, price, likesParagraph, btnParent);

        div.classList.add("cityChild");
        document.getElementById("tour-container").append(div);
    });
};
tourData(data);

const handleSort = (orderBy) => {
    let sortedData = data.sort((a, b) => orderBy === "LTH" ? a.price - b.price : b.price - a.price);
    tourData(sortedData);
};

document.getElementById("LTH").addEventListener("click", () => handleSort("LTH"));
document.getElementById("HTL").addEventListener("click", () => handleSort("HTL"));


const handleInput = (event) => {

};

const handleSearchData = (event) => {
    event.preventDefault();

};

document.getElementById("searchValue").addEventListener("keypress", handleInput);
document.getElementById("searching").addEventListener("submit", handleSearchData);
