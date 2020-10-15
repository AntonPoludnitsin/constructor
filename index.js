const model = [
  {type: "title", value: "Hello, world! From js"},
  {type: "text", value: "here we go form some text"},
  {
    type: "columns", value: [
      '1111111',
      '2222222',
      '3333333',
    ]
  },
  {type: 'image', value: './assets/image.png'}

]

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

function title(block) {
  return `
      <div class="row">
        <div class="col-sm">
          <h1>${block.value}</h1>
        </div>
      </div>`
}

function text(block) {
  return `
      <div class="row">
        <div class="col-sm">
          <p>${block.value}</p>
        </div>
      </div>
      `
}

function columns(block) {
  const html = block.value.map(col => `<div class="col-sm"><p>${col}</p></div>`)

  return `
    <div class="row">
      ${html.join('')}
     </div>       
    `
}

function image(block) {
  return `
    <div class="row">
      <img src="${block.value}" />
    </div>
  `
}
