import React from "react";
import "./Contact.css";
import { imgPath, contactComponent } from "../../data/i18n";

const Contact = () => {
    return (
        <>
            <h1>{contactComponent.title}</h1>
            <section>
                <div className="contactLeft">
                    <form action={`https://formsubmit.co/${process.env.REACT_APP_MY_EMAIL}`} method="POST">
                        <input type="hidden" name="_next" value="/contact" />
                        <input type="text" name="firstname" placeholder={contactComponent.form.firstname}/>
                        <input type="text" name="lastname" placeholder={contactComponent.form.lastname}/>
                        <input type="email" name="email" placeholder={contactComponent.form.email}/>
                        <input type="text" name="phone" placeholder={contactComponent.form.phone}/>
                        <textarea name="message" placeholder={contactComponent.form.message}/>
                        <button type="submit">{contactComponent.form.submit}</button>
                    </form>
                    <div className="pdf">
                        <a href={contactComponent.pdf.src} target="_blank" rel="noreferrer">{contactComponent.pdf.title}</a>
                    </div>
                </div>
                <div className="contactRight">
                    <img src={imgPath.immoChambreEtudianteSrc} alt={imgPath.immoChambreEtudianteAlt} />
                </div>
            </section>
        </>
    );
};

export default Contact;