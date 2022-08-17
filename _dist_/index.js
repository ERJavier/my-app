/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";


//web api
//conectarnos al server
window
    const todoLosItems = []
    .fetch(url)
//procesar la respuesta y conventirla en JSON
    .then((respuesta) => respuesta.json())
// JSON -> Data -> renderizar info browser
    .then((respuestaJson) => {
        respuestaJson.data.forEach(item => {
            //crear imagen
            const imagen = document.createElement('img')
            //crear titulo
            const title = document.createElement('h2')
            //crear precio
            const price = document.createElement('div')

            const container = document.createElement('div')
            container.append(imagen, title, price);
            todoLosItems.push(container);
        });
        document.body.append(...todoLosItems);
    })
