    //Image carousel
    const carousel = document.getElementById("carouselImage");
        const images = ["art1.jpg", "art2.jpg", "art3.jpg"];        
        let index = 0;

        setInterval(() => {
            index = (index + 1) % images.length;
            carousel.src = images[index];
        }, 3000);

    // Scroll
        document.getElementById("viewGalleryBtn").addEventListener("click", () => {
            document.getElementById("artists").scrollIntoView({ behavior: "smooth" });
        });
