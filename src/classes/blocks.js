import {col, css, row} from "../utils";

export class Block {
  constructor(type, value, options) {
    this.type = type
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error(`Метод toHTML должен быть реализован`)
  }
}

export class TitleBlock extends Block{
  constructor(value, options) {
    super('title', value, options);
  }
  toHTML() {
    const {tag = 'h1', styles} = this.options
    const html = `<${tag}>${this.value}</$tag>`
    return row(col(html), css(styles))
  }
}

export class TextBlock extends Block{
  constructor(value, options) {
    super('text', value, options);
  }
  toHTML() {
    const {styles} = this.options
    const html = `<p>${this.value}</p>`
    return row(col(html), css(styles))
  }
}

export class ColumnsBlock extends Block{
  constructor(value, options) {
    super('columns', value, options);
  }
  toHTML() {
    const {styles} = this.options
    const html = this.value.map(col).join('')
    return row(html, css(styles))
  }
}

export class ImageBlock extends Block{
  constructor(value, options) {
    super('image', value, options);
  }
  toHTML() {
    const {styles, imageStyles: iS, alt = ''} = this.options
    const html = `<img src="${this.value}" style="${iS}" alt="${alt}" />`
    return row(html, css(styles))
  }
}
