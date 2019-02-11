$(document).ready(function(){
    var RNDEncounter,
        RNDWeather,
        RNDTerrain,
        RNDEnvironment,
        RNDItem,
        RNDMonster,
        RNDMonsterImage,
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
                        '           <a class="reRollScenario reroll" href="#"><h4>RE-ROLL&nbsp;&nbsp;<img src="images/dice.png" width="24"' +
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
                        '           <a class="reRollEnvironment reroll" href="#"><h4>RE-ROLL&nbsp;&nbsp;<img src="images/dice.png" width="24"' +
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
                        '           <a class="reRollItem reroll" href="#"><h4>RE-ROLL&nbsp;&nbsp;<img src="images/dice.png" width="24"' +
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
    $("#addMonster").on("click", function(e){
        boxes++;
        emptyGenerator(boxes);
        RNDMonster = monsterGenerator("all");
        var select = '<select id="monsterCR">';
            select += '<option name="all">all</option>';

        challengeRatingsInvert.forEach(function(value) {
            select += '<option name="'+value+'">CR '+value+'</option>';
        });

        select += '</select>';


        var tempHTML =  '<div class="box large">' +
                        '    <h2 class="handle"><img src="images/monster.png" width="25" height="25" /> Monster</h2>' +
                        '    <div class="inner">' +
                        '        <div class="monster_a"><strong>Name</strong> | <span>'+RNDMonster[0]+'</span></div>' +
                        '        <div class="monster_b left two-thirds border-box"><iframe src="https://roll20.net/compendium/dnd5e/'+RNDMonster[0]+'"></iframe></div>' +
                        '        <div class="monster_c left one-third border-box"><iframe src="https://www.google.co.uk/search?igu=1&q=D%26D '+RNDMonster[0]+'&tbm=isch#search"></iframe></div>' +
                        '        <div class="text-center clear">' +
                        //'           <a class="expand reroll" href="#"><h4>EXPAND</h4></a>' +
                        '          ' + select +
                        '           <a class="reRollMonster reroll" href="#"><h4>RE-ROLL&nbsp;&nbsp;<img src="images/dice.png" width="24"' +
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

    $("#generator").on("click", ".reRollMonster", function(e){
        e.preventDefault();
        var monsterCR = $("#monsterCR").val();
        RNDMonster = monsterGenerator(monsterCR);

        if(RNDMonster == 0){
            alert("No monsters found for this CR");
        }
        else{
            $(this).parent().parent().find(".monster_a span").text(RNDMonster[0]);
            $(this).parent().parent().find(".monster_b iframe").attr("src","https://roll20.net/compendium/dnd5e/" + RNDMonster[0]);
            $(this).parent().parent().find(".monster_c iframe").attr("src","https://www.google.co.uk/search?igu=1&q=D%26D " + RNDMonster[0] + "&tbm=isch#search");
        }

        return false;
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
                        '           <a class="reRollMonster reroll" href="#"><h4>RE-ROLL&nbsp;&nbsp;<img src="images/dice.png" width="24"' +
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

    $("#generator").on("click", ".reRollMonster", function(e){
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

    $("#reset").on("click", function(e){
        e.preventDefault();
        var reset = confirm("Are you sure you want clear the board?");

        if(reset){
            location.reload();
        }
        return false;
    });
});
