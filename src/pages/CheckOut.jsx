import React, { useState } from "react";

function CheckOut() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        card: "",
        expiry: "",
        cvc: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // In a real app, submit order here
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center py-10"
            style={{
                fontFamily: "Inter, sans-serif",
            }}
        >
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                {/* Left: Order Summary */}
                <div className="md:w-1/2 bg-emerald-50 p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
                            <i className="fa fa-credit-card text-emerald-500"></i>
                            Checkout
                        </h2>
                        <div className="mb-6">
                            <h3 className="font-semibold text-emerald-800 mb-2">Order Summary</h3>
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <img src="/images/products/placeholder.jpg" alt="Product" className="w-12 h-12 rounded-lg object-cover border" />
                                        <span className="font-medium text-gray-700">Sample Product</span>
                                    </div>
                                    <span className="font-semibold text-emerald-700">$49.99</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <img src="/images/products/placeholder.jpg" alt="Product" className="w-12 h-12 rounded-lg object-cover border" />
                                        <span className="font-medium text-gray-700">Another Item</span>
                                    </div>
                                    <span className="font-semibold text-emerald-700">$29.99</span>
                                </li>
                            </ul>
                        </div>
                        <div className="border-t pt-4">
                            <div className="flex justify-between text-gray-600 mb-1">
                                <span>Subtotal</span>
                                <span>$79.98</span>
                            </div>
                            <div className="flex justify-between text-gray-600 mb-1">
                                <span>Shipping</span>
                                <span className="text-green-600 font-medium">Free</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold text-emerald-800 mt-2">
                                <span>Total</span>
                                <span>$79.98</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-xs text-gray-500">
                        <i className="fa fa-lock mr-1"></i>
                        Secure checkout &amp; encrypted payment
                    </div>
                </div>
                {/* Right: Form */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Shipping Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="input input-bordered w-full rounded-lg px-3 py-2 border border-emerald-200 focus:border-emerald-400"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="input input-bordered w-full rounded-lg px-3 py-2 border border-emerald-200 focus:border-emerald-400"
                                />
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    value={form.address}
                                    onChange={handleChange}
                                    required
                                    className="input input-bordered w-full rounded-lg px-3 py-2 border border-emerald-200 focus:border-emerald-400 md:col-span-2"
                                />
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={form.city}
                                    onChange={handleChange}
                                    required
                                    className="input input-bordered w-full rounded-lg px-3 py-2 border border-emerald-200 focus:border-emerald-400"
                                />
                                <input
                                    type="text"
                                    name="state"
                                    placeholder="State"
                                    value={form.state}
                                    onChange={handleChange}
                                    required
                                    className="input input-bordered w-full rounded-lg px-3 py-2 border border-emerald-200 focus:border-emerald-400"
                                />
                                <input
                                    type="text"
                                    name="zip"
                                    placeholder="ZIP Code"
                                    value={form.zip}
                                    onChange={handleChange}
                                    required
                                    className="input input-bordered w-full rounded-lg px-3 py-2 border border-emerald-200 focus:border-emerald-400"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Payment Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="card"
                                    placeholder="Card Number"
                                    value={form.card}
                                    onChange={handleChange}
                                    required
                                    maxLength={19}
                                    className="input input-bordered w-full rounded-lg px-3 py-2 border border-emerald-200 focus:border-emerald-400 md:col-span-2"
                                />
                                <input
                                    type="text"
                                    name="expiry"
                                    placeholder="MM/YY"
                                    value={form.expiry}
                                    onChange={handleChange}
                                    required
                                    maxLength={5}
                                    className="input input-bordered w-full rounded-lg px-3 py-2 border border-emerald-200 focus:border-emerald-400"
                                />
                                <input
                                    type="text"
                                    name="cvc"
                                    placeholder="CVC"
                                    value={form.cvc}
                                    onChange={handleChange}
                                    required
                                    maxLength={4}
                                    className="input input-bordered w-full rounded-lg px-3 py-2 border border-emerald-200 focus:border-emerald-400"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg shadow transition-all text-lg flex items-center justify-center gap-2"
                            >
                                <i className="fa fa-shopping-bag"></i>
                                Place Order
                            </button>
                        </form>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full py-12">
                            <i className="fa fa-check-circle text-emerald-500 text-5xl mb-4"></i>
                            <h2 className="text-2xl font-bold text-emerald-700 mb-2">Thank you for your order!</h2>
                            <p className="text-gray-700 mb-4 text-center">
                                Your order has been placed successfully.<br />
                                A confirmation email will be sent to <span className="font-semibold">{form.email}</span>.
                            </p>
                            <a
                                href="/"
                                className="inline-block mt-2 px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition"
                            >
                                Back to Home
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CheckOut;