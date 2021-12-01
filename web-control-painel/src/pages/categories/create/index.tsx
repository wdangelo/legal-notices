import React, { Component, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';
import NavBarHome from '../../../components/navbar';

export default class index extends Component {
  render() {

    const history = useHistory();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');


    async function handleSubmit(event: FormEvent) {
      event.preventDefault()
      const data = { name, description, icon }
      history.push()
    }

      return (
        <>
        <NavBarHome />
        


          <div style={{ width: '96rem', justifyContent: 'center', alignItems: 'center', position: 'relative', marginLeft: '32rem', marginTop: '4rem' }}>
            
              <Card style={{ width: '96rem', justifyContent: 'center' }}>
                <h1>Cadastro dr Categorias</h1>
                <Card.Body>
                  <Form.Control size="lg" type="text" placeholder="Título que irá aparecer no painel" />
                  <br />
                  <Form.Control size="lg" type="text" placeholder="Descrição prévia do documento" />
                  <br />
                  <Form.Select size="lg">
                    <option>Icone 1</option>
                    <option>Icone 2</option>
                    <option>Icone 3</option>
                  </Form.Select>
                  <br />
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                </Card.Body>
              </Card>

          </div>
          </>
      )
  }
}
