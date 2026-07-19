import React from 'react';
import './Faq.css';
import { faqComponent } from '../../data/content';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqComponent.items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const Faq = () => {
  return (
    <section className="faq-section" id="faq" data-panel="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="faq-inner">
        <div className="faq-head">
          <span className="faq-label eyebrow reveal">{faqComponent.label}</span>
          <h2 className="faq-heading reveal d1">{faqComponent.title}</h2>
        </div>

        <div className="faq-list">
          {faqComponent.items.map((item) => (
            <div className="faq-item reveal d2" key={item.question}>
              <h3 className="faq-item__q">{item.question}</h3>
              <p className="faq-item__a">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
