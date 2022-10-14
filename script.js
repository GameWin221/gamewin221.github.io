let coll = document.getElementsByClassName("project");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("mouseover", function() {
        this.classList.toggle("active");
        let content = this.children[1];

        content.style.maxHeight = content.scrollHeight + "px";
    });
}

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("mouseout", function() {
        this.classList.toggle("active");
        let content = this.children[1];

        content.style.maxHeight = null;
    });
}