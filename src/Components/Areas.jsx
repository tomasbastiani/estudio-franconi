import React, { useState } from "react"
import { Button, Card, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const styles = {
  img: {
    width: "30%",
    marginRight: "auto",
    marginLeft: "auto"
  }
}

function Areas() {
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveCardIndex(index === activeCardIndex ? null : index);
  }

  const renderCard = (index, imgSrc, imgAlt, title, description) => {
    const isActive = index === activeCardIndex;
    const cardTextClassName = isActive ? "" : "d-none";

    return (
      <Col key={index} xs={12} sm={6} lg={4} xxl={3}>
        <Card style={{ width: '18rem', height:'100%', backgroundColor:'' }}>
          <br />
          <Card.Img style={styles.img} src={imgSrc} alt={imgAlt} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text className={cardTextClassName}>
              {description}
            </Card.Text>
            <Button variant="outline-secondary" size="sm" onClick={() => handleCardClick(index)}>
              {isActive ? "-" : "+"}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  return (
    <>
      <br />
      <Container>
        <h1 style={{color:"white"}}>Áreas de Práctica</h1>
        <hr />
         <br />
        <Row>
          {renderCard(
            0,
            "https://i.postimg.cc/1z1ZsLrm/derecho.png",
            "Derecho Civil",
            "Derecho Civil",
            "El Derecho Civil es una rama del derecho que se encarga de regular las relaciones jurídicas entre personas, ya sea en su vida cotidiana o en el ámbito de los negocios. Aborda temas como el matrimonio, la propiedad, los contratos y las responsabilidades civiles. Su objetivo principal es proteger los derechos y deberes de los individuos y garantizar la convivencia pacífica en la sociedad."
          )}
          {renderCard(
            1,
            "https://i.postimg.cc/1z1ZsLrm/derecho.png",
            "Derecho Penal",
            "Derecho Penal",
            "El Derecho Penal es la rama del derecho encargada de regular los delitos y las penas. Se ocupa de investigar, procesar y sancionar las conductas que son consideradas como criminales y que atentan contra la seguridad y el orden social. Su propósito es proteger a la sociedad y establecer un sistema de justicia que respete los derechos de las personas acusadas y garantice un juicio justo."
          )}
          {renderCard(
            2,
            "https://i.postimg.cc/1z1ZsLrm/derecho.png",
            "Derecho de Seguros",
            "Derecho de Seguros",
            "El Derecho de Seguros es el conjunto de normas que regulan los contratos de seguro y las relaciones entre aseguradoras y asegurados. Tiene como objetivo proteger los intereses de las partes involucradas en un contrato de seguro, estableciendo las obligaciones y derechos de cada una de ellas. Se encarga de regular aspectos como la contratación, las coberturas, las indemnizaciones y los procedimientos de reclamación en caso de siniestro."
          )}
        </Row>
      </Container>

      <br />

      <Container>
        <Row>
          {renderCard(
            3,
            "https://i.postimg.cc/1z1ZsLrm/derecho.png",
            "Accidentes de Tránsito",
            "Accidentes de Tránsito",
            "Los accidentes de tránsito son sucesos inesperados que ocurren en la vía pública y que involucran a vehículos y/o peatones. Desde el punto de vista jurídico, se refieren a situaciones en las que se producen daños a personas o bienes como consecuencia de la circulación de vehículos. El tratamiento legal de estos casos varía según la legislación de cada país, pero en general se busca determinar la responsabilidad de los involucrados y garantizar una compensación justa para las víctimas."
          )}
          {renderCard(
            4,
            "https://i.postimg.cc/1z1ZsLrm/derecho.png",
            "Incumplimientos Contractuales en Planes de Ahorro",
            "Incumplimientos Contractuales en Planes de Ahorro",
            "Los incumplimientos contractuales en los planes de ahorro se refieren a situaciones en las que una de las partes involucradas en un contrato de ahorro no cumple con las obligaciones establecidas en dicho contrato. Esto puede incluir el no pago de las cuotas acordadas, el incumplimiento de plazos o cualquier otra violación de los términos pactados. En estos casos, la parte afectada puede recurrir a acciones legales para reclamar el cumplimiento del contrato o buscar una compensación por los perjuicios sufridos."
            )}
            {renderCard(
            5,
            "https://i.postimg.cc/1z1ZsLrm/derecho.png",
            "Defensa del Consumidor",
            "Defensa del Consumidor",
            "La defensa del consumidor es una disciplina legal que se ocupa de proteger los derechos de los consumidores en las relaciones de consumo. Busca equilibrar la relación entre consumidores y proveedores, garantizando la transparencia, la calidad y la seguridad en la adquisición de bienes y servicios. Se encarga de regular aspectos como la publicidad engañosa, las prácticas abusivas, los contratos de adhesión y los mecanismos de resolución de conflictos, con el fin de asegurar una protección efectiva para los consumidores."
            )}
        </Row>
      </Container>
      <br />
      </>
  )
}

export default Areas
