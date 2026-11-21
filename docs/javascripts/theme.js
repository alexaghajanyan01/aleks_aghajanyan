document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".assignment-card");

    cards.forEach((card, index) => {
        card.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(16px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 500,
                delay: Math.min(index * 35, 500),
                easing: "ease-out",
                fill: "both"
            }
        );
    });
});