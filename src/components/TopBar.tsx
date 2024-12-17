"use client";
import Image from "next/image";
import Link from "next/link";
import HEADER_LOGO from '../assets/header-logo.svg';
import { MedText } from "./Typography";
import { RiArrowRightLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 p-8 flex w-screen z-50 justify-between">
        <div className="absolute bottom-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-dark to-transparent" />
        <Link href="/">
          <Image
            src={HEADER_LOGO}
            alt="Paragon Fellowship"
            className="h-16 w-40 md:h-20 md:w-60 object-contain"
          />
        </Link>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full right-0 w-full md:w-auto md:static md:flex md:space-x-8 md:items-center md:justify-end`}
        >
          {/* Mobile menu background */}
          <div className={`${
            isMenuOpen ? "block bg-white shadow-lg rounded-b-lg" : ""
          } md:bg-transparent md:shadow-none`}>
            <div className="p-6 space-y-6 md:space-y-0 md:p-0 md:flex md:items-center md:space-x-8 uppercase">
              {/* Mobile Menu Items - Centered */}
              <div className="md:hidden text-center space-y-6">
                <Link href="/">
                  <MedText className="text-dark text-xl">About</MedText>
                </Link>
                <div>
                  <Link href="/team">
                    <MedText className="text-dark text-xl">Team</MedText>
                  </Link>
                </div>
                <div>
                  <Link href="/team/speakers">
                    <MedText className="text-dark text-xl">Past Speakers</MedText>
                  </Link>
                </div>
                <div>
                  <Link href="/students">
                    <MedText className="text-dark text-xl">For Students</MedText>
                  </Link>
                </div>
                <div>
                  <Link href="/governments">
                    <MedText className="text-dark text-xl">For Governments</MedText>
                  </Link>
                </div>
                <div>
                  <Link href="/projects">
                    <MedText className="text-dark text-xl">Projects</MedText>
                  </Link>
                </div>
                <div>
                  <Link href="mailto:paragonfellowship@gmail.com">
                    <MedText className="text-dark text-xl">Contact</MedText>
                  </Link>
                </div>
              </div>

              {/* Desktop Menu Items */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                <Link href="/">
                  <MedText className="text-white">About</MedText>
                </Link>
                <div className="relative group">
                  <Link href="/team">
                    <MedText className="text-white">Team</MedText>
                  </Link>
                  <div className="absolute hidden group-hover:block pt-2 w-48 right-0">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <Link
                        href="/team"
                        className="block px-4 py-2 text-dark hover:bg-gray-100 flex items-center"
                      >
                        <RiArrowRightLine className="mr-2" />
                        <span>Organizing Team</span>
                      </Link>
                      <Link
                        href="/team/speakers"
                        className="block px-4 py-2 text-dark hover:bg-gray-100 flex items-center"
                      >
                        <RiArrowRightLine className="mr-2" />
                        <span>Past Speakers</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <Link href="/students">
                  <MedText className="text-white">Students</MedText>
                </Link>
                <Link href="/governments">
                  <MedText className="text-white">Governments</MedText>
                </Link>
                <Link href="/projects">
                  <MedText className="text-white">Projects</MedText>
                </Link>
                <Link href="mailto:paragonfellowship@gmail.com">
                  <MedText className="text-white">Contact</MedText>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}