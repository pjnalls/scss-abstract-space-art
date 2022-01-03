const createDiv = (className) => {
  const div = document.createElement("div");
  div.setAttribute("class", className);
  return div;
};

const main = () => {
  const root = document.getElementById("root"),
    canvas = createDiv("canvas"),
    world = createDiv("world");

  canvas.appendChild(world);
  root.appendChild(canvas);
};

main();
