import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SellerDashboard = () => {
    const token = localStorage.getItem("sellerToken")

    const navigate = useNavigate()
    useEffect(() => {
        if(!token){
            navigate("/seller-login")
        }
    })
  return (
    <>
        <h1>Seller dashboard</h1>
    </>
  )
}

export default SellerDashboard