import { html, render } from "../node_modules/lit-html/lit-html.js";
import { updateNav } from "./utils.js";
import page from "../node_modules/page/page.mjs";

const templateRegister = () => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
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
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
    </div>
`;

export function registerPage(){

render(templateRegister(),document.querySelector("body div.container"));

const formEl = document.querySelector("form");


formEl.addEventListener("submit",async (e) => {
    e.preventDefault();


    const form = new FormData(e.target);

    const email = form.get("email");
    const password = form.get("password");
    const repeat = form.get("rePass");
    console.log("hui");
    

    if(email == "" || password == "" || repeat == ""){
       alert("empty input fields");
       return;
    }else if(password !== repeat){
        alert("incorrect password");
        return
    }

    try {
        const res = await fetch("http://localhost:3030/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
    
        if (!res.ok) {
          throw new Error(res.statusText);
        }
    
        const user = await res.json();
    
        sessionStorage.setItem("user", JSON.stringify(user));
      } catch (err) {
        alert(err.message);
      }

      updateNav();
      page.redirect("/");

})

}