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

    //De-generate boxes
    $("#generator").on("click", ".remove", function(e){
        e.preventDefault();
        var remove = confirm("Are you sure you want remove this module?");

        if(remove){
            $(this).parent().parent().parent(".box").remove();
            boxes--;
            fillGenerator(boxes);
        }

        return false;
    });

    $("#generator").on("click", ".save", function(e){
        e.preventDefault();
        var time = new Date();
        time = time.getTime();

        var type = $(this).data("type");

        if(type == "monster"){
            //console.log($(this).parent().next(".monster_a").html().length);
            if($(this).parent().next(".monster_a").html().length > 0){
                var monsterCookie = Cookies.get('monsters') + "";
                monsterCookie += "|||||" + time + "_____" + $(this).parent().find(".monsterName").val();
                Cookies.set('monsters', monsterCookie, { expires: 365 });
                $(this).removeClass("save").addClass("unsave");
                $(this).find("img").attr("src","/images/on.png");
            }
            else{
                alert("No monster to pin.");
            }
        }

        return false;
    });

    $("#generator").on("click", ".unsave", function(e){
        e.preventDefault();

        var box = $(this).parent().parent().parent();
        var saveID = box.data("saveID");
        var monsterCookie = Cookies.get('monsters').split("|||||");
        var monsterCookieNew = [];

        monsterCookie.forEach(function(value) {
            if(value !== "undefined"){
                var monsterCookieItem = value.split("_____");
                if(monsterCookieItem[0] !== saveID){
                    monsterCookieNew.push(value);
                }
            }
        });

        monsterCookieNew = monsterCookieNew.join("|||||");
        $(this).removeClass("unsave").addClass("save");

        Cookies.set('monsters', monsterCookieNew, { expires: 365 });

        $(this).find("img").attr("src","/images/off.png");
        return false;
    });

    //Generate Scenario
    $("#addScenario").on("click", function(e){
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
                        '       </div>' +
                        '    </div>' +
                        '</div>';
        generator.append(tempHTML);
    });

    $("#generator").on("click", ".reRollScenario", function(e){
        e.preventDefault();
        RNDEncounter = randomInt(0,encounters.length);
        $(this).parent().parent().find(".encounters span").text(encounters[RNDEncounter]);
        return false;
    });

    //Generate Enviro-effect, Weather, Terrain
    $("#addEnvironment").on("click", function(e){
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
        boxes++;
        emptyGenerator(boxes);
        RNDItem = randomInt(0,items.length);
        var tempHTML =  '<div class="box">' +
                        '    <h2 class="handle"><img src="images/item.png" width="25" height="25" /> Item</h2>' +
                        '    <div class="inner">' +
                        '        <div class="item_a"><strong>Name</strong> | <span>'+items[RNDItem][0]+'</span></div>' +
                        '        <div class="item_b"><strong>Description</strong> | <span>'+items[RNDItem][2]+'</span></div>' +
                        '        <div class="item_c"><iframe src="https://roll20.net'+items[RNDItem][1]+'#pageAttrs"></iframe></div>' +
                        '        <div class="text-center">' +
                        '           <a class="reRollItem reroll" href="#"><h4>ROLL&nbsp;&nbsp;<img src="images/dice.png" width="24"' +
                        '           height="24" /></h4></a>' +
                        '           <a class="remove" href="#"><img src="images/remove.png" width="20"' +
                        '           height="20" /></a>' +
                        '           <a class="drag" href="#"><img src="images/drag.png" width="26"' +
                        '           height="26" /></a>' +
                        '       </div>' +
                        '    </div>' +
                        '</div>';
        generator.append(tempHTML);
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
            monster_b += "<div><strong>Strength</strong> | " + monsterElement["strength"] + "</div>";
        }
        if(typeof monsterElement["dexterity"] != "undefined") {
            monster_b += "<div><strong>Dexterity</strong> | " + monsterElement["dexterity"] + "</div>";
        }
        if(typeof monsterElement["constitution"] != "undefined") {
            monster_b += "<div><strong>Constitution</strong> | " + monsterElement["constitution"] + "</div>";
        }
        if(typeof monsterElement["intelligence"] != "undefined") {
            monster_b += "<div><strong>Intelligence</strong> | " + monsterElement["intelligence"] + "</div>";
        }
        if(typeof monsterElement["wisdom"] != "undefined") {
            monster_b += "<div><strong>Wisdom</strong> | " + monsterElement["wisdom"] + "</div>";
        }
        if(typeof monsterElement["charisma"] != "undefined") {
            monster_b += "<div><strong>Charisma</strong> | " + monsterElement["charisma"] + "</div>";
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
            monster_c += "</div><hr>";
        }

        if(typeof monsterElement["actions"] != "undefined") {
            monster_c += "<div class='left one-half actions'>";
            monster_c += "<div><strong>Actions</strong></div>";

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
        }

        if(typeof monsterElement["legendary_actions"] != "undefined") {
            monster_c += "<div class='left one-half'>";
            monster_c += "<div><strong>Legendary Actions</strong></div>";

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
        }

        monster_c += "<div class='clear'></div>";

        return [monster_a, monster_b,monster_c];
    }

    $("#addMonster").on("click", function(e){
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

        var tempHTML =  '<div class="box large">' +
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
            $(this).parent().parent().find(".monster_d").html("<iframe src='https://www.google.co.uk/search?igu=1&q=D%26D " + RNDMonster["name"] + "&tbm=isch#search'></iframe>");
            $(this).parent().parent().find(".monster_e").html(formattedMonster[2]);
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
            $(this).parent().parent().find(".monster_d").html("<iframe src='https://www.google.co.uk/search?igu=1&q=D%26D " + RNDMonster["name"] + "&tbm=isch#search'></iframe>");
            $(this).parent().parent().find(".monster_e").html(formattedMonster[2]);
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
                        monsterList += "<div class='monsterSelection'>" + value["name"] + "</div>";
                        count++;
                    }
                }
                else{
                    if(value["name"].toLowerCase().indexOf(query.toLowerCase()) !== -1 && "CR " + value["challenge_rating"] == queryCR){
                        monsterList += "<div class='monsterSelection'>" + value["name"] + "</div>";
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

    $("#generator").on("focus", ".monsterName", function(e){
        $("#generator .monsterName").trigger("keyup");
    });

    $("#generator").on("click", ".monsterSelection", function(e){
        var selection = $(this).text();
        var input = $(this).parent().parent().find("input").val(selection);
        $(this).parent().parent().parent().find(".reRollMonster").trigger("click");
        $(this).parent().hide();
    });

    $("#generator").on("blur", ".monsterName", function(e){
        var results = $(this).parent().find(".results");
        setTimeout(function(){
            results.hide();
        },100);
    });

    //Generate NPC
    $("#addNPC").on("click", function(e){
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
        boxes++;
        emptyGenerator(boxes);
        var tempHTML =  '<div class="box">' +
                        '    <h2 class="handle"><img src="images/duel.png" width="25" height="25" /> COMBAT </h2>' +
                        '    <div class="inner text-center">' +
                        '        <div class="one-third left">Name</div>' +
                        '        <div class="one-third left">Initiative</div>' +
                        '        <div class="one-third left">Current HP</div>' +
                        '        <div class="clear"></div>' +
                        '        <div class="inner combatants">' +
                        '            <div class="one-third left combat-name"><input type="text" placeholder="E.g. John" /></div>' +
                        '            <div class="one-third left combat-init"><input type="number" min="0" placeholder="E.g. 12" /></div>' +
                        '            <div class="one-third left combat-hp"><input class="half left" type="number" placeholder="E.g. 30" /></div>' +
                        '            <div class="clear"></div>' +
                        '        </div>' +
                        '        <div class="text-center clear">' +
                        '           <a class="addCombatant reroll" href="#"><h4>+ ADD</h4></a>' +
                        '           <a class="resetCombat reroll" href="#"><h4>RESET <img src="images/dice.png" width="24"' +
                        '           height="24" /></h4></a>' +
                        '           <a class="remove" href="#"><img src="images/remove.png" width="20"' +
                        '           height="20" /></a>' +
                        '           <a class="drag" href="#"><img src="images/drag.png" width="26"' +
                        '           height="26" /></a>' +
                        '       </div>' +
                        '    </div>' +
                        '</div>';
        generator.append(tempHTML);
    });

    $("#generator").on("click", ".resetCombat", function(e){
        e.preventDefault();
        var tempHTML =  '<div class="one-third left combat-name"><input type="text" placeholder="E.g. John" /></div>' +
                        '<div class="one-third left combat-init"><input type="number" min="0" placeholder="E.g. 12" /></div>' +
                        '<div class="one-third left combat-hp"><input class="half left" type="number" placeholder="E.g. 30" /></div>' +
                        '<div class="clear"></div>';

        $(this).parent().parent().find(".combatants").html(tempHTML);
        return false;
    });

    $("#generator").on("click", ".addCombatant", function(e){
        e.preventDefault();
        var tempHTML =  '<div class="one-third left combat-name"><input type="text" placeholder="E.g. John" /></div>' +
                        '<div class="one-third left combat-init"><input type="number" min="0" placeholder="E.g. 12" /></div>' +
                        '<div class="one-third left combat-hp"><input class="half left" type="number" placeholder="E.g. 30" /></div>' +
                        '<div class="clear"></div>';

        $(this).parent().parent().find(".combatants").append(tempHTML);
        return false;
    });

    //Add Note
    $("#addNote").on("click", function(e){
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
    });

    //Add Challenge Calculator
    $("#addChallenge").on("click", function(e){
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


        //Generate Scenario
        $("#addTrap").on("click", function(e){
            boxes++;
            emptyGenerator(boxes);
            RNDTrap = randomInt(0,traps.length);
            var tempHTML =  '<div class="box small">' +
                            '    <h2 class="handle"><img src="images/trap.png" width="25" height="25" /> Trap</h2>' +
                            '    <div class="inner">' +
                            '        <div class="trap"><strong>Scenario</strong> | <span>'+traps[RNDTrap]+'</span></div>' +
                            '        <div class="text-center">' +
                            '           <a class="reRollScenario reroll" href="#"><h4>ROLL&nbsp;&nbsp;<img src="images/dice.png" width="24"' +
                            '           height="24" /></h4></a>' +
                            '           <a class="remove" href="#"><img src="images/remove.png" width="20"' +
                            '           height="20" /></a>' +
                            '           <a class="drag" href="#"><img src="images/drag.png" width="26"' +
                            '           height="26" /></a>' +
                            '       </div>' +
                            '    </div>' +
                            '</div>';
            generator.append(tempHTML);
        });

        $("#generator").on("click", ".reRollScenario", function(e){
            e.preventDefault();
            RNDTrap = randomInt(0,traps.length);
            $(this).parent().parent().find(".trap span").text(traps[RNDTrap]);
            return false;
        });

    /*
    $("#generator").on("click", ".expand", function(e){
        e.preventDefault();
        var parentBox = $(this).parent().parent().parent(".box");
        if(parentBox.hasClass("expandBox")){
            parentBox.removeClass("expandBox");
            $(this).find("h4").text("EXPAND");
        }
        else{
            parentBox.addClass("expandBox");
            $(this).find("h4").text("MINIMISE");
        }
        return false;
    });
    */

    $("#reset").on("click", function(e){
        e.preventDefault();
        var reset = confirm("Are you sure you want clear the board?");

        if(reset){
            location.reload();
        }
        return false;
    });

    //initialize Cookies
    if(typeof(Cookies.get('monsters')) != "undefined"){
        var monsterCookie = Cookies.get('monsters').split("|||||");
        //$("#headerDummy").after("<h3>"+Cookies.get('monsters')+"</h3>");
        monsterCookie.forEach(function(value) {
            if(value !== "undefined" && value.length > 2){
                var monsterCookieItem = value.split("_____");
                $("#addMonster").trigger("click");
                $("#generator .box").last().data("saveID",monsterCookieItem[0]);
                $("#generator .box").last().find(".monsterName").val(monsterCookieItem[1]);
                $("#generator .box").last().find(".reRollMonster").trigger("click");
                $("#generator .box").last().find(".save").addClass("unsave").removeClass("save");
            }
        });
    }
});
