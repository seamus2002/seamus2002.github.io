import React from "react";

const ContactForm = () => {
    return (
        <>
            <h2 className="title">Contact Form</h2>
            <form>
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
                <button
                    type="button"
                    className="btn btn-outline-secondary disabled"
                >
                    Currently Unavailable
                </button>
                {/* <button type="submit" className="btn btn-primary">
                    Submit
                </button> */}
            </form>
        </>
    );
};

export default ContactForm;
