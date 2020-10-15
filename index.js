const model = [
  {type: "title", value: "Hello, world! From js"},
  {type: "text", value: "here we go form some text"},
  {type: "columns", value: [
    '1111111',
    '2222222',
    '3333333',
    ]}

]

const $site = document.querySelector('#site')


model.forEach(block => {
  let html = ''
  if (block.type === 'title') {
    html = `
      <div class="row">
        <div class="col-sm">
          <h1>${block.value}</h1>
        </div>
      </div>`
    $site.insertAdjacentHTML('beforeend', html)
  } else if (block.type === 'text') {
    html = `
      <div class="row">
        <div class="col-sm">
          <p>${block.value}</p>
        </div>
      </div>
      `
    $site.insertAdjacentHTML('beforeend', html)
  } else if (block.type === 'columns') {
    html = `
      <div class="row">
        ${block.value.map(col => `<div class="col-sm">
          <p>${col}</p>
        </div>`).join('')}
       </div>       
    `
    $site.insertAdjacentHTML('beforeend', html)

  }

})
