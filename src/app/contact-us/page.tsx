"use client"
import React, { useState } from 'react';
import {Button} from '@/components/ui/button';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    phone: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData); // Handle form submission
  };

  return (
<div className="grid grid-cols-2 gap-10 px-40 py-20 h-[456px]">
  {/* left side - form */}
  <div className="flex flex-col">
    <h1 className="text-3xl font-bold text-primary mb-2">Get In Touch</h1>
    <p className="text-sm text-gray-600 mb-6">
      At Vision5 Tech, we help businesses cut costs and scale faster with expert offshore development teams and tailored technology solutions.
    </p>

    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-6 gap-y-4 flex-1">
     
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          First Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          placeholder="Jane"
          className="mt-1 w-full px-3 py-2 bg-gray-100 placeholder-gray-400 rounded-lg focus:outline-none"
        />
      </div>

      
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
          Last Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          placeholder="Doe"
          className="mt-1 w-full px-3 py-2 bg-gray-100 placeholder-gray-400 rounded-lg focus:outline-none"
        />
      </div>

      
      <div className="col-span-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="jane@gmail.com"
          className="mt-1 w-full px-3 py-2 bg-gray-100 placeholder-gray-400 rounded-lg focus:outline-none"
        />
      </div>

      
      <div className="col-span-2">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <div className="mt-1 flex rounded-lg overflow-hidden bg-gray-100">
          <span className="flex items-center px-3 text-gray-500 border-r border-gray-200">
            🇪🇹 +251
          </span>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="913884176"
            className="flex-1 px-3 py-2 bg-gray-100 placeholder-gray-400 focus:outline-none"
          />
        </div>
      </div>

      
      <div className="col-span-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Type here…"
          className="mt-1 w-full h-32 px-3 py-2 bg-gray-100 placeholder-gray-400 rounded-lg focus:outline-none resize-none"
        />
      </div>

      
      <div className="col-span-2">
        <Button
          type="submit"
          className='py-5 rounded-xl'
          
        >
          Send Us Message
        </Button>
      </div>
    </form>
  </div>

  {/* right side - map */}
  <div className="h-full rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509158!2d144.9537354153153!3d-37.81720997975165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0b7e5a87%3A0x5045675218ceed0!2sRoundhouse%20Park!5e0!3m2!1sen!2sau!4v1630563454179!5m2!1sen!2sau"
      className="w-full h-full"
      style={{ border: 0 }}
      loading="lazy"
    ></iframe>
  </div>
</div>

  );
};

export default ContactUs;