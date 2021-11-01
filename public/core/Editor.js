export class Editor {
	constructor(selector, components) {
		this.$el = document.querySelector(selector)
		this.components = components
	}

	getRoot() {
		const $root = document.createElement('div')
		$root.classList.add('editor')
		$root.id = 'editor'

		this.components = this.components.map(Component => {
			const component = new Component()
			$root.append(component.create())

			return component
		})

		return $root
	}
}