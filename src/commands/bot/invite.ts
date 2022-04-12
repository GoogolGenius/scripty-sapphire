import {
  ApplicationCommandRegistry,
  Command,
  RegisterBehavior,
} from '@sapphire/framework'
import {
  type CommandInteraction,
  MessageEmbed,
  MessageActionRow,
  MessageButton,
} from 'discord.js'

export class InviteCommand extends Command {
  public override registerApplicationCommands(
    registry: ApplicationCommandRegistry
  ) {
    registry.registerChatInputCommand(
      {
        name: this.name,
        description: 'Replies with Scripty bot invite',
      },
      {
        idHints: ['948429268948508712'],
        behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
      }
    )
  }

  public async chatInputRun(interaction: CommandInteraction) {
    await interaction.deferReply()
    const embed = new MessageEmbed()
      .setColor('#5865F2')
      .setTitle('Invite')
      .setDescription('Invite Scripty to your Discord Server!')
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel('Add to Server')
        .setStyle('LINK')
        .setURL(
          'https://discord.com/api/oauth2/authorize?client_id=883496337616822302&permissions=8&scope=bot%20applications.commands'
        )
    )
    await interaction.editReply({ embeds: [embed], components: [row] })
  }
}
