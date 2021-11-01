const app = document.getElementById('app')
const publishBtn = document.getElementById('publish')
const title = document.getElementById('title')
const content = document.getElementById('content')

app.addEventListener('keydown', e => {
	if (e.key === 'Enter') {
		e.preventDefault()
		return false
	}
})

app.addEventListener('submit', (e) => {
	e.preventDefault()

	if (content.value !== '' && title.value !== '') {
		app.submit()

		setTimeout(() => {
			app.reset()
		}, 0)
	}

	if (title.value.trim() === '') {
		title.classList.add('app__input--invalid')
		title.oninput = () => {
			if (title.value === '') {
				title.classList.add('app__input--invalid')
			} else {
				title.classList.remove('app__input--invalid')
			}
		}
	}

	if (content.value.trim() === '') {
		content.classList.add('app__input--invalid')
		content.oninput = () => {
			if (content.value === '') {
				content.classList.add('app__input--invalid')
			} else {
				content.classList.remove('app__input--invalid')
			}
		}
	}
})
