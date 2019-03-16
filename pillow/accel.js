const fs = require('fs')

const text = `text = 1 Tuner + 1 or more non-Tuner monsters
Once per turn: You can send 1 "Synchron" monster from your Deck to the Graveyard, then activate 1 of these effects;
● Increase this card's Level by the Level of the sent monster.
● Reduce this card's Level by the Level of the sent monster.
During your opponent's Main Phase, you can: Immediately after this effect resolves, Synchro Summon 1 Synchro Monster, using Materials including this card you control (this is a Quick Effect). You can only Synchro Summon "Accel Synchron(s)" once per turn.`

const stats = `500 / 2100`

const types = `Machine / Synchro / Tuner / Effect`

const name = `Accel Synchron`

fs.writeFileSync('accel.json', JSON.stringify({
    text,
    stats,
    types,
    name
}))
