import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-gray-600 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
          <ul className="flex space-x-4 text-sm">
            <li>
              <a href="/privacy" className="hover:text-gray-900">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gray-900">Terms of Service</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-900">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
