import express from 'express'
import { container } from '@sapphire/framework'

const app = express()

app.use(express.static('src/web'))

// app.use('/', (req, res) => {
//     res.sendFile(path.join(__dirname+'/web/index.html'))
// })

const keepAlive = () => {
  app.listen(3000, () => {
    container.logger.info('Express: Server started.')
  })
}

export = keepAlive
