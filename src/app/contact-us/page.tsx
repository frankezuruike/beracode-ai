import React from 'react';

const ContactUsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <div className="flex flex-col gap-6 text-gray-700 leading-relaxed">
        <p>
          We would love to hear from you! Whether you have a question about our services, need support, or just want to explore how AI can transform your business, our team is ready to help.
        </p>
        <p>
          Please reach out to us via email or phone, or fill out the contact form below.
        </p>
        
        {/* Placeholder for Contact Information */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h2>
          <p>Email: <a href="mailto:info@beracodeai.com" className="text-primary hover:underline">info@beracodeai.com</a></p>
          <p>Phone: <a href="tel:+1-123-456-7890" className="text-primary hover:underline">+1-123-456-7890</a></p>
        </div>

      </div>
    </div>
  );
};

export default ContactUsPage; 