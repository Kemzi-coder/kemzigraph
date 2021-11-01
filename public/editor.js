const inputsParent = document.getElementById('inputs')
const inputs = inputsParent.querySelectorAll('textarea')

function autoGrow(input) {
	input.style.height = '5px'
	input.style.height = input.scrollHeight + 'px'
}

inputs.forEach(input => {
	autoGrow(input)
})

inputsParent.addEventListener('keydown', e => {
	const input = e.target

	if (input.name === 'content') {
		if (e.key === 'Enter' && e.shiftKey) {
			input.value += '\n'
			autoGrow(e.target)
		} else if (e.key === 'Enter') {
			const createdInput = document.createElement('textarea')

			createdInput.className = 'app__input app__input--content'
			createdInput.name = 'content'
			createdInput.type = 'text'

			inputsParent.appendChild(createdInput)
			autoGrow(createdInput)
			createdInput.focus()
		} else if (e.key === 'Backspace' && input.value === '' && input.dataset.type !== 'main-input') {
			inputsParent.removeChild(inputsParent.lastElementChild)
			inputsParent.lastElementChild.focus()
		}
	}
})
