const editBtn = document.getElementById('edit')

publishBtn.addEventListener('click', e => {
	publishBtn.style.display = 'none'
	editBtn.style.display = 'block'
	inputs.forEach(input => {
		input.readOnly = true
	})
})

editBtn.addEventListener('click', e => {
	e.preventDefault()
	editBtn.style.display = 'none'
	publishBtn.style.display = 'block'
	inputs.forEach(input => {
		input.readOnly = false
	})
	title.focus()
})
