"use client"
import { useAppSelector } from "@/redux/store"
import Login from "./auth/login/login"

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.username)
  const email = useAppSelector((state) => state.authReducer.value.email)
  const isMod = useAppSelector((state) => state.authReducer.value.isMod)
  return (
    <main>
      <Login />
      <h1>Username: {username}</h1>
      <h1>Email: {email}</h1>
      {isMod && <h1>This user is a mod</h1>}
    </main>
  )
}
