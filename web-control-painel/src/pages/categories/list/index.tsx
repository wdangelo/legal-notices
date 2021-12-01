import React, { Component, useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import NavBarHome from '../../../components/navbar'

import api from '../../../services/api';

interface Categories {
    name: string;
    description: string;
    icon: string;
}

export default class index extends Component {


    render() {

        return (
            <div>
                <NavBarHome />
                <h1>Lista de Categorias</h1>

                <ListGroup>
                    
                <ListGroup.Item>Categorias</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}