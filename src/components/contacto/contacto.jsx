import React from "react";
import "./contacto.css";
import { Card, Image, Heading, Text } from '@chakra-ui/react';



function Contacto() {



    return (

        <div className="body-contact">

            <Card
                className="container-img-contact"
                overflow='hidden'
                variant='outline'
            >

                <Image
                    className="img-contact"
                    objectFit='cover'
                    src='https://static.vecteezy.com/system/resources/previews/000/166/530/non_2x/contact-me-illustration-vector.jpg'
                    alt='Contact Us'
                />

            </Card>

            <Card
                className="container-text-contact"
                overflow='hidden'
                variant='outline'
            >

                <Heading className="title-contact">Contactactame</Heading>

                <br></br>

                <Text className="text-contact">
                    Felipe Blaksley
                </Text>

                <br></br>

                <Text className="text-contact">
                    felipe.blaksley@hotmail.com
                </Text>

                <br></br>

                <Text className="text-contact">
                    011-2-458-6710
                </Text>

                <br></br>

                <Text className="text-contact">
                    Argentina, Provincia de Buenos Aires
                </Text>

            </Card>

        </div>

    );

};

export default Contacto;