import React from 'react'
import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>   
    <nav>
    <div class="nav-wrapper  indigo accent-3">
      <a href="#" class="brand-logo center">Welcome to Thor's Metal Band App</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      </ul>
    </div>
    </nav>
      <button className="btn indigo accent-3" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
    </main>
  );
}