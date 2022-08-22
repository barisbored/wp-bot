const settings = require("./settings.json");
const { createBot } = require("./bot");
const bots = [];

for (let i = 0; i < settings.instances; i++) {
    bots.push(createBot(i));
}
