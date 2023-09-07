
import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";
import { styleMap } from "./node_modules/lit-html/directives/style-Map.js";


const sectionEl = document.getElementById("allCats");

const template = (cats) => html`
<ul>
    ${cats.map(cat => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
           <button class="showBtn">${cat.info ? "Hide" : "Show"} status code</button>
           <div class="status" style="${styleMap(cat.info ? { display: "block" } : { display: "none" })}" id="${cat.id}">
               <h4>Status Code: ${cat.statusCode}</h4>
               <p>${cat.statusMessage}</p>
       </div>
       </div>
    </li>
    `)}
</ul>
`;

cats.forEach(cat => cat.info = false);

function update() {
    const result = template(cats)
    render(result, sectionEl)
}
update();

sectionEl.addEventListener("click", (e) => {
    e.preventDefault();
    const elementId = e.target.parentNode.querySelector(".status").id;
    const cat = cats.find(c => c.id == elementId);

    cat.info = !cat.info;
    update();

});












// <li>
//
// </li>