import navbar from "../components/Navbar.js";
document.getElementById("navbar").innerHTML = navbar();

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
        cost: 3000
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
        cost: 3200
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
        cost: 3000
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
        cost: 5000
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
        cost: 5500
    },
    {
        id: 6,
        title: "Hyderabad",
        description: "Hyderabad is the city of India. It is the most populous for pearls city in India.",
        image: [
            "https://newsmeter.in/h-upload/2023/12/21/360664-whatsapp-image-2023-12-21-at-94400-am.webp",
            "https://cdn.siasat.com/wp-content/uploads/2023/10/2023_10img08_Oct_2023_PTI10_08_2023_000020B-scaled.jpg "

        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem('likes_6')) || 0,
        cost: 2500
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

const tourData = (data) => {
    data.map((ele, index) => {
        let div = document.createElement("div");
        let title = document.createElement("h1");
        title.innerHTML = ele.title;

        let image = document.createElement("img");
        image.src = ele.image[1];
        image.classList.add("images");

        let description = document.createElement("h6");
        description.innerHTML = `About: ${ele.description}`;

        let cost = document.createElement("h3");
        cost.innerHTML = `Cost: ${ele.cost}`;

        let btn1 = document.createElement("span");
        btn1.innerHTML = `<i class="fa-regular fa-heart"></i>`;
        btn1.addEventListener("click", () => handleLike(index));
        btn1.classList.add("btn1");
        
        let btnParent = document.createElement("div");
        let btn2 = document.createElement("button");
        btn2.innerHTML = "Book Now";
        btn2.classList.add("btn2");


        let likesParagraph = document.createElement("p");
        likesParagraph.classList.add("likes");
        likesParagraph.innerHTML = `Likes: ${ele.likes}`;

        div.append(image, title, description, cost, likesParagraph, btnParent);
        btnParent.append(btn1, btn2);

        div.classList.add("cityChild");
        document.getElementById("tour-container").append(div);
    });
};
tourData(data);
