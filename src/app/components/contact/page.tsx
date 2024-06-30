'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import "./style.css"

export default function Contact()
{
    const pathname = usePathname()
    return (
        <div className="m-20">
            <div className="text-center text-2xl semi-bold green-light">
                <span className="number green-base text-lg roboto">04.</span>Contact</div>
            <p className="flex-column text-lg green-light box-sizing">
                I&apos;m currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
             </p>
            <button className="spacing text-md green-base hover green-button roboto">
                <Link className={`link ${pathname === '/' ? 'nav-link active' : 'nav-link'}`} href="/contact">
                    Say Hello!
                </Link>
            </button>
        </div>
    )
}