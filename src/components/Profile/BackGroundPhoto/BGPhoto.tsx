import React from 'react'
import profileEl from './BGPhoto.module.css'
const BackGroundPhoto = () => {
  return (
    <div>
      <img
        className={profileEl.photoOfProfile}
        src="https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg"
        alt={'Empty'}
      />
    </div>
  )
}
export default BackGroundPhoto
