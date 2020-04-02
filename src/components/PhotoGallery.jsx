import React from "react";
import { connect } from "react-redux";
import PhotoItem from "./PhotoItem";

const mapStateToProps = state => ({
    selectedAlbum: state.photos.selectedAlbum
});

export default connect(mapStateToProps)(({ selectedAlbum }) => {
    return (
        <>
            Items in album photo area: {selectedAlbum.length}
            <div className="c-grid p-8">
                {(selectedAlbum || []).map(p => {
                    return (
                        <PhotoItem key={p.id} photo={p}/>
                    );
                })}
            </div>
        </>
    );
});




