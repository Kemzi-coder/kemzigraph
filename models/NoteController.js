import NoteService from './NoteService.js'

class NoteController {
	async create(req, res) {
		try {
			const note = await NoteService.create(req.body)

			res.redirect(note.url)
		} catch (e) {
			res.status(500).json({message: e.message})
		}
	}

	async update(req, res) {
		try {
			const id = req.params.id
			await NoteService.update({...req.body, id})

			res.redirect('back')
		} catch (e) {
			res.status(500).json({message: e.message})
		}
	}
}

export default new NoteController()
