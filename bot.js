const venom = require("venom-bot");

module.exports.createBot = (index) => {
    venom
        .create({
            session: `session_${index}`,
            multidevice: true
        })
        .then(start)
        .catch(console.error);
}

function start(client) {
    client.onMessage((message) => {
        if (message.body === "!ping" && message.isGroupMsg === false) {
            client.sendText(message.from, "🏓 Pong!")
        }
    });
}
