import React, { useState } from "react";
import styles from "./formContact.module.css";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";
import { IoMail, IoLocation, IoPhonePortrait } from "react-icons/io5";

export default function Contact() {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    clientName: "",
    clientLastName: "",
    clientEmail: "",
    clientPhone: "",
    clientMessage: "",
  });

  const onChangeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const onSubmit = async () => {
    if (
      !formData.clientName ||
      !formData.clientLastName ||
      !formData.clientEmail ||
      !formData.clientPhone ||
      !formData.clientMessage
    ) {
      Swal.fire({
        title: "Info!",
        text: "Complete all fields",
        icon: "info",
        confirmButtonText: "OK",
      });
    } else if (!validateEmail(formData.clientEmail)) {
      Swal.fire({
        title: "Info!",
        text: "Incorrect email format",
        icon: "info",
        confirmButtonText: "OK",
      });
    } else {
      setLoader(true);
      try {
        const dataClientEmail = {
          clientName: encodeURIComponent(formData.clientName),
          clientLastName: encodeURIComponent(formData.clientLastName),
          clientEmail: encodeURIComponent(formData.clientEmail),
          clientPhone: encodeURIComponent(formData.clientPhone),
          clientMessage: encodeURIComponent(formData.clientMessage),
        };
        console.log(`${process.env.REACT_APP_API_URL}/api/emails/contactEmail`);
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/emails/contactEmail`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataClientEmail),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Error sending message");
        }

        Swal.fire({
          title: "Success!",
          text: "Message sent successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "Error sending message, please try again later or contact the server. We apologize for the inconvenience.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      } finally {
        setLoader(false);
        setFormData({
          clientName: "",
          clientLastName: "",
          clientEmail: "",
          clientPhone: "",
          clientMessage: "",
        });
      }
    }
  };

  return (
    <div className={styles.contactSection}>
      <div className={styles.containerData}>
        <div className={styles.contatBox}>
          <div>
            <IoLocation className={styles.contactIcon} />
          </div>

          <div className={styles.contactText}>
            <h3 className={styles.contactH3}>Address</h3>
            <p className={styles.contactParrafo}>
              La Rabida 2411, Beccar, Buenos Aires, Argentina.
            </p>
          </div>
        </div>

        <div className={styles.contatBox}>
          <div>
            <IoPhonePortrait className={styles.contactIcon} />
          </div>

          <div className={styles.contactText}>
            <h3 className={styles.contactH3}>Phone number</h3>
            <p className={styles.contactParrafo}>+54 9 112 458 6710</p>
          </div>
        </div>

        <div className={styles.contatBox}>
          <div>
            <IoMail className={styles.contactIcon} />
          </div>

          <div className={styles.contactText}>
            <h3 className={styles.contactH3}>Email</h3>
            <p className={styles.contactParrafo}>felipe.blaksley@hotmail.com</p>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <h1 className={styles.title}>Contact me</h1>

        <p className={styles.text}>
          Fill out this form and I will contact you shortly for detailed
          consultation.
        </p>

        <div className={styles.containerInput}>
          <input
            className={styles.formInput}
            placeholder={"Your name"}
            value={formData.clientName}
            onChange={onChangeFormData}
            name="clientName"
          />
          <input
            className={styles.formInput}
            placeholder={"Your last name"}
            value={formData.clientLastName}
            onChange={onChangeFormData}
            name="clientLastName"
          />
        </div>

        <div className={styles.containerInput}>
          <input
            className={styles.formInput}
            placeholder={"Email"}
            value={formData.clientEmail}
            onChange={onChangeFormData}
            name="clientEmail"
          />
          <input
            className={styles.formInput}
            placeholder={"Phone"}
            value={formData.clientPhone}
            onChange={onChangeFormData}
            name="clientPhone"
            type="number"
          />
        </div>

        <textarea
          style={{ width: "100%", height: "100px" }}
          className={styles.formInput}
          placeholder={"Message"}
          value={formData.clientMessage}
          onChange={onChangeFormData}
          name="clientMessage"
        />

        <div className={styles.containerButton}>
          <button className={styles.formButton} onClick={onSubmit}>
            {loader ? <ClipLoader color="#ffffff" size={20} /> : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
