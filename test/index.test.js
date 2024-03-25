const storyGenerator = require('../src/index');

const customOptions = {
    characters: ['Michael', 'Sarah'],
    places: ['cave', 'river'],
    actions: ['explored', 'discovered'],
    events: ['hidden cave', 'lost treasure']
};

const generator = new storyGenerator();
console.log(generator.generarateRandomStory());