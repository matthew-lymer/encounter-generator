/*
    FUNCTIONS
*/
function randomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

/*
    ARRAYS
*/
var encounters = [
    "Unusually warm/cold day for season or brutally cold/hot day in accordance with season.",
    "Extremely windy day. Light gear becomes difficult to keep strapped down.",
    "Come across other travelers suffering from some problem. (Broken wagon, injured horse, etc.)",
    "Site of recent natural disaster: flood, forest fire, lightning strike, etc.",
    "Lost child who wandered too far from home/village or someone's lost pet.",
    "Animal tracks or droppings.",
    "Shepherd and his flock.",
    "Lumberjacks.",
    "PC discovers new hole in his boot, possibly via a mud puddle",
    "PC or horse gets rock in shoe/boot.",
    "One of the PCs has a 'bad day'. Minor inconveniences plague him. (Trips over ruts in the road, gear difficulties, animal steals his lunch when he turns away for a moment. Etc.)",
    "One of the PCs has a 'good day'. Minor perks all day. (Find a copper piece lying in the road. Figures out how to repair some damaged item, the inn they stay at that night has one of his favorite meals as a special, etc.)",
    "Find an animal in a trap.",
    "Run into local 'recruiters'.",
    "Find an empty cave.",
    "Come across a way haven on the path.",
    "Find an old marker/sign.",
    "Bridge washed out/ river flooding.",
    "They camped on/near a fire ant colony.",
    "An army ant colony on the move.",
    "Find a hive.",
    "Someone stepped into a yellow jacket nest.",
    "Raccoons invade camp (steal/ruin items and rations)",
    "Spot a herd of deer or other food on the hoof.",
    "Spot a herd of wild horses.",
    "Run across wild young.",
    "Stumble into a blessed glade.",
    "Snowball fight or terrain/weather equivalent",
    "Wild, non-dangerous animal approaches closer for an inspection",
    "PC's must cross a rickety old bridge or ford a wide stream.",
    "Rainbow spotted or other lucky omen",
    "Break a wagon wheel or a horse throws a shoe",
    "Black cat crosses path, or other unlucky omen",
    "One PC start whistling or humming, then another, and then everyone joins in.",
    "Food forgotten at bottom of pack goes bad and smells horrible",
    "A PC gets a toothache, an earache, or a stomachache.",
    "A PC realizes they are gaining/losing weight.",
    "Find strange trash in the road, such as a wagon wheel or a chest of clothing",
    "Strangely shaped clouds seen on the horizon",
    "PC finds a hidden detail in recently acquired or purchased item...",
    "Hidden compartment.",
    "Beautiful secluded beach and possibly a warm swim",
    "Beautiful secluded beach and possibly a warm swim",
    "PC has digestion problems (fill in your own details)",
    "Minor piece of equipment is nearly worn out & should be replaced ASAP.",
    "Stumble into Poison Ivy (just for kicks, dwarves are immune)",
    "Find a fully ripe fruit tree or other easy food source",
    "Find evidence of recent combat, possibly including decaying bodies.",
    "The PC's have lost some very minor item, such as soap, a pot, or chalk.",
    "Discover one of the horses is pregnant or ill",
    "PC finds a tick or leech on their body.",
    "Thick fog or dust storm blows in",
    "Road kill: local animal dead in the road, natural causes, scavengers nearby",
    "Pass a small shrine or holy grotto",
    "Horse has a leg cramp, needs hour-long rubdown to continue.",
    "Minor earthquake, small avalanche, or freak storm",
    "PC gets a song stuck in his head all day",
    "Mosquito swarm",
    "It just really feels like today was a lot shorter/longer than a normal day.",
    "Someone has an allergic reaction to something in the area.",
    "Toll station",
    "Beautiful scene, such as waterfall or breathtaking view",
    "A PC is getting shaggy and needs to get a haircut.",
    "Pass the ruins of an old outpost or small tower, still 75% intact.",
    "Pass a roadside grave or the site of a past execution",
    "An eclipse occurs, a comet flies past, or other astronomical event.",
    "Quicksand, sinkhole, or other natural ground hazard",
    "The PC's find money or valuables left in the road.",
    "Traveling merchant",
    "Some kind of building, dungeon or cave that is empty but has stuff in, loot or plot clues, or just interesting scenery",
    "A messenger sent specifically after them with a letter",
    "Some kind of obstacle, like a rangly bridge over a canyon",
    "'Monsters' that are friendly",
    "A location where a strange phenomena occurs that they can't explain",
    "A starving family begging them for food or gold",
    "A traveling lonely adventurer who is impressed and wants to join",
    "The road disappears and the place looks nothing like on the map, the party is lost",
    "A great wall with guards that demand taxes and forbids bandits from coming close",
    "A hunter who knows the area well and warns the players that the road ahead is dangerous",
    "An unexpected fork in the road that wasn't there on the map, the players don't know which path to take",
    "Some kind of mining/digging/smelting operation and the workers want to trade with the players",
    "An historical artefact, like a face carved into a mountain, or an abandoned temple",
    "A caravan of merchants",
    "A recently destroyed caravan with tracks leading off the road, perhaps a badly hurt survivor who claims they took prisoners and promises a reward if the prisoners are freed",
    "A tribe of some kind who owns the land and demand a tribute for passage (and in return escorts the players through)",
    "A harmless ghost trapped in the forest",
    "Tracks that lead off the road and to some kind of magical tree or lake or whatever.",
    "Roll twice, combine the two options somehow, reroll if it hits 20 again.",
    "Creaking gate noise echoes across the graveyard",
    "chilling wind blows past",
    "Owl hoots",
    "clouds cover the moon and it gets much darker",
    "The sound of scraping stone can be heard from no discernable location",
    "Wolf howls",
    "A group of mourners stand circled about a grave silently weeping",
    "Gravediggers can be seen through the fog",
    "a shadow of a winged animal passes",
    "a keening wind is heard",
    "soft sobbing comes from a grave nearby, as the characters approach a young girl is seen for a moment before the fog thickens and then thins--the girl vanishing with it.",
    "a horde of mice run right across the players feet",
    "players almost trip into an open grave",
    "a shadow moves from headstone to headstone (graverobbers)",
    "A bard or minstrel, half dressed and looking over his shoulder",
    "Farmer going to/returning from market with his meager goods",
    "Farmer going to/returning from town with his/her sons",
    "Farmer going to/returning from town with his/her daughters",
    "Girl running away from home",
    "Boy running away to the city",
    "A lost child, in tears and holding a torn sack",
    "A troupe of entertainers, led by an overdressed and curious Elf",
    "Full company of mercenaries, led by a stout, dark bearded Captain",
    "A small group of mercenaries, dishevelled and sweating",
    "Minor noble travelling via horse, with servants",
    "Minor noble going to/returning from hunt, with retinue",
    "Local bailiff, sheriff or warden, with a suspicious outlook of strangers",
    "A hunter or poacher, with a huge longbow strapped to their back",
    "A pair of hunters or poachers, arguing about who is to blame for a missed shot",
    "Large trading caravan, with accompanying surly guards",
    "A lone trader/merchant on foot, leading a mule carrying their wares",
    "Lone trader/merchant riding on a horse drawn wagon",
    "Limping bailiff and his badly beaten prisoner",
    "Escaped prisoner, manacled and carrying a religious icon",
    "Sheriff and his dogs, out hunting an outlaw",
    "A boundary warden with a broken bow and empty scabbard, fuming as he walks",
    "Lone travelling priest, carrying a lit censer with an acrid smell",
    "Lone travelling cleric, with a faintly glowing mace",
    "Charismatic priest and retinue of apostles, who are mumbling to each other and won't make eye contact",
    "A cleric and a small retinue of acolytes, full of confidence",
    "A ranger/boundary warder patrol, with a cheerful leader",
    "A patrol from the local city or town guard, nervous about being out of town",
    "A foot messenger, with a ducal ring on his hand",
    "A horse messenger wearing a royal tabard and carrying a fine leather satchel",
    "A travelling historian carrying a sack of old stone statues",
    "A starving beggar, willing to trade information for food",
    "A group of refugees, telling stories of war and oppression in their homeland",
    "A wounded soldier, limping along on crutches",
    "A deserting soldier carrying a memento of a fallen friend",
    "A wandering dog, with a silver collar and name tag",
    "A bear wearing a collar and trailing a frayed rope",
    "A riderless horse, with bulging saddlebags",
    "A thrown rider, trying to catch his horse",
    "A wandering madman, ranting about an invisible creature",
    "A pair of dwarven prospectors, arguing loudly about where they took a wrong turn",
    "Halfling cook/chef, out foraging for ingredients",
    "Overturned wagon with injured merchant",
    "A bored elderly gnome, with a curious mechanical toy",
    "Fisherman by a riverside, without any fish",
    "Druid planting rows of trees across the road",
    "A drunk from a nearby tavern, unsteady on his feet",
    "A partially smashed coffin, with a 'corpse' inside which is slowly moving",
    "A dealer of 'used magical artefacts'",
    "An elf picking and eating wild berries",
    "A manic Herbalist, with green smears around his mouth",
    "Group of robed monks, carrying a lit censer",
    "A squire chasing his drunken master's horse",
    "An armoured Dragonborn sitting on a stone, sharpening a sword and sighing",
    "Farmer with an unmoving mule, laden with fruit",
    "Guarded and chained prisoners digging a ditch",
    "A pair of wagon drivers preparing to race each other",
    "A tiny Earth Elemental, shifting pebbles from one side of the road to the other",
    "A group of dancing lights, which keep just ahead of the party",
    "A drug addict, coming down from their last score",
    "A harmless ghost, sadly humming an old song",
    "A gnome riding an armoured mastiff",
    "A hawker trying to find his bird",
    "A grave robber, with mud on his shoes and a dark, wet sack on his back",
    "A friendly necromancer with several raised skeletons, who offers to share food",
    "A gang of youths from a nearby town",
    "A gnomish tinker & merchant, offering magical mending",
    "A Quickling, fleeing from the service of a warlock",
    "A drunken Hill Giant, asleep and snoring loudly",
    "A starving hermit, bearing a sword handle without a blade",
    "A migrating Treant, walking down the middle of the road",
    "A dead knight's retinue, returning the body home",
    "Traveling reeve or magistrate, summoned to a case",
    "A group of pilgrims, one of which is carrying a small, heavily bound chest",
    "A backwoods moonshiner, offering free samples of his wares",
    "A surveyor excited about discovering a door into an artificial hillock",
    "A dripping wet fisherman, climbing up from a riverbank with an angry look",
    "A girl picking wildflowers, acting as a lookout for local bandits",
    "A boy swinging a stick like a sword, with a pet dog following",
    "Villagers cutting wood to make bows",
    "A stone golem with one leg shorter than the other, never walking in a straight line",
    "A pixie telling rude jokes and riddles",
    "Four villagers burning a pile of corpses, which are emitting a thick purple smoke",
    "A wagoner trying to fix his strangely burned cart",
    "A contented Halfling, smoking an oddly scented pipe",
    "A wild-eyed and dishevelled Alchemist, ranting about a breakthrough",
    "An imp caught in a rabbit trap, screeching loudly",
    "A lost wagon guard, with scratches on his face",
    "A seller of genuine, if minor, religious relics",
    "An old gnome in hat and tattered clothes, rapidly shuffling a deck of cards",
    "An ebullient Orc, dressed in bright fine silks",
    "A Green Hag, offering a reward for revenge on those who tricked her",
    "A wine merchant, asking for directions to the nearby town festival",
    "A fur trapper, with a live wolverine as a pet",
    "A sour old grandmother, complaining bitterly about her eldest son",
    "A Hobgoblin out to see the world",
    "A young man, with a hideous mask magically stuck to his face",
    "A band of giant hunters, paid to kill a troublesome old Hill Giant",
    "A charcoal burner, telling stories about haunted trees",
    "A potion merchant, with a backpack full of 'alternative' potions",
    "Courier, willing to exchange news or help with finding a location.",
    "Somewhere in the distance, his voice being carried by the wind, is an ogre (or the like) yodeling.",
    "Wandering alchemist, merchant or similar.",
    "Kids in a farmer's field, intent on cow tipping.",
    "An ogre or similar humanoid is wandering in the player's general directions. If approached he will be quite friendly and cheerful. A bit dumb but a nice guy nonetheless.",
    "A group of 1d3+2 hunters, carrying an additional one that has been badly wounded. They are willing to trade supplies for medical help.",
    "A group of 2d6x10 prisoners clearing an area, being watched over by 1d3x10 guards.",
    "A traveling performer is sitting to one side, resting.",
    "A screaming barrel comes flying off a hill right at the players. It crashes to a stop and someone staggers out, giving a thumbs up to their buddies from the top of the hill. Puking from the ride may or may not follow.",
    "A traveler mistakes one player for someone that cheated them at cards and throws things at the players while ranting. 'Yoo sunovabitch! Ah knows it wuz yoo! Cheat me at cadz wilya?'",
    "Pile of skulls (humanoid or animal) near an abandoned campsite.",
    "Old house falling into disrepair.",
    "Recently torched homestead.",
    "A line of spears are stuck into the ground with bloody helmets set on each one.",
    "A line of lynched lawn gnomes dangles from a beam or branch.",
    "A weapon and back pack laying next to a tree and may have been for some time.",
    "2d6x5 garden gnomes manning a road block made bits of junk. Off to the side is a box with the sign 'Tol 2 coins' in crude writing.",
    "A body has been nailed to a wall or tree. Whoever it was, it looked like they had been alive and conscious when it happened.",
    "A group of cows or other livestock lined up on a ridge watch the players silently as they pass.",
    "A giant stone head is found buried partly in the ground. A few skeletons are found around it.",
    "The spine, skull and ribs of an enormous creature are found half buried. It is big enough to walk under easily.",
    "A pile of bloody clothes are found on the side of the road.",
    "1d3+2 totems are found, made from wood, leather and animal bones. One is topped with the skull of a dangerous creature.",
    "A bit of women's under clothing is found hanging from a tree. No sign of the owner.",
    "A huge nest has fallen from a tree on the side of the road. The strange-looking eggs within seem on the verge of hatching.",
    "A dwarf falls from the sky onto the road with a splat. (Did a creature drop it, was he launched into the air, did he fall from a floating fortress?)",
    "A row of severed heads on spikes and a warning sign claiming, 'Dis Rode Belong Negan'",
    "A very small goblin wearing an old carpet as a cape leaps into the path and demands tribute.",
    "A crazed halfling, starved out of his mind, jumps to the backs of the PCs and rips their packs apart with his teeth in search of food.",
    "A bounty hunter tracks his target.",
    "A lush garden is filled with ripe vegetables. It is protected by a magical ward, but what is triggered when entering the garden?",
    "A monstrous mount is ridden by a gnome. Friend or foe?",
    "Two guards hold a wanted poster. They carefully studies the party as they pass by.",
    " A smiling roadside merchant roasts rats, frogs, and squirrels on sticks. He offers a bite to the PCs.",
    "A chatty bard walks alongside the party. Time for an exposition dump!",
    "A bridle ties a well-groomed speckled horse to a nearby tree. The horse is fitted with an elegant but empty saddle. Who does it belong to? Do the PCs take it?",
    "A powerful storm forced you to take the only available refuge: an elderly couple's home just off the side of the road. The two room home holds numerous open cups of the same pungent liquid.",
    "re-dragon-slayers14. A naked bard asks for a lift to the nearest inn where he left his clothes and money.",
    "Alongside the road, a charlatan asks the party if they want to see a performance of his trained pets. The slightest affirmative answer causes Steve to give a whistle, and a huge swarm of ravenous locusts suddenly manifests.",
    "A fat friar hurries past the PCs mumbling, 'It isn't fair.'",
    "An evil wizard is tied to a stake, the body still smoking.",
    "Three young men work on tipping over an occupied outhouse.",
    "A band of orcs runs toward the party. They look over their shoulders and try to run through the party. Something dreadful has terrified them, and the party is heading in its direction!",
    "Traveling off the main road, the PCs feel like they are being followed. Who is hunting them?",
    "Three types of meat hang on a spit over a campfire. It is clear that it is three types of humanoids that hang over the flames.",
    "A snowy road hides a sinkhole that chutes the party on a slalom slide down the mountainside.",
    "A well-spoken bugbear wearing fine studded leather armor is trapped under a fallen tree. He begs the party to come to his aid.",
    "A ranger stops by the group's camp one night and gives them advice on the trail ahead, including places to camp and a tavern where they can get good rates if they mention his name. All his advice is impeccable, but when they mention his name at the tavern, they're told he died years ago on that very road.",
    "A shopping list for potions lies on the ground.",
    "The local baron has enacted a toll bridge. Several peasants were unaware, and cannot afford the toll. They beg the PCs for change.",
    "You find the remains of a pouch that contains coins fro ma land you do not recognize.",
    "The party hears a long stream of curses further up the road. Then they spot a head in the road. A person is still alive, buried up to his neck!",
    "An arrow hits a nearby trunk, a message wrapped around the shaft.",
    "A bridge is missing. Where it used to be is now a ferry service, for a sizable fee. The ferry looks like it might consist of bridge parts, and only takes a few travelers at a time.",
    "A loaded wagon travels down the road toward the party, but it has no apparent means of propulsion.",
    "As bandits attack, the PCs realize a friend of theirs is among the robbers.",
    "There is a mysterious flicker ahead, and one member of your party suddenly stops, paralyzed.",
    "Orcs gather twigs and berries along the road and it's clear they have non-hostile purpose. Will the PCs attack just because they are orcs?",
    "A tree falls onto the road. Then a fireball blows up the tree. It appears the PCs are in the middle of a skirmish between druids and fire wizards.",
    "Flowers by the roadside turn their heads to follow the party, and they're getting larger.",
    "An overturned beer cart lies in the road. Nearby, an enormous troll snores loudly, surrounded by empty kegs.",
    "A set of shackles lies at the side of the road.",
    "A village can be seen to the west. It isn't on any of the maps.",
    "Three pilgrims trudge along the dusty road, an old man and two young men. Simple travelers? Or are they more than they seem?",
    "You stumble upon an old scroll case wedged between a tangle of tree branches. Inside is a village's charter of rights and freedoms.",
    "A dead magic user clutches a scroll in his stiff hand. The scroll says something important.",
    "A single giant footprint lies along the path. There are no other signs of such footprints in the area.",
    "You party awakens to find all your gear has been stolen during the night. A quick search reveals twelve sets of tracks and, lying in the middle of your campsite, a smoldering pouch of herbs that, when you sniff them, make you feel slightly drowsy.",
    "An enormous dragon lands on the road in front of the group. It asks for directions to a certain village, gives the party a generous tip, and then flies off saying he intends to raze it to the ground.",
    "An exotic, almost alien weapon or tool lies on the side of the road.",
    "The PCs mysteriously repeat a piece of road they already passed, though the route has been perfectly straight to this point. The road even includes their footprints.",
    "A dozen townsfolk are running after a fleeing woman and attempting to stone her to death for being a prostitute.",
    "Two other adventuring groups are arguing in the middle of the road.",
    "You see a man-sized shadow from the left side of the road waving its arms at you. 'Over here, quickly, I've caught one!'",
    "A person fleeing arranged marriage seeks refuge with the PCs.",
    "Picked mushrooms lay on stump to dry.",
    "A strange old man offers the PCs a scroll in a language they cannot read.",
    "Gnomes are holding a yard sale! They have any number of strange and fascinating contraptions.",
    "Someone has scattered caltrops across the road.",
    "You encounter a monk, a monkey, a turtle and a pig, all heading west.",
    "A weathered sign points off the road, yet with no apparent trail to follow.",
    "The next 100 feet of road are covered with newly grown grass.",
    "Ladies clothing and under clothing are strewn in the bushes along the road. How did these get here?",
    "A formerly brilliant wizard, now pesters the party with the incoherent rants of a man driven mad by a botched invisibility spell.",
    "A drunken dwarf staggers along, challenging everyone to a wrestling match.",
    "A goblin, on fire, runs shrieking past the party.",
    "A rock with an odd, glowing rune sits by the road ahead.",
    "A noble, disguised as a filthy beggar, tests the party's compassion and generosity. If they pass whatever standard he sets, then he becomes a source of various quests that require personal sacrifice to accomplish.",
    "A circus is set up alongside the road. A barker on the roadside cajoles you to 'come inside and see what wonders it holds.'",
    "The road crests a hill, and spread out before the group is a stunning, sweeping vista of the land beyond. A painter sits nearby, capturing the scene, and asks the group to pose for his foreground.",
    "An overturned rowboat sits on the side of the road. There is no river or stream nearby. Under the rowboat is an entrance to a lair.",
    "A wandering cleric begs the heroes to recover a relic for them.",
    "A road sign saying where you came from is ahead of you.",
    "A group of guardsmen hang wanted posters on trees. One face looks familiar to a PC.",
    "A carriage is stuck high up in a tree.",
    "In the morning while breaking camp, the PCs spot a bush that wasn't there before.",
    "A beautiful woman, adorned in the robes of an enchantress, emerges from hiding near the road and implores you to lend her aid.",
    "The road is lined with snakes sleeping in the sun.",
    "A necromancer uses his talents to animate animal and human corpses and forces them to perform in a roadside circus. The townsfolk from a nearby village seem to enjoy the show a bit too much.",
    "A chain gang digs ditches beside the road.",
    "A traveling minstrel challenges the wisest looking member of the party to a storytelling contest.",
    "A wizened tinker sells charms from his cart: dried frogs, finger bones, cat skulls, and the like. Leaving him, you turn to find he is eerily out of sight altogether.",
    "A paladin of a holy church and his retinue have ridden out on a holy crusade against evil and demand others who serve the cause of good to join their cause on the spot.",
    "The road starts to get muddy. Soon the mud is two feet deep. Water in the ditches alongside starts to bubble.",
    "A majestic elk sprints past with something golden caught in its antlers.",
    "A stranger on the road tells each PC to repent of their sins. He knows details.",
    "A door stands beside the road, but there is no sign of the rest of the house.",
    "A wine merchant's wagon has shattered a wheel and he offers passers-by cut rate prices on his wares as it is getting repaired.",
    "An ugly old woman struggles to bring her wash basket of wet clothes up from the creek to the road. She stumbles and drops the laundry back down the slope.",
    "A monk, collapsed and bleeding on the roadside, pushes an unremarkable ring into a PC's hands and desperately whispers, 'You must...' before exhaling his last breath.",
    "A lost gnome asks for directions.",
    "A dead raven lies on the road, pierced by a bright blue fletched arrow.",
    "A table on the roadside holds a large basket of fresh vegetables. A sign reads '1 copper a bunch: honesty is a virtue!'",
    "You find a small leather bag. It smells of moisture, and contains a set of keys and a vellum map to the location of a small keep.",
    "The road is littered with bear traps.",
    "A thick fog has settled on the bridge ahead.",
    "The group arrives late at night at a tiny village straddling the road. They secure accommodation and food from the friendly locals and fall asleep. In the morning the village is empty and ruined, as if abandoned years ago.",
    "As the road passes through a hilly region, you spy a cave, from which can be heard the voice of a singing female.",
    "As you turn the corner, a dwarf and elf are standing over a stack of goblin corpses. They argue over the kill count.",
    "The party notices a sudden and drastic change in temperature, then just like that, things are back to normal.",
    "A little girl is watching you from just off the road. The next time you glance over, you see a wolf run away.",
    "An ecstatic farmer presses a cigar into your hands and proclaims, 'It's a girl!'",
    "Scratched into the dust of the road are the words, 'Good luck tomorrow. You're going to need it.'",
    "The entire party suddenly loses their bearings and realize that they've walked the same mile three times. Are they road weary or are they caught in something manipulating them.",
    "A room of freezing particles that stick to the skin and slow the characters down significantly Add monsters/other challenges to taste.",
    "A room strung with a what looks like (initially) a net of thin, ghostly filaments. Turns out to be monowire strung at random intervals (hard to see where until you're right on it) that makes it difficult to cross. Monowire = a thread can slice through anything as easily as if it were passing through air. Be very careful.",
    "A locked door that must be broken down to pass. On the other side? An abyss. Breaking the door down might cost your players a character or two.",
    "An old man appears in a flash of light and offers to sell things to the characters. Does he have a motive?",
    "A perfectly ordinary looking floor, empty room, etc. When the characters go in, the doors close, lock, and the floor starts to tilt. It's on an axis, so movement on it tilts it in one direction or the other, and it's going to take fast reflexes for the characters to keep from slipping into the punjee pit below. Unfortunately, the key that unlocks the door is sitting on a hook on the floor in such a way that it won't fall as long as the players are on the other side of the room, but if the floor tilts the other way, then the key comes loose and falls into the punjee pit.",
    "A room filled with countless levers. One unlocks and opens the opposite door. The others have various nasty effects (release sleeping gases, laughing gases, flood the room, drop monster from a pipe in the ceiling [could be a complex mechanism with a whole bunch of caged monsters up there...])",
    "A long passage of murky, depthless water. Two boats are tied up at the entrance- one that looks rickety and has a little water in the bottom, and one that is new looking, gilded on the edges and looks really watertight. Turns out the 'new' boat is actually an illusion, and it disappears in a puff of smoke about halfway through. Add water encounters, tentacles, piranhas, kelpies and the like to taste.",
    "A powerful wizard creates a cavernous sinkhole beneath the city the players are in.",
    "An illusory wall of fire, ice, water, lightning.",
    "A room with a doorway 100-200 feet up. Walls are covered in tapestries. A random word has been engraved on the wall. Turns out it's the secret word for one of the tapestries, (treat as a flying carpet) but it has to be removed from the anti-magic clip holding it to the wall before it will respond.",
    "A curving downward staircase. Pressure plates on the staircase trigger an automated crossbow/weapon at the bottom, making it seem like someone's down there. Turns out it's just a statue wired to shoot bolts/bullets like that. Door through is beside the statue.",
    "A hexagonal room with no obvious way out and an arrow drawn on the floor facing a wall. Secret doors on every wall, each leading to another similar hexagonal room with another random arrow. (You might want to map this out so you don't get lost, even if the players do.) Makes a great maze.",
    "A mimic that has taken the form of a door. (Turning the doorknob might cost a character his hand!) Add splintered wood bits around the door to give the characters a 'hint' or just throw them off.",
    "A jelly/blob creature partway through a door. (About a foot sticking out.) Turns out that it's just the 'tip of the iceberg' as it were, a little piece that had to go somewhere, because the 1000 x 1000 ft room on the other side is already packed completely full with this thing's enormous bulk.",
    "A room with yellow lines that border the walls and break for spaces at even intervals 2-3 times. Where the lines break, there's a pressure sensitive trap that spins the entire section of hallway to the left and ejects the character down into a pit of some kind or another (add punjees, zombies, monsters, etc. to receive them when they hit if appropriate.",
    "A room with a ragged, bottomless-looking hole in the center. Closer inspection reveals massive toothmarks on the edge of the hole, and a deep breathing sound coming from far down in the bottom. Great to scare your characters. Add giant man-eating wyrm for a little more spice.",
    "A circular room with a fountain in the center of it. Looks like the floor is covered with about a foot of water and gold coins are spread across the bottom. Turns out to be an illusion- the water is actually more like ten feet deep with something scary and hungry at the bottom (like tentacles and a big toothy mouth or another ooze or a horde of water-bloated zombies)",
    "A door with multiple knobs. Wrong knobs trigger traps.",
    "A long maze of gooey yellow sponge passages just large enough for one person to crawl through. Starts to shrink and harden if players take too long to get through",
    "A room full of bubbles that show the players' nightmares, bad memories and fears to them",
    "A horde of ghost pirates come through the walls and attack the players",
    "A statue of a big buff man holding his bicep, hand halfway between open and a fist, and grinning. (Arm wrestle to get through)",
    "An elaborate fake-out trap, like a room filled with obvious pressure plates (maybe marked, like a rune-word puzzle that has to be stepped on) or big bold lines, that sort of thing. Either the trap was disabled, or it's there to mess with people. Add incentives/scariness by putting dangerous-looking arcing electrical things at the end by the door, ominous nozzles, broken tiles that drop into magma... that sort of thing.",
    "A room with an unusual light source (like a torch in a tube in the floor or something) with a lot of shadows. One or more of those shadows are living, and hungry.",
    "A room with a man hanging at the far end, his wrists and ankles in shackles, chained to the wall and over the door. Walking closer to him tightens the chains (like a rack). He screams in pain and begs for mercy every time they tighten. Could be an illusion- you decide how much to mess with your characters' sense of right and wrong.",
    "A room full of statues (8) holding corked vials. Setting off hidden pressure plates causes the statues to drop them, releasing nerve gas. The door handle is a knife blade.",
    "Anything from Indiana Jones.",
    "A circular raised platform. Light comes down upon in. Only the penitent man will pass.",
    "Two chains retracted into the walls 30ft apart. Pull the two together (feat of strength) to open the door. Find a way to connect them to keep it open. Door falls quickly.",
    "Eight levers in sockets that must all be turned at once",
    "A long gravel corridor with a heavy statue of a laughing guy in football gear holding a rope at one end and a car trunk at the other. Drag the man through the gravel to the car trunk and connect them to pass.",
    "A pool of bubbling sewage with a pipe under it leading to a toilet bowl that must be climbed up through.",
    "A wall of acoustic force that blasts the ears and takes a force of will to get through. Makes characters temporarily deaf.",
    "8 holes in the wall, each with a steel rod inside. One opens the door, the other seven shock the character. 1d4/turn. Almost impossible to get free- other characters will usually have to pry the shocked one loose.",
    "A massive, tsumani-style tidal wave immediately rises up to crush the characters. Run away in fear or face it- Turns out to be illusion.",
    "(Great for the next room) A real tsunami-style tidal wave rises up to crush the characters.",
    "A thick wall of ice blocking passage that shoots blades out ten inches when touched. (1d6)",
    "A two-hundred foot steel wall blocks the way. Handholds are razorblades of sharpness.",
    "A room with gravity pulling four ways (up, down, left, right.) each 'wall' is a five-foot deep pit of molten gold",
    "Two electrified handles on opposite sides of a thirty-foot chamber. Like the chains, except the characters need to form a conductive link to power the door and get it to open.",
    "A room with a mud floor. He who swims to the bottom and finds the tunnel to the next room escapes",
    "A room filled with sharpened bamboo poles sticking out of the room at evenly spaced intervals, floor to ceiling. There's not really enough room to just slip by, and if one of the poles is touched, it comes alive, dealing 1d4 hp damage to the character.",
    "The players walk into a large room with a large stone ring sticking out of one wall. An equal number of ghostly figures (to characters) step through the wall, one carrying the ball. They're all pretty strong, and it should really be a challenge for the players to beat them, if they do at all. You see, the winners are hauled away and sacrificed, and like Aztec ball players, the ghosts think this honorable death desirable.",
    "A table with two chairs and a statue of a smiling, one-armed hick that comes alive and starts pouring drinks. Outdrink the hick.",
    "A circular man-sized opening/door sweeping down into the floor. It's filled with something sticky and viscous like honey or molasses. Beyond the floor (where it can't be seen except by diving in,) it narrows steadily down to a fist-sized opening with a lever at maximum arm's reach that opens a secret door (leading to the next room) but it's back beyond the mouth of the pipe.",
    "A room full of bouncing basketballs that the players have trouble wading through. In the middle somewhere, balls start shooting in toward the characters at random, hitting them in 'stun' type locations, like the face and groin.",
    "A large, olympic-sized pool with a rectangular shape and a rectangular bottom about 12 feet down covered in rusty-looking armor and items, etc. Turns out there's a jelly blob thing down there that's translucent with the gear inside it completely covering the floor up to about two feet from the bottom. It's hungry too, so the characters better watch out!",
    "A room crammed full of rotten barrels filled with decaying dynamite. No room to get around- over is the only way.",
    "The players open a flimsy-looking door and find themselves face to face with a massive, arena-style room packed with an audience of 10-20 thousand hungry zombies.",
    "The players enter an empty room with a slowly strobing light (spell-based or technology, whatever works in your campaign.) what they don't see is the monster/ninja/assassin stuck to the ceiling above them.",
    "A room filled with water and fish and contained within the room by magic or technology. Whatever it is, you can walk through it, and you're going to have to if you want to see what's on the other side. The water is dark and a little cloudy, but there's just some harmless-looking fish visible, so it cant be that bad. (Until you get about half way in and there's a shark or a larger room with a bigger shark, or something like that.)",
    "A long hallway filled with misters. In the center is a pedestal that does nothing, but looks like it does something. The trick is in the misters- they're dispensing liquid LSD, and it starts to take effect before too long. Longer exposure = more vivid hallucinations.",
    "A large field of flowers and fruit and peace. Fruit has a sleep toxin. It's all an illusion, and the 'flush' lever can be found with a little searching. Turns out all the 'food' was actually sewage.",
    "A zodiac spreads across the floor. Close observation shows that it has a thirteenth symbol, closer observation reveals it's an unrelated symbol, (get creative- make it the ford symbol or something) even closer inspection reveals that it's a pressure plate.",
    "A single mirror at the end of the room. Looking into it reveals a face after a moment that jumps out of the mirror and screams. He who overcomes his fear and screams back gets grabbed and pulled through to the other side.",
    "A fifty-foot chasm full of razor-sharp blades stands between the characters and their goal or the next door.",
    "Room with a mud floor. Door at the opposite end. This floor is sticky, like quicksand, and about twelve feet deep.",
    "Room full of about thirty gorillas that all look up when the door is opened. Watch your players freak out. Gorillas are actually really gentle. They don't care what the players do, as long as they don't hurt any of them, and if they do, the gorillas just run away or attempt to defend themselves",
    "A pedestal with a cute little rabbit sculpture on it in the center of a room. Does nothing, but if they ever all look away from it at once (like if they're leaving) it roars and shakes the room.",
    "A room with a hyper-aging field in it (turns 1 minute into one year). Inside the field, the room has given way to a lush forest with flowers that bloom, turn to fruit and drop all in the space of a minute. There's a door on the other side.",
    "A room with eight pools of water and eight flush levers. Pressure plates in the floor allow levers to be used. Seven of them flush the characters into a pit full of water and zombies. One opens the door",
    "A room with an oddly golden haze hanging in it. In the center of the room is a squalling baby on a dias. If the players scoop it up, it smiles and laughs, and then turns into a wad of angry mutant flesh with talons that tries to latch onto faces and whatnot. At that moment, the rest of the room turns into something living, like the inside of a stomach.",
    "A room filled with an odd network of pipes that is so thick it's difficult to move through. Closer inspection reveals some of the pipes are made out of substances other than metal (like skin or wood) and the pipes react to being touched. If threatened in any way, or if the room thinks it can take whoever's in it, it will burst pipes near that person, spraying them with steam, ground glass, acid, or any number of other things the DM can come up with. Dead characters/abandoned objects left in the room are absorbed to make new pipes.",
    "A strobe-lit hall of warped mirrors. Every time the light flashes, something grotesque appears. Add dopplegangers to amp up the fun if you wish.",
    "A door with a large, unusual keyhole. The room is filled with keys and a handful of random objects. All the keys but the proper one are coated in poison (sleep poison, withering, etc. it's up to you) and the proper one turns out to be something really random like a wine bottle (breakable... muhahaha) or a dildo (who's gonna want to touch that?)",
    "A door that's totally barricaded over. If the characters tear down the barricades, they find whatever it is on the other side that the door was barricaded against...",
    "Set up a junction. In one room is a trap/challenge and a locked, unbreakable door but no key. In the other is the key, but it's set on a pedestal in the middle of a cluster of ominous-looking statues of armed warriors who are all staring at it. Whether or not the statues come to life when the key is taken is up to you.",
    "A simple looking room with a locked door and a key on a pedestal. When the characters pick up the key and try to insert it into the lock, it crumbles to dust the instant it touches the keyhole. The real key is still in the room, but it's hidden somewhere, either under the pedestal or under a brick in the floor... the options are endless.",
    "The characters enter a room filled with a hazy blue/red/green mist. It could just be mist, or an illusion, or it could be vampiric, leaching blood (Hit Points) stats, even artifact/item powers. Maybe it makes all gunpowder it touches non-functional- there's a lot of room for creativity here.",
    "Create a trap or situation using something from a different time/dimension. For fantasy settings, throw a couple claymore tripmines at the characters. For futuristic settings, throw a steam-powered monstrosity at them, or something involving magic (like a fireball-hurling mage)",
    "A device (or a room housing a device) that subsonically triggers the pleasure centers of the brain to all who are exposed to it. Maybe triggered by a pressure plate in the center of the room. Imagine- the characters might get caught permanently in the center of the room, unwilling (or unable) to move simply because they're experiencing something akin to an endless, massive orgasm. Sure, they'll die of starvation eventually, or maybe you could have some kind of creature come along and nibble on them first...",
    "A really creepy room with really creepy things the players can explore, play with, or even take with them. Consider your living room, and then imagine if every piece of furniture were made from bone and poorly stretched human hide. That kind of thing.",
    "While in a town buying supplies, looking for work, or relaxing, a wizard in that same town unwittingly opens a singularity bubble in his tower, making the town the focal point of a baby black hole that the whole world is slowly imploding into. (Great start for a new quest.)",
    "The players find themselves face to face with a giant steel double door covered in a series of dark, symmetrically-aligned holes. Opening the door triggers the forty-at-once wheeled arrow battery on the other side to fire it's payload through the door.",
    "A room full of corpses in various states of decay. They can either lay in wait for the moment to rise and attack, or maybe they really are just corpses. Or you could get creative and have them rise up magically, but be nothing more than a puppeteer's toys.",
    "The characters have to get into a building/dungeon/installation. Make the only entrance be through the hopper of an automated meat processing unit. Alarm sounds if they break it. Encourage them to get creative in their attempts to get in without being turned into hamburger.",
    "...Or, maybe the only way to get in to the facility is to 'become' one of it's denizens/defenders. This could be as simple as acquiring a uniform, or as sacrificial as being assimilated (cybernetically) or being transformed into something... otherworldly.",
    "A long, windy passage with grates spaced at even intervals along the floor. A closer look will reveal unnaturally smooth walls, the surface almost glassy. Before they get in too far, the door they came through slams shut, opening a wide pipe that starts filling the room with some liquid as all the floor grates seal. The liquid could be simple water, or, if you're feeling particularly nasty, make it something more dangerous, like sulfuric acid. You can also make the door at the other end of the tunnel a puzzle to open too, for added fun and panicking.",
    "A room with dirt/stone walls, like the inside of a cave. Looks totally ordinary, but there could be any number of things hidden behind the walls (large animals/monsters, mining lasers, mechanisms that push the walls together to crush what's in the room, etc.)",
    "Create a big central door with 3-6 keyholes in it. Every key must be inserted in it to get it open. Now hide each of the keys in a different part of the dungeon/facility, either in some really obvious (and therefore irritating) place, like on top of a fireplace mantle, or at the end of some daunting challenge. Whether there's anything good behind this big central door is up to you. There might just be nerve gas behind it or something equally dangerous. It's up to you.",
    "The players find an important door they have to go through, but a massive pillar has fallen directly into it, jamming it and blocking the way.",
    "A room with another smaller room inside of it. Blood and gore has seeped out through the door of the smaller room and soaked the floor. If the players go inside, they find a sickeningly macabre scene of dismembered corpses- then the door locks, and the walls (or the ceiling) sprout knives and start to move.",
    "The players find a music box in some random part of the dungeon/facility. It plays a simple tune. Later (how much later is up to you) they come across an impassable door filled with holes about the size of a dagger blade. When a dagger is inserted into a hole, it makes a specific and unique tone. The door is a sound-based lock- play the song from the music box to open the door.",
    "An impassable door in a room with a large monolith in it. On the face of the monolyth are glowing runes that are each a different color and shine their light across the face of the door. What opens the door is up to you- maybe the characters have to cover up a key rune word to open the door, or maybe they have to cover all the runes but those that make the word, or maybe they need to create a certain color (or series of colors, as with multiple locks) in order to open the door.",
    "A living door with a face greets the characters as they come into the room. He doesn't want to let them through, but if they persist, then he says he requires a living sacrifice. If they try to get through anyway, he chooses one of them at random and traps them in a constricting magic jar. He can be persuaded to let his target go, but only at a steeper price. If they pay the price, he lets them through.",
    "A normal-looking room with some decent furniture in it (a couch, a coffee table, several easy chairs, a bookcase, a clock, etc.) There's also a water fountain and a bowl of fruit on the table. When they go inside, the door locks behind them and becomes impassable. (As the other door already is.) How to get out? The clock on the wall is open and magical- turning it advances time (or reverses it) in the room, but only on the objects in the room (and the doors). They can reverse it to reopen the first door, or they can push it forward until the doors rot away and fall off the hinges. (Or open automatically- something like that)",
    "The players enter a gallery of odd looking paintings, and both doors close and lock. If anyone pauses to look at the paintings, they feel themselves drawn into them like they could just step forward and be in that realm. If they try, they get sucked into the painting and must deal with the denizens thereof (fight a knight, fight a creature made of clocks, be subject to the world of 'The Scream'.) The key is in one of these painting worlds.",
    "The players walk into a room just in time to see a man with a jackal's head (Anubis) confront a man who looks like another adventurer. He says 'Only he whose heart is so pure that it weighs less than a feather may pass to the other side. Show me your chest so that I might judge.' The adventurer does so, and Anubis reaches out and removes his heart, then weighs it, and finding it weighs more than a feather, he hucks the heart into the mouth of a nearby crocodile and the adventurer dies on the spot. Anubis then looks at the characters and repeats his first line. In truth, the whole thing is illusion, but the shock of having one's heart devoured as such is enough to kill a character.",
    "The characters walk into a room with a door at the other end. The room is empty, and the door is locked, but whoever tries to open the door triggers a trap that opens the floor beneath him/her and he/she falls into a shallow pit for minimal damage (mostly just surprised.) If they find a way to get past the door, they find that it's just for show- it's just stone on the other side. The real door out is a trap door at the bottom of the pit.",
    "The characters enter a room with a locked door and a dome of glass overhead through which they can see sky. Put the key somewhere really obvious to unnerve them- like on a hook next to the door. The real trick is if they break the glass on the dome, the sky illusion shatters too, and an underground lake (previously held back by the dome) pours into the room/dungeon/facility through the hole. You can also make the door more complex to really put an edge on things and give the characters additional reason to break the dome.",
    "The characters enter another gallery full of paintings. The door out is locked and unpassable, but is interesting in that it seems to have a strange mesh quality to it. How do they get out? There is a letter written on the back of each of the paintings, and when they're combined (and de-jumbled) and the password is spoken aloud, the door opens. You can make it something really cheesy like 'open sesame' or even go for full words on the backs of the paintings and require them to put together a sentence that could even be a hint to another puzzle further on (lots of people learn by doing).",
    "A pit trap opens beneath a character and then seals overhead as it triggers locks on all doors in or out of the room. Inside the trap and in the room are a series of switches that do things like fill the opposite space (pit trap or room above it) with water or release sleeping gas or fill the room with arcing lightning- those sort of fun things that can be combined to create a really hairy situation (like a flood of gasoline and later a fireball) Luckily the switches are on/off toggles, even though the machinery is old and might take a moment or two to respond. There's also one switch that opens the doors, but both have to be turned to 'on' to work.",
    "Create a fun trap that will catch stragglers- a good example would be an L-shaped hallway with a door at both ends and the floor covered with about three inches of gasoline. As soon as the door in the boot of the L is opened, the opposite door sinks into the ground five feet, revealing a large flame thrower that toasts anything in the long part of the hallway and lights the gasoline on fire. Whoever opened the door and anyone else with him/her better beat feet fast, and hope everyone else that caught the brunt of the fire made it out okay.",
    "The characters walk into a room that's filled with a misty red haze and there's a noticeably odd iron tang to the air. You can put things hiding in the mist, but the presence of the mist alone should be enough to mess with the characters. Later (like a room or two down the line, they walk into a room, the doors close (they don't have to lock) and with a crackle and hum of electricity, a hyper sensitive electromagnet that covers the whole ceiling comes alive. This will of course grab weapons, armor, anything magnetic- including items not properly cleaned after the red mist room. Next, the room begins to fill with water (or something else- it depends how nasty you want to be.) There's a drain on the other side of either door though, so if they can get free before they drown, there's still hope of escape.",
    "The characters walk into a hallway filled with rushing air enchanted to extinguish any light sources, so they have to stumble around in the dark. This leads to a large room that is likewise enchanted, but unwittingly stepping on a pressure plate in this room disables the enchantment and triggers a cache of 50 coins each enchanted with a very bright continual light spell to drop from the ceiling. The combined light of player's light sources and the coins is blinding- especially combined with the fact that the entire room has been covered in mirrors... Add monsters that leap out and jump on blinded players as you see fit.",
    "A room with a number of sealed glass insets and a locked, impassable door with the note 'In case of fire, break glass' pinned to it. Most of the glass boxes are filled with Halon gas, which blasts out and chokes the characters exposed to it (or you could put in something worse) and one of the insets opens the door (or maybe just floods the room, if the door turns out to be a dud in your scheme of things.)",
    "The characters enter a room and suddenly steel walls fall from the ceiling and separate them, creating individual hallways from which there appears to be no escape. The walls should be soundproof too. As soon as the character looks away or gets desperate, someone appears who he/she loves or really trusts, and this someone tries to keep them there by any means necessary. Add rising water or heat or other deadly panic-inducers for extra fun. How to get out? Work up the nerve to attack and kill the illusory person.",
    "A locked, impassable door that, when touched, beeps and says 'Password please.' nearby is a large, onyx pyramid on a pedestal that, when touched, steals the spirit of the person who touched it and randomly injects the spirit of one of it's other captives into the vacant body. One of these souls knows the password, and a number of them are violent, insane, or previous adventurers with their own agendas who wont be too keen on giving up the body they're in.",
    "A large, unpassable door that wont budge. On either side of the door, two to a side, are four long, flexible copper wires that are rolled up. Also in the room are a number of fruit trees, including oranges and grapes, and a number of clay pots. The trick to get through is to make four primitive batteries to power the door by filling pots with acidic fruit juice and putting the copper wires in them.",
    "Another room where the door closes behind the characters and becomes impassable. There are no other visible doors, and the room is starting to flood. The trick to get out? A concealed trap door on the ceiling that can only be reached by swimming as the room fills...",
    "A wise-looking (or famous) sage/messiah waits for the characters in a room with no visible doors. He/she greets them, speaks with them, and if asked where to go or how to proceed, the sage tells them that only in death can one see and go through the door which lies in this room. It is locked to all else. Attempts to find the door should fail. The sage will continue to 'help' them accept that they have to die, and will gladly kill them if they wish, (absorbing their spirits as payment and keeping them from passing to the next world, so they are just dead, gone forever.) The only way through is to confront the sage, who, after the players start getting aggressive, turns into some kind of hideous monster that turns out to be a real test of the characters' strengths. Killing the monster reveals the door and unlocks it.",
    "A great elk is seen watching the party from a distance. It almost looks as if the elk is wearing a crown made of twigs and vines.",
    "A party member trips on a hidden rock. As they are falling, they feel as though they are being 'caught' before hitting the ground. A nearby ent uses it's vines to catch the player before they hurt themselves.",
    "A gnome tinkerer rides past the party going the opposite direction. He appears every three hours of travel until the party buys something.",
    "A pair of wood elves are seen setting traps for poachers. If the party proves to be friends of the forest, the elves will take them to an extradimensional nature preserve full of extinct and oversized creatures.",
    "A water elemental and an earth elemental are seen attempting to make plant babies.",
    "An old twisted tree sits shortly off the path. It radiates a dark energy. If the tree is damaged, it will begin to leak a monster that grows from unnatural pollution (we're ripping off Fern Gully here).",
    "3d6 elvish, gnomish, human, and children are playing a game of tag in the forest.",
    "As the party approaches, they see a fawn, a rabbit, and a skunk run off to hide in the bushes (Bambi).",
    "It is black as night underneath one tall tree, everywhere else the light comes through as normal.",
    "An umber hulk is snacking on a small bear.",
    "A camouflaged giant trapdoor spider nest, 15 feet in diameter.",
    "You past through a barren section of the forest that was damaged about a decade ago by a forest fire. In the middle of this relative desolation, you find a circle of trees that seems untouched by fire that destroyed the surroundings.",
    "A group of goblins arguing over directions.",
    "An awakened tree stands motionless until in striking range of the party! Who or what brought this tree to life?",
    "A group of tribal warriors who jump the party in the forest. All of the warriors are nude, and wear body paint to mark how many kills they have.",
    "In the high tree tops of the forest an unknown enemy waits to attack the weakest creature that wonders by. The Panther is black with white spots on its head, and will attack anything that moves.",
    "A satyr has welcomed the group to a festival. If the invitation is accepted, the group gets to drink honey flavored ale and eat campfire cooked fish and fruits with the satyr and his 2 friends.",
    "A faerie dragon is being attacked by a lemure. If helped, the dragon will repay the party with 15 gp each and a little container of honey.",
    "The party finds a scared injured owlbear cub hiding under a large bush. The party can choose to leave it, or keep it and nurse it back to health.",
    "A massive mastiff comes bounding by, shortly followed by an exhausted warrior holding a leash attached to a broken collar.",
    "The party finds a well labeled 'wishing well: insert money for fortune.' Every (PC level) gp thrown in adds grants the 'lucky' feat for one hour, or until used.",
    "A NE goblin is trapped in a giant spider's web. If the players approach, the goblin untangles himself and attacks as a Druid alongside the spiders.",
    "A door standing upright in thick bushes completely ignored by nature. If a player opens the door a small cabin interior is found and the faint aroma of cooked meats float out.",
    "A party member swears they can hear the crows mumble actual words from time to time. If the party quiets down enough the party member will hear that the words are cardinal directions. If heeded, the crows will continue to guide the party to a giant crow sleeping on a nest of treasure.",
    "A party member trips and falls against a tree, but instead of making a wooden thunk a hollow reverberation is heard. Further inspection will lead the party to find tree is hollow with a small metal box inside, containing items that they had lost.",
    "The party comes across a thick tree, filled with 2d6 big wasp hives. If they stay around for too long, they are attacked by the same number of wasp swarms.",
    "The party comes across a river, filled with piranhas. There is no bridge, though.",
    "A lightning storm begins, and several trees are struck with lightning. However, some of them don't burn, instead they just become electrified, and creatures around them randomly receive small discharges, taking 1d6 electric damage per turn. The party is then attacked by monsters.",
    "A mammoth is heard, trumpeting, running and toppling trees nearby. It will attack the party on sight, if they fail to hide. If they choose to investigate, they will discover hunters killed the rest of the herd to take the ivory.",
    "The party comes across a random inn. If they choose to enter, it will catch on fire, right in the middle of whatever they were doing in there.",
    "A pale female Aasimar and 7 male Dwarven miners are seen heading home. They won't stop singing and she swears it's platonic.",
    "An emotionally disheveled girl in a red hooded cape offers to sell you a dire wolf pelt for 20 GP or the deed to her deceased grandmother's cabin for 500 GP.",
    "You encounter a logging camp with a storm giant, his comically large axe, and his blue dire ox.",
    "A pack of goblins on wolf-back runs by the party too scared to stop, followed by two bears and two druids in hot pursuit.",
    "A druid pops out of a tree yelling 'Anyone wanna buy some sage or mushrooms?!' It's not sage, the mushrooms are legit though.",
    "The party finds a wagon with a busted wheel. The former owner left his horse, Ed, attached to the cart to die. Ed speaks Common. There's a barrel of water, four bottles of wine, two carpets, pots, pans, and hay with carrots for Ed in the back. The wheel is able to be temporarily fixed with a belt or rope.",
    "A flock of blue green birds that attempt to lead the party to a forgotten shrine to a minor nature spirit.",
    "A large and beefy stag appears, full of delicious venison just waiting to be claimed by your party. Once the creature is downed and retrieved, its tough hide is ready to be removed. One small incision reveals something truly horrific, however. Its body has been stuffed with the eggs of a vile creature! Suddenly, squishy cracking sounds can be heard, and the carcass begins to slowly writhe...",
    "A fox and mastiff run in front of you. The party can tell they're best friends.",
    "You find a male human sleeping and covered in cobwebs. He's been there for a while. Apparently he lost a drinking contest to the feyfolk 25 years ago.",
    "You see a human trapped in a bear trap. Upon release she shifts into bear form and runs away.",
    "A herd of wild horses and centaurs are seen running through a glade.",
    "A male dwarf and his cougar step out of the bushes in front of the party. She says 'Hi.' to the party.",
    "An archer, cleric, rouge, and large barbarian attempt to rob the party. It Sherwood be nice if you got along.",
    "The party sees a house made of candy just off the path. You hear the hag inside lamenting building it so deep in the forest.",
    "A group of fairies are seen tormenting a pair of orphaned wolf pups. The party can scare the fairies off easily enough but the pups need someone to look after them.",
    "The party encounters a two story crack 3 meters up in a tree... filled to the brim with an abnormally large bee hive full of honey.",
    "The party comes across an all male village of blue sprites. The one with the red hat and beard appears to be the leader. They live in hallowed out mushrooms.",
    "You see a paralyzed boy being drawn on a sled by a half giant. He's accompanied by three other children. One is his little brother and they're heading North after their family was slaughtered. No spoilers.",
    "You meet a human female archer with red hair. She calls you fools and keeps saying, 'When I find that bastard... I'm gonna kill 'em!'",
    "You find an old hermit hut with the dead man still in his bed. His mastiff, Mēko, needs a new master.",
    "A lost warband of wood elves offer you trade for supplies and rations.",
    "The god Solonor Thelandira appears and gives gifts to any elves or half elves in the party.",
    "The party approaches a camp of 5 dead kobolds. They seem to have been reaching for their weapons. Strangely, there are no cuts or bruises. If the the party stays there for more than an hour, 1D4 cloakers descend from the trees and assault them. If they stay there overnight, they will be woken up by an attack from 1D8 cloakers as well as a swarm of rats which get killed by the cloakers.",
    "An elven child runs to the party, crying. A group of 1D6 names and 1D4 cultists approach the party. One of the cult members demands that the party hands back their sacrifice to their new fiend acquaintances.",
    "A very friendly gnome running a little shop greets the group. He says he used an awaken spell on the flowers he sells. He's selling them in bunches for 25 gp each. He's also selling fireflies in jars for 15 gp each as well as giant fire beetles in jars for 20 gp each.",
    "A werebear wearing a pair of jeans and a park ranger hat with 'SMOGGY' written on it approaches the party and gives them a 1D10 hour lecture on how you should be careful using fire or fire related spells in forest areas. Once finished, he tells the party 'Only YOU can prevent a forest fire.' and proceeds to ride off on the back of an owlbear.",
    "A very wide tall tree, with a hollow opening 60+ feet up. Should a player look in, they see nothing down the hole. A few moments later they are pushed into the hollow by an unseen enemy. The tree is infested with phase spiders.",
    "A tribe of Firbolg are seen disappearing into a tree. They look sad and hurried to leave.",
    "You see a dryad summon three 30 ft. spikey, coiled wooden tendrils and just pummel a mimic to death.",
    "You catch a gnome in the mouth of a bear. He screams, 'This isn't what it looks like!' As they both run into the bushes.",
    "A halfling and thirteen dwarves are being chased by giant spiders. If you help them they may give you something precious to them.",
    "You see a trail of ravens eating bread crumbs. Off in the distance are an orphaned brother and sister. They beg you to murder their shity stepmother since this is the third time she's made their father do this.",
    "Entering a marshy part of the woods you find a dire rat's nest. Aside from the rodents of unusual size the marsh gases erupt randomly doing 1d4 fire damage.",
    "While keeping watch, you notice a glimpse of something white flitting between the trees in the corner of your eye. You turn to look but it's gone. Feeling the hairs on your arm stand up, you whirl around to see a sad, filthy woman wearing a torn white robe standing at the edge of your encampment. She opens her mouth hideously to scream, but only blood spills from her lips, staining her white clothes. In a flash she flies toward you with arms outstretched. A jolt runs through your body as your eyes snap open and you realise you had nodded off...",
    "A ska band made up of humans and elves live up in a tree.",
    "A human, dwarf, and elf prince are searching for a certain wizard.",
    "A Warforged holding an ax has rusted near a felled tree. If only someone could find his oil can and free him up...",
    "A herd of 500 reindeer and their nomadic half elven caretakers are driving them north. They can trade for furs, meats, reindeer mounts, and cold weather clothing.",
    "You see an ent trapped between two boulders. Upon freeing him he grants you all 2 hours of Barkskin.",
    "You come across a marriage ceremony between an elf and a human. It's held in secret because of the hatred between their two families.",
    "You find four halflings being grappled by the roots of an awakened tree. They have a precious reward if saved.",
    "The party encounters 1d4 worg scouts. If not killed in 5 rounds then 1d4 goblins on worg-back ride in.",
    "The party encounters three bears eating the corpse of a blond female. They revert to human form once they die and their recently ransacked cottage is nearby.",
    "As the party is traveling through the forest, a shrieker sounds off. A thug jumps in front of the group, nothing but commoner clothes and a dagger. They are very easy to persuade, and even easier to intimidate.",
    "The party comes across a small fenced garden, growing some carrots and potatoes. The smell of stew fills the air, and a gnome appears, and invites them to have a meal.",
    "An incredibly large tortoise is bound in place by ropes apparently put in place by hunters, it looks at the party with sad but remarkably intelligent eyes.",
    "You come across a dryad as it strides across the path between thickets. It turns to look at you. In it's arms is a happily cooing half orc child.",
    "A bear with three arms wanders around roaring, it freaks out at the sight of humanoids. If you can get closer you can see the third paw is bloody due to a large splinter.",
    "The party encounters 1d4 druids that wild shape into wolves and run when startled.",
    "A sprite throws a glittery dust bomb at the shortest member of the party and disappears. That night a female mountain lion nuzzles up to them and is very friendly. Too friendly...",
    "In an old part of the woods four female Treants are being held captive by a trio of hags. If rescued they offer a primal medallion that allows a player to create 1 awakened shrub per day.",
    "A group of Firbolgs are tending to an injured friend. The dead orc slavers must've thought there was just one.",
    "Deep in the woods you find a sword lodged in a stone surrounded by thorny vines that drip poison.",
    "The party stumbles upon a Treant nursery. They're cute, but you have three minutes until their mothers arrive.",
    "A small elemental starts a forest fire that quickly covers the forest.",
    "A large owl and a large squirrel chase after a terrified goblin.",
    "You meet an elvish veteran of the last war. He's still in survival mode under orders and it's up to the party to convince him to go home.",
    "A traveling caravan of friendly Tabaxi has circled the wagons for the night. When you approach and sit near the fire twenty more Tabaxi come down from the trees to meet you. They are armed to the teeth, but friendly. Seems like a nice and safe place to sleep for the night.",
    "You find a human ranger named John Ramco being chased by 1d4 Orcs. He has a giant knife and asks you to help him set an ambush.",
    "You come to the house of a well known Goliath druid Jëorn that is notorious for shifting into a bear and killing entire packs of orcs. He offers you lodging for the night, milk, cheese, honey, and rental horses.",
    "A tinker Gnome and her two Warforged friends have created a giant dragon construct made of wood. They plan on scaring off the local tribe of orc slavers with it.",
    "You find 1d4 goats near a bridge over a stream. Troll encounter optional.",
    "The party stops just in time to see an endangered herd of aurochs. All 30 to 40 appear to be moving to another glen to graze. Stay low and be quiet.",
    "Four teenage humans and a dog that speaks common have a minotaur tied up. They remove the mask to reveal an old Dwarf just as the nearby city guards arrive to take him away.",
    "You find a circle of earth Genasi petrified in worship of a giant, floating, glowing red crystal. Any interference causes the crystal to lash out at you with eldritch red bolts of fire and lightning laced shards. These would make great arrow heads...",
    "An Oath of the Ancients half elf paladin and her 6 party members have just dispatched a raiding party of Drow. She allows you to loot the bodies under the condition you give them a proper burial.",
    "You find a group of 8 escaped Drow children that ran from their slavers. They are tired, beaten, and hungry.",
    "You approach a gibbet tree that has four men suspended in cages and two women in pillories at the base. They beg for mercy, but the silver etchings on the constraints is a dead giveaway something's not right here.",
    "The party comes across a Dwarven homestead in a little valley where they harvest maple syrup."
];


var biome = [
    "Arctic - cold, often frozen or icy conditions",
    "Aware - animated / sentient / collective sentient / genius loci / benevolent / hostile",
    "Day Light - always day / always night / always solar eclipse / long day or night",
    "Dimensional Anomaly - terrain appears in a fixed location, terrain appears & disappears at certain times or certain events",
    "Disaster (during / after) - avalanche, blizzard, earthquake, fire, flood, fungal bloom, hurricane, ice storm, meteor shower, plague, red tide, sand storm, swarm, tidal wave, tornado, volcanic eruption, war vs. monster, war vs. sentient",
    "Giant Monster - Biome is on top of a living giant monster / Biome is a giant monster (earth elemental / golem)",
    "Fauna - normal, clockwork, elemental, enchanted, giant, helpful, intelligent, magic construct, mischievous, monster, poisonous, spirit, thieves, toxic to eat, transformed people, zombie",
    "Flora - normal, enchanted, fast growing, fast life cycle, floating gas bags, giant, intelligent, magic construct, predatory, toxic",
    "Hollow Earth - terrain in giant hollow space within the planet (underground)",
    "Magic - absorbing / amplified magic / cursed / reduced magic / wild magic",
    "Perpetual Weather - fire tornado, fog, hurricane, ice storm, lightning storm, mist, rain storm, sand storm, snow storm, wild magic storm",
    "Resources (animals) - able to domesticate, carapace, feathers, food, fossils, fur, guano, hide, honey, ink, ivory, oil, pearls, quills, scales, silk, venom, wax, wool",
    "Resources (plants) - building material, brewed drink, cotton, dye, flowers, food, fuel, incense, innately magical, medicine, oil, resins, spice, wax",
    "Resources (minerals) - clay, coal, crystals (+ fast growing, giant, luminescent), gems, innately magical material, metals, minerals (+ glowing), salt, stone",
    "Resources (other) - fertile soil, fossils",
    "Resources (magic) - innately magic material or substance, amplify magic, resist magic, replenish mana, anti-magic",
    "Unusual Atmosphere - corrosive / flammable / low oxygen / thin / toxic / steamy / vacuum",
    "Unusual Features - mineral formations (luminescent) / mineral formations (spiky)",
    "Unusual Gravity - hi-gravity / low gravity / fluctuating",
    "Vegetation - animated / bio-luminescent / fast growing plants or fungus / giant / spikes / toxic",
    "Wandering - terrain moves over time / locomotion - grows into area / transforms adjacent area / teleports"
];

var terrain = [
    "Forest",
    "Marsh",
    "Hills",
    "Mountain",
    "Desert",
    "Plains",
    "Aquatic (Underwater? Flooded?)",
    "Weapon And Spell Restrictions",
    "Urban"
];

var weather = [
    'Rain',
    'Snow',
    'Sleet',
    'Hail',
    'Duststorm',
    'Thunderstorm',
    'Windy',
    'Windstorm',
    'Tornado',
    'Fog',
];

var geoStructure = [
    "Animal lair / nest",
    "Arch",
    "Aretes (narrow ridge between 2 valleys)",
    "Barrens",
    "Barrier Island",
    "Basin (sunken land area)",
    "Bay",
    "Bayou",
    "Beach",
    "Bog",
    "Bridge (natural, stone, etc)",
    "Brook",
    "Burm (narrow ledge)",
    "Butte (isolated hill or mountain)",
    "Caldera (cauldron-like depression above magma chamber)",
    "Canyon",
    "Cave, Cavern (ice, sea, etc)",
    "Cliff",
    "Coast",
    "Coral Reef",
    "Crater",
    "Lake of acid / water / frozen / fire / lava / boiling",
    "Dam (in a river)",
    "Farm (crops, animals, etc)",
    "Open Field",
    "Field of cacti / coral / crystals / flowers / fungi / spikes / webs",
    "Forest of cacti / coral / crystals / flowers / fungi / spikes / webs",
    "Fissure",
    "Flats (muddy, salty land)",
    "Floating Island (levitating or floating on water / lava)",
    "Garden",
    "Geyser (blowhole, lava, sand, stea, etc)",
    "Giant Footprint, (size?)",
    "Giant Geode",
    "Giant Insect cocoon / hive / mound / shell / webs",
    "Giant Lilly Pad",
    "Giant Monster Remains (body, shell, skeleton, etc)",
    "Giant Plants (bushes, flowers, trees, vines)",
    "Giant Tree",
    "Glacial Horn (sharp pyramid shaped peak)",
    "Glacier",
    "Gorge",
    "Graveyard (animal, monster, npc, etc)",
    "Grounds breeding / burial / hunting / nesting",
    "Hellscape burning / frozen / toxic / volcanic",
    "Hot Springs",
    "Lake Bed (dried)",
    "Lava Pool",
    "Ledge",
    "Mineral deposit field / surface / vein",
    "Mount / Mountain",
    "Oasis",
    "Ocean",
    "Orchard",
    "Path",
    "Pit mud / sand / slime / tar",
    "Pond",
    "River flooded / frozen / underground",
    "Sink Hole",
    "Spire",
    "Swamp",
    "Tidal Cave",
    "Trembling Earth (spongy ground)",
    "Tunnel giant insect / ice / monster burrow / natural / stone / man-made",
    "Volcano active / dormant / inactive / island / smoking / underwater",
    "Waste, Wastes, Wasteland",
    "Waterfall",
    "Well divine / water / empty / deep"
];

function NPCGenerator(){
    var NPCHtml1 = ("<b>Name</b> |")
    var NPCHtml2 = ""
    var NPCHtml3 = ""

    var syl = new Array;
    syl[0] = '\ D';
    syl[1] = '\ R';
    syl[2] = '\ K';
    syl[3] = '\ T';
    syl[4] = '\ N';
    syl[5] = '\ B';
    syl[6] = '\ L';
    syl[7] = '\ S';
    syl[8] = '\ J';
    syl[9] = '\ C';
    syl[10] = '\ Z';
    syl[11] = '\ Ch';
    syl[12] = '\ Tr';
    syl[13] = '\ Dr';
    syl[14] = '\ Th';
    syl[15] = '\ F';
    syl[16] = '\ M';
    syl[17] = '\ P';
    syl[18] = '\ G';
    syl[19] = '\ V';
    syl[20] = '\ Fr';
    syl[21] = '\ Fl';
    syl[22] = '\ Kr';
    syl[23] = '\ Cr';
    syl[24] = '\ Sh';
    syl[25] = '\ Ar';
    syl[26] = '\ Al';
    syl[27] = '\ El';
    syl[28] = '\ Er';
    syl[29] = '\ En';
    syl[30] = '\ X';
    syl[31] = '\ Ad';
    syl[32] = '\ An';
    syl[33] = '\ Or';
    syl[34] = '\ Ael';
    syl[35] = '\ Is';
    syl[36] = '\ Il';
    syl[37] = '\ In';
    syl[38] = '\ Aer';
    syl[39] = '\ Id';
    syl[40] = '\ D';
    syl[41] = '\ R';
    syl[42] = '\ K';
    syl[43] = '\ T';
    syl[44] = '\ N';
    syl[45] = '\ M';
    syl[46] = '\ L';
    syl[47] = '\ Sc';
    syl[48] = '\ J';
    syl[49] = '\ C';

    var randnum = Math.random() * syl.length;
    randnum = Math.floor(randnum);
    NPCHtml1 += (syl[randnum]);

    var sylii = new Array;
    sylii[0] = '\ a';
    sylii[1] = '\ e';
    sylii[2] = '\ i';
    sylii[3] = '\ o';
    sylii[4] = '\ u';
    sylii[5] = '\ y';
    sylii[6] = '\ ae';
    sylii[7] = '\ a';
    sylii[8] = '\ ou';
    sylii[9] = '\ ea';
    sylii[10] = '\ a';
    sylii[11] = '\ e';
    sylii[12] = '\ i';
    sylii[13] = '\ o';
    sylii[14] = '\ ai';
    sylii[15] = '\ \'';
    sylii[16] = '\ ae';
    sylii[17] = '\ a';
    sylii[18] = '\ oa';
    sylii[19] = '\ ea';

    var randnumii = Math.random() * sylii.length;
    randnumii = Math.floor(randnumii);
    NPCHtml1 += (sylii[randnumii].replace(/ /,""));


    var syliii = new Array;
    syliii[0] = '\ r';
    syliii[1] = '\ l';
    syliii[2] = '\ k';
    syliii[3] = '\ n';
    syliii[4] = '\ m';
    syliii[5] = '\ t';
    syliii[6] = '\ v';
    syliii[7] = '\ z';
    syliii[8] = '\ d';
    syliii[9] = '\ ll';
    syliii[10] = '\ \'';
    syliii[11] = '\ \'';
    syliii[12] = '\ tr';
    syliii[13] = '\ kl';
    syliii[14] = '\ ch';
    syliii[15] = '\ sh';
    syliii[16] = '\ th';
    syliii[17] = '\ rr';
    syliii[18] = '\ nd';
    syliii[19] = '\ s';
    syliii[20] = '\ ss';
    syliii[21] = '\ x';
    syliii[22] = '\ ck';
    syliii[23] = '\ r';
    syliii[24] = '\ sk';
    syliii[25] = '\ t';
    syliii[26] = '\ nd';
    syliii[27] = '\ kr';
    syliii[28] = '\ l';
    syliii[29] = '\ z';
    syliii[30] = '\ r';
    syliii[31] = '\ nc';
    syliii[32] = '\ k';
    syliii[33] = '\ n';
    syliii[34] = '\ m';
    syliii[35] = '\ t';
    syliii[36] = '\ v';
    syliii[37] = '\ z';
    syliii[38] = '\ d';
    syliii[39] = '\ ph';
    syliii[40] = '\ r';
    syliii[41] = '\ l';
    syliii[42] = '\ k';
    syliii[43] = '\ n';
    syliii[44] = '\ m';
    syliii[45] = '\ t';
    syliii[46] = '\ v';
    syliii[47] = '\ z';
    syliii[48] = '\ d';
    syliii[49] = '\ ll';
    syliii[50] = '\ ss';
    syliii[51] = '\ n';
    syliii[52] = '\ s';
    syliii[53] = '\ ly';
    syliii[54] = '\ yl';
    syliii[55] = '\ yr';
    syliii[56] = '\ ry';
    syliii[57] = '\ nn';
    syliii[58] = '\ ns';
    syliii[59] = '\ ndr';

    var randnumiii = Math.random() * syliii.length;
    randnumiii = Math.floor(randnumiii);
    NPCHtml1 += (syliii[randnumiii].replace(/ /,""));

    var sylv = new Array;
    sylv[0] = '\ an';
    sylv[1] = '\ ar';
    sylv[2] = '\ er';
    sylv[3] = '\ in';
    sylv[4] = '\ ax';
    sylv[5] = '\ ';
    sylv[6] = '\ el';
    sylv[7] = '\ il';
    sylv[8] = '\ ';
    sylv[9] = '\ ';
    sylv[10] = '\ ';
    sylv[11] = '\ ';
    sylv[12] = '\ el';
    sylv[13] = '\ or';
    sylv[14] = '\ ur';
    sylv[15] = '\ ix';
    sylv[16] = '\ en';
    sylv[17] = '\ i';
    sylv[18] = '\ if';
    sylv[19] = '\ al';
    sylv[20] = '\ e';
    sylv[21] = '\ y';
    sylv[22] = '\ ';
    sylv[23] = '\ av';
    sylv[24] = '\ ev';
    sylv[25] = '\ y';
    sylv[26] = '\ im';
    sylv[27] = '\ ol';
    sylv[28] = '\ ac';
    sylv[29] = '\ oc';
    sylv[30] = '\ ic';
    sylv[31] = '\ ael';
    sylv[32] = '\ ael';
    sylv[33] = '\ ak';
    sylv[34] = '\ ual';
    sylv[35] = '\ oal';
    sylv[36] = '\ ';
    sylv[37] = '\ ';
    sylv[38] = '\ ';
    sylv[39] = '\ ';
    sylv[40] = '\ an';
    sylv[41] = '\ ar';
    sylv[42] = '\ er';
    sylv[43] = '\ in';
    sylv[44] = '\ ';
    sylv[45] = '\ ';
    sylv[46] = '\ el';
    sylv[47] = '\ ';
    sylv[48] = '\ ';
    sylv[49] = '\ ';
    sylv[50] = '\ ';
    sylv[51] = '\ ';
    sylv[52] = '\ ';
    sylv[53] = '\ ';
    sylv[54] = '\ ';
    sylv[55] = '\ ';
    sylv[56] = '\ ';
    sylv[57] = '\ ';
    sylv[58] = '\ ';
    sylv[59] = '\ ';

    var randnumv = Math.random() * sylv.length;
    randnumv = Math.floor(randnumv);
    NPCHtml1 += (sylv[randnumv].replace(/ /,""));



    var gender = new Array;
    gender[0] = '\ female';
    gender[1] = '\ male';

    var gennum = Math.random() * gender.length;
    gennum = Math.floor(gennum);


    switch(gennum)
    {
    case 0:
    var sylvif = new Array;
    sylvif[0] = '\ ra';
    sylvif[1] = '\ a';
    sylvif[2] = '\ an';
    sylvif[3] = '\ n';
    sylvif[4] = '\ en';
    sylvif[5] = '\ ri';
    sylvif[6] = '\ li';
    sylvif[7] = '\ la';
    sylvif[8] = '\ a';
    sylvif[9] = '\ ea';
    sylvif[10] = '\ es';
    sylvif[11] = '\ as';
    sylvif[12] = '\ ai';
    sylvif[13] = '\ er';
    sylvif[14] = '\ ah';
    sylvif[15] = '\ ';
    sylvif[16] = '\ u';
    sylvif[17] = '\ us';
    sylvif[18] = '\ ai';
    sylvif[19] = '\ on';
    sylvif[20] = '\ i';
    sylvif[21] = '\ ath';
    sylvif[22] = '\ eth';
    sylvif[23] = '\ ah';
    sylvif[24] = '\ a';
    sylvif[25] = '\ ae';
    sylvif[26] = '\ ';
    sylvif[27] = '\ ';
    sylvif[28] = '\ ';
    sylvif[29] = '\ ';
    sylvif[30] = '\ ';
    sylvif[31] = '\ ';
    sylvif[32] = '\ ';
    sylvif[33] = '\ ';
    sylvif[34] = '\ ';
    sylvif[35] = '\ ';
    sylvif[36] = '\ ';
    sylvif[37] = '\ ';
    sylvif[38] = '\ ';
    sylvif[39] = '\ ';
    sylvif[40] = '\ ra';
    sylvif[41] = '\ a';
    sylvif[42] = '\ an';
    sylvif[43] = '\ n';
    sylvif[44] = '\ ';
    sylvif[45] = '\ ';
    sylvif[46] = '\ ';
    sylvif[47] = '\ ';
    sylvif[48] = '\ ';
    sylvif[49] = '\ ';

    var randnumvif = Math.random() * sylvif.length;
    randnumvif = Math.floor(randnumvif);
    NPCHtml1 += (sylvif[randnumvif].replace(/ /,""));
    break

    case 1:
    var sylvim = new Array;
    sylvim[0] = '\ om';
    sylvim[1] = '\ o';
    sylvim[2] = '\ ro';
    sylvim[3] = '\ n';
    sylvim[4] = '\ on';
    sylvim[5] = '\ ri';
    sylvim[6] = '\ li';
    sylvim[7] = '\ lo';
    sylvim[8] = '\ o';
    sylvim[9] = '\ us';
    sylvim[10] = '\ es';
    sylvim[11] = '\ us';
    sylvim[12] = '\ ai';
    sylvim[13] = '\ er';
    sylvim[14] = '\ oh';
    sylvim[15] = '\ ao';
    sylvim[16] = '\ u';
    sylvim[17] = '\ us';
    sylvim[18] = '\ ai';
    sylvim[19] = '\ on';
    sylvim[20] = '\ i';
    sylvim[21] = '\ ath';
    sylvim[22] = '\ eth';
    sylvim[23] = '\ o';
    sylvim[24] = '\ or';
    sylvim[25] = '\ os';
    sylvim[26] = '\ ';
    sylvim[27] = '\ ';
    sylvim[28] = '\ ';
    sylvim[29] = '\ ';
    sylvim[30] = '\ ';
    sylvim[31] = '\ ';
    sylvim[32] = '\ ';
    sylvim[33] = '\ ';
    sylvim[34] = '\ ';
    sylvim[35] = '\ ';
    sylvim[36] = '\ ';
    sylvim[37] = '\ ';
    sylvim[38] = '\ ';
    sylvim[39] = '\ ';
    sylvim[40] = '\ ';
    sylvim[41] = '\ ';
    sylvim[42] = '\ ';
    sylvim[43] = '\ n';
    sylvim[44] = '\ ';
    sylvim[45] = '\ ';
    sylvim[46] = '\ ';
    sylvim[47] = '\ ';
    sylvim[48] = '\ o';
    sylvim[49] = '\ us';

    var randnumvim = Math.random() * sylvim.length;
    randnumvim = Math.floor(randnumvim);
    NPCHtml1 += (sylvim[randnumvim].replace(/ /,""));
    break
    }

    NPCHtml1 += ("<br /><b>Gender</b> |")
    NPCHtml1 += (gender[gennum]);


    NPCHtml1 += ("<br /><b>Race</b> |")

    var race = new Array;
    race[0] = '\ human';
    race[1] = '\ human';
    race[2] = '\ human';
    race[3] = '\ lycanthrope';
    race[4] = '\ elf';
    race[5] = '\ half-elf';
    race[6] = '\ human, some elf blood';
    race[7] = '\ half-demon';
    race[8] = '\ human, some angel blood';
    race[9] = '\ gnome';
    race[10] = '\ eladrin';
    race[11] = '\ dragonborn';
    race[12] = '\ dwarf';
    race[13] = '\ halfling';
    race[14] = '\ elf';
    race[15] = '\ human, some orc blood';
    race[16] = '\ human, some demon blood';
    race[17] = '\ half-angel';
    race[18] = '\ halfling';
    race[19] = '\ half-orc';
    race[20] = '\ half-angel';
    race[21] = '\ demon';
    race[22] = '\ vampire';
    race[23] = '\ spirit';
    race[24] = '\ human, some monster blood';
    race[25] = '\ full angel';

    var rrace = Math.random() * race.length;
    rrace = Math.floor(rrace);

    NPCHtml1 += (race[rrace]);

    NPCHtml1 += ("<br /><b>Motivation</b> |")

    var motive = new Array;
    motive[0] = '\ compassion';
    motive[1] = '\ loyalty/integrity';
    motive[2] = '\ malice';
    motive[3] = '\ ambition';
    motive[4] = '\ curiousity';

    var rmotive = Math.random() * motive.length;
    rmotive = Math.floor(rmotive);
    NPCHtml1 += (motive[rmotive]);

    NPCHtml1 += ("<br /><b>Class</b> |")

    var spec = new Array;
    spec[0] = '\ illusionist';
    spec[1] = '\ summoner';
    spec[2] = '\ enchanter';
    spec[3] = '\ chronomancer';
    spec[4] = '\ conjurer';
    spec[5] = '\ viviomancer';
    spec[6] = '\ battle mage';
    spec[7] = '\ shapeshifter';
    spec[8] = '\ elementalist';
    spec[9] = '\ necromancer';

    var rspec = Math.random() * spec.length;
    rspec = Math.floor(rspec);

    switch(rmotive)
    {
    case 0:
    var good = new Array
    good[0] = '\ mercenary';
    good[1] = '\ mercenary';
    good[2] = '\ (ex-)soldier';
    good[3] = '\ (ex-)guard';
    good[4] = '\ bodyguard';
    good[5] = '\ adventurer';
    good[6] = '\ adventurer';
    good[7] = '\ paladin / other religious warrior';
    good[8] = '\ healer';
    good[9] = '\ knight';
    good[10] = '\ tailor / leatherworker';
    good[11] = '\ cloth merchant';
    good[12] = '\ jeweler / gem merchant';
    good[13] = '\ silversmith / goldsmith';
    good[14] = '\ merchant';
    good[15] = '\ trader';
    good[16] = '\ shopkeeper';
    good[17] = '\ smith / metal merchant';
    good[18] = '\ magic item specialist/collector';
    good[19] = '\ mercenary'
    good[20] = '\ cleric';
    good[21] = '\ cleric';
    good[22] = '\ witch/warlock';
    good[23] = '\ mage';
    good[24] = '\ mage';
    good[25] = '\ wizard';
    good[26] = '\ mage'
    good[27] = '\ magician';
    good[28] = '\ farmer';
    good[29] = '\ hunter';
    good[30] = '\ herald/messenger';
    good[31] = '\ bard';
    good[32] = '\ entertainer';
    good[33] = '\ druid';
    good[34] = '\ escort / dancer';
    good[35] = '\ seer / psychic';
    good[36] = '\ unemployed';
    good[37] = '\ historian / scholar';
    good[38] = '\ specialist mage';
    good[39] = '\ specialist mage';

    var rgood = Math.random() * good.length;
    rgood = Math.floor(rgood);

    if (rgood>37)
    {
    NPCHtml1 += (spec[rspec]);
    }
    else
    {
    NPCHtml1 += (good[rgood]);
    }

    break

    case 1:
    var sgood = new Array
    sgood[0] = '\ mercenary';
    sgood[1] = '\ paladin / other religious warrior';
    sgood[2] = '\ (ex-)soldier';
    sgood[3] = '\ (ex-)guard';
    sgood[4] = '\ bodyguard';
    sgood[5] = '\ knight';
    sgood[6] = '\ adventurer';
    sgood[7] = '\ paladin / other religious warrior';
    sgood[8] = '\ healer';
    sgood[9] = '\ knight';
    sgood[10] = '\ tailor / leatherworker';
    sgood[11] = '\ cloth merchant';
    sgood[12] = '\ jeweler / gem merchant';
    sgood[13] = '\ silversmith / goldsmith';
    sgood[14] = '\ merchant';
    sgood[15] = '\ trader';
    sgood[16] = '\ shopkeeper';
    sgood[17] = '\ smith / metal merchant';
    sgood[18] = '\ magic item specialist/collector';
    sgood[19] = '\ cleric'
    sgood[20] = '\ cleric';
    sgood[21] = '\ cleric';
    sgood[22] = '\ witch/warlock';
    sgood[23] = '\ mage';
    sgood[24] = '\ mage';
    sgood[25] = '\ wizard';
    sgood[26] = '\ mage'
    sgood[27] = '\ magician';
    sgood[28] = '\ farmer';
    sgood[29] = '\ hunter';
    sgood[30] = '\ herald/messenger';
    sgood[31] = '\ merchant';
    sgood[32] = '\ cleric';
    sgood[33] = '\ druid';
    sgood[34] = '\ bounty hunter';
    sgood[35] = '\ seer / psychic';
    sgood[36] = '\ unemployed';
    sgood[37] = '\ historian / scholar';
    sgood[38] = '\ specialist mage';
    sgood[39] = '\ specialist mage';

    var rsgood = Math.random() * sgood.length;
    rsgood = Math.floor(rsgood);

    if (rsgood>37)
    {
    NPCHtml1 += (spec[rspec]);
    }
    else
    {
    NPCHtml1 += (sgood[rsgood]);
    }

    break


    case 2:
    var evil = new Array
    evil[0] = '\ mercenary';
    evil[1] = '\ mercenary';
    evil[2] = '\ (ex-)guard';
    evil[3] = '\ (ex-)soldier';
    evil[4] = '\ bodyguard';
    evil[5] = '\ adventurer';
    evil[6] = '\ con artist';
    evil[7] = '\ evil paladin (backguard)';
    evil[8] = '\ slaver';
    evil[9] = '\ dark knight';
    evil[10] = '\ thief';
    evil[11] = '\ merchant';
    evil[12] = '\ bounty hunter';
    evil[13] = '\ thug';
    evil[14] = '\ merchant';
    evil[15] = '\ trader';
    evil[16] = '\ shopkeeper';
    evil[17] = '\ blacksmith';
    evil[18] = '\ slaver';
    evil[19] = '\ magic item collector';
    evil[20] = '\ rogue';
    evil[21] = '\ assassin';
    evil[22] = '\ witch/warlock';
    evil[23] = '\ mage';
    evil[24] = '\ mage';
    evil[25] = '\ wizard';
    evil[26] = '\ wizard';
    evil[27] = '\ magician';
    evil[28] = '\ slaver';
    evil[29] = '\ hunter';
    evil[30] = '\ thief';
    evil[31] = '\ rogue';
    evil[32] = '\ assassin';
    evil[33] = '\ spy';
    evil[34] = '\ bounty hunter';
    evil[35] = '\ thief';
    evil[36] = '\ pickpocket';
    evil[37] = '\ pickpocket';
    evil[38] = '\ thug';
    evil[39] = '\ con artist';
    evil[40] = '\ rogue';
    evil[41] = '\ bard';
    evil[42] = '\ assassin';
    evil[43] = '\ druid';
    evil[44] = '\ escort / dancer';
    evil[45] = '\ seer / psychic';
    evil[46] = '\ unemployed';
    evil[47] = '\ thief';
    evil[48] = '\ specialist mage';
    evil[49] = '\ specialist mage';

    var revil = Math.random() * evil.length;
    revil = Math.floor(revil);

    if (revil>47)
    {
    NPCHtml1 += (spec[rspec]);
    }
    else
    {
    NPCHtml1 += (evil[revil]);
    }

    break


    default:
    var cls = new Array;
    cls[0] = '\ bard';
    cls[1] = '\ mercenary';
    cls[2] = '\ (ex-)guard';
    cls[3] = '\ (ex-)soldier';
    cls[4] = '\ bodyguard';
    cls[5] = '\ adventurer';
    cls[6] = '\ adventurer';
    cls[7] = '\ paladin / other religious warrior';
    cls[8] = '\ paladin / other religious warrior';
    cls[9] = '\ knight';
    cls[10] = '\ tailor / leatherworker';
    cls[11] = '\ cloth merchant';
    cls[12] = '\ jeweler / gem merchant';
    cls[13] = '\ silversmith / goldsmith';
    cls[14] = '\ merchant';
    cls[15] = '\ trader';
    cls[16] = '\ shopkeeper';
    cls[17] = '\ smith / metal merchant';
    cls[18] = '\ slaver';
    cls[19] = '\ magic item specialist/collector';
    cls[20] = '\ cleric';
    cls[21] = '\ healer';
    cls[22] = '\ witch/warlock';
    cls[23] = '\ mage';
    cls[24] = '\ mage';
    cls[25] = '\ wizard';
    cls[26] = '\ historian / scholar';
    cls[27] = '\ magician';
    cls[28] = '\ farmer';
    cls[29] = '\ hunter';
    cls[30] = '\ thief';
    cls[31] = '\ rogue';
    cls[32] = '\ assassin';
    cls[33] = '\ spy';
    cls[34] = '\ bounty hunter';
    cls[35] = '\ thief';
    cls[36] = '\ pickpocket';
    cls[37] = '\ pickpocket';
    cls[38] = '\ thug';
    cls[39] = '\ con artist';
    cls[40] = '\ herald/messenger';
    cls[41] = '\ bard';
    cls[42] = '\ entertainer';
    cls[43] = '\ druid';
    cls[44] = '\ escort / dancer';
    cls[45] = '\ seer / psychic';
    cls[46] = '\ unemployed';
    cls[47] = '\ historian / scholar';
    cls[48] = '\ specialist mage';
    cls[49] = '\ specialist mage';

    var rcls = Math.random() * cls.length;
    rcls = Math.floor(rcls);

    if (rcls>47)
    {
    NPCHtml1 += (spec[rspec]);
    }
    else
    {
    NPCHtml1 += (cls[rcls]);
    }

    break
    }

    NPCHtml1 += ("<br /><b>Current Mood</b> |" )

    var mood = new Array;
    mood[0] = '\ grouchy';
    mood[1] = '\ cheerful';
    mood[2] = '\ optimistic';
    mood[3] = '\ pessimistic';
    mood[4] = '\ lonely';
    mood[5] = '\ mournful';
    mood[6] = '\ silly';
    mood[7] = '\ mischievious';
    mood[8] = '\ generous';
    mood[9] = '\ cynical';
    mood[10] = '\ lost';
    mood[11] = '\ angry';
    mood[12] = '\ worried';
    mood[13] = '\ nervous';
    mood[14] = '\ exuberant';
    mood[15] = '\ tired';
    mood[16] = '\ sleepy';
    mood[17] = '\ annoyed';
    mood[18] = '\ helpful';
    mood[19] = '\ suspicious';
    mood[20] = '\ bored';
    mood[21] = '\ serious';
    mood[22] = '\ hopeful';
    mood[23] = '\ miserable';
    mood[24] = '\ angry';
    mood[25] = '\ drunk';
    mood[26] = '\ friendly';
    mood[27] = '\ irritable';
    mood[28] = '\ happy';
    mood[29] = '\ ill';

    var randnum = Math.random() * mood.length;
    randnum = Math.floor(randnum);
    NPCHtml1 += (mood[randnum]);

    NPCHtml2 += ("<b>Attractiveness</b> | ")
    var randnum = Math.random() * 10 + 0.99;
    randnum = Math.floor(randnum);
    NPCHtml2 += randnum;


    NPCHtml2 += (" / 10<br /><b>Eyes</b> |")
    var oddeyes = new Array;
    oddeyes[0] = '\ blue';
    oddeyes[1] = '\ blue';
    oddeyes[2] = '\ brown';
    oddeyes[3] = '\ brown';
    oddeyes[4] = '\ hazel';
    oddeyes[5] = '\ green';
    oddeyes[6] = '\ green';
    oddeyes[7] = '\ green';
    oddeyes[8] = '\ unusual/changing';
    oddeyes[9] = '\ unusual/changing';

    var randnumii = Math.random() * oddeyes.length;
    randnumii = Math.floor(randnumii);

    var eyes = new Array;
    eyes[0] = '\ change by mood';
    eyes[1] = '\ change randomly';
    eyes[2] = '\ change by surroundings';
    eyes[3] = '\ gold';
    eyes[4] = '\ silver';
    eyes[5] = '\ yellow';
    eyes[6] = '\ bronze';
    eyes[7] = '\ slightly glowing blue';
    eyes[8] = '\ slightly glowing green';
    eyes[9] = '\ blue with silver flecks';
    eyes[10] = '\ orange';
    eyes[11] = '\ slightly glowing red';
    eyes[12] = '\ slightly glowing yellow';
    eyes[13] = '\ red';
    eyes[14] = '\ violet';
    eyes[15] = '\ blue with gold flecks';
    eyes[26] = '\ grey';

    oddEyeColourRef = [];
    oddEyeColourRef[0] = 'blue';
    oddEyeColourRef[1] = 'blue';
    oddEyeColourRef[2] = 'brown';
    oddEyeColourRef[3] = 'brown';
    oddEyeColourRef[4] = 'background: -moz-radial-gradient(center, ellipse cover, #704d16 12%, #98b73a 100%);background: -webkit-radial-gradient(center, ellipse cover, #704d16 12%,#98b73a 100%);background: radial-gradient(ellipse at center, #704d16 12%,#98b73a 100%)';
    oddEyeColourRef[5] = 'green';
    oddEyeColourRef[6] = 'green';
    oddEyeColourRef[7] = 'green';
    oddEyeColourRef[8] = 'background: -moz-radial-gradient(center, ellipse cover, #ed4e1a 12%, #6446db 100%);background: -webkit-radial-gradient(center, ellipse cover, #ed4e1a 12%,#6446db 100%);background: radial-gradient(ellipse at center, #ed4e1a 12%,#6446db 100%)';
    oddEyeColourRef[9] = 'background: -moz-radial-gradient(center, ellipse cover, #ed4e1a 12%, #6446db 100%);background: -webkit-radial-gradient(center, ellipse cover, #ed4e1a 12%,#6446db 100%);background: radial-gradient(ellipse at center, #ed4e1a 12%,#6446db 100%)';

    eyeColourRef = [];
    eyeColourRef[0] = 'black';
    eyeColourRef[1] = 'black';
    eyeColourRef[2] = 'black';
    eyeColourRef[3] = 'gold';
    eyeColourRef[4] = 'silver';
    eyeColourRef[5] = 'yellow';
    eyeColourRef[6] = '#ad871e';
    eyeColourRef[7] = '#47cbf3';
    eyeColourRef[8] = '#47f394';
    eyeColourRef[9] = '#6ccddc';
    eyeColourRef[10] = 'orange';
    eyeColourRef[11] = '#ff5f5f';
    eyeColourRef[12] = '#fff35f';
    eyeColourRef[13] = '#e63a3a';
    eyeColourRef[14] = 'violet';
    eyeColourRef[15] = '#47cbf3';
    eyeColourRef[16] = 'grey';

    var reyes = Math.random() * eyes.length;
    reyes = Math.floor(reyes);

    if (randnumii<8)
    {
    NPCHtml2 += (oddeyes[randnumii]);
    NPCHtml2 += '<i class="col" style="background-color:'+oddEyeColourRef[randnumii]+';"></i>';
    }
    else
    {
    NPCHtml2 += (eyes[reyes])
    NPCHtml2 += '<i class="col" style="background-color:'+eyeColourRef[reyes]+';"></i>';
    }


    NPCHtml2 += ("<br /><b>Hair</b> |" )
    var color = new Array;
    color[0] = '\ brown';
    color[1] = '\ brown';
    color[2] = '\ brown';
    color[3] = '\ black';
    color[4] = '\ black';
    color[5] = '\ blonde';
    color[6] = '\ blonde';
    color[7] = '\ red';
    color[8] = '\ red';
    color[9] = '\ none/dyed';

    var rcolor = Math.random() * color.length;
    rcolor = Math.floor(rcolor);

    var hair = new Array;
    hair[0] = '\ none';
    hair[1] = '\ green [dyed]';
    hair[2] = '\ blue [dyed]';
    hair[3] = '\ platinum blonde';
    hair[4] = '\ white';
    hair[5] = '\ grey';
    hair[6] = '\ bright orange [dyed]';
    hair[7] = '\ blood red [dyed]';
    hair[8] = '\ pink [dyed]';
    hair[9] = '\ multicolored [dyed]';
    hair[10] = '\ violet [dyed]';
    hair[11] = '\ dark green [dyed]';
    hair[12] = '\ navy blue [dyed]';
    hair[13] = '\ platinum blonde';
    hair[14] = '\ white [dyed]';
    hair[15] = '\ black [dyed]';
    hair[16] = '\ blue-green [dyed]';
    hair[17] = '\ striped two colors[dyed]';
    hair[18] = '\ pink [dyed]';
    hair[19] = '\ blue [dyed]';

    var rhair = Math.random() * hair.length;
    rhair = Math.floor(rhair);

    if (rcolor<9)
    {
    NPCHtml2 += (color[rcolor]);
    }
    else
    {
    NPCHtml2 += (hair[rhair]);
    }

    NPCHtml2 += ("<br /><b>Height</b> |" )

    var sin = new Array;
    sin[0] = '\ average';
    sin[1] = '\ average';
    sin[2] = '\ average';
    sin[3] = '\ slightly tall';
    sin[4] = '\ slightly tall';
    sin[5] = '\ slightly short';
    sin[6] = '\ tall';
    sin[7] = '\ very tall';
    sin[8] = '\ short';
    sin[9] = '\ very short';

    var randnum = Math.random() * sin.length;
    randnum = Math.floor(randnum);
    NPCHtml2 += (sin[randnum]);


    NPCHtml2 += ("<br /><b>Other</b> |")

    var marks = new Array;
    marks[0] = '\ none';
    marks[1] = '\ none';
    marks[2] = '\ none';
    marks[3] = '\ many scars';
    marks[4] = '\ scars';
    marks[5] = '\ tattoos';
    marks[6] = '\ unusual tattoos';
    marks[7] = '\ very nice clothes';
    marks[8] = '\ wearing expensive jewelry';
    marks[9] = '\ missing an eye/finger/etc';
    marks[10] = '\ none';
    marks[11] = '\ none';
    marks[12] = '\ none';
    marks[13] = '\ many scars';
    marks[14] = '\ scars';
    marks[15] = '\ tattoos';
    marks[16] = '\ unusual tattoos';
    marks[17] = '\ very nice clothes';
    marks[18] = '\ freckles';
    marks[19] = '\ unusually long hair';
    marks[20] = '\ none';
    marks[21] = '\ none';
    marks[22] = '\ none';
    marks[23] = '\ none';
    marks[24] = '\ scars';
    marks[25] = '\ tattoos';
    marks[26] = '\ none';
    marks[27] = '\ none';
    marks[28] = '\ none';
    marks[29] = '\ none';

    var randnumii = Math.random() * marks.length;
    randnumii = Math.floor(randnumii);
    NPCHtml2 += (marks[randnumii]);


    NPCHtml2 += ("<br /><b>Competence</b> | ")

    var randnum = Math.ceil(Math.random() * 10)
    NPCHtml2 += (randnum)

    NPCHtml2 += (" / 10")

    NPCHtml3 += ("<b>Main Weapon</b> |")

    var weaps = new Array;
    weaps.push('\ sword');
    weaps.push('\ sword');
    weaps.push('\ sword');
    weaps.push('\ polearm');
    weaps.push('\ polearm');
    weaps.push('\ axe/darts');
    weaps.push('\ etc');
    weaps.push('\ etc');
    weaps.push('\ daggers');
    weaps.push('\ none');
    weaps.push('\ broadsword');
    weaps.push('\ broadsword');
    weaps.push('\ longsword');
    weaps.push('\ longsword');
    weaps.push('\ shortsword');
    weaps.push('\ greatsword');
    weaps.push('\ bastard sword');
    weaps.push('\ bastard sword');
    weaps.push('\ scimitar');
    weaps.push('\ rapier');
    weaps.push('\ daggers');
    weaps.push('\ spear');
    weaps.push('\ spear');
    weaps.push('\ spear');
    weaps.push('\ staff');
    weaps.push('\ pike');
    weaps.push('\ staff');
    weaps.push('\ staff');
    weaps.push('\ halberd');
    weaps.push('\ glaive');
    weaps.push('\ darts');
    weaps.push('\ darts');
    weaps.push('\ darts');
    weaps.push('\ darts');
    weaps.push('\ club');
    weaps.push('\ axe');
    weaps.push('\ axe');
    weaps.push('\ axe');
    weaps.push('\ poison darts');
    weaps.push('\ poison darts');
    weaps.push('\ flail');
    weaps.push('\ flail');
    weaps.push('\ crossbow');
    weaps.push('\ crossbow');
    weaps.push('\ mace');
    weaps.push('\ mace');
    weaps.push('\ longbow');
    weaps.push('\ whip');
    weaps.push('\ morningstar');
    weaps.push('\ morningstar');

    var randweaps = Math.random() * weaps.length;
    randweaps = Math.floor(randweaps);

    NPCHtml3 += (weaps[randweaps]);

    NPCHtml3 += ("<br /><b>Believes In</b> |")
    var belief = new Array;
    belief[0] = '\ Self';
    belief[1] = '\ Fate';
    belief[2] = '\ Luck';
    belief[3] = '\ Gods';
    belief[4] = '\ Nothing';
    belief[5] = '\ Self';
    belief[6] = '\ Fate';
    belief[7] = '\ Luck';
    belief[8] = '\ Gods';
    belief[9] = '\ Nothing';

    var randnum = Math.random() * belief.length;
    randnum = Math.floor(randnum);
    NPCHtml3 += (belief[randnum]);


    NPCHtml3 += ("<br /><b>Element</b> |")

    var elem = new Array;
    elem[0] = '\ Earth';
    elem[1] = '\ Water';
    elem[2] = '\ Fire';
    elem[3] = '\ Wind/Air';
    elem[4] = '\ Darkness';
    elem[5] = '\ Light';
    elem[6] = '\ Earth';
    elem[7] = '\ Wind/Air';
    elem[8] = '\ Water';
    elem[9] = '\ Fire';

    var randnum = Math.random() * elem.length;
    randnum = Math.floor(randnum);
    NPCHtml3 += (elem[randnum]);


    NPCHtml3 += ("<br /><b>Sucker for</b> |")

    var sck = new Array;
    sck[0] = '\ dudes/damsels in distress';
    sck[1] = '\ cute and fuzzy things';
    sck[2] = '\ runaways and orphans';
    sck[3] = '\ shiny stuff';
    sck[4] = '\ the adoration of the masses';
    sck[5] = '\ wild animals of any sort';
    sck[6] = '\ sckging and dancing';
    sck[7] = '\ get rich quick schemes';
    sck[8] = '\ irony';
    sck[9] = '\ obscure lore';
    sck[10] = '\ expensive but uneccessary things';
    sck[11] = '\ creepy crawly things';
    sck[12] = '\ the \'bad boy/girl\' look';
    sck[13] = '\ total innocence';
    sck[14] = '\ challenge';
    sck[15] = '\ flattery';
    sck[16] = '\ any sort of nobility';
    sck[17] = '\ tortured pasts';
    sck[18] = '\ gratuitous violence';
    sck[19] = '\ sappy romantic things';
    sck[20] = '\ lost causes';
    sck[21] = '\ foriegn customs/accents';
    sck[22] = '\ happy endings';
    sck[23] = '\ members of the opposite sex';
    sck[24] = '\ members of the same sex';
    sck[25] = '\ strict regulations';
    sck[26] = '\ the status quo';
    sck[27] = '\ complete honesty';
    sck[28] = '\ foolish bravery';
    sck[29] = '\ fancy parties';

    var randnum = Math.random() * sck.length;
    randnum = Math.floor(randnum);
    NPCHtml3 += (sck[randnum]);

    NPCHtml3 += ("<br /><b>Annoyed by</b> |")

    var randnuma = Math.random() * sck.length;
    randnuma = Math.floor(randnuma);

    if (randnuma != randnum)
    {
    NPCHtml3 += (sck[randnuma])
    }
    else
    {
    var randnumb = Math.random() * sck.length;
    randnumb = Math.floor(randnumb);
    if (randnumb != randnum)
    {
    NPCHtml3 += (sck[randnumb])
    }
    else if (randnum != 0)
    {
    NPCHtml3 += (sck[randnum-1])
    }
    else
    {
    NPCHtml3 += (sck[randnum+1])
    }
    }


    NPCHtml3 += ("<br /><b>Hobby</b> |")
    var hobby = new Array;
    hobby[0] = '\ whittles/carves';
    hobby[1] = '\ hobbygs/plays an instrument';
    hobby[2] = '\ paints';
    hobby[3] = '\ studies languages';
    hobby[4] = '\ studies lore';
    hobby[5] = '\ studies plants';
    hobby[6] = '\ studies animals';
    hobby[7] = '\ follows distant politics';
    hobby[8] = '\ collects gossip';
    hobby[9] = '\ collects oddities';
    hobby[10] = '\ gambles/plays card games'
    hobby[11] = '\ studies astrology'
    hobby[12] = '\ studies geography'
    hobby[13] = '\ makes bets (on anything)'
    hobby[14] = '\ writes ballads/poems'
    hobby[15] = '\ fights in tournaments'
    hobby[16] = '\ drinks'
    hobby[17] = '\ dabbles in mysticism'
    hobby[18] = '\ studies history'
    hobby[19] = '\ studies religion'
    hobby[20] = '\ solves puzzles';
    hobby[21] = '\ reads';
    hobby[22] = '\ watches plays';
    hobby[23] = '\ sketches/draws';
    hobby[24] = '\ dances';
    hobby[25] = '\ studies archaology';
    hobby[26] = '\ collects exotic weapons';
    hobby[27] = '\ gambles/plays dice games';
    hobby[28] = '\ looks for ghosts';
    hobby[29] = '\ teaches profession to others';
    hobby[30] = '\ goes fishing';
    hobby[31] = '\ hunts';
    hobby[32] = '\ studies philosophy';
    hobby[33] = '\ travels';
    hobby[34] = '\ gets in brawls';
    hobby[35] = '\ collects stories';
    hobby[36] = '\ takes long walks in the wilderness';
    hobby[37] = '\ finds new ways to shirk work';
    hobby[38] = '\ experiments with chemicals';
    hobby[39] = '\ sews/embroiders';

    var randnum = Math.random() * hobby.length;
    randnum = Math.floor(randnum);
    NPCHtml3 += (hobby[randnum]);
    return [NPCHtml1,NPCHtml2,NPCHtml3];
}

function monsterGenerator(monsterCR){
    var monsterHTML,
        monsterID,
        monstersDetailsFiltered = [],
        monstersDetails = [
            ["Aboleth","10","5900"],
            ["Acolyte","¼","50"],
            ["Adult Black Dragon","14","11500"],
            ["Adult Blue Dragon","16","15000"],
            ["Adult Brass Dragon","13","10000"],
            ["Adult Bronze Dragon","15","13000"],
            ["Adult Copper Dragon","14","11500"],
            ["Adult Gold Dragon","17","18000"],
            ["Adult Green Dragon","15","13000"],
            ["Adult Red Dragon","17","18000"],
            ["Adult Silver Dragon","16","15000"],
            ["Adult White Dragon","13","10000"],
            ["Air Elemental","5","1800"],
            ["Ancient Black Dragon","21","33000"],
            ["Ancient Blue Dragon","23","50000"],
            ["Ancient Brass Dragon","20","25000"],
            ["Ancient Bronze Dragon","22","41000"],
            ["Ancient Copper Dragon","21","33000"],
            ["Ancient Gold Dragon","24","62000"],
            ["Ancient Green Dragon","22","41000"],
            ["Ancient Red Dragon","24","62000"],
            ["Ancient Silver Dragon","23","50000"],
            ["Ancient White Dragon","20","25000"],
            ["Androsphinx","17","18000"],
            ["Animated Armor","1","200"],
            ["Ankheg","2","450"],
            ["Ape","½","100"],
            ["Archmage","12","8400"],
            ["Assassin","8","3900"],
            ["Awakened Shrub","0","10"],
            ["Awakened Tree","2","450"],
            ["Axe Beak","¼","50"],
            ["Azer","2","450"],
            ["Baboon","0","10"],
            ["Badger","0","10"],
            ["Balor","19","22000"],
            ["Bandit","⅛","25"],
            ["Bandit Captain","2","450"],
            ["Barbed Devil","5","1800"],
            ["Basilisk","3","700"],
            ["Bat","0","10"],
            ["Bearded Devil","3","700"],
            ["Behir","11","7200"],
            ["Berserker","2","450"],
            ["Black Bear","½","100"],
            ["Black Dragon Wyrmling","2","450"],
            ["Black Pudding","4","1100"],
            ["Blink Dog","¼","50"],
            ["Blood Hawk","⅛","25"],
            ["Blue Dragon Wyrmling","3","700"],
            ["Boar","¼","50"],
            ["Bone Devil","9","5000"],
            ["Brass Dragon Wyrmling","1","200"],
            ["Bronze Dragon Wyrmling","2","450"],
            ["Brown Bear","1","200"],
            ["Bugbear","1","200"],
            ["Bulette","5","1800"],
            ["Camel","⅛","25"],
            ["Cat","0","10"],
            ["Centaur","2","450"],
            ["Chain Devil","8","3900"],
            ["Chimera","6","2300"],
            ["Chuul","4","1100"],
            ["Clay Golem","9","5000"],
            ["Cloaker","8","3900"],
            ["Cloud Giant","9","5000"],
            ["Cockatrice","½","100"],
            ["Commoner","0","10"],
            ["Constrictor Snake","¼","50"],
            ["Copper Dragon Wyrmling","1","200"],
            ["Couatl","4","1100"],
            ["Crab","0","10"],
            ["Crocodile","½","100"],
            ["Cult Fanatic","2","450"],
            ["Cultist","⅛","25"],
            ["Darkmantle","½","100"],
            ["Death Dog","1","200"],
            ["Deep Gnome","Svirfneblin)","½","100"],
            ["Deer","0","10"],
            ["Deva","10","5900"],
            ["Dire Wolf","1","200"],
            ["Diseased Giant Rat","⅛","25"],
            ["Djinni","11","7200"],
            ["Doppelganger","3","700"],
            ["Draft Horse","¼","50"],
            ["Dragon Turtle","17","18000"],
            ["Dretch","¼","50"],
            ["Drider","6","2300"],
            ["Drow","¼","50"],
            ["Druid","2","450"],
            ["Dryad","1","200"],
            ["Duergar","1","200"],
            ["Dust Mephit","½","100"],
            ["Eagle","0","10"],
            ["Earth Elemental","5","1800"],
            ["Efreeti","11","7200"],
            ["Elephant","4","1100"],
            ["Elk","¼","50"],
            ["Erinyes","12","8400"],
            ["Ettercap","2","450"],
            ["Ettin","4","1100"],
            ["Fire Elemental","5","1800"],
            ["Fire Giant","9","5000"],
            ["Flesh Golem","5","1800"],
            ["Flying Snake","⅛","25"],
            ["Flying Sword","¼","50"],
            ["Frog","0","10"],
            ["Frost Giant","8","3900"],
            ["Gargoyle","2","450"],
            ["Gelatinous Cube","2","450"],
            ["Ghast","2","450"],
            ["Ghost","4","1100"],
            ["Ghoul","1","200"],
            ["Giant Ape","7","2900"],
            ["Giant Badger","¼","50"],
            ["Giant Bat","¼","50"],
            ["Giant Boar","2","450"],
            ["Giant Centipede","¼","50"],
            ["Giant Constrictor Snake","2","450"],
            ["Giant Crab","⅛","25"],
            ["Giant Crocodile","5","1800"],
            ["Giant Eagle","1","200"],
            ["Giant Elk","2","450"],
            ["Giant Fire Beetle","0","10"],
            ["Giant Frog","¼","50"],
            ["Giant Goat","½","100"],
            ["Giant Hyena","1","200"],
            ["Giant Lizard","¼","50"],
            ["Giant Octopus","1","200"],
            ["Giant Owl","¼","50"],
            ["Giant Poisonous Snake","¼","50"],
            ["Giant Rat","⅛","25"],
            ["Giant Scorpion","3","700"],
            ["Giant Sea Horse","½","100"],
            ["Giant Shark","5","1800"],
            ["Giant Spider","1","200"],
            ["Giant Toad","1","200"],
            ["Giant Vulture","1","200"],
            ["Giant Wasp","½","100"],
            ["Giant Weasel","⅛","25"],
            ["Giant Wolf Spider","¼","50"],
            ["Gibbering Mouther","2","450"],
            ["Glabrezu","9","5000"],
            ["Gladiator","5","1800"],
            ["Gnoll","½","100"],
            ["Goat","0","10"],
            ["Goblin","¼","50"],
            ["Gold Dragon Wyrmling","3","700"],
            ["Gorgon","5","1800"],
            ["Gray Ooze","½","100"],
            ["Green Dragon Wyrmling","2","450"],
            ["Green Hag","3","700"],
            ["Grick","2","450"],
            ["Griffon","2","450"],
            ["Grimlock","¼","50"],
            ["Guard","⅛","25"],
            ["Guardian Naga","10","5900"],
            ["Gynosphinx","11","7200"],
            ["Half-Red Dragon Veteran","5","1800"],
            ["Harpy","1","200"],
            ["Hawk","0","10"],
            ["Hell Hound","3","700"],
            ["Hezrou","8","3900"],
            ["Hill Giant","5","1800"],
            ["Hippogriff","1","200"],
            ["Hobgoblin","½","100"],
            ["Homunculus","0","10"],
            ["Horned Devil","11","7200"],
            ["Hunter Shark","2","450"],
            ["Hydra","8","3900"],
            ["Hyena","0","10"],
            ["Ice Devil","14","11500"],
            ["Ice Mephit","½","100"],
            ["Imp","1","200"],
            ["Invisible Stalker","6","2300"],
            ["Iron Golem","16","15000"],
            ["Jackal","0","10"],
            ["Killer Whale","3","700"],
            ["Knight","3","700"],
            ["Kobold","⅛","25"],
            ["Kraken","23","50000"],
            ["Lamia","4","1100"],
            ["Lemure","0","10"],
            ["Lich","21","33000"],
            ["Lion","1","200"],
            ["Lizard","0","10"],
            ["Lizardfolk","½","100"],
            ["Mage","6","2300"],
            ["Magma Mephit","½","100"],
            ["Magmin","½","100"],
            ["Mammoth","6","2300"],
            ["Manticore","3","700"],
            ["Marilith","16","15000"],
            ["Mastiff","⅛","25"],
            ["Medusa","6","2300"],
            ["Merfolk","⅛","25"],
            ["Merrow","2","450"],
            ["Mimic","2","450"],
            ["Minotaur","3","700"],
            ["Minotaur Skeleton","2","450"],
            ["Mule","⅛","25"],
            ["Mummy","3","700"],
            ["Mummy Lord","15","13000"],
            ["Nalfeshnee","13","10000"],
            ["Night Hag","5","1800"],
            ["Nightmare","3","700"],
            ["Noble","⅛","25"],
            ["Ochre Jelly","2","450"],
            ["Octopus","0","10"],
            ["Ogre","2","450"],
            ["Ogre Zombie","2","450"],
            ["Oni","7","2900"],
            ["Orc","½","100"],
            ["Otyugh","5","1800"],
            ["Owl","0","10"],
            ["Owlbear","3","700"],
            ["Panther","¼","50"],
            ["Pegasus","2","450"],
            ["Phase Spider","3","700"],
            ["Pit Fiend","20","25000"],
            ["Planetar","16","15000"],
            ["Plesiosaurus","2","450"],
            ["Poisonous Snake","⅛","25"],
            ["Polar Bear","2","450"],
            ["Pony","⅛","25"],
            ["Priest","2","450"],
            ["Pseudodragon","¼","50"],
            ["Purple Worm","15","13000"],
            ["Quasit","1","200"],
            ["Quipper","0","10"],
            ["Rakshasa","13","10000"],
            ["Rat","0","10"],
            ["Raven","0","10"],
            ["Red Dragon Wyrmling","4","1100"],
            ["Reef Shark","½","100"],
            ["Remorhaz","11","7200"],
            ["Rhinoceros","2","450"],
            ["Riding Horse","¼","50"],
            ["Roc","11","7200"],
            ["Roper","5","1800"],
            ["Rug of Smothering","2","450"],
            ["Rust Monster","½","100"],
            ["Saber-Toothed Tiger","2","450"],
            ["Sahuagin","½","100"],
            ["Salamander","5","1800"],
            ["Satyr","½","100"],
            ["Scorpion","0","10"],
            ["Scout","½","100"],
            ["Sea Hag","2","450"],
            ["Sea Horse","0","10"],
            ["Shadow","½","100"],
            ["Shambling Mound","5","1800"],
            ["Shield Guardian","7","2900"],
            ["Shrieker","0","10"],
            ["Silver Dragon Wyrmling","2","450"],
            ["Skeleton","¼","50"],
            ["Solar","21","33000"],
            ["Specter","1","200"],
            ["Spider","0","10"],
            ["Spirit Naga","8","3900"],
            ["Sprite","¼","50"],
            ["Spy","1","200"],
            ["Steam Mephit","¼","50"],
            ["Stirge","⅛","25"],
            ["Stone Giant","7","2900"],
            ["Stone Golem","10","5900"],
            ["Storm Giant","13","10000"],
            ["Succubus","Incubus)","4","1100"],
            ["Swarm of Bats","¼","50"],
            ["Swarm of Beetles","½","100"],
            ["Swarm of Centipedes","½","100"],
            ["Swarm of Insects","½","100"],
            ["Swarm of Poisonous Snakes","2","450"],
            ["Swarm of Quippers","1","200"],
            ["Swarm of Rats","¼","50"],
            ["Swarm of Ravens","¼","50"],
            ["Swarm of Spiders","½","100"],
            ["Swarm of Wasps","½","100"],
            ["Tarrasque","30","155000"],
            ["Thug","½","100"],
            ["Tiger","1","200"],
            ["Treant","9","5000"],
            ["Tribal Warrior","⅛","25"],
            ["Triceratops","5","1800"],
            ["Troll","5","1800"],
            ["Tyrannosaurus Rex","8","3900"],
            ["Unicorn","5","1800"],
            ["Vampire","13","10000"],
            ["Vampire Spawn","5","1800"],
            ["Veteran","3","700"],
            ["Violet Fungus","¼","50"],
            ["Vrock","6","2300"],
            ["Vulture","0","10"],
            ["Warhorse","½","100"],
            ["Warhorse Skeleton","½","100"],
            ["Water Elemental","5","1800"],
            ["Weasel","0","10"],
            ["Werebear","5","1800"],
            ["Wereboar","4","1100"],
            ["Wererat","2","450"],
            ["Weretiger","4","1100"],
            ["Werewolf","3","700"],
            ["White Dragon Wyrmling","2","450"],
            ["Wight","3","700"],
            ["Will-o'-Wisp","2","450"],
            ["Winter Wolf","3","700"],
            ["Wolf","¼","50"],
            ["Worg","½","100"],
            ["Wraith","5","1800"],
            ["Wyvern","6","2300"],
            ["Xorn","5","1800"],
            ["Young Black Dragon","7","2900"],
            ["Young Blue Dragon","9","5000"],
            ["Young Brass Dragon","6","2300"],
            ["Young Bronze Dragon","8","3900"],
            ["Young Copper Dragon","7","2900"],
            ["Young Gold Dragon","10","5900"],
            ["Young Green Dragon","8","3900"],
            ["Young Red Dragon","10","5900"],
            ["Young Silver Dragon","9","5000"],
            ["Young White Dragon","6","2300"],
            ["Zombie","¼","50"]
        ];

    if(monsterCR == "all"){
        monsterID = randomInt(0,monstersDetails.length);
        return monstersDetails[monsterID];
    }
    else{
        monstersDetails.forEach(function(value){
            if("CR " + value[1] == monsterCR){
                console.log("option");
                monstersDetailsFiltered.push(value);
            }
        });

        if(monstersDetailsFiltered.length == 0){
            return 0;
        }
        else{
            monsterID = randomInt(0,monstersDetailsFiltered.length);
            return monstersDetailsFiltered[monsterID];
        }
    }
}

var items = [
    ["Abacus","/compendium/dnd5e/Abacus","Adventuring Gear"],
    ["Acid","/compendium/dnd5e/Acid","Adventuring Gear (consumable)"],
    ["Adamantine Armor","/compendium/dnd5e/Adamantine Armor","Armor (medium or heavy, but not hide)"],
    ["Alchemist's Fire","/compendium/dnd5e/Alchemist's Fire","Adventuring Gear (consumable)"],
    ["Alchemist's Supplies","/compendium/dnd5e/Alchemist's Supplies","Adventuring Gear (artisan's tools)"],
    ["Amulet","/compendium/dnd5e/Amulet","Adventuring Gear (neck)"],
    ["Amulet of Health","/compendium/dnd5e/Amulet of Health","Adventuring Gear (wondrous item, neck)"],
    ["Amulet of Proof against Detection and Location","/compendium/dnd5e/Amulet of Proof against Detection and Location","Adventuring Gear (wondrous item, neck)"],
    ["Amulet of the Planes","/compendium/dnd5e/Amulet of the Planes","Adventuring Gear (wondrous item, neck)"],
    ["Animated Shield","/compendium/dnd5e/Animated Shield","Shield (shield)"],
    ["Antitoxin","/compendium/dnd5e/Antitoxin","Adventuring Gear (consumable)"],
    ["Apparatus of the Crab","/compendium/dnd5e/Apparatus of the Crab","Adventuring Gear (wondrous item)"],
    ["Armor of Invulnerability","/compendium/dnd5e/Armor of Invulnerability","Heavy Armor (armor)"],
    ["Armor of Vulnerability","/compendium/dnd5e/Armor of Vulnerability","Heavy Armor (cursed item, armor)"],
    ["Arrow of Slaying","/compendium/dnd5e/Arrow of Slaying","Ammunition (ammunition)"],
    ["Arrow-Catching Shield","/compendium/dnd5e/Arrow-Catching Shield","Shield (shield)"],
    ["Arrows","/compendium/dnd5e/Arrows","Ammunition (ammunition)"],
    ["Arrows +1","/compendium/dnd5e/Arrows +1","Ammunition"],
    ["Arrows +2","/compendium/dnd5e/Arrows +2","Ammunition"],
    ["Arrows +3","/compendium/dnd5e/Arrows +3","Ammunition"],
    ["Backpack","/compendium/dnd5e/Backpack","Adventuring Gear (container)"],
    ["Bag of Beans","/compendium/dnd5e/Bag of Beans","Adventuring Gear (wondrous item)"],
    ["Bag of Devouring","/compendium/dnd5e/Bag of Devouring","Adventuring Gear (wondrous item)"],
    ["Bag of Holding","/compendium/dnd5e/Bag of Holding","Adventuring Gear (wondrous item)"],
    ["Bag of Tricks","/compendium/dnd5e/Bag of Tricks","Adventuring Gear (wondrous item)"],
    ["Bagpipes","/compendium/dnd5e/Bagpipes","Adventuring Gear (musical instrument)"],
    ["Ball bearings","/compendium/dnd5e/Ball bearings","Adventuring Gear"],
    ["Barrel","/compendium/dnd5e/Barrel","Adventuring Gear"],
    ["Basic poison","/compendium/dnd5e/Basic poison","Adventuring Gear (consumable)"],
    ["Basket","/compendium/dnd5e/Basket","Adventuring Gear (container)"],
    ["Battleaxe","/compendium/dnd5e/Battleaxe","Melee Weapon (martial, axe)"],
    ["Battleaxe +1","/compendium/dnd5e/Battleaxe +1","Melee Weapon"],
    ["Battleaxe +2","/compendium/dnd5e/Battleaxe +2","Melee Weapon"],
    ["Battleaxe +3","/compendium/dnd5e/Battleaxe +3","Melee Weapon"],
    ["Bead of Force","/compendium/dnd5e/Bead of Force","Adventuring Gear (wondrous item)"],
    ["Bedroll","/compendium/dnd5e/Bedroll","Adventuring Gear"],
    ["Bell","/compendium/dnd5e/Bell","Adventuring Gear"],
    ["Belt of Dwarvenkind","/compendium/dnd5e/Belt of Dwarvenkind","Adventuring Gear (wondrous item, belt)"],
    ["Belt of Giant Strength","/compendium/dnd5e/Belt of Giant Strength","Adventuring Gear (wondrous item, belt)"],
    ["Berserker Axe","/compendium/dnd5e/Berserker Axe","Weapon (any axe)"],
    ["Blanket","/compendium/dnd5e/Blanket","Adventuring Gear"],
    ["Block and tackle","/compendium/dnd5e/Block and tackle","Adventuring Gear"],
    ["Blowgun","/compendium/dnd5e/Blowgun","Ranged Weapon (martial, blowgun)"],
    ["Blowgun +1","/compendium/dnd5e/Blowgun +1","Ranged Weapon"],
    ["Blowgun +2","/compendium/dnd5e/Blowgun +2","Ranged Weapon"],
    ["Blowgun +3","/compendium/dnd5e/Blowgun +3","Ranged Weapon"],
    ["Blowgun Needles","/compendium/dnd5e/Blowgun Needles","Ammunition (ammunition)"],
    ["Book","/compendium/dnd5e/Book","Adventuring Gear"],
    ["Boots of Elvenkind","/compendium/dnd5e/Boots of Elvenkind","Adventuring Gear (wondrous item, feet)"],
    ["Boots of Levitation","/compendium/dnd5e/Boots of Levitation","Adventuring Gear (wondrous item, feet)"],
    ["Boots of Speed","/compendium/dnd5e/Boots of Speed","Adventuring Gear (wondrous item, feet)"],
    ["Boots of Striding and Springing","/compendium/dnd5e/Boots of Striding and Springing","Adventuring Gear (wondrous item, feet)"],
    ["Boots of the Winterlands","/compendium/dnd5e/Boots of the Winterlands","Adventuring Gear (wondrous item, feet)"],
    ["Bowl of Commanding Water Elementals","/compendium/dnd5e/Bowl of Commanding Water Elementals","Adventuring Gear (wondrous item)"],
    ["Bracers of Archery","/compendium/dnd5e/Bracers of Archery","Adventuring Gear (wondrous item, arms)"],
    ["Bracers of Defense","/compendium/dnd5e/Bracers of Defense","Adventuring Gear (wondrous item, arms)"],
    ["Brazier of Commanding Fire Elementals","/compendium/dnd5e/Brazier of Commanding Fire Elementals","Adventuring Gear (wondrous item)"],
    ["Breastplate","/compendium/dnd5e/Breastplate","Medium Armor (armor)"],
    ["Breastplate +1","/compendium/dnd5e/Breastplate +1","Medium Armor"],
    ["Breastplate +2","/compendium/dnd5e/Breastplate +2","Medium Armor"],
    ["Breastplate +3","/compendium/dnd5e/Breastplate +3","Medium Armor"],
    ["Breastplate of Acid Resistance","/compendium/dnd5e/Breastplate of Acid Resistance","Medium Armor"],
    ["Breastplate of Cold Resistance","/compendium/dnd5e/Breastplate of Cold Resistance","Medium Armor"],
    ["Breastplate of Fire Resistance","/compendium/dnd5e/Breastplate of Fire Resistance","Medium Armor"],
    ["Breastplate of Force Resistance","/compendium/dnd5e/Breastplate of Force Resistance","Medium Armor"],
    ["Breastplate of Lightning Resistance","/compendium/dnd5e/Breastplate of Lightning Resistance","Medium Armor"],
    ["Breastplate of Necrotic Resistance","/compendium/dnd5e/Breastplate of Necrotic Resistance","Medium Armor"],
    ["Breastplate of Poison Resistance","/compendium/dnd5e/Breastplate of Poison Resistance","Medium Armor"],
    ["Breastplate of Psychic Resistance","/compendium/dnd5e/Breastplate of Psychic Resistance","Medium Armor"],
    ["Breastplate of Radiant Resistance","/compendium/dnd5e/Breastplate of Radiant Resistance","Medium Armor"],
    ["Breastplate of Thunder Resistance","/compendium/dnd5e/Breastplate of Thunder Resistance","Medium Armor"],
    ["Brewer's Supplies","/compendium/dnd5e/Brewer's Supplies","Adventuring Gear (artisan's tools)"],
    ["Brooch of Shielding","/compendium/dnd5e/Brooch of Shielding","Adventuring Gear (wondrous item)"],
    ["Broom of Flying","/compendium/dnd5e/Broom of Flying","Adventuring Gear (wondrous item)"],
    ["Bucket","/compendium/dnd5e/Bucket","Adventuring Gear"],
    ["Bullseye lantern","/compendium/dnd5e/Bullseye lantern","Adventuring Gear"],
    ["Burglar's Pack","/compendium/dnd5e/Burglar's Pack","(equipment pack)"],
    ["Calligrapher's Supplies","/compendium/dnd5e/Calligrapher's Supplies","Adventuring Gear (artisan's tools)"],
    ["Caltrops","/compendium/dnd5e/Caltrops","Adventuring Gear"],
    ["Candle","/compendium/dnd5e/Candle","Adventuring Gear"],
    ["Candle of Invocation","/compendium/dnd5e/Candle of Invocation","Adventuring Gear (wondrous item)"],
    ["Cape of the Mountebank","/compendium/dnd5e/Cape of the Mountebank","Adventuring Gear (wondrous item, shoulders, cape)"],
    ["Carpenter's Tools","/compendium/dnd5e/Carpenter's Tools","Adventuring Gear (artisan's tools)"],
    ["Carpet of Flying","/compendium/dnd5e/Carpet of Flying","Adventuring Gear (wondrous item)"],
    ["Cartographer's Tools","/compendium/dnd5e/Cartographer's Tools","Adventuring Gear (artisan's tools)"],
    ["Censer of Controlling Air Elementals","/compendium/dnd5e/Censer of Controlling Air Elementals","Adventuring Gear (wondrous item)"],
    ["Chain","/compendium/dnd5e/Chain","Adventuring Gear"],
    ["Chain Mail","/compendium/dnd5e/Chain Mail","Heavy Armor (armor)"],
    ["Chain Mail +1","/compendium/dnd5e/Chain Mail +1","Heavy Armor"],
    ["Chain Mail +2","/compendium/dnd5e/Chain Mail +2","Heavy Armor"],
    ["Chain Mail +3","/compendium/dnd5e/Chain Mail +3","Heavy Armor"],
    ["Chain Mail of Acid Resistance","/compendium/dnd5e/Chain Mail of Acid Resistance","Heavy Armor"],
    ["Chain Mail of Cold Resistance","/compendium/dnd5e/Chain Mail of Cold Resistance","Heavy Armor"],
    ["Chain Mail of Fire Resistance","/compendium/dnd5e/Chain Mail of Fire Resistance","Heavy Armor"],
    ["Chain Mail of Force Resistance","/compendium/dnd5e/Chain Mail of Force Resistance","Heavy Armor"],
    ["Chain Mail of Lightning Resistance","/compendium/dnd5e/Chain Mail of Lightning Resistance","Heavy Armor"],
    ["Chain Mail of Necrotic Resistance","/compendium/dnd5e/Chain Mail of Necrotic Resistance","Heavy Armor"],
    ["Chain Mail of Poison Resistance","/compendium/dnd5e/Chain Mail of Poison Resistance","Heavy Armor"],
    ["Chain Mail of Psychic Resistance","/compendium/dnd5e/Chain Mail of Psychic Resistance","Heavy Armor"],
    ["Chain Mail of Radiant Resistance","/compendium/dnd5e/Chain Mail of Radiant Resistance","Heavy Armor"],
    ["Chain Mail of Thunder Resistance","/compendium/dnd5e/Chain Mail of Thunder Resistance","Heavy Armor"],
    ["Chain Shirt","/compendium/dnd5e/Chain Shirt","Medium Armor (armor)"],
    ["Chain Shirt +1","/compendium/dnd5e/Chain Shirt +1","Medium Armor"],
    ["Chain Shirt +2","/compendium/dnd5e/Chain Shirt +2","Medium Armor"],
    ["Chain Shirt +3","/compendium/dnd5e/Chain Shirt +3","Medium Armor"],
    ["Chain Shirt of Acid Resistance","/compendium/dnd5e/Chain Shirt of Acid Resistance","Medium Armor"],
    ["Chain Shirt of Cold Resistance","/compendium/dnd5e/Chain Shirt of Cold Resistance","Medium Armor"],
    ["Chain Shirt of Fire Resistance","/compendium/dnd5e/Chain Shirt of Fire Resistance","Medium Armor"],
    ["Chain Shirt of Force Resistance","/compendium/dnd5e/Chain Shirt of Force Resistance","Medium Armor"],
    ["Chain Shirt of Lightning Resistance","/compendium/dnd5e/Chain Shirt of Lightning Resistance","Medium Armor"],
    ["Chain Shirt of Necrotic Resistance","/compendium/dnd5e/Chain Shirt of Necrotic Resistance","Medium Armor"],
    ["Chain Shirt of Poison Resistance","/compendium/dnd5e/Chain Shirt of Poison Resistance","Medium Armor"],
    ["Chain Shirt of Psychic Resistance","/compendium/dnd5e/Chain Shirt of Psychic Resistance","Medium Armor"],
    ["Chain Shirt of Radiant Resistance","/compendium/dnd5e/Chain Shirt of Radiant Resistance","Medium Armor"],
    ["Chain Shirt of Thunder Resistance","/compendium/dnd5e/Chain Shirt of Thunder Resistance","Medium Armor"],
    ["Chalk","/compendium/dnd5e/Chalk","Adventuring Gear"],
    ["Chest","/compendium/dnd5e/Chest","Adventuring Gear"],
    ["Chime of Opening","/compendium/dnd5e/Chime of Opening","Adventuring Gear (wondrous item)"],
    ["Circlet of Blasting","/compendium/dnd5e/Circlet of Blasting","Adventuring Gear (wondrous item, head)"],
    ["Climber's kit","/compendium/dnd5e/Climber's kit","Adventuring Gear"],
    ["Cloak of Arachnida","/compendium/dnd5e/Cloak of Arachnida","Adventuring Gear (wondrous item, shoulders)"],
    ["Cloak of Displacement","/compendium/dnd5e/Cloak of Displacement","Adventuring Gear (wondrous item, shoulders)"],
    ["Cloak of Elvenkind","/compendium/dnd5e/Cloak of Elvenkind","Adventuring Gear (wondrous item, shoulders)"],
    ["Cloak of Protection","/compendium/dnd5e/Cloak of Protection","Adventuring Gear (wondrous item, shoulders)"],
    ["Cloak of the Bat","/compendium/dnd5e/Cloak of the Bat","Adventuring Gear (wondrous item, shoulders)"],
    ["Cloak of the Manta Ray","/compendium/dnd5e/Cloak of the Manta Ray","Adventuring Gear (wondrous item, shoulders)"],
    ["Club","/compendium/dnd5e/Club","Melee Weapon (simple)"],
    ["Club +1","/compendium/dnd5e/Club +1","Melee Weapon"],
    ["Club +2","/compendium/dnd5e/Club +2","Melee Weapon"],
    ["Club +3","/compendium/dnd5e/Club +3","Melee Weapon"],
    ["Cobbler's Tools","/compendium/dnd5e/Cobbler's Tools","Adventuring Gear (artisan's tools)"],
    ["Common clothes","/compendium/dnd5e/Common clothes","Adventuring Gear (clothing)"],
    ["Component pouch","/compendium/dnd5e/Component pouch","Adventuring Gear"],
    ["Cook's utensils","/compendium/dnd5e/Cook's utensils","Adventuring Gear (artisan's tools)"],
    ["Costume clothes","/compendium/dnd5e/Costume clothes","Adventuring Gear (clothing)"],
    ["Crossbow bolt case","/compendium/dnd5e/Crossbow bolt case","Adventuring Gear"],
    ["Crossbow bolts","/compendium/dnd5e/Crossbow bolts","Ammunition (ammunition)"],
    ["Crowbar","/compendium/dnd5e/Crowbar","Adventuring Gear"],
    ["Crystal","/compendium/dnd5e/Crystal","Adventuring Gear (arcane focus)"],
    ["Crystal Ball","/compendium/dnd5e/Crystal Ball","Adventuring Gear (wondrous item)"],
    ["Cube of Force","/compendium/dnd5e/Cube of Force","Adventuring Gear (wondrous item)"],
    ["Cubic Gate","/compendium/dnd5e/Cubic Gate","Adventuring Gear (wondrous item)"],
    ["Dagger","/compendium/dnd5e/Dagger","Melee Weapon (simple, dagger)"],
    ["Dagger +1","/compendium/dnd5e/Dagger +1","Melee Weapon"],
    ["Dagger +2","/compendium/dnd5e/Dagger +2","Melee Weapon"],
    ["Dagger +3","/compendium/dnd5e/Dagger +3","Melee Weapon"],
    ["Dagger of Venom","/compendium/dnd5e/Dagger of Venom","Melee Weapon (simple, dagger)"],
    ["Dancing Sword","/compendium/dnd5e/Dancing Sword","Weapon (any sword) (sword)"],
    ["Dart","/compendium/dnd5e/Dart","Ranged Weapon (simple)"],
    ["Dart +1","/compendium/dnd5e/Dart +1","Ranged Weapon"],
    ["Dart +2","/compendium/dnd5e/Dart +2","Ranged Weapon"],
    ["Dart +3","/compendium/dnd5e/Dart +3","Ranged Weapon"],
    ["Decanter of Endless Water","/compendium/dnd5e/Decanter of Endless Water","Adventuring Gear (wondrous item)"],
    ["Deck of Illusions","/compendium/dnd5e/Deck of Illusions","Adventuring Gear (wondrous item)"],
    ["Deck of Many Things","/compendium/dnd5e/Deck of Many Things","Adventuring Gear (wondrous item)"],
    ["Defender","/compendium/dnd5e/Defender","Weapon (any sword) (sword)"],
    ["Demon Armor","/compendium/dnd5e/Demon Armor","Heavy Armor (cursed item, armor)"],
    ["Dice set","/compendium/dnd5e/Dice set","Adventuring Gear (gaming set)"],
    ["Dimensional Shackles","/compendium/dnd5e/Dimensional Shackles","Adventuring Gear (wondrous item)"],
    ["Diplomat's Pack","/compendium/dnd5e/Diplomat's Pack","(equipment pack)"],
    ["Disguise kit","/compendium/dnd5e/Disguise kit","Adventuring Gear (artisan's tools)"],
    ["Dragon Scale Mail","/compendium/dnd5e/Dragon Scale Mail","Medium Armor"],
    ["Dragon Slayer","/compendium/dnd5e/Dragon Slayer","Weapon (any sword) (sword)"],
    ["Drum","/compendium/dnd5e/Drum","Adventuring Gear (musical instrument)"],
    ["Dulcimer","/compendium/dnd5e/Dulcimer","Adventuring Gear (musical instrument)"],
    ["Dungeoneer's Pack","/compendium/dnd5e/Dungeoneer's Pack","(equipment pack)"],
    ["Dust of Disappearance","/compendium/dnd5e/Dust of Disappearance","Adventuring Gear (wondrous item)"],
    ["Dust of Dryness","/compendium/dnd5e/Dust of Dryness","Adventuring Gear (wondrous item)"],
    ["Dust of Sneezing and Choking","/compendium/dnd5e/Dust of Sneezing and Choking","Adventuring Gear (wondrous item)"],
    ["Dwarven Plate","/compendium/dnd5e/Dwarven Plate","Heavy Armor (armor)"],
    ["Dwarven Thrower","/compendium/dnd5e/Dwarven Thrower","Melee Weapon"],
    ["Efficient Quiver","/compendium/dnd5e/Efficient Quiver","Adventuring Gear (wondrous item)"],
    ["Efreeti Bottle","/compendium/dnd5e/Efreeti Bottle","Adventuring Gear (wondrous item)"],
    ["Elemental Gem","/compendium/dnd5e/Elemental Gem","Adventuring Gear"],
    ["Elven Chain","/compendium/dnd5e/Elven Chain","Medium Armor (armor)"],
    ["Embelm","/compendium/dnd5e/Embelm","Adventuring Gear"],
    ["Emblem","/compendium/dnd5e/Emblem","Adventuring Gear"],
    ["Entertainer's Pack","/compendium/dnd5e/Entertainer's Pack","(equipment pack)"],
    ["Eversmoking Bottle","/compendium/dnd5e/Eversmoking Bottle","Adventuring Gear (wondrous item)"],
    ["Explorer's Pack","/compendium/dnd5e/Explorer's Pack","(equipment pack)"],
    ["Eyes of Charming","/compendium/dnd5e/Eyes of Charming","Adventuring Gear (wondrous item, eyes)"],
    ["Eyes of Minute Seeing","/compendium/dnd5e/Eyes of Minute Seeing","Adventuring Gear (wondrous item, eyes)"],
    ["Eyes of the Eagle","/compendium/dnd5e/Eyes of the Eagle","Adventuring Gear (wondrous item, eyes)"],
    ["Feather Token","/compendium/dnd5e/Feather Token","Adventuring Gear"],
    ["Figurine of Wondrous Power","/compendium/dnd5e/Figurine of Wondrous Power","Adventuring Gear"],
    ["Fine clothes","/compendium/dnd5e/Fine clothes","Adventuring Gear (clothing)"],
    ["Fishing tackle","/compendium/dnd5e/Fishing tackle","Adventuring Gear"],
    ["Flail","/compendium/dnd5e/Flail","Melee Weapon (martial, flail)"],
    ["Flail +1","/compendium/dnd5e/Flail +1","Melee Weapon"],
    ["Flail +2","/compendium/dnd5e/Flail +2","Melee Weapon"],
    ["Flail +3","/compendium/dnd5e/Flail +3","Melee Weapon"],
    ["Flame Tongue","/compendium/dnd5e/Flame Tongue","Weapon (any sword)"],
    ["Flask","/compendium/dnd5e/Flask","Adventuring Gear"],
    ["Flute","/compendium/dnd5e/Flute","Adventuring Gear (musical instrument)"],
    ["Folding Boat","/compendium/dnd5e/Folding Boat","Adventuring Gear (wondrous item)"],
    ["Forgery kit","/compendium/dnd5e/Forgery kit","Adventuring Gear (artisan's tools)"],
    ["Frost Brand","/compendium/dnd5e/Frost Brand","Weapon (any sword)"],
    ["Gauntlets of Ogre Power","/compendium/dnd5e/Gauntlets of Ogre Power","Adventuring Gear (wondrous item, hands)"],
    ["Gem of Brightness","/compendium/dnd5e/Gem of Brightness","Adventuring Gear (wondrous item)"],
    ["Gem of Seeing","/compendium/dnd5e/Gem of Seeing","Adventuring Gear (wondrous item)"],
    ["Giant Slayer","/compendium/dnd5e/Giant Slayer","Weapon (any axe or sword)"],
    ["Glaive","/compendium/dnd5e/Glaive","Melee Weapon (martial, glaive)"],
    ["Glaive +1","/compendium/dnd5e/Glaive +1","Melee Weapon"],
    ["Glaive +2","/compendium/dnd5e/Glaive +2","Melee Weapon"],
    ["Glaive +3","/compendium/dnd5e/Glaive +3","Melee Weapon"],
    ["Glamoured Studded Leather","/compendium/dnd5e/Glamoured Studded Leather","Light Armor (armor)"],
    ["Glass bottle","/compendium/dnd5e/Glass bottle","Adventuring Gear"],
    ["Glassblower's Tools","/compendium/dnd5e/Glassblower's Tools","Adventuring Gear (artisan's tools)"],
    ["Gloves of Missile Snaring","/compendium/dnd5e/Gloves of Missile Snaring","Adventuring Gear (wondrous item, hands)"],
    ["Gloves of Swimming and Climbing","/compendium/dnd5e/Gloves of Swimming and Climbing","Adventuring Gear (wondrous item, hands)"],
    ["Goggles of Night","/compendium/dnd5e/Goggles of Night","Adventuring Gear (wondrous item, eyes)"],
    ["Grappling hook","/compendium/dnd5e/Grappling hook","Adventuring Gear"],
    ["Greataxe","/compendium/dnd5e/Greataxe","Melee Weapon (martial, axe)"],
    ["Greataxe +1","/compendium/dnd5e/Greataxe +1","Melee Weapon"],
    ["Greataxe +2","/compendium/dnd5e/Greataxe +2","Melee Weapon"],
    ["Greataxe +3","/compendium/dnd5e/Greataxe +3","Melee Weapon"],
    ["Greatclub","/compendium/dnd5e/Greatclub","Melee Weapon (simple, club)"],
    ["Greatclub +1","/compendium/dnd5e/Greatclub +1","Melee Weapon"],
    ["Greatclub +2","/compendium/dnd5e/Greatclub +2","Melee Weapon"],
    ["Greatclub +3","/compendium/dnd5e/Greatclub +3","Melee Weapon"],
    ["Greatsword","/compendium/dnd5e/Greatsword","Melee Weapon (martial, sword)"],
    ["Greatsword +1","/compendium/dnd5e/Greatsword +1","Melee Weapon"],
    ["Greatsword +2","/compendium/dnd5e/Greatsword +2","Melee Weapon"],
    ["Greatsword +3","/compendium/dnd5e/Greatsword +3","Melee Weapon"],
    ["Halberd","/compendium/dnd5e/Halberd","Melee Weapon (martial, halberd)"],
    ["Halberd +1","/compendium/dnd5e/Halberd +1","Melee Weapon"],
    ["Halberd +2","/compendium/dnd5e/Halberd +2","Melee Weapon"],
    ["Halberd +3","/compendium/dnd5e/Halberd +3","Melee Weapon"],
    ["Half Plate","/compendium/dnd5e/Half Plate","Medium Armor (armor)"],
    ["Half Plate Armor +1","/compendium/dnd5e/Half Plate Armor +1","Medium Armor"],
    ["Half Plate Armor +2","/compendium/dnd5e/Half Plate Armor +2","Medium Armor"],
    ["Half Plate Armor +3","/compendium/dnd5e/Half Plate Armor +3","Medium Armor"],
    ["Half Plate Armor of Acid Resistance","/compendium/dnd5e/Half Plate Armor of Acid Resistance","Medium Armor"],
    ["Half Plate Armor of Cold Resistance","/compendium/dnd5e/Half Plate Armor of Cold Resistance","Medium Armor"],
    ["Half Plate Armor of Fire Resistance","/compendium/dnd5e/Half Plate Armor of Fire Resistance","Medium Armor"],
    ["Half Plate Armor of Force Resistance","/compendium/dnd5e/Half Plate Armor of Force Resistance","Medium Armor"],
    ["Half Plate Armor of Lightning Resistance","/compendium/dnd5e/Half Plate Armor of Lightning Resistance","Medium Armor"],
    ["Half Plate Armor of Necrotic Resistance","/compendium/dnd5e/Half Plate Armor of Necrotic Resistance","Medium Armor"],
    ["Half Plate Armor of Poison Resistance","/compendium/dnd5e/Half Plate Armor of Poison Resistance","Medium Armor"],
    ["Half Plate Armor of Psychic Resistance","/compendium/dnd5e/Half Plate Armor of Psychic Resistance","Medium Armor"],
    ["Half Plate Armor of Radiant Resistance","/compendium/dnd5e/Half Plate Armor of Radiant Resistance","Medium Armor"],
    ["Half Plate Armor of Thunder Resistance","/compendium/dnd5e/Half Plate Armor of Thunder Resistance","Medium Armor"],
    ["Hammer","/compendium/dnd5e/Hammer","Adventuring Gear"],
    ["Hammer of Thunderbolts","/compendium/dnd5e/Hammer of Thunderbolts","Melee Weapon (martial, maul, hammer)"],
    ["Hand Crossbow","/compendium/dnd5e/Hand Crossbow","Ranged Weapon (martial, crossbow)"],
    ["Hand Crossbow +1","/compendium/dnd5e/Hand Crossbow +1","Ranged Weapon"],
    ["Hand Crossbow +2","/compendium/dnd5e/Hand Crossbow +2","Ranged Weapon"],
    ["Hand Crossbow +3","/compendium/dnd5e/Hand Crossbow +3","Ranged Weapon"],
    ["Handaxe","/compendium/dnd5e/Handaxe","Melee Weapon (simple, axe)"],
    ["Handaxe +1","/compendium/dnd5e/Handaxe +1","Melee Weapon"],
    ["Handaxe +2","/compendium/dnd5e/Handaxe +2","Melee Weapon"],
    ["Handaxe +3","/compendium/dnd5e/Handaxe +3","Melee Weapon"],
    ["Handy Haversack","/compendium/dnd5e/Handy Haversack","Adventuring Gear (wondrous item)"],
    ["Hat of Disguise","/compendium/dnd5e/Hat of Disguise","Adventuring Gear (wondrous item, head)"],
    ["Headband of Intellect","/compendium/dnd5e/Headband of Intellect","Adventuring Gear (wondrous item, head)"],
    ["Healer's kit","/compendium/dnd5e/Healer's kit","Adventuring Gear"],
    ["Heartstone","/compendium/dnd5e/Heartstone","Adventuring Gear (wondrous item)"],
    ["Heavy Crossbow","/compendium/dnd5e/Heavy Crossbow","Ranged Weapon (martial, crossbow)"],
    ["Heavy Crossbow +1","/compendium/dnd5e/Heavy Crossbow +1","Ranged Weapon"],
    ["Heavy Crossbow +2","/compendium/dnd5e/Heavy Crossbow +2","Ranged Weapon"],
    ["Heavy Crossbow +3","/compendium/dnd5e/Heavy Crossbow +3","Ranged Weapon"],
    ["Helm of Brilliance","/compendium/dnd5e/Helm of Brilliance","Adventuring Gear (wondrous item, head)"],
    ["Helm of Comprehending Languages","/compendium/dnd5e/Helm of Comprehending Languages","Adventuring Gear (wondrous item, head)"],
    ["Helm of Telepathy","/compendium/dnd5e/Helm of Telepathy","Adventuring Gear (wondrous item, head)"],
    ["Helm of Teleportation","/compendium/dnd5e/Helm of Teleportation","Adventuring Gear (wondrous item, head)"],
    ["Hempen rope","/compendium/dnd5e/Hempen rope","Adventuring Gear"],
    ["Herbalism kit","/compendium/dnd5e/Herbalism kit","Adventuring Gear"],
    ["Hide Armor","/compendium/dnd5e/Hide Armor","Medium Armor (armor)"],
    ["Hide Armor +1","/compendium/dnd5e/Hide Armor +1","Medium Armor"],
    ["Hide Armor +2","/compendium/dnd5e/Hide Armor +2","Medium Armor"],
    ["Hide Armor +3","/compendium/dnd5e/Hide Armor +3","Medium Armor"],
    ["Hide Armor of Acid Resistance","/compendium/dnd5e/Hide Armor of Acid Resistance","Medium Armor"],
    ["Hide Armor of Cold Resistance","/compendium/dnd5e/Hide Armor of Cold Resistance","Medium Armor"],
    ["Hide Armor of Fire Resistance","/compendium/dnd5e/Hide Armor of Fire Resistance","Medium Armor"],
    ["Hide Armor of Force Resistance","/compendium/dnd5e/Hide Armor of Force Resistance","Medium Armor"],
    ["Hide Armor of Lightning Resistance","/compendium/dnd5e/Hide Armor of Lightning Resistance","Medium Armor"],
    ["Hide Armor of Necrotic Resistance","/compendium/dnd5e/Hide Armor of Necrotic Resistance","Medium Armor"],
    ["Hide Armor of Poison Resistance","/compendium/dnd5e/Hide Armor of Poison Resistance","Medium Armor"],
    ["Hide Armor of Psychic Resistance","/compendium/dnd5e/Hide Armor of Psychic Resistance","Medium Armor"],
    ["Hide Armor of Radiant Resistance","/compendium/dnd5e/Hide Armor of Radiant Resistance","Medium Armor"],
    ["Hide Armor of Thunder Resistance","/compendium/dnd5e/Hide Armor of Thunder Resistance","Medium Armor"],
    ["Holy Avenger","/compendium/dnd5e/Holy Avenger","Weapon (any sword)"],
    ["Holy Water","/compendium/dnd5e/Holy Water","Adventuring Gear (consumable)"],
    ["Hooded lantern","/compendium/dnd5e/Hooded lantern","Adventuring Gear"],
    ["Horn","/compendium/dnd5e/Horn","Adventuring Gear (musical instrument)"],
    ["Horn of Blasting","/compendium/dnd5e/Horn of Blasting","Adventuring Gear (wondrous item)"],
    ["Horn of Valhalla","/compendium/dnd5e/Horn of Valhalla","Adventuring Gear (wondrous item)"],
    ["Horseshoes of Speed","/compendium/dnd5e/Horseshoes of Speed","Adventuring Gear (wondrous item)"],
    ["Horseshoes of a Zephyr","/compendium/dnd5e/Horseshoes of a Zephyr","Adventuring Gear (wondrous item)"],
    ["Hourglass","/compendium/dnd5e/Hourglass","Adventuring Gear"],
    ["Hunting trap","/compendium/dnd5e/Hunting trap","Adventuring Gear"],
    ["Immovable Rod","/compendium/dnd5e/Immovable Rod","Adventuring Gear (rod)"],
    ["Ink","/compendium/dnd5e/Ink","Adventuring Gear"],
    ["Ink pen","/compendium/dnd5e/Ink pen","Adventuring Gear"],
    ["Instant Fortress","/compendium/dnd5e/Instant Fortress","Adventuring Gear (wondrous item)"],
    ["Ioun Stone","/compendium/dnd5e/Ioun Stone","Wondrous"],
    ["Iron Bands of Binding","/compendium/dnd5e/Iron Bands of Binding","Adventuring Gear (wondrous item)"],
    ["Iron Flask","/compendium/dnd5e/Iron Flask","Adventuring Gear (wondrous item)"],
    ["Iron pot","/compendium/dnd5e/Iron pot","Adventuring Gear"],
    ["Iron spikes","/compendium/dnd5e/Iron spikes","Adventuring Gear"],
    ["Javelin","/compendium/dnd5e/Javelin","Melee Weapon (simple, javelin)"],
    ["Javelin +1","/compendium/dnd5e/Javelin +1","Melee Weapon"],
    ["Javelin +2","/compendium/dnd5e/Javelin +2","Melee Weapon"],
    ["Javelin +3","/compendium/dnd5e/Javelin +3","Melee Weapon"],
    ["Javelin of Lightning","/compendium/dnd5e/Javelin of Lightning","Melee Weapon (simple, javelin)"],
    ["Jeweler's Tools","/compendium/dnd5e/Jeweler's Tools","Adventuring Gear (artisan's tools)"],
    ["Jug","/compendium/dnd5e/Jug","Adventuring Gear"],
    ["Ladder","/compendium/dnd5e/Ladder","Adventuring Gear"],
    ["Lamp","/compendium/dnd5e/Lamp","Adventuring Gear"],
    ["Lance","/compendium/dnd5e/Lance","Melee Weapon (martial, lance)"],
    ["Lance +1","/compendium/dnd5e/Lance +1","Melee Weapon"],
    ["Lance +2","/compendium/dnd5e/Lance +2","Melee Weapon"],
    ["Lance +3","/compendium/dnd5e/Lance +3","Melee Weapon"],
    ["Lantern of Revealing","/compendium/dnd5e/Lantern of Revealing","Adventuring Gear (wondrous item)"],
    ["Leather Armor","/compendium/dnd5e/Leather Armor","Light Armor (armor)"],
    ["Leather Armor +1","/compendium/dnd5e/Leather Armor +1","Light Armor"],
    ["Leather Armor +2","/compendium/dnd5e/Leather Armor +2","Light Armor"],
    ["Leather Armor +3","/compendium/dnd5e/Leather Armor +3","Light Armor"],
    ["Leather Armor of Acid Resistance","/compendium/dnd5e/Leather Armor of Acid Resistance","Light Armor"],
    ["Leather Armor of Cold Resistance","/compendium/dnd5e/Leather Armor of Cold Resistance","Light Armor"],
    ["Leather Armor of Fire Resistance","/compendium/dnd5e/Leather Armor of Fire Resistance","Light Armor"],
    ["Leather Armor of Force Resistance","/compendium/dnd5e/Leather Armor of Force Resistance","Light Armor"],
    ["Leather Armor of Lightning Resistance","/compendium/dnd5e/Leather Armor of Lightning Resistance","Light Armor"],
    ["Leather Armor of Necrotic Resistance","/compendium/dnd5e/Leather Armor of Necrotic Resistance","Light Armor"],
    ["Leather Armor of Poison Resistance","/compendium/dnd5e/Leather Armor of Poison Resistance","Light Armor"],
    ["Leather Armor of Psychic Resistance","/compendium/dnd5e/Leather Armor of Psychic Resistance","Light Armor"],
    ["Leather Armor of Radiant Resistance","/compendium/dnd5e/Leather Armor of Radiant Resistance","Light Armor"],
    ["Leather Armor of Thunder Resistance","/compendium/dnd5e/Leather Armor of Thunder Resistance","Light Armor"],
    ["Leatherworker's Tools","/compendium/dnd5e/Leatherworker's Tools","Adventuring Gear (artisan's tools)"],
    ["Light Crossbow","/compendium/dnd5e/Light Crossbow","Ranged Weapon (simple, crossbow)"],
    ["Light Crossbow +1","/compendium/dnd5e/Light Crossbow +1","Ranged Weapon"],
    ["Light Crossbow +2","/compendium/dnd5e/Light Crossbow +2","Ranged Weapon"],
    ["Light Crossbow +3","/compendium/dnd5e/Light Crossbow +3","Ranged Weapon"],
    ["Light Hammer","/compendium/dnd5e/Light Hammer","Melee Weapon (simple, hammer)"],
    ["Lock","/compendium/dnd5e/Lock","Adventuring Gear"],
    ["Longbow","/compendium/dnd5e/Longbow","Ranged Weapon (martial, bow)"],
    ["Longbow +1","/compendium/dnd5e/Longbow +1","Ranged Weapon"],
    ["Longbow +2","/compendium/dnd5e/Longbow +2","Ranged Weapon"],
    ["Longbow +3","/compendium/dnd5e/Longbow +3","Ranged Weapon"],
    ["Longsword","/compendium/dnd5e/Longsword","Melee Weapon (martial, sword)"],
    ["Longsword +1","/compendium/dnd5e/Longsword +1","Melee Weapon"],
    ["Longsword +2","/compendium/dnd5e/Longsword +2","Melee Weapon"],
    ["Longsword +3","/compendium/dnd5e/Longsword +3","Melee Weapon"],
    ["Luck Blade","/compendium/dnd5e/Luck Blade","Sword"],
    ["Lute","/compendium/dnd5e/Lute","Adventuring Gear (musical instrument)"],
    ["Lyre","/compendium/dnd5e/Lyre","Adventuring Gear (musical instrument)"],
    ["Mace","/compendium/dnd5e/Mace","Melee Weapon (simple, mace)"],
    ["Mace +1","/compendium/dnd5e/Mace +1","Melee Weapon"],
    ["Mace +2","/compendium/dnd5e/Mace +2","Melee Weapon"],
    ["Mace +3","/compendium/dnd5e/Mace +3","Melee Weapon"],
    ["Mace of Disruption","/compendium/dnd5e/Mace of Disruption","Melee Weapon (simple, mace)"],
    ["Mace of Smiting","/compendium/dnd5e/Mace of Smiting","Melee Weapon (simple, mace)"],
    ["Mace of Terror","/compendium/dnd5e/Mace of Terror","Melee Weapon (simple, mace)"],
    ["Magnifying glass","/compendium/dnd5e/Magnifying glass","Adventuring Gear"],
    ["Manacles","/compendium/dnd5e/Manacles","Adventuring Gear"],
    ["Mantle of Spell Resistance","/compendium/dnd5e/Mantle of Spell Resistance","Adventuring Gear (wondrous item, shoulders)"],
    ["Manual of Bodily Health","/compendium/dnd5e/Manual of Bodily Health","Adventuring Gear (wondrous item)"],
    ["Manual of Gainful Exercise","/compendium/dnd5e/Manual of Gainful Exercise","Adventuring Gear (wondrous item)"],
    ["Manual of Golems","/compendium/dnd5e/Manual of Golems","Adventuring Gear (wondrous item)"],
    ["Manual of Quickness of Action","/compendium/dnd5e/Manual of Quickness of Action","Adventuring Gear (wondrous item)"],
    ["Map or scroll case","/compendium/dnd5e/Map or scroll case","Adventuring Gear"],
    ["Marvelous Pigments","/compendium/dnd5e/Marvelous Pigments","Adventuring Gear (wondrous item)"],
    ["Mason's Tools","/compendium/dnd5e/Mason's Tools","Adventuring Gear (artisan's tools)"],
    ["Maul","/compendium/dnd5e/Maul","Melee Weapon (martial, maul)"],
    ["Maul +1","/compendium/dnd5e/Maul +1","Melee Weapon"],
    ["Maul +2","/compendium/dnd5e/Maul +2","Melee Weapon"],
    ["Maul +3","/compendium/dnd5e/Maul +3","Melee Weapon"],
    ["Medallion of Thoughts","/compendium/dnd5e/Medallion of Thoughts","Adventuring Gear (wondrous item, neck)"],
    ["Merchant's scale","/compendium/dnd5e/Merchant's scale","Adventuring Gear"],
    ["Mess kit","/compendium/dnd5e/Mess kit","Adventuring Gear"],
    ["Miner's pick","/compendium/dnd5e/Miner's pick","Adventuring Gear"],
    ["Mirror of Life Trapping","/compendium/dnd5e/Mirror of Life Trapping","Adventuring Gear (wondrous item)"],
    ["Mithral Armor","/compendium/dnd5e/Mithral Armor","Armor"],
    ["Morningstar","/compendium/dnd5e/Morningstar","Melee Weapon (martial, morningstar)"],
    ["Morningstar +1","/compendium/dnd5e/Morningstar +1","Melee Weapon"],
    ["Morningstar +2","/compendium/dnd5e/Morningstar +2","Melee Weapon"],
    ["Morningstar +3","/compendium/dnd5e/Morningstar +3","Melee Weapon"],
    ["Navigator's Tools","/compendium/dnd5e/Navigator's Tools","Adventuring Gear"],
    ["Necklace of Adaptation","/compendium/dnd5e/Necklace of Adaptation","Adventuring Gear (wondrous item, neck)"],
    ["Necklace of Fireballs","/compendium/dnd5e/Necklace of Fireballs","Adventuring Gear (wondrous item, neck)"],
    ["Necklace of Prayer Beads","/compendium/dnd5e/Necklace of Prayer Beads","Adventuring Gear (wondrous item, neck)"],
    ["Net","/compendium/dnd5e/Net","Ranged Weapon (martial, net)"],
    ["Net +1","/compendium/dnd5e/Net +1","Ranged Weapon"],
    ["Net +2","/compendium/dnd5e/Net +2","Ranged Weapon"],
    ["Net +3","/compendium/dnd5e/Net +3","Ranged Weapon"],
    ["Nine Lives Stealer","/compendium/dnd5e/Nine Lives Stealer","Sword"],
    ["Oathbow","/compendium/dnd5e/Oathbow","Ranged Weapon (martial, bow)"],
    ["Oil","/compendium/dnd5e/Oil","Adventuring Gear"],
    ["Oil of Etherealness","/compendium/dnd5e/Oil of Etherealness","Adventuring Gear (potion)"],
    ["Oil of Sharpness","/compendium/dnd5e/Oil of Sharpness","Adventuring Gear (potion)"],
    ["Oil of Slipperiness","/compendium/dnd5e/Oil of Slipperiness","Adventuring Gear (potion)"],
    ["Orb","/compendium/dnd5e/Orb","Adventuring Gear (arcane focus)"],
    ["Orb of Dragonkind","/compendium/dnd5e/Orb of Dragonkind","Adventuring Gear (wondrous item, artifact)"],
    ["Padded Armor","/compendium/dnd5e/Padded Armor","Light Armor (armor)"],
    ["Padded Armor +1","/compendium/dnd5e/Padded Armor +1","Light Armor"],
    ["Padded Armor +2","/compendium/dnd5e/Padded Armor +2","Light Armor"],
    ["Padded Armor +3","/compendium/dnd5e/Padded Armor +3","Light Armor"],
    ["Padded Armor of Acid Resistance","/compendium/dnd5e/Padded Armor of Acid Resistance","Light Armor"],
    ["Padded Armor of Cold Resistance","/compendium/dnd5e/Padded Armor of Cold Resistance","Light Armor"],
    ["Padded Armor of Fire Resistance","/compendium/dnd5e/Padded Armor of Fire Resistance","Light Armor"],
    ["Padded Armor of Force Resistance","/compendium/dnd5e/Padded Armor of Force Resistance","Light Armor"],
    ["Padded Armor of Lightning Resistance","/compendium/dnd5e/Padded Armor of Lightning Resistance","Light Armor"],
    ["Padded Armor of Necrotic Resistance","/compendium/dnd5e/Padded Armor of Necrotic Resistance","Light Armor"],
    ["Padded Armor of Poison Resistance","/compendium/dnd5e/Padded Armor of Poison Resistance","Light Armor"],
    ["Padded Armor of Psychic Resistance","/compendium/dnd5e/Padded Armor of Psychic Resistance","Light Armor"],
    ["Padded Armor of Radiant Resistance","/compendium/dnd5e/Padded Armor of Radiant Resistance","Light Armor"],
    ["Padded Armor of Thunder Resistance","/compendium/dnd5e/Padded Armor of Thunder Resistance","Light Armor"],
    ["Painter's Supplies","/compendium/dnd5e/Painter's Supplies","Adventuring Gear (artisan's tools)"],
    ["Pan flute","/compendium/dnd5e/Pan flute","Adventuring Gear (musical instrument)"],
    ["Paper","/compendium/dnd5e/Paper","Adventuring Gear"],
    ["Parchment","/compendium/dnd5e/Parchment","Adventuring Gear"],
    ["Pearl of Power","/compendium/dnd5e/Pearl of Power","Adventuring Gear (wondrous item)"],
    ["Perfume","/compendium/dnd5e/Perfume","Adventuring Gear"],
    ["Periapt of Health","/compendium/dnd5e/Periapt of Health","Adventuring Gear (wondrous item, neck)"],
    ["Periapt of Proof against Poison","/compendium/dnd5e/Periapt of Proof against Poison","Adventuring Gear (wondrous item, neck)"],
    ["Periapt of Wound Closure","/compendium/dnd5e/Periapt of Wound Closure","Adventuring Gear (wondrous item, neck)"],
    ["Philter of Love","/compendium/dnd5e/Philter of Love","Adventuring Gear (potion)"],
    ["Pike","/compendium/dnd5e/Pike","Melee Weapon (martial, pike)"],
    ["Pike +1","/compendium/dnd5e/Pike +1","Melee Weapon"],
    ["Pike +2","/compendium/dnd5e/Pike +2","Melee Weapon"],
    ["Pike +3","/compendium/dnd5e/Pike +3","Melee Weapon"],
    ["Pipes of Haunting","/compendium/dnd5e/Pipes of Haunting","Adventuring Gear (wondrous item, musical instrument)"],
    ["Pipes of the Sewers","/compendium/dnd5e/Pipes of the Sewers","Adventuring Gear (wondrous item, musical instrument)"],
    ["Piton","/compendium/dnd5e/Piton","Adventuring Gear"],
    ["Plate Armor","/compendium/dnd5e/Plate Armor","Heavy Armor (armor)"],
    ["Plate Armor +1","/compendium/dnd5e/Plate Armor +1","Heavy Armor"],
    ["Plate Armor +2","/compendium/dnd5e/Plate Armor +2","Heavy Armor"],
    ["Plate Armor +3","/compendium/dnd5e/Plate Armor +3","Heavy Armor"],
    ["Plate Armor of Acid Resistance","/compendium/dnd5e/Plate Armor of Acid Resistance","Heavy Armor"],
    ["Plate Armor of Cold Resistance","/compendium/dnd5e/Plate Armor of Cold Resistance","Heavy Armor"],
    ["Plate Armor of Etherealness","/compendium/dnd5e/Plate Armor of Etherealness","Heavy Armor (armor)"],
    ["Plate Armor of Fire Resistance","/compendium/dnd5e/Plate Armor of Fire Resistance","Heavy Armor"],
    ["Plate Armor of Force Resistance","/compendium/dnd5e/Plate Armor of Force Resistance","Heavy Armor"],
    ["Plate Armor of Lightning Resistance","/compendium/dnd5e/Plate Armor of Lightning Resistance","Heavy Armor"],
    ["Plate Armor of Necrotic Resistance","/compendium/dnd5e/Plate Armor of Necrotic Resistance","Heavy Armor"],
    ["Plate Armor of Poison Resistance","/compendium/dnd5e/Plate Armor of Poison Resistance","Heavy Armor"],
    ["Plate Armor of Psychic Resistance","/compendium/dnd5e/Plate Armor of Psychic Resistance","Heavy Armor"],
    ["Plate Armor of Radiant Resistance","/compendium/dnd5e/Plate Armor of Radiant Resistance","Heavy Armor"],
    ["Plate Armor of Thunder Resistance","/compendium/dnd5e/Plate Armor of Thunder Resistance","Heavy Armor"],
    ["Playing card set","/compendium/dnd5e/Playing card set","Adventuring Gear (gaming set)"],
    ["Poisoner's kit","/compendium/dnd5e/Poisoner's kit","Adventuring Gear"],
    ["Pole","/compendium/dnd5e/Pole","Adventuring Gear"],
    ["Portable Hole","/compendium/dnd5e/Portable Hole","Adventuring Gear (wondrous item)"],
    ["Portable ram","/compendium/dnd5e/Portable ram","Adventuring Gear"],
    ["Potion of Acid Resistance","/compendium/dnd5e/Potion of Acid Resistance","Potion"],
    ["Potion of Animal Friendship","/compendium/dnd5e/Potion of Animal Friendship","Adventuring Gear (potion)"],
    ["Potion of Clairvoyance","/compendium/dnd5e/Potion of Clairvoyance","Adventuring Gear (potion)"],
    ["Potion of Climbing","/compendium/dnd5e/Potion of Climbing","Adventuring Gear (potion)"],
    ["Potion of Cold Resistance","/compendium/dnd5e/Potion of Cold Resistance","Adventuring Gear (potion)"],
    ["Potion of Diminution","/compendium/dnd5e/Potion of Diminution","Adventuring Gear (potion)"],
    ["Potion of Fire Resistance","/compendium/dnd5e/Potion of Fire Resistance","Adventuring Gear"],
    ["Potion of Flying","/compendium/dnd5e/Potion of Flying","Adventuring Gear (potion)"],
    ["Potion of Force Resistance","/compendium/dnd5e/Potion of Force Resistance","Adventuring Gear"],
    ["Potion of Gaseous Form","/compendium/dnd5e/Potion of Gaseous Form","Adventuring Gear (potion)"],
    ["Potion of Giant Strength","/compendium/dnd5e/Potion of Giant Strength","Adventuring Gear (potion)"],
    ["Potion of Growth","/compendium/dnd5e/Potion of Growth","Adventuring Gear (potion)"],
    ["Potion of Healing","/compendium/dnd5e/Potion of Healing","Adventuring Gear (potion)"],
    ["Potion of Heroism","/compendium/dnd5e/Potion of Heroism","Adventuring Gear (potion)"],
    ["Potion of Invisibility","/compendium/dnd5e/Potion of Invisibility","Adventuring Gear (potion)"],
    ["Potion of Invulnerability","/compendium/dnd5e/Potion of Invulnerability","Adventuring Gear (potion)"],
    ["Potion of Lightning Resistance","/compendium/dnd5e/Potion of Lightning Resistance","Adventuring Gear"],
    ["Potion of Mind Reading","/compendium/dnd5e/Potion of Mind Reading","Adventuring Gear (potion)"],
    ["Potion of Necrotic Resistance","/compendium/dnd5e/Potion of Necrotic Resistance","Adventuring Gear"],
    ["Potion of Poison","/compendium/dnd5e/Potion of Poison","Adventuring Gear (potion)"],
    ["Potion of Poison Resistance","/compendium/dnd5e/Potion of Poison Resistance","Adventuring Gear"],
    ["Potion of Psychic Resistance","/compendium/dnd5e/Potion of Psychic Resistance","Adventuring Gear"],
    ["Potion of Radiant Resistance","/compendium/dnd5e/Potion of Radiant Resistance","Adventuring Gear"],
    ["Potion of Speed","/compendium/dnd5e/Potion of Speed","Adventuring Gear (potion)"],
    ["Potion of Thunder Resistance","/compendium/dnd5e/Potion of Thunder Resistance","Adventuring Gear"],
    ["Potion of Water Breathing","/compendium/dnd5e/Potion of Water Breathing","Adventuring Gear (potion)"],
    ["Potter's Tools","/compendium/dnd5e/Potter's Tools","Adventuring Gear (artisan's tools)"],
    ["Pouch","/compendium/dnd5e/Pouch","Adventuring Gear"],
    ["Priest's Pack","/compendium/dnd5e/Priest's Pack","(equipment pack)"],
    ["Quarterstaff","/compendium/dnd5e/Quarterstaff","Melee Weapon (simple, staff)"],
    ["Quarterstaff +1","/compendium/dnd5e/Quarterstaff +1","Melee Weapon"],
    ["Quarterstaff +2","/compendium/dnd5e/Quarterstaff +2","Melee Weapon"],
    ["Quarterstaff +3","/compendium/dnd5e/Quarterstaff +3","Melee Weapon"],
    ["Quiver","/compendium/dnd5e/Quiver","Adventuring Gear"],
    ["Rapier","/compendium/dnd5e/Rapier","Melee Weapon (martial, sword)"],
    ["Rapier +1","/compendium/dnd5e/Rapier +1","Melee Weapon"],
    ["Rapier +2","/compendium/dnd5e/Rapier +2","Melee Weapon"],
    ["Rapier +3","/compendium/dnd5e/Rapier +3","Melee Weapon"],
    ["Rations","/compendium/dnd5e/Rations","Adventuring Gear"],
    ["Reliquary","/compendium/dnd5e/Reliquary","Adventuring Gear"],
    ["Restorative Ointment","/compendium/dnd5e/Restorative Ointment","Adventuring Gear (wondrous item)"],
    ["Ring Mail","/compendium/dnd5e/Ring Mail","Heavy Armor (armor)"],
    ["Ring Mail +1","/compendium/dnd5e/Ring Mail +1","Heavy Armor"],
    ["Ring Mail +2","/compendium/dnd5e/Ring Mail +2","Heavy Armor"],
    ["Ring Mail +3","/compendium/dnd5e/Ring Mail +3","Heavy Armor"],
    ["Ring Mail of Acid Resistance","/compendium/dnd5e/Ring Mail of Acid Resistance","Heavy Armor"],
    ["Ring Mail of Cold Resistance","/compendium/dnd5e/Ring Mail of Cold Resistance","Heavy Armor"],
    ["Ring Mail of Fire Resistance","/compendium/dnd5e/Ring Mail of Fire Resistance","Heavy Armor"],
    ["Ring Mail of Force Resistance","/compendium/dnd5e/Ring Mail of Force Resistance","Heavy Armor"],
    ["Ring Mail of Lightning Resistance","/compendium/dnd5e/Ring Mail of Lightning Resistance","Heavy Armor"],
    ["Ring Mail of Necrotic Resistance","/compendium/dnd5e/Ring Mail of Necrotic Resistance","Heavy Armor"],
    ["Ring Mail of Poison Resistance","/compendium/dnd5e/Ring Mail of Poison Resistance","Heavy Armor"],
    ["Ring Mail of Psychic Resistance","/compendium/dnd5e/Ring Mail of Psychic Resistance","Heavy Armor"],
    ["Ring Mail of Radiant Resistance","/compendium/dnd5e/Ring Mail of Radiant Resistance","Heavy Armor"],
    ["Ring Mail of Thunder Resistance","/compendium/dnd5e/Ring Mail of Thunder Resistance","Heavy Armor"],
    ["Ring of Acid Resistance","/compendium/dnd5e/Ring of Acid Resistance","Ring"],
    ["Ring of Animal Influence","/compendium/dnd5e/Ring of Animal Influence","Ring (ring)"],
    ["Ring of Cold Resistance","/compendium/dnd5e/Ring of Cold Resistance","Ring"],
    ["Ring of Djinni Summoning","/compendium/dnd5e/Ring of Djinni Summoning","Ring (ring)"],
    ["Ring of Elemental Command","/compendium/dnd5e/Ring of Elemental Command","Ring"],
    ["Ring of Evasion","/compendium/dnd5e/Ring of Evasion","Ring (ring)"],
    ["Ring of Feather Falling","/compendium/dnd5e/Ring of Feather Falling","Ring (ring)"],
    ["Ring of Fire Resistance","/compendium/dnd5e/Ring of Fire Resistance","Ring"],
    ["Ring of Force Resistance","/compendium/dnd5e/Ring of Force Resistance","Ring"],
    ["Ring of Free Action","/compendium/dnd5e/Ring of Free Action","Ring (ring)"],
    ["Ring of Invisibility","/compendium/dnd5e/Ring of Invisibility","Ring (ring)"],
    ["Ring of Jumping","/compendium/dnd5e/Ring of Jumping","Ring (ring)"],
    ["Ring of Lightning Resistance","/compendium/dnd5e/Ring of Lightning Resistance","Ring"],
    ["Ring of Mind Shielding","/compendium/dnd5e/Ring of Mind Shielding","Ring (ring)"],
    ["Ring of Necrotic Resistance","/compendium/dnd5e/Ring of Necrotic Resistance","Ring"],
    ["Ring of Poison Resistance","/compendium/dnd5e/Ring of Poison Resistance","Ring"],
    ["Ring of Protection","/compendium/dnd5e/Ring of Protection","Ring (ring)"],
    ["Ring of Psychic Resistance","/compendium/dnd5e/Ring of Psychic Resistance","Ring"],
    ["Ring of Radiant Resistance","/compendium/dnd5e/Ring of Radiant Resistance","Ring"],
    ["Ring of Regeneration","/compendium/dnd5e/Ring of Regeneration","Ring (ring)"],
    ["Ring of Shooting Stars","/compendium/dnd5e/Ring of Shooting Stars","Ring (ring)"],
    ["Ring of Spell Storing","/compendium/dnd5e/Ring of Spell Storing","Ring (ring)"],
    ["Ring of Spell Turning","/compendium/dnd5e/Ring of Spell Turning","Ring (ring)"],
    ["Ring of Swimming","/compendium/dnd5e/Ring of Swimming","Ring (ring)"],
    ["Ring of Telekinesis","/compendium/dnd5e/Ring of Telekinesis","Ring (ring)"],
    ["Ring of Three Wishes","/compendium/dnd5e/Ring of Three Wishes","Ring (ring)"],
    ["Ring of Thunder Resistance","/compendium/dnd5e/Ring of Thunder Resistance","Ring"],
    ["Ring of Warmth","/compendium/dnd5e/Ring of Warmth","Ring (ring)"],
    ["Ring of Water Walking","/compendium/dnd5e/Ring of Water Walking","Ring (ring)"],
    ["Ring of X-ray Vision","/compendium/dnd5e/Ring of X-ray Vision","Ring (ring)"],
    ["Ring of the Ram","/compendium/dnd5e/Ring of the Ram","Ring (ring)"],
    ["Robe of Eyes","/compendium/dnd5e/Robe of Eyes","Adventuring Gear (wondrous item, robe)"],
    ["Robe of Scintillating Colors","/compendium/dnd5e/Robe of Scintillating Colors","Adventuring Gear (wondrous item, robe)"],
    ["Robe of Stars","/compendium/dnd5e/Robe of Stars","Adventuring Gear (wondrous item, robe)"],
    ["Robe of Useful Items","/compendium/dnd5e/Robe of Useful Items","Adventuring Gear (wondrous item, robe)"],
    ["Robe of the Archmagi","/compendium/dnd5e/Robe of the Archmagi","Light Armor (wondrous item, robe)"],
    ["Robes","/compendium/dnd5e/Robes","Adventuring Gear (robe)"],
    ["Rod","/compendium/dnd5e/Rod","Adventuring Gear (rod)"],
    ["Rod of Absorption","/compendium/dnd5e/Rod of Absorption","Adventuring Gear (rod)"],
    ["Rod of Alertness","/compendium/dnd5e/Rod of Alertness","Adventuring Gear (rod)"],
    ["Rod of Lordly Might","/compendium/dnd5e/Rod of Lordly Might","Adventuring Gear (rod)"],
    ["Rod of Rulership","/compendium/dnd5e/Rod of Rulership","Adventuring Gear (rod)"],
    ["Rod of Security","/compendium/dnd5e/Rod of Security","Adventuring Gear (rod)"],
    ["Rope of Climbing","/compendium/dnd5e/Rope of Climbing","Adventuring Gear"],
    ["Rope of Entanglement","/compendium/dnd5e/Rope of Entanglement","Adventuring Gear"],
    ["Sack","/compendium/dnd5e/Sack","Adventuring Gear"],
    ["Scale Mail","/compendium/dnd5e/Scale Mail","Medium Armor (armor)"],
    ["Scale Mail +1","/compendium/dnd5e/Scale Mail +1","Medium Armor"],
    ["Scale Mail +2","/compendium/dnd5e/Scale Mail +2","Medium Armor"],
    ["Scale Mail +3","/compendium/dnd5e/Scale Mail +3","Medium Armor"],
    ["Scale Mail of Acid Resistance","/compendium/dnd5e/Scale Mail of Acid Resistance","Medium Armor"],
    ["Scale Mail of Cold Resistance","/compendium/dnd5e/Scale Mail of Cold Resistance","Medium Armor"],
    ["Scale Mail of Fire Resistance","/compendium/dnd5e/Scale Mail of Fire Resistance","Medium Armor"],
    ["Scale Mail of Force Resistance","/compendium/dnd5e/Scale Mail of Force Resistance","Medium Armor"],
    ["Scale Mail of Lightning Resistance","/compendium/dnd5e/Scale Mail of Lightning Resistance","Medium Armor"],
    ["Scale Mail of Necrotic Resistance","/compendium/dnd5e/Scale Mail of Necrotic Resistance","Medium Armor"],
    ["Scale Mail of Poison Resistance","/compendium/dnd5e/Scale Mail of Poison Resistance","Medium Armor"],
    ["Scale Mail of Psychic Resistance","/compendium/dnd5e/Scale Mail of Psychic Resistance","Medium Armor"],
    ["Scale Mail of Radiant Resistance","/compendium/dnd5e/Scale Mail of Radiant Resistance","Medium Armor"],
    ["Scale Mail of Thunder Resistance","/compendium/dnd5e/Scale Mail of Thunder Resistance","Medium Armor"],
    ["Scarab of Protection","/compendium/dnd5e/Scarab of Protection","Adventuring Gear (wondrous item)"],
    ["Scholar's Pack","/compendium/dnd5e/Scholar's Pack","(equipment pack)"],
    ["Scimitar","/compendium/dnd5e/Scimitar","Melee Weapon (martial, sword)"],
    ["Scimitar +1","/compendium/dnd5e/Scimitar +1","Melee Weapon"],
    ["Scimitar +2","/compendium/dnd5e/Scimitar +2","Melee Weapon"],
    ["Scimitar +3","/compendium/dnd5e/Scimitar +3","Melee Weapon"],
    ["Scimitar of Speed","/compendium/dnd5e/Scimitar of Speed","Melee Weapon (martial, sword)"],
    ["Sealing wax","/compendium/dnd5e/Sealing wax","Adventuring Gear"],
    ["Shawm","/compendium/dnd5e/Shawm","Adventuring Gear (musical instrument)"],
    ["Shield","/compendium/dnd5e/Shield","Shield (shield)"],
    ["Shield +1","/compendium/dnd5e/Shield +1","Shield"],
    ["Shield +2","/compendium/dnd5e/Shield +2","Shield"],
    ["Shield +3","/compendium/dnd5e/Shield +3","Shield"],
    ["Shield of Missile Attraction","/compendium/dnd5e/Shield of Missile Attraction","Shield (shield)"],
    ["Shortbow","/compendium/dnd5e/Shortbow","Ranged Weapon (simple, bow)"],
    ["Shortbow +1","/compendium/dnd5e/Shortbow +1","Ranged Weapon"],
    ["Shortbow +2","/compendium/dnd5e/Shortbow +2","Ranged Weapon"],
    ["Shortbow +3","/compendium/dnd5e/Shortbow +3","Ranged Weapon"],
    ["Shortsword","/compendium/dnd5e/Shortsword","Melee Weapon (martial, sword)"],
    ["Shortsword +1","/compendium/dnd5e/Shortsword +1","Melee Weapon"],
    ["Shortsword +2","/compendium/dnd5e/Shortsword +2","Melee Weapon"],
    ["Shortsword +3","/compendium/dnd5e/Shortsword +3","Melee Weapon"],
    ["Shovel","/compendium/dnd5e/Shovel","Adventuring Gear"],
    ["Sickle","/compendium/dnd5e/Sickle","Melee Weapon (simple, sickle)"],
    ["Sickle +1","/compendium/dnd5e/Sickle +1","Melee Weapon"],
    ["Sickle +2","/compendium/dnd5e/Sickle +2","Melee Weapon"],
    ["Sickle +3","/compendium/dnd5e/Sickle +3","Melee Weapon"],
    ["Signal whistle","/compendium/dnd5e/Signal whistle","Adventuring Gear"],
    ["Signet ring","/compendium/dnd5e/Signet ring","Adventuring Gear"],
    ["Silk rope","/compendium/dnd5e/Silk rope","Adventuring Gear"],
    ["Sledge hammer","/compendium/dnd5e/Sledge hammer","Adventuring Gear"],
    ["Sling","/compendium/dnd5e/Sling","Ranged Weapon (simple, sling)"],
    ["Sling +1","/compendium/dnd5e/Sling +1","Ranged Weapon"],
    ["Sling +2","/compendium/dnd5e/Sling +2","Ranged Weapon"],
    ["Sling +3","/compendium/dnd5e/Sling +3","Ranged Weapon"],
    ["Sling bullets","/compendium/dnd5e/Sling bullets","Ammunition (ammunition)"],
    ["Slippers of Spider Climbing","/compendium/dnd5e/Slippers of Spider Climbing","Adventuring Gear (wondrous item, feet)"],
    ["Smith's Tools","/compendium/dnd5e/Smith's Tools","Adventuring Gear (artisan's tools)"],
    ["Soap","/compendium/dnd5e/Soap","Adventuring Gear"],
    ["Sovereign Glue","/compendium/dnd5e/Sovereign Glue","Adventuring Gear (wondrous item)"],
    ["Spear","/compendium/dnd5e/Spear","Melee Weapon (simple, spear)"],
    ["Spear +1","/compendium/dnd5e/Spear +1","Melee Weapon"],
    ["Spear +2","/compendium/dnd5e/Spear +2","Melee Weapon"],
    ["Spear +3","/compendium/dnd5e/Spear +3","Melee Weapon"],
    ["Spell Scroll","/compendium/dnd5e/Spell Scroll","Scroll"],
    ["Spellbook","/compendium/dnd5e/Spellbook","Adventuring Gear"],
    ["Spellguard Shield","/compendium/dnd5e/Spellguard Shield","Shield (shield)"],
    ["Sphere of Annihilation","/compendium/dnd5e/Sphere of Annihilation","Adventuring Gear (wondrous item)"],
    ["Spiked Armor of Acid Resistance","/compendium/dnd5e/Spiked Armor of Acid Resistance","Medium Armor"],
    ["Spiked Armor of Cold Resistance","/compendium/dnd5e/Spiked Armor of Cold Resistance","Medium Armor"],
    ["Spiked Armor of Fire Resistance","/compendium/dnd5e/Spiked Armor of Fire Resistance","Medium Armor"],
    ["Spiked Armor of Force Resistance","/compendium/dnd5e/Spiked Armor of Force Resistance","Medium Armor"],
    ["Spiked Armor of Lightning Resistance","/compendium/dnd5e/Spiked Armor of Lightning Resistance","Medium Armor"],
    ["Spiked Armor of Necrotic Resistance","/compendium/dnd5e/Spiked Armor of Necrotic Resistance","Medium Armor"],
    ["Spiked Armor of Poison Resistance","/compendium/dnd5e/Spiked Armor of Poison Resistance","Medium Armor"],
    ["Spiked Armor of Psychic Resistance","/compendium/dnd5e/Spiked Armor of Psychic Resistance","Medium Armor"],
    ["Spiked Armor of Radiant Resistance","/compendium/dnd5e/Spiked Armor of Radiant Resistance","Medium Armor"],
    ["Spiked Armor of Thunder Resistance","/compendium/dnd5e/Spiked Armor of Thunder Resistance","Medium Armor"],
    ["Splint Armor","/compendium/dnd5e/Splint Armor","Heavy Armor (armor)"],
    ["Splint Armor +1","/compendium/dnd5e/Splint Armor +1","Heavy Armor"],
    ["Splint Armor +2","/compendium/dnd5e/Splint Armor +2","Heavy Armor"],
    ["Splint Armor +3","/compendium/dnd5e/Splint Armor +3","Heavy Armor"],
    ["Splint Armor of Acid Resistance","/compendium/dnd5e/Splint Armor of Acid Resistance","Heavy Armor"],
    ["Splint Armor of Cold Resistance","/compendium/dnd5e/Splint Armor of Cold Resistance","Heavy Armor"],
    ["Splint Armor of Fire Resistance","/compendium/dnd5e/Splint Armor of Fire Resistance","Heavy Armor"],
    ["Splint Armor of Force Resistance","/compendium/dnd5e/Splint Armor of Force Resistance","Heavy Armor"],
    ["Splint Armor of Lightning Resistance","/compendium/dnd5e/Splint Armor of Lightning Resistance","Heavy Armor"],
    ["Splint Armor of Necrotic Resistance","/compendium/dnd5e/Splint Armor of Necrotic Resistance","Heavy Armor"],
    ["Splint Armor of Poison Resistance","/compendium/dnd5e/Splint Armor of Poison Resistance","Heavy Armor"],
    ["Splint Armor of Psychic Resistance","/compendium/dnd5e/Splint Armor of Psychic Resistance","Heavy Armor"],
    ["Splint Armor of Radiant Resistance","/compendium/dnd5e/Splint Armor of Radiant Resistance","Heavy Armor"],
    ["Splint Armor of Thunder Resistance","/compendium/dnd5e/Splint Armor of Thunder Resistance","Heavy Armor"],
    ["Sprig of mistletoe","/compendium/dnd5e/Sprig of mistletoe","Adventuring Gear (druidic focus)"],
    ["Spyglass","/compendium/dnd5e/Spyglass","Adventuring Gear"],
    ["Staff","/compendium/dnd5e/Staff","Adventuring Gear (staff)"],
    ["Staff of Charming","/compendium/dnd5e/Staff of Charming","Adventuring Gear (staff)"],
    ["Staff of Fire","/compendium/dnd5e/Staff of Fire","Adventuring Gear (staff)"],
    ["Staff of Frost","/compendium/dnd5e/Staff of Frost","Adventuring Gear (staff)"],
    ["Staff of Healing","/compendium/dnd5e/Staff of Healing","Adventuring Gear (staff)"],
    ["Staff of Power","/compendium/dnd5e/Staff of Power","Adventuring Gear (staff)"],
    ["Staff of Striking","/compendium/dnd5e/Staff of Striking","Adventuring Gear (staff)"],
    ["Staff of Swarming Insects","/compendium/dnd5e/Staff of Swarming Insects","Adventuring Gear (staff)"],
    ["Staff of Thunder and Lightning","/compendium/dnd5e/Staff of Thunder and Lightning","Adventuring Gear (staff)"],
    ["Staff of Withering","/compendium/dnd5e/Staff of Withering","Adventuring Gear (staff)"],
    ["Staff of the Magi","/compendium/dnd5e/Staff of the Magi","Adventuring Gear (staff)"],
    ["Staff of the Python","/compendium/dnd5e/Staff of the Python","Adventuring Gear (staff)"],
    ["Staff of the Woodlands","/compendium/dnd5e/Staff of the Woodlands","Adventuring Gear (staff)"],
    ["Steel mirror","/compendium/dnd5e/Steel mirror","Adventuring Gear"],
    ["Stone of Controlling Earth Elementals","/compendium/dnd5e/Stone of Controlling Earth Elementals","Adventuring Gear (wondrous item)"],
    ["Stone of Good Luck","/compendium/dnd5e/Stone of Good Luck","Adventuring Gear (wondrous item)"],
    ["Studded Leather Armor","/compendium/dnd5e/Studded Leather Armor","Light Armor (armor)"],
    ["Studded Leather Armor +1","/compendium/dnd5e/Studded Leather Armor +1","Light Armor"],
    ["Studded Leather Armor +2","/compendium/dnd5e/Studded Leather Armor +2","Light Armor"],
    ["Studded Leather Armor +3","/compendium/dnd5e/Studded Leather Armor +3","Light Armor"],
    ["Studded Leather Armor of Acid Resistance","/compendium/dnd5e/Studded Leather Armor of Acid Resistance","Light Armor"],
    ["Studded Leather Armor of Cold Resistance","/compendium/dnd5e/Studded Leather Armor of Cold Resistance","Light Armor"],
    ["Studded Leather Armor of Fire Resistance","/compendium/dnd5e/Studded Leather Armor of Fire Resistance","Light Armor"],
    ["Studded Leather Armor of Force Resistance","/compendium/dnd5e/Studded Leather Armor of Force Resistance","Light Armor"],
    ["Studded Leather Armor of Lightning Resistance","/compendium/dnd5e/Studded Leather Armor of Lightning Resistance","Light Armor"],
    ["Studded Leather Armor of Necrotic Resistance","/compendium/dnd5e/Studded Leather Armor of Necrotic Resistance","Light Armor"],
    ["Studded Leather Armor of Poison Resistance","/compendium/dnd5e/Studded Leather Armor of Poison Resistance","Light Armor"],
    ["Studded Leather Armor of Psychic Resistance","/compendium/dnd5e/Studded Leather Armor of Psychic Resistance","Light Armor"],
    ["Studded Leather Armor of Radiant Resistance","/compendium/dnd5e/Studded Leather Armor of Radiant Resistance","Light Armor"],
    ["Studded Leather Armor of Thunder Resistance","/compendium/dnd5e/Studded Leather Armor of Thunder Resistance","Light Armor"],
    ["Sun Blade","/compendium/dnd5e/Sun Blade","Melee Weapon (sword, martial)"],
    ["Sword of Life Stealing","/compendium/dnd5e/Sword of Life Stealing","Sword"],
    ["Sword of Sharpness","/compendium/dnd5e/Sword of Sharpness","Sword"],
    ["Sword of Wounding","/compendium/dnd5e/Sword of Wounding","Sword"],
    ["Talisman of Pure Good","/compendium/dnd5e/Talisman of Pure Good","Adventuring Gear (wondrous item, neck)"],
    ["Talisman of Ultimate Evil","/compendium/dnd5e/Talisman of Ultimate Evil","Adventuring Gear (wondrous item, neck)"],
    ["Talisman of the Sphere","/compendium/dnd5e/Talisman of the Sphere","Adventuring Gear (wondrous item, neck)"],
    ["Tent","/compendium/dnd5e/Tent","Adventuring Gear"],
    ["Thieves' Tools","/compendium/dnd5e/Thieves' Tools","Adventuring Gear"],
    ["Tinderbox","/compendium/dnd5e/Tinderbox","Adventuring Gear"],
    ["Tinker's Tools","/compendium/dnd5e/Tinker's Tools","Adventuring Gear (artisan's tools)"],
    ["Tome of Clear Thought","/compendium/dnd5e/Tome of Clear Thought","Adventuring Gear (wondrous item)"],
    ["Tome of Leadership and Influence","/compendium/dnd5e/Tome of Leadership and Influence","Adventuring Gear (wondrous item)"],
    ["Tome of Understanding","/compendium/dnd5e/Tome of Understanding","Adventuring Gear (wondrous item)"],
    ["Torch","/compendium/dnd5e/Torch","Adventuring Gear"],
    ["Totem","/compendium/dnd5e/Totem","Adventuring Gear (druidic focus)"],
    ["Traveler's clothes","/compendium/dnd5e/Traveler's clothes","Adventuring Gear (clothing)"],
    ["Trident","/compendium/dnd5e/Trident","Melee Weapon (martial, trident)"],
    ["Trident +1","/compendium/dnd5e/Trident +1","Melee Weapon"],
    ["Trident +2","/compendium/dnd5e/Trident +2","Melee Weapon"],
    ["Trident +3","/compendium/dnd5e/Trident +3","Melee Weapon"],
    ["Trident of Fish Command","/compendium/dnd5e/Trident of Fish Command","Melee Weapon (trident, martial)"],
    ["Universal Solvent","/compendium/dnd5e/Universal Solvent","Adventuring Gear (wondrous item)"],
    ["Vial","/compendium/dnd5e/Vial","Adventuring Gear"],
    ["Vicious Battleaxe","/compendium/dnd5e/Vicious Battleaxe","Melee Weapon"],
    ["Vicious Blowgun","/compendium/dnd5e/Vicious Blowgun","Ranged Weapon"],
    ["Vicious Club","/compendium/dnd5e/Vicious Club","Melee Weapon"],
    ["Vicious Dagger","/compendium/dnd5e/Vicious Dagger","Melee Weapon"],
    ["Vicious Dart","/compendium/dnd5e/Vicious Dart","Ranged Weapon"],
    ["Vicious Flail","/compendium/dnd5e/Vicious Flail","Melee Weapon"],
    ["Vicious Glaive","/compendium/dnd5e/Vicious Glaive","Melee Weapon"],
    ["Vicious Greataxe","/compendium/dnd5e/Vicious Greataxe","Melee Weapon"],
    ["Vicious Greatclub","/compendium/dnd5e/Vicious Greatclub","Melee Weapon"],
    ["Vicious Greatsword","/compendium/dnd5e/Vicious Greatsword","Melee Weapon"],
    ["Vicious Halberd","/compendium/dnd5e/Vicious Halberd","Melee Weapon"],
    ["Vicious Hand Crossbow","/compendium/dnd5e/Vicious Hand Crossbow","Ranged Weapon"],
    ["Vicious Handaxe","/compendium/dnd5e/Vicious Handaxe","Melee Weapon"],
    ["Vicious Heavy Crossbow","/compendium/dnd5e/Vicious Heavy Crossbow","Ranged Weapon"],
    ["Vicious Javelin","/compendium/dnd5e/Vicious Javelin","Melee Weapon"],
    ["Vicious Lance","/compendium/dnd5e/Vicious Lance","Melee Weapon"],
    ["Vicious Light Crossbow","/compendium/dnd5e/Vicious Light Crossbow","Ranged Weapon"],
    ["Vicious Light Hammer","/compendium/dnd5e/Vicious Light Hammer","Melee Weapon"],
    ["Vicious Longbow","/compendium/dnd5e/Vicious Longbow","Ranged Weapon"],
    ["Vicious Longsword","/compendium/dnd5e/Vicious Longsword","Melee Weapon"],
    ["Vicious Mace","/compendium/dnd5e/Vicious Mace","Melee Weapon"],
    ["Vicious Maul","/compendium/dnd5e/Vicious Maul","Melee Weapon"],
    ["Vicious Morningstar","/compendium/dnd5e/Vicious Morningstar","Melee Weapon"],
    ["Vicious Pike","/compendium/dnd5e/Vicious Pike","Melee Weapon"],
    ["Vicious Quarterstaff","/compendium/dnd5e/Vicious Quarterstaff","Melee Weapon"],
    ["Vicious Rapier","/compendium/dnd5e/Vicious Rapier","Melee Weapon"],
    ["Vicious Scimitar","/compendium/dnd5e/Vicious Scimitar","Melee Weapon"],
    ["Vicious Shortbow","/compendium/dnd5e/Vicious Shortbow","Ranged Weapon"],
    ["Vicious Shortsword","/compendium/dnd5e/Vicious Shortsword","Melee Weapon"],
    ["Vicious Sickle","/compendium/dnd5e/Vicious Sickle","Melee Weapon"],
    ["Vicious Sling","/compendium/dnd5e/Vicious Sling","Ranged Weapon"],
    ["Vicious Spear","/compendium/dnd5e/Vicious Spear","Melee Weapon"],
    ["Vicious Trident","/compendium/dnd5e/Vicious Trident","Melee Weapon"],
    ["Vicious War Pick","/compendium/dnd5e/Vicious War Pick","Melee Weapon"],
    ["Vicious Warhammer","/compendium/dnd5e/Vicious Warhammer","Melee Weapon"],
    ["Vicious Whip","/compendium/dnd5e/Vicious Whip","Melee Weapon"],
    ["Viol","/compendium/dnd5e/Viol","Adventuring Gear (musical instrument)"],
    ["Vorpal Greatsword","/compendium/dnd5e/Vorpal Greatsword","Melee Weapon"],
    ["Vorpal Longsword","/compendium/dnd5e/Vorpal Longsword","Melee Weapon"],
    ["Vorpal Scimitar","/compendium/dnd5e/Vorpal Scimitar","Melee Weapon"],
    ["Wand","/compendium/dnd5e/Wand","Adventuring Gear (arcane focus)"],
    ["Wand of Binding","/compendium/dnd5e/Wand of Binding","Adventuring Gear (wand)"],
    ["Wand of Enemy Detection","/compendium/dnd5e/Wand of Enemy Detection","Adventuring Gear (wand)"],
    ["Wand of Fear","/compendium/dnd5e/Wand of Fear","Adventuring Gear (wand)"],
    ["Wand of Fireballs","/compendium/dnd5e/Wand of Fireballs","Adventuring Gear (wand)"],
    ["Wand of Lightning Bolts","/compendium/dnd5e/Wand of Lightning Bolts","Adventuring Gear (wand)"],
    ["Wand of Magic Detection","/compendium/dnd5e/Wand of Magic Detection","Adventuring Gear (wand)"],
    ["Wand of Magic Missiles","/compendium/dnd5e/Wand of Magic Missiles","Adventuring Gear (wand)"],
    ["Wand of Paralysis","/compendium/dnd5e/Wand of Paralysis","Adventuring Gear (wand)"],
    ["Wand of Polymorph","/compendium/dnd5e/Wand of Polymorph","Adventuring Gear (wand)"],
    ["Wand of Secrets","/compendium/dnd5e/Wand of Secrets","Adventuring Gear (wand)"],
    ["Wand of Web","/compendium/dnd5e/Wand of Web","Adventuring Gear (wand)"],
    ["Wand of Wonder","/compendium/dnd5e/Wand of Wonder","Adventuring Gear (wand)"],
    ["Wand of the War Mage, +1","/compendium/dnd5e/Wand of the War Mage, +1","Adventuring Gear (wand)"],
    ["Wand of the War Mage, +2","/compendium/dnd5e/Wand of the War Mage, +2","Adventuring Gear (wand)"],
    ["Wand of the War Mage, +3","/compendium/dnd5e/Wand of the War Mage, +3","Adventuring Gear (wand)"],
    ["War Pick","/compendium/dnd5e/War Pick","Melee Weapon (martial, pick)"],
    ["War Pick +1","/compendium/dnd5e/War Pick +1","Melee Weapon"],
    ["War Pick +2","/compendium/dnd5e/War Pick +2","Melee Weapon"],
    ["War Pick +3","/compendium/dnd5e/War Pick +3","Melee Weapon"],
    ["Warhammer","/compendium/dnd5e/Warhammer","Melee Weapon (martial, hammer)"],
    ["Warhammer +1","/compendium/dnd5e/Warhammer +1","Melee Weapon"],
    ["Warhammer +2","/compendium/dnd5e/Warhammer +2","Melee Weapon"],
    ["Warhammer +3","/compendium/dnd5e/Warhammer +3","Melee Weapon"],
    ["Waterskin","/compendium/dnd5e/Waterskin","Adventuring Gear"],
    ["Weaver's Tools","/compendium/dnd5e/Weaver's Tools","Adventuring Gear (artisan's tools)"],
    ["Well of Many Worlds","/compendium/dnd5e/Well of Many Worlds","Adventuring Gear (wondrous item)"],
    ["Whetstone","/compendium/dnd5e/Whetstone","Adventuring Gear"],
    ["Whip","/compendium/dnd5e/Whip","Melee Weapon (martial, whip)"],
    ["Whip +1","/compendium/dnd5e/Whip +1","Melee Weapon"],
    ["Whip +2","/compendium/dnd5e/Whip +2","Melee Weapon"],
    ["Whip +3","/compendium/dnd5e/Whip +3","Melee Weapon"],
    ["Wind Fan","/compendium/dnd5e/Wind Fan","Adventuring Gear (wondrous item)"],
    ["Winged Boots","/compendium/dnd5e/Winged Boots","Adventuring Gear (wondrous item, feet)"],
    ["Wings of Flying","/compendium/dnd5e/Wings of Flying","Adventuring Gear (wondrous item)"],
    ["Woodcarver's Tools","/compendium/dnd5e/Woodcarver's Tools","Adventuring Gear (artisan's tools)"],
    ["Wooden Shield","/compendium/dnd5e/Wooden Shield","Shield (shield)"],
    ["Wooden staff","/compendium/dnd5e/Wooden staff","Adventuring Gear (arcane focus)"],
    ["Yew wand","/compendium/dnd5e/Yew wand","Adventuring Gear (druidic focus)"]
];

//Sample XP to CR comparisons
var XPtoCR = {
    '10': '0',
    '25': '⅛',
    '50': '¼',
    '100': '½',
    '200': '1',
    '450': '2',
    '700': '3',
    '1100': '4',
    '1800': '5',
    '2300': '6',
    '2900': '7',
    '3900"': '8',
    '5000': '9',
    '5900': '10',
    '7200': '11',
    '8400': '12',
    '10000': '13',
    '11500': '14',
    '13000': '15',
    '15000': '16',
    '18000': '17',
    '20000': '18',
    '22000': '19',
    '25000': '20',
    '33000': '21',
    '41000': '22',
    '50000': '23',
    '62000': '24',
    //'75000': '25'
};

var challengeRatings = {
    '0': 1,
    '⅛': 2,
    '¼': 3,
    '½': 4,
    '1': 5,
    '2': 6,
    '3': 7,
    '4': 8,
    '5': 9,
    '6': 10,
    '7': 11,
    '8': 12,
    '9': 13,
    '10': 14,
    '11': 15,
    '12': 16,
    '13': 17,
    '14': 18,
    '15': 19,
    '16': 20,
    '17': 21,
    '18': 22,
    '19': 23,
    '20': 24,
    '21': 25,
    '22': 26,
    '23': 27,
    '24': 28,
    //'25': 29,
};

var challengeRatingsInvert = [
    '0',
    '⅛',
    '¼',
    '½',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    //'25'
];

//Average XP for level 1 - 20 players, midway between medium and hard
var averageXPLevels = [
    68,
    125,
    188,
    313,
    625,
    750,
    925,
    1150,
    1350,
    1550,
    2000,
    2500,
    2800,
    3150,
    3550,
    4000,
    4900,
    5250,
    6100,
    7100,
    8500
];

//Monster XPDifficulty multiplier, for 1 - 15 monsters
var monsterXPMultiplier = [
    0.5,
    1,
    1.5,
    2,
    2,
    2,
    2,
    2.5,
    2.5,
    2.5,
    2.5,
    3,
    3,
    3,
    3,
    4,
    5
]

function calculateChallenge(partyCount, partyLevel){
    var XPRating_party,
        XPRating_monsters,
        count_eachMonster,
        XP_eachMonster,
        partyOffset = 0,
        viableMonster,
        viableMonsters = [],
        maxCR = '0',
        maxCRPosition = 1;

    /*
    if(partyCount < 3){
        partyOffset = -1;
    }

    if(partyCount > 5){
        partyOffset = 1;
    }
    */

    XPRating_party = averageXPLevels[partyLevel] * partyCount;

    console.log(XPRating_party);

    Object.keys(XPtoCR).forEach(function(index) {
        var viableWave = true;
        XP_eachMonster = index;
        count_eachMonster = 1;
        viableMonster = false;

        while(viableWave && count_eachMonster < 17){
            XPRating_monsters = XP_eachMonster * count_eachMonster * monsterXPMultiplier[count_eachMonster + partyOffset];

            if(XPRating_monsters < XPRating_party){
                viableMonster = true;

                count_eachMonster++;

                if(challengeRatings[XPtoCR[index]] > maxCRPosition){
                    maxCRPosition = challengeRatings[XPtoCR[index]];
                    maxCR = XPtoCR[index];
                }
            }
            else{
                if(viableMonster && count_eachMonster < 17){
                    viableMonsters.push({"CR":XPtoCR[index], "Count":(count_eachMonster-1)});
                }
                viableWave = false;
            }
        }
    });

    //return maxCR;
    return viableMonsters;
}
