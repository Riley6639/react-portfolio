import { useState } from 'react';
import '../CSS/contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [hoverMessage, setHoverMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        let error = '';

        if (name === 'email' && !validateEmail(value)) {
            error = 'Invalid email address';
        } else if (name === 'phone' && !validatePhone(value)) {
            error = 'Invalid phone number';
        }

        setErrors({ ...errors, [name]: error });
    };

    const handleHover = (message) => {
        setHoverMessage(message);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add any additional form submission logic here
        if (!formData.name) {
            setErrors({ ...errors, name: 'Name is required' });
        }
        if (!formData.email) {
            setErrors({ ...errors, email: 'Email is required' });
        }
        if (!formData.phone) {
            setErrors({ ...errors, phone: 'Phone number is required' });
        }
        else {
            console.log(formData);
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            setErrors({});
            setHoverMessage('');
        }
    };

    return (
        <div className="container text-center my-5 contact">
            <h1 className="mb-4">
                Contact form
            </h1>
            <form className="mx-auto" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        onMouseEnter={() => handleHover("This field is required")}
                        onMouseLeave={() => handleHover('')}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onMouseEnter={() => handleHover("This field is required")}
                        onMouseLeave={() => setHoverMessage('')}
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onMouseEnter={() => handleHover("This field is required")}
                        onMouseLeave={() => setHoverMessage('')}
                    />
                    {errors.phone && <small className="text-danger">{errors.phone}</small>}
                    <textarea
                        name="message"
                        placeholder="Message"
                        className="form-control"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        onMouseEnter={() => handleHover("This field is required")}
                        onMouseLeave={() => setHoverMessage('')}
                    />
                </div>
                {hoverMessage && <small className="text-muted">{hoverMessage}</small>}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}
