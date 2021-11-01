import {Router} from 'express'
import AppController from './models/AppController.js'
import NoteController from './models/NoteController.js'


const router = new Router()

router.get('/', AppController.renderIndex)

router.get('/:url', AppController.renderNote)

router.post('/notes', NoteController.create)

router.post('/notes/:id', NoteController.update)

export default router
