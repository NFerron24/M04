const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];

// Array superheld namen
const superNames = superheroes.map((superhero) => {
  return superhero.name;
});
console.log(superNames);
// Array 'lichte' superhelden
const lightWeights = superheroes.filter((light) => light.weight < 190);

console.log(lightWeights);
// Array namen + = 200 lb
const HeavyWeights = superheroes
  .filter(function (heavy) {
    return heavy.weight == 200;
  })
  .map(function (filteredHeroes) {
    return filteredHeroes.name;
  });

console.log(HeavyWeights);
// Array first appearance
const superAppearance = superheroes.map((appear) => {
  return appear.first_appearance;
});
console.log(superAppearance);

// alle DC helden
const DCHeroes = superheroes
  .filter(function (DC) {
    return DC.publisher === "DC Comics";
  })
  .map(function (DCNames) {
    return DCNames.name;
  });

console.log(DCHeroes);
//.. & alle Marvel helden
const MarvelHeroes = superheroes
  .filter(function (Marvel) {
    return Marvel.publisher === "Marvel Comics";
  })
  .map(function (MarvelNames) {
    return MarvelNames.name;
  });

console.log(MarvelHeroes);
// Alle gewichten

const superWeights = superheroes
  .map((weights) => {
    return weights.weight;
  })
  .filter((string) => {
    return string != "unknown";
  })
  .map(function (filter) {
    return parseFloat(filter);
  })
  .reduce(function (acc, sumWeight) {
    return acc + sumWeight;
  });
console.log(superWeights);

// alleen gewichten Marvel
const MarvelWeights = superheroes
  .filter(function (Marvel) {
    return Marvel.publisher === "Marvel Comics";
  })
  .map((weights) => {
    return weights.weight;
  })
  .filter((string) => {
    return string != "unknown";
  })
  .map(function (filter) {
    return parseFloat(filter);
  })
  .reduce(function (acc, sumWeight) {
    return acc + sumWeight;
  });
console.log(MarvelWeights);

// zwaarste held
const HeaviestHero = superheroes
  .map((weights) => {
    return weights.weight;
  })
  .filter((string) => {
    return string != "unknown";
  })
  .map(function (filter) {
    return parseFloat(filter);
  })
  .reduce(function (acc, heaviest) {
    if (heaviest > acc) {
      acc = heaviest;
    }
    return acc;
  });
console.log(HeaviestHero);
