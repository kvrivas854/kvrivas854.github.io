'use client'
import Navbar from './dashboard/navbar/page'
import Home from './dashboard/home/page';


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
      </main>
    </div>

  )
}
