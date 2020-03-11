import React, { useState, useEffect } from "react";
import {If, Then, Else} from "react-if"
import { render } from "react-dom";
import { Provider } from "react-redux";
import { getAlbumsFromApi } from "./actions/album";
import { getPhotosFromApi, photosByAlbum } from "./actions/photo";
import {selectAlbum, deletePhoto, selectPhoto} from './actions/global'
import { configureStore } from "./store";
import Modal from './components/Modal';
import PhotoGallery from './components/PhotoGallery';
import "./styles.css";

const store = configureStore();
function App() {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    store.subscribe(() => {
      setState({ ...store.getState() });
    });
  }, []);

  useEffect(() => {
    store.dispatch(getAlbumsFromApi());
    store.dispatch(getPhotosFromApi());
  }, []);

  useEffect(() => {
    store.dispatch(photosByAlbum([state.app.selectectedAlbumId, state.app.deletedPhotos]));
  }, [state.app.deletedPhotos]);

  const handleClick = albumId => {
    store.dispatch(selectAlbum(albumId));
    store.dispatch(photosByAlbum([albumId, state.app.deletedPhotos]));
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Modal/>

        <h1 className="uppercase text-6xl text-blue-900 font-bold leading-none tracking-wide m-10">Simple Gallery ({state.albums.length})</h1>

        <div className="grid rid-flow-col grid-cols-1 gap-5 ">
          {state.albums.map(m => {
            return (
              <div key={m.id} onClick={() => handleClick(m.id)}
                className="group hover:bg-gray-200 p-4 cursor-pointer bg-white rounded  w-full shadow-lg select-none overflow-hidden mx-auto">
                <p className="font-semibold text-lg mb-1 text-gray-900 group-hover:text-white"
                  >
                  {m.title}
                </p>
                <p className="text-gray-700 group-hover:text-white mb-2">
                  {m.id}
                </p>

                <If condition={state.app.selectectedAlbumId === m.id}>
                  <PhotoGallery/>
                </If>
              </div>
            );
          })}
        </div>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
