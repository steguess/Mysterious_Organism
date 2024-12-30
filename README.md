# 🧬 Mystery Organism

> **A fun simulation of mysterious organisms (`pAequor`) that mutate, compare DNA, and fight for survival!**

<div align="center">

[![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow.svg?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

</div>

---

## ⭐ Overview

**Mystery Organism** is a JavaScript project that simulates organisms (dubbed **pAequor**) which contain DNA strands composed of 15 bases (`A`, `T`, `C`, or `G`). Each organism has the ability to:

- **Mutate** a random base in its DNA.
- **Compare** its DNA with another pAequor’s DNA to see how much they have in common.
- **Determine** if it will likely survive (if at least 60% of its DNA is made up of `C` or `G`).
- **Generate** a complementary DNA strand (`A ↔ T` and `C ↔ G`).

This project is a fun exercise in array manipulation, functions, and basic probabilistic logic.

---

## 🚀 Features

- **Random DNA Generation:** Quickly generate new organisms with 15 random bases.
- **Mutation Method:** Randomly selects one base and changes it to a different base.
- **DNA Comparison:** `.compareDNA()` displays how much DNA two organisms share in percentage.
- **Survival Check:** `.willLikelySurvive()` returns `true` if the organism’s DNA has at least 60% of `C` or `G`.
- **Complementary Strand:** `.complementStrand()` returns the complementary strand based on the `A ↔ T`, `C ↔ G` pairing.


**Example usage:**

```javascript
// Example: Create a new pAequor and mutate it
const organism = pAequorFactory(1, mockUpStrand());
console.log('Original DNA:', organism.dna);

// Mutate one base
organism.mutate();
console.log('After mutation:', organism.dna);

// Check if it will likely survive
console.log('Likely to survive?', organism.willLikelySurvive());
