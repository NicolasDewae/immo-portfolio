import React from 'react';
import './Contact.css';
import { contactComponent, imgPath } from '../../data/i18n';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-img">
        <img src={imgPath.immoCuisineNoireSrc} alt={imgPath.immoCuisineNoireAlt} />
        <div className="contact-img__overlay" />
      </div>
      <div className="contact-form-wrap">
        <span className="contact-label reveal">Contact</span>
        <h2 className="contact-heading reveal d1">{contactComponent.title}</h2>

        <form
          className="contact-form reveal d2"
          action={`https://formsubmit.co/${process.env.REACT_APP_MY_EMAIL}`}
          method="POST"
        >
          <input type="hidden" name="_next" value="/contact" />
          <div className="form-row">
            <div className="form-field">
              <input type="text" name="firstname" placeholder=" " id="firstname" />
              <label htmlFor="firstname">{contactComponent.form.firstname}</label>
            </div>
            <div className="form-field">
              <input type="text" name="lastname" placeholder=" " id="lastname" />
              <label htmlFor="lastname">{contactComponent.form.lastname}</label>
            </div>
          </div>
          <div className="form-field">
            <input type="email" name="email" placeholder=" " id="email" />
            <label htmlFor="email">{contactComponent.form.email}</label>
          </div>
          <div className="form-field">
            <input type="text" name="phone" placeholder=" " id="phone" />
            <label htmlFor="phone">{contactComponent.form.phone}</label>
          </div>
          <div className="form-field">
            <textarea name="message" placeholder=" " id="message" />
            <label htmlFor="message">{contactComponent.form.message}</label>
          </div>

          <div className="form-actions">
            <button type="submit">{contactComponent.form.submit}</button>
            <a
              href={contactComponent.pdf.src}
              target="_blank"
              rel="noreferrer"
              className="pdf-link"
            >
              {contactComponent.pdf.title}&nbsp;↗
            </a>
          </div>
        </form>

        <div className="contact-footer reveal d4">
          <span>{contactComponent.form.email && 'photographe immobilier'}</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
