import { useEffect } from "react";
import './Preloader.css'
import logoImg from "../../assets/k.png"
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const counter3 = document.querySelector(".counter-3");

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
            const div = document.createElement("div");
            div.className = 'num';
            div.textContent = j;
            counter3.appendChild(div);
        }
    }

    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = "0";
    counter3.appendChild(finalDiv);

    function animate(counter, duration, delay = 0) {
        const numHeight = counter.querySelector(".num").clientHeight;
        const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;

        gsap.to(counter, {
            y: -totalDistance,
            duration: duration,
            delay: delay,
            ease: "power2.inOut",
        });
    }

    animate(counter3, 5);
    animate(document.querySelector(".counter-2"), 6);
    animate(document.querySelector(".counter-1"), 2, 4);

    gsap.to(".digit", {
        top: "-150px",
        stagger: {
            amount: 0.5,
        },
        delay: 6.5,
        duration: 1,
        ease: "power4.inOut",
    });

    gsap.to(".loader-1", {
        width: "100%",
        duration: 7,
        ease: "power2.inOut"
    });

    gsap.to(".loader", {
        background: "none",
        delay: 8,
        duration: 0.1
    });

    gsap.to(".logoImg", {
        scale: 95,
        duration: 1,
        delay: 8,
        rotate: 50,
        ease: 'power2.inOut',
    });

    gsap.to(".logoImg", {
        y: 500,
        x: 1005,
        duration: 1,
        delay: 8,
        ease: "power2.inOut",
        onComplete: function () {
            document.querySelector(".loading-screen").style.display = "none"; 
            document.querySelector(".logoImg").style.display = "none";
            if(onComplete) onComplete();
        }
    });
  }, [onComplete]);

  return (
    <div >
      <div className="website-content absolute w-full h-full  left-0 top-0;"></div>

      <div className="logo  absolute -translate-x-2/4 z-[3] left-2/4 top-[5rem]">
        <img className="logoImg h-60" src={logoImg} alt="Website Logo" />
      </div>

      <div className="loading-screen fixed w-full h-full flex items-center justify-center z-[1] left-0 top-0">
        <div className="loader absolute w-[90%] lg:w-[30rem] h-5 -translate-x-2/4 -translate-y-2/4 flex z-[2] overflow-hidden left-2/4 top-2/4">
          <div className="loader-1 bar h-[60px] w-0"></div>
        </div>

        <div className="counter fixed flex h-[100px] text-[100px] leading-[102px] font-normal text-black right-[50px] bottom-[50px]">
          <div className="counter-1 digit   relative top-[-15px]">
            <div className="num">0</div>
            <div className="num num1offset1 ">1</div>
          </div>
          <div className="counter-2 digit  relative top-[-15px]">
            <div className="num">0</div>
            <div className="num num1offset2">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="num">0</div>
          </div>
          <div className="counter-3 digit relative top-[-15px]">
            <div className="num">0</div>
            <div className="num">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
