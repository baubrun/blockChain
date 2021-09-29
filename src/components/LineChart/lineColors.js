const colors = [
  "#ff3300",
  "#ffb380",
  "#cc65fe",
  "#0066ff",
  "#669999",
  "#999966",
  "#ff99ff",
  "#33cc33",
];

export const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
