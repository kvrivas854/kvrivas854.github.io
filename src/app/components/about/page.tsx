import Image from 'next/image'

export default function About() {
  return (
    <div className="m-20">
      <div className="text-2xl semi-bold green-light">
        <h1 className="text-2xl semi-bold green-light"><span className="number green-base text-lg roboto">01.</span> About</h1>
      </div>
      <div className="flex">
        <div className="col">
          <p className="text-lg green-light semi-bold">Hello! I'm Kelly, a software engineer based in Charlotte, NC.</p>
          <p className="text-lg green-light semi-bold">I enjoy creating things that live on the interenet, whether that be wesbites, applications, or anything in between. I prefer to keep learning, continue challenging myself, and do interesing things that matter.</p>
          <p className="text-lg green-light semi-bold">Shortly after graduating from 
          <span className="green-base">University of North Carolina at Charlotte Coding Bootcamp</span>, I joined the engineering team at  <span className="green-base">Progress</span>.</p>
          <p className="text-lg green-light semi-bold">Here are a few technologies I've been working with recently:</p>
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
                HTML + CSS3
              </p>
              <p className="list-item">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                  <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z" />
                </svg>
                JSON + RESTful API's
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
  )
}