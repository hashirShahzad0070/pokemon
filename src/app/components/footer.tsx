"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-4  z-0">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hashir Shahzad. All Rights Reserved.
        </p>
        <div className="mt-2">
          <a href="/privacy" className="text-gray-400 hover:text-white text-sm">
            Privacy Policy
          </a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="/terms" className="text-gray-400 hover:text-white text-sm">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
