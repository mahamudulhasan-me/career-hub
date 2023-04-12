import React from "react";
import socialIcon from "../../assets/Icons/social.png";
const Footer = () => {
  return (
    <footer className="px-[10%] mt-20 py-6 bg-slate-800 text-white">
      <div className="grid md:grid-cols-6 my-6 md:space-y-0 space-y-5 ">
        <div className="col-span-2">
          <img src="/logo.svg" alt="" className="w-44 mb-5" />
          <p className="w-[90%] mb-4">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <img src={socialIcon} alt="" />
        </div>
        <div>
          <h3>Company</h3>
          <div className="space-y-2">
            <p>About Us</p>
            <p>Work</p>
            <p>Latest News</p>
            <p>Career</p>
          </div>
        </div>
        <div>
          <h3>Product</h3>
          <div className="space-y-2">
            <p>Prototype</p>
            <p>Plans & Pricing</p>
            <p>Customers</p>
            <p>Integrations</p>
          </div>
        </div>
        <div>
          <h3>Support</h3>
          <div className="space-y-2">
            <p>Help Desk</p>
            <p>Sales</p>
            <p>Become a Partner</p>
            <p>Developers</p>
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <div className="space-y-2">
            <p>524 Broadway , NYC</p>
            <p>+1 777 - 978 - 5570</p>
          </div>
        </div>
      </div>
      <div className="border-t  border-slate-400 flex justify-between text-xs pt-3">
        <p>Ⓒ 2023 Dreams LMS. All Rights Reserved</p>
        <p>Powered by CareerHub</p>
      </div>
    </footer>
  );
};

export default Footer;
