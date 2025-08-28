import Image from 'next/image'
import Navbar from '../dashboard/navbar/page'

export default function About() {
  return (
    <div>
      <section className='nav'>
        <Navbar />
      </section>
      <div className="m-40">
        <div className="text-2xl semi-bold green-light">
          <h1 className="text-2xl semi-bold green-light"><span className="number green-base text-lg roboto">01.</span> About</h1>
        </div>
        <div className="flex">
          <div className="col">
            <p className="text-lg green-light semi-bold">Hello! I&apos;m Kelly, a software engineer based in Charlotte, NC.</p>
            <p className="text-lg green-light semi-bold">I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I prefer to keep learning, continue challenging myself, and do interesting things that matter.</p>
            <p className="text-lg green-light semi-bold">Shortly after graduating from the
              <span className="green-base"> University of North Carolina at Charlotte Coding Bootcamp</span>
              <span>,  I joined the engineering team at </span>
              <span className="green-base">Progress</span>
              <span>. I continued my journey in software development by working at large financial corporations such as </span>
              <span className="green-base">Bank of America</span>
              <span> and Enterprises such as </span>
              <span className="green-base">Ferguson</span>
              <span>.</span>
            </p>
            <p className="text-lg green-light semi-bold">
              <span>To stay connected in the tech community in Charlotte, I participate as a Chapter Leader</span>
              <span className="green-base"> for Latinas In Tech - NC Chapter</span>
              <span>.</span>
            </p>
            <p className="text-lg green-light semi-bold">Here are a few technologies I&apos;ve been working with recently:</p>
            <div className="flex green-light">
              <div className="col">
                <p className="list-item">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z" />
                  </svg>
                  React
                </p>
                <p className="list-item">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z" />
                  </svg>
                  Redux
                </p>
                <p className="list-item">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z" />
                  </svg>
                  HTML5 + CSS3
                </p>
                <p className="list-item">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z" />
                  </svg>
                  JSON + RESTful API&apos;s
                </p>
                <p className="list-item">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z" />
                  </svg>
                  JavaScript (ES6)
                </p>
                <p className="list-item">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z" />
                  </svg>
                  Jest
                </p>
                <p className="list-item">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z" />
                  </svg>
                  TailwindCSS
                </p>
              </div>
              <div className="col">
                <p className="list-item">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z" />
                  </svg>
                  Node.js
                </p>
                <p className="list-item">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z" />
                  </svg>
                  Apollo GraphQL
                </p>
                <p className="list-item">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z" />
                  </svg>
                  TypeScript
                </p>
                <p className="list-item">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z" />
                  </svg>
                  GitHub + Git deployment
                </p>
                <p className="list-item">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z" />
                  </svg>
                  MongoDB
                </p>
                <p className="list-item">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z" />
                  </svg>
                  Docker
                </p>
                <p className="list-item">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z" />
                  </svg>
                  Story Book
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <Image
              src="/image_3.png"
              className="photo-card"
              alt={"img"}
              width={500}
              height={500} 
            />
          </div>
        </div>
      </div>
    </div> 
  )
}