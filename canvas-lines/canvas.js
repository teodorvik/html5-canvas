/**
 * Training for js13kgames competition thus trying to make it as small as possible.
 * But variable names can be ok length since they will be minified in the competition.
 */
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

let points = [];
let sizeOfNextCircle = 0;

const drawCircles = () => {
    for (let i = 0; i < points.length - 1; i++) {
        c.beginPath();
        c.arc(points[i].x, points[i].y, points[i].r, 0, Math.PI * 2, false);
        c.strokeStyle = '#5b5';
        c.stroke();
    }
};

const drawLines = () => {
    c.beginPath();
    c.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        c.lineTo(points[i].x, points[i].y);
    }
    c.strokeStyle = '#111';
    c.stroke();
};

const draw = () => {
    c.clearRect(0, 0, canvas.width, canvas.height);
    if (points.length >= 1) {
        drawLines();
        drawCircles();
    }
};

document.addEventListener('click', (e) => {
    if (points.length >= 1)
        points[points.length - 1].r = sizeOfNextCircle;

    points.push({ x: e.clientX, y: e.clientY, r: Math.random() * 30 });
    draw();
});

const resizeCanvas = () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    draw();
};
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const animate = () => {
    draw();
    if (points.length < 1)
        return;

    sizeOfNextCircle = (Math.sin(Date.now() / 300) + 1.0) * 15 + 5;
    const lastPoint = points[points.length - 1];
    c.beginPath();
    c.arc(lastPoint.x, lastPoint.y, sizeOfNextCircle, 0, Math.PI * 2, false);
    c.strokeStyle = '#5b5';
    c.stroke();
};

let interval = setInterval(animate, 50);
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (interval === null) {
            interval = setInterval(animate, 50);
        } else {
            clearInterval(interval);
            interval = null;
        }
    }
});

