"use strict";

const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  let newSpecies; // was `var newSpecies;`

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}

/*

The problem was that `newSpecies` was being declared as a `var` variable.
`var` variables are function scoped so the declaration was hoisted out of the
`for` loop. Thus, the variable was not reset upon each iteration of the loop.
It kept its previous value until a new value was assigned.

*/
