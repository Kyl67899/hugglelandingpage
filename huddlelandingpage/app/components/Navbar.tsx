import Image from 'next/image';
import react from 'react'

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Image width={50} height={50} src="./images/logo.svg" alt="huddle logo" />
        </div>
        <button className="nav--btn">
          <a href="#">
            Try it for Free
          </a>
        </button>
      </nav>
    </header>
  );
}