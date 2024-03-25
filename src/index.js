const loremIpsum = require('lorem-ipsum');
const Chance = require('chance');
const storyData = require('../data/stories.json');

// Класс storyGenerator будет отвечать за генерацию случайных историй на основе данных из объектов в stories.json
class storyGenerator {
    constructor(options = {}) {
        this.chance = new Chance();
        this.options = options;
    }

    // Генерирует случайную историю
    generarateRandomStory() {
        const {characters, places, actions, events} = this.options;

        const character = this.chance.pickone(characters || storyData.characters);
        const place = this.chance.pickone(places || storyData.places);
        const action = this.chance.pickone(actions || storyData.actions);
        const event = this.chance.pickone(events || storyData.events);

        const story = `${character} ${action} the ${place} and found a ${event}.`;
        return story;
    }

    getRandomElement(array) {
        const index = this.chance.integer({min: 0, max: array.length - 1});

        return array[index];
    }
}

module.exports = storyGenerator;