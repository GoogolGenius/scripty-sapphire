import {
  ApplicationCommandRegistry,
  Command,
  RegisterBehavior,
} from '@sapphire/framework'
import { type CommandInteraction, MessageEmbed } from 'discord.js'

export class HelpCommand extends Command {
  public override registerApplicationCommands(
    registry: ApplicationCommandRegistry
  ) {
    registry.registerChatInputCommand(
      {
        name: this.name,
        description: 'Display the help interface',
      },
      {
        idHints: ['948429268243857468'],
        behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
      }
    )
  }

  public async chatInputRun(interaction: CommandInteraction) {
    await interaction.deferReply()
    const embed = new MessageEmbed()
      .setColor('#5865F2')
      .setTitle('Help')
      .setDescription(
        'Post Traumatic Ship Disorder is real. Please contact Dr. Hrishikesh Kondiboyina PhD Psychology as soon as possible.'
      )
    await interaction.editReply({ embeds: [embed] })
  }
}
