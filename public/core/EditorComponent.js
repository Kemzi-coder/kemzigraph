export class EditorComponent {
	create() {
		const $el = document.createElement('textarea')
		$el.id = this.id
		$el.className = this.className
		$el.placeholder = this.placeholder
		$el.name = this.name
		$el.dataset.type = 'main-input'

		return $el
	}
}
