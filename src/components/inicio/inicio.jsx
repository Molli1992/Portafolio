import React from "react";
import "./inicio.css";
import { Card, CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react';


function Inicio() {



    return (

        <div className="body-inicio">

            <Card
                className="card-inicio"
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >

                <Stack className="stack-inicio">

                    <Image
                        className="img-inicio"
                        src="https://startupeable.com/directorio/wp-content/uploads/2021/03/d4face92a7abc37a414e0bc3acf4ff23ec588438.png"
                        alt='Imagen inicio'
                    />

                </Stack>

                <Stack className="stack-inicio">

                    <CardBody className="text-inicio">

                        <Heading size='md'>Proyecto Final Soy Henry</Heading>
                        <br></br>
                        <Text py='2' padding="5px 0px">Web: https://pf-front-y72g-git-develop-pfgrupo3henry.vercel.app/</Text>
                        <br></br>
                        <Text py='2' padding="5px 0px">.Planificacion y estimacion de la pagina a realizar</Text>
                        <Text py='2' padding="5px 0px">Gestion de la interaccion de los usuarios y la animacion de la interfaz</Text>
                        <Text py='2' padding="5px 0px">.Implementacion de buenas practicas (UX)</Text>
                        <Text py='2' padding="5px 0px">.Creacion de e-commerce</Text>
                        <br></br>
                        <Text py='2' padding="5px 0px">Lenguajes: -HTML, CSS, Javascript</Text>
                        <Text py='2' padding="5px 0px">Frameworks: - ReactJs, Express, NodeJs, Redux , ant-design, email.js , JSON Web Tokens, Node Mailer, Bcrypt</Text>
                        <Text py='2' padding="5px 0px">ORM: - Sequelize </Text>
                        <Text py='2' padding="5px 0px">Base de datos: -PostreSQLProyecto</Text>
                        <br></br>
                        <Text py='2' padding="5px 0px">
                            .Reactjs .Git y Github .PostgresSQL .Redux .Agile(Scrum)
                            .PGAdmin .Nodejs .OOP .VSCode .HTML .Sequielize .Javascript .CSS .Espress js .Postman
                            .Creacion y consumicion de apis .Mas...
                        </Text>

                    </CardBody>

                </Stack>

            </Card>

        </div>

    );

};

export default Inicio;