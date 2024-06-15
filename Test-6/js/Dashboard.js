document.addEventListener("DOMContentLoaded", () => {
    const dashboardTableBody = document.getElementById("dashboard");
    const bookList = JSON.parse(localStorage.getItem("book-list")) || [];

    bookList.forEach((book, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.description}</td>
            <td>${book.date}</td>
            <td>${book.category}</td>
            <td>${book.price}</td>
            <td><button class="btn btn-primary btn-buy" data-index="${index}">Buy</button></td>
            <td><button class="btn btn-success btn-bookmark" data-index="${index}">Bookmark</button></td>
        `;
        dashboardTableBody.append(row);
    });

    dashboardTableBody.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-buy")) {
            const index = event.target.dataset.index;
            const bookList = JSON.parse(localStorage.getItem("book-list")) || [];
            const buyList = JSON.parse(localStorage.getItem("buy-list")) || [];


            buyList.push(bookList[index]);
            bookList.splice(index, 1);


            localStorage.setItem("book-list", JSON.stringify(bookList));
            localStorage.setItem("buy-list", JSON.stringify(buyList));


            location.reload();
        } else if (event.target.classList.contains("btn-bookmark")) {
            const index = event.target.dataset.index;
            const bookList = JSON.parse(localStorage.getItem("book-list")) || [];
            const bookmarkList = JSON.parse(localStorage.getItem("bookmark-list")) || [];


            bookmarkList.push(bookList[index]);
            bookList.splice(index, 1);


            localStorage.setItem("book-list", JSON.stringify(bookList));
            localStorage.setItem("bookmark-list", JSON.stringify(bookmarkList));


            location.reload();
        }
    });
});