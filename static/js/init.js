var hitokoto_timer;

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

/**
 * This function is from: https: //zhuanlan.zhihu.com/p/97342844
 * Thanks for the autor's share.
 */
function smoothScrollToTop() {
    let Y_TopValve = (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop);
    if (Y_TopValve > 1) {
        window.requestAnimationFrame(smoothScrollToTop);
        scrollTo(0, Math.floor(Y_TopValve * 0.85));
    } else {
        scrollTo(0, 0);
    }
}

function showTooltip(link) {
    if (link.getAttribute("tooltip-text")) {
        document.getElementById("tooltiptext").innerText = link.getAttribute("tooltip-text");
        document.getElementById("tooltip").style.visibility = "visible";
    }
}

function hideTooltip() {
    document.getElementById("tooltip").style.visibility = "hidden";
}

function init(hiType) {
    hitokoto(hiType);
    setInterval(hitokoto, 300000, hiType);

    var firstSearchGroup = document.getElementsByClassName("search-group-list")[0].firstElementChild;
    changeSearchGroup(firstSearchGroup.innerText.trim());

    window.onscroll = () => {
        var st = document.documentElement.scrollTop || document.body.scrollTop;

        if (st > 15) {
          document.querySelector("header").classList.add("blur");
        }
        else {
          document.querySelector("header").classList.remove("blur");
        }

        if (st > window.innerHeight) {
            // document.getElementById("back2top-btn").style.visibility = "visible";
            document.getElementById("back2top-btn").style.right = "1rem";
        }
        else {
            // document.getElementById("back2top-btn").style.visibility = "hidden";
            document.getElementById("back2top-btn").style.right = "-3rem";
        }
    };
}
