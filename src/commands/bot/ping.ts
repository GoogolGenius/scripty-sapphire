import {
  ApplicationCommandRegistry,
  Command,
  RegisterBehavior,
} from '@sapphire/framework'
import { type CommandInteraction, MessageEmbed } from 'discord.js'

export class PingCommand extends Command {
  public override registerApplicationCommands(
    registry: ApplicationCommandRegistry
  ) {
    registry.registerChatInputCommand(
      {
        name: this.name,
        description: 'Replies with bot latency',
      },
      {
        idHints: ['948429269560877066'],
        behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
      }
    )
  }

  public async chatInputRun(interaction: CommandInteraction) {
    await interaction.deferReply()
    const embed = new MessageEmbed()
      .setColor('#5865F2')
      .setTitle('Ping')
      .setDescription(`Pong! \`${interaction.client.ws.ping}ms\``)
    await interaction.editReply({ embeds: [embed] })
  }
}
