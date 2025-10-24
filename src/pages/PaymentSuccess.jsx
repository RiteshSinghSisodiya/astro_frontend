import { useLocation, useNavigate } from 'react-router-dom'
import astroBg from '../assets/astro.jpg'

export default function PaymentSuccess() {
  const { state } = useLocation()
  const navigate = useNavigate()

  const { fullName, email, phone, amount, paymentId, orderId } = state || {}

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center" 
        style={{ backgroundImage: `url(${astroBg})` }}
      />
      <div className="absolute inset-0 -z-10 bg-black/70"></div>

      <div className="max-w-xl w-full mx-auto px-6 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center border border-white/20">
          <div className="mx-auto w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 12a5 5 0 1110 0 5 5 0 01-10 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-2 text-white">Payment Successful</h2>
          <p className="text-white/80 mb-6">
            Your payment has been successfully completed. Our team will reach you soon with your solution.
          </p>

          {(fullName || amount || paymentId) && (
            <div className="bg-white/10 rounded-xl p-4 text-left text-white/90 mb-6 border border-white/10">
              {fullName && (
                <div className="flex justify-between"><span>Name:</span><span className="font-medium">{fullName}</span></div>
              )}
              {email && (
                <div className="flex justify-between"><span>Email:</span><span className="font-medium">{email}</span></div>
              )}
              {phone && (
                <div className="flex justify-between"><span>Phone:</span><span className="font-medium">{phone}</span></div>
              )}
              {amount && (
                <div className="flex justify-between"><span>Amount:</span><span className="font-medium">₹{amount}</span></div>
              )}
              {orderId && (
                <div className="flex justify-between"><span>Order ID:</span><span className="font-medium">{orderId}</span></div>
              )}
              {paymentId && (
                <div className="flex justify-between"><span>Payment ID:</span><span className="font-medium">{paymentId}</span></div>
              )}
            </div>
          )}

          <button 
            onClick={() => navigate('/')} 
            className="bg-yellow-300 text-black py-3 px-6 rounded-xl font-semibold w-full shadow-md hover:scale-[1.02] transition"
          >
            Go to Home
          </button>
        </div>
      </div>
    </section>
  )
}