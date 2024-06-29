'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import "./style.css"

export default function Home() {
    const pathname = usePathname()
    return (
        <div className="m-20">
            <div className="text-md green-base roboto">
                Hi, my name is
            </div>
            <div className="text-4xl extra-bold green-light spacing">Kelly Rivas</div>
            <p className="text-4xl extra-bold gray spacing">I build digital products.</p>
            <p className="text-lg green-light description-spacing">I&apos;m a software engineer based in Charlotte, NC specializing in building websites, applications, and everything in between.</p>
            <button className="spacing text-md green-base hover green-button roboto">
                <Link className={`link ${pathname === '/contact' ? 'nav-link active' : 'nav-link'}`} href="/contact">Get in touch</Link>
            </button>
        </div>
    )
}