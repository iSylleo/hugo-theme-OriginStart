var poetry_timer;

function getPoetry(api, hiType) {
    if (poetry_timer) {
        clearTimeout(poetry_timer);
    }

    const p = document.getElementById("poetry");
    const pa = document.getElementById("poetry-author");

    if (api.trim().toLowerCase() === "jinrishici") {
        jinrishici.load(result => {
            p.innerText = result.data.content;
            pa ? pa.innerText = "—— "
                              + result.data.origin.author
                              + "【" + result.data.origin.dynasty + "】"
                              + " ·《" + result.data.origin.title + "》" : {};
        });
        return;
    }
    
    poetry_timer = setTimeout(function () {
        fetch("https://v1.hitokoto.cn?encode=json&charset=utf-8&".concat(hiType))
        .then(response => response.json())
        .then(data => {
            p.innerText = data.hitokoto;
            pa ? pa.innerText = "—— " + data.from_who + " ·《"+ data.from + "》" : {};
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

function showTooltip(bookmark) {
    var tt = bookmark.getAttribute("tooltip-text");

    if (tt) {
        document.getElementById("tooltiptext").innerText = tt;
        document.getElementById("tooltip").style.visibility = "visible";
    }
}

function hideTooltip() {
    document.getElementById("tooltip").style.visibility = "hidden";
}

/**
 * Do some inits when dom loaded
 */
function init() {
    if (window.location != window.parent.location) {
        window.parent.location = window.location;
    }

    var p = document.querySelector(".poetry");
    if (p) {
        p.dispatchEvent(new Event("click"));
        setInterval(() => {
            document.querySelector(".poetry").dispatchEvent(new Event("click"));
        }, 600000);
    }

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
