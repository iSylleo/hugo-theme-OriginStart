function hitokoto(hiType) {
    if (hitokoto_timer) {
        clearTimeout(hitokoto_timer);
    }

    hitokoto_timer = setTimeout(function () {
        fetch('https://v1.hitokoto.cn?encode=json&charset=utf-8&' + hiType)
        .then(response => response.json())
        .then(data => {
            const hi = document.getElementById("hitokoto");
            hi.innerText = data.hitokoto;

            const hi_from = document.getElementById("hitokoto-from");
            hi_from.innerText = "—— " + data.from_who + " ·《"+ data.from + "》";
        })
    }, 256);
}

var hitokoto_timer;

function init(hiType) {
    hitokoto(hiType);
    setInterval(hitokoto, 300000, hiType);

    var firstSearchGroup = document.getElementsByClassName("search-group-list")[0].firstElementChild;
    changeSearchGroup(firstSearchGroup.innerText.trim());

    // TODO
    // setInterval(function() {
    //     document.getElementsByTagName("body")[0].style = "background: url({{ .Site.Params.background }}) top fixed no-repeat"
    // }, 60000);
}