function ContactMe () {
    return (
        <div className="contact">
        <h1>Contact</h1>
        <div className="contact-1">
            <h4>Email:</h4>
            <p>
                fakeEmail@gmail.com
            </p>
        </div>
        <div className="contact-2">
            <h4>Phone:</h4>
            <p>
                1-800-fakeNumber
            </p>
        </div>
        {/* <div className="contact-3">
            <h4>Contact Form</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="3" placeholder="Enter message"></textarea>
                </div>
            </form>
        </div> */}
        </div>
    )
}

export default ContactMe;