import data from "./data";

export default function generate() {
  return data[Math.floor(Math.random() * data.length)];
}
