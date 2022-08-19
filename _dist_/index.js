const urlBase = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

//intl
//format dates and currency

const formartPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: "USD",
    }).format(price);
    return newPrice;
}

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
            imagen.className = "w-full h-full object-center object-cover lg:w-full lg:h-full";

            //crear titulo
            const title = document.createElement("h2");
            title.textContent = item.name;
            title.className = "mt-1 text-sm text-gray-500"

            //crear precio
            const price = document.createElement("div");
            price.textContent = formartPrice(item.price);
            price.className = "text-sm font-medium text-gray-900s"


            const container = document.createElement("div");
            container.append(imagen, title, price);
            todoLosItems.push(container);
        });
        appNode.append(...todoLosItems);
    })
