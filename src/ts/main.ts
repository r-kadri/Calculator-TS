import { Add } from "./Add";
import { Constant } from "./Constant";

// tests
let c = new Constant(10);
let addition = new Add(c, new Add(new Constant(5), c));
console.log(addition.toString());