function changeSearchEngine(engine) {
    document.getElementById("super-search-fm").action = engine;
    document.getElementById("search-text").focus();
}

function doSearch() {
    var searchText = document.getElementById("search-text").value;

    if (searchText) {
        window.open(
            document.getElementById("super-search-fm").action.replace(
                /{query}/g, searchText
        ));
    }

    return false;
}

function changeSearchGroup(groupName) {
    checkedGroup = document.querySelector(".group-checked");
    checkedGroup? checkedGroup.classList.remove("group-checked"): {};

    document.getElementById("group-name").innerText = groupName;
    currentGroup = document.getElementById("group-" + groupName);
    currentGroup.classList.add("group-checked");

    var firstEngine = currentGroup.firstElementChild.firstElementChild.firstElementChild;
    firstEngine.checked = true;
    document.getElementById("super-search-fm").action = firstEngine.value;

    document.getElementById("search-text").focus();
}
