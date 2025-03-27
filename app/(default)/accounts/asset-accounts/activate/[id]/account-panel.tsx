

'use client'

import { useEffect, useState } from 'react'
import { useAlert } from '@/app/contexts/alertContext'
import { Package, User, DollarSign, CreditCard, CheckCircle, Edit } from 'lucide-react'
import { useRouter } from 'next/navigation'
import usePairAssetAccount from '../../hook/usePairAssetAccount'
import { useLazygetSpecificAssetAccountsForClientQuery } from '../../queries'
import { useLazyGetAllClientCustomersQuery } from '../../../customers/queries'
import { useLazyGetAllClientItemsQuery } from '@/app/(default)/thing/item/queries'
import { QueryOrder } from '@/app/(default)/thing/types/globalTypes'
import { useAuth } from '@/lib/auth-context'

export default function AccountPanel({ itemId, itemData }: {itemId:any, itemData:any}) {
    const { alert } = useAlert()
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false)
    const [items, setItems] = useState<any>([])
    const [customers, setCustomers] = useState<any>([])
    const { distributorId } = useAuth();
    const [currencies] = useState([
        { code: 'USD', name: 'US Dollar' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'British Pound' },
        { code: 'AED', name: 'UAE Dirham' },
        { code: 'JPY', name: 'Japanese Yen' }
    ])

    // Form states
    const [selectedItem, setSelectedItem] = useState('')
    const [selectedCustomer, setSelectedCustomer] = useState<any>('')
    const [balance, setBalance] = useState('')
    const [selectedCurrency, setSelectedCurrency] = useState('USD')
    const [assetAccountId, setAssetAccountId] = useState('')
    const [userId, setUserId] = useState('')
    const [clientId, setClientId] = useState('')

    // Get queries
    const [getAllItems, { data: itemsData }] = useLazyGetAllClientItemsQuery({
        clientId: distributorId || "",
        assetaccount: false,
        queryorder: QueryOrder.DESC
    })
    
    const [getAllCustomers, { data: customersData }] = useLazyGetAllClientCustomersQuery({
        clientId: distributorId || ""
    })
    
    const [getAssetAccount, { data: assetAccountData }] = useLazygetSpecificAssetAccountsForClientQuery({
        id: itemId
    })

    // Mutation for pairing asset account
    const { pairAssetAccount } = usePairAssetAccount((data) => {
        alert({ text: 'Asset account paired successfully', type: 'success' })
        router.push('/inventory/items')
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                
                // Check if we're editing
                if (itemId && itemId !== 'new') {
                    setIsEditing(true)
                    await getAssetAccount()
                }

                // Fetch items and customers
                await getAllItems()
                await getAllCustomers()
            } catch (error) {
                console.error('Error fetching data:', error)
                alert({ text: 'Failed to load data', type: 'error' })
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [itemId, getAssetAccount, getAllItems, getAllCustomers, alert])

    // Set form values when editing
    useEffect(() => {
        if (assetAccountData && assetAccountData.getSpecificAssetAccount) {
            const account = assetAccountData.getSpecificAssetAccount
            setSelectedItem(account.asset?._id || '')
            setSelectedCustomer(account.credit?.owner?._id || '')
            setBalance(account.credit?.balance?.toString() || '')
            setSelectedCurrency(account.credit?.currency || 'USD')
            setAssetAccountId(account._id)
            setUserId(account.user?._id || '')
            setClientId(account.manager?._id || '')
        }
    }, [assetAccountData])

    // Process items data when it changes
    useEffect(() => {
        if (itemsData && itemsData.getAllClientItems?.page?.edges) {
            const itemsArray = itemsData.getAllClientItems.page.edges
                .filter(edge => edge.node)
                .map(edge => edge.node)
            setItems(itemsArray)
        }
    }, [itemsData])

    // Process customers data when it changes
    useEffect(() => {
        if (customersData && customersData.getAllClientCustomers?.page?.edges) {
            const customersArray = customersData.getAllClientCustomers.page.edges
                .filter(edge => edge.node)
                .map(edge => ({
                    // @ts-ignore
                    id: edge?.node._id || "",
                    // @ts-ignore
                    name: edge?.node.name || "",
                    // @ts-ignore
                    contact: edge?.node.contact || "",
                    // @ts-ignore
                    address: edge?.node.address || ""
                }))
            setCustomers(customersArray)
        }
        console.log(customersData, "Customer Data")
    }, [customersData])

    const handleAssetAccountSubmit = async (e:any) => {
        e.preventDefault()
        try {
            // Use the current date for payment schedule
            const currentDate = new Date().toISOString()
            
            await pairAssetAccount({
                variables: {
                    pairAssetAccountInput: {
                        clientId: clientId || '', // Default client ID if not set
                        credit: {
                            balance: parseFloat(balance),
                            currency: selectedCurrency,
                            customerId: selectedCustomer
                        },
                        itemId: selectedItem,
                        paySchedule: {
                            amount: 0,
                            datetime: currentDate,
                            instruction: ""
                        },
                        userId: userId || '' // Default user ID if not set
                    }
                }
            })
        } catch (error) {
            console.error('Asset account creation failed:', error)
            alert({ text: 'Failed to create asset account', type: 'error' })
        }
    }

    if (loading) return (
        <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-pulse flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-blue-200 mb-3"></div>
                <div className="text-gray-500">Loading asset account data...</div>
            </div>
        </div>
    )

    return (
        <div className="grow bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <div className="p-6">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold">
                            {isEditing ? 'Asset Account Details' : 'Create Asset Account'}
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {isEditing ? 'View details of the asset account' : 'Enter the details to create a new Asset Account'}
                        </p>
                    </div>
                    {isEditing && (
                        <button
                            type="button"
                            className="px-3 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-sm flex items-center"
                            onClick={() => setIsEditing(false)}
                        >
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                        </button>
                    )}
                </div>
                
                <form onSubmit={handleAssetAccountSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {/* Item Selection - with icon */}
                            <div className="relative">
                                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Select Item</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Package className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <select
                                        className="form-select pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                                        value={selectedItem}
                                        onChange={(e) => setSelectedItem(e.target.value)}
                                        required
                                        disabled={isEditing}
                                    >
                                        <option value="">Choose an item</option>
                                        {items.map((item:any) => (
                                            <option key={item._id} value={item._id}>
                                                {item.sellerItemID || `Item #${item._id}`}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            
                            {/* Customer Selection - with icon */}
                            <div className="relative">
                                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Select Customer</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <select
                                        className="form-select pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                                        value={selectedCustomer}
                                        onChange={(e) => setSelectedCustomer(e.target.value)}
                                        required
                                        disabled={isEditing}
                                    >
                                        <option value="">Choose a customer</option>
                                        {customers.map((customer:any) => (
                                            <option key={customer.id} value={customer.id}>
                                                {customer.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* Balance Input - with icon */}
                            <div className="relative">
                                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Balance</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <DollarSign className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="number"
                                        step="0.01"
                                        className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                                        placeholder="0.00"
                                        value={balance}
                                        onChange={(e) => setBalance(e.target.value)}
                                        required
                                        disabled={isEditing}
                                    />
                                </div>
                            </div>
                            
                            {/* Currency Selection - with icon */}
                            <div className="relative">
                                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Select Currency</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <CreditCard className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <select
                                        className="form-select pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                                        value={selectedCurrency}
                                        onChange={(e) => setSelectedCurrency(e.target.value)}
                                        required
                                        disabled={isEditing}
                                    >
                                        {currencies.map(currency => (
                                            <option key={currency.code} value={currency.code}>
                                                {currency.code} - {currency.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Summary Card */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Asset Account Summary</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-gray-500 dark:text-gray-400">Item:</p>
                                <p className="font-medium text-gray-900 dark:text-gray-100">
                                    {selectedItem 
                                        ? items.find((i:any) => i._id === selectedItem)?.sellerItemID || `Item #${selectedItem}`
                                        : 'Not selected'}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-500 dark:text-gray-400">Customer:</p>
                                <p className="font-medium text-gray-900 dark:text-gray-100">
                                    {selectedCustomer 
                                        ? customers.find((c:any) => c.id === selectedCustomer)?.name 
                                        : 'Not selected'}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-500 dark:text-gray-400">Amount:</p>
                                <p className="font-medium text-gray-900 dark:text-gray-100">
                                    {balance 
                                        ? `${balance} ${selectedCurrency}`
                                        : 'Not specified'}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Submit Button - only show when not in editing mode */}
                    {!isEditing && (
                        <div className="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center"
                            >
                                <CheckCircle className="h-5 w-5 mr-2" />
                                Create Asset Account
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}
