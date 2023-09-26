

export const validateAlbum = (albumData) => {

    if (
        albumData.name &&
        albumData.imgUrl &&
        albumData.price &&
        albumData.releaseDate &&
        albumData.artist &&
        albumData.genre &&
        albumData.description
    ) {
        return true;
    } else {
        return false;
    }

}