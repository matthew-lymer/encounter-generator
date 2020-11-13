/*
    FUNCTIONS
*/
function randomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

function charismaScore(x){
    var score = Math.floor(x / 2) - 5;

    if(score >= 0){
        score = "+" + score;
    }

    return score;
}

function slugify(str){
    str = str.replace(/^\s+|\s+$/g, '');

    // Make the string lowercase
    str = str.toLowerCase();

    // Remove accents, swap ñ for n, etc
    var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
    var to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    // Remove invalid chars
    str = str.replace(/[^a-z0-9 -]/g, '')
    // Collapse whitespace and replace by -
    .replace(/\s+/g, '-')
    // Collapse dashes
    .replace(/-+/g, '-');

    return str;
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
    "The party comes across a Dwarven homestead in a little valley where they harvest maple syrup.",
    //DND Beyond Forum, d100 encounters
    "The players encounter a group of more experienced adventurers heading in the other direction. If the players are polite, they are given some healing potions.",
    "A naked gnome runs across the path, gasps at the party, then runs back. Cannot be pursued.",
    "Omen: A roll of thunder.",
    "Omen: A black dog runs across the path.",
    "Omen: A lone yellow flower is growing in the middle of the path.",
    "Omen: A shadow drifts over the party.",
    "Omen: A pool of blood.",
    "Omen: The earth shakes briefly.",
    "Omen: The sun bursts through an overclouded sky.",
    "Omen: A beautiful white horse dashes past the party and disappears.",
    "Omen: The players find an encampment of well armed, friendly humans. They may stay the night here and avoid a random encounter for the night.  ",
    "Omen: A dwarf falls out of the sky and splatters in front of the party. No logical source of the dwarf can be seen.",
    "Omen: A player (whoever does the roll) trips over, takes 1D4 bludgeoning damage.",
    "Omen: A stranger asks to be escorted to a town, but gives the party nothing for doing it.",
    "Omen: The party finds the tracks of wolves going across the path (DC10 Nature/Survival).",
    "Omen: A local ranger gives the party directions to their next destination, but he’s an ******* that sends them the wrong way. Increase the journey length.",
    "Omen: An arrow strikes a nearby tree, with a note attached to it. The note reads “You are a fool for looking!” No source of the arrow can be found.",
    "Omen: A dung beetle pushes a ball across the road. If disturbs, it bursts into a smog, doing 1D4 poison damage and leaves the party member poisoned.",
    "Omen: A mystery key is found laying in the road. If used on a locked door, roll a D20. A 20 will unlock the door, after which the key is lost.",
    "Omen: A thick fog prevents travel for the rest of the day.",
    "You were travelling in the wrong direction. Add a day of travel to your journey.",
    "Bard: A song of rest. Lose any debuffs.",
    "Bard: A song of good health. Gain 1D8 temporary hitpoints.",
    "Bard: A song of heroics. 1D6 party members gain inspiration.",
    "Bard: A song of misery. All party members with inspiration lose it.",
    "Bard: A song of battle. The next combat encounter grants double xp reward.",
    "Bard: A song of healing. Regain up to half your max HP.",
    "Bard: A song of pain. Lose 1D8 HP (after the bard has long since passed).",
    "Bard: A song of storms. A storm starts and forces the party to stop for the rest of the day.",
    "Bard: A song. Nothing special happens.  ",
    "Merchant: Only useful item for sale is a potion of vitality, 25gp.",
    "Merchant: Studded leather armour and basic weapons.",
    "Merchant: Five healing potions, 30gp each.",
    "Merchant: Basic adventuring equipment.",
    "Merchant: Wood.",
    "Merchant: Hunters bounty. Fresh meat, some herbs.",
    "Merchant: Herbalist (can give directions).",
    "Merchant: Fisherman",
    "Merchant: Gem & Jewelery merchant (500gp worth of loot)",
    "Merchant: Bug catcher. A DC15 Nature check reveals a cartomoth, that will show them a shortcut if released. 10gp.",
    "The party catches up with and overtaking a slow travelling farmer, bickering with his wife. They know nothing useful.",
    "There is an unusually vocal chorus of birdsong. Druids, Hunters, Clerics gain inspiration.",
    "A stranger asks for directions from the party to the last town they left. If they help him, he gives them 1D6x10 gold when they next appear in town, if ever.",
    "A line of Goblin heads on spikes line the road. A sign written in Goblin next to them says “Traitors of Yeemik”.",
    "A man is trapped under a log. If the party helps him, he disappears - it was an illusion.",
    "The party finds a sword in a stone. A DC15 Strength check pulls it out. It is a +1 Longsword.",
    "A flower girl skips down the path towards the party, but disappears before she reaches them.#",
    "The party meets an old priest and a young priest, who offer them a blessing. The party has advantage on attacks against undead till they next take a long rest.",
    "A temple is found on a roll. Use a D6 to determine which God, of the six below, it is dedicated to.",
    "Shrine to Tymora - If the party makes an offering, they all gain inspiration",
    "Shrine to Chauntea - If the party makes an offering, the rest of the day has no violent encounters",
    "Shrine to Mask - If the party makes an offering, they get a surprise round in their next encounter.",
    "Shrine to Mystra - If the party makes an offering, all spellslots are recovered.",
    "Shrine to Oghma - If the party makes an offering, they find a shortcut that reduces their journey by 1D4 encounters.",
    "Shrine to Waukeen - If the party makes an offering, they later find the amount they offered in each of their pockets.",
    "Abandoned, unidentifiable Shrine - If the party doesn’t make an offering, they trigger a combat encounter.",
    "Shrine to nature spirits - If the party doesn’t make an offering, a great storm prevents them from travelling any further that day.",
    "Demon Shrine, covered in blood - If the party makes an offering, they trigger a combat encounter.",
    "Shrine to Bhaal, destroyed - Nothing happens.",
    "Trap: DC10 Dex check or 1D6 bludgeoning damage, pit fall.",
    "Trap: DC15 Dex check or 1D8 bludgeoning damage, pit fall.",
    "Trap: DC20 Dex check or 1D12 bludgeoning damage, pit fall.",
    "Trap: DC10 Per check or snared, 1D6 bludgeoning damage if cut loose without landing being factored in.",
    "Trap: DC15 Per check or snared, 1D6 bludgeoning damage if cut loose without landing being factored in.",
    "Trap: DC20 Per check or snared, 1D6 bludgeoning damage if cut loose without landing being factored in.",
    "Trap: DC15 Per check or whole party snared by net, roll combat encounter.",
    "Trap: A cupcake lays in the middle of the road. If the party approaches, they trigger a pitfall into spikes. 3D6 piercing damage.",
    "Trap: Magic rune (DC15 Per to detect) triggers, paralyzing party. Roll for a combat encounter.",
    "Trap: Door in the middle of the path. If opened, a Hobgoblin is on the other side and gets a surprise attack. If walked around, the Hobgoblin flees.",
    "Riddle: I have a tail, but no body. I have a head, but no brain. What am I? (coins, 50gp reward)",
    "Riddle: What is running around Waterdeep, yet never truly moving? (The wall, Healing potion reward per player)",
    "Riddle: My rivers are dry, my forests have no trees, my towns are flat and empty, and my roads cannot be walked on. What am I? (A map. The party's journey is shortened)",
    "Riddle: Two bodies have I, though both joined in one. The more still I stand, the quicker I run. What am I? (An hourglass. Time slows down if they get it, and immediately skips to night if they don’t)",
    "Riddle: What kind of ear cannot hear? (An ear of corn. Potion of Cure Silence, everyone deafened if they don’t get it)",
    "Riddle: What has four wheels and flies? (A garbage wagon. Potion of flight if correct, attacked by Stirges if they don’t get it)",
    "A DC10 Perception check spots a small chest hidden a tree. It contains a gold ring worth 20gp.",
    "A DC15 Perception check spots a small chest hidden in a tree. It contains 44gp.",
    "A DC20 Perception check spots a chest hidden in a tree. It contains a +1 Short Sword.",
    "A DC10 Perception check spots a small chest hidden in a tree. It contains a dead mouse.",
    "A strong storm picks up.",
    "The party finds a random cow. No amount of investigation reveals anything of significance about the cow or where it came from.",
    "A stranger asks to be escorted to the nearest town. If the party agrees, the stranger gives them 100gp upon delivery.",
    "A group of excited gnomes bounce past the party. If the party is polite to them, one gives them a useless gizmo that makes a chirping noise when wound up.",
    "A man is trapped under a log. If the party helps him, do a DC15 check. A failure drops the log and crushes the man. He has nothing of value on him, but the saviour gets inspiration if they succeed.",
    "A man is buried in the road up to his neck, with the ground around him undisturbed. If the party helps him, the head pops out the ground and crawls off on spider legs, cackling. The party takes a DC14 Wisdom saving throw, taking 1D10 psychic damage on a failure.",
    "An enormous dragon flies over head.",
    "A DC10 Perception check spots caltrops over the floor which do 1D4 piercing damage to the party if they don’t spot them.",
    "A drunken dwarf challenges the strongest looking party member to a wrestling match. A DC15 Strength check beats her, and she gives the party member 5gp. The party member gains a level of exhaustion on a failure.",
    "A road sign points back to wherever the party came from, but is otherwise useless.",
    "A vagrant asks for food. Nothing happens if they give him some.",
    "A vagrant asks for money. Nothing happens if they give him some.  ",
    "A vagrant asks for money. They get triple what they give back if they give him some.",
    "The party finds the tracks of an Owlbear going across the road (DC10 Nature/Survival).",
    "A local ranger gives the party directions to their next destination, shorting their journey.",
    "A mirror image of the party walks towards them, but disappears before reaching them.",
    "The party notices that they are being followed by a bush, which runs into the forest when they attempt to investigate. If they pursue, they find a goblin, that throws a gold coin at them to make them go away.",
    "A stranger on the road tells each PC to repent of their sins. He knows details.",
    "A door stands in the middle of the road. If opened, the frame bursts with confetti, then disappears.",
    "The party finds 100gp in a chest in the middle of the road."
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

    NPCHtml2 += ("<b>Charisma</b> | ")
    var randnum = Math.floor(Math.random() * (20 - 1)) + 1; //From 1 - 20
    NPCHtml2 += randnum + " (" + charismaScore(randnum) + ")";


    NPCHtml2 += ("<br /><b>Eyes</b> |")
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
    eyes[16] = '\ grey';

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

    var colourRef = [];
    colourRef[0] = 'brown';
    colourRef[1] = 'brown';
    colourRef[2] = 'brown';
    colourRef[3] = 'black';
    colourRef[4] = 'black';
    colourRef[5] = 'yellow';
    colourRef[6] = 'yellow';
    colourRef[7] = 'red';
    colourRef[8] = 'red';
    colourRef[9] = 'transparent';

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

    var hairColourRef = [];
    hairColourRef[0] = 'none';
    hairColourRef[1] = 'green';
    hairColourRef[2] = 'blue';
    hairColourRef[3] = 'silver';
    hairColourRef[4] = 'white';
    hairColourRef[5] = 'grey';
    hairColourRef[6] = 'orange';
    hairColourRef[7] = 'red';
    hairColourRef[8] = 'pink';
    hairColourRef[9] = 'linear-gradient(to right, red, orange, yellow, green, blue, violet)';
    hairColourRef[10] = 'violet';
    hairColourRef[11] = 'darkgreen';
    hairColourRef[12] = 'darkblue';
    hairColourRef[13] = 'silver';
    hairColourRef[14] = 'white';
    hairColourRef[15] = 'black';
    hairColourRef[16] = 'teal';
    hairColourRef[17] = 'linear-gradient(to right, yellow, blue, yellow)';
    hairColourRef[18] = 'pink';
    hairColourRef[19] = 'lightblue';

    var rhair = Math.random() * hair.length;
    rhair = Math.floor(rhair);

    if (rcolor<9)
    {
    NPCHtml2 += (color[rcolor]);
    NPCHtml2 += '<i class="col" style="background:'+colourRef[rcolor]+';"></i>';
    }
    else
    {
    NPCHtml2 += (hair[rhair]);
    NPCHtml2 += '<i class="col" style="background:'+hairColourRef[rhair]+';"></i>';
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

function monsterGenerator(monsterCR,monsterName){
    var monsterHTML,
        monsterID,
        monstersDetailsFiltered = [],
        checkCR = false,
        checkName = false;

    if(monsterCR !== "Any CR"){
        checkCR = true;
    }

    if(monsterName.length > 0){
        checkName = true;
    }

    if(checkCR == false && checkName == false){
        monsterID = randomInt(0,monsters.length);
        return monsters[monsterID];
    }
    else{
        monsters.forEach(function(value){
            if(checkName){
                if(checkCR){
                    if(value["name"].toLowerCase().indexOf(monsterName.toLowerCase()) !== -1 && "CR " + value["challenge_rating"] == monsterCR){
                        monstersDetailsFiltered.push(value);
                    }
                }
                else{
                    if(value["name"].toLowerCase().indexOf(monsterName.toLowerCase()) !== -1){
                        monstersDetailsFiltered.push(value);
                    }
                }
            }
            else{
                if("CR " + value["challenge_rating"] == monsterCR){
                    monstersDetailsFiltered.push(value);
                }
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

var raceList = [
    {
        "title": "Dragonborn",
        "description": "<p>Your draconic heritage manifests in a variety of traits you share with other dragonborn.</p><p><strong>Ability Score Increase.</strong> Your Strength score increases by 2, and your Charisma score increases by 1.</p><p><strong>Speed.</strong> Your base walking speed is 30 feet.</p>  <p><strong>Age.</strong> Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.</p><p><strong>Alignment.</strong> Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.</p><p><strong>Size.</strong> Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.</p><p><strong>Languages.</strong> You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.</p><p><strong>Draconic Ancestry</strong></p><table><thead><tr><th width='25%'>Dragon</th><th width='25%'>Damage Type</th><th width='50%'>Breath Weapon</th></tr></thead><tbody><tr><td>Black</td><td>Acid</td><td>5 by 30 ft. line (Dex. save)</td></tr><tr><td>Blue</td><td>Lightning</td><td>5 by 30 ft. line (Dex. save)</td></tr><tr><td>Brass</td><td>Fire</td><td>5 by 30 ft. line (Dex. save)</td></tr><tr><td>Bronze</td><td>Lightning</td><td>5 by 30 ft. line (Dex. save)</td></tr><tr><td>Copper</td><td>Acid</td><td>5 by 30 ft. line (Dex. save)</td></tr><tr><td>Gold</td><td>Fire</td><td>15 ft. cone (Dex. save)</td></tr><tr><td>Green</td><td>Poison</td><td>15 ft. cone (Con. save)</td></tr><tr><td>Red</td><td>Fire</td><td>15 ft. cone (Dex. save)</td></tr><tr><td>Silver</td><td>Cold</td><td>15 ft. cone (Con. save)</td></tr><tr><td>White</td><td>Cold</td><td>15 ft. cone (Con. save)</td></tr></tbody></table><p><strong>Draconic Ancestry.</strong> You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.</p><p><strong>Breath Weapon.</strong> You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest.</p><p><strong>Damage Resistance.</strong> You have resistance to the damage type associated with your draconic ancestry.</p>",
        "subraces": []
    },
    {
        "title": "Dwarf",
        "description": "<p>Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.</p><p><strong>Ability Score Increase.</strong> Your Constitution score increases by 2.</p><p><strong>Speed.</strong> Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.</p><p><strong>Darkvision.</strong> Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.</p><p><strong>Age.</strong> Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.</p><p><strong>Alignment.</strong> Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.</p><p><strong>Size.</strong> Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.</p><p><strong>Languages.</strong> You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.</p><p><strong>Dwarven Resilience.</strong> You have advantage on saving throws against poison, and you have resistance against poison damage.</p><p><strong>Dwarven Combat Training.</strong> You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.</p><p><strong>Tool Proficiency.</strong> You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.</p><p><strong>Stonecunning.</strong> Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.</p>",
        "subraces": [
            {
                "title": "Hill Dwarf",
                "description": "<p>As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.</p><p><strong>Ability Score Increase.</strong> Your Wisdom score increases by 1</p><p><strong>Dwarven Toughness.</strong> Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.</p>"
            }
        ]
    },
    {
        "title": "Elf",
        "description": "<p>Your elf character has a variety of natural abilities, the result of thousands of years of elven refinement.</p><p><strong>Ability Score Increase.</strong> Your Dexterity score increases by 2.</p><p><strong>Speed.</strong> Your base walking speed is 30 feet.</p><p><strong>Darkvision.</strong> Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.</p><p><strong>Age.</strong> Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.</p><p><strong>Alignment.</strong> Elves love freedom, variety, and self- expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not. The drow are an exception; their exile has made them vicious and dangerous. Drow are more often evil than not.</p><p><strong>Size.</strong> Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.</p><p><strong>Languages.</strong> You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.</p><p><strong>Keen Senses.</strong> You have proficiency in the Perception skill.</p><p><strong>Fey Ancestry.</strong> You have advantage on saving throws against being charmed, and magic can't put you to sleep.</p><p><strong>Trance.</strong> Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.</p>",
        "subraces": [
            {
                "title": "High Elf",
                "description": "<p>As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many fantasy gaming worlds, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type is more common and more friendly, and often encountered among humans and other races.</p><p><strong>Ability Score Increase.</strong> Your Intelligence score increases by 1.</p><p><strong>Elf Weapon Training.</strong> You have proficiency with the longsword, shortsword, shortbow, and longbow.</p><p><strong>Cantrip.</strong> You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.</p><p><strong>Extra Language.</strong> You can speak, read, and write one extra language of your choice.</p>"
            }
        ]
    },
    {
        "title": "Gnome",
        "description": "<p>Your gnome character has certain characteristics in common with all other gnomes.</p><p><strong>Ability Score Increase.</strong> Your Intelligence score increases by 2.</p><p><strong>Speed.</strong> Your base walking speed is 25 feet.</p><p><strong>Darkvision.</strong> Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.</p><p><strong>Age.</strong> Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.</p><p><strong>Alignment.</strong> Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.</p><p><strong>Size.</strong> Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.</p><p><strong>Languages.</strong> You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.</p><p><strong>Gnome Cunning.</strong> You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.</p>",
        "subraces": [
            {
                "title": "Rock Gnome",
                "description": "<p>As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes.</p><p><strong>Ability Score Increase.</strong> Your Constitution score increases by 1.</p><p><strong>Artificer's Lore.</strong> Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.</p><p><strong>Tinker.</strong> You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options:</p><ul><li>Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.</li><li>Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.</li><li>Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.</li></ul>"
            }
        ]
    },
    {
        "title": "Half-Elf",
        "description": "<p>Your half-elf character has some qualities in common with elves and some that are unique to half-elves.</p><p><strong>Ability Score Increase.</strong> Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.</p><p><strong>Speed.</strong> Your base walking speed is 30 feet.</p><p><strong>Darkvision.</strong> Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.</p><p><strong>Age.</strong> Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.</p><p><strong>Alignment.</strong> Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.</p><p><strong>Size.</strong> Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.</p><p><strong>Languages.</strong> You can speak, read, and write Common, Elvish, and one extra language of your choice.</p><p><strong>Fey Ancestry.</strong> You have advantage on saving throws against being charmed, and magic can't put you to sleep.</p><p><strong>Skill Versatility.</strong> You gain proficiency in two skills of your choice.</p>",
        "subraces": []
    },
    {
        "title": "Half-Orc",
        "description": "<p>Your half-orc character has certain traits deriving from your orc ancestry.</p><p><strong>Ability Score Increase.</strong> Your Strength score increases by 2, and your Constitution score increases by 1.</p><p><strong>Speed.</strong> Your base walking speed is 30 feet.</p><p><strong>Darkvision.</strong> Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.</p><p><strong>Age.</strong> Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.</p><p><strong>Alignment.</strong> Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.</p><p><strong>Size.</strong> Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.</p><p><strong>Languages.</strong> You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.</p><p><strong>Menacing.</strong> You gain proficiency in the Intimidation skill.</p><p><strong>Relentless Endurance.</strong> When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.</p><p><strong>Savage Attacks.</strong> When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.</p>",
        "subraces": []
    },
    {
        "title": "Halfling",
        "description": "<p>Your halfling character has a number of traits in common with all other halflings.</p><p><strong>Ability Score Increase.</strong> Your Dexterity score increases by 2.</p><p><strong>Speed.</strong> Your base walking speed is 25 feet.</p><p><strong>Age.</strong> A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.</p><p><strong>Alignment.</strong> Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.</p><p><strong>Size.</strong> Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.</p><p><strong>Languages.</strong> You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.</p><p><strong>Lucky.</strong> When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.</p><p><strong>Brave.</strong> You have advantage on saving throws against being frightened.</p><p><strong>Halfling Nimbleness.</strong> You can move through the space of any creature that is of a size larger than yours.</p>",
        "subraces": [
            {
                "title": "Lightfoot",
                "description": "<p>As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You're inclined to be affable and get along well with others. Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life.</p><p><strong>Ability Score Increase.</strong> Your Charisma score increases by 1.</p><p><strong>Naturally Stealthy.</strong> You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.</p>"
            }
        ]
    },
    {
        "title": "Human",
        "description": "<p>It's hard to make generalizations about humans, but your human character has these traits.</p><p><strong>Ability Score Increase.</strong> Your ability scores each increase by 1.</p><p><strong>Speed.</strong> Your base walking speed is 30 feet.</p>  <p><strong>Age.</strong> Humans reach adulthood in their late teens and live less than a century.</p><p><strong>Alignment.</strong> Humans tend toward no particular alignment. The best and the worst are found among them.</p><p><strong>Size.</strong> Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.</p><p><strong>Languages.</strong> You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.</p>",
        "subraces": []
    },
    {
        "title": "Tiefling",
        "description": "<p>Tieflings share certain racial traits as a result of their infernal descent.</p><p><strong>Ability Score Increase.</strong> Your Intelligence score increases by 1, and your Charisma score increases by 2.</p><p><strong>Speed.</strong> Your base walking speed is 30 feet.</p><p><strong>Darkvision.</strong> Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.</p><p><strong>Age.</strong> Tieflings mature at the same rate as humans but live a few years longer.</p><p><strong>Alignment.</strong> Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.</p><p><strong>Size.</strong> Tieflings are about the same size and build as humans. Your size is Medium.</p><p><strong>Languages.</strong> You can speak, read, and write Common and Infernal.</p><p><strong>Hellish Resistance.</strong> You have resistance to fire damage.</p><p><strong>Infernal Legacy.</strong> You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.</p>",
        "subraces": []
    }
];

var classList = [
    {
        "name": "Barbarian",
        "desc": "<h3 id='barbarian_rage'>Rage</h3><p>In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.</p><p>While raging, you gain the following benefits if you aren't wearing heavy armor:</p><ul><li>You have advantage on Strength checks and Strength saving throws.</li><li>When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.</li><li>You have resistance to bludgeoning, piercing, and slashing damage.</li></ul><p>If you are able to cast spells, you can't cast them or concentrate on them while raging.</p><p>Your rage lasts for 1 minute. It ends early if you are knocked srd:unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.</p><p>Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.</p><h3 id='barbarian_unarmoreddefense'>Unarmored Defense</h3><p>While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.</p><h3 id='barbarian_recklessattack'>Reckless Attack</h3><p>Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.</p><h3 id='barbarian_dangersense'>Danger Sense</h3><p>At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger.</p><p>You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be srd:blinded, srd:deafened, or srd:incapacitated.</p><h3 id='barbarian_primalpath'>Primal Path</h3><p>At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.</p><h3 id='barbarian_abilityscoreimprovement'>Ability Score Improvement</h3><p>When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.</p><h3 id='barbarian_extraattack'>Extra Attack</h3><p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.</p><h3 id='barbarian_fastmovement'>Fast Movement</h3><p>Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor.</p><h3 id='barbarian_feralinstinct'>Feral Instinct</h3><p>By 7th level, your instincts are so honed that you have advantage on initiative rolls.</p><p>Additionally, if you are surprised at the beginning of combat and aren't srd:incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.</p><h3 id='barbarian_brutalcritical'>Brutal Critical</h3><p>Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.</p><p>This increases to two additional dice at 13th level and three additional dice at 17th level.</p><h3 id='barbarian_relentlessrage'>Relentless Rage</h3><p>Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.</p><p>Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.</p><h3 id='barbarian_persistentrage'>Persistent Rage</h3><p>Beginning at 15th level, your rage is so fierce that it ends early only if you fall srd:unconscious or if you choose to end it.</p><h3 id='barbarian_indomitablemight'>Indomitable Might</h3><p>Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.</p><h3 id='barbarian_primalchampion'>Primal Champion</h3><p>At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.</p>",
        "hp": "<strong>Hit Points</strong><br><strong>Hit Dice:</strong> 1d12<br><strong>Hit Dice as 1st level:</strong> 12 + your Constitution modifier<br><strong>Hit Dice at higher levels:</strong> 1d12 (or 7) + your Constitution modifier per barbarian level after 1st",
        "prof":"<strong>Proficiencies</strong><br><strong>Armour:</strong> Light armor, medium armor, shields<br><strong>Weapons:</strong> Simple weapons, martial weapons<br><strong>Tools:</strong> None<br><strong>Saving Throws:</strong> Strength, Constitution<br><strong>Skills:</strong> Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival",
        "equipment": "<strong>Starting Equipment</strong><br>You start with the following equipment, in addition to the equipment granted by your background:<ul><li>(a) a greataxe or (b) any martial melee weapon</li><li>(a) two handaxes or (b) any simple weapon</li><li>An explorer's pack and four javelins</li></ul>",
        "table": "<table><tbody><tr><th>Level</th><th>Proficiency Bonus</th><th>Features</th><th>Rages</th><th>Rage Damage</th></tr><tr><td>1st</td><td>+2</td><td>Rage, Unarmored Defense</td><td>2</td><td>+2</td></tr><tr><td>2nd</td><td>+2</td><td>Reckless Attack, Danger Sense</td><td>2</td><td>+2</td></tr><tr><td>3rd</td><td>+2</td><td>Primal Path</td><td>3</td><td>+2</td></tr><tr><td>4th</td><td>+2</td><td>Ability Score Improvement</td><td>3</td><td>+2</td></tr><tr><td>5th</td><td>+3</td><td>Extra Attack, Fast Movement</td><td>3</td><td>+2</td></tr><tr><td>6th</td><td>+3</td><td>Path feature</td><td>4</td><td>+2</td></tr><tr><td>7th</td><td>+3</td><td>Feral Instinct</td><td>4</td><td>+2</td></tr><tr><td>8th</td><td>+3</td><td>Ability Score Improvement</td><td>4</td><td>+2</td></tr><tr><td>9th</td><td>+4</td><td>Brutal Critical (1 die)</td><td>4</td><td>+3</td></tr><tr><td>10th</td><td>+4</td><td>Path feature</td><td>4</td><td>+3</td></tr><tr><td>11th</td><td>+4</td><td>Relentless</td><td>4</td><td>+3</td></tr><tr><td>12th</td><td>+4</td><td>Ability Score Improvement</td><td>5</td><td>+3</td></tr><tr><td>13th</td><td>+5</td><td>Brutal Critical (2 dice)</td><td>5</td><td>+3</td></tr><tr><td>14th</td><td>+5</td><td>Path feature</td><td>5</td><td>+3</td></tr><tr><td>15th</td><td>+5</td><td>Persistent Rage</td><td>5</td><td>+3</td></tr><tr><td>16th</td><td>+5</td><td>Ability Score Improvement</td><td>5</td><td>+4</td></tr><tr><td>17th</td><td>+6</td><td>Brutal Critical (3 dice)</td><td>6</td><td>+4</td></tr><tr><td>18th</td><td>+6</td><td>Indomitable Might</td><td>6</td><td>+4</td></tr><tr><td>19th</td><td>+6</td><td>Ability Score Improvement</td><td>6</td><td>+4</td></tr><tr><td>20th</td><td>+6</td><td>Primal Champion</td><td>Unlimited</td><td>+4</td></tr></tbody></table>",
        "spellcasting_ability": "",
        "subtypes_name": "Paths",
        "archetypes": [
            {
                "name": "Path of the Berserker",
                "desc": "<h3 id='barbarian_pathoftheberserker'>Path of the Berserker</h3><p>For some barbarians, rage is a means to an end - that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.</p><h4 id='barbarian_frenzy'>Frenzy</h4><p>Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of srd:exhaustion.</p><h4 id='barbarian_mindlessrage'>Mindless Rage</h4><p>Beginning at 6th level, you can't be srd:charmed or srd:frightened while raging. If you are srd:charmed or srd:frightened when you enter your rage, the effect is suspended for the duration of the rage.</p><h4 id='barbarian_intimidatingpresence'>Intimidating Presence</h4><p>Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be srd:frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the srd:frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.</p><p>If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours.</p><h4 id='barbarian_retaliation'>Retaliation</h4><p>Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.</p>"
            }
        ],
    },
    {
        "name": "Bard",
        "desc": "<h3 id='spellcasting'>Spellcasting</h3><p>You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music.</p><p>Your spells are part of your vast repertoire, magic that you can tune to different situations.</p><h4 id='cantrips'>Cantrips</h4><p>You know two cantrips of your choice from the <a href='/spells/by-class/bard'>Bard Spell List</a>. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.</p><h4 id='spellslots'>Spell Slots</h4><p>The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.</p><p>For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.</p><h4 id='spellsknownof1stlevelandhigher'>Spells Known of 1st Level and Higher</h4><p>You know four 1st-level spells of your choice from the <a href='/spells/by-class/bard'>Bard Spell List</a>.</p><p>The Spells Known column of the Bard table shows when you learn more bard spells of your choice. Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.</p><p>Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.</p><h4 id='spellcastingability'>Spellcasting Ability</h4><p>Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.</p><blockquote><p><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Charisma modifier</p><p><strong>Spell attack modifier</strong> = your proficiency bonus + your Charisma modifier</p></blockquote><h4 id='ritualcasting'>Ritual Casting</h4><p>You can cast any bard spell you know as a ritual if that spell has the ritual tag.</p><h4 id='spellcastingfocus'>Spellcasting Focus</h4><p>You can use a musical instrument (see <strong>adventuring-gear</strong>) as a spellcasting focus for your bard spells.</p><h3 id='bardicinspiration'>Bardic Inspiration</h3><p>You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.</p><p>Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.</p><p>You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.</p><p>Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.</p><h3 id='jackofalltrades'>Jack of All Trades</h3><p>Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.</p><blockquote><p><strong>Note:</strong></p><p>Jack of all trades applies only to ability checks, not attack rolls or saving throws. However since initiative rolls are Dexterity checks Jack of All Trades does apply to initiative rolls as long as it is not already benefiting from the character's proficiency bonus.</p></blockquote><h3 id='songofrest'>Song of Rest</h3><p>Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.</p><p>The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.</p><h3 id='bardcollege'>Bard College</h3><p>At 3rd level, you delve into the advanced techniques of a bard college of your choice, such as the College of Lore. Your choice grants you features at 3rd level and again at 6th and 14th level.</p><h3 id='expertise'>Expertise</h3><p>At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.</p><p>At 10th level, you can choose another two skill proficiencies to gain this benefit.</p><h3 id='abilityscoreimprovement'>Ability Score Improvement</h3><p>When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.</p><h3 id='fontofinspiration'>Font of Inspiration</h3><p>Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.</p><h3 id='countercharm'>Countercharm</h3><p>At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being <strong>frightened</strong> or <strong>charmed</strong>. A creature must be able to hear you to gain this benefit. The performance ends early if you are <strong>incapacitated</strong> or silenced or if you voluntarily end it (no action required).</p><h3 id='magicalsecrets'>Magical Secrets</h3><p>By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.</p><p>The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.</p><p>You learn two additional spells from any class at 14th level and again at 18th level.</p><h3 id='superiorinspiration'>Superior Inspiration</h3><p>At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.</p>",
        "hp": "<strong>Hit Points</strong><br><strong>Hit Dice:</strong> 1d8<br><strong>Hit Dice as 1st level:</strong> 8 + your Constitution modifier<br><strong>Hit Dice at higher levels:</strong> 1d8 (or 5) + your Constitution modifier per bard level after 1st",
        "prof":"<strong>Proficiencies</strong><br><strong>Armour:</strong> Light armor<br><strong>Weapons:</strong> Simple weapons, hand crossbows, longswords, rapiers, shortswords<br><strong>Tools:</strong> Three musical instruments of your choice<br><strong>Saving Throws:</strong> Dexterity, Charisma<br><strong>Skills:</strong> Choose any three",
        "equipment": "<strong>Starting Equipment</strong><br>You start with the following equipment, in addition to the equipment granted by your background:<ul><li>(a) a rapier, (b) a longsword, or (c) any simple weapon</li><li>(a) a diplomat's pack or (b) an entertainer's pack</li><li>(a) a lute or (b) any other musical instrument</li><li>Leather armor and a dagger</li></ul>",
        "table": "<table><thead><tr><th rowspan='2'>Level</th><th rowspan='2'>Proficiency Bonus</th><th rowspan='2'>Features</th><th rowspan='2'>Cantrips Known</th><th rowspan='2'>Spells Known</th><th colspan='9'>—Spell Slots per Spell Level—</th></tr><tr><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th>5th</th><th>6th</th><th>7th</th><th>8th</th><th>9th</th></tr></thead><tbody><tr><td>1st</td><td>+2</td><td>Spellcasting, Bardic Inspiration (d6)</td><td>2</td><td>4</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>2nd</td><td>+2</td><td>Jack of All Trades, Song of Rest (d6)</td><td>2</td><td>5</td><td>3</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>3rd</td><td>+2</td><td>Bard College, Expertise</td><td>2</td><td>6</td><td>4</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>4th</td><td>+2</td><td>Ability Score Improvement</td><td>3</td><td>7</td><td>4</td><td>3</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>5th</td><td>+3</td><td>Bardic Inspiration (d8), Font of Inspiration</td><td>3</td><td>8</td><td>4</td><td>3</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>6th</td><td>+3</td><td>Countercharm, Bard College feature</td><td>3</td><td>9</td><td>4</td><td>3</td><td>3</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>7th</td><td>+3</td><td>—</td><td>3</td><td>10</td><td>4</td><td>3</td><td>3</td><td>1</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>8th</td><td>+3</td><td>Ability Score Improvement</td><td>3</td><td>11</td><td>4</td><td>3</td><td>3</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>9th</td><td>+4</td><td>Song of Rest (d8)</td><td>3</td><td>12</td><td>4</td><td>3</td><td>3</td><td>3</td><td>1</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>10th</td><td>+4</td><td>Bardic Inspiration (d10), Expertise, Magical Secrets</td><td>4</td><td>14</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>11th</td><td>+4</td><td>—</td><td>4</td><td>15</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>—</td><td>—</td><td>—</td></tr><tr><td>12th</td><td>+4</td><td>Ability Score Improvement</td><td>4</td><td>15</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>—</td><td>—</td><td>—</td></tr><tr><td>13th</td><td>+5</td><td>Song of Rest (d10)</td><td>4</td><td>16</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>—</td><td>—</td></tr><tr><td>14th</td><td>+5</td><td>Magical Secrets, Bard College feature</td><td>4</td><td>18</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>—</td><td>—</td></tr><tr><td>15th</td><td>+5</td><td>Bardic Inspiration (d12)</td><td>4</td><td>19</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>—</td></tr><tr><td>16th</td><td>+5</td><td>Ability Score Improvement</td><td>4</td><td>19</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>—</td></tr><tr><td>17th</td><td>+6</td><td>Song of Rest (d12)</td><td>4</td><td>20</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>1</td></tr><tr><td>18th</td><td>+6</td><td>Magical Secrets</td><td>4</td><td>22</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>1</td><td>1</td><td>1</td><td>1</td></tr><tr><td>19th</td><td>+6</td><td>Ability Score Improvement</td><td>4</td><td>22</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td></tr><tr><td>20th</td><td>+6</td><td>Superior Inspiration</td><td>4</td><td>22</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>2</td><td>2</td><td>1</td><td>1</td></tr></tbody></table>",
        "spellcasting_ability": "Charisma",
        "subtypes_name": "Colleges",
        "archetypes": [
            {
                "name": "College of Lore",
                "desc": "<h3 id='collegeoflore'>College of Lore</h3><p>Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king.</p><p>The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic.</p><p>The college's members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority.</p><h4 id='bonusproficiencies'>Bonus Proficiencies</h4><p>When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice.</p><h4 id='cuttingwords'>Cutting Words</h4><p>Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll. You can choose to use this feature after the creature makes its roll, but before the GM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being <strong>charmed</strong>.</p><h4 id='additionalmagicalsecrets'>Additional Magical Secrets</h4><p>At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know.</p><h4 id='peerlessskill'>Peerless Skill</h4><p>Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the GM tells you whether you succeed or fail.</p>",
            }
        ],
    },
    {"name": "Cleric (Coming Soon)"},
    {"name": "Druid (Coming Soon)"},
    {"name": "Fighter (Coming Soon)"},
    {"name": "Monk (Coming Soon)"},
    {"name": "Paladin (Coming Soon)"},
    {"name": "Ranger (Coming Soon)"},
    {"name": "Rogue (Coming Soon)"},
    {"name": "Sorcerer (Coming Soon)"},
    {"name": "Warlock (Coming Soon)"},
    {"name": "Wizard (Coming Soon)"}
    // {
    //     "name": "Cleric",
    //     "slug": "cleric",
    //     "desc": "### Spellcasting \n \nAs a conduit for divine power, you can cast cleric spells. \n \n#### Cantrips \n \nAt 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table. \n \n#### Preparing and Casting Spells \n \nThe Cleric table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. \n \nYou prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots. \n \nFor example, if you are a 3rd-level cleric, you have four \n1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell *cure wounds*, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells. \n \nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list. \n \n#### Spellcasting Ability \n \nWisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one. \n \n**Spell save DC** = 8 + your proficiency bonus + your Wisdom modifier \n \n**Spell attack modifier** = your proficiency bonus + your Wisdom modifier \n \n#### Ritual Casting \n \nYou can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared. \n \n#### Spellcasting Focus \n \nYou can use a holy symbol (see chapter 5, “Equipment”) as a spellcasting focus for your cleric spells. \n \n### Divine Domain \n \nChoose one domain related to your deity: Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Each domain is detailed at the end of the class description, and each one provides examples of gods associated with it. Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels. \n \n#### Domain Spells \n \nEach domain has a list of spells-its domain spells- that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. \n \nIf you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you. \n \n### Channel Divinity \n \nAt 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description. \n \nWhen you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again. \n \nSome Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC. \n \nBeginning at 6th level, you can use your Channel \n \nDivinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses. \n \n#### Channel Divinity: Turn Undead \n \nAs an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage. \n \nA turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Destroy Undead \n \nStarting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold, as shown in the Destroy Undead table. \n \n**Destroy Undead (table)** \n \n| Cleric Level | Destroys Undead of CR... | \n|--------------|--------------------------| \n| 5th          | 1/2 or lower             | \n| 8th          | 1 or lower               | \n| 11th         | 2 or lower               | \n| 14th         | 3 or lower               | \n| 17th         | 4 or lower               | \n \n### Divine Intervention \n \nBeginning at 10th level, you can call on your deity to intervene on your behalf when your need is great. \n \nImploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The GM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate. \n \nIf your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest. \n \nAt 20th level, your call for intervention succeeds automatically, no roll required.",
    //     "hit_dice": "1d8",
    //     "hp_at_1st_level": "8 + your Constitution modifier",
    //     "hp_at_higher_levels": "1d8 (or 5) + your Constitution modifier per cleric level after 1st",
    //     "prof_armor": "Light armor, medium armor, shields",
    //     "prof_weapons": "Simple weapons",
    //     "prof_tools": "None",
    //     "prof_saving_throws": "Wisdom, Charisma",
    //     "prof_skills": "Choose two from History, Insight, Medicine, Persuasion, and Religion",
    //     "equipment": "You start with the following equipment, in addition to the equipment granted by your background: \n \n* (*a*) a mace or (*b*) a warhammer (if proficient) \n* (*a*) scale mail, (*b*) leather armor, or (*c*) chain mail (if proficient) \n* (*a*) a light crossbow and 20 bolts or (*b*) any simple weapon \n* (*a*) a priest's pack or (*b*) an explorer's pack \n* A shield and a holy symbol",
    //     "table": " Level | Proficiency Bonus | Features                                                                | Cantrips Known | 1st | 2nd | 3rd | 4th | 5th | 6th | 7th | 8th | 9th | \n| 1st   | +2                | Spellcasting, Divine Domain                                             | 3              | 2   | -   | -   | -   | -   | -   | -   | -   | -   | \n| 2nd   | +2                | Channel Divinity (1/rest), Divine Domain Feature                        | 3              | 3   | -   | -   | -   | -   | -   | -   | -   | -   | \n| 3rd   | +2                | -                                                                       | 3              | 4   | 2   | -   | -   | -   | -   | -   | -   | -   | \n| 4th   | +2                | Ability Score Improvement                                               | 4              | 4   | 3   | -   | -   | -   | -   | -   | -   | -   | \n| 5th   | +3                | Destroy Undead (CR 1/2)                                                 | 4              | 4   | 3   | 2   | -   | -   | -   | -   | -   | -   | \n| 6th   | +3                | Channel Divinity (2/rest), Divine Domain Feature                        | 4              | 4   | 3   | 3   | -   | -   | -   | -   | -   | -   | \n| 7th   | +3                | -                                                                       | 4              | 4   | 3   | 3   | 1   | -   | -   | -   | -   | -   | \n| 8th   | +3                | Ability Score Improvement, Destroy Undead (CR 1), Divine Domain Feature | 4              | 4   | 3   | 3   | 2   | -   | -   | -   | -   | -   | \n| 9th   | +4                | -                                                                       | 4              | 4   | 3   | 3   | 3   | 1   | -   | -   | -   | -   | \n| 10th  | +4                | Divine Intervention                                                     | 5              | 4   | 3   | 3   | 3   | 2   | -   | -   | -   | -   | \n| 11th  | +4                | Destroy Undead (CR 2)                                                   | 5              | 4   | 3   | 3   | 3   | 2   | 1   | -   | -   | -   | \n| 12th  | +4                | Ability Score Improvement                                               | 5              | 4   | 3   | 3   | 3   | 2   | 1   | -   | -   | -   | \n| 13th  | +5                | -                                                                       | 5              | 4   | 3   | 3   | 3   | 2   | 1   | 1   | -   | -   | \n| 14th  | +5                | Destroy Undead (CR 3)                                                   | 5              | 4   | 3   | 3   | 3   | 2   | 1   | 1   | -   | -   | \n| 15th  | +5                | -                                                                       | 5              | 4   | 3   | 3   | 3   | 2   | 1   | 1   | 1   | -   | \n| 16th  | +5                | Ability Score Improvement                                               | 5              | 4   | 3   | 3   | 3   | 2   | 1   | 1   | 1   | -   | \n| 17th  | +6                | Destroy Undead (CR 4), Divine Domain Feature                            | 5              | 4   | 3   | 3   | 3   | 2   | 1   | 1   | 1   | 1   | \n| 18th  | +6                | Channel Divinity (3/rest)                                               | 5              | 4   | 3   | 3   | 3   | 3   | 1   | 1   | 1   | 1   | \n| 19th  | +6                | Ability Score Improvement                                               | 5              | 4   | 3   | 3   | 3   | 3   | 2   | 1   | 1   | 1   | \n| 20th  | +6                | Divine Intervention improvement                                         | 5              | 4   | 3   | 3   | 3   | 3   | 2   | 2   | 1   | 1   ",
    //     "spellcasting_ability": "Wisdom",
    //     "subtypes_name": "Domains",
    //     "archetypes": [
    //         {
    //             "name": "Life Domain",
    //             "slug": "life-domain",
    //             "desc": "The Life domain focuses on the vibrant positive energy-one of the fundamental forces of the universe-that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander, Pelor, and Re-Horakhty), gods of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and community (such as Hestia, Hathor, and Boldrei). \n \n**Life Domain Spells (table)** \n \n| Cleric Level | Spells                               | \n| 1st          | bless, cure wounds                   | \n| 3rd          | lesser restoration, spiritual weapon | \n| 5th          | beacon of hope, revivify             | \n| 7th          | death ward, guardian of faith        | \n| 9th          | mass cure wounds, raise dead         | \n \n##### Bonus Proficiency \n \nWhen you choose this domain at 1st level, you gain proficiency with heavy armor. \n \n##### Disciple of Life \n \nAlso starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level. \n \n##### Channel Divinity: Preserve Life \n \nStarting at 2nd level, you can use your Channel Divinity to heal the badly injured. \n \nAs an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct. \n \n##### Blessed Healer \n \nBeginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level. \n \n##### Divine Strike \n \nAt 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8. \n \n##### Supreme Healing \n \nStarting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12.",
    //             "document__slug": "wotc-srd",
    //             "document__title": "Systems Reference Document",
    //             "document__license_url": "http://open5e.com/legal"
    //         }
    //     ],
    //     "document__slug": "wotc-srd",
    //     "document__title": "Systems Reference Document",
    //     "document__license_url": "http://open5e.com/legal"
    // },
    // {
    //     "name": "Druid",
    //     "slug": "druid",
    //     "desc": "### Druidic \n \nYou know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic. \n \n### Spellcasting \n \nDrawing on the divine essence of nature itself, you can cast spells to shape that essence to your will. \n \n#### Cantrips \n \nAt 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table. \n \n#### Preparing and Casting Spells \n \nThe Druid table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. \n \nYou prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots. \n \nFor example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell *cure wounds,* you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells. \n \nYou can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list. \n \n### Spellcasting Ability \n \nWisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one. \n \n**Spell save DC** = 8 + your proficiency bonus + your Wisdom modifier \n \n**Spell attack modifier** = your proficiency bonus + your Wisdom modifier \n \n### Ritual Casting \n \nYou can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared. \n \n#### Spellcasting Focus \n \nYou can use a druidic focus (see chapter 5, “Equipment”) as a spellcasting focus for your druid spells. \n \n### Wild Shape \n \nStarting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest. \n \nYour druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed. \n \n**Beast Shapes (table)** \n \n| Level | Max. CR | Limitations                 | Example     | \n| 2nd   | 1/4     | No flying or swimming speed | Wolf        | \n| 4th   | 1/2     | No flying speed             | Crocodile   | \n| 8th   | 1       | -                           | Giant eagle | \n \nYou can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die. \n \nWhile you are transformed, the following rules apply: \n \n* Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them. \n* When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious. \n* You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as *call lightning*, that you've already cast. \n* You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense. \n* You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form. \n \n### Druid Circle \n \nAt 2nd level, you choose to identify with a circle of druids: the Circle of the Land or the Circle of the Moon, both detailed at the end of the class description. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Timeless Body \n \nStarting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year. \n \n### Beast Spells \n \nBeginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components. \n \n### Archdruid \n \nAt 20th level, you can use your Wild Shape an unlimited number of times. \n \nAdditionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape.",
    //     "hit_dice": "1d8",
    //     "hp_at_1st_level": "8 + your Constitution modifier",
    //     "hp_at_higher_levels": "1d8 (or 5) + your Constitution modifier per druid level after 1st",
    //     "prof_armor": "Light armor, medium armor, shields (druids will not wear armor or use shields made of metal)",
    //     "prof_weapons": "Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears",
    //     "prof_tools": "Herbalism kit",
    //     "prof_saving_throws": "Intelligence, Wisdom",
    //     "prof_skills": "Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival",
    //     "equipment": "You start with the following equipment, in addition to the equipment granted by your background: \n \n* (*a*) a wooden shield or (*b*) any simple weapon \n* (*a*) a scimitar or (*b*) any simple melee weapon \n* Leather armor, an explorer's pack, and a druidic focus",
    //     "table": " Level | Proficiency Bonus | Features                                          | Cantrips Known | 1st | 2nd | 3rd | 4th | 5th | 6th | 7th | 8th | 9th | \n| 1st   | +2                | Druidic, Spellcasting                             | 2              | 2   | -   | -   | -   | -   | -   | -   | -   | -   | \n| 2nd   | +2                | Wild Shape, Druid Circle                          | 2              | 3   | -   | -   | -   | -   | -   | -   | -   | -   | \n| 3rd   | +2                | -                                                 | 2              | 4   | 2   | -   | -   | -   | -   | -   | -   | -   | \n| 4th   | +2                | Wild Shape Improvement, Ability Score Improvement | 3              | 4   | 3   | -   | -   | -   | -   | -   | -   | -   | \n| 5th   | +3                | -                                                 | 3              | 4   | 3   | 2   | -   | -   | -   | -   | -   | -   | \n| 6th   | +3                | Druid Circle feature                              | 3              | 4   | 3   | 3   | -   | -   | -   | -   | -   | -   | \n| 7th   | +3                | -                                                 | 3              | 4   | 3   | 3   | 1   | -   | -   | -   | -   | -   | \n| 8th   | +3                | Wild Shape Improvement, Ability Score Improvement | 3              | 4   | 3   | 3   | 2   | -   | -   | -   | -   | -   | \n| 9th   | +4                | -                                                 | 3              | 4   | 3   | 3   | 3   | 1   | -   | -   | -   | -   | \n| 10th  | +4                | Druid Circle feature                              | 4              | 4   | 3   | 3   | 3   | 2   | -   | -   | -   | -   | \n| 11th  | +4                | -                                                 | 4              | 4   | 3   | 3   | 3   | 2   | 1   | -   | -   | -   | \n| 12th  | +4                | Ability Score Improvement                         | 4              | 4   | 3   | 3   | 3   | 2   | 1   | -   | -   | -   | \n| 13th  | +5                | -                                                 | 4              | 4   | 3   | 3   | 3   | 2   | 1   | 1   | -   | -   | \n| 14th  | +5                | Druid Circle feature                              | 4              | 4   | 3   | 3   | 3   | 2   | 1   | 1   | -   | -   | \n| 15th  | +5                | -                                                 | 4              | 4   | 3   | 3   | 3   | 2   | 1   | 1   | 1   | -   | \n| 16th  | +5                | Ability Score Improvement                         | 4              | 4   | 3   | 3   | 3   | 2   | 1   | 1   | 1   | -   | \n| 17th  | +6                | -                                                 | 4              | 4   | 3   | 3   | 3   | 2   | 1   | 1   | 1   | 1   | \n| 18th  | +6                | Timeless Body, Beast Spells                       | 4              | 4   | 3   | 3   | 3   | 3   | 1   | 1   | 1   | 1   | \n| 19th  | +6                | Ability Score Improvement                         | 4              | 4   | 3   | 3   | 3   | 3   | 2   | 1   | 1   | 1   | \n| 20th  | +6                | Archdruid                                         | 4              | 4   | 3   | 3   | 3   | 3   | 2   | 2   | 1   | 1    ",
    //     "spellcasting_ability": "Wisdom",
    //     "subtypes_name": "Circles",
    //     "archetypes": [
    //         {
    //             "name": "Circle of the Land",
    //             "slug": "circle-of-the-land",
    //             "desc": "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites. \n \n##### Bonus Cantrip \n \nWhen you choose this circle at 2nd level, you learn one additional druid cantrip of your choice. \n \n##### Natural Recovery \n \nStarting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level \n(rounded up), and none of the slots can be 6th level or higher. You can't use this feature again until you finish a long rest. \n \nFor example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots. \n \n##### Circle Spells \n \nYour mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose that land-arctic, coast, desert, forest, grassland, mountain, or swamp-and consult the associated list of spells. \n \nOnce you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you. \n \n**Arctic (table)** \n \n| Druid Level | Circle Spells                     | \n|-------------|-----------------------------------| \n| 3rd         | hold person, spike growth         | \n| 5th         | sleet storm, slow                 | \n| 7th         | freedom of movement, ice storm    | \n| 9th         | commune with nature, cone of cold | \n \n**Coast (table)** \n \n| Druid Level | Circle Spells                      | \n|-------------|------------------------------------| \n| 3rd         | mirror image, misty step           | \n| 5th         | water breathing, water walk        | \n| 7th         | control water, freedom of movement | \n| 9th         | conjure elemental, scrying         | \n \n**Desert (table)** \n \n| Druid Level | Circle Spells                                 | \n|-------------|-----------------------------------------------| \n| 3rd         | blur, silence                                 | \n| 5th         | create food and water, protection from energy | \n| 7th         | blight, hallucinatory terrain                 | \n| 9th         | insect plague, wall of stone                  | \n \n**Forest (table)** \n \n| Druid Level | Circle Spells                    | \n|-------------|----------------------------------| \n| 3rd         | barkskin, spider climb           | \n| 5th         | call lightning, plant growth     | \n| 7th         | divination, freedom of movement  | \n| 9th         | commune with nature, tree stride | \n \n**Grassland (table)** \n \n| Druid Level | Circle Spells                    | \n|-------------|----------------------------------| \n| 3rd         | invisibility, pass without trace | \n| 5th         | daylight, haste                  | \n| 7th         | divination, freedom of movement  | \n| 9th         | dream, insect plague             | \n \n**Mountain (table)** \n \n| Druid Level | Circle Spells                   | \n|-------------|---------------------------------| \n| 3rd         | spider climb, spike growth      | \n| 5th         | lightning bolt, meld into stone | \n| 7th         | stone shape, stoneskin          | \n| 9th         | passwall, wall of stone         | \n \n**Swamp (table)** \n \n| Druid Level | Circle Spells                        | \n|-------------|--------------------------------------| \n| 3rd         | acid arrow, darkness                 | \n| 5th         | water walk, stinking cloud           | \n| 7th         | freedom of movement, locate creature | \n| 9th         | insect plague, scrying               | \n \n##### Land's Stride \n \nStarting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard. \n \nIn addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the *entangle* spell. \n \n##### Nature's Ward \n \nWhen you reach 10th level, you can't be charmed or frightened by elementals or fey, and you are immune to poison and disease. \n \n##### Nature's Sanctuary \n \nWhen you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours. \n \nThe creature is aware of this effect before it makes its attack against you. \n \n> ### Sacred Plants and Wood \n> \n> A druid holds certain plants to be sacred, particularly alder, ash, birch, elder, hazel, holly, juniper, mistletoe, oak, rowan, willow, and yew. Druids often use such plants as part of a spellcasting focus, incorporating lengths of oak or yew or sprigs of mistletoe. \n> \n> Similarly, a druid uses such woods to make other objects, such as weapons and shields. Yew is associated with death and rebirth, so weapon handles for scimitars or sickles might be fashioned from it. Ash is associated with life and oak with strength. These woods make excellent hafts or whole weapons, such as clubs or quarterstaffs, as well as shields. Alder is associated with air, and it might be used for thrown weapons, such as darts or javelins. \n> \n> Druids from regions that lack the plants described here have chosen other plants to take on similar uses. For instance, a druid of a desert region might value the yucca tree and cactus plants. \n \n> ### Druids and the Gods \n> \n> Some druids venerate the forces of nature themselves, but most druids are devoted to one of the many nature deities worshiped in the multiverse (the lists of gods in appendix B include many such deities). The worship of these deities is often considered a more ancient tradition than the faiths of clerics and urbanized peoples.",
    //             "document__slug": "wotc-srd",
    //             "document__title": "Systems Reference Document",
    //             "document__license_url": "http://open5e.com/legal"
    //         }
    //     ],
    //     "document__slug": "wotc-srd",
    //     "document__title": "Systems Reference Document",
    //     "document__license_url": "http://open5e.com/legal"
    // },
    // {
    //     "name": "Fighter",
    //     "slug": "fighter",
    //     "desc": "### Fighting Style \n \nYou adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again. \n \n#### Archery \n \nYou gain a +2 bonus to attack rolls you make with ranged weapons. \n \n#### Defense \n \nWhile you are wearing armor, you gain a +1 bonus to AC. \n \n#### Dueling \n \nWhen you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon. \n \n#### Great Weapon Fighting \n \nWhen you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit. \n \n#### Protection \n \nWhen a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield. \n \n#### Two-Weapon Fighting \n \nWhen you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack. \n \n### Second Wind \n \nYou have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again. \n \n### Action Surge \n \nStarting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action. \n \nOnce you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn. \n \n### Martial Archetype \n \nAt 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. Choose Champion, Battle Master, or Eldritch Knight, all detailed at the end of the class description. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Extra Attack \n \nBeginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. \n \nThe number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class. \n \n### Indomitable \n \nBeginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. \n \nYou can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.\n \n### Martial Archetypes \n \nDifferent fighters choose different approaches to perfecting their fighting prowess. The martial archetype you choose to emulate reflects your approach.",
    //     "hit_dice": "1d10",
    //     "hp_at_1st_level": "10 + your Constitution modifier",
    //     "hp_at_higher_levels": "1d10 (or 6) + your Constitution modifier per fighter level after 1st",
    //     "prof_armor": "All armor, shields",
    //     "prof_weapons": "Simple weapons, martial weapons",
    //     "prof_tools": "None",
    //     "prof_saving_throws": "Strength, Constitution",
    //     "prof_skills": "Choose two skills from Acrobatics, Animal, Handling, Athletics, History, Insight, Intimidation, Perception, and Survival",
    //     "equipment": "You start with the following equipment, in addition to the equipment granted by your background: \n \n* (*a*) chain mail or (*b*) leather armor, longbow, and 20 arrows \n* (*a*) a martial weapon and a shield or (*b*) two martial weapons \n* (*a*) a light crossbow and 20 bolts or (*b*) two handaxes \n* (*a*) a dungeoneer's pack or (*b*) an explorer's pack",
    //     "table": " Level | Proficiency Bonus | Features                                          | \n| 1st   | +2                | Fighting Style, Second Wind                       | \n| 2nd   | +2                | Action Surge (one use)                            | \n| 3rd   | +2                | Martial Archetype                                 | \n| 4th   | +2                | Ability Score Improvement                         | \n| 5th   | +3                | Extra Attack                                      | \n| 6th   | +3                | Ability Score Improvement                         | \n| 7th   | +3                | Martial Archetype Feature                         | \n| 8th   | +3                | Ability Score Improvement                         | \n| 9th   | +4                | Indomitable (one use)                             | \n| 10th  | +4                | Martial Archetype Feature                         | \n| 11th  | +4                | Extra Attack (2)                                  | \n| 12th  | +4                | Ability Score Improvement                         | \n| 13th  | +5                | Indomitable (two uses)                            | \n| 14th  | +5                | Ability Score Improvement                         | \n| 15th  | +5                | Martial Archetype Feature                         | \n| 16th  | +5                | Ability Score Improvement                         | \n| 17th  | +6                | Action Surge (two uses), Indomitable (three uses) | \n| 18th  | +6                | Martial Archetype Feature                         | \n| 19th  | +6                | Ability Score Improvement                         | \n| 20th  | +6                | Extra Attack (3)                                   ",
    //     "spellcasting_ability": "",
    //     "subtypes_name": "Martial Archetypes",
    //     "archetypes": [
    //         {
    //             "name": "Champion",
    //             "slug": "champion",
    //             "desc": "The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows. \n \n##### Improved Critical \n \nBeginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20. \n \n##### Remarkable Athlete \n \nStarting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus. \n \nIn addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier. \n \n##### Additional Fighting Style \n \nAt 10th level, you can choose a second option from the Fighting Style class feature. \n \n##### Superior Critical \n \nStarting at 15th level, your weapon attacks score a critical hit on a roll of 18-20. \n \n##### Survivor \n \nAt 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points.",
    //             "document__slug": "wotc-srd",
    //             "document__title": "Systems Reference Document",
    //             "document__license_url": "http://open5e.com/legal"
    //         }
    //     ],
    //     "document__slug": "wotc-srd",
    //     "document__title": "Systems Reference Document",
    //     "document__license_url": "http://open5e.com/legal"
    // },
    // {
    //     "name": "Monk",
    //     "slug": "monk",
    //     "desc": "### Unarmored Defense \n \nBeginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier. \n \n### Martial Arts \n \nAt 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two- handed or heavy property. \n \nYou gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield: \n \n* You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons. \n* You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table. \n* When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn. \n \nCertain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon. \n \n### Ki \n \nStarting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table. \n \nYou can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class. \n \nWhen you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points. \n \nSome of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows: \n \n**Ki save DC** = 8 + your proficiency bonus + your Wisdom modifier \n \n#### Flurry of Blows \n \nImmediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action. \n \n#### Patient Defense \n \nYou can spend 1 ki point to take the Dodge action as a bonus action on your turn. \n \n#### Step of the Wind \n \nYou can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn. \n \n### Unarmored Movement \n \nStarting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table. \n \nAt 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move. \n \n### Monastic Tradition \n \nWhen you reach 3rd level, you commit yourself to a monastic tradition: the Way of the Open Hand, the Way of Shadow, or the Way of the Four Elements, all detailed at the end of the class description. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level. \n \n### Deflect Missiles \n \nStarting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level. \n \nIf you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long range of 60 feet. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Slow Fall \n \nBeginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level. \n \n### Extra Attack \n \nBeginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. \n \n### Stunning Strike \n \nStarting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn. \n \n### Ki-Empowered Strikes \n \nStarting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. \n \n### Evasion \n \nAt 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a *fireball* spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail. \n \n### Stillness of Mind \n \nStarting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened. \n \n### Purity of Body \n \nAt 10th level, your mastery of the ki flowing through you makes you immune to disease and poison. \n \n### Tongue of the Sun and Moon \n \nStarting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say. \n \n### Diamond Soul \n \nBeginning at 14th level, your mastery of ki grants you proficiency in all saving throws. \n \nAdditionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result. \n \n### Timeless Body \n \nAt 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water. \n \n### Empty Body \n \nBeginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage. \n \nAdditionally, you can spend 8 ki points to cast the *astral projection* spell, without needing material components. When you do so, you can't take any other creatures with you. \n \n### Perfect Self \n \nAt 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points. \n \n### Monastic Traditions \n \nThree traditions of monastic pursuit are common in the monasteries scattered across the multiverse. Most monasteries practice one tradition exclusively, but a few honor the three traditions and instruct each monk according to his or her aptitude and interest. All three traditions rely on the same basic techniques, diverging as the student grows more adept. Thus, a monk need choose a tradition only upon reaching 3rd level.",
    //     "hit_dice": "1d8",
    //     "hp_at_1st_level": "8 + your Constitution modifier",
    //     "hp_at_higher_levels": "1d8 (or 5) + your Constitution modifier per monk level after 1st",
    //     "prof_armor": "None",
    //     "prof_weapons": "Simple weapons, shortswords",
    //     "prof_tools": "Choose one type of artisan's tools or one musical instrument",
    //     "prof_saving_throws": "Strength, Dexterity",
    //     "prof_skills": "Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth",
    //     "equipment": "You start with the following equipment, in addition to the equipment granted by your background: \n \n* (*a*) a shortsword or (*b*) any simple weapon \n* (*a*) a dungeoneer's pack or (*b*) an explorer's pack \n* 10 darts",
    //     "table": " Level | Proficiency Bonus | Martial Arts | Ki Points | Unarmored Movement | Features                                         | \n| 1st   | +2                | 1d4          | -         | -                  | Unarmored Defense, Martial Arts                  | \n| 2nd   | +2                | 1d4          | 2         | +10 ft.            | Ki, Unarmored Movement                           | \n| 3rd   | +2                | 1d4          | 3         | +10 ft.            | Monastic Tradition, Deflect Missiles             | \n| 4th   | +2                | 1d4          | 4         | +10 ft.            | Ability Score Improvement, Slow Fall             | \n| 5th   | +3                | 1d6          | 5         | +10 ft.            | Extra Attack, Stunning Strike                    | \n| 6th   | +3                | 1d6          | 6         | +15 ft.            | Ki-Empowered Strikes, Monastic Tradition Feature | \n| 7th   | +3                | 1d6          | 7         | +15 ft.            | Evasion, Stillness of Mind                       | \n| 8th   | +3                | 1d6          | 8         | +15 ft.            | Ability Score Improvement                        | \n| 9th   | +4                | 1d6          | 9         | +15 ft.            | Unarmored Movement improvement                   | \n| 10th  | +4                | 1d6          | 10        | +20 ft.            | Purity of Body                                   | \n| 11th  | +4                | 1d8          | 11        | +20 ft.            | Monastic Tradition Feature                       | \n| 12th  | +4                | 1d8          | 12        | +20 ft.            | Ability Score Improvement                        | \n| 13th  | +5                | 1d8          | 13        | +20 ft.            | Tongue of the Sun and Moon                       | \n| 14th  | +5                | 1d8          | 14        | +25 ft.            | Diamond Soul                                     | \n| 15th  | +5                | 1d8          | 15        | +25 ft.            | Timeless Body                                    | \n| 16th  | +5                | 1d8          | 16        | +25 ft.            | Ability Score Improvement                        | \n| 17th  | +6                | 1d10         | 17        | +25 ft.            | Monastic Tradition Feature                       | \n| 18th  | +6                | 1d10         | 18        | +30 ft.            | Empty Body                                       | \n| 19th  | +6                | 1d10         | 19        | +30 ft.            | Ability Score Improvement                        | \n| 20th  | +6                | 1d10         | 20        | +30 ft.            | Perfect Self                                     ",
    //     "spellcasting_ability": "",
    //     "subtypes_name": "Monastic Traditions",
    //     "archetypes": [
    //         {
    //             "name": "Way of the Open Hand",
    //             "slug": "way-of-the-open-hand",
    //             "desc": "Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm. \n \n##### Open Hand Technique \n \nStarting when you choose this tradition at 3rd level, you can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target: \n* It must succeed on a Dexterity saving throw or be knocked prone. \n* It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you. \n* It can't take reactions until the end of your next turn. \n \n##### Wholeness of Body \n \nAt 6th level, you gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again. \n \n##### Tranquility \n \nBeginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a *sanctuary* spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus. \n \n##### Quivering Palm \n \nAt 17th level, you gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage. \n \nYou can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action.",
    //             "document__slug": "wotc-srd",
    //             "document__title": "Systems Reference Document",
    //             "document__license_url": "http://open5e.com/legal"
    //         }
    //     ],
    //     "document__slug": "wotc-srd",
    //     "document__title": "Systems Reference Document",
    //     "document__license_url": "http://open5e.com/legal"
    // },
    // {
    //     "name": "Paladin",
    //     "slug": "paladin",
    //     "desc": "### Divine Sense \n \nThe presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire \n \nCount Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the *hallow* spell. \n \nYou can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses. \n \n### Lay on Hands \n \nYour blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5. \n \nAs an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. \n \nAlternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one. \n \nThis feature has no effect on undead and constructs. \n \n### Fighting Style \n \nAt 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again. \n \n#### Defense \n \nWhile you are wearing armor, you gain a +1 bonus to AC. \n \n#### Dueling \n \nWhen you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon. \n \n#### Great Weapon Fighting \n \nWhen you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll. The weapon must have the two-handed or versatile property for you to gain this benefit. \n \n#### Protection \n \nWhen a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield. \n \n### Spellcasting \n \nBy 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does. \n \n#### Preparing and Casting Spells \n \nThe Paladin table shows how many spell slots you have to cast your spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. \n \nYou prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots. \n \nFor example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell *cure wounds,* you can cast it using a 1st-level or a 2nd- level slot. Casting the spell doesn't remove it from your list of prepared spells. \n \nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list. \n \n#### Spellcasting Ability \n \nCharisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one. \n \n**Spell save DC** = 8 + your proficiency bonus + your Charisma modifier \n \n**Spell attack modifier** = your proficiency bonus + your Charisma modifier \n \n#### Spellcasting Focus \n \nYou can use a holy symbol as a spellcasting focus for your paladin spells. \n \n### Divine Smite \n \nStarting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend. \n \n### Divine Health \n \nBy 3rd level, the divine magic flowing through you makes you immune to disease. \n \n### Sacred Oath \n \nWhen you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose the Oath of Devotion, the Oath of the Ancients, or the Oath of Vengeance, all detailed at the end of the class description. \n \nYour choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature. \n \n#### Oath Spells \n \nEach oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don't count against the number of spells you can prepare each day. \n \nIf you gain an oath spell that doesn't appear on the paladin spell list, the spell is nonetheless a paladin spell for you. \n \n#### Channel Divinity \n \nYour oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it. \n \nWhen you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again. \n \nSome Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Extra Attack \n \nBeginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. \n \n### Aura of Protection \n \nStarting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus. \n \nAt 18th level, the range of this aura increases to 30 feet. \n \n### Aura of Courage \n \nStarting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious. \n \nAt 18th level, the range of this aura increases to 30 feet. \n \n### Improved Divine Smite \n \nBy 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage. If you also use your Divine Smite with an attack, you add this damage to the extra damage of your Divine Smite. \n \n### Cleansing Touch \n \nBeginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch. \n \nYou can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest. \n \n### Sacred Oaths \n \nBecoming a paladin involves taking vows that commit the paladin to the cause of righteousness, an active path of fighting wickedness. The final oath, taken when he or she reaches 3rd level, is the culmination of all the paladin's training. Some characters with this class don't consider themselves true paladins until they have reached 3rd level and made this oath. For others, the actual swearing of the oath is a formality, an official stamp on what has always been true in the paladin's heart.  \n> ### Breaking Your Oath \n> \n> A paladin tries to hold to the highest standards of conduct, but even the most virtuous paladin is fallible. Sometimes the right path proves too demanding, sometimes a situation calls for the lesser of two evils, and sometimes the heat of emotion causes a paladin to transgress his or her oath. \n> \n> A paladin who has broken a vow typically seeks absolution from a cleric who shares his or her faith or from another paladin of the same order. The paladin might spend an all- night vigil in prayer as a sign of penitence, or undertake a fast or similar act of self-denial. After a rite of confession and forgiveness, the paladin starts fresh. \n> \n> If a paladin willfully violates his or her oath and shows no sign of repentance, the consequences can be more serious. At the GM's discretion, an impenitent paladin might be forced to abandon this class and adopt another.",
    //     "hit_dice": "1d10",
    //     "hp_at_1st_level": "10 + your Constitution modifier",
    //     "hp_at_higher_levels": "1d10 (or 6) + your Constitution modifier per paladin level after 1st",
    //     "prof_armor": "All armor, shields",
    //     "prof_weapons": "Simple weapons, martial weapons",
    //     "prof_tools": "None",
    //     "prof_saving_throws": "Wisdom, Charisma",
    //     "prof_skills": "Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion",
    //     "equipment": "You start with the following equipment, in addition to the equipment granted by your background: \n* (*a*) a martial weapon and a shield or (*b*) two martial weapons \n* (*a*) five javelins or (*b*) any simple melee weapon \n* (*a*) a priest's pack or (*b*) an explorer's pack \n* Chain mail and a holy symbol",
    //     "table": " Level | Proficiency Bonus | Features                                   | 1st | 2nd | 3rd | 4th | 5th | \n| 1st   | +2                | Divine Sense, Lay on Hands                 | -   | -   | -   | -   | -   | \n| 2nd   | +2                | Fighting Style, Spellcasting, Divine Smite | 2   | -   | -   | -   | -   | \n| 3rd   | +2                | Divine Health, Sacred Oath                 | 3   | -   | -   | -   | -   | \n| 4th   | +2                | Ability Score Improvement                  | 3   | -   | -   | -   | -   | \n| 5th   | +3                | Extra Attack                               | 4   | 2   | -   | -   | -   | \n| 6th   | +3                | Aura of Protection                         | 4   | 2   | -   | -   | -   | \n| 7th   | +3                | Sacred Oath feature                        | 4   | 3   | -   | -   | -   | \n| 8th   | +3                | Ability Score Improvement                  | 4   | 3   | -   | -   | -   | \n| 9th   | +4                | -                                          | 4   | 3   | 2   | -   | -   | \n| 10th  | +4                | Aura of Courage                            | 4   | 3   | 2   | -   | -   | \n| 11th  | +4                | Improved Divine Smite                      | 4   | 3   | 3   | -   | -   | \n| 12th  | +4                | Ability Score Improvement                  | 4   | 3   | 3   | -   | -   | \n| 13th  | +5                | -                                          | 4   | 3   | 3   | 1   | -   | \n| 14th  | +5                | Cleansing Touch                            | 4   | 3   | 3   | 1   | -   | \n| 15th  | +5                | Sacred Oath feature                        | 4   | 3   | 3   | 2   | -   | \n| 16th  | +5                | Ability Score Improvement                  | 4   | 3   | 3   | 2   | -   | \n| 17th  | +6                | -                                          | 4   | 3   | 3   | 3   | 1   | \n| 18th  | +6                | Aura improvements                          | 4   | 3   | 3   | 3   | 1   | \n| 19th  | +6                | Ability Score Improvement                  | 4   | 3   | 3   | 3   | 2   | \n| 20th  | +6                | Sacred Oath feature                        | 4   | 3   | 3   | 3   | 2   ",
    //     "spellcasting_ability": "Charisma",
    //     "subtypes_name": "",
    //     "archetypes": [
    //         {
    //             "name": "Oaths",
    //             "slug": "oaths",
    //             "desc": "The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods' tenets as the measure of their devotion. They hold angels-the perfect servants of good-as their ideals, and incorporate images of angelic wings into their helmets or coats of arms. \n \n##### Tenets of Devotion \n \nThough the exact words and strictures of the Oath of Devotion vary, paladins of this oath share these tenets. \n \n**_Honesty._** Don't lie or cheat. Let your word be your promise. \n \n**_Courage._** Never fear to act, though caution is wise. \n \n**_Compassion._** Aid others, protect the weak, and punish those who threaten them. Show mercy to your foes, but temper it with wisdom. \n \n**_Honor._** Treat others with fairness, and let your honorable deeds be an example to them. Do as much good as possible while causing the least amount of harm. \n \n**_Duty._** Be responsible for your actions and their consequences, protect those entrusted to your care, and obey those who have just authority over you. \n \n##### Oath Spells \n \nYou gain oath spells at the paladin levels listed. \n \n**Oath of Devotion Spells (table)** \n \n| Level | Paladin Spells                           | \n|-------|------------------------------------------| \n| 3rd   | protection from evil and good, sanctuary | \n| 5th   | lesser restoration, zone of truth        | \n| 9th   | beacon of hope, dispel magic             | \n| 13th  | freedom of movement, guardian of faith   | \n| 17th  | commune, flame strike                    | \n \n##### Channel Divinity \n \nWhen you take this oath at 3rd level, you gain the following two Channel Divinity options. \n \n**_Sacred Weapon._** As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration. \n \nYou can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends. \n \n**_Turn the Unholy._** As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage. \n \nA turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action. \n \n##### Aura of Devotion \n \nStarting at 7th level, you and friendly creatures within 10 feet of you can't be charmed while you are conscious. \n \nAt 18th level, the range of this aura increases to 30 feet. \n \n##### Purity of Spirit \n \nBeginning at 15th level, you are always under the effects of a *protection from evil and good* spell. \n \n##### Holy Nimbus \n \nAt 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that. \n \nWhenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage. \n \nIn addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead. \n \nOnce you use this feature, you can't use it again until you finish a long rest.",
    //             "document__slug": "wotc-srd",
    //             "document__title": "Systems Reference Document",
    //             "document__license_url": "http://open5e.com/legal"
    //         }
    //     ],
    //     "document__slug": "wotc-srd",
    //     "document__title": "Systems Reference Document",
    //     "document__license_url": "http://open5e.com/legal"
    // },
    // {
    //     "name": "Ranger",
    //     "slug": "ranger",
    //     "desc": "### Favored Enemy \n \nBeginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy. \n \nChoose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies. \n \nYou have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them. \n \nWhen you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all. \n \nYou choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures. \n \n### Natural Explorer \n \nYou are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in. \n \nWhile traveling for an hour or more in your favored terrain, you gain the following benefits: \n* Difficult terrain doesn't slow your group's travel. \n* Your group can't become lost except by magical means. \n* Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger. \n* If you are traveling alone, you can move stealthily at a normal pace. \n* When you forage, you find twice as much food as you normally would. \n* While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area. \n \nYou choose additional favored terrain types at 6th and 10th level. \n \n### Fighting Style \n \nAt 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again. \n \n#### Archery \n \nYou gain a +2 bonus to attack rolls you make with ranged weapons. \n \n#### Defense \n \nWhile you are wearing armor, you gain a +1 bonus to AC. \n \n#### Dueling \n \nWhen you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon. \n \n#### Two-Weapon Fighting \n \nWhen you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack. \n \n### Spellcasting \n \nBy the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does. See chapter 10 for the general rules of spellcasting and chapter 11 for the ranger spell list. \n \n#### Spell Slots \n \nThe Ranger table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. \n \nFor example, if you know the 1st-level spell *animal friendship* and have a 1st-level and a 2nd-level spell slot available, you can cast *animal friendship* using either slot. \n \n#### Spells Known of 1st Level and Higher \n \nYou know two 1st-level spells of your choice from the ranger spell list. \n \nThe Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level. \n \nAdditionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots. \n \n#### Spellcasting Ability \n \nWisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one. \n \n**Spell save DC** = 8 + your proficiency bonus + your Wisdom modifier \n \n**Spell attack modifier** = your proficiency bonus + your Wisdom modifier \n \n### Ranger Archetype \n \nAt 3rd level, you choose an archetype that you strive to emulate: Hunter or Beast Master, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level. \n \n### Primeval Awareness \n \nBeginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn't reveal the creatures' location or number. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Extra Attack \n \nBeginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. \n \n### Land's Stride \n \nStarting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard. \n \nIn addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the *entangle* spell. \n \n### Hide in Plain Sight \n \nStarting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage. \n \nOnce you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit. \n \n### Vanish \n \nStarting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail. \n \n### Feral Senses \n \nAt 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it. \n \nYou are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened. \n \n### Foe Slayer \n \nAt 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.",
    //     "hit_dice": "1d10",
    //     "hp_at_1st_level": "10 + your Constitution modifier",
    //     "hp_at_higher_levels": "1d10 (or 6) + your Constitution modifier per ranger level after 1st",
    //     "prof_armor": "Light armor, medium armor, shields",
    //     "prof_weapons": "Simple weapons, martial weapons",
    //     "prof_tools": "None",
    //     "prof_saving_throws": "Strength, Dexterity",
    //     "prof_skills": "Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival",
    //     "equipment": "You start with the following equipment, in addition to the equipment granted by your background: \n* (*a*) scale mail or (*b*) leather armor \n* (*a*) two shortswords or (*b*) two simple melee weapons \n* (*a*) a dungeoneer's pack or (*b*) an explorer's pack \n* A longbow and a quiver of 20 arrows",
    //     "table": " Level | Proficiency Bonus | Features                                          | Spells Known | 1st | 2nd | 3rd | 4th | 5th | \n| 1st   | +2                | Favored Enemy, Natural Explorer                   | -            | -   | -   | -   | -   | -   | \n| 2nd   | +2                | Fighting Style, Spellcasting                      | 2            | 2   | -   | -   | -   | -   | \n| 3rd   | +2                | Ranger Archetype, Primeval Awareness              | 3            | 3   | -   | -   | -   | -   | \n| 4th   | +2                | Ability Score Improvement                         | 3            | 3   | -   | -   | -   | -   | \n| 5th   | +3                | Extra Attack                                      | 4            | 4   | 2   | -   | -   | -   | \n| 6th   | +3                | Favored Enemy and Natural Explorer improvements   | 4            | 4   | 2   | -   | -   | -   | \n| 7th   | +3                | Ranger Archetype feature                          | 5            | 4   | 3   | -   | -   | -   | \n| 8th   | +3                | Ability Score Improvement, Land's Stride          | 5            | 4   | 3   | -   | -   | -   | \n| 9th   | +4                | -                                                 | 6            | 4   | 3   | 2   | -   | -   | \n| 10th  | +4                | Natural Explorer improvement, Hide in Plain Sight | 6            | 4   | 3   | 2   | -   | -   | \n| 11th  | +4                | Ranger Archetype feature                          | 7            | 4   | 3   | 3   | -   | -   | \n| 12th  | +4                | Ability Score Improvement                         | 7            | 4   | 3   | 3   | -   | -   | \n| 13th  | +5                | -                                                 | 8            | 4   | 3   | 3   | 1   | -   | \n| 14th  | +5                | Favored Enemy improvement, Vanish                 | 8            | 4   | 3   | 3   | 1   | -   | \n| 15th  | +5                | Ranger Archetype feature                          | 9            | 4   | 3   | 3   | 2   | -   | \n| 16th  | +5                | Ability Score Improvement                         | 9            | 4   | 3   | 3   | 2   | -   | \n| 17th  | +6                | -                                                 | 10           | 4   | 3   | 3   | 3   | 1   | \n| 18th  | +6                | Feral Senses                                      | 10           | 4   | 3   | 3   | 3   | 1   | \n| 19th  | +6                | Ability Score Improvement                         | 11           | 4   | 3   | 3   | 3   | 2   | \n| 20th  | +6                | Foe Slayer                                        | 11           | 4   | 3   | 3   | 3   | 2    ",
    //     "spellcasting_ability": "Wisdom",
    //     "subtypes_name": "Archetypes",
    //     "archetypes": [
    //         {
    //             "name": "Hunter",
    //             "slug": "hunter",
    //             "desc": "Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness. As you walk the Hunter's path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons. \n \n##### Hunter's Prey \n \nAt 3rd level, you gain one of the following features of your choice. \n \n**_Colossus Slayer._** Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it's below its hit point maximum. You can deal this extra damage only once per turn. \n \n**_Giant Killer._** When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature. \n \n**_Horde Breaker._** Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon. \n \n##### Defensive Tactics \n \nAt 7th level, you gain one of the following features of your choice. \n \n**_Escape the Horde._** Opportunity attacks against you are made with disadvantage. \n \n**_Multiattack Defense._** When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn. \n \n**_Steel Will._** You have advantage on saving throws against being frightened. \n \n##### Multiattack \n \nAt 11th level, you gain one of the following features of your choice. \n \n**_Volley._** You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon's range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target. \n \n**_Whirlwind Attack._** You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target. \n \n##### Superior Hunter's Defense \n \nAt 15th level, you gain one of the following features of your choice. \n \n**_Evasion._** When you are subjected to an effect, such as a red dragon's fiery breath or a *lightning bolt* spell, that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail. \n \n**_Stand Against the Tide._** When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice. \n \n**_Uncanny Dodge._** When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.",
    //             "document__slug": "wotc-srd",
    //             "document__title": "Systems Reference Document",
    //             "document__license_url": "http://open5e.com/legal"
    //         }
    //     ],
    //     "document__slug": "wotc-srd",
    //     "document__title": "Systems Reference Document",
    //     "document__license_url": "http://open5e.com/legal"
    // },
    // {
    //     "name": "Rogue",
    //     "slug": "rogue",
    //     "desc": "### Expertise \n \nAt 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. \n \nAt 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit. \n \n### Sneak Attack \n \nBeginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. \n \nYou don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll. \n \nThe amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table. \n \n### Thieves' Cant \n \nDuring your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly. \n \nIn addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run. \n \n### Cunning Action \n \nStarting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action. \n \n### Roguish Archetype \n \nAt 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities: Thief, Assassin, or Arcane Trickster, all detailed at the end of the class description. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Uncanny Dodge \n \nStarting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you. \n \n### Evasion \n \nBeginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an *ice storm* spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail. \n \n### Reliable Talent \n \nBy 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10. \n \n### Blindsense \n \nStarting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you. \n \n### Slippery Mind \n \nBy 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws. \n \n### Elusive \n \nBeginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated. \n \n### Stroke of Luck \n \nAt 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20. \n \nOnce you use this feature, you can't use it again until you finish a short or long rest. \n \n### Roguish Archetypes \n \nRogues have many features in common, including their emphasis on perfecting their skills, their precise and deadly approach to combat, and their increasingly quick reflexes. But different rogues steer those talents in varying directions, embodied by the rogue archetypes. Your choice of archetype is a reflection of your focus-not necessarily an indication of your chosen profession, but a description of your preferred techniques.",
    //     "hit_dice": "1d8",
    //     "hp_at_1st_level": "8 + your Constitution modifier",
    //     "hp_at_higher_levels": "1d8 (or 5) + your Constitution modifier per rogue level after 1st",
    //     "prof_armor": "Light armor",
    //     "prof_weapons": "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
    //     "prof_tools": "Thieves' tools",
    //     "prof_saving_throws": "Dexterity, Intelligence",
    //     "prof_skills": "Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth",
    //     "equipment": "You start with the following equipment, in addition to the equipment granted by your background: \n* (*a*) a rapier or (*b*) a shortsword \n* (*a*) a shortbow and quiver of 20 arrows or (*b*) a shortsword \n* (*a*) a burglar's pack, (*b*) a dungeoneer's pack, or (*c*) an explorer's pack \n* (*a*) Leather armor, two daggers, and thieves' tools",
    //     "table": " Level | Proficiency Bonus | Sneak Attack | Features                               | \n| 1st   | +2                | 1d6          | Expertise, Sneak Attack, Thieves' Cant | \n| 2nd   | +2                | 1d6          | Cunning Action                         | \n| 3rd   | +2                | 2d6          | Roguish Archetype                      | \n| 4th   | +2                | 2d6          | Ability Score Improvement              | \n| 5th   | +3                | 3d6          | Uncanny Dodge                          | \n| 6th   | +3                | 3d6          | Expertise                              | \n| 7th   | +3                | 4d6          | Evasion                                | \n| 8th   | +3                | 4d6          | Ability Score Improvement              | \n| 9th   | +4                | 5d6          | Roguish Archetype feature              | \n| 10th  | +4                | 5d6          | Ability Score Improvement              | \n| 11th  | +4                | 6d6          | Reliable Talent                        | \n| 12th  | +4                | 6d6          | Ability Score Improvement              | \n| 13th  | +5                | 7d6          | Roguish Archetype Feature              | \n| 14th  | +5                | 7d6          | Blindsense                             | \n| 15th  | +5                | 8d6          | Slippery Mind                          | \n| 16th  | +5                | 8d6          | Ability Score Improvement              | \n| 17th  | +6                | 9d6          | Roguish Archetype Feature              | \n| 18th  | +6                | 9d6          | Elusive                                | \n| 19th  | +6                | 10d6         | Ability Score Improvement              | \n| 20th  | +6                | 10d6         | Stroke of Luck                          ",
    //     "spellcasting_ability": "",
    //     "subtypes_name": "Roguish Archetypes",
    //     "archetypes": [
    //         {
    //             "name": "Thief",
    //             "slug": "thief",
    //             "desc": "You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn't employ. \n \n##### Fast Hands \n \nStarting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action. \n \n##### Second-Story Work \n \nWhen you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement. \n \nIn addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier. \n \n##### Supreme Sneak \n \nStarting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn. \n \n##### Use Magic Device \n \nBy 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items. \n \n##### Thief's Reflexes \n \nWhen you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised.",
    //             "document__slug": "wotc-srd",
    //             "document__title": "Systems Reference Document",
    //             "document__license_url": "http://open5e.com/legal"
    //         }
    //     ],
    //     "document__slug": "wotc-srd",
    //     "document__title": "Systems Reference Document",
    //     "document__license_url": "http://open5e.com/legal"
    // },
    // {
    //     "name": "Sorcerer",
    //     "slug": "sorcerer",
    //     "desc": "### Spellcasting \n \nAn event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells. \n \n#### Cantrips \n \nAt 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table. \n \n#### Spell Slots \n \nThe Sorcerer table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. \n \nFor example, if you know the 1st-level spell *burning hands* and have a 1st-level and a 2nd-level spell slot available, you can cast *burning hands* using either slot. \n \n#### Spells Known of 1st Level and Higher \n \nYou know two 1st-level spells of your choice from the sorcerer spell list. \n \nThe Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level. \n \nAdditionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots. \n \n#### Spellcasting Ability \n \nCharisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one. \n \n**Spell save DC** = 8 + your proficiency bonus + your Charisma modifier \n \n**Spell attack modifier** = your proficiency bonus + your Charisma modifier \n \n#### Spellcasting Focus \n \nYou can use an arcane focus as a spellcasting focus for your sorcerer spells. \n \n### Sorcerous Origin \n \nChoose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline or Wild Magic, both detailed at the end of the class description. \n \nYour choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level. \n \n### Font of Magic \n \nAt 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects. \n \n#### Sorcery Points \n \nYou have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest. \n \n#### Flexible Casting \n \nYou can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels. \n \n**_Creating Spell Slots._** You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th. \n \nAny spell slot you create with this feature vanishes when you finish a long rest. \n \n**Creating Spell Slots (table)** \n \n| Spell Slot Level | Sorcery Point Cost | \n|------------------|--------------------| \n| 1st              | 2                  | \n| 2nd              | 3                  | \n| 3rd              | 5                  | \n| 4th              | 6                  | \n| 5th              | 7                  | \n \n**_Converting a Spell Slot to Sorcery Points._** As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level. \n \n### Metamagic \n \nAt 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level. \n \nYou can use only one Metamagic option on a spell when you cast it, unless otherwise noted. \n \n#### Careful Spell \n \nWhen you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell. \n \n#### Distant Spell \n \nWhen you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell. \n \nWhen you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet. \n \n#### Empowered Spell \n \nWhen you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls. \n \nYou can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell. \n \n#### Extended Spell \n \nWhen you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours. \n \n#### Heightened Spell \n \nWhen you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell. \n \n#### Quickened Spell \n \nWhen you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting. \n \n#### Subtle Spell \n \nWhen you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components. \n \n#### Twinned Spell \n \nWhen you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip). \n \nTo be eligible, a spell must be incapable of targeting more than one creature at the spell's current level. For example, *magic missile* and *scorching ray* aren't eligible, but *ray of frost* and *chromatic orb* are. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Sorcerous Restoration \n \nAt 20th level, you regain 4 expended sorcery points whenever you finish a short rest. \n \n### Sorcerous Origins \n \nDifferent sorcerers claim different origins for their innate magic. Although many variations exist, most of these origins fall into two categories: a draconic bloodline and wild magic.",
    //     "hit_dice": "1d6",
    //     "hp_at_1st_level": "6 + your Constitution modifier",
    //     "hp_at_higher_levels": "1d6 (or 4) + your Constitution modifier per sorcerer level after 1st",
    //     "prof_armor": "None",
    //     "prof_weapons": "Daggers, darts, slings, quarterstaffs, light crossbows",
    //     "prof_tools": "None",
    //     "prof_saving_throws": "Constitution, Charisma",
    //     "prof_skills": "Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion",
    //     "equipment": "You start with the following equipment, in addition to the equipment granted by your background: \n* (*a*) a light crossbow and 20 bolts or (*b*) any simple weapon \n* (*a*) a component pouch or (*b*) an arcane focus \n* (*a*) a dungeoneer's pack or (*b*) an explorer's pack \n* Two daggers",
    //     "table": " Level | Proficiency Bonus | Sorcery Points | Features                       | Cantrips Known | Spells Known | 1st | 2nd | 3rd | 4th | 5th | 6th | 7th | 8th | 9th | \n| 1st   | +2                | -              | Spellcasting, Sorcerous Origin | 4              | 2            | 2   | -   | -   | -   | -   | -   | -   | -   | -   | \n| 2nd   | +2                | 2              | Font of Magic                  | 4              | 3            | 3   | -   | -   | -   | -   | -   | -   | -   | -   | \n| 3rd   | +2                | 3              | Metamagic                      | 4              | 4            | 4   | 2   | -   | -   | -   | -   | -   | -   | -   | \n| 4th   | +2                | 4              | Ability Score Improvement      | 5              | 5            | 4   | 3   | -   | -   | -   | -   | -   | -   | -   | \n| 5th   | +3                | 5              | -                              | 5              | 6            | 4   | 3   | 2   | -   | -   | -   | -   | -   | -   | \n| 6th   | +3                | 6              | Sorcerous Origin Feature       | 5              | 7            | 4   | 3   | 3   | -   | -   | -   | -   | -   | -   | \n| 7th   | +3                | 7              | -                              | 5              | 8            | 4   | 3   | 3   | 1   | -   | -   | -   | -   | -   | \n| 8th   | +3                | 8              | Ability Score Improvement      | 5              | 9            | 4   | 3   | 3   | 2   | -   | -   | -   | -   | -   | \n| 9th   | +4                | 9              | -                              | 5              | 10           | 4   | 3   | 3   | 3   | 1   | -   | -   | -   | -   | \n| 10th  | +4                | 10             | Metamagic                      | 6              | 11           | 4   | 3   | 3   | 3   | 2   | -   | -   | -   | -   | \n| 11th  | +4                | 11             | -                              | 6              | 12           | 4   | 3   | 3   | 3   | 2   | 1   | -   | -   | -   | \n| 12th  | +4                | 12             | Ability Score Improvement      | 6              | 12           | 4   | 3   | 3   | 3   | 2   | 1   | -   | -   | -   | \n| 13th  | +5                | 13             | -                              | 6              | 13           | 4   | 3   | 3   | 3   | 2   | 1   | 1   | -   | -   | \n| 14th  | +5                | 14             | Sorcerous Origin Feature       | 6              | 13           | 4   | 3   | 3   | 3   | 2   | 1   | 1   | -   | -   | \n| 15th  | +5                | 15             | -                              | 6              | 14           | 4   | 3   | 3   | 3   | 2   | 1   | 1   | 1   | -   | \n| 16th  | +5                | 16             | Ability Score Improvement      | 6              | 14           | 4   | 3   | 3   | 3   | 2   | 1   | 1   | 1   | -   | \n| 17th  | +6                | 17             | Metamagic                      | 6              | 15           | 4   | 3   | 3   | 3   | 2   | 1   | 1   | 1   | 1   | \n| 18th  | +6                | 18             | Sorcerous Origin Feature       | 6              | 15           | 4   | 3   | 3   | 3   | 3   | 1   | 1   | 1   | 1   | \n| 19th  | +6                | 19             | Ability Score Improvement      | 6              | 15           | 4   | 3   | 3   | 3   | 3   | 2   | 1   | 1   | 1   | \n| 20th  | +6                | 20             | Sorcerous Restoration          | 6              | 15           | 4   | 3   | 3   | 3   | 3   | 2   | 2   | 1   | 1   ",
    //     "spellcasting_ability": "Charisma",
    //     "subtypes_name": "Sorcerous Origins",
    //     "archetypes": [
    //         {
    //             "name": "Draconic Bloodline",
    //             "slug": "draconic-bloodline",
    //             "desc": "Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance. \n \n##### Dragon Ancestor \n \nAt 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later. \n \n**Draconic Ancestry (table)** \n \n| Dragon | Damage Type | \n|--------|-------------| \n| Black  | Acid        | \n| Blue   | Lightning   | \n| Brass  | Fire        | \n| Bronze | Lightning   | \n| Copper | Acid        | \n| Gold   | Fire        | \n| Green  | Poison      | \n| Red    | Fire        | \n| Silver | Cold        | \n| White  | Cold        | \n \nYou can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check. \n \n##### Draconic Resilience \n \nAs magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. \n \nAdditionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier. \n \n##### Elemental Affinity \n \nStarting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour. \n \n##### Dragon Wings \n \nAt 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn. \n \nYou can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them. \n \n##### Draconic Presence \n \nBeginning at 18th level, you can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration (as if you were casting a concentration spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours.",
    //             "document__slug": "wotc-srd",
    //             "document__title": "Systems Reference Document",
    //             "document__license_url": "http://open5e.com/legal"
    //         }
    //     ],
    //     "document__slug": "wotc-srd",
    //     "document__title": "Systems Reference Document",
    //     "document__license_url": "http://open5e.com/legal"
    // },
    // {
    //     "name": "Warlock",
    //     "slug": "warlock",
    //     "desc": "### Otherworldly Patron \n \nAt 1st level, you have struck a bargain with an otherworldly being of your choice: the Archfey, the Fiend, or the Great Old One, each of which is detailed at the end of the class description. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level. \n \n### Pact Magic \n \nYour arcane research and the magic bestowed on you by your patron have given you facility with spells. \n \n#### Cantrips \n \nYou know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table. \n \n#### Spell Slots \n \nThe Warlock table shows how many spell slots you have. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest. \n \nFor example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell *thunderwave*, you must spend one of those slots, and you cast it as a 3rd-level spell. \n \n#### Spells Known of 1st Level and Higher \n \nAt 1st level, you know two 1st-level spells of your choice from the warlock spell list. \n \nThe Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level. \n \nAdditionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots. \n \n#### Spellcasting Ability \n \nCharisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one. \n \n**Spell save DC** = 8 + your proficiency bonus + your Charisma modifier \n \n**Spell attack modifier** = your proficiency bonus + your Charisma modifier \n \n#### Spellcasting Focus \n \nYou can use an arcane focus as a spellcasting focus for your warlock spells. \n \n### Eldritch Invocations \n \nIn your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability. \n \nAt 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table. \n \nAdditionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level. \n \n### Pact Boon \n \nAt 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice. \n \n#### Pact of the Chain \n \nYou learn the *find familiar* spell and can cast it as a ritual. The spell doesn't count against your number of spells known. \n \nWhen you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite. \n \nAdditionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack of its own with its reaction. \n \n#### Pact of the Blade \n \nYou can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it. You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. \n \nYour pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die. \n \nYou can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can't affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks. \n \n#### Pact of the Tome \n \nYour patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class's spell list (the three needn't be from the same list). While the book is on your person, you can cast those cantrips at will. They don't count against your number of cantrips known. If they don't appear on the warlock spell list, they are nonetheless warlock spells for you. \n \nIf you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Mystic Arcanum \n \nAt 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum. \n \nYou can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again. \n \nAt higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest. \n \n### Eldritch Master \n \nAt 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again. \n \n### Eldritch Invocations \n \nIf an eldritch invocation has prerequisites, you must meet them to learn it. You can learn the invocation at the same time that you meet its prerequisites. A level prerequisite refers to your level in this class. \n \n#### Agonizing Blast \n \n*Prerequisite:* eldritch blast *cantrip* \n \nWhen you cast *eldritch blast*, add your Charisma modifier to the damage it deals on a hit. \n \n#### Armor of Shadows \n \nYou can cast *mage armor* on yourself at will, without expending a spell slot or material components. \n \n#### Ascendant Step \n \n*Prerequisite: 9th level* \n \nYou can cast *levitate* on yourself at will, without expending a spell slot or material components. \n \n#### Beast Speech \n \nYou can cast *speak with animals* at will, without expending a spell slot. \n \n#### Beguiling Influence \n \nYou gain proficiency in the Deception and Persuasion skills. \n \n#### Bewitching Whispers \n \n*Prerequisite: 7th level* \n \nYou can cast *compulsion* once using a warlock spell slot. You can't do so again until you finish a long rest. \n \n#### Book of Ancient Secrets \n \n*Prerequisite: Pact of the Tome feature* \n \nYou can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class's spell list (the two needn't be from the same list). The spells appear in the book and don't count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can't cast the spells except as rituals, unless you've learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag. \n \nOn your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell's level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it. \n \n#### Chains of Carceri \n \n*Prerequisite: 15th level, Pact of the Chain feature* \n \nYou can cast *hold monster* at will-targeting a celestial, fiend, or elemental-without expending a spell slot or material components. You must finish a long rest before you can use this invocation on the same creature again. \n \n#### Devil's Sight \n \nYou can see normally in darkness, both magical and nonmagical, to a distance of 120 feet. \n \n#### Dreadful Word \n \n*Prerequisite: 7th level* \n \nYou can cast *confusion* once using a warlock spell slot. You can't do so again until you finish a long rest. \n \n#### Eldritch Sight \n \nYou can cast *detect magic* at will, without expending a spell slot. \n \n#### Eldritch Spear \n \n*Prerequisite:* eldritch blast *cantrip* \n \nWhen you cast *eldritch blast*, its range is 300 feet. \n \n#### Eyes of the Rune Keeper \n \nYou can read all writing. \n \n#### Fiendish Vigor \n \nYou can cast *false life* on yourself at will as a 1st-level spell, without expending a spell slot or material components. \n \n#### Gaze of Two Minds \n \nYou can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature's senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings. \n \n#### Lifedrinker \n \n*Prerequisite: 12th level, Pact of the Blade feature* \n \nWhen you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier (minimum 1). \n \n#### Mask of Many Faces \n \nYou can cast *disguise self* at will, without expending a spell slot. \n \n#### Master of Myriad Forms \n \n*Prerequisite: 15th level* \n \nYou can cast *alter self* at will, without expending a spell slot. \n \n#### Minions of Chaos \n \n*Prerequisite: 9th level* \n \nYou can cast *conjure elemental* once using a warlock spell slot. You can't do so again until you finish a long rest. \n \n#### Mire the Mind \n \n*Prerequisite: 5th level* \n \nYou can cast *slow* once using a warlock spell slot. You can't do so again until you finish a long rest. \n \n#### Misty Visions \n \nYou can cast *silent image* at will, without expending a spell slot or material components. \n \n#### One with Shadows \n \n*Prerequisite: 5th level* \n \nWhen you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction. \n \n#### Otherworldly Leap \n \n*Prerequisite: 9th level* \n \nYou can cast *jump* on yourself at will, without expending a spell slot or material components. \n \n#### Repelling Blast \n \n*Prerequisite:* eldritch blast *cantrip* \n \nWhen you hit a creature with *eldritch blast*, you can push the creature up to 10 feet away from you in a straight line. \n \n#### Sculptor of Flesh \n \n*Prerequisite: 7th level* \n \nYou can cast *polymorph* once using a warlock spell slot. You can't do so again until you finish a long rest. \n \n#### Sign of Ill Omen \n \n*Prerequisite: 5th level* \n \nYou can cast *bestow curse* once using a warlock spell slot. You can't do so again until you finish a long rest. \n \n#### Thief of Five Fates \n \nYou can cast *bane* once using a warlock spell slot. You can't do so again until you finish a long rest. \n \n#### Thirsting Blade \n \n*Prerequisite: 5th level, Pact of the Blade feature* \n \nYou can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn. \n \n#### Visions of Distant Realms \n \n*Prerequisite: 15th level* \n \nYou can cast *arcane eye* at will, without expending a spell slot. \n \n#### Voice of the Chain Master \n \n*Prerequisite: Pact of the Chain feature* \n \nYou can communicate telepathically with your familiar and perceive through your familiar's senses as long as you are on the same plane of existence. Additionally, while perceiving through your familiar's senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech. \n \n#### Whispers of the Grave \n \n*Prerequisite: 9th level* \n \nYou can cast *speak with dead* at will, without expending a spell slot. \n \n#### Witch Sight \n \n*Prerequisite: 15th level* \n \nYou can see the true form of any shapechanger or creature concealed by illusion or transmutation magic while the creature is within 30 feet of you and within line of sight. \n \n### Otherworldly Patrons \n \nThe beings that serve as patrons for warlocks are mighty inhabitants of other planes of existence-not gods, but almost godlike in their power. Various patrons give their warlocks access to different powers and invocations, and expect significant favors in return. \n \nSome patrons collect warlocks, doling out mystic knowledge relatively freely or boasting of their ability to bind mortals to their will. Other patrons bestow their power only grudgingly, and might make a pact with only one warlock. Warlocks who serve the same patron might view each other as allies, siblings, or rivals.",
    //     "hit_dice": "1d8",
    //     "hp_at_1st_level": "8 + your Constitution modifier",
    //     "hp_at_higher_levels": "1d8 (or 5) + your Constitution modifier per warlock level after 1st",
    //     "prof_armor": "Light armor",
    //     "prof_weapons": "Simple weapons",
    //     "prof_tools": "None",
    //     "prof_saving_throws": "Wisdom, Charisma",
    //     "prof_skills": "Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion",
    //     "equipment": "You start with the following equipment, in addition to the equipment granted by your background: \n* *(a)* a light crossbow and 20 bolts or (*b*) any simple weapon \n* *(a)* a component pouch or (*b*) an arcane focus \n* *(a)* a scholar's pack or (*b*) a dungeoneer's pack \n* Leather armor, any simple weapon, and two daggers",
    //     "table": " Level | Proficiency Bonus | Features                        | Cantrips Known | Spells Known | Spell Slots | Slot Level | Invocations Known | \n| 1st   | +2                | Otherworldly Patron, Pact Magic | 2              | 2            | 1           | 1st        | -                 | \n| 2nd   | +2                | Eldritch Invocations            | 2              | 3            | 2           | 1st        | 2                 | \n| 3rd   | +2                | Pact Boon                       | 2              | 4            | 2           | 2nd        | 2                 | \n| 4th   | +2                | Ability Score Improvement       | 3              | 5            | 2           | 2nd        | 2                 | \n| 5th   | +3                | -                               | 3              | 6            | 2           | 3rd        | 3                 | \n| 6th   | +3                | Otherworldly Patron feature     | 3              | 7            | 2           | 3rd        | 3                 | \n| 7th   | +3                | -                               | 3              | 8            | 2           | 4th        | 4                 | \n| 8th   | +3                | Ability Score Improvement       | 3              | 9            | 2           | 4th        | 4                 | \n| 9th   | +4                | -                               | 3              | 10           | 2           | 5th        | 5                 | \n| 10th  | +4                | Otherworldly Patron feature     | 4              | 10           | 2           | 5th        | 5                 | \n| 11th  | +4                | Mystic Arcanum (6th level)      | 4              | 11           | 3           | 5th        | 5                 | \n| 12th  | +4                | Ability Score Improvement       | 4              | 11           | 3           | 5th        | 6                 | \n| 13th  | +5                | Mystic Arcanum (7th level)      | 4              | 12           | 3           | 5th        | 6                 | \n| 14th  | +5                | Otherworldly Patron feature     | 4              | 12           | 3           | 5th        | 6                 | \n| 15th  | +5                | Mystic Arcanum (8th level)      | 4              | 13           | 3           | 5th        | 7                 | \n| 16th  | +5                | Ability Score Improvement       | 4              | 13           | 3           | 5th        | 7                 | \n| 17th  | +6                | Mystic Arcanum (9th level)      | 4              | 14           | 4           | 5th        | 7                 | \n| 18th  | +6                | -                               | 4              | 14           | 4           | 5th        | 8                 | \n| 19th  | +6                | Ability Score Improvement       | 4              | 15           | 4           | 5th        | 8                 | \n| 20th  | +6                | Eldritch Master                 | 4              | 15           | 4           | 5th        | 8                 ",
    //     "spellcasting_ability": "Charisma",
    //     "subtypes_name": "Otherworldly Patrons",
    //     "archetypes": [
    //         {
    //             "name": "The Fiend",
    //             "slug": "the-fiend",
    //             "desc": "You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths. \n \n##### Expanded Spell List \n \nThe Fiend lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you. \n \n**Fiend Expanded Spells (table)** \n \n| Spell Level | Spells                            | \n|-------------|-----------------------------------| \n| 1st         | burning hands, command            | \n| 2nd         | blindness/deafness, scorching ray | \n| 3rd         | fireball, stinking cloud          | \n| 4th         | fire shield, wall of fire         | \n| 5th         | flame strike, hallow              | \n \n##### Dark One's Blessing \n \nStarting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1). \n \n##### Dark One's Own Luck \n \nStarting at 6th level, you can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so after seeing the initial roll but before any of the roll's effects occur. \n \nOnce you use this feature, you can't use it again until you finish a short or long rest. \n \n##### Fiendish Resilience \n \nStarting at 10th level, you can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance. \n \n##### Hurl Through Hell \n \nStarting at 14th level, when you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape. \n \nAt the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its horrific experience. \n \nOnce you use this feature, you can't use it again until you finish a long rest. \n \n> ### Your Pact Boon \n> \n> Each Pact Boon option produces a special creature or an object that reflects your patron's nature. \n> \n> **_Pact of the Chain._** Your familiar is more cunning than a typical familiar. Its default form can be a reflection of your patron, with sprites and pseudodragons tied to the Archfey and imps and quasits tied to the Fiend. Because the Great Old One's nature is inscrutable, any familiar form is suitable for it. \n> \n> **_Pact of the Blade._** If your patron is the Archfey, your weapon might be a slender blade wrapped in leafy vines. If you serve the Fiend, your weapon could be an axe made of black metal and adorned with decorative flames. If your patron is the Great Old One, your weapon might be an ancient-looking spear, with a gemstone embedded in its head, carved to look like a terrible unblinking eye. \n> \n> **_Pact of the Tome._** Your Book of Shadows might be a fine, gilt-edged tome with spells of enchantment and illusion, gifted to you by the lordly Archfey. It could be a weighty tome bound in demon hide studded with iron, holding spells of conjuration and a wealth of forbidden lore about the sinister regions of the cosmos, a gift of the Fiend. Or it could be the tattered diary of a lunatic driven mad by contact with the Great Old One, holding scraps of spells that only your own burgeoning insanity allows you to understand and cast.",
    //             "document__slug": "wotc-srd",
    //             "document__title": "Systems Reference Document",
    //             "document__license_url": "http://open5e.com/legal"
    //         }
    //     ],
    //     "document__slug": "wotc-srd",
    //     "document__title": "Systems Reference Document",
    //     "document__license_url": "http://open5e.com/legal"
    // },
    // {
    //     "name": "Wizard",
    //     "slug": "wizard",
    //     "desc": "### Spellcasting \n \nAs a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power. \n \n#### Cantrips \n \nAt 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table. \n \n#### Spellbook \n \nAt 1st level, you have a spellbook containing six 1st- level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind. \n \n#### Preparing and Casting Spells \n \nThe Wizard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. \n \nYou prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots. \n \nFor example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell *magic missile,* you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells. \n \nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list. \n \n#### Spellcasting Ability \n \nIntelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one. \n \n**Spell save DC** = 8 + your proficiency bonus + your Intelligence modifier \n \n**Spell attack modifier** = your proficiency bonus + your Intelligence modifier \n \n#### Ritual Casting \n \nYou can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared. \n \n#### Spellcasting Focus \n \nYou can use an arcane focus as a spellcasting focus for your wizard spells. \n \n#### Learning Spells of 1st Level and Higher \n \nEach time you gain a wizard level, you can add two wizard spells of your choice to your spellbook for free. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find other spells that you can add to your spellbook (see the “Your Spellbook” sidebar). \n \n### Arcane Recovery \n \nYou have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher. \n \nFor example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots. \n \n### Arcane Tradition \n \nWhen you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation, all detailed at the end of the class description. \n \nYour choice grants you features at 2nd level and again at 6th, 10th, and 14th level. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Spell Mastery \n \nAt 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal. \n \nBy spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels. \n \n### Signature Spells \n \nWhen you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest. \n \nIf you want to cast either spell at a higher level, you must expend a spell slot as normal. \n \n### Arcane Traditions \n \nThe study of wizardry is ancient, stretching back to the earliest mortal discoveries of magic. It is firmly established in fantasy gaming worlds, with various traditions dedicated to its complex study. \n \nThe most common arcane traditions in the multiverse revolve around the schools of magic. Wizards through the ages have cataloged thousands of spells, grouping them into eight categories called schools. In some places, these traditions are literally schools; a wizard might study at the School of Illusion while another studies across town at the School of Enchantment. In other institutions, the schools are more like academic departments, with rival faculties competing for students and funding. Even wizards who train apprentices in the solitude of their own towers use the division of magic into schools as a learning device, since the spells of each school require mastery of different techniques.",
    //     "hit_dice": "1d6",
    //     "hp_at_1st_level": "6 + your Constitution modifier",
    //     "hp_at_higher_levels": "1d6 (or 4) + your Constitution modifier per wizard level after 1st",
    //     "prof_armor": "None",
    //     "prof_weapons": "Daggers, darts, slings, quarterstaffs, light crossbows",
    //     "prof_tools": "None",
    //     "prof_saving_throws": "Intelligence, Wisdom",
    //     "prof_skills": "Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion",
    //     "equipment": "You start with the following equipment, in addition to the equipment granted by your background: \n* *(a)* a quarterstaff or (*b*) a dagger \n* *(a)* a component pouch or (*b*) an arcane focus \n* *(a)* a scholar's pack or (*b*) an explorer's pack \n* A spellbook",
    //     "table": " Level | Proficiency Bonus | Features                       | Cantrips Known | 1st | 2nd | 3rd | 4th | 5th | 6th | 7th | 8th | 9th | \n| 1st   | +2                | Spellcasting, Arcane Recovery  | 3              | 2   | -   | -   | -   | -   | -   | -   | -   | -   | \n| 2nd   | +2                | Arcane Tradition               | 3              | 3   | -   | -   | -   | -   | -   | -   | -   | -   | \n| 3rd   | +2                | -                              | 3              | 4   | 2   | -   | -   | -   | -   | -   | -   | -   | \n| 4th   | +2                | Ability Score Improvement      | 4              | 4   | 3   | -   | -   | -   | -   | -   | -   | -   | \n| 5th   | +3                | -                              | 4              | 4   | 3   | 2   | -   | -   | -   | -   | -   | -   | \n| 6th   | +3                | Arcane Tradition Feature       | 4              | 4   | 3   | 3   | -   | -   | -   | -   | -   | -   | \n| 7th   | +3                | -                              | 4              | 4   | 3   | 3   | 1   | -   | -   | -   | -   | -   | \n| 8th   | +3                | Ability Score Improvement      | 4              | 4   | 3   | 3   | 2   | -   | -   | -   | -   | -   | \n| 9th   | +4                | -                              | 4              | 4   | 3   | 3   | 3   | 1   | -   | -   | -   | -   | \n| 10th  | +4                | Arcane Tradition Feature       | 5              | 4   | 3   | 3   | 3   | 2   | -   | -   | -   | -   | \n| 11th  | +4                | -                              | 5              | 4   | 3   | 3   | 3   | 2   | 1   | -   | -   | -   | \n| 12th  | +4                | Ability Score Improvement      | 5              | 4   | 3   | 3   | 3   | 2   | 1   | -   | -   | -   | \n| 13th  | +5                | -                              | 5              | 4   | 3   | 3   | 3   | 2   | 1   | 1   | -   | -   | \n| 14th  | +5                | Arcane Tradition Feature       | 5              | 4   | 3   | 3   | 3   | 2   | 1   | 1   | -   | -   | \n| 15th  | +5                | -                              | 5              | 4   | 3   | 3   | 3   | 2   | 1   | 1   | 1   | -   | \n| 16th  | +5                | Ability Score Improvement      | 5              | 4   | 3   | 3   | 3   | 2   | 1   | 1   | 1   | -   | \n| 17th  | +6                | -                              | 5              | 4   | 3   | 3   | 3   | 2   | 1   | 1   | 1   | 1   | \n| 18th  | +6                | Spell Mastery                  | 5              | 4   | 3   | 3   | 3   | 3   | 1   | 1   | 1   | 1   | \n| 19th  | +6                | Ability Score Improvement      | 5              | 4   | 3   | 3   | 3   | 3   | 2   | 1   | 1   | 1   | \n| 20th  | +6                | Signature Spell                | 5              | 4   | 3   | 3   | 3   | 3   | 2   | 2   | 1   | 1   ",
    //     "spellcasting_ability": "Intelligence",
    //     "subtypes_name": "Arcane Traditions",
    //     "archetypes": [
    //         {
    //             "name": "School of Evocation",
    //             "slug": "school-of-evocation",
    //             "desc": "You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants. \n \n##### Evocation Savant \n \nBeginning when you select this school at 2nd level, the gold and time you must spend to copy an evocation spell into your spellbook is halved. \n \n##### Sculpt Spells \n \nBeginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save. \n \n##### Potent Cantrip \n \nStarting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip. \n \n##### Empowered Evocation \n \nBeginning at 10th level, you can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast. \n \n##### Overchannel \n \nStarting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell. \n \nThe first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity. \n \n> ### Your Spellbook \n> \n> The spells that you add to your spellbook as you gain levels reflect the arcane research you conduct on your own, as well as intellectual breakthroughs you have had about the nature of the multiverse. You might find other spells during your adventures. You could discover a spell recorded on a scroll in an evil wizard's chest, for example, or in a dusty tome in an ancient library. \n> \n> **_Copying a Spell into the Book._** When you find a wizard spell of 1st level or higher, you can add it to your spellbook if it is of a spell level you can prepare and if you can spare the time to decipher and copy it. \n> \n> Copying that spell into your spellbook involves reproducing the basic form of the spell, then deciphering the unique system of notation used by the wizard who wrote it. You must practice the spell until you understand the sounds or gestures required, then transcribe it into your spellbook using your own notation. \n> \n> For each level of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent this time and money, you can prepare the spell just like your other spells. \n> \n> **_Replacing the Book._** You can copy a spell from your own spellbook into another book-for example, if you want to make a backup copy of your spellbook. This is just like copying a new spell into your spellbook, but faster and easier, since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell. \n> \n> If you lose your spellbook, you can use the same procedure to transcribe the spells that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place. \n> \n> **_The Book's Appearance._** Your spellbook is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely bound gilt-edged tome you found in an ancient library, or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap.",
    //             "document__slug": "wotc-srd",
    //             "document__title": "Systems Reference Document",
    //             "document__license_url": "http://open5e.com/legal"
    //         }
    //     ],
    //     "document__slug": "wotc-srd",
    //     "document__title": "Systems Reference Document",
    //     "document__license_url": "http://open5e.com/legal"
    // }
];

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

var traps = [
    "Spear Trap (1d8 damage)",
    "Arrow Trap (1d6 damage)",
    "Pit Trap (50', 5d6 damage)",
    "Pendulum Trap (5d6 damage)",
    "Scythe Trap (4d6 damage)",
    "Spiked Pit Trap (10', 2d6 damage)",
    "Falling Block Trap (4d6 damage)",
    "Flooding Pit Trap (10', 1d6 damage)",
    "Teleporter Trap",
    "Flooding Room Trap",
    "Lightning Trap (2d6 damage)",
    "Acid Trap (2d6 damage)",
    "Poison Arrow Trap (1d6 damage plus poison; onset 1d4 rounds, save or 10 damage)",
    "Fire Trap (2d6 damage)",
    "Spear Trap (1d8 damage)",
    "Net Trap",
    "Spear Trap (1d8 damage)",
    "Pendulum Trap (4d6 damage)",
    "Sleep Gas Trap",
    "Scythe Trap (5d6 damage)",
    "Spear Trap (1d8 damage)",
    "Arrow Trap (1d6 damage)",
    "Poison Gas Trap (onset 2d4 rounds, save or 10 damage)",
    "Sleep Gas Trap",
    "Spear Trap (1d8 damage)",
    "Pit Trap (10', 1d6 damage)",
    "Scythe Trap (4d6 damage)",
    "Falling Block Trap (4d6 damage)",
    "Teleporter Trap",
    "Flooding Pit Trap (30', 3d6 damage)",
    "Flooding Room Trap",
    "Spear Trap (1d8 damage)",
    "Blinding Gas Trap",
    "Lightning Trap (4d6 damage)",
    "Pendulum Trap (4d6 damage)",
    "Falling Block Trap (6d6 damage)",
    "Spiked Pit Trap (10', 2d6 damage)",
    "Sleep Gas Trap",
    "Poison Arrow Trap (1d6 damage plus poison; onset 1d4 rounds, save or 10 damage)",
    "Spiked Pit Trap (10', 2d6 damage)",
    "Acid Trap (5d6 damage)",
    "Scythe Trap (5d6 damage)",
    "Blinding Gas Trap",
    "Poison Dart Trap (1d4 damage plus poison; onset 2d4 rounds, save or 30 damage)",
    "Spear Trap (1d8 damage)",
    "Flooding Pit Trap (40', 4d6 damage)",
    "Spiked Pit Trap (50', 6d6 damage)",
    "Pit Trap (10', 1d6 damage)",
    "Teleporter Trap",
    "Acid Trap (5d6 damage)",
    "Net Trap",
    "Sleep Gas Trap",
    "Flooding Room Trap",
    "Spiked Pit Trap (20', 3d6 damage)",
    "Teleporter Trap",
    "Falling Block Trap (5d6 damage)",
    "Poison Arrow Trap (1d6 damage plus poison; onset immediate, save or die)",
    "Pendulum Trap (4d6 damage)",
    "Scythe Trap (5d6 damage)",
    "Poison Arrow Trap (1d6 damage plus poison; onset immediate, save or 20 damage)",
    "Falling Ceiling Trap (save or die)",
    "Arrow Trap (1d6 damage)",
    "Pendulum Trap (5d6 damage)",
    "Net Trap",
    "Scythe Trap (5d6 damage)",
    "Falling Block Trap (4d6 damage)",
    "Poison Dart Trap (1d4 damage plus poison; onset 2d4 rounds, save or 70 damage)",
    "Arrow Trap (1d6 damage)",
    "Flooding Pit Trap (10', 1d6 damage)",
    "Falling Block Trap (4d6 damage)",
    "Flooding Pit Trap (80', 8d6 damage)",
    "Falling Ceiling Trap (save or die)",
    "Poison Gas Trap (onset 2d4 rounds, save or 80 damage)",
    "Poison Arrow Trap (1d6 damage plus poison; onset 2d4 rounds, save or 80 damage)",
    "Sleep Gas Trap",
    "Spiked Pit Trap (40', 5d6 damage)",
    "Arrow Trap (1d6 damage)",
    "Pit Trap (30', 3d6 damage)",
    "Spiked Pit Trap (10', 2d6 damage)",
    "Scythe Trap (5d6 damage)",
    "Falling Block Trap (6d6 damage)",
    "Teleporter Trap",
    "Scythe Trap (4d6 damage)",
    "Net Trap",
    "Teleporter Trap",
    "Falling Block Trap (4d6 damage)",
    "Falling Block Trap (4d6 damage)",
    "Pendulum Trap (4d6 damage)",
    "Lightning Trap (9d6 damage)",
    "Poison Gas Trap (onset 1d4 rounds, save or 60 damage)",
    "Lightning Trap (10d6 damage)",
    "Blinding Gas Trap",
    "Elevator Room Trap (rises 1 level)",
    "Falling Ceiling Trap (save or die)",
    "Pendulum Trap (6d6 damage)",
    "Arrow Trap (1d6 damage)",
    "Fire Trap (10d6 damage)",
    "Sleep Gas Trap",
    "Pit Trap (100', 10d6 damage)",
    "Spear Trap (1d8 damage)",
    "Flooding Room Trap",
    "Scythe Trap (6d6 damage)",
    "Teleporter Trap",
    "Poison Arrow Trap (1d6 damage plus poison; onset immediate, save or 10 damage)",
    "Net Trap",
    "Flooding Room Trap",
    "Spiked Pit Trap (50', 6d6 damage)",
    "Scythe Trap (5d6 damage)",
    "Scythe Trap (4d6 damage)",
    "Arrow Trap (1d6 damage)",
    "Fire Trap (12d6 damage)",
    "Teleporter Trap",
    "Teleporter Trap",
    "Spiked Pit Trap (10', 2d6 damage)",
    "Flooding Pit Trap (120', 12d6 damage)",
    "Poison Gas Trap (onset 2d4 rounds, save or 20 damage)",
    "Pendulum Trap (5d6 damage)",
    "Acid Trap (12d6 damage)",
    "Arrow Trap (1d6 damage)",
    "Sleep Gas Trap",
    "Spear Trap (1d8 damage)",
    "Net Trap",
    "Arrow Trap (1d6 damage)",
    "Teleporter Trap",
    "Acid Trap (13d6 damage)",
    "Spear Trap (1d8 damage)",
    "Spear Trap (1d8 damage)",
    "Sleep Gas Trap",
    "Flooding Pit Trap (10', 1d6 damage)",
    "Flooding Pit Trap (50', 5d6 damage)",
    "Scythe Trap (5d6 damage)",
    "Falling Ceiling Trap (save or die)",
    "Spear Trap (1d8 damage)",
    "Poison Arrow Trap (1d6 damage plus poison; onset immediate, save or die)",
    "Pit Trap (40', 4d6 damage)",
    "Lightning Trap (14d6 damage)",
    "Sleep Gas Trap",
    "Scythe Trap (6d6 damage)",
    "Fire Trap (14d6 damage)",
    "Fire Trap (14d6 damage)",
    "Sleep Gas Trap",
    "Arrow Trap (1d6 damage)",
    "Flooding Pit Trap (150', 15d6 damage)",
    "Poison Dart Trap (1d4 damage plus poison; onset 2d4 rounds, save or die)",
    "Falling Ceiling Trap (save or die)",
    "Sleep Gas Trap",
    "Acid Trap (15d6 damage)",
    "Blinding Gas Trap",
    "Acid Trap (15d6 damage)",
    "Scythe Trap (6d6 damage)",
    "Teleporter Trap",
    "Flooding Pit Trap (40', 4d6 damage)",
    "Scythe Trap (6d6 damage)",
    "Net Trap",
    "Teleporter Trap",
    "Arrow Trap (1d6 damage)",
    "Blinding Gas Trap",
    "Poison Arrow Trap (1d6 damage plus poison; onset 1d4 rounds, save or 40 damage)",
    "Flooding Room Trap",
    "Teleporter Trap",
    "Blinding Gas Trap",
    "Fire Trap (17d6 damage)",
    "Falling Block Trap (5d6 damage)",
    "Net Trap",
    "Spear Trap (1d8 damage)",
    "Sleep Gas Trap",
    "Flooding Pit Trap (20', 2d6 damage)",
    "Pendulum Trap (6d6 damage)",
    "Scythe Trap (5d6 damage)",
    "Blinding Gas Trap",
    "Elevator Room Trap (descends 2 levels)",
    "Pit Trap (180', 18d6 damage)",
    "Pit Trap (180', 18d6 damage)",
    "Sleep Gas Trap",
    "Spear Trap (1d8 damage)",
    "Scythe Trap (6d6 damage)",
    "Sleep Gas Trap",
    "Teleporter Trap",
    "Poison Arrow Trap (1d6 damage plus poison; onset 1d4 rounds, save or 20 damage)",
    "Poison Dart Trap (1d4 damage plus poison; onset 2d4 rounds, save or die)",
    "Falling Ceiling Trap (save or die)",
    "Sleep Gas Trap",
    "Blinding Gas Trap",
    "Blinding Gas Trap",
    "Spear Trap (1d8 damage)",
    "Flooding Room Trap",
    "Pit Trap (190', 19d6 damage)",
    "Poison Arrow Trap (1d6 damage plus poison; onset immediate, save or 40 damage)",
    "Falling Block Trap (6d6 damage)",
    "Flooding Room Trap",
    "Poison Gas Trap (onset 1d4 rounds, save or 30 damage)",
    "Lightning Trap (20d6 damage)",
    "Flooding Pit Trap (200', 20d6 damage)",
    "Falling Ceiling Trap (save or die)",
    "Elevator Room Trap (descends 1 level)",
    "Lightning Trap (20d6 damage)",
    "Elevator Room Trap (descends 2 levels)",
    "Pendulum Trap (5d6 damage)",
    "Elevator Room Trap (rises 1 level)",
    "Poison Gas Trap (onset immediate, save or die)"
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
