import { html,render } from "./node_modules/lit-html/lit-html.js";

const root = document.getElementById("root");
const inputField = document.getElementById("towns");

document.getElementById("btnLoadTowns").addEventListener("click", (e) => {
    e.preventDefault();


    const towns = inputField.value.split(", ");

    const template = html`
    <ul>
       ${towns.map(t => html`<li>${t}</li>`)}
    </ul>
    `
    render(template,root);
})



