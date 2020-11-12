$(document).ready(function(){
    var RNDEncounter,
        RNDWeather,
        RNDTerrain,
        RNDEnvironment,
        RNDItem,
        RNDMonster,
        RNDMonsterImage,
        RNDTrap,
        RNDNPC,
        generator = $("#generator"),
        boxes = 0,
        fullscreen = false;

    function fillGenerator(count){
        if(count == 0){
            //Add default content
            generator.html("<br /><br /><h4>Add some generators from the list above</h4><br /><br />");
        }
    }

    function emptyGenerator(count){
        if(count == 1){
            //Remove default content
            generator.html("");
        }

        //Initialize sorting
        $("#generator").sortable({
            handle: ".drag",
            placeholder: 'box-placeholder',
        });
    }

    function compare(a,b){
        if( a.init < b.init ){
            return 1;
        }
        if( a.init > b.init ){
            return -1;
        }

        return 0;
    }

    $("#fullscreen").on("click", function(e){
        e.preventDefault();
        var el = document.documentElement,
            rfs = el.requestFullscreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
            || el.msRequestFullscreen;
        rfs.call(el);
        return false;
    });

    //hamburger
    $("#hamburger").on("click", function(e){
        e.preventDefault();

        if($("#hamburger").hasClass("on")){
            $("#hamburger").removeClass("on");
            $("#filter").fadeOut(200);
        }
        else{
            $("#hamburger").addClass("on");
            $("#filter").fadeIn(200);
        }

        return false;
    });

    //De-generate boxes
    $("#generator").on("click", ".remove", function(e){
        e.preventDefault();

        $(this).next(".confirm").remove();
        $(this).after('<div class="confirm">Are you sure?<br> <a href="#" class="yes">YES</a><a href="#" class="no">NO</a></div>')

        return false;
    });

    $("#generator").on("click", ".no", function(e){
        e.preventDefault();

        $(this).parent(".confirm").remove();

        return false;
    });

    $("#generator").on("click", ".yes", function(e){
        e.preventDefault();

        $(this).closest(".box").remove();
        boxes--;
        fillGenerator(boxes);

        return false;
    });

    $("#generator").on("click", ".save", function(e){
        e.preventDefault();
        var time = new Date();
        time = time.getTime();

        $(this).parent().parent().parent(".box").data("saveID",time);

        var type = $(this).data("type");

        if(type == "monster"){
            if($(this).parent().next(".monster_a").html().length > 0){
                var monsterCookie = Cookies.get('monsters') + "";
                monsterCookie += "|||||" + time + "_____" + $(this).parent().find(".monsterName").val();
                Cookies.set('monsters', monsterCookie, { expires: 365 });
                $(this).removeClass("save").addClass("unsave");
                $(this).find("img").attr("src","images/on.png");
            }
            else{
                alert("No monster to pin.");
            }
        }

        if(type == "scenario"){
            var scenarioCookie = Cookies.get('scenarios') + "";
            scenarioCookie += "|||||" + time + "_____" + $(this).parent().parent().find(".encounters span").text();
            Cookies.set('scenarios', scenarioCookie, { expires: 365 });
            $(this).removeClass("save").addClass("unsave");
            $(this).find("img").attr("src","images/on.png");
        }

        if(type == "trap"){
            var trapCookie = Cookies.get('traps') + "";
            trapCookie += "|||||" + time + "_____" + $(this).parent().parent().find(".trap span").text();
            Cookies.set('traps', trapCookie, { expires: 365 });
            $(this).removeClass("save").addClass("unsave");
            $(this).find("img").attr("src","images/on.png");
        }

        return false;
    });

    $("#generator").on("click", ".unsave", function(e){
        e.preventDefault();

        var box = $(this).parent().parent().parent();
        var saveID = box.data("saveID");
        var type = $(this).data("type");

        if(type == "monster"){
            var monsterCookie = Cookies.get('monsters').split("|||||");
            var monsterCookieNew = [];

            monsterCookie.forEach(function(value) {
                if(value !== "undefined" && value.length > 0){
                    var monsterCookieItem = value.split("_____");
                    if(parseInt(monsterCookieItem[0]) !== parseInt(saveID)){
                        monsterCookieNew.push(value);
                    }
                }
            });

            monsterCookieNew = monsterCookieNew.join("|||||");
            $(this).removeClass("unsave").addClass("save");

            Cookies.set('monsters', monsterCookieNew, { expires: 365 });
        }

        if(type == "scenario"){
            var scenarioCookie = Cookies.get('scenarios').split("|||||");
            var scenarioCookieNew = [];

            scenarioCookie.forEach(function(value) {
                if(value !== "undefined" && value.length > 0){
                    var scenarioCookieItem = value.split("_____");
                    if(parseInt(scenarioCookieItem[0]) !== parseInt(saveID)){
                        scenarioCookieNew.push(value);
                    }
                }
            });

            scenarioCookieNew = scenarioCookieNew.join("|||||");
            $(this).removeClass("unsave").addClass("save");

            Cookies.set('scenarios', scenarioCookieNew, { expires: 365 });
        }

        if(type == "trap"){
            var trapCookie = Cookies.get('traps').split("|||||");
            var trapCookieNew = [];

            trapCookie.forEach(function(value) {
                if(value !== "undefined" && value.length > 0){
                    var trapCookieItem = value.split("_____");
                    if(parseInt(trapCookieItem[0]) !== parseInt(saveID)){
                        trapCookieNew.push(value);
                    }
                }
            });

            trapCookieNew = trapCookieNew.join("|||||");
            $(this).removeClass("unsave").addClass("save");

            Cookies.set('traps', trapCookieNew, { expires: 365 });
        }

        $(this).find("img").attr("src","images/off.png");
        return false;
    });

    //Show Skill Guide
    $("#addSkillGuide").on("click", function(e){
        e.preventDefault();
        boxes++;
        emptyGenerator(boxes);
        RNDEncounter = randomInt(0,encounters.length);
        var tempHTML =  '<div class="box xlarge">' +
                        '    <h2 class="handle"><img src="images/note.png" width="25" height="25" /> Skill Guide</h2>' +
                        '    <div class="inner">' +
                        '        <div class="encounters"><strong>STRENGTH</strong></span></div>' +
                        '        <div class="encounters"><strong>Athletics</strong> | Climbing, jumping, and swimming.</span></div>' +
                        '        <hr>' +
                        '        <div class="encounters"><strong>DEXTERITY</strong></span></div>' +
                        '        <div class="encounters"><strong>Acrobatics</strong> | Acrobatic stunts, jumps, dives, rolls, flips and balance.</span></div>' +
                        '        <div class="encounters"><strong>Sleight of Hand</strong> | Theft, trickery and concealing items.</span></div>' +
                        '        <div class="encounters"><strong>Stealth</strong> | Escaping unnoticed, hiding and sneaking.</span></div>' +
                        '        <hr>' +
                        '        <div class="encounters"><strong>INTELLIGENCE</strong></span></div>' +
                        '        <div class="encounters"><strong>Arcana</strong> | Knowledge of magical items/beings/locations and spells.</span></div>' +
                        '        <div class="encounters"><strong>History</strong> | Knowledge of past events/people, legends, civilizations and wars.</span></div>' +
                        '        <div class="encounters"><strong>Investigation</strong> | Looking for/understanding clues and analyzing events/literature/wounds.</span></div>' +
                        '        <div class="encounters"><strong>Nature</strong> | Knowledge of terrain, plants, animals, the weather and natural cycles.</span></div>' +
                        '        <div class="encounters"><strong>Religion</strong> | Knowledge of deities, rites, prayers, holy symbol, cults and religious practices.</span></div>' +
                        '        <hr>' +
                        '        <div class="encounters"><strong>WISDOM</strong></span></div>' +
                        '        <div class="encounters"><strong>Animal Handling</strong> | Calming, understanding, guiding and controlling animals.</span></div>' +
                        '        <div class="encounters"><strong>Insight</strong> | Determining intentions, lies and predicting what a creature might do next.</span></div>' +
                        '        <div class="encounters"><strong>Medicine</strong> | Stabilize a dying creature, diagnose an illness and identify a wound/body.</span></div>' +
                        '        <div class="encounters"><strong>Perception</strong> | Check what you hear/see, detect the presence of something and general test your awareness of events/locations/objects.</span></div>' +
                        '        <div class="encounters"><strong>Survival</strong> | Following tracks, hunting animals, navigating paths/wild locations, predicting the weather and avoiding natural traps/pitfalls.</span></div>' +
                        '        <hr>' +
                        '        <div class="encounters"><strong>CHARISMA</strong></span></div>' +
                        '        <div class="encounters"><strong>Deception</strong> | Hiding the truth verbally/through actions and misleading others.</span></div>' +
                        '        <div class="encounters"><strong>Intimidation</strong> | Influencing someone/something through threats, hostility and physical presence.</span></div>' +
                        '        <div class="encounters"><strong>Performance</strong> | Playing music, dancing, acting, storytelling and entertaining.</span></div>' +
                        '        <div class="encounters"><strong>Persuasion</strong> | Influencing creatures through tact, discussion, friendliness, bribery and negotiation.</span></div>' +
                        '        <div class="text-center">' +
                        '           <a class="remove" href="#"><img src="images/remove.png" width="20"' +
                        '           height="20" /></a>' +
                        '           <a class="drag" href="#"><img src="images/drag.png" width="26"' +
                        '           height="26" /></a>' +
                        '       </div>' +
                        '    </div>' +
                        '</div>';
        generator.append(tempHTML);
        return false;
    });

    //Generate Scenario
    $("#addScenario").on("click", function(e){
        e.preventDefault();
        boxes++;
        emptyGenerator(boxes);
        RNDEncounter = randomInt(0,encounters.length);
        var tempHTML =  '<div class="box">' +
                        '    <h2 class="handle"><img src="images/alert.png" width="25" height="25" /> Scenario</h2>' +
                        '    <div class="inner">' +
                        '        <div class="encounters"><strong>Scenario</strong> | <span>'+encounters[RNDEncounter]+'</span></div>' +
                        '        <div class="text-center">' +
                        '           <a class="reRollScenario reroll" href="#"><h4>ROLL&nbsp;&nbsp;<img src="images/dice.png" width="24"' +
                        '           height="24" /></h4></a>' +
                        '           <a class="remove" href="#"><img src="images/remove.png" width="20"' +
                        '           height="20" /></a>' +
                        '           <a class="drag" href="#"><img src="images/drag.png" width="26"' +
                        '           height="26" /></a>' +
                        '           <a class="save" data-type="scenario" href="#"><img src="images/off.png" width="34"' +
                        '           height="34" /></a>' +
                        '       </div>' +
                        '    </div>' +
                        '</div>';
        generator.append(tempHTML);
        return false;
    });

    $("#generator").on("click", ".reRollScenario", function(e){
        e.preventDefault();
        RNDEncounter = randomInt(0,encounters.length);
        $(this).parent().parent().find(".encounters span").text(encounters[RNDEncounter]);
        return false;
    });

    //Generate Enviro-effect, Weather, Terrain
    $("#addEnvironment").on("click", function(e){
        e.preventDefault();
        boxes++;
        emptyGenerator(boxes);
        RNDBiome = randomInt(0,biome.length);
        RNDWeather = randomInt(0,weather.length);
        RNDTerrain = randomInt(0,terrain.length);
        RNDStructures = randomInt(0,geoStructure.length);
        var tempHTML =  '<div class="box">' +
                        '    <h2 class="handle"><img src="images/tree.png" width="25" height="25" /> Environment</h2>' +
                        '    <div class="inner">' +
                        '        <div class="biome"><strong>Biome</strong> | <span>'+biome[RNDBiome]+'</span></div>' +
                        '        <div class="terrain"><strong>Terrain</strong> | <span>'+terrain[RNDTerrain]+'</span></div>' +
                        '        <div class="weather"><strong>Weather</strong> | <span>'+weather[RNDWeather]+'</span></div>' +
                        '        <div class="environment"><strong>Structures</strong> | <span>'+geoStructure[RNDStructures]+'</span></div>' +
                        '        <div class="text-center">' +
                        '           <a class="reRollEnvironment reroll" href="#"><h4>ROLL&nbsp;&nbsp;<img src="images/dice.png" width="24"' +
                        '           height="24" /></h4></a>' +
                        '           <a class="remove" href="#"><img src="images/remove.png" width="20"' +
                        '           height="20" /></a>' +
                        '           <a class="drag" href="#"><img src="images/drag.png" width="26"' +
                        '           height="26" /></a>' +
                        '       </div>' +
                        '    </div>' +
                        '</div>';
        generator.append(tempHTML);
        return false;
    });

    $("#generator").on("click", ".reRollEnvironment", function(e){
        e.preventDefault();
        RNDBiome = randomInt(0,weather.length);
        RNDWeather = randomInt(0,weather.length);
        RNDTerrain = randomInt(0,terrain.length);
        RNDStructures = randomInt(0,geoStructure.length);
        $(this).parent().parent().find(".biome span").text(biome[RNDBiome]);
        $(this).parent().parent().find(".weather span").text(weather[RNDWeather]);
        $(this).parent().parent().find(".terrain span").text(terrain[RNDTerrain]);
        $(this).parent().parent().find(".environment span").text(geoStructure[RNDStructures]);
        return false;
    });

    //Generate Items
    $("#addItem").on("click", function(e){
        e.preventDefault();
        boxes++;
        emptyGenerator(boxes);
        RNDItem = randomInt(0,items.length);

        var selection = '<select style="" class="itemSelect">';
        selection +=    '<option value="" disabled selected>Select Item</option>';

        items.forEach(function(item, index){
            selection += '<option value="' + index + '">' + item[0] + ' (' + item[2] + ')</option>';
        });

        selection += '</select>';

        var tempHTML =  '<div class="box">' +
                        '    <h2 class="handle"><img src="images/item.png" width="25" height="25" /> Item</h2>' +
                        '    <div class="inner">' +
                        '        <div class="text-center top-controls">' +
                                    selection +
                        '        </div>' +
                        '        <div class="item_a"><strong>Name</strong> | <span>'+items[RNDItem][0]+'</span></div>' +
                        '        <div class="item_b"><strong>Description</strong> | <span>'+items[RNDItem][2]+'</span></div>' +
                        '        <div class="item_c"><iframe src="https://roll20.net'+items[RNDItem][1]+'#pageAttrs"></iframe></div>' +
                        '        <div class="text-center">' +
                        '           <a class="reRollItem reroll" href="#"><h4>RANDOM ROLL&nbsp;&nbsp;<img src="images/dice.png" width="24"' +
                        '           height="24" /></h4></a>' +
                        '           <a class="remove" href="#"><img src="images/remove.png" width="20"' +
                        '           height="20" /></a>' +
                        '           <a class="drag" href="#"><img src="images/drag.png" width="26"' +
                        '           height="26" /></a>' +
                        '       </div>' +
                        '    </div>' +
                        '</div>';
        generator.append(tempHTML);
        return false;
    });

    $("#generator").on("click", ".reRollItem", function(e){
        e.preventDefault();
        RNDItem = randomInt(0,items.length);
        $(this).parent().parent().find(".item_a span").text(items[RNDItem][0]);
        $(this).parent().parent().find(".item_b span").text(items[RNDItem][2]);
        $(this).parent().parent().find(".item_c iframe").attr("src","https://roll20.net" + items[RNDItem][1] + "#pageAttrs");
        return false;
    });

    //Generate Monster
    function formatMonster(monsterElement){
        var monster_a = "",
            monster_b = "",
            monster_c = "";

        if(typeof monsterElement["name"] != "undefined") {
            monster_a += "<div><strong>Name</strong> | " + monsterElement["name"] + "</div>";
        }
        if(typeof monsterElement["size"] != "undefined") {
            monster_a += "<div><strong>Size</strong> | " + monsterElement["size"] + "</div>";
        }
        if(typeof monsterElement["type"] != "undefined") {
            monster_a += "<div><strong>Type</strong> | " + monsterElement["type"] + " " + monsterElement["subtype"] + "</div>";
        }
        if(typeof monsterElement["challenge_rating"] != "undefined") {
            monster_a += "<div><strong>CR</strong> | " + monsterElement["challenge_rating"] + "</div>";
        }
        if(typeof monsterElement["alignment"] != "undefined") {
            monster_a += "<div><strong>Alignment</strong> | " + monsterElement["alignment"] + "</div>";
        }
        if(typeof monsterElement["armor_class"] != "undefined") {
            monster_a += "<div><strong>AC</strong> | " + monsterElement["armor_class"] + "</div>";
        }
        if(typeof monsterElement["hit_points"] != "undefined") {
            monster_a += "<div><strong>HP</strong> | " + monsterElement["hit_points"] + " (" + monsterElement["hit_dice"] + ")</div>";
        }
        if(typeof monsterElement["speed"] != "undefined") {
            monster_a += "<div><strong>Speed</strong> | " + monsterElement["speed"] + "</div>";
        }
        if(typeof monsterElement["perception"] != "undefined") {
            monster_a += "<div><strong>Perception</strong> | " + monsterElement["perception"] + "</div>";
        }
        if(typeof monsterElement["dexterity"] != "undefined") {
            monster_a += "<div><strong>Initiative</strong> | +" + Math.floor((monsterElement["dexterity"] - 10) / 2) + "</div>";
        }
        if(typeof monsterElement["senses"] != "undefined" && monsterElement["senses"] !== "") {
            monster_a += "<div><strong>Senses</strong> | " + monsterElement["senses"] + "</div>";
        }
        if(typeof monsterElement["languages"] != "undefined" && monsterElement["languages"] !== "") {
            monster_a += "<div><strong>Languages</strong> | " + monsterElement["languages"] + "</div>";
        }
        if(typeof monsterElement["armor_desc"] != "undefined") {
            monster_a += "<div><strong>Armor Type</strong> | " + monsterElement["armor_desc"] + "</div>";
        }

        if(typeof monsterElement["strength"] != "undefined") {
            monster_b += "<div><strong>Strength</strong> | " + monsterElement["strength"] + " (+" + Math.floor((monsterElement["strength"] - 10) / 2) + ")</div>";
        }
        if(typeof monsterElement["dexterity"] != "undefined") {
            monster_b += "<div><strong>Dexterity</strong> | " + monsterElement["dexterity"] + " (+" + Math.floor((monsterElement["dexterity"] - 10) / 2) + ")</div>"
        }
        if(typeof monsterElement["constitution"] != "undefined") {
            monster_b += "<div><strong>Constitution</strong> | " + monsterElement["constitution"] + " (+" + Math.floor((monsterElement["constitution"] - 10) / 2) + ")</div>"
        }
        if(typeof monsterElement["intelligence"] != "undefined") {
            monster_b += "<div><strong>Intelligence</strong> | " + monsterElement["intelligence"] + " (+" + Math.floor((monsterElement["intelligence"] - 10) / 2) + ")</div>"
        }
        if(typeof monsterElement["wisdom"] != "undefined") {
            monster_b += "<div><strong>Wisdom</strong> | " + monsterElement["wisdom"] + " (+" + Math.floor((monsterElement["wisdom"] - 10) / 2) + ")</div>"
        }
        if(typeof monsterElement["charisma"] != "undefined") {
            monster_b += "<div><strong>Charisma</strong> | " + monsterElement["charisma"] + " (+" + Math.floor((monsterElement["charisma"] - 10) / 2) + ")</div>"
        }
        if(typeof monsterElement["constitution_save"] != "undefined" && monsterElement["constitution_save"] !== "") {
            monster_b += "<div><strong>Save (Con)</strong> | +" + monsterElement["constitution_save"] + "</div>";
        }
        if(typeof monsterElement["intelligence_save"] != "undefined" && monsterElement["intelligence_save"] !== "") {
            monster_b += "<div><strong>Save (Int)</strong> | +" + monsterElement["intelligence_save"] + "</div>";
        }
        if(typeof monsterElement["wisdom_save"] != "undefined" && monsterElement["wisdom_save"] !== "") {
            monster_b += "<div><strong>Save (Wis)</strong> | +" + monsterElement["wisdom_save"] + "</div>";
        }
        if(typeof monsterElement["strength_save"] != "undefined" && monsterElement["strength_save"] !== "") {
            monster_b += "<div><strong>Save (Str)</strong> | +" + monsterElement["strength_save"] + "</div>";
        }
        if(typeof monsterElement["dexterity_save"] != "undefined" && monsterElement["dexterity_save"] !== "") {
            monster_b += "<div><strong>Save (Dex)</strong> | +" + monsterElement["dexterity_save"] + "</div>";
        }
        if(typeof monsterElement["charisma_save"] != "undefined" && monsterElement["charisma_save"] !== "") {
            monster_b += "<div><strong>Save (Cha)</strong> | +" + monsterElement["charisma_save"] + "</div>";
        }
        if(typeof monsterElement["damage_vulnerabilities"] != "undefined" && monsterElement["damage_vulnerabilities"] !== "") {
            monster_b += "<div><strong>Vulnerabilities</strong> | " + monsterElement["damage_vulnerabilities"] + "</div>";
        }
        if(typeof monsterElement["damage_resistances"] != "undefined" && monsterElement["damage_resistances"] !== "") {
            monster_b += "<div><strong>Resistances</strong> | " + monsterElement["damage_resistances"] + "</div>";
        }
        if(typeof monsterElement["damage_immunities"] != "undefined" && monsterElement["damage_immunities"] !== "") {
            monster_b += "<div><strong>Immunities</strong> | " + monsterElement["damage_immunities"] + "</div>";
        }
        if(typeof monsterElement["condition_immunities"] != "undefined" && monsterElement["condition_immunities"] !== "") {
            monster_b += "<div><strong>Condition Immunities</strong> | " + monsterElement["condition_immunities"] + "</div>";
        }

        monster_c += "<hr>";

        if(typeof monsterElement["special_abilities"] != "undefined") {
            monster_c += "<div>";
            monster_c += "<div><strong>Abilities</strong></div>";
            monster_c += "<div class='column'>";

            monsterElement["special_abilities"].forEach(function(value){
                monster_c += "<div class='ability'>";
                monster_c += "<div><strong>Name</strong> | " + value["name"] + "</div>";
                monster_c += "<div><strong>Description</strong> | " + value["desc"] + "</div>";
                monster_c += "<div><strong>Attack Bonus</strong> | +" + value["attack_bonus"] + "</div>";

                if(typeof value["damage_dice"] != "undefined") {
                    monster_c += "<div><strong>Damage</strong> | " + value["damage_dice"] + " + " + value["damage_bonus"] + "</div>";
                }

                monster_c += "</div>";
            });

            monster_c += "</div>";
            monster_c += "</div><hr>";
        }

        if(typeof monsterElement["actions"] != "undefined") {
            monster_c += "<div class='actions'>";
            monster_c += "<div><strong>Actions</strong></div>";
            monster_c += "<div class='column'>";

            monsterElement["actions"].forEach(function(value){
                monster_c += "<div class='ability'>";
                monster_c += "<div><strong>Name</strong> | " + value["name"] + "</div>";
                monster_c += "<div><strong>Description</strong> | " + value["desc"] + "</div>";
                monster_c += "<div><strong>Attack Bonus</strong> | +" + value["attack_bonus"] + "</div>";

                if(typeof value["damage_dice"] != "undefined") {
                    monster_c += "<div><strong>Damage</strong> | " + value["damage_dice"] + " + " + value["damage_bonus"] + "</div>";
                }

                monster_c += "</div>";
            });

            monster_c += "</div>";
            monster_c += "</div><hr>";
        }

        if(typeof monsterElement["legendary_actions"] != "undefined") {
            monster_c += "<div class=''>";
            monster_c += "<div><strong>Legendary Actions</strong></div>";
            monster_c += "<div class='column'>";

            monsterElement["legendary_actions"].forEach(function(value){
                monster_c += "<div class='ability'>";
                monster_c += "<div><strong>Name</strong> | " + value["name"] + "</div>";
                monster_c += "<div><strong>Description</strong> | " + value["desc"] + "</div>";
                monster_c += "<div><strong>Attack Bonus</strong> +| " + value["attack_bonus"] + "</div>";

                if(typeof value["damage_dice"] != "undefined") {
                    monster_c += "<div><strong>Damage</strong> | " + value["damage_dice"] + " + " + value["damage_bonus"] + "</div>";
                }

                monster_c += "</div>";
            });

            monster_c += "</div>";
            monster_c += "</div>";
        }

        monster_c += "<div class='clear'></div>";

        return [monster_a, monster_b,monster_c];
    }

    $("#addMonster").on("click", function(e){
        e.preventDefault();
        boxes++;
        emptyGenerator(boxes);
        var selection = '<div class="monsterSuggestion"><input type="text" class="monsterName" placeholder="Monster name..." /><div class="results"></div></div>';

        selection += '<select style="" class="monsterCR">';
        selection += '<option name="all">Any CR</option>';

        challengeRatingsInvert.forEach(function(value) {
            selection += '<option name="'+value+'">CR '+value+'</option>';
        });

        selection += '</select>';
        selection += '<a class="reRollMonster reroll" style="display:none" href="#"><h4>SEARCH&nbsp;&nbsp;<img src="images/dice.png" width="24" height="24" /></h4></a>';
        selection += '<a class="randomMonster reroll" style="" href="#"><h4>RANDOM&nbsp;&nbsp;<img src="images/dice.png" width="24" height="24" /></h4></a>';

        var tempHTML =  '<div class="box overflow large">' +
                        '    <h2 class="handle"><img src="images/monster.png" width="25" height="25" /> Monster</h2>' +
                        '    <div class="inner">' +
                        '        <div class="text-center top-controls">' +
                                    selection +
                        '           <a class="remove" href="#"><img src="images/remove.png" width="20"' +
                        '           height="20" /></a>' +
                        '           <a class="drag" href="#"><img src="images/drag.png" width="26"' +
                        '           height="26" /></a>' +
                        '           <a class="save" data-type="monster" href="#"><img src="images/off.png" width="34"' +
                        '           height="34" /></a>' +
                        '       </div>' +
                        '        <div class="monster_a border-box"></div>' +
                        '        <div class="monster_b left one-third border-box"></div>' +
                        '        <div class="monster_c left one-third border-box"></div>' +
                        '        <div class="monster_d left one-third border-box"></div>' +
                        '        <div class="clear"></div>' +
                        '        <div class="monster_e border-box"></div>' +
                        '    </div>' +
                        '</div>';
        generator.append(tempHTML);
        return false;
    });

    $("#generator").on("click", ".reRollMonster", function(e){
        e.preventDefault();
        var monsterCR = $(this).parent().parent().find(".monsterCR").val();
        var monsterName = $(this).parent().parent().find(".monsterName").val();
        var RNDMonster = monsterGenerator(monsterCR,monsterName);
        var formattedMonster = formatMonster(RNDMonster);

        if(RNDMonster == 0){
            alert("No monsters found for this search.");
        }
        else{
            $(this).parent().parent().find(".monster_a").html("<hr>");
            $(this).parent().parent().find(".monster_b").html(formattedMonster[0]);
            $(this).parent().parent().find(".monster_c").html(formattedMonster[1]);
            $(this).parent().parent().find(".monster_d").html("<iframe style='opacity:0;' src='https://www.bing.com/images/search?q=D%26D " + RNDMonster["name"] + "#vm_c'></iframe>");
            $(this).parent().parent().find(".monster_e").html(formattedMonster[2]);

            var iframe = $(this).parent().parent().find(".monster_d iframe");
            setTimeout(function(){
                iframe.parent().parent().find(".monster_d iframe").css("opacity",1);
            },1000);
        }

        return false;
    });

    $("#generator").on("click", ".randomMonster", function(e){
        e.preventDefault();
        $(this).parent().parent().find(".monsterName").val("");
        var monsterCR = $(this).parent().parent().find(".monsterCR").val();
        var RNDMonster = monsterGenerator(monsterCR,"");
        var formattedMonster = formatMonster(RNDMonster);

        if(RNDMonster == 0){
            alert("No monsters found for this search.");
        }
        else{
            $(this).parent().parent().find(".monster_a").html("<hr>");
            $(this).parent().parent().find(".monster_b").html(formattedMonster[0]);
            $(this).parent().parent().find(".monster_c").html(formattedMonster[1]);
            $(this).parent().parent().find(".monster_d").html("<iframe style='opacity:0;' src='https://www.bing.com/images/search?q=D%26D " + RNDMonster["name"] + "#vm_c'></iframe>");
            $(this).parent().parent().find(".monster_e").html(formattedMonster[2]);

            var iframe = $(this).parent().parent().find(".monster_d iframe");
            setTimeout(function(){
                iframe.parent().parent().find(".monster_d iframe").css("opacity",1);
            },1000);
        }

        return false;
    });

    $("#generator").on("keyup", ".monsterName", function(e){
        var query = $(this).val();
        var results = $(this).parent().find(".results");
        var monsterList = "";
        var count = 0;
        var queryCR = $(this).parent().parent().find(".monsterCR").val();

        if(query.length >= 1){
            monsters.forEach(function(value){
                if(queryCR == "Any CR"){
                    if(value["name"].toLowerCase().indexOf(query.toLowerCase()) !== -1){
                        monsterList += "<div class='monsterSelection'><span>" + value["name"] + "</span> (CR " + value["challenge_rating"] + ")</div>";
                        count++;
                    }
                }
                else{
                    if(value["name"].toLowerCase().indexOf(query.toLowerCase()) !== -1 && "CR " + value["challenge_rating"] == queryCR){
                        monsterList += "<div class='monsterSelection'><span>" + value["name"] + "</span> (CR " + value["challenge_rating"] + ")</div>";
                        count++;
                    }
                }
            });

            if(count == 0){
                monsterList += "<div>No monsters found for this CR</div>";
            }

            results.html(monsterList);
            results.show();
        }
        else{
            results.hide();
        }
    });

    $("#generator").on("change", ".pcRace", function(e){
        var raceID = parseInt($(this).val());
        var race = raceList[raceID];
        var html = "<hr><h2>" + race["title"] + "</h2>";
        html += "<hr>" + race["description"];

        race["subraces"].forEach(function(value){
            html += "<hr><h4>Subrace: " + value["title"] + "</h4>";
            html += value["description"];
        });

        $(this).parent().parent().find(".pc_a").html(html);
    });

    $("#generator").on("change", ".pcClass", function(e){
        var classID = parseInt($(this).val());
        var classItem = classList[classID];
        var html = classItem["name"] + "\n \n" + classItem["table"] + "\n \n" + classItem["desc"];

        $(this).parent().parent().find(".class_a").text(html);
    });

    $("#generator").on("change", ".itemSelect", function(e){
        var itemID = parseInt($(this).val());
        var item = items[itemID];

        $(this).parent().parent().find(".item_c iframe").attr("src", 'https://roll20.net'+item[1]+'#pageAttrs');
    });

    $("#generator").on("keyup focus", ".spellName", function(e){
        var query = $(this).val();
        var results = $(this).parent().find(".results");
        var spellList = "";
        var count = 0;
        var queryLEVEL = $(this).parent().parent().find(".spellLevel").val();
        var queryCLASS = $(this).parent().parent().find(".spellClass").val();

        if(query.length >= 0){
            spells.forEach(function(value){
                if(value["level"] == "0"){
                    value["level"] = "0 (Cantrip)";
                }
                if(queryLEVEL == "Any Level" && queryCLASS == "Any Class"){
                    //Any Level and Class
                    if(value["name"].toLowerCase().indexOf(query.toLowerCase()) !== -1){
                        spellList += "<div class='spellSelection'><span>" + value["name"] + "</span> | Lv. " + value["level"] + "</div>";
                        count++;
                    }
                }
                else if(queryLEVEL == "Any Level"){
                    //Any Level, specific Class
                    if(value["name"].toLowerCase().indexOf(query.toLowerCase()) !== -1 && value["classes"].toLowerCase().indexOf(queryCLASS.toLowerCase()) !== -1){
                        spellList += "<div class='spellSelection'><span>" + value["name"] + "</span> | Lv. " + value["level"] + "</div>";
                        count++;
                    }
                }
                else if(queryCLASS == "Any Class"){
                    //Any Class, specific Level
                    if(value["name"].toLowerCase().indexOf(query.toLowerCase()) !== -1 && value["level"] == parseInt(queryLEVEL)){
                        spellList += "<div class='spellSelection'><span>" + value["name"] + "</span> | Lv. " + value["level"] + "</div>";
                        count++;
                    }
                }
                else{
                    if(value["name"].toLowerCase().indexOf(query.toLowerCase()) !== -1 && value["classes"].toLowerCase().indexOf(queryCLASS.toLowerCase()) !== -1 && value["level"] == queryLEVEL){
                        spellList += "<div class='spellSelection'><span>" + value["name"] + "</span> | Lv. " + value["level"] + "</div>";
                        count++;
                    }
                }
            });

            if(count == 0){
                spellList += "<div>No spells found for this search</div>";
            }

            results.html(spellList);
            results.show();
        }
        else{
            results.hide();
        }
    });

    $("#generator").on("focus", ".monsterName", function(e){
        $("#generator .monsterName").trigger("keyup");
    });

    $("#generator").on("focus", ".spellName", function(e){
        $("#generator .spellName").trigger("keyup");
    });

    $("#generator").on("click", ".monsterSelection", function(e){
        var selection = $(this).find("span").text();
        var input = $(this).parent().parent().find("input").val(selection);
        $(this).parent().parent().parent().find(".reRollMonster").trigger("click");
        $(this).parent().hide();
    });

    $("#generator").on("click", ".spellSelection", function(e){
        var selection = $(this).find("span").text();
        var input = $(this).parent().parent().find("input").val(selection);
        $(this).parent().parent().parent().find(".reRollSpell").trigger("click");
        $(this).parent().hide();
    });

    $("#generator").on("blur", ".monsterName", function(e){
        var results = $(this).parent().find(".results");
        setTimeout(function(){
            results.hide();
        },100);
    });

    $("#generator").on("blur", ".spellName", function(e){
        var results = $(this).parent().find(".results");
        setTimeout(function(){
            results.hide();
        },100);
    });

    //Show Race Details
    $("#addRace").on("click", function(e){
        e.preventDefault();
        boxes++;
        emptyGenerator(boxes);

        var selection = '<select style="" class="pcRace">';
        selection +=    '<option value="" disabled selected>Select PC Race</option>';

        raceList.forEach(function(item, index){
            selection += '<option value="' + index + '">' + item["title"] + '</option>';
        });

        selection += '</select>';
        selection += '<a class="reRollSpell reroll" style="display:none" href="#"><h4>SEARCH</h4></a>';

        var tempHTML =  '<div class="box overflow large">' +
                        '    <h2 class="handle"><img src="images/npc.png" width="25" height="25" /> PC Race</h2>' +
                        '    <div class="inner">' +
                        '        <div class="text-center top-controls">' +
                                    selection +
                        '           <a class="remove" href="#"><img src="images/remove.png" width="20"' +
                        '           height="20" /></a>' +
                        '           <a class="drag" href="#"><img src="images/drag.png" width="26"' +
                        '           height="26" /></a>' +
                        '       </div>' +
                        '        <div class="border-box pc_a"></div>' +
                        '        <div class="clear"></div>' +
                        '    </div>' +
                        '</div>';
        generator.append(tempHTML);
        return false;
    });

    //Show Class Details
    $("#addClass").on("click", function(e){
        e.preventDefault();
        boxes++;
        emptyGenerator(boxes);

        var selection = '<select style="" class="pcClass">';
        selection +=    '<option value="" disabled selected>Select Class</option>';

        classList.forEach(function(item, index){
            selection += '<option value="' + index + '">' + item["name"] + '</option>';
        });

        selection += '</select>';
        selection += '<a class="reRollSpell reroll" style="display:none" href="#"><h4>SEARCH</h4></a>';

        var tempHTML =  '<div class="box overflow large">' +
                        '    <h2 class="handle"><img src="images/spell.png" width="25" height="25" /> PC Class</h2>' +
                        '    <div class="inner">' +
                        '        <div class="text-center top-controls">' +
                                    selection +
                        '           <a class="remove" href="#"><img src="images/remove.png" width="20"' +
                        '           height="20" /></a>' +
                        '           <a class="drag" href="#"><img src="images/drag.png" width="26"' +
                        '           height="26" /></a>' +
                        '       </div>' +
                        '        <div class="border-box class_a"></div>' +
                        '        <div class="clear"></div>' +
                        '    </div>' +
                        '</div>';
        generator.append(tempHTML);
        return false;
    });

    //Generate Spell
    $("#addSpell").on("click", function(e){
        e.preventDefault();
        boxes++;
        emptyGenerator(boxes);

        var selection = '<select style="" class="spellLevel">';
        selection +=    '<option name="all">Any Level</option>';
        selection +=    '<option name="0">0 (Cantrip)</option>';
        selection +=    '<option name="1">1</option>';
        selection +=    '<option name="2">2</option>';
        selection +=    '<option name="3">3</option>';
        selection +=    '<option name="4">4</option>';
        selection +=    '<option name="5">5</option>';
        selection +=    '<option name="6">6</option>';
        selection +=    '<option name="7">7</option>';
        selection +=    '<option name="8">8</option>';
        selection +=    '<option name="9">9</option>';
        selection += '</select>';
        selection += '<select style="" class="spellClass">';
        selection +=    '<option name="all">Any Class</option>';
        selection +=    '<option name="bard">Bard</option>';
        selection +=    '<option name="cleric">Cleric</option>';
        selection +=    '<option name="druid">Druid</option>';
        selection +=    '<option name="paladin">Paladin</option>';
        selection +=    '<option name="paladin">Paladin</option>';
        selection +=    '<option name="ranger">Ranger</option>';
        selection +=    '<option name="ritual caster">Ritual Caster</option>';
        selection +=    '<option name="sorcerer">Sorcerer</option>';
        selection +=    '<option name="wizard">Wizard</option>';
        selection +=    '<option name="warlock">Warlock</option>';
        selection += '</select>';
        selection += '<div class="spellSuggestion"><input type="text" class="spellName" placeholder="Spell name..." /><div class="results"></div></div>';
        selection += '<a class="reRollSpell reroll" style="display:none" href="#"><h4>SEARCH</h4></a>';

        var tempHTML =  '<div class="box overflow large">' +
                        '    <h2 class="handle"><img src="images/spell.png" width="25" height="25" /> Spell</h2>' +
                        '    <div class="inner">' +
                        '        <div class="text-center top-controls">' +
                                    selection +
                        '           <a class="remove" href="#"><img src="images/remove.png" width="20"' +
                        '           height="20" /></a>' +
                        '           <a class="drag" href="#"><img src="images/drag.png" width="26"' +
                        '           height="26" /></a>' +
                        '       </div>' +
                        '        <div class="spell_a left border-box one-fifth"></div>' +
                        '        <div class="spell_b left border-box one-fifth"></div>' +
                        '        <div class="spell_c left border-box one-fifth"></div>' +
                        '        <div class="spell_d left border-box one-fifth"></div>' +
                        '        <div class="spell_e left border-box one-fifth"></div>' +
                        '        <div class="clear"></div>' +
                        '        <div class="spell_f border-box"></div>' +
                        '    </div>' +
                        '</div>';
        generator.append(tempHTML);
        return false;
    });

    $("#generator").on("click", ".reRollSpell", function(e){
        e.preventDefault();
        var spellName = $(this).parent().parent().find(".spellName").val();
        var selectedSpell = 0;

        spells.forEach(function(item, index){
            if(item['name'] == spellName){
                selectedSpell = item;
            }
        });


        if(selectedSpell == 0){
            alert("No spells found for this search.");
        }
        else{
            // $(this).parent().parent().find(".spell_a").html("<div><strong>Spell</strong></div>" + selectedSpell["name"]);
            // $(this).parent().parent().find(".spell_b").html("<div><strong>School</strong></div>" + selectedSpell["school"]);
            // $(this).parent().parent().find(".spell_c").html("<div><strong>Spell Lv.</strong></div>" + selectedSpell["level"]);
            // $(this).parent().parent().find(".spell_d").html("<div><strong>Components</strong></div>" + selectedSpell["comps"]);
            // $(this).parent().parent().find(".spell_e").html("<div><strong>Classes</strong></div>" + selectedSpell["classes"]);
            $(this).parent().parent().find(".spell_f").html("<div class='iframeBox'><iframe src='https://open5e.com/spells/" + slugify(selectedSpell["name"]) + "'></iframe></div>");
        }

        return false;
    });

    //Generate NPC
    $("#addNPC").on("click", function(e){
        e.preventDefault();
        boxes++;
        emptyGenerator(boxes);
        RNDNPC = NPCGenerator();

        var tempHTML =  '<div class="box medlarge">' +
                        '    <h2 class="handle"><img src="images/npc.png" width="25" height="25" /> NPC</h2>' +
                        '    <div class="inner">' +
                        '        <div class="character_a left one-third border-box">'+RNDNPC[0]+'</div>' +
                        '        <div class="character_b left one-third border-box">'+RNDNPC[1]+'</div>' +
                        '        <div class="character_c left one-third border-box">'+RNDNPC[2]+'</div>' +
                        '        <div class="text-center clear">' +
                        '           <a class="reRollNPC reroll" href="#"><h4>ROLL&nbsp;&nbsp;<img src="images/dice.png" width="24"' +
                        '           height="24" /></h4></a>' +
                        '           <a class="remove" href="#"><img src="images/remove.png" width="20"' +
                        '           height="20" /></a>' +
                        '           <a class="drag" href="#"><img src="images/drag.png" width="26"' +
                        '           height="26" /></a>' +
                        '       </div>' +
                        '    </div>' +
                        '</div>';
        generator.append(tempHTML);
        return false;
    });

    $("#generator").on("click", ".reRollNPC", function(e){
        e.preventDefault();
        RNDNPC = NPCGenerator();
        $(this).parent().parent().find(".character_a").html(RNDNPC[0]);
        $(this).parent().parent().find(".character_b").html(RNDNPC[1]);
        $(this).parent().parent().find(".character_c").html(RNDNPC[2]);
        return false;
    });

    //Add Combat Recorder
    $("#addCombat").on("click", function(e){
        e.preventDefault();
        boxes++;
        emptyGenerator(boxes);
        var tempHTML =  '<div class="box med">' +
                        '    <h2 class="handle"><img src="images/duel.png" width="25" height="25" /> COMBAT </h2>' +
                        '    <div class="inner text-center">' +
                        '    <div class="three-quaters left">' +
                        '        <div class="three-tenths left">Name</div>' +
                        '        <div class="one-fifth left">Initiative</div>' +
                        '        <div class="one-fifth left">HP</div>' +
                        '        <div class="three-tenths left">Condition</div>' +
                        '        <div class="clear"></div>' +
                        '        <div class="inner combatants">' +
                        '            <div class="combatant">' +
                        '                <div class="three-tenths left combat-name"><input type="text" placeholder="E.g. John" /></div>' +
                        '                <div class="one-fifth left combat-init"><input type="number" min="0" placeholder="E.g. 12" /></div>' +
                        '                <div class="one-fifth left combat-hp"><input type="number" placeholder="E.g. 30" /></div>' +
                        '                <div class="three-tenths left combat-cond"><input type="text" placeholder="E.g. Poison" /></div>' +
                        '                <div class="clear"></div>' +
                        '            </div>' +
                        '        </div>' +
                        '        <div class="text-center clear">' +
                        '           <a class="addCombatant reroll" href="#"><h4>+ ADD PLAYER</h4></a>' +
                        '           <a class="progressCombat reroll" href="#"><h4><b>START</b> <img src="images/duel.png" width="24"' +
                        '           height="24" /></h4></a>' +
                        '           <a class="remove" href="#"><img src="images/remove.png" width="20"' +
                        '           height="20" /></a>' +
                        '           <a class="drag" href="#"><img src="images/drag.png" width="26"' +
                        '           height="26" /></a>' +
                        '       </div>' +
                        '    </div>' +
                        '    <div class="one-quater left">' +
                        '       Turn Count' +
                        '       <div class="inner" style="border-left: none;">' +
                        '            <div class="turns"><input type="text" readonly placeholder="E.g. 1" value="1" /></div>' +
                        '       </div>' +
                        '    </div>' +
                        '    <div class="clear"></div>';
                        '    </div>' +
                        '</div>';
        generator.append(tempHTML);
        return false;
    });

    $("#generator").on("click", ".progressCombat", function(e){
        e.preventDefault();
        var combatInstance = $(this).parent().parent().find(".combatants");
        var turnCounter = $(this).parent().parent().parent().find(".turns input");

        if($(this).hasClass("started")){
            var next = combatInstance.find(".combatant.focus").next(".combatant");
            combatInstance.find(".combatant.focus").removeClass("focus");

            if(next.length){
                //Next player on this turn
                next.addClass("focus");
            }
            else{
                //Startt of next Turn
                combatInstance.find(".combatant").eq(0).addClass("focus");
                turnCounter.val( parseInt(turnCounter.val()) + 1 );
            }
        }
        else{
            //Start
            $(this).addClass("started").find("h4 b").text("NEXT");
            var playerList = combatInstance.find(".combatant");
            var players = new Array();
            var x = 0;
            playerList.each(function(){
                players[x] = {
                                "name":$(this).find(".combat-name input").val(),
                                "init":parseInt($(this).find(".combat-init input").val()),
                                "hp":parseInt($(this).find(".combat-hp input").val()),
                                "condition":$(this).find(".combat-cond input").val()
                            };
                x++;
            });

            players.sort(compare);

            var x = 0;
            playerList.each(function(){
                $(this).find(".combat-name input").val( players[x].name );
                $(this).find(".combat-init input").val( players[x].init );
                $(this).find(".combat-hp input").val( players[x].hp );
                $(this).find(".combat-cond input").val( players[x].condition );
                x++;
            });

            playerList.eq(0).addClass("focus");
        }

        return false;
    });

    $("#generator").on("click", ".addCombatant", function(e){
        e.preventDefault();
        var tempHTML =  '<div class="combatant">' +
                        '    <div class="three-tenths left combat-name"><input type="text" placeholder="E.g. John" /></div>' +
                        '    <div class="one-fifth left combat-init"><input type="number" min="0" placeholder="E.g. 12" /></div>' +
                        '    <div class="one-fifth left combat-hp"><input type="number" placeholder="E.g. 30" /></div>' +
                        '    <div class="three-tenths left combat-cond"><input type="text" placeholder="E.g. Poison" /></div>' +
                        '    <div class="clear"></div>' +
                        '</div>';

        $(this).parent().parent().find(".combatants").append(tempHTML);
        return false;
    });

    //Add Note
    $("#addNote").on("click", function(e){
        e.preventDefault();
        boxes++;
        emptyGenerator(boxes);
        var tempHTML =  '<div class="box small">' +
                        '    <h2 class="handle"><img src="images/note.png" width="25" height="25" /> NOTE</h2>' +
                        '    <div class="inner text-center">' +
                        '        <textarea placeholder="Notes..."></textarea>' +
                        '        <div class="text-center clear">' +
                        '           <a class="remove" href="#"><img src="images/remove.png" width="20"' +
                        '           height="20" /></a>' +
                        '           <a class="drag" href="#"><img src="images/drag.png" width="26"' +
                        '           height="26" /></a>' +
                        '       </div>' +
                        '    </div>' +
                        '</div>';
        generator.append(tempHTML);

        return false;
    });

    //Add Challenge Calculator
    $("#addChallenge").on("click", function(e){
        e.preventDefault();
        boxes++;
        emptyGenerator(boxes);
        var tempHTML =  '<div class="box medsmall">' +
                        '    <h2 class="handle"><img src="images/star.png" width="25" height="25" /> CHALLENGE</h2>' +
                        '    <div class="inner text-center">' +
                        '        <div class="one-half left">Party Size</div>' +
                        '        <div class="one-half left">Party Lv.</div>' +
                        '        <div class="clear"></div>' +
                        '        <div class="inner">' +
                        '            <div class="one-half left challenge-size"><input type="number" min="0" placeholder="E.g. 4 Players" /></div>' +
                        '            <div class="one-half left challenge-lv"><input type="number" placeholder="E.g. Lv. 7 (Average)" /></div>' +
                        '            <div class="clear"></div>' +
                        '        </div>' +
                        '        <div class="inner calculation">' +
                        '            result' +
                        '        </div>' +
                        '        <div class="text-center clear">' +
                        '           <a class="calculateChallenge reroll" href="#"><h4>CALCULATE <img src="images/dice.png" width="24"' +
                        '           height="24" /></h4></a>' +
                        '           <a class="remove" href="#"><img src="images/remove.png" width="20"' +
                        '           height="20" /></a>' +
                        '           <a class="drag" href="#"><img src="images/drag.png" width="26"' +
                        '           height="26" /></a>' +
                        '       </div>' +
                        '    </div>' +
                        '</div>';
        generator.append(tempHTML);
        return false;
    });

    $("#generator").on("click", ".calculateChallenge", function(e){
        e.preventDefault();
        var tempHTML = "<div>";
            tempHTML += "    <div class='one-half left'><strong>Monster CR</strong></div>";
            tempHTML += "    <div class='one-half left'><strong>Monster count</strong></div>";
            tempHTML += "    <div class='clear'></div>";
            tempHTML += "</div>";

        partyCount = parseInt($(this).parent().parent().find(".challenge-size input").val());
        partyLevel = parseInt($(this).parent().parent().find(".challenge-lv input").val());
        var challengeRatings = calculateChallenge(partyCount, partyLevel);

        challengeRatings.forEach(function(item, index){
            tempHTML += "<div>";
            tempHTML += "    <div class='one-half left'>" + item['CR'] + "</div>";
            tempHTML += "    <div class='one-half left'>" + item['Count'] + "</div>";
            tempHTML += "    <div class='clear'></div>";
            tempHTML += "</div>";
        });

        $(this).parent().parent().find(".calculation").show().html(tempHTML);
        return false;
    });


    //Generate Trap
    $("#addTrap").on("click", function(e){
        e.preventDefault();
        boxes++;
        emptyGenerator(boxes);
        RNDTrap = randomInt(0,traps.length);
        var tempHTML =  '<div class="box medsmall">' +
                        '    <h2 class="handle"><img src="images/trap.png" width="25" height="25" /> Trap</h2>' +
                        '    <div class="inner">' +
                        '        <div class="trap"><strong>Trap</strong> | <span>'+traps[RNDTrap]+'</span></div>' +
                        '        <div class="text-center">' +
                        '           <a class="reRollScenario reroll" href="#"><h4>ROLL&nbsp;&nbsp;<img src="images/dice.png" width="24"' +
                        '           height="24" /></h4></a>' +
                        '           <a class="remove" href="#"><img src="images/remove.png" width="20"' +
                        '           height="20" /></a>' +
                        '           <a class="drag" href="#"><img src="images/drag.png" width="26"' +
                        '           height="26" /></a>' +
                        '           <a class="save" data-type="trap" href="#"><img src="images/off.png" width="34"' +
                        '           height="34" /></a>' +
                        '       </div>' +
                        '    </div>' +
                        '</div>';
        generator.append(tempHTML);
        return false;
    });

    $("#generator").on("click", ".reRollScenario", function(e){
        e.preventDefault();
        RNDTrap = randomInt(0,traps.length);
        $(this).parent().parent().find(".trap span").text(traps[RNDTrap]);
        return false;
    });

    // $("#reset").on("click", function(e){
    //     e.preventDefault();
    //     var reset = confirm("Are you sure you want clear the board?");
    //
    //     if(reset){
    //         location.reload();
    //     }
    //     return false;
    // });

    //initialize Cookies
    if(typeof(Cookies.get('monsters')) != "undefined"){
        var monsterCookie = Cookies.get('monsters').split("|||||");
        monsterCookie.forEach(function(value) {
            if(value !== "undefined" && value.length > 2){
                var monsterCookieItem = value.split("_____");
                $("#addMonster").trigger("click");
                $("#generator .box").last().data("saveID",monsterCookieItem[0]);
                $("#generator .box").last().find(".monsterName").val(monsterCookieItem[1]);
                $("#generator .box").last().find(".reRollMonster").trigger("click");
                $("#generator .box").last().find(".save").addClass("unsave").removeClass("save");
                $("#generator .box").last().find(".unsave img").attr("src","images/on.png");
            }
        });
    }

    if(typeof(Cookies.get('scenarios')) != "undefined"){
        var scenarioCookie = Cookies.get('scenarios').split("|||||");
        scenarioCookie.forEach(function(value) {
            if(value !== "undefined" && value.length > 2){
                var scenarioCookieItem = value.split("_____");
                $("#addScenario").trigger("click");
                $("#generator .box").last().data("saveID",scenarioCookieItem[0]);
                $("#generator .box").last().find(".encounters span").text(scenarioCookieItem[1]);
                $("#generator .box").last().find(".save").addClass("unsave").removeClass("save");
                $("#generator .box").last().find(".unsave img").attr("src","images/on.png");
            }
        });
    }

    if(typeof(Cookies.get('traps')) != "undefined"){
        var trapCookie = Cookies.get('traps').split("|||||");
        trapCookie.forEach(function(value) {
            if(value !== "undefined" && value.length > 2){
                var trapCookieItem = value.split("_____");
                $("#addTrap").trigger("click");
                $("#generator .box").last().data("saveID",trapCookieItem[0]);
                $("#generator .box").last().find(".trap span").text(trapCookieItem[1]);
                $("#generator .box").last().find(".save").addClass("unsave").removeClass("save");
                $("#generator .box").last().find(".unsave img").attr("src","images/on.png");
            }
        });
    }
});
