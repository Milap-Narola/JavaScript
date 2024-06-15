document.addEventListener("DOMContentLoaded", () => {
    const bookmarkTableBody = document.getElementById("bookmark");
    const bookmarkList = JSON.parse(localStorage.getItem("bookmark-list")) || [];

    bookmarkList.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.description}</td>
            <td>${book.date}</td>
            <td>${book.category}</td>
            <td>${book.price}</td>
        `;
        bookmarkTableBody.append(row);
    });
});