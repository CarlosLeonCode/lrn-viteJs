// libs
import { Link } from "react-router-dom"
import { useRef, useContext } from "react"
import { AppCartContext } from "../../Context"


const SignUp = () => {
  const form = useRef(null)
  const { createAccount } = useContext(AppCartContext)

  const handleAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    createAccount(data)
  }

  return(
    <form ref={form} className="flex flex-col gap-4 w-80">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-light text-sm">Your name:</label>
        <input 
          type="text" 
          id="name"
          name="name"
          placeholder="Charlie"
          className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-light text-sm">Your email:</label>
        <input 
          type="email" 
          id="email"
          name="email"
          placeholder="some@example.com"
          className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-light text-sm">Your password:</label>
        <input 
          type="password" 
          id="password"
          name="password"
          placeholder="******"
          className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
        />
      </div>
      <Link to="/">
        <button 
          className="bg-black text-white w-full rounded-lg py-3"
          onClick={handleAccount}
        >
          Create
        </button>
      </Link>
    </form>
  )
}

export default SignUp
