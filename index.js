document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelector(".carousel-items");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;
    const totalItems = document.querySelectorAll(".highlight-card").length;

    function updateCarousel() {
        carouselItems.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let name = event.target.name.value;
    let mobile = event.target.mobile.value;
    let email = event.target.email.value;

    if (name && mobile && email) {
        alert(`Thank you, ${name}! We will get back to you soon.`);
        event.target.reset(); // Reset form fields
    } else {
        alert("Please fill all the fields.");
    }
});