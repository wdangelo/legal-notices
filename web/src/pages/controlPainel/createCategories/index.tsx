/* eslint-disable react-hooks/rules-of-hooks */
import React, { ChangeEvent } from 'react'
import { useHistory } from 'react-router';
import { FormEvent, useState } from 'react'
import NavBarControlPainel from '../../../componets/NavBarControlPainel'
import { Container, Input, Box, InputFile } from "./stykes";

import api from '../../../services/api';


export default function index() {
    const history = useHistory()
    const [name, setName] = useState('')
    const [description, setDescripition] = useState('')
    const [iconImage, setIconImage] = useState<File[]>([])
    const [ iconPreview, setIconPreview ] = useState<String[]>([])


    function handleSelectFiles(event: ChangeEvent<HTMLInputElement>){
        if (!event.target.files){
            return
        }

        const selectedFiles = Array.from(event.target.files)
        setIconImage(selectedFiles)

        const selectedFilePreview = selectedFiles.map((file) => {
           
            return URL.createObjectURL(file)
        })

        setIconPreview(selectedFilePreview)
             
    }
    
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
    
        const data = new FormData();

        data.append('name', name)
        data.append('description', description)
        iconImage.forEach(icon => {
            console.log(icon.name)
            data.append('icon', icon)
        })
        

        api.post('categories', data)
        
        
        history.push('/create-categories')
    }


    

    return (
        <div className="ControlPainelBody">
            <NavBarControlPainel />
            <div>
                
                <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                    <Container>
                        
                        <Box>
                            <h1>Cadastro de Categorias</h1>
                            <label htmlFor="inputName"  >Name</label>
                            <Input type="text" value={name} onChange={event => setName(event.target.value)} />

                            <label htmlFor="InputDecription">Descrição</label>
                            <Input type="text" value={description} onChange={event => setDescripition(event.target.value)} />

                        
                                <br /><br />

                                <InputFile>

                                    
                                    
                                    <label htmlFor="icon" >Icone ...</label>
                                    <input multiple onChange={handleSelectFiles}  type="file" name="icon" id="icon" />
                                    <img src={`${iconPreview}`} alt="" /> 
                                
                                </InputFile>      

                            
                                <br /> <br />
                            <button type="submit">Confirmar</button>
                        
                        </Box>

                    </Container>
                </form>
            </div>
        </div>
    )
}

export {index}
