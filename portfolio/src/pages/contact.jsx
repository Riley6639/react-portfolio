// a function to return the contact page
import '../CSS/contact.css';

export default function Contact() {
    return (
        <div className="container text-center my-5 contact">
            <h1 className="mb-4">
                Contact form
            </h1>
            <form className="mx-auto" style={{ maxWidth: '500px' }}>
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="form-control"
                    />
                    <textarea
                        placeholder="Message"
                        className="form-control"
                        rows="4"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

        </div>
    )
}