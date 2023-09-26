import { html } from "../../node_modules/lit-html/lit-html.js";
import * as albumService from "../services/albumService.js";


const albumTemplate = (album,user) => html`
  <div class="card-box">
        <img src="${album.imgUrl}">
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            <div class="btn-group" style="display: ${user ? 'block' : 'none'}">
                <a href="/albums/${album._id}" id="details">Details</a>
            </div>
        </div>
    </div>
`;

const catalogTemplate = (albums, user) => html`
<section id="catalogPage">
    <h1>All Albums</h1>

${albums.map(x => albumTemplate(x,user))}

${albums.length == 0
        ? html`<p>No Albums in Catalog!</p>`
        : ''
    }
</section>
`;

export const catalogView = async (ctx) => {

    const albums = await albumService.getAll();
    ctx.render(catalogTemplate(albums, ctx.user));
}