'use client'

import React, { useState } from 'react'

const features = [
    'Unlimited events',
    'Google Calendar sync',
    'Email reminders',
    'Priority support',
]

export default function SubscriptionPage() {
    const [loading, setLoading] = useState(false)

    const handleSubscribe = async () => {
    setLoading(true)
    const res = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
    })
    const { url, error }: { url?: string; error?: string } = await res.json()

    if (url) {
        window.location.href = url
    } else {
        alert(error || 'Failed to create checkout session')
        setLoading(false)
    }
    }

    return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        {/* Titel */}
        <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Upgrade to Pro
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
            Unlock all premium features for just{' '}
            <span className="font-medium text-gray-900">$9.99</span>/month
            </p>
        </div>

        {/* Features-Liste */}
        <div className="rounded-lg bg-white shadow p-6">
            <h3 className="text-xl font-semibold mb-4">What’s included:</h3>
            <ul className="space-y-2 mb-6">
            {features.map((feature) => (
                <li key={feature} className="flex items-center">
                <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                    />
                </svg>
                <span className="text-gray-700">{feature}</span>
                </li>
            ))}
            </ul>

            {/* Subscribe-Button */}
            <button
            onClick={handleSubscribe}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded disabled:opacity-50"
            >
            {loading ? 'Redirecting...' : 'Subscribe Now'}
            </button>
        </div>
        </div>
    </div>
    )
}