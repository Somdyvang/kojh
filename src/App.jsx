import './App.css'

export default function App() {
  return (
    <div className="page">
      <div className="center-container">
        <p>Welcome</p>
        <button id="signInBtn" onClick={() => alert('Sign In button clicked!')}>
          Sign In
        </button>
        <button id="logOutBtn" onClick={() => alert('Log Out button clicked!')}>
          Log Out
        </button>
      </div>
    </div>
  )
}
