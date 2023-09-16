import page from "../node_modules/page/page.mjs";

const user = JSON.parse(sessionStorage.getItem('user'));

export async function deleteElement(ctx) {
    try {
        const id = ctx.params.id;


        const urlDelete = `http://localhost:3030/data/catalog/${id}`;
        const response = await fetch(urlDelete, {
            method: "DELETE",
            headers: { "X-Authorization": user.accessToken }
        });

        if (response.ok) {
            console.log(`successfully delete ${id}`);

        } else {

            console.error(`status code: ${response.status}`);

        }
    } catch (error) {
        console.error(error);
    }

    page.redirect("/");
}