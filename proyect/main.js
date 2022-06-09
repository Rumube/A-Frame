let esfera
esfera = document.getElementById(esfera);

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        esfera.setAttribute("position", `0 ${i} -5`);
    }, 1);
}