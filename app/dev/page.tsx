import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar />
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
      <Footer />
    </div>
  )
}
