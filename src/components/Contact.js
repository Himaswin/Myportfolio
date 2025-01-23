// components/Contact.jsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    message: '',
    isError: false
  });

  // Initialize EmailJS
  emailjs.init("SprTXSJ_03Z3ERoE8"); // Replace with your public key

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', isError: false });

    try {
      const result = await emailjs.sendForm(
        'service_yia1t6h', // Replace with your service ID
        'template_y9lrm89', // Replace with your template ID
        form.current
      );

      console.log(result.text);
      setSubmitStatus({
        message: 'Message sent successfully! I will get back to you soon.',
        isError: false
      });
      form.current.reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        message: 'Failed to send message. Please try again.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a question, 
            or just want to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-400/10 rounded-full flex items-center justify-center">
                <FiMail className="text-primary-400 text-xl" />
              </div>
              <div>
                <h3 className="text-gray-100 font-medium">Email</h3>
                <p className="text-gray-400">himaswinpolaboyena@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-400/10 rounded-full flex items-center justify-center">
                <FiPhone className="text-primary-400 text-xl" />
              </div>
              <div>
                <h3 className="text-gray-100 font-medium">Phone</h3>
                <p className="text-gray-400">+1 647 896 7820</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="from_name" className="block text-gray-100 mb-2">
                Name
              </label>
              <input
                type="text"
                name="from_name" // This should match your EmailJS template parameter
                id="from_name"
                required
                className="w-full px-4 py-2 bg-dark rounded border border-gray-700 
                         focus:outline-none focus:border-primary-400 text-gray-100"
              />
            </div>

            <div>
              <label htmlFor="reply_to" className="block text-gray-100 mb-2">
                Email
              </label>
              <input
                type="email"
                name="reply_to" // This should match your EmailJS template parameter
                id="reply_to"
                required
                className="w-full px-4 py-2 bg-dark rounded border border-gray-700 
                         focus:outline-none focus:border-primary-400 text-gray-100"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-100 mb-2">
                Message
              </label>
              <textarea
                name="message" // This should match your EmailJS template parameter
                id="message"
                rows="4"
                required
                className="w-full px-4 py-2 bg-dark rounded border border-gray-700 
                         focus:outline-none focus:border-primary-400 text-gray-100"
              ></textarea>
            </div>

            {submitStatus.message && (
              <div 
                className={`p-4 rounded ${
                  submitStatus.isError 
                    ? 'bg-red-400/10 text-red-400' 
                    : 'bg-green-400/10 text-green-400'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 bg-primary-400 text-dark font-medium rounded
                       hover:bg-primary-500 transition-colors duration-300 flex items-center 
                       justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <FiSend className={isSubmitting ? 'animate-pulse' : ''} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;