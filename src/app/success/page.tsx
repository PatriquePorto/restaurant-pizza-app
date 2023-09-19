"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

const SuccessPage = () => {
  const searchParams = useSearchParams()
  const payment_intent = searchParams.get('payment_intent')
  const router = useRouter()

  useEffect(() =>{
    const makeRequest = async () => {
      try {
        await fetch(`http://localhost:3000/api/orders/${payment_intent}`, {
          method: "PUT",
        }) 
        router.push('/orders')      
        } catch (err) {
          console.log(err)
        }
      }
    }, [payment_intent, router])
  
  return (
    <div>Payment successful. You are being redirected to the orders page. Please do
      not close the page.
      </div>
  )
}

export default SuccessPage