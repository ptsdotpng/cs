
/*
 * main
 * right now  everything
 * should move on to be the entry point
 * of the game
 *
 */
const main = async function main() {
	/*
	 * game loop
	 * - init
	 * - get targets - for updates
	 * - start the game loop
	 *   - run every 1s
	 *   - add to the state and update view
	 */

	let state = {
		code: {
			name: "code",
			rate: 1,
			total: 1,
			current: 1
		}
	}

	let codeElem = document.getElementById(`code-techtree`);
	let gen = document.getElementById(`code-techtree-generating`)

	const tick = function tick() {
		state.code.total += 1;
		gen.innerHTML = state.code.total

		setTimeout(tick, 1000);
	}



	tick();

}



main();





