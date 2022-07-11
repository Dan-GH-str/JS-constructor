import { sideBlock } from "../utils"


export class SideBar {
    constructor(selector) {
        this.$el = document.querySelector(selector)

        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add)
    }

    get template() {
        return [sideBlock('Заголовок'), sideBlock('Подзаголовок')].join('')
    }

    add(event) {
        event.preventDefault()

        event.target    // Наша форма
        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value
       


        // Отлавливание ошибок на незаполненность поля с текстом
        const $span = event.target.children[2]
        if(!value) {
            $span.setAttribute('style', 'display: show')
            return   // Чтобы дальше не работать с пустым value выходим из функции
        } else {
            $span.setAttribute('style', 'display: none')
        }

        

        const $el = type === 'Заголовок' ? document.querySelector('.header') : document.querySelector('.paragraph')
        const fullStyles = type === 'Заголовок' ? 'text-align: center;' + styles : 'font-family: Bitter, serif;font-size: 35px;' + styles

        $el.textContent = value
        if(styles)  
            $el.setAttribute('style', fullStyles)
        
        // if(type === 'Заголовок') {
        //     const $el = document.querySelector('.header')
        //     $el.textContent = value
        //     if(styles)
        //         $el.setAttribute('style', 'text-align: center;' + styles)
        // }  else {
        //     const $el = document.querySelector('.paragraph')
        //     $el.textContent = value
        //     if(styles)
        //         $el.setAttribute('style', 'font-family: Bitter, serif;' + styles)
        // }
    }
}