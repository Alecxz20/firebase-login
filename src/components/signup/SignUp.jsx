import Header from '../Header'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import Input from '../inputs/Input'

function SignUp() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [errorMsg, setErrorMsg] = useState(null)
  const [btnDisabled, setBtnDisabled] = useState(false)

  function register() {
    if (!values.name || !values.email || !values.password) {
      setErrorMsg('Please fill all the inputs')
    } else {
      setErrorMsg('')
      setBtnDisabled(true)
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(async (res) => {
          setBtnDisabled(false)
          const user = res.user
          await updateProfile(user, { displayName: values.name })
          navigate('/')
        })
        .catch((err) => {
          setBtnDisabled(false)
          setErrorMsg(err.message)
        })
    }
    return
  }

  return (
    <div>
      <Header />
      <div className="py-8 flex flex-col items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            register()
          }}
        >
          <Input
            type="text"
            label="Name"
            placeholder="Type your name"
            autoComplete="username"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <Input
            type="email"
            label="Email"
            autoComplete="email"
            placeholder="Type your email"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <Input
            type="password"
            label="Password"
            placeholder="Type your password"
            autoComplete="new-password"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, password: e.target.value }))
            }
          />

          <div className="flex flex-col justify-center mt-4">
            <button
              className="text-center text-xl bg-green-600 text-white px-6 py-2 rounded-2xl cursor-pointer hover:bg-green-500 mx-auto"
              type="submit"
              disabled={btnDisabled}
            >
              Create account
            </button>
            <span className="text-center">
              if you already have an account{' '}
              <Link
                to={'/login'}
                className="cursor-pointer hover:underline text-green-600"
              >
                log in
              </Link>
            </span>
            <span className='text-center text-red-700'>{errorMsg}</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
