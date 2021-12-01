import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'

import "./style.css"

import api from '../../services/api';


interface Categorie {
    name: string;
    description: string;
    icon: string;
}



const ListPDF = {
    id: 1,
    name: "cartaz.pdf",
    id_category: 1
    
}


export default function Category(){
    const history = useHistory();
    const [categories, setCategories] = useState<Categorie[]>([])

    useEffect(() => {
        api.get('categories').then( res => {
            setCategories(res.data)
        })
      }, [])


    function handlePDF(){
        sessionStorage.clear()
        history.push(`/category/${ListPDF.name}`)
    }

    function handleNotice(){
        sessionStorage.clear()
        history.push(`/notice`)
    }


    return(
        <div className="category-body">
            
            <table>
            <tr>
                {categories.map(categorie => {
                    return(
                        <td>
                        <Link to={`/category/${categorie}`} >
                            <div className="category">
                                
                                <button>
                                    <img src={`http://localhost:3330/icons/${categorie.icon}`} alt="Pasta de aviso legais" />
                                    <h3>{categorie.name}</h3>
                                </button>
                                
                                
                            </div>
                        </Link>

                        </td>
    

                    )
                })}
                </tr>



            </table>

        </div>

    )
}