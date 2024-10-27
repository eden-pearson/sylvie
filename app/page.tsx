import Image from 'next/image'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1 className="text-xl text-pink-400">Sylvie</h1>
          <p className="text-lg text-pink-400">your mental health buddy</p>
        </div>

        <h2>Goals for Sylvie</h2>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">med dose tracker</li>
          <li>scrap book diary</li>
          <li>simple daily mood tracker</li>
          <li>sleep tracker - warning wehn below 7.5h</li>
          <li>daily motival statement</li>
          <li>
            fav section - mental health related books, podcasts, movies etc
          </li>
          <li>notes/tracker for psychiatrist sessions</li>
        </ol>
        <h1>Features to add</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">auth</li>
          <li>llama 3 chatbot</li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
      </footer>
    </div>
  )
}
