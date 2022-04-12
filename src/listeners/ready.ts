// import { ApplyOptions } from '@sapphire/decorators';
import { Listener } from '@sapphire/framework'
import type { Client } from 'discord.js'

// @ApplyOptions<Listener.Options>({
//   once: true,
//   event: 'ready'
// })
export class ReadyListener extends Listener {
  public constructor(context: Listener.Context, options: Listener.Options) {
    super(context, {
      ...options,
      once: true,
      event: 'ready',
    })
  }

  public run(client: Client) {
    // client.application?.commands.set([])
    this.container.logger.info('Client: Ready!')
    client.user!.setActivity('/help', {
      type: 'PLAYING'
    })
  }
}
