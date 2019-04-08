window.onscroll = function() {
    stickyFunction();
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function stickyFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
