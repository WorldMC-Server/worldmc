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
        description: "Schematics are allowed, but clients providing non-constructive advantages, such as combat or mining hacks, are not.",
        severity: [penalties.MUTE, penalties.TEMP_BAN, penalties.PERM_BAN],
        notes: "Permanent Ban for repeated use; Temporary Ban or Mute for first-time minor offenses",
      },
      {
        rule: "Exploiting bugs or glitches is not allowed.",
        severity: [penalties.WARNING, penalties.TEMP_BAN],
        notes: "Severity based on exploit severity",
      },
      {
        rule: "Intentionally causing lag or disrupting server services is banned.",
        severity: [penalties.KICK, penalties.TEMP_BAN],
        notes: "Escalates with repeated offenses",
      },
      {
        rule: "Using alt accounts to bypass punishments is not allowed.",
        description: "Creating or using alternate accounts to avoid mutes, bans, or other punishments is strictly prohibited.",
        severity: [penalties.TEMP_BAN, penalties.PERM_BAN],
        notes: "Punishment is applied to all accounts involved"
      },
    ],
  },
  {
    title: "Behavior and Chat",
    rules: [
      {
        rule: "Use appropriate names for nations, towns, and player accounts.",
        severity: [penalties.WARNING],
        notes: "Name change enforcement for repeat offenses",
      },
      {
        rule: "Bullying, hate speech, and explicit content are prohibited.",
        description: "This includes any form of harassment, discriminatory language, or content that is deemed inappropriate for the community.",
        severity: [penalties.MUTE, penalties.TEMP_BAN],
        notes: "Severity based on offense severity",
      },
      {
        rule: "Do not impersonate other players or entities.",
        description: "Impersonation must be genuinely malicious, with intent to harm or deceive another player or entity in some way.",
        severity: [penalties.WARNING, penalties.TEMP_BAN],
      },
      {
        rule: "Respect others' personal information and privacy.",
        description: "Do not share or misuse anyone’s private information such as real names, addresses, or other personal details without consent.",
        severity: [penalties.TEMP_BAN, penalties.PERM_BAN],
        notes: "Permanent Ban for severe infractions",
      },
      {
        rule: "Use English in global chat channels.",
        severity: [penalties.WARNING, penalties.MUTE],
        notes: "Repeated offenses may escalate",
      },
    ],
  },
  {
    title: "Griefing and Land Management",
    rules: [
      {
        rule: "Griefing and stealing within your own town or nation is not allowed.",
        description: "This applies even if you have permission to build or access areas within your town or nation. Stealing or causing intentional harm is forbidden.",
        severity: [penalties.WARNING, penalties.TEMP_BAN],
      },
      {
        rule: "Do not damage land within or around claims.",
        severity: [penalties.KICK, penalties.TEMP_BAN],
        notes: "Escalates for repeated land damage",
      },
      {
        rule: "Major terraforming that alters the world map is not allowed.",
        description: "Examples include filling oceans, destroying large mountain ranges, or other large-scale changes to the natural landscape.",
        severity: [penalties.WARNING, penalties.TEMP_BAN],
        notes: "Based on impact severity",
      },
      {
        rule: "Building map art is not permitted.",
        description: "Item frame art is allowed through the emerald rank, which provides a command to easily import images.",
        severity: [penalties.WARNING, penalties.TEMP_BAN],
        notes: "Temporary Ban for repeated map art violations",
      },
    ],
  },
];
