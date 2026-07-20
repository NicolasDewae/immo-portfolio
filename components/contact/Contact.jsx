'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import './Contact.css';
import { contactComponent, images } from '../../data/content';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    const form = event.target;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('request failed');

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="contact-section" id="contact" data-panel="contact">
      <div className="contact-img">
        <Image
          src={images.cuisineNoire.src}
          alt={images.cuisineNoire.alt}
          fill
          sizes="(max-width: 800px) 100vw, 151vh"
          quality={90}
          priority
        />
        <div className="contact-img__overlay" />
      </div>
      <div className="contact-form-wrap">
        <span className="contact-label eyebrow reveal">Contact</span>
        <h2 className="contact-heading reveal d1">{contactComponent.title}</h2>

        <form className="contact-form reveal d2" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <input type="text" name="firstname" placeholder=" " id="firstname" required />
              <label htmlFor="firstname">{contactComponent.form.firstname}</label>
            </div>
            <div className="form-field">
              <input type="text" name="lastname" placeholder=" " id="lastname" required />
              <label htmlFor="lastname">{contactComponent.form.lastname}</label>
            </div>
          </div>
          <div className="form-field">
            <input type="email" name="email" placeholder=" " id="email" required />
            <label htmlFor="email">{contactComponent.form.email}</label>
          </div>
          <div className="form-field">
            <input type="text" name="phone" placeholder=" " id="phone" />
            <label htmlFor="phone">{contactComponent.form.phone}</label>
          </div>
          <div className="form-field">
            <textarea name="message" placeholder=" " id="message" required />
            <label htmlFor="message">{contactComponent.form.message}</label>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-pill" disabled={status === 'sending'}>
              {status === 'sending' ? contactComponent.form.sending : contactComponent.form.submit}
            </button>
          </div>

          {status === 'success' && <p className="form-status form-status--success">{contactComponent.form.success}</p>}
          {status === 'error' && <p className="form-status form-status--error">{contactComponent.form.error}</p>}
        </form>

        <div className="contact-footer reveal d4">
          <span>photographe immobilier</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
