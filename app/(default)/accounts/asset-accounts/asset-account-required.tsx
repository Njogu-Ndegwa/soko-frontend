'use client'

import { AlertTriangle } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface AssetAccountRequiredProps {
  stageName: string
}

export default function AssetAccountRequired({ stageName }: AssetAccountRequiredProps) {
  const router = useRouter()

  return (
    <div className="grow bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="p-6">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold">{stageName}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {`Link a ${stageName.toLowerCase()} to your paygo account`}
          </p>
        </div>
                      
        <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">PayGo Account Required</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              {`You need to create an paygo account before you can link a ${stageName.toLowerCase()}. `}
              Please complete the paygo account creation process first.
            </p>
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm transition duration-150 ease-in-out"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}