import React from 'react';
import "./contact.css";



function Contact() {

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

                    <div className="contact-form">

                        <form>
                            <h2 className="contact-form-h2">Send Message</h2>
                        </form>

                        <div className="contact-input-box">
                            <input type="text" name="" required="required" placeholder=' ' />
                            <span>Name</span>
                        </div>

                        <div className="contact-input-box">
                            <input type="text" name="" required="required" placeholder=' ' />
                            <span>Email</span>
                        </div>

                        <div className="contact-input-box">
                            <textarea required="required" placeholder=' '></textarea>
                            <span>Write your message...</span>
                        </div>

                        <div className="contact-input-box">
                            <input type="submit" name="" value="Send" className="btn-contacto" />
                        </div>

                    </div>

                </div>

            </section>

        </div>

    );

};

export default Contact;
