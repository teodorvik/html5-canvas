/**
 * Training for js13kgames competition thus trying to make it as small as possible.
 * But variable names can be ok length since they will be minified in the competition.
 */
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

/**
 * Resize canvas
 */
const resizeCanvas = () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
};
resizeCanvas();
window.addEventListener('resize', resizeCanvas);


/**
 * Random sized square at centered at x,y 
 */
const createSquare = (x,y) => {
    const rand = Math.random();
    const size = 100*rand;
    c.fillRect(x-size*.5,y-size*.5,size,size);
};

canvas.addEventListener('click', (e) => {
    createSquare(e.clientX, e.clientY);
});
