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
    const randSize = Math.random() * 100;
    c.fillRect(x-randSize*.5,y-randSize*.5,randSize,randSize);
};

const createText = (x,y) => {
    const str = 'canvas-simple-draw';
    const txt = c.measureText(str);
    c.fillText(str, x-txt.width*.5, y);
};

canvas.addEventListener('click', (e) => {
    const rand = Math.floor(Math.random() * 2);
    rand !== 0 ? createSquare(e.clientX, e.clientY) : createText(e.clientX, e.clientY);
});
