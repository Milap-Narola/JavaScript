document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const book = {
            name: document.getElementById("book").value,
            author: document.getElementById("author").value,
            description: document.getElementById("describe").value,
            date: document.getElementById("date").value,
            category: document.getElementById("select").value,
            price: document.getElementById("price").value
        };
        if (Object.values(book).every(field => field)) {
            const bookList = JSON.parse(localStorage.getItem("book-list")) || [];
            bookList.push(book);
            localStorage.setItem("book-list", JSON.stringify(bookList));
            alert("Book added successfully!");
            form.reset();
            } else {
                alert("Please fill all the fields.");
                }
                });

});