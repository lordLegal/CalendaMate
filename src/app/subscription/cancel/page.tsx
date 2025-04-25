import Link from 'next/link'                                                                                                            
import React from 'react'                                                                                                               
                                                                                                                                        
export default function CancelPage() {                                                                                                  
  return (                                                                                                                              
    <div className="min-h-screen bg-red-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">                                
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md text-center">                                                   
        <h1 className="text-3xl font-bold text-red-800 mb-4">                                                                           
          Subscription Canceled                                                                                                         
        </h1>                                                                                                                           
        <p className="text-gray-700 mb-6">                                                                                              
          You did not complete the checkout. Please try again.                                                                          
        </p>                                                                                                                            
        <Link href="/subscription">                                                                                                     
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">                                   
            Retry Subscription                                                                                                          
          </button>                                                                                                                     
        </Link>                                                                                                                         
      </div>                                                                                                                            
    </div>                                                                                                                              
  )                                                                                                                                     
}  