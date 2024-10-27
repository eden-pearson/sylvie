import Image from 'next/image'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <p>developed by Eden Pearson @ 2024</p>
      <p>|</p>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://edenpearson.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/edenpearson/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href=" https://www.instagram.com/edenthedeveloper/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  )
}
