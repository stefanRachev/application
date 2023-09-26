import { html } from "../../node_modules/lit-html/lit-html.js";
import * as userServices from "../services/userServices.js";

const loginTemplate = (submitHandler) => html`

<section id="loginPage">
    <form @submit=${submitHandler}>
        <fieldset>
            <legend>Login</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <button type="submit" class="login">Login</button>

            <p class="field">
                <span>If you don't have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
    </form>
</section>
`;

export const loginView = (ctx) => {

    const submitHandler = async (e) => {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        try {

            const response = await userServices.login(email, password);
          
            ctx.page.redirect("/");

            if (response !== undefined) {
                if (response.status !== undefined) {
                    alert(response.status);
                }
            }

        } catch (error) {
            alert(error);
        }

    }
    ctx.render(loginTemplate(submitHandler));

}