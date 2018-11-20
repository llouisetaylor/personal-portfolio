const setCookie = (name, value, days = 365) => {
    const d = new Date();
    d.setDate(d.getDate() + days)
    document.cookie = `${name}=${value}; expires=${d.toUTCString()}; path=/`;
}

const getCookie = (name) => {
    const cookiesArray = document.cookie
        .split('; ')
        .map((cookie) => {
            return cookie.split('=');
        })

    let cookieObject = {}
    for (let i = 0; i < cookiesArray.length; i++) {
        const c = cookiesArray[i];
        cookieObject[c[0]] = c[1];
    }

    return cookieObject[name];
}

export {
    setCookie,
    getCookie
}
