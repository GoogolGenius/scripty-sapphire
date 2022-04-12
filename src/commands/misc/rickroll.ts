import {
  ApplicationCommandRegistry,
  Command,
  RegisterBehavior,
} from '@sapphire/framework'
import { type CommandInteraction, MessageEmbed } from 'discord.js'

export class RickrollCommand extends Command {
  public override registerApplicationCommands(
    registry: ApplicationCommandRegistry
  ) {
    registry.registerChatInputCommand(
      {
        name: this.name,
        description: '😉',
      },
      {
        idHints: ['948429355439243264'],
        behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
      }
    )
  }

  public async chatInputRun(interaction: CommandInteraction) {
    await interaction.deferReply()
    await interaction.editReply('https://youtu.be/dQw4w9WgXcQ')
  }
}
