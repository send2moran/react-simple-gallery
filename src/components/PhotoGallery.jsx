import React, { useState, useEffect } from "react";
import {If, Then, Else} from "react-if"
import { connect } from 'react-redux'
import {deletePhoto, selectPhoto} from '../actions/global'

const mapStateToProps = (state, ownProps) => ({
    selectectedAlbumId: state.app.selectectedAlbumId,
    selectedAlbum: state.photos.selectedAlbum
})
  
export default connect(mapStateToProps)(({ selectectedAlbumId, selectedAlbum,  dispatch }) => {

    const handleModalPop = (img) => {
        dispatch(selectPhoto(img));
    }
    
    const handleDelete = photoId => {
        dispatch(deletePhoto(photoId));
    }

    return (
        <>
            Items in album photo area: {selectedAlbum.length}
            <div class="c-grid p-8">
                {(selectedAlbum || []).map(p => {
                return (
                    <div style={{width: '150px', height: '150px'}} key={p.id} className="relative photo bg-white rounded h-full text-grey-darkest no-underline shadow-md">
                        <button onClick={e => {e.stopPropagation(); handleDelete(p.id)}} className="photo-close-btn absolute z-10 top-0 right-0 h-8 bg-gray-700 bg-white text-white font-semibold px-3 rounded-full rounded shadow">X</button>
                        <img onClick={e => {e.stopPropagation(); handleModalPop(p.url)}} className="w-full block rounded-b" src={p.thumbnailUrl} alt="a fox"/>
                        <h1 class="photo-title truncate max-w-xs p-2 mx-auto hidden absolute inset-x-0 bottom-0 h-8 bg-gray-200" title={p.title}>{p.title}</h1>
                    </div>
                );
                })}
            </div>
        </>
    )
});




