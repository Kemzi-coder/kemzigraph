import NoteService from './NoteService.js'

class AppController {
	async renderIndex(req, res) {
		res.render('index', {
			head: 'Kemzigraph',
			isIndex: true
		})
	}

	async renderNote(req, res) {
		const url = decodeURI(req.params.url)

		const note = await NoteService.findByUrl(url)

		res.render('index', {
			head: note.title,
			title: note.title,
			author: note.author,
			content: note.content,
			id: note._id
		})
	}
}

export default new AppController()
