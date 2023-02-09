const db = require('../db')
const Rock = require('../models/rock')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const rocks = [
      {name:'Anorthosite', picture:'https://outforia.com/wp-content/uploads/2021/07/Types-of-rocks-anorthosite-0721.webp', rarity: 85, cost: 1500 },
      {name:'Obsidian', picture:'https://outforia.com/wp-content/uploads/2021/07/Types-of-rocks-obsidian-0721.webp', rarity: 5, cost:50 },
      {name:'Dolomite', picture:'https://outforia.com/wp-content/uploads/2021/07/Types-of-rocks-dolomite-0721.webp', rarity:20, cost:100 },
      {name:'Basalt', picture:'https://outforia.com/wp-content/uploads/2021/07/Types-of-rocks-basalt-0721.webp', rarity:0, cost:0 },
      {name:'Granite', picture:'https://outforia.com/wp-content/uploads/2021/07/Types-of-rocks-granite-0721.webp', rarity:5, cost:100 },
      {name:'Gneiss', picture:'https://outforia.com/wp-content/uploads/2021/07/Types-of-rocks-gneiss-0721.webp', rarity:50, cost:550 },
      {name:'Breccia', picture:'https://outforia.com/wp-content/uploads/2021/07/Types-of-rocks-breccia-0721.webp', rarity:40, cost:300 },
      {name:'Lapis Lazuli', picture:'https://outforia.com/wp-content/uploads/2021/07/Types-of-rocks-lapis-lazuli-0721.webp', rarity:60, cost:650 }  
    ]

    await Rock.insertMany(rocks)
    console.log('We found some rocks!');
}
const run = async () => {
    await main()
    db.close()
}

run()