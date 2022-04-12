import {
  ApplicationCommandRegistry,
  Command,
  RegisterBehavior,
} from '@sapphire/framework'
import { type CommandInteraction, type Client, MessageEmbed } from 'discord.js'

export class UptimeCommand extends Command {
  public override registerApplicationCommands(
    registry: ApplicationCommandRegistry
  ) {
    registry.registerChatInputCommand(
      {
        name: this.name,
        description: 'Replies with bot uptime',
      },
      {
        idHints: ['948429270336802846'],
        behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
      }
    )
  }

  public async chatInputRun(interaction: CommandInteraction) {
    await interaction.deferReply()
    let totalSeconds = interaction.client.uptime! / 1000
    const days = Math.floor(totalSeconds / 86400)
    totalSeconds %= 86400
    const hours = Math.floor(totalSeconds / 3600)
    totalSeconds %= 3600
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = Math.floor(totalSeconds % 60)
    const embed = new MessageEmbed()
      .setColor('#5865F2')
      .setTitle('Uptime')
      .setDescription(
        `\`${days}\` days, \`${hours}\` hours, \`${minutes}\` minutes & \`${seconds}\` seconds`
      )
    await interaction.editReply({ embeds: [embed] })
  }
}
