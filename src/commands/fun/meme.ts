import {
  ApplicationCommandRegistry,
  Command,
  RegisterBehavior,
} from '@sapphire/framework'
import { type CommandInteraction, MessageEmbed } from 'discord.js'
const redditFetch = require('reddit-fetch')

export class MemeCommand extends Command {
  public override registerApplicationCommands(
    registry: ApplicationCommandRegistry
  ) {
    registry.registerChatInputCommand(
      {
        name: this.name,
        description: 'The hottest Reddit r/memes',
      },
      {
        idHints: ['948429354805891103'],
        behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
      }
    )
  }

  public async chatInputRun(interaction: CommandInteraction) {
    await interaction.deferReply()
    await redditFetch({
      subreddit: 'memes',
      sort: 'hot',
      allowNSFW: false,
      allowModPost: true,
      allowCrossPost: true,
      allowVideo: false,
    })
      .then(async (post: any) => {
        if (post.is_video) {
          await interaction.editReply(
            `[](https://www.reddit.com${post.permalink})`
          )
        } else {
          const embed = new MessageEmbed()
            .setColor('#5865F2')
            .setTitle(post.title)
            .setURL(`https://www.reddit.com${post.permalink}`)
            .setImage(post.url)
          await interaction.editReply({ embeds: [embed] })
        }
      })
      .catch((error: any) => {
        console.error(`Promise rejection: ${error}`)
      })
  }
}
