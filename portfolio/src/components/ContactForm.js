import React, { useState } from 'react';

function ContactForm () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className="contactForm">
            <h1>Contact Form</h1>
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={handleChange} name="name" value={formData.name} />
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={handleChange} name="email" value={formData.email} />
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" rows="3" placeholder="Enter message" onChange={handleChange} name="message" value={formData.message}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;