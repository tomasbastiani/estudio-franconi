import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//background: "linear-gradient(to right, #dadada 20%, #fff 80%)"
function Contacto(){
    return(
        <div>
            <br />
            <div style={{backgroundColor: '#212121'}}>
            <br />
            <h2 id="contacto" style={{color:"white"}}>Contactanos</h2>
            <br />
            <Form style={{marginRight: 'auto', marginLeft: 'auto', width: '30%', textAlign: 'center', margin:'auto', color: 'white'}}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label htmlFor="">Nombre:</Form.Label>
                    <Form.Control type="text" placeholder="Escriba aquí su nombre"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Escriba aquí su email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Consulta:</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Escriba aquí su consulta"/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Button type="submit" variant="outline-secondary">Enviar</Button>
                </Form.Group>

            </Form>
            <br />
            </div>
        </div>
    )
}

export default Contacto