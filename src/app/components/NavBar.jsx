import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <ul className='flex justify-center gap-10 py-5'>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href={"/services"}>Services</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;