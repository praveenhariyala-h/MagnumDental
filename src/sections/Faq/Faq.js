import React from 'react';
import './Faq.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Faq = () => {
    const faqs = [
        {
            id: 'One',
            question: 'Is the first consultation free?',
            answer: 'Yes. Your first consultation at Magnum Dental Opus includes an oral examination and a clear discussion of recommended treatment options with no obligation.',
            open: true,
        },
        {
            id: 'Two',
            question: 'What dental services do you offer?',
            answer: 'We provide braces, invisible aligners, cosmetic dentistry, implants, root canal treatment, crowns and bridges, pediatric care, wisdom tooth removal, flap surgery, and smile designing.',
            open: false,
        },
        {
            id: 'Three',
            question: 'How do I book an appointment?',
            answer: 'You can book online through our website, call or WhatsApp us on 9100291726, or visit Magnum Dental Opus in Sheela Nagar, Visakhapatnam.',
            open: false,
        },
        {
            id: 'Four',
            question: 'Do you treat dental emergencies?',
            answer: 'Yes. If you have sudden tooth pain, swelling, or a dental injury, contact us right away and we will prioritize emergency care as quickly as possible.',
            open: false,
        },
    ];

    return (
        <section className='faq-section pt-100 pb-70'  data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle
                    subTitle="FAQ"
                    title="Frequently asked questions"
                />

                <div className="accordian-area">
                    <div className="accordion" id="accordionExample">
                        {
                            faqs.map((faq) => (
                                <div className="accordion-item" key={faq.id}>
                                    <h2 className="accordion-header" id={`heading${faq.id}`}>
                                        <button
                                            className={`accordion-button${faq.open ? '' : ' collapsed'}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${faq.id}`}
                                            aria-expanded={faq.open ? 'true' : 'false'}
                                            aria-controls={`collapse${faq.id}`}
                                        >
                                            {faq.question}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse${faq.id}`}
                                        className={`accordion-collapse collapse${faq.open ? ' show' : ''}`}
                                        aria-labelledby={`heading${faq.id}`}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
