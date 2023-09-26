import * as request from "./requester.js";


///data/albums?sortBy=_createdOn%20desc&distinct=name
const baseUrl = "http://localhost:3030/data/albums";

export const getAll = async () => request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=name`);

export const getOne = async (albumId) => request.get(`${baseUrl}/${albumId}`);

export const create = async (albumData) => request.post(baseUrl, albumData);

export const edit = async (albumId, albumData) => request.put(`${baseUrl}/${albumId}`, albumData);

export const remove = async (albumId) =>request.del(`${baseUrl}/${albumId}`,albumId);

export const search = async (searchText) => {
    //URL: /data/albums?where=name%20LIKE%20%22${query}%22

    const query = encodeURIComponent(`name LIKE "${searchText}"`)
    return request.get(`${baseUrl}?where=${query}`);
}