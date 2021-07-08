const Discord = require("discord.js")
const fetch = require ("node-fetch")
const client = new Discord.Client()

function getQuote()  {
  return fetch("https://zenquotes.io/api/random")
   .then(res => {
      return res.json()
   })
   .then(data => {
     return data[0]["q"] + "-" + data[0]["a"]
   })
}

client.on("ready", () => {
  console.log('Logged in as ${client.user.tag}!')
})

client.on("message", msg => {
  if(msg.author.bot) return
  if (msg.content === "$inspire") {
    getQuote().then(quote => msg.channel.send(quote))
  }
})
client.on("message", msg => {
  if(msg.author.bot) return
  if(msg.content === "$help") {
    msg.reply("i am and encourager and conversator bot , do $inspire to get quotes , my prefix is $")
  }
})
client.on("message", msg => {
  if(msg.content === "$invite"){
    msg.reply("https://discord.com/api/oauth2/authorize?client_id=862348917098283058&permissions=8&scope=bot")
  }
})
client.on("message", msg => {
  if(msg.content === "$yt"){
    msg.reply("https://www.youtube.com/channel/UCKGhP5D5l5UriOde9tGR8qAt")
  }
})
client.on("message", msg => {
  if(msg.content === "$i am sad"){
    msg.reply("https://www.youtube.com/watch?v=BnYSSMbZdaY&t=1st")
  }
})
client.login(process.env.TOKEN)
const mySecret = process.env['TOKEN']

