"use client"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { logIn, logOut, toggleMod } from "../../../redux/features/auth-slice"
import { AppDispatch, useAppSelector } from "../../../redux/store"

const Login = () => {
  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const dispatch = useDispatch<AppDispatch>()
  const isAuthenticated = useAppSelector(
    (state) => state.authReducer.value.isAuth
  )

  const onLoginClick = () => {
    dispatch(logIn({ username, email }))
  }
  const onLogoutClick = () => {
    dispatch(logOut())
    setUsername("")
  }
  const onResetClick = () => {
    setUsername("")
  }
  const onClickToggle = () => {
    dispatch(toggleMod())
  }

  return (
    <div className="bg-gray-500 h-[300px] items-center justify-center flex flex-col">
      <form
        className="flex flex-col"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="uname">Username:</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        {isAuthenticated ? "" : <button onClick={onLoginClick}>Log In</button>}
      </form>
      {isAuthenticated && (
        <div className="flex flex-col">
          <button onClick={onLogoutClick}>Log Out</button>
          <button onClick={onClickToggle}>Toggle Mod</button>
          <h1>Youre Logged In</h1>
        </div>
      )}
    </div>
  )
}

export default Login
