import React from 'react';
import Image from 'next/image';
import './Contact.css';
import { contactComponent, images } from '../../data/content';

const Contact = () => {
  return (
    <section className="contact-section" id="contact" data-panel="contact">
      <div className="contact-img">
        <Image
          src={images.cuisineNoire.src}
          alt={images.cuisineNoire.alt}
          fill
          sizes="(max-width: 800px) 100vw, 50vw"
        />
        <div className="contact-img__overlay" />
      </div>
      <div className="contact-form-wrap">
        <span className="contact-label eyebrow reveal">Contact</span>
        <h2 className="contact-heading reveal d1">{contactComponent.title}</h2>

        <form
          className="contact-form reveal d2"
          action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_MY_EMAIL}`}
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
            <button type="submit" className="btn-pill">{contactComponent.form.submit}</button>
          </div>
        </form>

        <div className="contact-footer reveal d4">
          <span>photographe immobilier</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
