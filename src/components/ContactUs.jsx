import React, { useRef, useEffect, useState } from 'react';
// import { addContactSubmission, exportSubmissionsAsJSON, getAllContactSubmissions, exportAllToGoogleSheets } from '../utils/contactStorage';

// Animation hook: returns true when the ref is in view (like in NewArrivals.jsx)
function useInView(ref, options = {}) {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2, ...options }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, options]);

    return inView;
}

function ContactUs() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef);
    // const [submissions, setSubmissions] = useState(getAllContactSubmissions());

    return (
        <>
            <div id="contact" className='py-8'></div>

            <section
                className="contact-us-section"
                ref={sectionRef}
                style={{
                    padding: '0 0 48px 0',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: 100,
                    transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0px)' : 'translateY(60px)',
                }}
            >
                <div className="container mx-auto" style={{ width: '100%' }}>
                    <h2
                        style={{
                            fontSize: '2.3rem',
                            fontWeight: 700,
                            color: 'rgb(139, 69, 19)',
                            marginBottom: 18,
                            textAlign: 'center',
                            paddingBottom: '12px',
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateY(0px)' : 'translateY(30px)',
                            transition: 'opacity 0.7s 0.1s cubic-bezier(0.4,0,0.2,1), transform 0.7s 0.1s cubic-bezier(0.4,0,0.2,1)'
                        }}
                    >
                        Contact Us
                    </h2>
                    <p
                        style={{
                            textAlign: 'center',
                            color: '#374151',
                            fontSize: '1.13rem',
                            marginBottom: 32,
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateY(0px)' : 'translateY(30px)',
                            transition: 'opacity 0.7s 0.18s cubic-bezier(0.4,0,0.2,1), transform 0.7s 0.18s cubic-bezier(0.4,0,0.2,1)'
                        }}
                    >
                        We'd love to hear from you! Whether you have a question about <br /> our products, need assistance, or just want to share your thoughts, our team is ready to help.
                    </p>
                    <div
                        className="contact-content"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 40,
                            justifyContent: 'center',
                            alignItems: 'flex-start'
                        }}
                    >
                        {/* Contact Info */}
                        <div
                            className="contact-info"
                            style={{
                                flex: '1 1 260px',
                                minWidth: 240,
                                maxWidth: 340,
                                background: '#fff',
                                borderRadius: 16,
                                boxShadow: '0 2px 12px rgba(34,197,94,0.07)',
                                padding: '28px 22px',
                                marginBottom: 18,
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'scale(1) translateY(0px)' : 'scale(0.96) translateY(30px)',
                                transition: 'opacity 0.7s 0.22s cubic-bezier(0.4,0,0.2,1), transform 0.7s 0.22s cubic-bezier(0.4,0,0.2,1)'
                            }}
                        >
                            <h3 style={{ color: '#16a34a', fontWeight: 600, fontSize: 21, marginBottom: 18 }}>
                                <i className="fa-solid fa-envelope" style={{ marginRight: 8 }}></i>
                                Get in Touch
                            </h3>
                            <div style={{ marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                                <i className="fa-solid fa-phone" style={{ color: '#166534', fontSize: 17 }}></i>
                                <a href="tel:+20 10 80434434" style={{ color: '#166534', textDecoration: 'underline', fontWeight: 500 }}>+20 10 80434434</a>
                            </div>
                            <div style={{ marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                                <i className="fa-solid fa-envelope" style={{ color: '#166534', fontSize: 17 }}></i>
                                <a href="mailto:info@bohofurniture.com" style={{ color: '#166534', textDecoration: 'underline', fontWeight: 500 }}>info@bohofurniture.com</a>
                            </div>
                            <div style={{ marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                                <i className="fa-solid fa-location-dot" style={{ color: '#166534', fontSize: 17 }}></i>
                                <span style={{ color: '#374151', fontWeight: 500 }}>Armed Forces Buildings, Tower 6, Dajla, Maadi, Cairo, Egypt</span>
                            </div>
                            <div style={{ marginTop: 18 }}>
                                <span style={{ color: '#166534', fontWeight: 600, fontSize: 16 }}>Follow us:</span>
                                <div style={{ marginTop: 8, display: 'flex', gap: 16 }}>
                                    <a href="https://www.facebook.com/profile.php?id=61575954315572" target="_blank" rel="noopener noreferrer" style={{ color: '#166534', fontSize: 22 }}>
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.instagram.com/boho_home_furniture/?fbclid=IwY2xjawMg_FpleHRuA2FlbQIxMABicmlkETFxZmR2Zmd1cG44Rnh2T1FZAR7Z-b0c0JKQi5lsbTEbXqYaB5fqivWAqI3-zV2fGkGSuvqMDJ62KJuyPRA87g_aem_Pao_F9wniMS1GrhBcRPUUA#" target="_blank" rel="noopener noreferrer" style={{ color: '#166534', fontSize: 22 }}>
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    {/* <a href="https://x.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#166534', fontSize: 22 }}>
                                    <i className="fab fa-x-twitter"></i>
                                </a> */}
                                    {/* <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#166534', fontSize: 22 }}>
                                    <i className="fab fa-linkedin-in"></i>
                                </a> */}
                                </div>
                            </div>
                        </div>
                        {/* Contact Form */}
                        <form
                        
                            className="contact-form"
                            style={{
                                flex: '2 1 340px',
                                minWidth: 260,
                                maxWidth: 500,
                                background: 'rgba(255,255,255,0.95)',
                                borderRadius: 18,
                                padding: '32px 26px',
                                boxShadow: '0 2px 12px rgba(139,69,19,0.07)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 18,
                            }}
                        >
                            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                                <div style={{ flex: 1, minWidth: 120 }}>
                                    <label htmlFor="name" style={{ color: '#166534', fontWeight: 500, marginBottom: 4, display: 'block' }}>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Your Name"
                                        style={{
                                            width: '100%',
                                            padding: '10px 12px',
                                            borderRadius: 8,
                                            border: '1.5px solid #bbf7d0',
                                            fontSize: 15,
                                            outline: 'none',
                                        }}
                                    />
                                </div>

                                <div style={{ flex: 1, minWidth: 120 }}>
                                    <label htmlFor="phone" style={{ color: '#166534', fontWeight: 500, marginBottom: 4, display: 'block' }}>
                                        Phone Number
                                    </label>
                                    <input
                                        type="number"
                                        id="phone"
                                        name="phone"
                                        required
                                        placeholder="01XXXXXXXX"
                                        pattern="^01\\d{8}$"
                                        style={{
                                            width: '100%',
                                            padding: '10px 12px',
                                            borderRadius: 8,
                                            border: '1.5px solid #bbf7d0',
                                            fontSize: 15,
                                            outline: 'none',
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" style={{ color: '#166534', fontWeight: 500, marginBottom: 4, display: 'block' }}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="How can we help you?"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: 8,
                                        border: '1.5px solid #bbf7d0',
                                        fontSize: 15,
                                        outline: 'none',
                                        resize: 'vertical',
                                    }}
                                ></textarea>
                            </div>

                            <input
                                type="submit"
                                className="btn bg-green-600 hover:bg-green-700 text-white font-bold flex items-center justify-center gap-2"
                                style={{
                                    fontWeight: 700,
                                    border: 'none',
                                    borderRadius: '10px',
                                    fontSize: '1.08rem',
                                    padding: '12px 0',
                                    marginTop: 8,
                                    boxShadow: '0 2px 8px rgba(34,197,94,0.10)',
                                    cursor: 'pointer',
                                }}
                                value="Send Message"
                            />

                        </form>

                        {/* Submission Statistics and Export Section */}
                        {/* <div
                            className="submission-stats"
                            style={{
                                flex: '1 1 100%',
                                maxWidth: 800,
                                margin: '20px auto 0',
                                background: 'rgba(255,255,255,0.95)',
                                borderRadius: 16,
                                padding: '24px',
                                boxShadow: '0 2px 12px rgba(139,69,19,0.07)',
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateY(0px)' : 'translateY(30px)',
                                transition: 'opacity 0.7s 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.7s 0.4s cubic-bezier(0.4,0,0.2,1)'
                            }}
                        >
                            <h3 style={{ color: '#166534', fontWeight: 600, fontSize: 18, marginBottom: 16, textAlign: 'center' }}>
                                <i className="fa-solid fa-chart-bar" style={{ marginRight: 8 }}></i>
                                Contact Form Statistics
                            </h3>
                            
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#16a34a' }}>
                                        {submissions.totalSubmissions}
                                    </div>
                                    <div style={{ fontSize: '0.9rem', color: '#666' }}>Total Submissions</div>
                                </div>
                                
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '#166534' }}>
                                        {submissions.lastUpdated ? new Date(submissions.lastUpdated).toLocaleDateString() : 'No submissions yet'}
                                    </div>
                                    <div style={{ fontSize: '0.9rem', color: '#666' }}>Last Updated</div>
                                </div>
                                
                                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                                    <button
                                        onClick={() => {
                                            if (exportSubmissionsAsJSON()) {
                                                alert('تم تصدير البيانات بنجاح! ✅');
                                                // Refresh the data after export
                                                setSubmissions(getAllContactSubmissions());
                                            } else {
                                                alert('عذراً، حدث خطأ في تصدير البيانات.');
                                            }
                                        }}
                                        style={{
                                            background: '#16a34a',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '8px',
                                            padding: '10px 20px',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'background 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.target.style.background = '#15803d'}
                                        onMouseLeave={(e) => e.target.style.background = '#16a34a'}
                                    >
                                        <i className="fa-solid fa-download" style={{ marginRight: 6 }}></i>
                                        Export as JSON
                                    </button>
                                    
                                    <button
                                        onClick={async () => {
                                            try {
                                                const result = await exportAllToGoogleSheets();
                                                if (result.success) {
                                                    alert('تم إرسال البيانات إلى Google Sheets بنجاح! ✅');
                                                } else {
                                                    alert('عذراً، حدث خطأ في إرسال البيانات إلى Google Sheets.');
                                                }
                                            } catch (error) {
                                                alert('عذراً، حدث خطأ في إرسال البيانات إلى Google Sheets.');
                                            }
                                        }}
                                        style={{
                                            background: '#4285f4',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '8px',
                                            padding: '10px 20px',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'background 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.target.style.background = '#3367d6'}
                                        onMouseLeave={(e) => e.target.style.background = '#4285f4'}
                                    >
                                        <i className="fa-solid fa-table" style={{ marginRight: 6 }}></i>
                                        Send to Google Sheets
                                    </button>
                                </div>
                            </div>
                        </div> */}


                    </div>
                </div>
                {/* <ContactForm /> */}
            </section>
        </>
    )
}

export default ContactUs