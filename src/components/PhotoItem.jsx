import React from "react";
import { connect } from "react-redux";
import {deletePhoto, selectPhoto} from "../actions/global";

const mapStateToProps = (_state, ownProps) => ({
    photo: ownProps.photo
});

export default connect(mapStateToProps)(({ photo,  dispatch }) => {

    const handleModalPop = e => {
        e.stopPropagation();
        dispatch(selectPhoto(photo.url));
    };

    const handleDelete = e => {
        e.stopPropagation();
        dispatch(deletePhoto(photo.id));
    };

    return (
        <div style={{width: "150px", height: "150px"}} key={photo.id}
            className="relative photo bg-white rounded h-full
            text-grey-darkest no-underline shadow-md">
            <button onClick={handleDelete}
                className="photo-close-btn absolute z-10 top-0 right-0 h-8 bg-gray-700 bg-white text-white font-semibold px-3 rounded-full rounded shadow">X</button>
            <div role="button" tabIndex="0" onClick={handleModalPop}>
                <img className="w-full block rounded-b" src={photo.thumbnailUrl} alt="a fox"/>
            </div>
            <h1 className="photo-title truncate max-w-xs p-2 mx-auto hidden absolute inset-x-0 bottom-0 h-8 bg-gray-200" title={photo.title}>{photo.title}</h1>
        </div>
    );
});




