function hitokoto() {
    if (hitokoto_timer) {
        clearTimeout(hitokoto_timer);
    }
    hitokoto_timer = setTimeout(function () {
        fetch('https://v1.hitokoto.cn?c=i&encode=json&charset=utf-8')
        .then(response => response.json())
        .then(data => {
            const hi = document.getElementById("hitokoto");
            hi.innerText = data.hitokoto;
        })
    }, 256);
}

var hitokoto_timer;

function init() {
    hitokoto();
    setInterval(hitokoto, 300000);

    var firstSearchGroup = document.getElementsByClassName("search-group-list")[0].firstElementChild;
    changeSearchGroup(firstSearchGroup.innerText.trim());
}