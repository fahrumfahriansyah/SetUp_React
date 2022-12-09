import React from 'react'
import { Computer2 } from '../../../assets'
import "./style.scss"
const Upload = ({ height, width, ...rest }) => {
    return (
        <div className='Upload'>
            <img src={Computer2} alt="ini adalah computer 2" style={{ width, height }}></img>
            <input type="file" {...rest} />
        </div>
    )
}

export default Upload
