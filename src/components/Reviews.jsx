import React, { useRef, useEffect, useState } from 'react'

// Animation hook (copied from NewArrivals.jsx)
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

function Reviews() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef);

    return (
        <>
            <div id='reviews' className='py-6'></div>
            <section
                className="reviews-section"
                ref={sectionRef}
                style={{
                    padding: "0",
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 100,
                    transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0px)' : 'translateY(60px)',
                }}
            >
                <div className="container mx-auto px-4" style={{ maxWidth: 1100 }}>
                    <h2
                        className="font-bold text-saddlebrown-600 mb-4"
                        style={{
                            color: "#8b4513",
                            fontSize: "2.3rem",
                            textAlign: "center",
                            marginBottom: 24,
                            fontWeight: 700,
                            letterSpacing: "0.01em",
                            transition: 'opacity 0.7s 0.2s, transform 0.7s 0.2s',
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateY(0px)' : 'translateY(20px)',
                        }}
                    >
                        What Our Customers Say
                    </h2>
                    <div
                        className="reviews-content"
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 32,
                            justifyContent: "center",
                            alignItems: "stretch",
                            marginTop: 10,
                            transition: 'opacity 0.8s 0.25s, transform 0.8s 0.25s',
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateY(0px)' : 'translateY(40px)',
                        }}
                    >
                        {/* Slider for Reviews */}
                        {(() => {
                            const reviews = [
                                {
                                    stars: 5,
                                    text: "“Absolutely love my new boho chair! The quality is amazing and it fits perfectly in my living room. Will definitely shop again.”",
                                    img: "https://randomuser.me/api/portraits/women/68.jpg",
                                    name: "Jessica M."
                                },
                                {
                                    stars: 5,
                                    text: "“The delivery was super fast and the table is even more beautiful in person. Sustainable and stylish—what more could you want?”",
                                    img: "https://randomuser.me/api/portraits/men/32.jpg",
                                    name: "David R."
                                },
                                {
                                    stars: 5,
                                    text: "“I appreciate the eco-friendly packaging and the craftsmanship. The rug I bought is soft, vibrant, and unique. Highly recommend!”",
                                    img: "https://randomuser.me/api/portraits/women/44.jpg",
                                    name: "Priya S."
                                },
                                {
                                    stars: 4,
                                    text: "“The lamp I ordered is gorgeous and adds such a cozy vibe to my bedroom. Customer service was very helpful with my questions.”",
                                    img: "https://randomuser.me/api/portraits/men/45.jpg",
                                    name: "Alex T."
                                },
                                {
                                    stars: 5,
                                    text: "“Beautiful craftsmanship! The macrame wall hanging is a true statement piece in my hallway. Will recommend to friends.”",
                                    img: "https://randomuser.me/api/portraits/women/65.jpg",
                                    name: "Maria L."
                                },
                                {
                                    stars: 4,
                                    text: "“Great experience overall. The coffee table arrived on time and looks even better than the photos.”",
                                    img: "https://randomuser.me/api/portraits/men/23.jpg",
                                    name: "Ben W."
                                },
                                {
                                    stars: 5,
                                    text: "“I love supporting small businesses and this shop exceeded my expectations. The throw pillows are so soft and stylish!”",
                                    img: "https://randomuser.me/api/portraits/women/51.jpg",
                                    name: "Sophie K."
                                }
                            ];

                            const [current, setCurrent] = React.useState(0);

                            const prev = () => setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
                            const next = () => setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

                            return (
                                <div style={{
                                    width: "100%",
                                    maxWidth: 370,
                                    margin: "0 auto",
                                    position: "relative",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}>
                                    {/* Slider Card */}
                                    <div
                                        className="review-cards-row"
                                        style={{
                                            display: "flex",
                                            gap: 18,
                                            justifyContent: "center",
                                            alignItems: "stretch",
                                            width: "100%",
                                            maxWidth: 1100,
                                            margin: "0 auto"
                                        }}
                                    >
                                        {(() => {
                                            // Responsive: 1 card on mobile, 5 on desktop
                                            const [cardsToShow, setCardsToShow] = React.useState(1);

                                            // Auto-move logic
                                            React.useEffect(() => {
                                                const updateCardsToShow = () => {
                                                    if (window.innerWidth >= 1024) {
                                                        setCardsToShow(5);
                                                    } else {
                                                        setCardsToShow(1);
                                                    }
                                                };
                                                updateCardsToShow();
                                                window.addEventListener('resize', updateCardsToShow);
                                                return () => window.removeEventListener('resize', updateCardsToShow);
                                            }, []);

                                            // Auto-advance the slider every 3 seconds
                                            React.useEffect(() => {
                                                const interval = setInterval(() => {
                                                    setCurrent(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
                                                }, 3000);
                                                return () => clearInterval(interval);
                                            }, [reviews.length]);

                                            return Array.from({ length: cardsToShow }).map((_, idx) => {
                                                // For each card, calculate the review index
                                                const reviewIdx = (current + idx) % reviews.length;
                                                const review = reviews[reviewIdx];
                                                return (
                                                    <div
                                                        key={reviewIdx}
                                                        className="review-card"
                                                        style={{
                                                            background: "#fff",
                                                            borderRadius: 16,
                                                            boxShadow: "0 2px 16px rgba(34,197,94,0.08)",
                                                            padding: "28px 22px 22px 22px",
                                                            maxWidth: 340,
                                                            minWidth: 260,
                                                            flex: "1 1 260px",
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            alignItems: "center",
                                                            transition: "box-shadow 0.2s, opacity 0.7s, transform 0.7s",
                                                            opacity: inView ? 1 : 0,
                                                            transform: inView ? 'translateY(0px)' : 'translateY(40px)',
                                                        }}
                                                    >
                                                        <div style={{ display: "flex", gap: 2, marginBottom: 10 }}>
                                                            {Array.from({ length: review.stars }).map((_, i) => (
                                                                <span key={i} role="img" aria-label="star" style={{ color: "#fbbf24", fontSize: "1.2em" }}>★</span>
                                                            ))}
                                                        </div>
                                                        <p style={{
                                                            color: "#374151",
                                                            fontSize: "1.08rem",
                                                            fontWeight: 400,
                                                            textAlign: "center",
                                                            marginBottom: 18,
                                                            lineHeight: 1.6
                                                        }}>
                                                            {review.text}
                                                        </p>
                                                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                                            <img
                                                                src={review.img}
                                                                alt="Reviewer"
                                                                style={{
                                                                    width: 38,
                                                                    height: 38,
                                                                    borderRadius: "50%",
                                                                    objectFit: "cover",
                                                                    border: "2px solid #16a34a"
                                                                }}
                                                            />
                                                            <span style={{ color: "#166534", fontWeight: 600, fontSize: "1.05em" }}>{review.name}</span>
                                                        </div>
                                                    </div>
                                                );
                                            });
                                        })()}
                                    </div>

                                    {/* Slider Controls */}
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 18, gap: 18 }}>
                                        <button
                                            aria-label="Previous review"
                                            onClick={prev}
                                            style={{
                                                background: "#f0fdf4",
                                                border: "none",
                                                borderRadius: "50%",
                                                width: 36,
                                                height: 36,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                                color: "#16a34a",
                                                fontSize: 20,
                                                boxShadow: "0 1px 4px rgba(22, 165, 52, 0.08)",
                                                transition: "background 0.2s"
                                            }}
                                        >
                                            <span aria-hidden="true">&lt;</span>
                                        </button>
                                        {/* Dots */}
                                        <div style={{ display: "flex", gap: 6 }}>
                                            {reviews.map((_, idx) => (
                                                <span
                                                    key={idx}
                                                    style={{
                                                        display: "inline-block",
                                                        width: 9,
                                                        height: 9,
                                                        borderRadius: "50%",
                                                        background: idx === current ? "#16a34a" : "#d1fae5",
                                                        transition: "background 0.2s"
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        <button
                                            aria-label="Next review"
                                            onClick={next}
                                            style={{
                                                background: "#f0fdf4",
                                                border: "none",
                                                borderRadius: "50%",
                                                width: 36,
                                                height: 36,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                                color: "#16a34a",
                                                fontSize: 20,
                                                boxShadow: "0 1px 4px rgba(22, 165, 52, 0.08)",
                                                transition: "background 0.2s"
                                            }}
                                        >
                                            <span aria-hidden="true">&gt;</span>
                                        </button>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reviews