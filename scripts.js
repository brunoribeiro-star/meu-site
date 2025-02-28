document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".glow-button");
    const glow = button.querySelector(".glow");

    button.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = button.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        // Faz a luz seguir o mouse no hover
        glow.style.transform = `translate(${x - width / 2}px, ${y - height / 2}px)`;
    });

    button.addEventListener("mouseleave", () => {
        // Luz volta para a direita suavemente ao sair do hover
        glow.style.transform = "translate(100%, -50%)";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const progress = document.querySelector(".progress");

    function restartAnimation() {
        progress.style.animation = "none";
        progress.style.width = "0%";

        setTimeout(() => {
            progress.style.animation = "fillTimeline 5s linear infinite";
        }, 10);
    }

    setInterval(restartAnimation, 5000);
});


lottie.loadAnimation({
    container: document.getElementById("icone-lottie"), // Div onde o ícone será inserido
    renderer: "svg", // Mantém a qualidade do ícone
    loop: true, // Ícone fica animado em loop
    autoplay: true, // Inicia automaticamente
    path: "assets/seu-icone.json" // Caminho do arquivo JSON do ícone animado
});