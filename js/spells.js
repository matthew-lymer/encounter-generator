var spells = [
    {"name":"Acid Arrow","school":"Evocation","level":2,"comps":"V, S, M","classes":"Druid, Wizard"},
    {"name":"Acid Splash","school":"Conjuration","level":0,"comps":"V, S","classes":"Sorcerer, Wizard"},
    {"name":"Aid","school":"Abjuration","level":2,"comps":"V, S, M","classes":"Cleric, Paladin"},
    {"name":"Alarm","school":"Abjuration","level":1,"comps":"V, S, M","classes":"Ranger, Ritual Caster, Wizard"},
    {"name":"Alter Self","school":"Transmutation","level":2,"comps":"V, S","classes":"Sorcerer, Wizard"},
    {"name":"Animal Friendship","school":"Enchantment","level":1,"comps":"V, S, M","classes":"Bard, Druid, Ranger, Ritual Caster"},
    {"name":"Animal Messenger","school":"Enchantment","level":2,"comps":"V, S, M","classes":"Bard, Druid, Ranger, Ritual Caster"},
    {"name":"Animal Shapes","school":"Transmutation","level":8,"comps":"V, S","classes":"Druid"},
    {"name":"Animate Dead","school":"Necromancy","level":3,"comps":"V, S, M","classes":"Cleric, Wizard"},
    {"name":"Animate Objects","school":"Transmutation","level":5,"comps":"V, S","classes":"Bard, Sorcerer, Wizard"},
    {"name":"Antilife Shell","school":"Abjuration","level":5,"comps":"V, S","classes":"Druid"},
    {"name":"Antimagic Field","school":"Abjuration","level":8,"comps":"V, S, M","classes":"Cleric, Wizard"},
    {"name":"Antipathy/Sympathy","school":"Enchantment","level":8,"comps":"V, S, M","classes":"Druid, Wizard"},
    {"name":"Arcane Eye","school":"Divination","level":4,"comps":"V, S, M","classes":"Cleric, Wizard"},
    {"name":"Arcane Hand","school":"Evocation","level":5,"comps":"V, S, M","classes":"Wizard"},
    {"name":"Arcane Lock","school":"Abjuration","level":2,"comps":"V, S, M","classes":"Wizard"},
    {"name":"Arcane Sword","school":"Evocation","level":7,"comps":"V, S, M","classes":"Bard, Wizard"},
    {"name":"Arcanist's Magic Aura","school":"Illusion","level":2,"comps":"V, S, M","classes":"Wizard"},
    {"name":"Astral Projection","school":"Necromancy","level":9,"comps":"V, S, M","classes":"Cleric, Warlock, Wizard"},
    {"name":"Augury","school":"Divination","level":2,"comps":"V, S, M","classes":"Cleric, Ritual Caster"},
    {"name":"Awaken","school":"Transmutation","level":5,"comps":"V, S, M","classes":"Bard, Druid"},
    {"name":"Bane","school":"Enchantment","level":1,"comps":"V, S, M","classes":"Bard, Cleric, Paladin"},
    {"name":"Banishment","school":"Abjuration","level":4,"comps":"V, S, M","classes":"Cleric, Paladin, Sorcerer, Warlock, Wizard"},
    {"name":"Barkskin","school":"Transmutation","level":2,"comps":"V, S, M","classes":"Cleric, Druid, Ranger"},
    {"name":"Beacon of Hope","school":"Abjuration","level":3,"comps":"V, S","classes":"Cleric, Paladin"},
    {"name":"Bestow Curse","school":"Necromancy","level":3,"comps":"V, S","classes":"Bard, Cleric, Wizard"},
    {"name":"Black Tentacles","school":"Conjuration","level":4,"comps":"V, S, M","classes":"Warlock, Wizard"},
    {"name":"Blade Barrier","school":"Evocation","level":6,"comps":"V, S","classes":"Cleric"},
    {"name":"Bless","school":"Enchantment","level":1,"comps":"V, S, M","classes":"Cleric, Paladin"},
    {"name":"Blight","school":"Necromancy","level":4,"comps":"V, S","classes":"Druid, Sorcerer, Warlock, Wizard"},
    {"name":"Blindness/Deafness","school":"Necromancy","level":2,"comps":"V","classes":"Bard, Cleric, Sorcerer, Warlock, Wizard"},
    {"name":"Blink","school":"Transmutation","level":3,"comps":"V, S","classes":"Cleric, Sorcerer, Warlock, Wizard"},
    {"name":"Blur","school":"Illusion","level":2,"comps":"V","classes":"Druid, Sorcerer, Wizard"},
    {"name":"Branding Smite","school":"Evocation","level":2,"comps":"V","classes":"Paladin"},
    {"name":"Burning Hands","school":"Evocation","level":1,"comps":"V, S","classes":"Cleric, Sorcerer, Warlock, Wizard"},
    {"name":"Call Lightning","school":"Conjuration","level":3,"comps":"V, S","classes":"Cleric, Druid"},
    {"name":"Calm Emotions","school":"Enchantment","level":2,"comps":"V, S","classes":"Bard, Cleric, Warlock"},
    {"name":"Chain Lightning","school":"Evocation","level":6,"comps":"V, S, M","classes":"Sorcerer, Wizard"},
    {"name":"Charm Person","school":"Enchantment","level":1,"comps":"V, S","classes":"Bard, Cleric, Druid, Sorcerer, Warlock, Wizard"},
    {"name":"Chill Touch","school":"Necromancy","level":0,"comps":"V, S","classes":"Sorcerer, Warlock, Wizard"},
    {"name":"Circle of Death","school":"Necromancy","level":6,"comps":"V, S, M","classes":"Sorcerer, Warlock, Wizard"},
    {"name":"Clairvoyance","school":"Divination","level":3,"comps":"V, S, M","classes":"Bard, Cleric, Sorcerer, Warlock, Wizard"},
    {"name":"Clone","school":"Necromancy","level":8,"comps":"V, S, M","classes":"Wizard"},
    {"name":"Cloudkill","school":"Conjuration","level":5,"comps":"V, S","classes":"Druid, Sorcerer, Wizard"},
    {"name":"Color Spray","school":"Illusion","level":1,"comps":"V, S, M","classes":"Sorcerer, Wizard"},
    {"name":"Command","school":"Enchantment","level":1,"comps":"V","classes":"Cleric, Paladin, Warlock"},
    {"name":"Commune","school":"Divination","level":5,"comps":"V, S, M","classes":"Cleric, Paladin, Ritual Caster"},
    {"name":"Commune with Nature","school":"Divination","level":5,"comps":"V, S","classes":"Druid, Paladin, Ranger, Ritual Caster"},
    {"name":"Comprehend Languages","school":"Divination","level":1,"comps":"V, S, M","classes":"Bard, Ritual Caster, Sorcerer, Warlock, Wizard"},
    {"name":"Compulsion","school":"Enchantment","level":4,"comps":"V, S","classes":"Bard"},
    {"name":"Cone of Cold","school":"Evocation","level":5,"comps":"V, S, M","classes":"Druid, Sorcerer, Wizard"},
    {"name":"Confusion","school":"Enchantment","level":4,"comps":"V, S, M","classes":"Bard, Cleric, Druid, Sorcerer, Wizard"},
    {"name":"Conjure Animals","school":"Conjuration","level":3,"comps":"V, S","classes":"Druid, Ranger"},
    {"name":"Conjure Celestial","school":"Conjuration","level":7,"comps":"V, S","classes":"Cleric"},
    {"name":"Conjure Elemental","school":"Conjuration","level":5,"comps":"V, S, M","classes":"Druid, Wizard"},
    {"name":"Conjure Fey","school":"Conjuration","level":6,"comps":"V, S","classes":"Druid, Warlock"},
    {"name":"Conjure Minor Elementals","school":"Conjuration","level":4,"comps":"V, S","classes":"Druid, Wizard"},
    {"name":"Conjure Woodland Beings","school":"Conjuration","level":4,"comps":"V, S, M","classes":"Druid, Ranger"},
    {"name":"Contact Other Plane","school":"Divination","level":5,"comps":"V","classes":"Ritual Caster, Warlock, Wizard"},
    {"name":"Contagion","school":"Necromancy","level":5,"comps":"V, S","classes":"Cleric, Druid"},
    {"name":"Contingency","school":"Evocation","level":6,"comps":"V, S, M","classes":"Wizard"},
    {"name":"Continual Flame","school":"Evocation","level":2,"comps":"V, S, M","classes":"Cleric, Wizard"},
    {"name":"Control Water","school":"Transmutation","level":4,"comps":"V, S, M","classes":"Cleric, Druid, Wizard"},
    {"name":"Control Weather","school":"Transmutation","level":8,"comps":"V, S, M","classes":"Cleric, Druid, Wizard"},
    {"name":"Counterspell","school":"Abjuration","level":3,"comps":"S","classes":"Paladin, Sorcerer, Warlock, Wizard"},
    {"name":"Create Food and Water","school":"Conjuration","level":3,"comps":"V, S","classes":"Cleric, Druid, Paladin"},
    {"name":"Create Undead","school":"Necromancy","level":6,"comps":"V, S, M","classes":"Cleric, Warlock, Wizard"},
    {"name":"Create or Destroy Water","school":"Transmutation","level":1,"comps":"V, S, M","classes":"Cleric, Druid"},
    {"name":"Creation","school":"Illusion","level":5,"comps":"V, S, M","classes":"Sorcerer, Wizard"},
    {"name":"Cure Wounds","school":"Evocation","level":1,"comps":"V, S","classes":"Bard, Cleric, Druid, Paladin, Ranger"},
    {"name":"Dancing Lights","school":"Evocation","level":0,"comps":"V, S, M","classes":"Bard, Sorcerer, Wizard"},
    {"name":"Darkness","school":"Evocation","level":2,"comps":"V, M","classes":"Druid, Sorcerer, Warlock, Wizard"},
    {"name":"Darkvision","school":"Transmutation","level":2,"comps":"V, S, M","classes":"Druid, Ranger, Sorcerer, Wizard"},
    {"name":"Daylight","school":"Evocation","level":3,"comps":"V, S","classes":"Cleric, Druid, Paladin, Ranger, Sorcerer"},
    {"name":"Death Ward","school":"Abjuration","level":4,"comps":"V, S","classes":"Cleric, Paladin"},
    {"name":"Delayed Blast Fireball","school":"Evocation","level":7,"comps":"V, S, M","classes":"Sorcerer, Wizard"},
    {"name":"Demiplane","school":"Conjuration","level":8,"comps":"S","classes":"Warlock, Wizard"},
    {"name":"Detect Evil and Good","school":"Divination","level":1,"comps":"V, S","classes":"Cleric, Paladin"},
    {"name":"Detect Magic","school":"Divination","level":1,"comps":"V, S","classes":"Bard, Cleric, Druid, Paladin, Ranger, Ritual Caster, Sorcerer, Wizard"},
    {"name":"Detect Poison and Disease","school":"Divination","level":1,"comps":"V, S, M","classes":"Cleric, Druid, Paladin, Ranger, Ritual Caster"},
    {"name":"Detect Thoughts","school":"Divination","level":2,"comps":"V, S, M","classes":"Bard, Sorcerer, Warlock, Wizard"},
    {"name":"Dimension Door","school":"Conjuration","level":4,"comps":"V","classes":"Bard, Cleric, Paladin, Sorcerer, Warlock, Wizard"},
    {"name":"Disguise Self","school":"Illusion","level":1,"comps":"V, S","classes":"Bard, Cleric, Sorcerer, Wizard"},
    {"name":"Disintegrate","school":"Transmutation","level":6,"comps":"V, S, M","classes":"Sorcerer, Wizard"},
    {"name":"Dispel Evil and Good","school":"Abjuration","level":5,"comps":"V, S, M","classes":"Cleric, Paladin"},
    {"name":"Dispel Magic","school":"Abjuration","level":3,"comps":"V, S","classes":"Bard, Cleric, Druid, Paladin, Sorcerer, Warlock, Wizard"},
    {"name":"Divination","school":"Divination","level":4,"comps":"V, S, M","classes":"Cleric, Druid, Ritual Caster"},
    {"name":"Divine Favor","school":"Evocation","level":1,"comps":"V, S","classes":"Cleric, Paladin"},
    {"name":"Divine Word","school":"Evocation","level":7,"comps":"V","classes":"Cleric"},
    {"name":"Dominate Beast","school":"Enchantment","level":4,"comps":"V, S","classes":"Cleric, Druid, Sorcerer, Warlock"},
    {"name":"Dominate Monster","school":"Enchantment","level":8,"comps":"V, S","classes":"Bard, Sorcerer, Warlock, Wizard"},
    {"name":"Dominate Person","school":"Enchantment","level":5,"comps":"V, S","classes":"Bard, Cleric, Sorcerer, Warlock, Wizard"},
    {"name":"Dream","school":"Illusion","level":5,"comps":"V, S, M","classes":"Bard, Druid, Warlock, Wizard"},
    {"name":"Druidcraft","school":"Transmutation","level":0,"comps":"V, S","classes":"Druid"},
    {"name":"Earthquake","school":"Evocation","level":8,"comps":"V, S, M","classes":"Cleric, Druid, Sorcerer"},
    {"name":"Eldritch Blast","school":"Evocation","level":0,"comps":"V, S","classes":"Warlock"},
    {"name":"Enhance Ability","school":"Transmutation","level":2,"comps":"V, S, M","classes":"Bard, Cleric, Druid, Sorcerer"},
    {"name":"Enlarge/Reduce","school":"Transmutation","level":2,"comps":"V, S, M","classes":"Sorcerer, Wizard"},
    {"name":"Entangle","school":"Conjuration","level":1,"comps":"V, S","classes":"Druid"},
    {"name":"Enthrall","school":"Enchantment","level":2,"comps":"V, S","classes":"Bard, Warlock"},
    {"name":"Etherealness","school":"Transmutation","level":7,"comps":"V, S","classes":"Bard, Cleric, Sorcerer, Warlock, Wizard"},
    {"name":"Expeditious Retreat","school":"Transmutation","level":1,"comps":"V, S","classes":"Sorcerer, Warlock, Wizard"},
    {"name":"Eye bite","school":"Necromancy","level":6,"comps":"V, S","classes":"Bard, Sorcerer, Warlock, Wizard"},
    {"name":"Eyebite","school":"Necromancy","level":6,"comps":"V, S","classes":"Bard, Sorcerer, Warlock, Wizard"},
    {"name":"Fabricate","school":"Transmutation","level":4,"comps":"V, S","classes":"Wizard"},
    {"name":"Faerie Fire","school":"Evocation","level":1,"comps":"V","classes":"Bard, Cleric, Druid, Warlock"},
    {"name":"Faithful Hound","school":"Conjuration","level":4,"comps":"V, S, M","classes":"Wizard"},
    {"name":"False Life","school":"Necromancy","level":1,"comps":"V, S, M","classes":"Sorcerer, Wizard"},
    {"name":"Fear","school":"Illusion","level":3,"comps":"V, S, M","classes":"Bard, Sorcerer, Warlock, Wizard"},
    {"name":"Feather Fall","school":"Transmutation","level":1,"comps":"V, M","classes":"Bard, Sorcerer, Wizard"},
    {"name":"Feeblemind","school":"Enchantment","level":8,"comps":"V, S, M","classes":"Bard, Druid, Warlock, Wizard"},
    {"name":"Find Familiar","school":"Conjuration","level":1,"comps":"V, S, M","classes":"Wizard"},
    {"name":"Find Steed","school":"Conjuration","level":2,"comps":"V, S","classes":"Paladin"},
    {"name":"Find Traps","school":"Divination","level":2,"comps":"V, S","classes":"Cleric, Druid, Ranger"},
    {"name":"Find the Path","school":"Divination","level":6,"comps":"V, S, M","classes":"Bard, Cleric, Druid"},
    {"name":"Finger of Death","school":"Necromancy","level":7,"comps":"V, S","classes":"Sorcerer, Warlock, Wizard"},
    {"name":"Fire Bolt","school":"Evocation","level":0,"comps":"V, S","classes":"Sorcerer, Wizard"},
    {"name":"Fire Shield","school":"Evocation","level":4,"comps":"V, S, M","classes":"Warlock, Wizard"},
    {"name":"Fire Storm","school":"Evocation","level":7,"comps":"V, S","classes":"Cleric, Druid, Sorcerer"},
    {"name":"Fireball","school":"Evocation","level":3,"comps":"V, S, M","classes":"Cleric, Sorcerer, Warlock, Wizard"},
    {"name":"Flame Blade","school":"Evocation","level":2,"comps":"V, S, M","classes":"Druid"},
    {"name":"Flame Strike","school":"Evocation","level":5,"comps":"V, S, M","classes":"Cleric, Paladin, Warlock"},
    {"name":"Flaming Sphere","school":"Conjuration","level":2,"comps":"V, S, M","classes":"Cleric, Druid, Wizard"},
    {"name":"Flesh to Stone","school":"Transmutation","level":6,"comps":"V, S, M","classes":"Warlock, Wizard"},
    {"name":"Floating Disk","school":"Conjuration","level":1,"comps":"V, S, M","classes":"Ritual Caster, Wizard"},
    {"name":"Fly","school":"Transmutation","level":3,"comps":"V, S, M","classes":"Sorcerer, Warlock, Wizard"},
    {"name":"Fog Cloud","school":"Conjuration","level":1,"comps":"V, S","classes":"Cleric, Druid, Ranger, Sorcerer, Wizard"},
    {"name":"Forbiddance","school":"Abjuration","level":6,"comps":"V, S, M","classes":"Cleric, Ritual Caster"},
    {"name":"Forcecage","school":"Evocation","level":7,"comps":"V, S, M","classes":"Bard, Warlock, Wizard"},
    {"name":"Foresight","school":"Divination","level":9,"comps":"V, S, M","classes":"Bard, Druid, Warlock, Wizard"},
    {"name":"Freedom of Movement","school":"Abjuration","level":4,"comps":"V, S, M","classes":"Bard, Cleric, Druid, Paladin, Ranger"},
    {"name":"Freezing Sphere","school":"Evocation","level":6,"comps":"V, S, M","classes":"Wizard"},
    {"name":"Gaseous Form","school":"Transmutation","level":3,"comps":"V, S, M","classes":"Druid, Sorcerer, Warlock, Wizard"},
    {"name":"Gate","school":"Conjuration","level":9,"comps":"V, S, M","classes":"Cleric, Sorcerer, Wizard"},
    {"name":"Geas","school":"Enchantment","level":5,"comps":"V","classes":"Bard, Cleric, Druid, Paladin, Wizard"},
    {"name":"Gentle Repose","school":"Necromancy","level":2,"comps":"V, S, M","classes":"Cleric, Ritual Caster, Wizard"},
    {"name":"Giant Insect","school":"Transmutation","level":4,"comps":"V, S","classes":"Druid"},
    {"name":"Glibness","school":"Transmutation","level":8,"comps":"V","classes":"Bard, Warlock"},
    {"name":"Globe of Invulnerability","school":"Abjuration","level":6,"comps":"V, S, M","classes":"Sorcerer, Wizard"},
    {"name":"Glyph of Warding","school":"Abjuration","level":3,"comps":"V, S, M","classes":"Bard, Cleric, Wizard"},
    {"name":"Goodberry","school":"Transmutation","level":1,"comps":"V, S, M","classes":"Druid, Ranger"},
    {"name":"Grease","school":"Conjuration","level":1,"comps":"V, S, M","classes":"Wizard"},
    {"name":"Greater Invisibility","school":"Illusion","level":4,"comps":"V, S","classes":"Bard, Druid, Sorcerer, Warlock, Wizard"},
    {"name":"Greater Restoration","school":"Abjuration","level":5,"comps":"V, S, M","classes":"Bard, Cleric, Druid"},
    {"name":"Guardian of Faith","school":"Conjuration","level":4,"comps":"V","classes":"Cleric"},
    {"name":"Guards and Wards","school":"Abjuration","level":6,"comps":"V, S, M","classes":"Bard, Wizard"},
    {"name":"Guidance","school":"Divination","level":0,"comps":"V, S","classes":"Cleric, Druid"},
    {"name":"Guiding Bolt","school":"Evocation","level":1,"comps":"V, S","classes":"Cleric"},
    {"name":"Gust of Wind","school":"Evocation","level":2,"comps":"V, S, M","classes":"Cleric, Druid, Sorcerer, Wizard"},
    {"name":"Hallow","school":"Evocation","level":5,"comps":"V, S, M","classes":"Cleric, Warlock"},
    {"name":"Hallucinatory Terrain","school":"Illusion","level":4,"comps":"V, S, M","classes":"Bard, Druid, Warlock, Wizard"},
    {"name":"Harm","school":"Necromancy","level":6,"comps":"V, S","classes":"Cleric"},
    {"name":"Haste","school":"Transmutation","level":3,"comps":"V, S, M","classes":"Druid, Paladin, Sorcerer, Wizard"},
    {"name":"Heal","school":"Evocation","level":6,"comps":"V, S","classes":"Cleric, Druid"},
    {"name":"Healing Word","school":"Evocation","level":1,"comps":"V","classes":"Bard, Cleric, Druid"},
    {"name":"Heat Metal","school":"Transmutation","level":2,"comps":"V, S, M","classes":"Bard, Druid"},
    {"name":"Hellish Rebuke","school":"Evocation","level":1,"comps":"V, S","classes":"Paladin, Warlock"},
    {"name":"Heroes' Feast","school":"Conjuration","level":6,"comps":"V, S, M","classes":"Cleric, Druid"},
    {"name":"Heroism","school":"Enchantment","level":1,"comps":"V, S","classes":"Bard, Paladin"},
    {"name":"Hideous Laughter","school":"Enchantment","level":1,"comps":"V, S, M","classes":"Bard, Warlock, Wizard"},
    {"name":"Hold Monster","school":"Enchantment","level":5,"comps":"V, S, M","classes":"Bard, Cleric, Paladin, Sorcerer, Warlock, Wizard"},
    {"name":"Hold Person","school":"Enchantment","level":2,"comps":"V, S, M","classes":"Bard, Cleric, Druid, Paladin, Sorcerer, Warlock, Wizard"},
    {"name":"Holy Aura","school":"Abjuration","level":8,"comps":"V, S, M","classes":"Cleric"},
    {"name":"Hunter's Mark","school":"Divination","level":1,"comps":"V","classes":"Paladin, Ranger"},
    {"name":"Hypnotic Pattern","school":"Illusion","level":3,"comps":"S, M","classes":"Bard, Sorcerer, Warlock, Wizard"},
    {"name":"Ice Storm","school":"Evocation","level":4,"comps":"V, S, M","classes":"Cleric, Druid, Paladin, Sorcerer, Wizard"},
    {"name":"Identify","school":"Divination","level":1,"comps":"V, S, M","classes":"Bard, Cleric, Ritual Caster, Wizard"},
    {"name":"Illusory Script","school":"Illusion","level":1,"comps":"S, M","classes":"Bard, Ritual Caster, Warlock, Wizard"},
    {"name":"Imprisonment","school":"Abjuration","level":9,"comps":"V, S, M","classes":"Warlock, Wizard"},
    {"name":"Incendiary Cloud","school":"Conjuration","level":8,"comps":"V, S","classes":"Sorcerer, Wizard"},
    {"name":"Inflict Wounds","school":"Necromancy","level":1,"comps":"V, S","classes":"Cleric"},
    {"name":"Insect Plague","school":"Conjuration","level":5,"comps":"V, S, M","classes":"Cleric, Druid, Sorcerer"},
    {"name":"Instant Summons","school":"Conjuration","level":6,"comps":"V, S, M","classes":"Ritual Caster, Wizard"},
    {"name":"Invisibility","school":"Illusion","level":2,"comps":"V, S, M","classes":"Bard, Druid, Sorcerer, Warlock, Wizard"},
    {"name":"Irresistible Dance","school":"Enchantment","level":6,"comps":"V","classes":"Bard, Wizard"},
    {"name":"Jump","school":"Transmutation","level":1,"comps":"V, S, M","classes":"Druid, Ranger, Sorcerer, Wizard"},
    {"name":"Knock","school":"Transmutation","level":2,"comps":"V","classes":"Bard, Sorcerer, Wizard"},
    {"name":"Legend Lore","school":"Divination","level":5,"comps":"V, S, M","classes":"Bard, Cleric, Wizard"},
    {"name":"Lesser Restoration","school":"Abjuration","level":2,"comps":"V, S","classes":"Bard, Cleric, Druid, Paladin, Ranger"},
    {"name":"Levitate","school":"Transmutation","level":2,"comps":"V, S, M","classes":"Sorcerer, Wizard"},
    {"name":"Light","school":"Evocation","level":0,"comps":"V, M","classes":"Bard, Cleric, Sorcerer, Wizard"},
    {"name":"Lightning Bolt","school":"Evocation","level":3,"comps":"V, S, M","classes":"Druid, Sorcerer, Wizard"},
    {"name":"Locate Animals or Plants","school":"Divination","level":2,"comps":"V, S, M","classes":"Bard, Druid, Ranger, Ritual Caster"},
    {"name":"Locate Creature","school":"Divination","level":4,"comps":"V, S, M","classes":"Bard, Cleric, Druid, Paladin, Ranger, Wizard"},
    {"name":"Locate Object","school":"Divination","level":2,"comps":"V, S, M","classes":"Bard, Cleric, Druid, Paladin, Ranger, Wizard"},
    {"name":"Longstrider","school":"Transmutation","level":1,"comps":"V, S, M","classes":"Bard, Druid, Ranger, Wizard"},
    {"name":"Mage Armor","school":"Abjuration","level":1,"comps":"V, S, M","classes":"Sorcerer, Wizard"},
    {"name":"Mage Hand","school":"Conjuration","level":0,"comps":"V, S","classes":"Bard, Sorcerer, Warlock, Wizard"},
    {"name":"Magic Circle","school":"Abjuration","level":3,"comps":"V, S, M","classes":"Cleric, Paladin, Warlock, Wizard"},
    {"name":"Magic Jar","school":"Necromancy","level":6,"comps":"V, S, M","classes":"Wizard"},
    {"name":"Magic Missile","school":"Evocation","level":1,"comps":"V, S","classes":"Sorcerer, Wizard"},
    {"name":"Magic Mouth","school":"Illusion","level":2,"comps":"V, S, M","classes":"Bard, Ritual Caster, Wizard"},
    {"name":"Magic Weapon","school":"Transmutation","level":2,"comps":"V, S","classes":"Cleric, Paladin, Wizard"},
    {"name":"Magnificent Mansion","school":"Conjuration","level":7,"comps":"V, S, M","classes":"Bard, Wizard"},
    {"name":"Major Image","school":"Illusion","level":3,"comps":"V, S, M","classes":"Bard, Sorcerer, Warlock, Wizard"},
    {"name":"Mass Cure Wounds","school":"Conjuration","level":5,"comps":"V, S","classes":"Bard, Cleric, Druid"},
    {"name":"Mass Heal","school":"Conjuration","level":9,"comps":"V, S","classes":"Cleric"},
    {"name":"Mass Healing Word","school":"Evocation","level":3,"comps":"V","classes":"Cleric"},
    {"name":"Mass Suggestion","school":"Enchantment","level":6,"comps":"V, M","classes":"Bard, Sorcerer, Warlock, Wizard"},
    {"name":"Maze","school":"Conjuration","level":8,"comps":"V, S","classes":"Wizard"},
    {"name":"Meld into Stone","school":"Transmutation","level":3,"comps":"V, S","classes":"Cleric, Druid, Ritual Caster"},
    {"name":"Mending","school":"Transmutation","level":0,"comps":"V, S, M","classes":"Cleric, Bard, Druid, Sorcerer, Wizard"},
    {"name":"Message","school":"Transmutation","level":0,"comps":"V, S, M","classes":"Bard, Sorcerer, Wizard"},
    {"name":"Meteor Swarm","school":"Evocation","level":9,"comps":"V, S","classes":"Sorcerer, Wizard"},
    {"name":"Mind Blank","school":"Abjuration","level":8,"comps":"V, S","classes":"Bard, Wizard"},
    {"name":"Minor Illusion","school":"Illusion","level":0,"comps":"S, M","classes":"Bard, Sorcerer, Warlock, Wizard"},
    {"name":"Mirage Arcane","school":"Illusion","level":7,"comps":"V, S","classes":"Bard, Druid, Wizard"},
    {"name":"Mirror Image","school":"Illusion","level":2,"comps":"V, S","classes":"Cleric, Druid, Sorcerer, Warlock, Wizard"},
    {"name":"Mislead","school":"Illusion","level":5,"comps":"S","classes":"Bard, Wizard"},
    {"name":"Misty Step","school":"Conjuration","level":2,"comps":"V","classes":"Druid, Paladin, Sorcerer, Warlock, Wizard"},
    {"name":"Modify Memory","school":"Enchantment","level":5,"comps":"V, S","classes":"Bard, Cleric, Wizard"},
    {"name":"Moonbeam","school":"Evocation","level":2,"comps":"V, S, M","classes":"Druid, Paladin"},
    {"name":"Move Earth","school":"Transmutation","level":6,"comps":"V, S, M","classes":"Druid, Sorcerer, Wizard"},
    {"name":"Nondetection","school":"Abjuration","level":3,"comps":"V, S, M","classes":"Bard, Cleric, Ranger, Wizard"},
    {"name":"Pass without Trace","school":"Abjuration","level":2,"comps":"V, S, M","classes":"Cleric, Druid, Ranger"},
    {"name":"Passwall","school":"Transmutation","level":5,"comps":"V, S, M","classes":"Druid, Wizard"},
    {"name":"Phantasmal Killer","school":"Illusion","level":4,"comps":"V, S","classes":"Wizard"},
    {"name":"Phantom Steed","school":"Illusion","level":3,"comps":"V, S","classes":"Ritual Caster, Wizard"},
    {"name":"Planar Ally","school":"Conjuration","level":6,"comps":"V, S","classes":"Cleric"},
    {"name":"Planar Binding","school":"Abjuration","level":5,"comps":"V, S, M","classes":"Bard, Cleric, Druid, Wizard"},
    {"name":"Plane Shift","school":"Conjuration","level":7,"comps":"V, S, M","classes":"Cleric, Sorcerer, Warlock, Wizard"},
    {"name":"Plant Growth","school":"Transmutation","level":3,"comps":"V, S","classes":"Bard, Cleric, Druid, Paladin, Ranger, Warlock"},
    {"name":"Poison Spray","school":"Conjuration","level":0,"comps":"V, S","classes":"Druid, Sorcerer, Warlock, Wizard"},
    {"name":"Polymorph","school":"Transmutation","level":4,"comps":"V, S, M","classes":"Bard, Cleric, Druid, Sorcerer, Wizard"},
    {"name":"Power Word Kill","school":"Enchantment","level":9,"comps":"V","classes":"Bard, Sorcerer, Warlock, Wizard"},
    {"name":"Power Word Stun","school":"Enchantment","level":8,"comps":"V","classes":"Bard, Sorcerer, Warlock, Wizard"},
    {"name":"Prayer of Healing","school":"Evocation","level":2,"comps":"V","classes":"Cleric"},
    {"name":"Prestidigitation","school":"Transmutation","level":0,"comps":"V, S","classes":"Bard, Sorcerer, Warlock, Wizard"},
    {"name":"Prismatic Spray","school":"Evocation","level":7,"comps":"V, S","classes":"Sorcerer, Wizard"},
    {"name":"Prismatic Wall","school":"Abjuration","level":9,"comps":"V, S","classes":"Wizard"},
    {"name":"Private Sanctum","school":"Abjuration","level":4,"comps":"V, S, M","classes":"Wizard"},
    {"name":"Produce Flame","school":"Conjuration","level":0,"comps":"V, S","classes":"Druid"},
    {"name":"Programmed Illusion","school":"Illusion","level":6,"comps":"V, S, M","classes":"Bard, Wizard"},
    {"name":"Project Image","school":"Illusion","level":7,"comps":"V, S, M","classes":"Bard, Wizard"},
    {"name":"Protection from Energy","school":"Abjuration","level":3,"comps":"V, S","classes":"Cleric, Druid, Paladin, Ranger, Sorcerer, Wizard"},
    {"name":"Protection from Evil and Good","school":"Abjuration","level":1,"comps":"V, S, M","classes":"Cleric, Paladin, Warlock, Wizard"},
    {"name":"Protection from Poison","school":"Abjuration","level":2,"comps":"V, S","classes":"Cleric, Druid, Paladin, Ranger"},
    {"name":"Purify Food and Drink","school":"Transmutation","level":1,"comps":"V, S","classes":"Cleric, Druid, Paladin, Ritual Caster"},
    {"name":"Raise Dead","school":"Necromancy","level":5,"comps":"V, S, M","classes":"Bard, Cleric, Paladin"},
    {"name":"Ray of Enfeeblement","school":"Necromancy","level":2,"comps":"V, S","classes":"Warlock, Wizard"},
    {"name":"Ray of Frost","school":"Evocation","level":0,"comps":"V, S","classes":"Sorcerer, Wizard"},
    {"name":"Ray of Sickness","school":"Necromancy","level":1,"comps":"V, S","classes":"Sorcerer, Wizard"},
    {"name":"Regenerate","school":"Transmutation","level":7,"comps":"V, S, M","classes":"Bard, Cleric, Druid"},
    {"name":"Reincarnate","school":"Transmutation","level":5,"comps":"V, S, M","classes":"Druid"},
    {"name":"Remove Curse","school":"Abjuration","level":3,"comps":"V, S","classes":"Cleric, Paladin, Warlock, Wizard"},
    {"name":"Resilient Sphere","school":"Evocation","level":4,"comps":"V, S, M","classes":"Wizard"},
    {"name":"Resistance","school":"Abjuration","level":0,"comps":"V, S, M","classes":"Cleric, Druid"},
    {"name":"Resurrection","school":"Necromancy","level":7,"comps":"V, S, M","classes":"Bard, Cleric"},
    {"name":"Reverse Gravity","school":"Transmutation","level":7,"comps":"V, S, M","classes":"Druid, Sorcerer, Wizard"},
    {"name":"Revivify","school":"Conjuration","level":3,"comps":"V, S, M","classes":"Cleric, Paladin"},
    {"name":"Rope Trick","school":"Transmutation","level":2,"comps":"V, S, M","classes":"Wizard"},
    {"name":"Sacred Flame","school":"Evocation","level":0,"comps":"V, S","classes":"Cleric"},
    {"name":"Sanctuary","school":"Abjuration","level":1,"comps":"V, S, M","classes":"Cleric, Paladin"},
    {"name":"Scorching Ray","school":"Evocation","level":2,"comps":"V, S","classes":"Cleric, Sorcerer, Warlock, Wizard"},
    {"name":"Scrying","school":"Divination","level":5,"comps":"V, S, M","classes":"Bard, Cleric, Druid, Paladin, Warlock, Wizard"},
    {"name":"Secret Chest","school":"Conjuration","level":4,"comps":"V, S, M","classes":"Wizard"},
    {"name":"See Invisibility","school":"Divination","level":2,"comps":"V, S, M","classes":"Bard, Sorcerer, Wizard"},
    {"name":"Seeming","school":"Illusion","level":5,"comps":"V, S","classes":"Bard, Sorcerer, Warlock, Wizard"},
    {"name":"Sending","school":"Evocation","level":3,"comps":"V, S, M","classes":"Bard, Cleric, Warlock, Wizard"},
    {"name":"Sequester","school":"Transmutation","level":7,"comps":"V, S, M","classes":"Wizard"},
    {"name":"Shapechange","school":"Transmutation","level":9,"comps":"V, S, M","classes":"Druid, Wizard"},
    {"name":"Shatter","school":"Evocation","level":2,"comps":"V, S, M","classes":"Bard, Cleric, Sorcerer, Warlock, Wizard"},
    {"name":"Shield","school":"Abjuration","level":1,"comps":"V, S","classes":"Sorcerer, Wizard"},
    {"name":"Shield of Faith","school":"Abjuration","level":1,"comps":"V, S, M","classes":"Cleric, Paladin"},
    {"name":"Shillelagh","school":"Transmutation","level":0,"comps":"V, S, M","classes":"Druid"},
    {"name":"Shocking Grasp","school":"Evocation","level":0,"comps":"V, S","classes":"Sorcerer, Wizard"},
    {"name":"Silence","school":"Illusion","level":2,"comps":"V, S","classes":"Bard, Cleric, Druid, Ranger, Ritual Caster"},
    {"name":"Silent Image","school":"Illusion","level":1,"comps":"V, S, M","classes":"Bard, Sorcerer, Wizard"},
    {"name":"Simulacrum","school":"Illusion","level":7,"comps":"V, S, M","classes":"Wizard"},
    {"name":"Sleep","school":"Enchantment","level":1,"comps":"V, S, M","classes":"Bard, Sorcerer, Warlock, Wizard"},
    {"name":"Sleet Storm","school":"Conjuration","level":3,"comps":"V, S, M","classes":"Cleric, Druid, Sorcerer, Wizard"},
    {"name":"Slow","school":"Transmutation","level":3,"comps":"V, S, M","classes":"Druid, Sorcerer, Wizard"},
    {"name":"Spare the Dying","school":"Necromancy","level":0,"comps":"V, S","classes":"Cleric"},
    {"name":"Speak with Animals","school":"Divination","level":1,"comps":"V, S","classes":"Bard, Cleric, Druid, Paladin, Ranger, Ritual Caster"},
    {"name":"Speak with Dead","school":"Necromancy","level":3,"comps":"V, S, M","classes":"Bard, Cleric"},
    {"name":"Speak with Plants","school":"Transmutation","level":3,"comps":"V, S","classes":"Bard, Druid, Ranger"},
    {"name":"Spider Climb","school":"Transmutation","level":2,"comps":"V, S, M","classes":"Druid, Sorcerer, Warlock, Wizard"},
    {"name":"Spike Growth","school":"Transmutation","level":2,"comps":"V, S, M","classes":"Cleric, Druid, Ranger"},
    {"name":"Spirit Guardians","school":"Conjuration","level":3,"comps":"V, S, M","classes":"Cleric"},
    {"name":"Spiritual Weapon","school":"Evocation","level":2,"comps":"V, S","classes":"Cleric"},
    {"name":"Stinking Cloud","school":"Conjuration","level":3,"comps":"V, S, M","classes":"Bard, Druid, Sorcerer, Warlock, Wizard"},
    {"name":"Stone Shape","school":"Transmutation","level":4,"comps":"V, S, M","classes":"Cleric, Druid, Wizard"},
    {"name":"Stoneskin","school":"Abjuration","level":4,"comps":"V, S, M","classes":"Cleric, Druid, Paladin, Ranger, Sorcerer, Wizard"},
    {"name":"Storm of Vengeance","school":"Conjuration","level":9,"comps":"V, S","classes":"Druid"},
    {"name":"Suggestion","school":"Enchantment","level":2,"comps":"V, M","classes":"Bard, Cleric, Sorcerer, Warlock, Wizard"},
    {"name":"Sunbeam","school":"Evocation","level":6,"comps":"V, S, M","classes":"Druid, Sorcerer, Wizard"},
    {"name":"Sunburst","school":"Evocation","level":8,"comps":"V, S, M","classes":"Druid, Sorcerer, Wizard"},
    {"name":"Symbol","school":"Abjuration","level":7,"comps":"V, S, M","classes":"Bard, Cleric, Wizard"},
    {"name":"Telekinesis","school":"Transmutation","level":5,"comps":"V, S","classes":"Sorcerer, Warlock, Wizard"},
    {"name":"Telepathic Bond","school":"Divination","level":5,"comps":"V, S, M","classes":"Wizard"},
    {"name":"Teleport","school":"Conjuration","level":7,"comps":"V","classes":"Bard, Sorcerer, Wizard"},
    {"name":"Teleportation Circle","school":"Conjuration","level":5,"comps":"V, M","classes":"Bard, Sorcerer, Wizard"},
    {"name":"Thaumaturgy","school":"Transmutation","level":0,"comps":"V","classes":"Cleric"},
    {"name":"Thunderwave","school":"Evocation","level":1,"comps":"V, S","classes":"Bard, Cleric, Druid, Sorcerer, Wizard"},
    {"name":"Time Stop","school":"Transmutation","level":9,"comps":"V","classes":"Sorcerer, Wizard"},
    {"name":"Tiny Hut","school":"Evocation","level":3,"comps":"V, S, M","classes":"Bard, Ritual Caster, Wizard"},
    {"name":"Tongues","school":"Divination","level":3,"comps":"V, M","classes":"Bard, Cleric, Sorcerer, Warlock, Wizard"},
    {"name":"Transport via Plants","school":"Conjuration","level":6,"comps":"V, S","classes":"Druid"},
    {"name":"Tree Stride","school":"Conjuration","level":5,"comps":"V, S","classes":"Cleric, Druid, Paladin, Ranger"},
    {"name":"True Polymorph","school":"Transmutation","level":9,"comps":"V, S, M","classes":"Bard, Warlock, Wizard"},
    {"name":"True Resurrection","school":"Necromancy","level":9,"comps":"V, S, M","classes":"Cleric, Druid"},
    {"name":"True Seeing","school":"Divination","level":6,"comps":"V, S, M","classes":"Bard, Cleric, Sorcerer, Warlock, Wizard"},
    {"name":"True Strike","school":"Divination","level":0,"comps":"S","classes":"Bard, Sorcerer, Warlock, Wizard"},
    {"name":"Unseen Servant","school":"Conjuration","level":1,"comps":"V, S, M","classes":"Bard, Ritual Caster, Warlock, Wizard"},
    {"name":"Vampiric Touch","school":"Necromancy","level":3,"comps":"V, S","classes":"Warlock, Wizard"},
    {"name":"Vicious Mockery","school":"Enchantment","level":0,"comps":"V","classes":"Bard"},
    {"name":"Wall of Fire","school":"Evocation","level":4,"comps":"V, S, M","classes":"Cleric, Druid, Sorcerer, Warlock, Wizard"},
    {"name":"Wall of Force","school":"Evocation","level":5,"comps":"V, S, M","classes":"Wizard"},
    {"name":"Wall of Ice","school":"Evocation","level":6,"comps":"V, S, M","classes":"Wizard"},
    {"name":"Wall of Stone","school":"Evocation","level":5,"comps":"V, S, M","classes":"Druid, Sorcerer, Wizard"},
    {"name":"Wall of Thorns","school":"Conjuration","level":6,"comps":"V, S, M","classes":"Druid"},
    {"name":"Warding Bond","school":"Abjuration","level":2,"comps":"V, S, M","classes":"Cleric"},
    {"name":"Water Breathing","school":"Transmutation","level":3,"comps":"V, S, M","classes":"Druid, Ranger, Ritual Caster, Sorcerer, Wizard"},
    {"name":"Water Walk","school":"Transmutation","level":3,"comps":"V, S, M","classes":"Cleric, Druid, Ranger, Ritual Caster, Sorcerer"},
    {"name":"Web","school":"Conjuration","level":2,"comps":"V, S, M","classes":"Druid, Sorcerer, Wizard"},
    {"name":"Weird","school":"Illusion","level":9,"comps":"V, S","classes":"Wizard"},
    {"name":"Wind Walk","school":"Transmutation","level":6,"comps":"V, S, M","classes":"Druid"},
    {"name":"Wind Wall","school":"Evocation","level":3,"comps":"V, S, M","classes":"Cleric, Druid, Ranger"},
    {"name":"Wish","school":"Conjuration","level":9,"comps":"V","classes":"Sorcerer, Wizard"},
    {"name":"Word of Recall","school":"Conjuration","level":6,"comps":"V","classes":"Cleric"},
    {"name":"Zone of Truth","school":"Enchantment","level":2,"comps":"V, S","classes":"Bard, Cleric, Paladin"},
]
