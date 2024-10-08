'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import "./style.css"


export default function Navbar() {
    const pathname = usePathname()

    return (
        <div className="wrapper navigation-bar">
            <div className="flex col flex-start">
                <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="30" fill="none" viewBox="0 0 45 30">
                    <path fill="#9899A8" d="M7.302 0v25.972c0 1.054.176 1.77.527 2.146.352.376.954.565 1.807.565v.79c-.426-.025-1.079-.05-1.957-.075-.878-.05-1.77-.075-2.673-.075-.928 0-1.882.025-2.86.075-.954.025-1.67.05-2.146.075v-.79c.928 0 1.58-.189 1.957-.565.402-.377.603-1.092.603-2.146V4.517c0-1.13-.189-1.957-.565-2.484C1.644 1.48.979 1.205 0 1.205v-.79c.803.074 1.58.112 2.334.112.953 0 1.844-.038 2.672-.113C5.834.314 6.6.176 7.302 0zm12.196 10.012v.753c-.753.15-1.48.44-2.183.866-.703.402-1.393.966-2.07 1.694l-3.727 3.877.414-.828 6.625 10.351c.351.502.678.929.979 1.28.326.326.727.552 1.204.678v.79c-.326-.025-.84-.05-1.543-.075-.703-.05-1.405-.075-2.108-.075-.853 0-1.731.025-2.635.075-.878.025-1.543.05-1.995.075v-.79c.502 0 .84-.113 1.017-.34.2-.25.175-.564-.076-.94l-3.914-6.587c-.352-.552-.69-.904-1.017-1.054-.326-.176-.765-.264-1.317-.264v-.753c.627-.05 1.142-.163 1.543-.338.427-.176.828-.452 1.205-.829l2.823-2.823c.828-.828 1.242-1.53 1.242-2.108.025-.577-.239-1.016-.79-1.317-.528-.326-1.218-.514-2.07-.565v-.753c.677.026 1.43.063 2.258.114.828.025 1.53.037 2.107.037h1.43c.528-.025 1.017-.05 1.469-.075.477-.025.853-.05 1.13-.075zM34.375 9.486c.778 0 1.417.163 1.92.489.526.326.915.74 1.166 1.242.251.502.377 1.029.377 1.581 0 .828-.251 1.518-.753 2.07-.477.552-1.117.828-1.92.828-.753 0-1.368-.2-1.844-.602-.477-.401-.715-.954-.715-1.656 0-.628.15-1.154.451-1.581.326-.427.69-.765 1.092-1.016-.276-.15-.59-.201-.941-.15-.803.074-1.506.426-2.108 1.053-.602.602-1.08 1.33-1.43 2.183-.327.828-.49 1.619-.49 2.372v9.297c0 1.23.314 2.058.941 2.484.628.402 1.543.603 2.748.603v.79c-.577-.025-1.418-.05-2.522-.075-1.079-.05-2.208-.075-3.388-.075-.978 0-1.957.025-2.936.075-.953.025-1.668.05-2.145.075v-.79c.928 0 1.58-.189 1.957-.565.402-.377.602-1.092.602-2.146V14.115c0-1.129-.188-1.957-.564-2.484-.352-.552-1.017-.828-1.995-.828v-.79c.803.075 1.58.113 2.334.113.928 0 1.806-.038 2.634-.114.854-.1 1.631-.238 2.334-.414v3.915c.301-.703.69-1.355 1.167-1.957.502-.602 1.092-1.092 1.77-1.468.702-.402 1.455-.602 2.258-.602zM41.71 24.504c.854 0 1.557.251 2.109.753s.828 1.167.828 1.995c0 .828-.276 1.493-.828 1.995-.552.502-1.255.753-2.108.753-.878 0-1.594-.25-2.146-.753-.527-.502-.79-1.167-.79-1.995 0-.828.263-1.493.79-1.995.552-.502 1.268-.753 2.146-.753z"/>
                </svg> 
            </div>
                <div className="flex col flex-end" >
                    <div>
                        <ul className="nav nav-tabsfinder flex text-sm">
                            <li className="nav-item hover">
                                <Link className={`link ${pathname === '/' ? 'nav-link active' : 'nav-link'}`} href="#about" scroll={true}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item hover">
                                <Link className={`link ${pathname === '/experience' ? 'nav-link active' : 'nav-link'}`} href="#experience" scroll={true}>
                                    Experience
                                </Link>
                            </li>
                            <li className="nav-item hover">
                                <Link className={`link ${pathname === '/project' ? 'nav-link active' : 'nav-link'}`} href="#project" scroll={true}>
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <button className="spacing text-sm green-base hover contact-button roboto">
                        <Link className={`link ${pathname === '/contact' ? 'nav-link active' : 'nav-link'}`} href="#contact" scroll={true}>
                            Contact
                        </Link>
                    </button>
                </div>    
            </div>
        </div>
    )
}