const newsMaker = (e) => {
    e.preventDefault();
    const newsTitle = document.getElementById('newsTitle').value;
    const newsUrl = document.getElementById('newsUrl').value;
    const newsCountry = document.getElementById('newsCountry').value;

    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.setAttribute('data-country', newsCountry);
    newsItem.innerHTML = `<h3>${newsTitle}</h3><p><a href="${newsUrl}" target="_blank">${newsUrl}</a></p>`;


    localStorage.setItem('news', JSON.stringify({
        title: newsTitle,
        url: newsUrl,
        country: newsCountry
    }));

    document.getElementById('newsfeed-content').append(newsItem);
    newsAddForm.reset();
    newsApp(newsfeedSection);
}

const loginMaker = (e) => {
    e.preventDefault();
    const loginEmail = document.getElementById('loginEmail').value;
    const loginCountry = document.getElementById('loginCountry').value;


    localStorage.setItem('login', JSON.stringify({
        email: loginEmail,
        country: loginCountry
    }));

    console.log('Login:', { email: loginEmail, country: loginCountry });
    filterNewsByCountry(loginCountry);
    loginForm.reset();
    newsApp(newsfeedSection);
}

const signupMaker = (e) => {
    e.preventDefault();
    const signupData = {
        name: document.getElementById('signupName').value,
        email: document.getElementById('signupEmail').value,
        url: document.getElementById('signupUrl').value,
        password: document.getElementById('signupPassword').value,
        country: document.getElementById('signupCountry').value
    };


    localStorage.setItem('signup', JSON.stringify(signupData));

    console.log('Sign up submitted:', signupData);
    signupForm.reset();
    newsApp(newsfeedSection);
}

const takeData = (key) => {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}
