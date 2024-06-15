document.addEventListener("DOMContentLoaded", () => {
    const myBooksTableBody = document.getElementById("my-book");
    const bookList = JSON.parse(localStorage.getItem("book-list")) || [];

    bookList.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.description}</td>
            <td>${book.date}</td>
            <td>${book.category}</td>
            <td>${book.price}</td>
        `;
        myBooksTableBody.append(row);
    });
});