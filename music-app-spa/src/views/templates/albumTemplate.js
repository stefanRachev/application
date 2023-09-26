import { html } from "../../../node_modules/lit-html/lit-html.js";

export const albumTemplate = (album,user) => html`
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
