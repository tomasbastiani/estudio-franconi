import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';


function Footer() {
  return (
    <footer variant="dark" style={{ backgroundColor: 'white', color: 'grey' }}>
      <Container>
        <br />
        <Row>
          <Col><img src="https://i.postimg.cc/Y03SM7cn/logo2023.png" alt=""  style={{ width: '30%', height: '100%' }}/></Col>
          </Row>
          <Row>
          <Col lg={4}>
            <ul id='footer'>
              <h5>Información de contacto</h5>
              <li><img src="https://i.postimg.cc/QB6RScW9/whatsapp.png" alt="" />  11 3031 7308 / 2346 69 55 14</li>
              <li><img src="https://i.postimg.cc/87GQCpS5/email.png" alt="" />  franconi@estudiofranconi.com.ar	</li>
              <li><img src="https://i.postimg.cc/94X6GLzH/instagram.png" alt="" />  @estudiofranconi</li>
              <li><img src="https://i.postimg.cc/87b8J2pb/facebook.png" alt="" />  Estudio Franconi & Asoc</li>
            </ul>
          </Col>
            <p>&copy; {new Date().getFullYear()} Estudio Franconi & Asociados</p>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
