
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacto = () => {
    return(
        <div className='col-12 col-sm-10 col-md-6 mx-auto mt-5'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo:</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Descripción:</Form.Label>
                <Form.Control type="text" as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit" className='bg-danger border-danger'>Enviar</Button>
            </Form>
      </div>
    )
}
export default Contacto;