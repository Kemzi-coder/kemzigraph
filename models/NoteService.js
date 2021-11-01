import Note from './Note.js'

class NoteService {
	async create(note) {
		const date = new Date()
		const month = date.getMonth() + 1
		const day = date.getDate()

		const foundCandidate = await Note.find({title: note.title})
			.sort({index: -1})
			.limit(1)

		const candidate = foundCandidate[0]

		const createdNote = await new Note({...note, date: Date.now()})

		if (candidate) {
			const url = `${note.title}-${month}-${day}-${candidate.index + 1}`
			createdNote.url = url.replace(/\s+/g, '-')
			createdNote.index = candidate.index + 1
		} else {
			const url = `${note.title}-${month}-${day}`
			createdNote.url = url.replace(/\s+/g, '-')
		}

		await createdNote.save()

		return createdNote
	}

	async update(note) {
		if (!note.id) {
			throw new Error('Id is undefined')
		}

		const updatedNote = await Note.findByIdAndUpdate(note.id, note)
		return updatedNote
	}

	async findByUrl(url) {
		const note = await Note.findOne({url})
		return note
	}
}

export default new NoteService()
