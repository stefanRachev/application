import { html, render } from "../node_modules/lit-html/lit-html.js";
//import page from "../node_modules/page/page.mjs";

const templateCreate = () => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control valid" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
`;

export function createFurniture() {

    render(templateCreate(), document.querySelector("body div.container"))

    const formEl = document.querySelector("form");
    document.querySelector(".btn-primary").addEventListener("click", (e) => {
        e.preventDefault();
        formBuildElement(e, formEl);
    })


}

export async function formBuildElement(e, formEl, id) {
    e.preventDefault();

    const form = new FormData(formEl);

    const make = form.get("make");
    const model = form.get("model");
    const year = parseInt(form.get("year"));
    const description = form.get("description");
    const price = parseFloat(form.get("price"));
    const img = form.get("img");
    const material = form.get("material");

    if (
        make.length >= 4 &&
        model.length >= 4 &&
        year >= 1950 && year <= 2050 &&
        description.length > 10 &&
        price > 0 &&
        img !== ""
    ) {
        const furniture = {
            description,
            img,
            make,
            material,
            model,
            price,
            year
        }
        const user = JSON.parse(sessionStorage.getItem('user'));

        let url = "";
        let methodString = "";

        if (id === undefined) {
            url = "http://localhost:3030/data/catalog";
            methodString = "POST";
        } else {
            url = `http://localhost:3030/data/catalog/${id}`;
            methodString = "PUT";
        }

        try {
            const response = await fetch(url, {
                method: methodString,
                headers: {
                    "Content-Type": "application/json",
                    'X-Authorization': user.accessToken,
                },
                body: JSON.stringify(furniture),
            });

            if (!response.ok) {
                const error = await response.json();
                console.error(error.message);
            } else {
                const data = await response.json();

            }
        } catch (error) {
            console.error("error", error);
        }
    } else {
        alert("Моля, попълнете всички полета правилно.");
    }

    formEl.reset();
}