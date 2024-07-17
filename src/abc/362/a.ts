import * as fs from "fs";

let inputs = "";
let inputArray: string[];
let currentIndex = 0;
function next() {
  return inputArray[currentIndex++];
}

inputs = fs.readFileSync(0, "utf8");
inputArray = inputs.split(/\n/);

main();

function main(): void {
  const [R, G, B] = next().split(" ").map(Number);
  const C = next().trim().replace(/\r?\n/g, '');

  if (C == "Red") {
    console.log(Math.min(G, B))
  } else if (C == "Green") {
    console.log(Math.min(R, B))
  } else if (C == "Blue") {
    console.log(Math.min(R, G))
  }
}
