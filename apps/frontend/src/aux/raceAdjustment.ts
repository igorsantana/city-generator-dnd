function getRaces() {
  return {
    human: {
      source: 'phb',
      display: 'Human',
      value: 'predominant',
    },
    elf: {
      source: 'phb',
      display: 'Elf',
      value: 'common',
    },
    dwarf: {
      source: 'phb',
      display: 'Dwarf',
      value: 'common',
    },
    halfelf: {
      source: 'phb',
      display: 'Half-elf',
      value: 'verycommon',
    },
    halfling: {
      source: 'phb',
      display: 'Halfling',
      value: 'common',
    },
    gnome: {
      source: 'phb',
      display: 'Gnome',
      value: 'few',
    },
    dragonborn: {
      source: 'phb',
      display: 'Dragonborn',
      value: 'few',
    },
    tiefling: {
      source: 'phb',
      display: 'Tiefling',
      value: 'few',
    },
    halforc: {
      source: 'phb',
      display: 'Half-Orc',
      value: 'few',
    },
    aarakocra: {
      source: 'eepc',
      display: 'Aarakocra',
      value: 'almostnonexistent',
    },
    genasi: {
      source: 'eepc',
      display: 'Genasi',
      value: 'almostnonexistent',
    },
    goliath: {
      source: 'eepc',
      display: 'Goliath',
      value: 'almostnonexistent',
    },
    aasimar: {
      source: 'vgtm',
      display: 'Aasimar',
      value: 'almostnonexistent',
    },
    bugbear: {
      source: 'vgtm',
      display: 'Bugbear',
      value: 'almostnonexistent',
    },
    firbolg: {
      source: 'vgtm',
      display: 'Firbolg',
      value: 'almostnonexistent',
    },
    goblin: {
      source: 'vgtm',
      display: 'Goblin',
      value: 'almostnonexistent',
    },
    hobgoblin: {
      source: 'vgtm',
      display: 'Hobgoblin',
      value: 'almostnonexistent',
    },
    kenku: {
      source: 'vgtm',
      display: 'Kenku',
      value: 'almostnonexistent',
    },
    kobold: {
      source: 'vgtm',
      display: 'Kobold',
      value: 'almostnonexistent',
    },
    lizardfolk: {
      source: 'vgtm',
      display: 'Lizardfolk',
      value: 'almostnonexistent',
    },
    orc: {
      source: 'vgtm',
      display: 'Orc',
      value: 'almostnonexistent',
    },
    tabaxi: {
      source: 'vgtm',
      display: 'Tabaxi',
      value: 'almostnonexistent',
    },
    triton: {
      source: 'vgtm',
      display: 'Triton',
      value: 'almostnonexistent',
    },
    yuanti: {
      source: 'vgtm',
      display: 'Yuan-ti',
      value: 'almostnonexistent',
    },
  };
}

function getOptions() {
  return [
    {
      value: 'nonexistent',
      name: 'Nonexistent',
    },
    {
      value: 'almostnonexistent',
      name: 'Almost Nonexistent',
    },
    {
      value: 'few',
      name: 'Few',
    },
    {
      value: 'common',
      name: 'Common',
    },
    {
      value: 'verycommon',
      name: 'Very Common',
    },
    {
      value: 'predominant',
      name: 'Predominant',
    },
  ];
}

export { getRaces, getOptions };
