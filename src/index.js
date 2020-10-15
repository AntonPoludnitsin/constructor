import { model } from './model.js'
import { columns, image, text, title } from "./templates";
import './styles/main.css'

const $site = document.querySelector('#site')

model.forEach(block => {
  let html = ''
  if (block.type === 'title') {
    html = title(block)
    $site.insertAdjacentHTML('beforeend', html)
  } else if (block.type === 'text') {
    html = text(block)
    $site.insertAdjacentHTML('beforeend', html)
  } else if (block.type === 'columns') {
    html = columns(block)
    $site.insertAdjacentHTML('beforeend', html)
  } else if (block.type === 'image') {
    html = image(block)
    $site.insertAdjacentHTML('beforeend', html)
  }
})


