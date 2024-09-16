import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Lenis from 'lenis'
import LandingPage from "../components/LandingPage/LandingPage";

const Layout = () => {
  useEffect(()=>{
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  },[])
  return (
    <div className="">
      <Navbar />
      
      {/* Landing Page Section */}
      <section className="relative"  >
        <LandingPage/>
     
      
      </section>

      {/* About Section */}
      <section style={{ backgroundColor: "#ffd6a5", height: "100vh", padding: "20px" }}>
        <h1>About Me</h1>
        <p>I am a passionate developer with a focus on creating amazing web applications.</p>
      </section>

      {/* Projects Section */}
      <section style={{ backgroundColor: "#fdffb6", height: "100vh", padding: "20px" }}>
        <h1>Projects</h1>
        <p>Here are some of my projects, including web apps, mobile apps, and more.</p>
      </section>

      {/* Resume Section */}
      <section style={{ backgroundColor: "#caffbf", height: "100vh", padding: "20px" }}>
        <h1>Resume</h1>
        <p>Download my resume or view my professional experiences and qualifications.</p>
      </section>

      {/* Education Section */}
      <section style={{ backgroundColor: "#9bf6ff", height: "100vh", padding: "20px" }}>
        <h1>Education</h1>
        <p>I have a degree in Computer Science and have completed various online courses.</p>
      </section>

      {/* Skills Section */}
      <section style={{ backgroundColor: "#a0c4ff", height: "100vh", padding: "20px" }}>
        <h1>Skills</h1>
        <p>My technical skills include React, Angular, Node.js, GraphQL, and more.</p>
      </section>

      {/* Hire Me Section */}
      <section style={{ backgroundColor: "#bdb2ff", height: "100vh", padding: "20px" }}>
        <h1>Hire Me</h1>
        <p>If you are looking for a dedicated developer, feel free to contact me.</p>
      </section>

      {/* Contact Section */}
      <section style={{ backgroundColor: "#ffc6ff", height: "100vh", padding: "20px" }}>
        <h1>Contact</h1>
        <p>You can reach me via email or through my social media platforms.</p>
      </section>

    </div>
  );
}

export default Layout;
