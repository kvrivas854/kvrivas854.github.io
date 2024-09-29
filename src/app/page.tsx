'use client'
import Navbar from './dashboard/navbar/page'
import Home from './dashboard/home/page';
import About from './dashboard/about/page'
import Experience from './dashboard/experience/page';
import Project from './dashboard/project/page';
import Contact from './dashboard/contact/page';


export default function Page()
{
  return (
    <div>
      <section className='nav'>
          <Navbar />
      </section>
      <main className="m-40">
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
    </div>

  )
}
