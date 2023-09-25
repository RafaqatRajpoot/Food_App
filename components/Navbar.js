'use client';
import { MdFastfood } from 'react-icons/md';
import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    const handleScroll = () => {
        const homeElement = document.getElementById("home");
        const aboutElement = document.getElementById("about");
        const contactElement = document.getElementById("contact");
        const menuElement = document.getElementById("menu");
        const customersElement = document.getElementById("customers");
        const bookingElement = document.getElementById("booking");

        const scrollY = window.scrollY;
        const vh10 = window.innerHeight * 0.1;
        const vh15 = window.innerHeight * 0.25;
        if (scrollY > homeElement.offsetTop - vh10 && scrollY < menuElement.offsetTop - vh10) {
            setActiveSection('home');
        } else if (scrollY > menuElement.offsetTop - vh10 && scrollY < bookingElement.offsetTop - vh10) {
            setActiveSection('menu');
        } else if (scrollY > bookingElement.offsetTop - vh10 && scrollY < customersElement.offsetTop - vh10) {
            setActiveSection('booking');
        } else if (scrollY > customersElement.offsetTop - vh10 && scrollY < aboutElement.offsetTop - vh10) {
            setActiveSection('customers');
        } else if (scrollY > aboutElement.offsetTop - vh10 && scrollY < contactElement.offsetTop - vh10) {
            setActiveSection('about');
        } else if (scrollY > contactElement.offsetTop - vh15) {
            setActiveSection('contact');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToHome = () => {
        const aboutElement = document.getElementById("home");
        if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: "smooth" });
            setActiveSection('home');
        }
    };
    const scrollToAbout = () => {
        const aboutElement = document.getElementById("about");
        if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: "smooth" });
            setActiveSection('about');
        }
    };
    const scrollToContact = () => {
        const aboutElement = document.getElementById("contact");
        if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: "smooth" });
            setActiveSection('contact');
        }
    };
    const scrollToMenu = () => {
        const aboutElement = document.getElementById("menu");
        if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: "smooth" });
            setActiveSection('menu');
        }
    };
    const scrollToCustomers = () => {
        const aboutElement = document.getElementById("customers");
        if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: "smooth" });
            setActiveSection('customers');
        }

    };
    const scrollToBooking = () => {
        const aboutElement = document.getElementById("booking");
        if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: "smooth" });
            setActiveSection('booking');
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white w-full h-[10vh] border flex px-44 justify-between items-center">
            <div className="flex gap-3">
                <MdFastfood className="text-custom-orange w-[50px] h-[50px]" />
                <p className="text-4xl font-extrabold">restaurant</p>
            </div>
            <div className="text-base flex gap-12">
                <a className={`cursor-pointer ${activeSection === "home" ? "text-custom-light-orange" : ""}`} onClick={scrollToHome}>Home</a>
                <a className={`cursor-pointer ${activeSection === "menu" ? "text-custom-light-orange" : ""}`} onClick={scrollToMenu}>Menu</a>
                <a className={`cursor-pointer ${activeSection === "booking" ? "text-custom-light-orange" : ""}`} onClick={scrollToBooking}>Booking</a>
                <a className={`cursor-pointer ${activeSection === "customers" ? "text-custom-light-orange" : ""}`} onClick={scrollToCustomers}>Customers</a>
                <a className={`cursor-pointer ${activeSection === "about" ? "text-custom-light-orange" : ""}`} onClick={scrollToAbout}>About</a>
                <a className={`cursor-pointer ${activeSection === "contact" ? "text-custom-light-orange" : ""}`} onClick={scrollToContact}>Contact</a>
            </div>
            <div>
                <button className="px-8 py-4 w-fit text-white text-lg bg-custom-orange rounded-br-2xl rounded-tl-2xl hover:bg-custom-light-orange">
                    Book a table
                </button>
            </div>
        </nav>
    )
}

export default Navbar;
