import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import astroBg from '../assets/astro.jpg' 

export default function Payment() {
  const { state } = useLocation()
  console.log(state)
  const navigate = useNavigate()
  const amount = state?.price || 1
  const [formData, setFormData] = useState(() => ({
    ...state?.formData,
    amount: amount
  }))
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!state?.formData) navigate('/')
  }, [state, navigate])

  const createOrder = async (amount) => {
    const res = await fetch('https://astro-backend-txdw.onrender.com/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount })
    })
    return res.json()
  }

  const openRazorpay = async () => {
    setLoading(true)
    try {
      if (!window.Razorpay) {
        await new Promise((resolve, reject) => {
          const s = document.createElement('script')
          s.src = 'https://checkout.razorpay.com/v1/checkout.js'
          s.onload = resolve
          s.onerror = reject
          document.body.appendChild(s)
        })
      }

      const order = await createOrder(amount)
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: 'INR',
        name: 'Aura jyotish kendra',
        description: 'Astrology Consultation',
        order_id: order.id,
        prefill: {
          name: state.formData.fullName,
          email: state.formData.email,
          contact: state.formData.phone
        },
        handler: async function (response) {
          const verifyRes = await fetch('https://astro-backend-txdw.onrender.com/api/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...response,
              formData: formData
            })
          })
          const data = await verifyRes.json()
          if (data.success) {
            alert('Payment successful! Confirmation email sent.')
            navigate('/')
          } else {
            alert('Verification failed.')
          }
        },
        theme: { color: '#6d28d9' }
      }

      const rzp1 = new window.Razorpay(options)
      rzp1.open()
    } catch (e) {
      console.error(e)
      alert('Payment init failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center" 
        style={{ backgroundImage: `url(${astroBg})` }}
      />
     
      <div className="absolute inset-0 -z-10 bg-black/70"></div>

      
      <div className="max-w-lg w-full mx-auto px-4 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Complete Payment</h2>
          <p className="text-white/80 mb-6">
            Pay <span className="font-semibold">₹{amount}</span> to confirm your personalized astrology consultation.
          </p>
          <button 
            disabled={loading} 
            onClick={openRazorpay} 
            className="bg-yellow-300 text-black py-3 px-6 rounded-xl font-semibold w-full shadow-md hover:scale-[1.02] transition"
          >
            {loading ? 'Processing…' : 'Pay with Razorpay'}
          </button>
        </div>
      </div>
    </section>
  )
}
