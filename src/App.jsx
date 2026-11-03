import { useState } from 'react'
import './App.css'
import envelope from './assets/images/graphics/envelope.png'
import { Home } from './routes';

function App() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(
    localStorage.getItem('surpriseUnlocked') === 'true'
  )

  // Change this to your desired password
  const correctPassword = 'surprise123'

  const handleUnlock = (e) => {
    e.preventDefault()

    if (password === correctPassword) {
      localStorage.setItem('surpriseUnlocked', 'true')

      setIsUnlocked(true)
      setError('')
    } else {
      setError('Incorrect password. Please try again.')
    }
  }

  if (isUnlocked) {
    return (
      <Home />
    )
  }

  return (
    <>
      <section className="h-[100vh] flex flex-col justify-center items-center">
        <div>
          <h1 className="text-5xl">Surprise</h1>
          <h2 className="text-5xl ms-6">Awaits</h2>
        </div>

        <img src={envelope} alt="Envelope" />

        <form className="flex flex-col items-center" onSubmit={handleUnlock}>
          <div className="w-[300px] mt-4">
            <div className="group border border-primary rounded-lg bg-white transition-all duration-200 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/20">
              <label
                htmlFor="password"
                className="flex items-center gap-2 px-4 pt-3 text-sm font-semibold text-primary transition-colors group-focus-within:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>

                Please input your password
              </label>

              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError('')
                }}
                placeholder="Enter your password"
                className="w-full px-4 pb-3 pt-1 text-sm text-primary bg-transparent outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="btn btn-primary mt-3"
          >
            Unlock for Surprise
          </button>
        </form>

      <div className="fixed bottom-5 w-full text-center flex justify-center items-center gap-2">
        <button type="button" onClick={() => navigator.clipboard.writeText("surprise123")} class="btn bg-secondary text-white !font-normal">
          Copy Password
        </button>
      </div>
      </section>
    </>
  )
}

export default App
