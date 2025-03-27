// @ts-nocheck
'use client'

import React from 'react' // Make sure to import React
import { useEffect, useState } from 'react'
import SettingsSidebar from '../../item-sidebar'
import AccountPanel from './account-panel'
import { ItemInterface } from '../../../types'
import { useRouter } from 'next/navigation'
import { useAlert } from '@/app/contexts/alertContext'
import { ChevronLeft } from 'lucide-react'
export default function AccountSettings({ params }: { params: { id: string } }) {
    // Unwrap params using React.use()
    const unwrappedParams = React.use(params);
    
    const [itemData, setItemData] = useState<ItemInterface | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const { alert } = useAlert()
    
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
            {/* Page header */}
            <button
                          onClick={() => router.back()}
                          className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 mb-3"
                        >
                          <ChevronLeft className="w-4 h-4 mr-1" />
                          <span>Back</span>
                        </button>
            <div className="mb-8">
                {/* Title */}
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                    {unwrappedParams.id === 'new' ? 'Create Asset Account' : 'Asset Account Details'}
                </h1>
            </div>
            
            {/* Content */}
            <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-8">
                <div className="flex flex-col md:flex-row md:-mr-px">
                    <SettingsSidebar id={unwrappedParams.id} />
                    <AccountPanel itemId={unwrappedParams.id} />
                </div>
            </div>
        </div>
    )
}