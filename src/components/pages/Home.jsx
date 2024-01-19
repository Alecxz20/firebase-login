import Header from '../Header'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'

Home.propTypes = {
  name: PropTypes.string,
}

function Home(props) {
  const navigate = useNavigate()
  function logout() {
    auth.signOut()
    navigate('/')
  }
  return (
    <div>
      <Header />
      <h1 className="text-center text-4xl mt-4">Home</h1>
      <div className="text-center text-2xl mt-4 flex flex-col items-center">
        <h2>{props.name ? `Welcome! ${props.name}` : `Please log in`}</h2>
        {props.name ? (
          <button
            onClick={logout}
            className="text-sm bg-red-700 py-1 px-2 rounded-lg mt-3 hover:bg-red-600"
          >
            Log out
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Home
