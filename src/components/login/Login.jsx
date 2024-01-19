import Header from '../Header'
import Input from '../inputs/Input'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'

function Login() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [errorMsg, setErrorMsg] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(false)

  function login() {
    if (!values.email || !values.password) {
      setErrorMsg('Please fill all the inputs')
      return
    }
    setErrorMsg('')
    setBtnDisabled(true)
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async () => {
        setBtnDisabled(false)
        navigate('/')
      })
      .catch((err) => {
        setBtnDisabled(false)
        setErrorMsg(err.message)
      })
  }
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-2 items-center py-8">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            login()
          }}
          className="flex flex-col justify-end"
        >
          <Input
            onChange={(e) => {
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }}
            autoComplete="email"
            type="email"
            label="Email"
            placeholder="Type your email"
          />
          <Input
            onChange={(e) => {
              setValues((prev) => ({ ...prev, password: e.target.value }))
            }}
            type="password"
            label="Password"
            placeholder="Type your password"
            autoComplete="current-password"
          />
          <div className="flex flex-col justify-center mt-4">
            <button
              className="text-center text-xl bg-green-600 text-white px-6 py-2 rounded-2xl cursor-pointer hover:bg-green-500 mx-auto"
              type="submit"
              disabled={btnDisabled}
            >
              Login
            </button>
            <span className='text-center'>
              or{' '}
              <Link
                to={'/signup'}
                className="cursor-pointer hover:underline text-green-600"
              >
                create an account
              </Link>
            </span>
            <span className='text-center text-red-700'>{errorMsg}</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
