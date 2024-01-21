const Discord = require("discord.js")
const fetch = require ("node-fetch")
const client = new Discord.Client()
const command = require('./command')

client.on("ready", () => {
  console.log('Logged in as ${client.user.tag}!')
  client.user.setActivity('$help', { type: "WATCHING" }).catch(console.error)

  command(client, 'help', message => {
    message.channel.send(`
    These are my supported commands:
    
    **$help** - Displays the help menu 
    **$invite** - Invite link for the bot
    **$yt** - Yt link of the developer
    **$ins/inspire** - Gives you inspiring quotes
    **$i am sad** - Gives you a happy music 
    **$hello** - responds xD
    ***The bot also responds to sad messages***
    ***Developer*** - **Slytherrrr#1693**
    ` )
  })
 })


const sadWords = ["sad","depressed","unhappy", "angry"]

const encouragements = [
  "Cheer up!",
  "Hang in there.",
  "Dont lose hope",
  "You are a great person / bot!",
  "Dont forget you have a goal",
  "One day you will be a great person",
  "Just belive in yourslef and keep moving forward",
  "IF youre angry think is it worth it , If youre sad think why shall you be sad when you can be happy , if youre depressed think why to waste your time , if you are unhappy !cheer upp!!"
]

function getQuote()  {
  return fetch("https://zenquotes.io/api/random")
   .then(res => {
      return res.json()
   })
   .then(data => {
     return data[0]["q"] + "-" + data[0]["a"]
   })
}

client.on("message", msg => {
  if(msg.author.bot) return
  if (msg.content === "$ins") {
    getQuote().then(quote => msg.channel.send(quote))
  }
})

client.on("message", msg => {
  if(msg.author.bot) return
  if (msg.content === "$inspire") {
    getQuote().then(quote => msg.channel.send(quote))
  }
})
client.on("message", msg => {
  if(msg.content === "$invite"){
    msg.reply("https://discord.com/api/oauth2/authorize?client_id=862348917098283058&permissions=8&scope=bot")
  }
})

client.on("message", msg => {
  if(msg.content === "$hello"){
    msg.reply("```hello , how are you doing```")
  }
})

})
client.on("message", msg => {
  if(msg.author.bot) return
  if(msg.content === "$i am sad"){
    msg.reply("dont be sad, please listen to this happy music https://www.youtube.com/watch?v=BnYSSMbZdaY&t=1st")
  }
  client.on("message".msg=>{
    if(msg.content === "i'm losing hope"){
            msg.reply(encouragement)
    }
  })

 if (sadWords.some(word => msg.content.includes(word))) {
   const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)]
   msg.reply(encouragement)
 } 
})
client.login(process.env.TOKEN)
const mySecret = process.env['TOKEN']

