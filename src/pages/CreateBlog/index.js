import React from 'react'
import "./style.scss"
import { Button, Inputt, TextArea, Upload, Gap, Anchor } from "../../components/Atom"
import { useNavigate } from 'react-router-dom'
const CreateBlog = () => {
    const history = useNavigate()
    return (
        <div className='Create_Blog'>
            <div className='Create_Header'>
                <h1>CreateBlog</h1>
            </div>
            <Gap height={10} />
            <div className='Create_Upload'>
                <Anchor title=">>>Kembali<<<" onClick={() => { history("/") }} />
                <Inputt Title="Create" width={60 + "%"} placeholder="masukan text " />

                <Gap height={10} />
                <Upload width={300} />
                <TextArea width={100 + "%"} height={150 + "px"} />
            </div>
            <Gap height={10} />
            <Button width={150 + "px"} Btn="Upload" />
            <Gap height={20} />

        </div>
    )
}

export default CreateBlog
