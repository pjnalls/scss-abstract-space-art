const createDiv = (className) => {
  const div = document.createElement("div");
  div.setAttribute("class", className);
  return div;
};

const createStar = (size, top, left) => {
  const div = document.createElement("div");
  div.setAttribute("class", "star");

  div.style.width = `${size}vmin`;
  div.style.height = `${size}vmin`;
  div.style.top = `${top}vmin`;
  div.style.left = `${left}vmin`;
  
  return div;
};

const createStars = () => {
  const stars = document.createElement("div");
  stars.setAttribute("class", "stars");
  new Array(240).fill(0).forEach((value, index) => {
    const size = Math.random() * 4;
    const top = Math.random() * 300 - 200;
    const left = Math.random() * 200 - 100;
    const star = createStar(size, top, left);
    stars.appendChild(star);
  });
  return stars;
};

const main = () => {
  const root = document.getElementById("root"),
    canvas = createDiv("canvas"),
    world = createDiv("world"),
    stars = createStars();

  canvas.appendChild(stars);
  canvas.appendChild(world);
  root.appendChild(canvas);
};

main();
