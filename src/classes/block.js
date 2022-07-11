import {row, col, toCSS} from '../utils'

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Error('Метод toHTML должен быть реализован в каждом классе!')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {tag = 'h1', styles} = this.options
        // const tag = block.options.tag ?? 'h1'
        // const styles = block.options.styles
        return row(col(`<${tag} class="header" style="${toCSS(styles)}">${this.value}</${tag}>`))
    }
}

export class ParagraphBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const styles = this.options.styles
        return row(col(`<p class="paragraph" style="${toCSS(styles)}">${this.value}</p>`))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const styles = this.options.styles
        const html = this.value.map(item => col(item, styles))   // Аналогично .map(item => col(item))
        // Получили map и соединяем его элементы с помощью join(), избавляясь от запятых при автоматическом преобразовании в строку
        return row(`<p>${html.join('')}</p>`)
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {styles, alt, divStyles} = this.options
        return row(`<img alt="${alt}" src="${this.value}" style="${toCSS(styles)}"/>`, divStyles)
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const{styles, divStyles} = this.options
        return row(`<p style="${toCSS(styles)}">${this.value}</p>`, divStyles)
    }
}