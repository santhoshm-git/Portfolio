const cards = document.querySelectorAll(".card");

window.addEventListener("load", () => {

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(() => {

            card.style.transition = "all 0.7s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 150);

    });

});
