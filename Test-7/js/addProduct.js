import Navbar from "../components/Navbar.js";
document.getElementById("navbar").innerHTML = Navbar()

let data = [
    {
        id: 1,
        title: "Rishikesh",
        description: "Delhi is the capital city of India. It is the most populous city in India.",
        image: [
            "https://uttarakhandtourism.gov.in/sites/default/files/2021-03/Rishikesh%20Banner1.jpg",
            "https://www.localguidesconnect.com/t5/image/serverpage/image-id/500420iF817930C22D4315C/image-size/large?v=v2&px=999",
            "https://www.travelandleisure.com/thmb/iAIrOVW7yWrDG8pZBpKMOvEGuNQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-delhi-india-NEWDELHITG0721-60d592e1603349298a0206d67d08582b.jpg",
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem('likes_1')) || 0,
        cost: 1500
    },
    {
        id: 2,
        title: "Mumbai",
        description: "Mumbai is the capital city of India. It is the most populous city in India.",
        image: [
            "https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Mumbai_Aug_2018_%2843397784544%29.jpg/1200px-Mumbai_Aug_2018_%2843397784544%29.jpg",
            "https://www.nationsonline.org/gallery/India/Gateway-of-India.jpg"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem('likes_2')) || 0,
        cost: 2600
    },
    {
        id: 3,
        title: "Bangalore",
        description: "Bangalore is the capital city of India. It is the most populous city in India.",
        image: [
            "https://cdn.britannica.com/35/142635-050-8828F21A/Parkland-building-High-Court-Vidhana-Soudha-Karnataka.jpg",
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/01/03/11/bengaluru.jpg",
            "https://static.toiimg.com/photo/62507296.cms"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem('likes_3')) || 0,
        cost: 6000
    },
    {
        id: 4,
        title: "Chennai",
        description: "Chennai is the capital city of India. It is the most populous city in India.",
        image: [
            "https://www.agoda.com/wp-content/uploads/2024/03/Chennai-India-1049x700.jpg",
            "https://static.toiimg.com/thumb/width-600,height-400,msid-24531101.cms",
            "https://lp-cms-production.imgix.net/2019-06/f142b3016a4a4bb7bb7c20b1aa38a7c6-chennai-madras.jpg?sharp=10&vib=20&w=1200&w=600&h=400"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem('likes_4')) || 0,
        cost: 70000
    },
    {
        id: 5,
        title: "Kolkata",
        description: "Kolkata is the capital city of India. It is the most populous city in India.",
        image: [
            "https://sundayguardianlive.com/wp-content/uploads/2021/04/Prasenjit-K-Basu_Kolkata.jpg",
            "https://cdn.enjoytravel.com/img/travel-news/kolkata-was-previously-called-calcutta.jpg",
            "https://media.gettyimages.com/id/536118160/it/foto/howrah-bridge-in-kolkata.jpg?s=612x612&w=gi&k=20&c=yz7chnnK70TnyP5qYD7Qp4WKLT2ahO85P-WL3o-OhfM="
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem('likes_5')) || 0,
        cost: 50
    },
    {
        id: 6,
        title: "Hyderabad",
        description: "Hyderabad is the capital city of India. It is the most populous city in India.",
        image: [
            "https://static.toiimg.com/thumb/msid-92654212,width-748,height-499,resizemode=4,imgsize-128652/.jpg ",
            "https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/05/16/11/laurahyatt220417-28.jpg?width=1200",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpSznRdkR50ahX6W7rJpw3KvaPeA6_rVwpg&s"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem('likes_6')) || 0,
        cost: 1000
    },
    {
        id:7,
        title: "Pune",
        description: "Pune is the capital city of India. It is the most populous city in India.",
        image: [
            "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/07/pune-1625115438.jpg",
            "https://media.istockphoto.com/id/1320749212/photo/cityview.jpg?s=612x612&w=0&k=20&c=9ho0mNkHI8jhbagXIxPQDKmlgAW3MqIcuh1hJwungbI=",
            "https://thumbs.dreamstime.com/b/january-cityscape-skyline-pune-city-view-bopdev-ghat-maharashtra-india-304315563.jpg"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem('likes_7')) || 0,
        cost: 2000
    },
    {
        id:8,
        title: "Delhi",
        description: "Delhi is the capital city of India. It is the most populous city in India.",
        image: [
            "https://i.ytimg.com/vi/OUPTGDrXDy4/maxresdefault.jpg",
            "https://media.cntraveller.com/photos/611bed6df902cc2d167b42bc/16:9/w_2580,c_limit/gettyimages-962826702.jpg",
            "https://www.travelandleisure.com/thmb/iAIrOVW7yWrDG8pZBpKMOvEGuNQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-delhi-india-NEWDELHITG0721-60d592e1603349298a0206d67d08582b.jpg",
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem('likes_8')) || 0,
        cost: 3000
    }
]
let countLike = 0
let countLikeServer = localStorage.getItem('countLike') || 0
const handleLike = (index) => {
    data[index].likes += 1;
    let likesElement = document.getElementsByClassName("likes")[index];
    if (likesElement) {
        likesElement.innerHTML = `Likes: ${data[index].likes};`
    }
    localStorage.setItem(`likes_${data[index].id}`, JSON.stringify(data[index].likes));
}
const Mapper = (data) => {
    data.map((ele,index) => {
        let div = document.createElement("div");
        let title = document.createElement("h1");
        title.innerHTML = ele.title;

        let image = document.createElement("img");
        image.src = ele.image[1];

        let description = document.createElement("h6");
        description.innerHTML = `About: ${ele.description}`;

        let cost = document.createElement("h3");
        cost.innerHTML = `cost: ${ele.cost}`;

        let btnParent = document.createElement("div");
        let btn1 = document.createElement("button");
        btn1.innerHTML = "Book Now";

        let btn2 = document.createElement("span");
        btn2.innerHTML = `<i class="fa-regular fa-heart"></i>`
        btn2.addEventListener("click", () => handleLike(index));

        let likesParagraph = document.createElement("p");
        likesParagraph.classList.add("likes");
        likesParagraph.innerHTML = `Likes: ${ele.likes}`;

        btnParent.append(btn2, btn1);
        div.append(image, title, description, cost, likesParagraph, btnParent);

        image.classList.add("img-fluid");
        div.classList.add("cityChild");
        btnParent.classList.add("btnParent");
        btn1.classList.add("btn1");

        document.getElementById("navbar").append(div);
    });
}
Mapper(data)