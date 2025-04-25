import Link from 'next/link'                                                                                                            
import React from 'react'                                                                                                               
                                                                                                                                        
export default function SuccessPage() {                                                                                                 
  return (                                                                                                                              
    <div className="min-h-screen bg-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">                              
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md text-center">                                                   
        <h1 className="text-3xl font-bold text-green-800 mb-4">                                                                         
          🎉 Subscription Successful!                                                                                                   
        </h1>                                                                                                                           
        <p className="text-gray-700 mb-6">                                                                                              
          Thank you for subscribing. Your Pro features are now active.                                                                  
        </p>                                                                                                                            
        <Link href="/">                                                                                                                 
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">                                   
            Go to Dashboard                                                                                                             
          </button>                                                                                                                     
        </Link>                                                                                                                         
      </div>                                                                                                                            
    </div>                                                                                                                              
  )                                                                                                                                     
} 