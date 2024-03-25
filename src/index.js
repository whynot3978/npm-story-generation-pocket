const loremIpsum = require('lorem-ipsum');
const Chance = require('chance');
const storyData = require('../data/stories.json');

// Класс storyGenerator будет отвечать за генерацию случайных историй на основе данных из объектов в stories.json
class storyGenerator {
    constructor() {
        this.chance = new Chance();
    }

    // Генерирует случайную историю
    generarateRandomStory() {
        const character = this.chance.pickone(storyData.characters);
        const place = this.chance.pickone(storyData.places);
        const action = this.chance.pickone(storyData.actions);
        const event = this.chance.pickone(storyData.events);

        const story = `${character} ${action} the ${place} and found a ${event}.`;
        return story;
    }
}

module.exports = storyGenerator;