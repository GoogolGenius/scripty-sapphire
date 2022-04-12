import keepAlive from './server'
// const deregister = require('./deregister')

import { SapphireClient } from '@sapphire/framework'
import '@sapphire/plugin-logger/register'

const token = process.env.TOKEN

const client = new SapphireClient({ intents: ['GUILDS'] })

keepAlive()
// deregister()

client.login(token)
