import { useSelector } from "react-redux"
import { Children, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import React from "react"

interface Iprops {
  allowed: boolean
  redirectTo: string
  children: any
}
function RequireAuth({ allowed, redirectTo, children }: Iprops) {
  const { token } = useSelector((state: any) => state.authSlice)
  const isLogin = token ? true : false
  const navigate = useNavigate()

  useEffect(() => {
    // allowed means if current router need to login
    // isLogin means if the  user need to login
    if (allowed !== isLogin) {
      navigate(redirectTo)
    }
  }, [allowed, isLogin, redirectTo])

  return allowed === isLogin ? <>{children} </> : <></>
}
export default RequireAuth
