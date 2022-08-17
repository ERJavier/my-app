/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const urlBase = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');
//web api
//conectarnos al server
window
    .fetch(`${urlBase}/api/avo`)
//procesar la respuesta y conventirla en JSON
    .then((respuesta) => respuesta.json())
// JSON -> Data -> renderizar info browser
    .then((responseJson) => {
        const todoLosItems = [];

        responseJson.data.forEach((item) => {
            //crear imagen
            const imagen = document.createElement("img");
            imagen.src = `${urlBase}${item.image}`;
            //crear titulo
            const title = document.createElement("h2");
            title.textContent = item.name;
            //crear precio
            const price = document.createElement("div");
            price.textContent = item.price;

            const container = document.createElement("div");
            container.append(imagen, title, price);
            todoLosItems.push(container);
        });
        appNode.append(...todoLosItems);
    })
