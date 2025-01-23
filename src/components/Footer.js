// components/Footer.jsx
import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-dark-light py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {[
            { icon: <FiGithub />, url: "https://github.com/yourusername" },
            { icon: <FiLinkedin />, url: "https://linkedin.com/in/yourusername" },
            { icon: <FiTwitter />, url: "https://twitter.com/yourusername" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;