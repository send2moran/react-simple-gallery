import React from "react";
import {If} from "react-if"
import { connect } from 'react-redux'
import {selectPhoto} from '../actions/global'

const mapStateToProps = (state, ownProps) => ({
    selectedPhoto: state.app.selectedPhoto
  })
  
  
export default connect(mapStateToProps)(({ selectedPhoto, dispatch }) => {
    const handleModalPop = (img) => {
        dispatch(selectPhoto(img));
    }

  return (
      <If condition={selectedPhoto !== null}>
        <div className="fixed  h-screen top-0 w-full bg-orange-100 border-b-2 border-gray-300 z-20">
          <div className="relative">
            <div className="flex h-screen photo">
              <div style={{width: '600px', height: '600px'}} className="relative cursor-pointer rounded  shadow-lg bg-white m-auto">
              <button onClick={()=> handleModalPop(null)} className="photo-close-btn absolute z-10 top-0 right-0 h-8 bg-gray-700 bg-white text-white font-semibold px-3 rounded-full rounded shadow">X</button>
                <div className="w-full">
                  <img onClick={()=> handleModalPop(null)} style={{width: '600px', height: '600px'}} className="w-full" src={selectedPhoto} alt="Sunset in the mountains"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </If>
  )
});
