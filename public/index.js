import {Editor} from './core/Editor'
import {Title} from './components/Title'
import {Author} from './components/Author'
import {Content} from './components/Content'


const editor = new Editor('#app', {
	components: [Title, Author, Content]
})

editor.render()
