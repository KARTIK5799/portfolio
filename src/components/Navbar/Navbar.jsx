import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Logoimg from "../../assets/logo.webp";
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {

    gsap.fromTo(
      ".web-logo",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    
    gsap.fromTo(
      ".register-link",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  useEffect(() => {

      gsap.fromTo(
        ".menuItemsPc a",
        { opacity: 0, y: -20 },
        { 
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1, 
          ease: "power2.out"
        }
      );
 
  },[]);

  return (
    <nav className='w-screen h-[10%] flex text-white fixed justify-between items-center px-10 py-5'>
      <a className="web-logo flex items-end">
        <img src={Logoimg} alt="Logo" className="h-12" />
        <h1 className="text-2xl">artik</h1>
      </a>
      <div className="hidden menuItemsPc md:flex items-center gap-5 text-[#edeeff]">
        <a href="#home" className="ml-4 hover:text-white">Home</a>
        <a href="#about" className="ml-4 hover:text-white">About</a>
        <a href="#projects" className="ml-4 hover:text-white">Projects</a>
        <a href="#resume" className="ml-4 hover:text-white">Resume</a>
        <a href="#blog" className="ml-4 hover:text-white">Blog</a>
        <a href="#contact" className="ml-4 hover:text-white">Contact</a>
      </div>
      <a className="register-link cursor-pointer hidden md:block" href="https://www.google.com">
        Hire <span className="register-arrow material-symbols-outlined">arrow_outward</span>
      </a>
      <div className="md:hidden flex items-center">
        <span
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="material-symbols-outlined cursor-pointer text-white text-4xl"
        >
          menu
        </span>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute right-0 top-0 h-screen flex justify-start flex-col items-center p-4 w-1/2 bg-white rounded-l-lg z-50">
          <span
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="material-symbols-outlined absolute top-0 left-0 cursor-pointer text-[#020529] text-4xl"
          >
            close
          </span>
          <div className="menuItems mt-12 flex flex-col gap-5">
            {['Home', 'About', 'Projects', 'Resume', 'Blog', 'Contact'].map((item, index) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={item}
                className="text-[#020529] cursor-pointer mb-4 hover:bg-[#020529] hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
