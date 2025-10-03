"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-4 space-x-4 rounded-lg">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/team">Team</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/faq">FAQ</Link>
      <Link href="/careers">Careers</Link>
      <Link href="/testimonials">Testimonials</Link>
      <Link href="/pricing">Pricing</Link>
    </nav>
  );
};

export default Navbar;
