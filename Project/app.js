import { Program1 } from './programs/Program1.js';
import { Program2 } from './programs/Program2.js';
import { Program3 } from './programs/Program3.js';
import { Program4 } from './programs/Program4.js';
import { Program5 } from './programs/Program5.js';

async function runAllPrograms() {
  console.log("Running Program 1...");
  await Program1();

  console.log("Running Program 2...");
  await Program2();

  console.log("Running Program 3...");
  await Program3();

  console.log("Running Program 4...");
  await Program4();

  console.log("Running Program 5...");
  await Program5();

  console.log("All programs executed.");
}

runAllPrograms();
