document.addEventListener('DOMContentLoaded', () => {
	const mapping = {'snake': snakeGame, 'four-in-a-row': fourGame},
		buttons = document.querySelectorAll('.game-button')	

	buttons.forEach(button => {
		button.addEventListener('click', startGame)
	})

	function startGame(ev) {
		mapping[ev.target.id]()
	}
})