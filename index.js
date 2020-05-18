const { Client, MessageAttachment } = require('discord.js')
const { prefix, token } = require('./config.json')
const demotivator = require('./modules/demotivator')

const client = new Client()
client.login(token)

client.on('message', async msg => {
  if (msg.author.bot) return
  if (msg.content.indexOf(prefix) !== 0) return
  var args = msg.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()
  switch (command) {
    case 'демотиватор':
      const data = args.join(' ').split(',')
      if (!data[0] || !data[1]) {
        return msg.channel.send('укажи текст через ,')
      }
      const attach = new MessageAttachment(msg.attachments.first().attachment) || null
      if (!attach) {
        return msg.channel.send('Ты не указал фотографию..')
      }
      const image = await demotivator(attach, data[0], data[1])
      msg.channel.send({
        files: [image]
      })
      break;
  }
})

client.on('ready', () => {
  console.log(`${client.user.tag} is ready`)
})