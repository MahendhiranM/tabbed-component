const tabsContainer = document.querySelector(".roadmap-list");
const items = document.querySelectorAll(".roadmap-list-item");
const tabsContent = document.querySelectorAll(".roadmap-task");

tabsContainer.addEventListener("click", function (e) {
    if (e.target.className == "fa fa-chevron-right") {
        const clicked = e.target.closest(".roadmap-list-item");
        // not clicked
        if (!clicked) return;
        // clear all active class
        items.forEach((tab) => tab.classList.remove("list-item-active"));
        tabsContent.forEach((tabc) => tabc.classList.remove("show"));
        // add active class
        clicked.classList.add("list-item-active");
        // add active contect
        document
            .querySelector(`.${e.target.dataset.taskName}`)
            .classList.add("show");
    }
});
