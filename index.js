// NAVIGATION REPONSIVENESS
function myBars() {
    let bars = document.querySelector("#bar");
    let nav = document.querySelector(".navigation");
    bars.onclick = function () {
        if (nav.style.right == "0%") {
            nav.style.right = "-80%";
            bars.src = "<i class='bx bx-menu' ></i>";
        } else {
            nav.style.right = "0%";
            bars.src = "<i class='bx bx-x'></i>";
        }
        nav.classList.toggle("new");
    }

}
myBars();

// DROPDOWN
document.querySelectorAll(".dropbtn").forEach(button => {
    button.onclick = function (e) {
        e.preventDefault();
        let dropdown = this.nextElementSibling;
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    }
});


// SLIDESHOW
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
nextButton.addEventListener("click", (event) => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});
prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;                                            

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});


// COPYRIGHT YEAR
const currentYear = new Date().getFullYear();
document.getElementById("span").textContent = currentYear;
