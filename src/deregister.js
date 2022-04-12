const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

const token = process.env.TOKEN
const clientId = process.env.CLIENT_ID
const guildId = process.env.GUILD_ID

const rest = new REST({ version: '9' }).setToken(token)
rest.get(Routes.applicationGuildCommands(clientId, guildId)).then((data) => {
  const promises = []
  for (const command of data) {
    const deleteUrl = `${Routes.applicationGuildCommands(clientId, guildId)}/${
      command.id
    }`
    promises.push(rest.delete(deleteUrl))
  }
  return Promise.all(promises)
})

// const deregister = () => {
//   rest.get(Routes.applicationCommands(clientId))
//   .then(data => {
//     const promises = []
//     for (const command of data) {
//       const deleteUrl = `${Routes.applicationCommands(clientId)}/${command.id}`
//       promises.push(rest.delete(deleteUrl))
//     }
//     return Promise.all(promises)
//   })

//   rest.get(Routes.applicationGuildCommands(clientId, guildId)).then((data) => {
//     const promises = []
//     for (const command of data) {
//       const deleteUrl = `${Routes.applicationGuildCommands(
//         clientId,
//         guildId
//       )}/${command.id}`
//       promises.push(rest.delete(deleteUrl))
//     }
//     return Promise.all(promises)
//   })
// }

// readline.question('Input a command id to deregister', (id) => {
//   console.log(`Successfully deregisterd ${id}!`)
//   readline.close()
// })

// module.exports = deregister
