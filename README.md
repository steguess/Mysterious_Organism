🧬 Mystery Organism
A fun simulation of mysterious organisms (pAequor) that mutate, compare DNA, and fight for survival!

<div align="center">

</div>
⭐ Overview
Mystery Organism is a JavaScript project that explores the concept of simulated organisms (pAequor) which have unique DNA strands. These organisms can:

Mutate one of their DNA bases
Compare their genetic similarity with each other
Determine if they will likely survive in their environment
It’s a great project to sharpen your JavaScript skills, practice writing methods that manipulate arrays, and dive into fun biology-inspired logic!

🚀 Features
Random DNA Generation: Generates new organisms with 15 random bases of A, T, C, or G.
Mutation: Each organism can mutate one base in its DNA to a different one.
DNA Comparison: Quickly see how much DNA two organisms share.
Survival Check: Determines if an organism has a high chance of survival (if its DNA is at least 60% composed of C or G).
Complementary Strand: Generates a complementary DNA strand where A ↔ T and C ↔ G.
🛠️ Installation & Usage
Clone or download this repository.
Open the project in your favorite code editor or run it directly in the terminal.
In the code, you’ll find:
mockUpStrand() for generating a random 15-base DNA array.
pAequorFactory() for creating organisms with methods like .mutate(), .compareDNA(), .willLikelySurvive(), and .complementStrand().
Example:

js
Code kopieren
// Create a new organism
const newOrganism = pAequorFactory(1, mockUpStrand());

// Mutate a random base
newOrganism.mutate();

// Check if likely to survive
console.log(newOrganism.willLikelySurvive()); 
🧩 How It Works
The DNA is simply an array of 15 bases (A, T, C, or G).
When .mutate() is called, the organism randomly selects one base and changes it to a different one.
.compareDNA(otherOrganism) calculates the percentage of DNA shared at the same index.
.willLikelySurvive() returns true if the DNA has ≥ 60% of C or G.
.complementStrand() returns the complementary DNA, mapping each base to its partner.
🧬 Example Organisms
js
Code kopieren
// Example usage in the console:

// 1. Create two organisms
const organismA = pAequorFactory(1, ['A','C','T','G','A','G','C','T','T','C','A','A','G','A','C']);
const organismB = pAequorFactory(2, ['A','T','T','G','A','G','C','T','A','C','A','A','G','T','C']);

// 2. Compare their DNA
organismA.compareDNA(organismB);

// 3. See if organismA is likely to survive
console.log(organismA.willLikelySurvive());

// 4. Get organismB's complementary strand
console.log(organismB.complementStrand());
🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to open a PR or file an issue.

⚖️ License
This project is available under the MIT License.

Happy coding! If you have ideas on how to extend this simulation (like evolving populations or advanced mutation mechanics), feel free to share!

<p align="center"> <img src="https://img.shields.io/badge/Mystery%20Organism-Explore%20the%20unknown-brightgreen?style=for-the-badge"/> </p>
