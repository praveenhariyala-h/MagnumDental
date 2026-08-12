import React from 'react';
import './SingleBlog.scss';
import Navbar from '../../components/Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import BlogData from '../../sections/Blogs/BlogData';
import Footer from '../../sections/Footer/Footer';

const blogBodies = {
    'new-technology-make-for-dental-operation': {
        paragraphs: [
            'Modern dentistry has changed how clinics diagnose and treat oral health concerns. At Magnum Dental Opus, advanced tools help us plan treatments with greater accuracy while keeping patient comfort at the center of care.',
            'Digital imaging, precise instruments, and updated clinical techniques allow us to detect issues earlier, explain options more clearly, and complete procedures with less discomfort and shorter recovery time.',
        ],
        quote: 'Technology works best when it supports careful diagnosis and a personal, patient-first approach.',
        closing: 'Whether you need a routine checkup, restorative care, or a smile makeover, modern dental technology helps us deliver safer and more predictable results for families in Sheela Nagar, Visakhapatnam.',
    },
    'regular-dental-care-make-your-smile-brighter': {
        paragraphs: [
            'Regular dental visits are one of the simplest ways to protect your smile. Cleanings and checkups help remove plaque, catch cavities early, and keep gums healthy before small issues become painful problems.',
            'At Magnum Dental Opus, we recommend consistent oral care at home along with professional reviews so you can maintain brighter teeth, fresher breath, and lasting confidence.',
        ],
        quote: 'Prevention is always kinder to your smile — and usually kinder to your budget — than waiting for pain to appear.',
        closing: 'Book a checkup today and take a small step that makes a big difference for your long-term oral health.',
    },
    'dental-hygiene-for-all-age-to-make-smile': {
        paragraphs: [
            'Good dental hygiene looks different at every stage of life. Children need gentle guidance, adults benefit from consistent cleaning habits, and seniors often need extra support for gums, dentures, or implant care.',
            'Brushing twice a day, cleaning between teeth, limiting sugary snacks, and visiting the dentist regularly remain the foundation of a healthy smile for every age group.',
        ],
        quote: 'Healthy habits started early — and maintained consistently — protect smiles for life.',
        closing: 'Our team at Magnum Dental Opus is here to guide your family with practical hygiene advice and personalized dental care.',
    },
};

const SingleBlog = () => {

    const {url} = useParams();
    const blog = BlogData.find(blog => blog.url === url);
    const {title, img, category, description} = blog;
    const body = blogBodies[url] || {
        paragraphs: [description],
        quote: 'Magnum Dental Opus is here to keep your smile healthy and confident.',
        closing: 'Visit our clinic in Sheela Nagar, Visakhapatnam, or contact us to learn more.',
    };

    return (
        <>
            <Navbar />
            <section className='section-bg pb-70 single-blog'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                                <main className="single-blog-area">
                                <p className="single-blog-category">
                                    {category}
                                </p>
                                <h2 className="single-blog-title">{title}</h2>
                                <img className='single-blog-banner' src={img} alt="blog banner" loading="eager" decoding="async"/>
                                {
                                    body.paragraphs.map((paragraph, index) => (
                                        <p className="single-blog-text" key={index}>{paragraph}</p>
                                    ))
                                }

                                <blockquote className='single-post-quote'>“ {body.quote} ”</blockquote>

                                <p className="single-blog-text">{body.closing}</p>
                            </main>
                        </div>
                        <div className="col-lg-3">
                            <div className="blog-sidebar">
                                <div className="sidebar-subscribe mb-5">
                                    <h3 className="sidebar-heading">Get Latest Updates</h3>
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className='form-control' placeholder='Subscribe to email'/>
                                            <input className='btn btn-primary mt-1 w-100' type="button" value="Subscribe" />
                                        </div>
                                    </form>
                                </div>

                                <div className="sidebar-category mb-3">
                                    <h3 className="sidebar-heading">Categories</h3>
                                    <ul>
                                        <li><Link to="/blogs">Technology</Link></li>
                                        <li><Link to="/blogs">Dental Care</Link></li>
                                        <li><Link to="/blogs">Hygiene</Link></li>
                                        <li><Link to="/singleservice">Treatments</Link></li>
                                        <li><Link to="/contact">Appointments</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default SingleBlog;
