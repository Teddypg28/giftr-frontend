const fs = require('fs')
const Handlebars = require('handlebars')

fs.readFile('/Users/teddypapageorge/giftr/test.html', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
    } else {
        const template = Handlebars.compile(data)
        const info = {"name": "Teddy"}
        const result = template(info)

        console.log(result)
    }
})