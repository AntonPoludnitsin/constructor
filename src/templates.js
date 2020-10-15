import {row, col, css} from "./utils";

function title(block) {
  const {tag = 'h1', styles} = block.options
  const html = `<${tag}>${block.value}</$tag>`
  return row(col(html), css(styles))
}

function text(block) {
  const {styles} = block.options
  console.log(styles)
  const html = `<p>${block.value}</p>`
  return row(col(html), css(styles))
}

function columns(block) {
  const {styles} = block.options
  const html = block.value.map(col).join('')
  return row(html, css(styles))

}

function image(block) {
  const {styles, imageStyles: iS, alt = ''} = block.options
  const html = `<img src="${block.value}" style="${iS}" alt="${alt}" />`
  return row(html, css(styles))
}

export const templates = {
  title,
  text,
  columns,
  image
}
