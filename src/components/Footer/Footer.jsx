import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral">
        <div className="text-center">
            <h1 className="text-4xl font-bold">Gadgets Heaven</h1>
            <p >Leading tech product suppliers</p>
        </div>
        <div className="border-t mx-11 bg-slate-300"></div>
      <footer className="footer  text-neutral-content p-10">
      
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
