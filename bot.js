const Discord = require("discord.js");
const client = new Discord.Client();
//////// Playing & Streaming 
client.on("ready", () =>{
  console.log(` Online bot ${client.user.tag}!`);
  client.user.setPresence({
    status: "idle",
    game: {
       name: "Under Development|By ZeroHost",
       type: "WATCHING",
    }
  });
});


////////////////////////////////////VOICE CHANNEL

const channelid = "IDVOICE"    //id channele vc
client.on("ready", () => {
    const channel = client.channels.cache.get(channelid);
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("Successfully connected.");
    }).catch(e => {
        console.error(e);
    });
}); 

///////////////////////
client.login("ODAyOTI3NTMzMDcwMzUyNDI1.YA2WiQ.jtjkTq7C_GiJJJwy8YR9O2d6-88");
