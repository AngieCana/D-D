const fighters = [
  {
  name: 'Timothy',
  hitpoints: 20,
  belongings: ['sword', 'potion', 'tums'],
  companion: {
      name: 'Velma',
      type: 'bat',
      companion: {
          name: 'Tim',
          type: 'parasite',
          belongings: ['scuba tank', 'blood', 'fruit', 'bug']
      }
  }
},
{
  name: 'Nova',
  hitpoints: 10,
  belongings: ['water', 'snacks', 'arrows', 'bow'],
  companion: {
      name: 'glitterSparkles',
      type: 'dog'
  }
},
{
  name: 'Eli',
  hitpoints: 15,
  belongings: ['pocket knife', 'bombs', 'coffee', 'mushrooms'],
  companion: {
      name: 'Pikachu',
      type: 'pokemon'
  }

}
];


// console.log(fighters.companion.companion.belongings);

// for (let i = 0; i < fighters.companion.companion.belongings.length; i++) {
//   console.log(fighters.companion.companion.belongings[i]);
  
// }
// console.log(fighters[1].belongings[1]);

// for (let i = 0; i < fighters[2].belongings.length; i++) {
//   console.log(fighters[2].belongings[i]);
  
// }


const enemies = [
  {
    name:'Dino',
    hitpoints:25,
    type:'Dragon',
    weapons:['fire breath', 'claws', 'tail whip'],
    weakness: 'water'
  },
  {
    name:'Dracula',
    hitpoints:30,
    type:'vampire',
    weapons: ['fangs', 'shapeshifting', 'hypnosis'],
    weakness: ['sunlight', 'garlic']
  },
  {
    name:'Bill Nye the Science Guy',
    hitpoints: 10,
    type:'scientist',
    weapons:['beaker', 'baking soda volcano', 'nuclear bomb', 'shrink-ray'],
    weakness:['Wife', 'plants']
  },

]

// for(i = 0; i < fighters[0].name.length; i++){
//     console.log(fighters[0], 'vs' ,enemies[0]);
// }

// for(i = 1; i < fighters[1].name.length; i++){
//   console.log(fighters[1], 'vs' ,enemies[1]);
// }

for(i = 2; i < fighters[2].name.length; i++){
  console.log(fighters[2], 'vs' , enemies[2]);
  
}
