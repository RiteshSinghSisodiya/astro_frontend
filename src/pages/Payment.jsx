import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import astroBg from '../assets/astro.jpg'
import ReactQRCode from 'react-qr-code'

// Use environment-driven API base URL, fallback to local dev
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5080';

export default function Payment() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const amount = state?.formData?.amount ?? state?.price ?? 1
  const [formData, setFormData] = useState(() => ({
    ...state?.formData,
    amount: amount
  }))
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [qrOrder, setQrOrder] = useState(null)
  const [referenceNumber, setReferenceNumber] = useState('')
  const [confirming, setConfirming] = useState(false)
  const [confirmError, setConfirmError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  useEffect(() => {
    if (!state?.formData) navigate('/')
  }, [state, navigate])

  const createQrOrder = async (amount) => {
    const res = await fetch(`${API_BASE}/api/create-qr-order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, note: 'Astrology Consultation', payerName: formData?.fullName })
    })
    if (!res.ok) throw new Error('Failed to create QR order')
    return res.json()
  }

  const startQrFlow = async () => {
    setLoading(true)
    setError('')
    try {
      const order = await createQrOrder(amount)
      setQrOrder(order)
    } catch (e) {
      console.error(e)
      setError('Payment init failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const confirmPaid = async () => {
    setConfirmError('')
    setSuccessMessage('')
    const ref = referenceNumber.trim()
    if (!ref) {
      setConfirmError('Please enter your UPI transaction reference number.')
      return
    }
    if (!formData?.email) {
      setConfirmError('Missing email. Please go back and fill the form again.')
      return
    }
    setConfirming(true)
    try {
      const payload = {
        email: formData.email,
        referenceNumber: ref,
        amount,
        orderId: qrOrder?.orderId,
        verificationToken: qrOrder?.verificationToken,
        fullName: formData.fullName,
        phone: formData.phone,
        dob: formData.dob,
        birthTime: formData.birthTime,
        country: formData.country,
        state: formData.state,
        city: formData.city,
      }
      const res = await fetch(`${API_BASE}/api/users/confirm-payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok || data?.error) {
        throw new Error(data?.error || 'Failed to save reference number')
      }
      // Show modal only after data saved successfully
      setModalMessage('Thank you for your payment! Your reference number has been submitted successfully.')
      setShowSuccessModal(true)
    } catch (err) {
      console.error(err)
      setConfirmError(err.message || 'Failed to confirm payment. Please try again.')
    } finally {
      setConfirming(false)
    }
  }

  const handleModalOk = () => {
    setShowSuccessModal(false)
    navigate('/')
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

          {!qrOrder ? (
            <button
              disabled={loading}
              onClick={startQrFlow}
              className="bg-yellow-300 text-black py-3 px-6 rounded-xl font-semibold w-full shadow-md hover:scale-[1.02] transition"
            >
              {loading ? 'Preparing…' : 'Generate QR to Pay'}
            </button>
          ) : (
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 inline-block mx-auto">
                <ReactQRCode value={qrOrder.qrValue} size={192} />
              </div>
              <p className="text-white/80">Scan with your UPI/payment app to pay.</p>
              <div className="mt-4 text-left">
                <label className="block text-white/90 mb-2">UPI Reference Number</label>
                <input
                  className="p-3 border rounded bg-white/90 w-full"
                  placeholder="Enter UPI transaction reference number"
                  value={referenceNumber}
                  onChange={(e) => setReferenceNumber(e.target.value)}
                />
                <button
                  disabled={confirming}
                  onClick={confirmPaid}
                  className="mt-3 bg-yellow-300 text-black py-3 px-6 rounded-xl font-semibold w-full shadow-md hover:scale-[1.02] transition"
                >
                  {confirming ? 'Submitting…' : 'I Have Paid'}
                </button>
                {confirmError && (
                  <div className="mt-2 text-red-300">{confirmError}</div>
                )}
                {successMessage && (
                  <div className="mt-2 text-green-300">{successMessage}</div>
                )}
              </div>
            </div>
          )}

          {error && (
            <div className="mt-4 text-red-300">{error}</div>
          )}
        </div>
      </div>

      {showSuccessModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Payment Submitted</h3>
            <p className="text-gray-700 mb-6">
              {modalMessage}
            </p>
            <button
              onClick={handleModalOk}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl w-full"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
