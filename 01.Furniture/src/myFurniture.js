import { html, render } from "../node_modules/lit-html/lit-html.js";


const templateMyFurniture = (data) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="${data.img.startsWith('./') ? '/' + data.img : data.img}" />
                            <p>${data.description}</p>
                            <footer>
                                <p>Price: <span>${data.price}$</span></p>
                            </footer>
                            <div>
                                <a href="/details/${data._id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
               </div>
        </div>
`;

export async function myGetFurniture() {

    const user = JSON.parse(sessionStorage.getItem('user'));

    const urlId = `http://localhost:3030/data/catalog?where=_ownerId%3D%22${user._id}%22`;
    const response = await fetch(urlId);
    const data = await response.json();

     data.forEach(e =>{
        render(templateMyFurniture(e), document.querySelector("body div.container"));
     } );
    
}