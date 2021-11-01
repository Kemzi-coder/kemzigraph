import mongoose from 'mongoose'

const Scheme = mongoose.Schema

const noteSchema = new Scheme({
	title: {
		type: String,
		required: true
	},

	url: {
		type: String,
		required: true,
		unique: true
	},

	author: {
		type: String
	},

	content: {
		type: Array,
		required: true
	},

	date: {
		type: Number,
		required: true
	},

	index: {
		type: Number,
		default: 1
	}
}, {versionKey: false})

const Note = mongoose.model('Note', noteSchema)

export default Note
