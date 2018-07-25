/**
 * Training for js13kgames competition thus trying to make it as small as possible.
 * But variable names can be ok length since they will be minified in the competition.
 */
const canvas = document.querySelector('canvas');
const resizeCanvas = () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
};
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
