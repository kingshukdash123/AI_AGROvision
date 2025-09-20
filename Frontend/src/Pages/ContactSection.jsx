import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100 py-20 px-6 sm:px-10 lg:px-24" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-700 text-center">Contact Us</h2>
        <p className="text-gray-600 text-center mt-3">
          Have questions, ideas or want to work with us? Let’s talk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-green-600 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold text-green-700">Our Office</h4>
                <p className="text-gray-700">
                  123 Creative Street, Innovation Hub, Mumbai, MH 400001
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhone className="text-green-600 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold text-green-700">Phone</h4>
                <p className="text-gray-700">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-green-600 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold text-green-700">Email</h4>
                <p className="text-gray-700">support@demoagency.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow-md rounded-2xl p-8 space-y-5 border border-green-200">
            <div>
              <label className="block text-green-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full mt-2 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-green-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-2 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-green-700 font-medium">Subject</label>
              <input
                type="text"
                placeholder="What is this about?"
                className="w-full mt-2 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-green-700 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full mt-2 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
