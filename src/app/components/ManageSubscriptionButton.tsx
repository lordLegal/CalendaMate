'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Props {
    isActive: boolean
}

export default function ManageSubscriptionButton({ isActive }: Props) {
    const [loading, setLoading] = useState(false)

    const handleManage = async () => {
    setLoading(true)
    const res = await fetch('/api/stripe/create-portal-session', {
        method: 'POST',
    })
    const { url, error }: { url?: string; error?: string } = await res.json()

    if (url) {
        // Weiterleitung in Stripe Customer Portal
        window.location.href = url
    } else {
        alert(error || 'Unable to open billing portal')
        setLoading(false)
    }
    }

    if (isActive) {
    // bereits Abonnent: Customer Portal öffnen
    return (
        <button
        onClick={handleManage}
        disabled={loading}
        className="
            bg-green-500 hover:bg-green-600
            text-white font-medium
            px-4 py-2 rounded
            disabled:opacity-50
        "
        >
        {loading ? 'Loading…' : 'Manage Subscription'}
        </button>
    )
    }

    // kein Abo: auf Kauf-Page weiterleiten
    return (
    <Link href="/subscription">
        <button
        className="
            bg-blue-600 hover:bg-blue-700
            text-white font-medium
            px-4 py-2 rounded
        "
        >
        Subscribe to Pro
        </button>
    </Link>
    )
}
