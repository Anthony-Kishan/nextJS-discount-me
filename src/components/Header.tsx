"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Search,
    Heart,
    ShoppingCart,
    User,
    ChevronDown,
    Menu,
    X,
} from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Automatically close the mobile menu when the screen size increases
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Search query:", searchQuery);
    };

    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image src="/logo.png" alt="Logo" width={120} height={40} className="w-auto h-auto" />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-gray-700" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-700" />
                        )}
                    </button>

                    {/* Search Bar - Hidden on mobile */}
                    <div className="hidden md:flex flex-1 max-w-xl">
                        <form onSubmit={handleSearch} className="flex w-full">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-400 text-black" />
                                <input
                                    type="search"
                                    placeholder="Search"
                                    className="w-full rounded-l-3xl border border-r-0 border-300 pl-10 pr-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <Button type="submit" className="rounded-r-3xl rounded-l-none">
                                Search
                            </Button>
                        </form>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        <div
                            className="relative flex items-center gap-1 cursor-pointer"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <span className="text-gray-700">All Category</span>
                            <ChevronDown className="h-4 w-4 text-gray-500" />
                            {isDropdownOpen && (
                                <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 shadow-lg z-10">
                                    <ul>
                                        <li className="p-2 hover:bg-gray-100">
                                            <Link href="/category1">Category 1</Link>
                                        </li>
                                        <li className="p-2 hover:bg-gray-100">
                                            <Link href="/category2">Category 2</Link>
                                        </li>
                                        <li className="p-2 hover:bg-gray-100">
                                            <Link href="/category3">Category 3</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <Link href="/about" className="text-gray-700 hover:text-gray-900">
                            About Us
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                            Contact Us
                        </Link>
                    </nav>

                    {/* Icons */}
                    <div className="hidden md:flex items-center gap-4 px-2">
                        <Link href="/wishlist" className="text-gray-700 hover:text-gray-900">
                            <Heart className="h-6 w-6" />
                        </Link>
                        <Link href="/cart" className="text-gray-700 hover:text-gray-900">
                            <ShoppingCart className="h-6 w-6" />
                        </Link>
                        <Link href="/signin" className="text-gray-700 hover:text-gray-900">
                            <User className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg overflow-hidden transition-all duration-700 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} z-[9999]`}>
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-700 hover:text-gray-900"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <div className="p-4">
                    <form onSubmit={handleSearch} className="w-full mb-4 flex gap-2">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <input
                                type="search"
                                placeholder="Search"
                                className="w-full rounded-3xl border border-gray-300 pl-10 pr-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button type="submit" className="w-auto rounded-3xl">
                            Search
                        </Button>
                    </form>
                    <nav className="flex flex-col gap-4">
                        <Link href="/about" className="text-gray-700">
                            About Us
                        </Link>
                        <Link href="/contact" className="text-gray-700">
                            Contact Us
                        </Link>
                        <div className="flex justify-around pt-4 border-t border-gray-200">
                            <Link href="/wishlist" className="text-gray-700">
                                <Heart className="h-6 w-6" />
                            </Link>
                            <Link href="/cart" className="text-gray-700">
                                <ShoppingCart className="h-6 w-6" />
                            </Link>
                            <Link href="/signin" className="text-gray-700">
                                <User className="h-6 w-6" />
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
