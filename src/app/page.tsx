'use client'
import Navbar from './components/navbar/page'
import Home from './components/home/page';
import About from './components/about/page'
import Experience from './components/experience/page';
import Project from './components/project/page';
import Contact from './components/contact/page';


export default function Page()
{
  return (
    <main className="m-20">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>

  )
}
