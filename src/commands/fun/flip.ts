import {
  ApplicationCommandRegistry,
  Command,
  RegisterBehavior,
} from '@sapphire/framework'
import { type CommandInteraction, MessageEmbed } from 'discord.js'

export class FlipCommand extends Command {
  public override registerApplicationCommands(
    registry: ApplicationCommandRegistry
  ) {
    registry.registerChatInputCommand(
      {
        name: this.name,
        description: 'Flip a coin',
      },
      {
        idHints: ['948429271184048178'],
        behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
      }
    )
  }

  public async chatInputRun(interaction: CommandInteraction) {
    await interaction.deferReply()
    const coin = ['Heads', 'Tails']
    const random = (array: any) => {
      return array[Math.floor(Math.random() * array.length)]
    }
    const embed = new MessageEmbed()
      .setColor('#5865F2')
      .setTitle('Flip')
      .setDescription(random(coin))
    await interaction.editReply({ embeds: [embed] })
  }
}
