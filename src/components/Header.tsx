"use client";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="px-6 py-2 font-firago text-[#252324]">
            <nav className="flex items-center justify-between h-[40px]">
                {/* Logo */}
                <img src="/Logo.svg" alt="Logo" className="h-6" />

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 text-[16px] font-bold">
                    <a href="#main" className="px-3 py-2 rounded-full bg-[#F0EDFF] text-[#6A04FE]">Home</a>
                    <a href="#services" className="hover:text-[#6A04FE]">Services</a>
                    <a href="#destinations" className="hover:text-[#6A04FE]">Destinations</a>
                    <a href="#whyUs" className="hover:text-[#6A04FE]">Why Us</a>
                    <a href="#contact" className="hover:text-[#6A04FE]">Contact</a>
                </div>

                {/* Language Switch (Always Visible) */}
                <button className="h-[44px] w-[86px] border border-[#6A04FE] text-[#6A04FE] rounded-full flex items-center justify-center text-[16px] font-medium">
                    ENG
                </button>


                {/* Hamburger Button (Mobile Only) */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 ml-4"
                >
                    <div className="w-5 h-[2px] bg-[#252324] mb-[4px]" />
                    <div className="w-5 h-[2px] bg-[#252324] mb-[4px]" />
                    <div className="w-5 h-[2px] bg-[#252324]" />
                </button>
            </nav>

            {/* Mobile Menu (Dropdown) */}
            {menuOpen && (
                <div className="md:hidden flex flex-col gap-4 mt-4 text-[24px] font-medium">
                    <a href="#" className="px-3 py-1 rounded-full bg-[#F0EDFF] text-[#6A04FE]">მთავარი</a>
                    <a href="#" className="hover:text-[#6A04FE]">სერვისები</a>
                    <a href="#" className="hover:text-[#6A04FE]">მისამართები</a>
                    <a href="#" className="hover:text-[#6A04FE]">რატომ ჩვენ</a>
                    <a href="#" className="hover:text-[#6A04FE]">კონტაქტი</a>
                </div>
            )}
        </header>
    );
}
