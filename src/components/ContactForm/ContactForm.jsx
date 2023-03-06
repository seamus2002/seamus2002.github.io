import React from "react";

const ContactForm = () => {
    return (
        <>
            <h2 className="title">Contact Form</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                />
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                />
            </div>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Message"
                ></textarea>
            </div>
        </>
    );
};

export default ContactForm;
