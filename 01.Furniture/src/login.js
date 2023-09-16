import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { updateNav } from "./utils.js";


const templateLogin = () => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
    </div>
    `;

export function loginView() {
    console.log("test login");

    render(templateLogin(), document.querySelector("body div.container"));

    
    
    const formEl = document.querySelector("form");

    formEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const email = form.get("email");
        const password = form.get("password");
        console.log("hui");
        console.log(email, password);


        try {
            const response = await fetch("http://localhost:3030/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            })
            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const user = await response.json();

            sessionStorage.setItem("user", JSON.stringify(user));
        } catch (err) {
            alert(err.message);
        }
        updateNav();
        page.redirect("/");
    })

}












