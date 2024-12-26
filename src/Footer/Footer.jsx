import { FaFacebook, FaFigma, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";


const Footer = () => {
    return (
        <div className="w-4/6 mx-auto">
            <footer className="footer  text-base-content p-10">
  <nav>
    <h6 className="footer-title text-2xl"><span className="font-bold text-red-500">A</span>rino</h6>
    <p>Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium.</p>
    <div className="flex gap-3 mt-8">
        <p className=" flex items-center justify-center w-7 h-7 border-2 rounded-full"><FaFacebook /></p>
        <p className=" flex items-center justify-center w-7 h-7 border-2 rounded-full"><RiLinkedinLine /></p>
        <p className="flex items-center justify-center w-7 h-7 border-2 rounded-full"><FaInstagram /></p>
        <p className="flex items-center justify-center w-7 h-7 border-2 rounded-full"><FaXTwitter /></p>
        <p className="flex items-center justify-center w-7 h-7 border-2 rounded-full"><FaYoutube /></p>
        <p className="flex items-center justify-center w-7 h-7 border-2 rounded-full"><FaFigma /></p>
    </div>
    
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Digital Marketing</a>
    <a className="link link-hover">UI/UX Design</a>
    <a className="link link-hover">Technology</a>
    <a className="link link-hover">React JS Development</a>
  </nav>
  <nav>
    <h6 className="footer-title">Contact Us</h6>
    <p>+8800000000000</p>
    <p>yourmail@gmail.com</p>
    <p>50 Wall Street Suite, 44150 Ohio,
    United States</p>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
      <label className="label mt-6">
        <span className="label-text">At vero eos et accusamus et iusto odio
        as part dignissimos ducimus qui blandit.</span>
      </label>
    </fieldset>
  </form>
</footer>
<footer className="footer  text-base-content border-base-300 border-t px-10 "></footer>
<footer className="footer   text-base-content py-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()}  Laralink.</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;