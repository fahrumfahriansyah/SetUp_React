import React from 'react'
import '../MainApp/style.scss'
import "./style.scss"
import { Blog } from '../../components/Molekul/index'
import { Button } from "../../components/Atom//index"
// untuk berpindah halaman
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const history = useNavigate()
    return (
        <div className="Main_Home" >
            <div className='Main_Button'>
                {/* lihat history di pangiilan  */}
                <Button Btn="CreateBlog" width={200} onClick={() => { history("/CreateBlog") }} />
            </div>
            <div className='Main_Blog'>
                <Blog />
                <Blog />
                <Blog />
                <Blog />
            </div>
        </div>
    )
}

export default Home
