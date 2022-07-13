export function row(content, styles = {}) {
    return `<div class="row" style="${toCSS(styles)}">${content}</div>`
}

export function col(content, styles = {}) {
    return `<div class="col-sm" style="${toCSS(styles)}">${content}</div>`
}

export function toCSS(styles = {}) {
    return Object
        .keys(styles)
        .map(key => {
            return `${key}: ${styles[key]}`
        })
        .join(';')
}

export function sideBlock(type) {
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="form-group  myMargins">
                <input class="form-control form-control-sm" name="value" placeholder="Ваш текст">  
            </div>
            <span class="text-danger" style="display: none; font-size: 0.8rem;" name="span">*Это поле должно быть обязательно заполнено!</span>
            <div class="form-group  myMargins">
                <input class="form-control form-control-sm" name="styles" placeholder="Ваши стили">
            </div>
            <button type="submit" class="btn btn-primary btn-sm  myMargins">Добавить</button>
        </form>
        <hr />
    `
}