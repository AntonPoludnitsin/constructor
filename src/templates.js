import { row, col } from "./utils";

function title(block) {
  const html = `<h1>${block.value}</h1>`
  return row(col(html))
}

function text(block) {
  const html = `<p>${block.value}</p>`
  return row(col(html))
}

function columns(block) {
  const html = block.value.map(col).join('')
  return row(html)

}

function image(block) {
  const html = `<img src="${block.value}" />`
  return row(html)
}

export const templates = {
  title,
  text,
  columns,
  image
}
