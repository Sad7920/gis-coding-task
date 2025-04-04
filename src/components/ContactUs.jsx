import React, { useState } from 'react'
import Button from './Button';

const ContactUs = () => {

    // Form state to track user input
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Handle input changes and update form state
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <div className='w-full px-6 pb-10 pt-4'>
            <div className='max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-4'>

                {/* LEFT SIDE: Text Info */}
                <div className='w-full flex flex-col gap-4 text-center md:text-start max-w-xl mx-auto'>
                    <h4 className='uppercase text-sm text-secondary font-semibold'>Contact us</h4>
                    <h1 className='text-5xl md:text-7xl font-semibold '>
                        Get In <span className='text-secondary'>Touch</span> With Us
                    </h1>
                    <p className='text-sm text-foreground/70'>
                        Have questions about our AI-powered betting insights? Need help getting started or want to learn more about how our predictions work? Drop us a message—we’re here to help you make smarter bets with cutting-edge technology.
                    </p>
                </div>

                {/* RIGHT SIDE: Contact Form */}
                <div className='py-4'>
                    <form onSubmit={handleSubmit} className="space-y-6 md:pl-6 max-w-md md:max-w-full mx-auto">

                        {/* Full Name Input */}
                        <div>
                            <label className="block text-gray-300 text-sm font-medium">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full mt-2 p-3 rounded-lg bg-[#161616] text-white border border-[#2a2a2a] focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-gray-300 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full mt-2 p-3 rounded-lg bg-[#161616] text-white border border-[#2a2a2a] focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                        </div>

                        {/* Message Input */}
                        <div>
                            <label className="block text-gray-300 text-sm font-medium">Message</label>
                            <textarea
                                name="message"
                                placeholder="Leave us a message..."
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full mt-2 p-3 h-20 rounded-lg bg-[#161616] text-white border border-[#2a2a2a] focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className='w-full px-4'>
                            <Button key={1} className="text-sm h-10 w-full" >Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
