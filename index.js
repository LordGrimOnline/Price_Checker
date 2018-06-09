const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`with myself`, {type: 'playing'});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  bot.on("message", message => {
      if (message.channel.id != "bot-testing") {
          return;
      }
  });


// when adding commands no spaces in item name.

//test command
  if (cmd === `${prefix}hello`){
    return message.channel.send("hello!");
}



// help command

if (cmd === `${prefix}Help`){
  return message.channel.send("Please type prefix $ then type the item category. Example: $Loot, $Meds,   ");
}

if (cmd === `${prefix}Meds`){
  return message.channel.send("$Augmentin, $AI-2, $Painkillers, $Armybandage, $Car, $GoldenStar, $Grizzly, $IFAK, $Splint, $Morphine, $Salewa, $Vaseline");
}


if (cmd === `${prefix}Loot`){
  return message.channel.send("$Propane, $Nails, $Screws, $Set, $AABat., $Filter, $Apollon, $Bolts, $GPhone, $Lion, $Battery, $Cat, $Chainlet, $Wiper, $Coffee, $MTape, $Hose, $Vaseline, $CPUFan, $Crickent, $DBat., $HDD, $Dfuel, $Ducttape, $DVD, $Drill, $ESLamp, $GasAn, $GMcount, $GoldChain, $Graphicscard, $Gunpowder, $Alkali, $Figurine, $H2O2, $Tape, $Malboro, $Matches, $Ophthalmoscope, $Bleach, $Paid, $CPU, $BTC, $Plex, $Pliers, $PliersElite, $PSU, $Powerbank, $Cord, $Circuit, $Paper, $RAM, $RecBatt, $Roler, $NaCl, $Screwnut, $Screwdriv, $Flash, $Shus, $Sodium, $Plug, $Strike, $T-Plug, $Toothpaste, $UVLamp, $USB-A, $WD-40400ml, $WD-40100ml, $Wilston, $Clock, $Wrench, $Xneo, $Zibbo");
}


// Meds


  if (cmd === `${prefix}Augmentin`){
    return message.channel.send("Augmentin= 8,900₽");
}

if (cmd === `${prefix}AI-2`){
  return message.channel.send("AI-2= 1,500₽");
}

if (cmd === `${prefix}Painkillers`){
  return message.channel.send("Painkillers= 2,600₽");
}

if (cmd === `${prefix}Armybandage`){
  return message.channel.send("Army bandage= 1,000₽");
}

if (cmd === `${prefix}Car`){
  return message.channel.send("Car= 2,400₽");
}

if (cmd === `${prefix}GoldenStar`){
  return message.channel.send("GoldenStar= 18,500₽");
}

if (cmd === `${prefix}Grizzly`){
  return message.channel.send("Grizzly= 15,000₽");
}

if (cmd === `${prefix}IFAK`){
  return message.channel.send("IFAK= 8,500₽");
}

if (cmd === `${prefix}Splint`){
  return message.channel.send("Splint= 700₽");
}

if (cmd === `${prefix}Morphine`){
  return message.channel.send("Morphine= 7,500₽");
}

if (cmd === `${prefix}Salewa`){
  return message.channel.send("Salewa= 5,500₽");
}

if (cmd === `${prefix}Vaseline`){
  return message.channel.send("Vaseline= 8,000₽");
}





//misc loot


if (cmd === `${prefix}Propane`){
  return message.channel.send("Propane= 2,500₽");
}

if (cmd === `${prefix}Nails`){
  return message.channel.send("Nails= 2,000₽");
}


if (cmd === `${prefix}Screws`){
  return message.channel.send("Screws= 3,000₽");
}


if (cmd === `${prefix}Set`){
  return message.channel.send("Set= 2,500₽");
}


if (cmd === `${prefix}AABat.`){
  return message.channel.send("AA Bat.= 550₽");
}


if (cmd === `${prefix}Filter`){
  return message.channel.send("Filter= 2,500₽");
}


if (cmd === `${prefix}Apollon`){
  return message.channel.send("Apollon= 200₽");
}


if (cmd === `${prefix}Bolts`){
  return message.channel.send("Bolts= 250₽");
}


if (cmd === `${prefix}GPhone`){
  return message.channel.send("GPhone= 20,000₽");
}


if (cmd === `${prefix}Lion`){
  return message.channel.send("Lion= 75,000₽");
}


if (cmd === `${prefix}Battery`){
  return message.channel.send("Battery= 4,500₽");
}


if (cmd === `${prefix}Cat`){
  return message.channel.send("Cat= 11,000₽");
}


if (cmd === `${prefix}Chainlet`){
  return message.channel.send("Chainlet= 6,700₽");
}


if (cmd === `${prefix}Wiper`){
  return message.channel.send("Wiper= 1,725₽");
}


if (cmd === `${prefix}Coffee`){
  return message.channel.send("Coffee= 2,000₽");
}


if (cmd === `${prefix}MTape`){
  return message.channel.send("MTape= 1,650₽");
}

if (cmd === `${prefix}Hose`){
  return message.channel.send("Hose= 1,600₽");
}

if (cmd === `${prefix}Vaseline`){
  return message.channel.send("Vaseline= 8,000₽");
}

if (cmd === `${prefix}CPUFan`){
  return message.channel.send("CPU Fan= 2,500₽");
}

if (cmd === `${prefix}Crickent`){
  return message.channel.send("Crickent= 200₽");
}

if (cmd === `${prefix}DBat.`){
  return message.channel.send("D Bat.= 2,000₽");
}

if (cmd === `${prefix}HDD`){
  return message.channel.send("HDD= 2,250₽");
}

if (cmd === `${prefix}Dfuel`){
  return message.channel.send("Dfuel= 2,000₽");
}

if (cmd === `${prefix}Ducttape`){
  return message.channel.send("Duct tape= 1,000₽");
}

if (cmd === `${prefix}DVD`){
  return message.channel.send("DVD= 1,250₽");
}

if (cmd === `${prefix}Drill`){
  return message.channel.send("Drill= 4,000₽");
}

if (cmd === `${prefix}ESLamp`){
  return message.channel.send("ES Lamp= 2,760₽");
}

if (cmd === `${prefix}GasAn`){
  return message.channel.send("GasAn= 8,500₽");
}

if (cmd === `${prefix}GMcount`){
  return message.channel.send("GMcount= 11,000₽");
}

if (cmd === `${prefix}GoldChain`){
  return message.channel.send("GoldChain= 17,000₽");
}

if (cmd === `${prefix}Graphicscard`){
  return message.channel.send("Graphics card= 8,000₽");
}

if (cmd === `${prefix}Gunpowder`){
  return message.channel.send("Gunpowder= 7,500₽");
}

if (cmd === `${prefix}Alkali`){
  return message.channel.send("Alkali= 3,500₽");
}

if (cmd === `${prefix}Figurine`){
  return message.channel.send("Figurine= 3,900₽");
}

if (cmd === `${prefix}H2O2`){
  return message.channel.send("H2O2= 2,150₽");
}

if (cmd === `${prefix}Tape`){
  return message.channel.send("Tape= 1,000₽");
}

if (cmd === `${prefix}Magnet`){
  return message.channel.send("Magnet= 7,800₽");
}

if (cmd === `${prefix}Malboro`){
  return message.channel.send("Malboro= 300₽");
}

if (cmd === `${prefix}Matches`){
  return message.channel.send("Matches= 200₽");
}

if (cmd === `${prefix}Ophthalmoscope`){
  return message.channel.send("Ophthalmoscope= 41,600₽");
}

if (cmd === `${prefix}Bleach`){
  return message.channel.send("Bleach= 1,500₽");
}

if (cmd === `${prefix}Paid`){
  return message.channel.send("Paid= 1,275₽");
}

if (cmd === `${prefix}CPU`){
  return message.channel.send("CPU= 12,000₽");
}

if (cmd === `${prefix}BTC`){
  return message.channel.send("BTC= 120,000₽");
}

if (cmd === `${prefix}Plex`){
  return message.channel.send("Plex= 4,000₽");
}

if (cmd === `${prefix}Pliers`){
  return message.channel.send("Pliers= 1,600₽");
}

if (cmd === `${prefix}PliersElite`){
  return message.channel.send("PliersElite= 9,000₽");
}

if (cmd === `${prefix}PSU`){
  return message.channel.send("PSU= 1,700₽");
}

if (cmd === `${prefix}Powerbank`){
  return message.channel.send("Powerbank= 12,500₽");
}

if (cmd === `${prefix}Cord`){
  return message.channel.send("Cord= 1,250₽");
}

if (cmd === `${prefix}Circuit`){
  return message.channel.send("Circuit= 5,000₽");
}

if (cmd === `${prefix}Paper`){
  return message.channel.send("Paper= 2,000₽");
}

if (cmd === `${prefix}RAM`){
  return message.channel.send("RAM= 4,000₽");
}

if (cmd === `${prefix}RecBatt`){
  return message.channel.send("RecBatt= 5,000₽");
}

if (cmd === `${prefix}Roler`){
  return message.channel.send("Roler= 92,000₽");
}

if (cmd === `${prefix}NaCl`){
  return message.channel.send("NaCl= 3,150₽");
}

if (cmd === `${prefix}Screwnut`){
  return message.channel.send("Screw nut= 300₽");
}

if (cmd === `${prefix}Screwdriv`){
  return message.channel.send("Screwdriv= 1,450₽");
}

if (cmd === `${prefix}Flash`){
  return message.channel.send("Flash= 10,000₽");
}

if (cmd === `${prefix}Shus`){
  return message.channel.send("Shus= 1,834₽");
}

if (cmd === `${prefix}Sodium`){
  return message.channel.send("Sodium= 1,200₽");
}

if (cmd === `${prefix}Plug`){
  return message.channel.send("Plug= 3,000₽");
}

if (cmd === `${prefix}Strike`){
  return message.channel.send("Strike= 350₽");
}

if (cmd === `${prefix}T-Plug`){
  return message.channel.send("T-Plug= 1,000₽");
}

if (cmd === `${prefix}Toothpaste`){
  return message.channel.send("Toothpaste= 250₽");
}

if (cmd === `${prefix}UVLamp`){
  return message.channel.send("UVlamp= 4,230₽");
}

if (cmd === `${prefix}USB-A`){
  return message.channel.send("USB-A= 1,600₽");
}

if (cmd === `${prefix}WD-40400ml`){
  return message.channel.send("WD-40 400ml= 8,775₽");
}

if (cmd === `${prefix}WD-40100ml`){
  return message.channel.send("WD-40 100ml= 6,880₽");
}

if (cmd === `${prefix}Wilston`){
  return message.channel.send("Wilston= 5,000₽");
}

if (cmd === `${prefix}Clock`){
  return message.channel.send("Clock= 14,725₽");
}

if (cmd === `${prefix}Wrench`){
  return message.channel.send("Wrench= 1,450₽");
}

if (cmd === `${prefix}Xneo`){
  return message.channel.send("Xneo= 1,260₽");
}

if (cmd === `${prefix}Zibbo`){
  return message.channel.send("Zibbo= 1,450₽");
}



});

bot.login(process.env.token);
