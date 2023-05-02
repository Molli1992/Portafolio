import React from "react";
import "./perfil.css";
import Img from "../../logo/WhatsApp Image 2023-05-01 at 12.14.19.jpeg";
import { Card, CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react'


function Perfil() {


    return (

        <div className="body-perfil">

            <Card
                className="card-perfil"
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >

                <Stack className="stack-perfil">

                    <Image
                        className="img-perfil"
                        src={Img}
                        alt='Imagen Perfil'
                    />

                </Stack>

                <Stack className="stack-perfil">

                    <CardBody className="text-profile">

                        <Heading size='md'>Felipe Blaksley</Heading>

                        <Text py='2' padding="5px 0px">
                            Nacionalidad: Argentina, Provincia de Buenos Aires, Beccar
                        </Text>

                        <Text py='2' padding="5px 0px">
                            Email: felipe.blaksley@gmail.com
                        </Text>

                        <Text py='2' padding="5px 0px">
                            Celular: 011-2-458-6710
                        </Text>

                        <Text py='2' padding="5px 0px">
                            Ocupacion: Programador web Fullstack
                        </Text>

                        <Text py='2' padding="5px 0px">
                            Idiomas: Ingles-Avanzado / Españos-Nativo
                        </Text>

                        <Text py='2' padding="5px 0px">
                            Conocimientos:
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

export default Perfil;