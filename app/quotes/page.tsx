import { FormEvent } from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'

export default function Home() {
  const data = await fetch('https://api.vercel.app/blog')

  // async function onSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault()

  //   const formData = new FormData(event.currentTarget)
  //   const response = await fetch('/api/submit', {
  //     method: 'POST',
  //     body: formData,
  //   })

  //   // Handle response if necessary
  //   const data = await response.json()
  //   // ...
  // }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <p></p>
      <form
      // onSubmit={onSubmit}
      >
        <input type="text" name="quote"></input>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  )
}
