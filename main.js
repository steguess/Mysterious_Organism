// Challenge Project: Mysterious Organism

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
  
}

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
   mutate() {
  const randomIndex = Math.floor(Math.random() * this.dna.length);
  const bases = ['A','T','C','G'];
  const currentBase = this.dna[randomIndex];
  // 1. Filter out the current base so you only have the 3 that are different
  const possibleBases = bases.filter(base => base !== currentBase);
  // 2. Pick one of those 3 at random
  const newBase = possibleBases[Math.floor(Math.random() * possibleBases.length)];
  // 3. Update the DNA
  this.dna[randomIndex] = newBase;
  // 4. Return the updated DNA
  return this.dna;
},
willLikelySurvive() { 
  let count= 0
  for (let i = 0; i < this.dna.length; i++) 
    if (this.dna[i] === 'C' || this.dna[i] === 'G') {
      count++;}
let perc = (count / this.dna.length) ;
if (perc >= 0.6) {
  return true;
} else {
  return false;
}
  }, 
complementStrand () {
  let complement = [];
  for (let i = 0; i < this.dna.length; i++) 
    if (this.dna[i] === 'C') { 
      complement.push('G')}
    else if (this.dna[i] === 'G') { complement.push('C')}
    else if (this.dna[i] === 'A') { complement.push('T')}
    else if (this.dna[i] === 'T') { complement.push('A')}
    return complement
}
  }; // 5. close the object literal
}; // 6. close the arrow function block


let Num = 1;

const newOrganism = pAequorFactory(Num, mockUpStrand());

  Num=  Num+1;

const compareDNA = (comp, comp1) => {
  let counter = 0;

  for (let i = 0; i < comp.dna.length; i++) {
    if (comp.dna[i] === comp1.dna[i]) {
      counter++;
    }
  }
const percentage = (counter / comp.dna.length) * 100;

  // Print the result (no return needed, just a console.log)
  console.log(
    `specimen #${comp.specimenNum} and specimen #${comp1.specimenNum} have ${percentage}% DNA in common`
  );
};

const survivors = [];
let specimenCounter = 1;
while (survivors.length < 30) {
const newOrga = pAequorFactory(specimenCounter , mockUpStrand())
if (newOrga.willLikelySurvive()){
  survivors.push(newOrga)}
  specimenCounter++;
}
console.log(survivors);





