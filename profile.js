const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "profile",
    aliases: ['badge'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
     // GETTING USER 
     const user = message.author
     let badge= []

if (user.id == client.config.developer_badge_user_id) { // PUT THE BOT DEVELOPER ID HERE TO SHOW DEVELOPER BADGE
    badge.push("<:Developer:1013940337150005279> Developer");
  
}
if (user.id == client.config.staff_badge_user_id) { // PUT THE BOT STAFF ID HERE TO SHOW STAFF BADGE
    badge.push("<:DiscordStaff:999698121225416734> Staff");
}
  
// YOU MAY ADD MORE LINES IF YOU WANT OR YOU MAY 
const badges = badge.join(` `) ? `${badge.join('\n')} ` : '<:palm_tree:999699760434909294> ';
// ITS EMBED LINE 
const embed = new MessageEmbed()
.setAuthor(`${user.tag}`, user.displayAvatarURL({dynamic: true}))
    .addFields(
        { name: 'Badges', value: `${badges}`, inline: false },
    )
    .setThumbnail(user.avatarURL())
    .setTimestamp()
.setFooter(`Developed by zñ#4259`)
.setColor(`DARK_BUT_NOT_BLACK`)
// SENDING MESSAGE
message.channel.send({embeds: [embed]})
    }}

