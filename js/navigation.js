const btnLasagna = document.getElementById("btnLasagna");
const btnSpagetti = document.getElementById("btnSpagetti");

btnLasagna.addEventListener('click', () => {
    window.location.href = "/recipes/lasagna.html";
});

btnSpagetti.addEventListener('click', () => {
    window.location.href = "/recipes/spagetti.html";
});