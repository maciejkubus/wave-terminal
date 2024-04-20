const readline = require('readline')

let map = []
const mapSize = {
	width: 64,
	height: 12,
}
let i = 0
let j = 0

const generateMap = () => {
	map = []
	for(let x = 0; x <= mapSize.width; x++) {
		const t = x + i;
		const top = parseInt(Math.sin(t/4) * 4) + 4;
		const t2 = x + j;
		const top2 = parseInt(Math.cos(t2/4) * 4) + 8;
		
		for(let y = top; y >= 0; y--) {
			map.push({ x: x, y: y, tile: top2 - top >= y ? '🟪' : '🟦' })
		}
	}
}

const draw = () => {
	for(let y = 0; y < mapSize.height; y++) {
		let line = "";
		for(let x = 0; x < mapSize.width; x++) {
			const tile = map.find(tile => tile.x == x && tile.y == y);
			if(tile)
				line += tile.tile
			else 
				line += y < Math.sin(x + Math.floor(x*x/y)) + 5 ? '⬜' : '🟩'
		}
		console.log(line)
	}
}

const update = () => {
	console.clear()
	draw()
	generateMap()
}

const main = () => {

	setInterval(update, 50)
	setInterval(() => i++, 200)
	setInterval(() => j++, 75)
}

main();