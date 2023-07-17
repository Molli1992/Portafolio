import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { LoadingOutlined, } from '@ant-design/icons';




function Contact() {

    const form = useRef();
    const [state, setState] = useState(false);

    const sendEmail = (e) => {

        e.preventDefault();
        setState(true);

        emailjs.sendForm('service_s5bwju7', 'template_s4aq9tp', e.target, 'tbi5Ki8RtKg_s2RJ4')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    title: "successce",
                    text: 'Email sent successfully',
                    icon: "success",
                    confirmButtonText: 'Ok'
                }).then(() => {
                    window.location.reload();
                });
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    title: "Error!",
                    text: 'Error in sending the Email, please try later or write me through social networks',
                    icon: "error",
                    confirmButtonText: 'Ok',
                    customClass: {
                        confirmButton: "swalButton"
                    }
                }).then(() => {
                    window.location.reload();
                });;
            });

    }

    return (

        <div className='body-contact' id='Contact'>

            <section className="contact">

                <div className="contact-content">
                    <h2 className="contact-h2">Contact Me</h2>
                </div>

                <div className="contact-container">

                    <div className="contact-info">

                        <div className="contact-box">
                            <div className="contact-icon"><ion-icon name="location-outline"></ion-icon></div>
                            <div className="contact-text">
                                <h3 className="contact-h3">Direccion</h3>
                                <p className="contact-p-2">
                                    Argentina - Buenos Aires
                                </p>
                            </div>
                        </div>

                        <div className="contact-box">
                            <div className="contact-icon"><ion-icon name="call-outline"></ion-icon></div>
                            <div className="contact-text">
                                <h3 className="contact-h3">Telefono</h3>
                                <p className="contact-p-2">
                                    +549-11-2458-6710
                                </p>
                            </div>
                        </div>

                        <div className="contact-box">
                            <div className="contact-icon"><ion-icon name="mail-outline"></ion-icon></div>
                            <div className="contact-text">
                                <h3 className="contact-h3">Email</h3>
                                <p className="contact-p-2">
                                    felipe.blaksley@hotmail.com
                                </p>
                            </div>
                        </div>

                    </div>

                    <form ref={form} onSubmit={sendEmail} className="contact-form">

                        <div>
                            <h2 className="contact-form-h2">Send Message</h2>
                        </div>

                        <div className="contact-input-box">
                            <input type="text" name="from_name" required="required" placeholder=' ' />
                            <span>Name</span>
                        </div>

                        <div className="contact-input-box">
                            <input type="text" name="from_email" required="required" placeholder=' ' />
                            <span>Email</span>
                        </div>

                        <div className="contact-input-box">
                            <textarea required="required" name="message" placeholder=' '></textarea>
                            <span>Write your message...</span>
                        </div>

                        {state === true ?
                            <div className="loader">
                                <LoadingOutlined />
                            </div>
                            :
                            <div className="contact-input-box">
                                <input type="submit" name="" value="Send" className="btn-contacto" />
                            </div>
                        }

                    </form>

                </div>

            </section>

        </div>

    );

};

export default Contact;
