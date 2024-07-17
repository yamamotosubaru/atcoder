"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
let inputs = "";
let inputArray;
let currentIndex = 0;
function next() {
    return inputArray[currentIndex++];
}
inputs = fs.readFileSync(0, "utf8");
inputArray = inputs.split(/\n/);
main();
function main() {
    const [R, G, B] = next().split(" ").map(Number);
    const C = next().trim().replace(/\r?\n/g, '');
    if (C == "Red") {
        console.log(Math.min(G, B));
    }
    else if (C == "Green") {
        console.log(Math.min(R, B));
    }
    else if (C == "Blue") {
        console.log(Math.min(R, G));
    }
}
