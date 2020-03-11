import fetch from "cross-fetch";

const ALBUMS_API = "https://jsonplaceholder.typicode.com/albums";
const PHOTOS_API = "https://jsonplaceholder.typicode.com/photos";

export async function getAlbums() {
    try {
        const res = await fetch(`${ALBUMS_API}`);
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        const s = await res.json();
        return s;
    } catch (e) {
        return e.message;
    }
}

export async function getPhotos() {
    try {
        const res = await fetch(`${PHOTOS_API}`);
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        return await res.json();
    } catch (e) {
        return e.message;
    }
}
