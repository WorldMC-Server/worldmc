export const enum penalties {
  WARNING = "Warning",
  KICK = "Kick",
  MUTE = "Mute",
  TEMP_BAN = "Temporary Ban",
  PERM_BAN = "Permanent Ban",
}

export const ruleCategories = [
  {
    title: "Cheating and Exploits",
    rules: [
      {
        rule: "Cheat clients and unfair modifications are prohibited.",
        description: "Using any modifications that provide a gameplay advantage, such as cheat clients or macros, is strictly forbidden. Only mods that enhance performance or visual aesthetics without altering gameplay are allowed.",
        severity: [penalties.MUTE, penalties.TEMP_BAN, penalties.PERM_BAN],
      },
      {
        rule: "Exploiting bugs or glitches is not allowed.",
        description: "Taking advantage of server bugs or technical oversights to gain an unfair advantage is prohibited. Any exploitation without reporting it to staff will lead to severe consequences.",
        severity: [penalties.WARNING, penalties.TEMP_BAN],
      },
      {
        rule: "Intentionally causing lag or disrupting server services is banned.",
        description: "Actions that intentionally cause lag or disrupt the server’s services are forbidden. This includes any deliberate attempts to impact server stability or user experience negatively.",
        severity: [penalties.KICK, penalties.TEMP_BAN],
      },
      {
        rule: "Using alt accounts to bypass punishments is not allowed.",
        description: "Creating or using additional accounts to circumvent bans, mutes, or other penalties is prohibited. All accounts involved in bypassing punishments will face penalties.",
        severity: [penalties.TEMP_BAN, penalties.PERM_BAN],
      },
    ],
  },
  {
    title: "Behavior and Chat",
    rules: [
      {
        rule: "Use appropriate names for nations, towns, and player accounts.",
        description: "Names must be appropriate and aligned with server guidelines. Nation names should correspond to real-life regions, and any offensive or inappropriate names will be addressed.",
        severity: [penalties.WARNING],
      },
      {
        rule: "Bullying, hate speech, and explicit content are prohibited.",
        description: "Any form of harassment, discriminatory language, or explicit content is banned. This includes bullying, hate speech, and any content that may cause harm to players.",
        severity: [penalties.MUTE, penalties.TEMP_BAN],
      },
      {
        rule: "Do not impersonate other players or entities.",
        description: "Intentional impersonation of other players, towns, or nations to deceive or harm is prohibited and will result in penalties.",
        severity: [penalties.WARNING, penalties.TEMP_BAN],
      },
      {
        rule: "Respect others' personal information and privacy.",
        description: "Sharing or leveraging other players' personal information without their consent is strictly forbidden. This includes names, addresses, photos, and other identifiable details.",
        severity: [penalties.TEMP_BAN, penalties.PERM_BAN],
      },
      {
        rule: "Use English in global chat channels.",
        description: "Global and donator chat channels are limited to English. Players may use other languages in private chats or if all participants in the global chat understand the language.",
        severity: [penalties.WARNING, penalties.MUTE],
      },
    ],
  },
  {
    title: "Griefing and Land Management",
    rules: [
      {
        rule: "Griefing and stealing within your own town or nation is not allowed.",
        description: "Intentionally damaging or stealing from within one’s own town or nation, even if allowed to access the area, is not permitted.",
        severity: [penalties.WARNING, penalties.TEMP_BAN],
      },
      {
        rule: "Do not damage land within or around claims.",
        description: "Altering land in or near claimed areas without permission is considered griefing. Continuous violations will lead to escalating penalties.",
        severity: [penalties.KICK, penalties.TEMP_BAN],
      },
      {
        rule: "Major terraforming that alters the world map is not allowed.",
        description: "Large-scale changes to the world, such as filling oceans or altering significant landscapes, are restricted to preserve the map's natural appearance.",
        severity: [penalties.WARNING, penalties.TEMP_BAN],
      },
      {
        rule: "Building map art is not permitted.",
        description: "Item frame art is allowed through the emerald rank, which provides a command to easily import images.",
        severity: [penalties.WARNING, penalties.TEMP_BAN],
      },
    ],
  },
];
