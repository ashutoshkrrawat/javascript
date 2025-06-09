//* client-x vs page-x

// client-x: x-axis px relative to view-port
// page-x : x-axis px relative to full page (including any scroll offset)

const Mousecursor = document.querySelector(".cursor");
const button = document.querySelector('.btn')
const data = document.querySelector('.totalColorCount')
const factSpan = document.querySelector('.fact')

let colorCount = 0;

button.addEventListener ('click', () => {
    window.location.href = "https://js-mini-projects-pink.vercel.app/"
})

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  Mousecursor.style.backgroundColor = `rgba(${red}, ${blue}, ${green})`;
}

window.addEventListener("mousemove", (e) => {
  randomColor();

  colorCount++;

  data.innerHTML = colorCount;

  let factData = ((colorCount/16777216)*100).toFixed(4)
  
  factSpan.innerHTML = factData

  const x_axis = e.clientX;
  const y_axis = e.clientY;

  Mousecursor.style.left = `${x_axis}px`;
  Mousecursor.style.top = `${y_axis}px`;
});


