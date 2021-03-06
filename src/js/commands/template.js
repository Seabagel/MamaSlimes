module.exports = {
    name: "template",
    execute(userInput, args) {
        command(userInput, this.name);
    },
};

const command = (userInput, thisName) => {
    // Dependencies
    const { MessageEmbed } = require("discord.js");
    const { message_tools } = require("../tools");
    // Data
    const { texts, images } = require("../JSON_helper");

    // Assemble embedded message
    try {
        const embedded = new MessageEmbed()
            .setColor("ff4655")
            .setAuthor(
                userInput.author.username,
                userInput.author.displayAvatarURL({ dynamic: true })
            )
            .setTitle(`Title`)
            .setDescription(`Description`)
            .addField(texts.empty, message_tools.github(thisName))
            .setFooter(texts.footerText, images.githubIcon);
        // Send message
        userInput.channel.send(embedded);
        message_tools.logCommand(userInput, thisName);
    } catch (error) {
        message_tools.catchError(userInput, error);
    }
};
