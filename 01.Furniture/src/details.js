import { html, render } from "../node_modules/lit-html/lit-html.js";




const user = JSON.parse(sessionStorage.getItem('user'));

export async function getIdFurniture(ctx) {
    const id = ctx.params.id;
    const urlDetails = `http://localhost:3030/data/catalog/${id}`;

    const response = await fetch(urlDetails);
    const detailsData = await response.json();
    return detailsData;
}



export async function detailsResult(ctx) {

    const isOwner = (user, detailsData) => {
        return user && user._id === detailsData._ownerId;
    };

    const id = ctx.params.id;

    const detailsData = await getIdFurniture(ctx)

    const templateDetails = (details) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="${details.img.startsWith('./') ? '/' + details.img : details.img}"/>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${details.make}</span></p>
            <p>Model: <span>${details.model}</span></p>
            <p>Year: <span>${details.year}</span></p>
            <p>Description: <span>${details.description}</span></p>
            <p>Price: <span>${details.price}$</span></p>
            <p>Material: <span>${details.material}</span></p>
            <div style="${isOwner(user, detailsData) ? 'display: block;' : 'display: none;'}">
                <a href="/update/${details._id}" class="btn btn-info">Edit</a>
                <a href="/delete/${details._id}" class="btn btn-red">Delete</a>
            </div>
        </div>
    </div>
    
`;

    render(templateDetails(detailsData), document.querySelector("body div.container"));

}








