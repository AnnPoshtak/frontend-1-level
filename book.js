javascript:(function(){
    const name = prompt("Назва пісні");
    const author = prompt("Введіть автора");
    const language = prompt("Мова пісні? Укр/en");
    if (language == "укр") {
        if (name && author){
            const query = encodeURIComponent(`${name} ${author} текст`);
            window.open("https://www.google.com/search?q=" + query, "_blank");
        }
    } else if (language == "en") {
        if (name && author){
            const query = encodeURIComponent(`${name} ${author} lirics`);
            window.open("https://www.google.com/search?q=" + query, "_blank");
        }
    }else{
        window.open("https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg","_blank");
    }
})();