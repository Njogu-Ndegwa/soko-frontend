
'use client'
import { useEffect, useState } from 'react'
import { useAlert } from '@/app/contexts/alertContext'
import { Copy, Check, Calendar, RotateCcw, Unlock, Loader2 } from 'lucide-react'

// Import GraphQL mutation hooks
import useGenerateResetCode from '../../hook/useGenerateResetCode'
import useGenerateFreeCode from '../../hook/useGenerateFreeCode'
import useDistributorIncreaseResetCodeCountForItem from '../../hook/useDistributorIncreaseResetCodeCountForItem'
import useDistributorIncreaseFreeCodeCountForItem from '../../hook/useDistributorIncreaseFreeCodeCountForItem'
import useGenerateDaysCode from '../../hook/useGenerateDaysCode'
import { useLazygetSpecificAssetAccountsForClientQuery } from '../../queries'
import AssetAccountRequired from '../../asset-account-required'
export default function CodeGenerator({ itemId }: { itemId: string }) {
    const isCreateMode = itemId === 'new';
    const { alert } = useAlert()
    const [loading, setLoading] = useState(false)
    const [currentAction, setCurrentAction] = useState<string | null>(null)
    const [otpDays, setOtpDays] = useState<string>('')
    const [increaseResetDays, setIncreaseResetDays] = useState<string>('')
    const [increaseFreeDays, setIncreaseFreeDays] = useState<string>('')
    const [hexOTP, setHexOTP] = useState<string>('')
    const [decOTP, setDecOTP] = useState<string>('')
    const [copiedHex, setCopiedHex] = useState(false)
    const [copiedDec, setCopiedDec] = useState(false)
    const [assetId, setAssetId] = useState<string>('')
    const [pageLoading, setPageLoading] = useState(true)

    // Set up asset account query
    const [getAssetAccount, { data: assetAccountData, loading: assetAccountLoading }] = useLazygetSpecificAssetAccountsForClientQuery({
        id: itemId
    })
    
    // Load asset account data when component mounts
    useEffect(() => {
        const fetchAssetAccount = async () => {
            setPageLoading(true)
            try {
                await getAssetAccount({
                    variables: { id: itemId }
                })
            } catch (error) {
                console.error('Failed to fetch asset account:', error)
                alert({ text: 'Failed to load asset information', type: 'error' })
                setPageLoading(false) // Ensure we exit loading state even on error
            }
        }
        
        if (itemId) {
            fetchAssetAccount()
        }
    }, [itemId, getAssetAccount, alert])
    
    // Extract the asset ID from the response
    useEffect(() => {
        if (assetAccountData?.getSpecificAssetAccount?.asset?._id) {
            setAssetId(assetAccountData.getSpecificAssetAccount.asset._id)
            setPageLoading(false)
        }
    }, [assetAccountData])
    
    // Set up GraphQL mutation hooks with response handlers
    const { generateDaysCode } = useGenerateDaysCode((data) => {
        if (data?.generateDaysCode) {
            setHexOTP(data.generateDaysCode.codeHex)
            setDecOTP(data.generateDaysCode.codeDec)
            alert({ text: 'Day code generated successfully', type: 'success' })
        }
        setLoading(false)
        setCurrentAction(null)
    })
    
    const { generateResetCode } = useGenerateResetCode((data) => {
        if (data?.generateResetCode) {
            setHexOTP(data.generateResetCode.codeHex)
            setDecOTP(data.generateResetCode.codeDec)
            alert({ text: 'Reset code generated successfully', type: 'success' })
        }
        setLoading(false)
        setCurrentAction(null)
    })
    
    const { generateFreeCode } = useGenerateFreeCode((data) => {
        if (data?.generateFreeCode) {
            setHexOTP(data.generateFreeCode.codeHex)
            setDecOTP(data.generateFreeCode.codeDec)
            alert({ text: 'Free code generated successfully', type: 'success' })
        }
        setLoading(false)
        setCurrentAction(null)
    })
    
    const { distributorIncreaseResetCodeCountForItem } = useDistributorIncreaseResetCodeCountForItem((data) => {
        if (data) {
            alert({ text: 'Increased reset code generated successfully', type: 'success' })
        }
        setLoading(false)
        setCurrentAction(null)
    })
    
    const { distributorIncreaseFreeCodeCountForItem } = useDistributorIncreaseFreeCodeCountForItem((data) => {
        if (data) {
            alert({ text: 'Increased free code generated successfully', type: 'success' })
        }
        setLoading(false)
        setCurrentAction(null)
    })
    
    const generateDayCode = async () => {
        if (!otpDays) {
            alert({ text: 'Please enter OTP days', type: 'error' })
            return
        }
        
        if (!assetId) {
            alert({ text: 'Asset information not loaded', type: 'error' })
            return
        }
        
        setLoading(true)
        setCurrentAction('daycode')
        try {
            await generateDaysCode({
                variables: {
                    generateDaysCodeInput: {
                        itemId: assetId,
                        codeDays: Number(otpDays)
                    }
                }
            })
        } catch (error) {
            console.error('Code generation failed:', error)
            alert({ text: 'Failed to generate code', type: 'error' })
            setLoading(false)
            setCurrentAction(null)
        }
    }
    
    const generateResetCodeHandler = async () => {
        if (!assetId) {
            alert({ text: 'Asset information not loaded', type: 'error' })
            return
        }
        
        setLoading(true)
        setCurrentAction('reset')
        try {
            await generateResetCode({
                variables: {
                    generateResetCodeInput: {
                        itemId: assetId
                    }
                }
            })
        } catch (error) {
            console.error('Code generation failed:', error)
            alert({ text: 'Failed to generate reset code', type: 'error' })
            setLoading(false)
            setCurrentAction(null)
        }
    }
    
    const generateFreeCodeHandler = async () => {
        if (!assetId) {
            alert({ text: 'Asset information not loaded', type: 'error' })
            return
        }
        
        setLoading(true)
        setCurrentAction('free')
        try {
            await generateFreeCode({
                variables: {
                    generateFreeCodeInput: {
                        itemId: assetId
                    }
                }
            })
        } catch (error) {
            console.error('Code generation failed:', error)
            alert({ text: 'Failed to generate free code', type: 'error' })
            setLoading(false)
            setCurrentAction(null)
        }
    }
    
    const increaseResetCodeHandler = async () => {
        if (!increaseResetDays) {
            alert({ text: 'Please enter days to increase', type: 'error' })
            return
        }
        
        if (!assetId) {
            alert({ text: 'Asset information not loaded', type: 'error' })
            return
        }
        
        setLoading(true)
        setCurrentAction('increaseReset')
        try {
            await distributorIncreaseResetCodeCountForItem({
                variables: {
                    itemId: assetId,
                    resetCodeCount: Number(increaseResetDays)
                }
            })
        } catch (error) {
            console.error('Code generation failed:', error)
            alert({ text: 'Failed to generate increased reset code', type: 'error' })
            setLoading(false)
            setCurrentAction(null)
        }
    }
    
    const increaseFreeCodeHandler = async () => {
        if (!increaseFreeDays) {
            alert({ text: 'Please enter days to increase', type: 'error' })
            return
        }
        
        if (!assetId) {
            alert({ text: 'Asset information not loaded', type: 'error' })
            return
        }
        
        setLoading(true)
        setCurrentAction('increaseFree')
        try {
            await distributorIncreaseFreeCodeCountForItem({
                variables: {
                    itemId: assetId,
                    freeCodeCount: Number(increaseFreeDays)
                }
            })
        } catch (error) {
            console.error('Code generation failed:', error)
            alert({ text: 'Failed to generate increased free code', type: 'error' })
            setLoading(false)
            setCurrentAction(null)
        }
    }
    
    const copyToClipboard = async (text: string, type: 'hex' | 'dec') => {
        await navigator.clipboard.writeText(text)
        if (type === 'hex') {
            setCopiedHex(true)
            setTimeout(() => setCopiedHex(false), 2000)
        } else {
            setCopiedDec(true)
            setTimeout(() => setCopiedDec(false), 2000)
        }
    }

      if (isCreateMode) {
            return <AssetAccountRequired stageName="Code Generation" />
        }

    // Skeleton loading UI component - only show when initially loading the asset account
    if ((pageLoading || assetAccountLoading) && !assetId) {
        return (
            <div className="grow bg-white dark:bg-gray-900 rounded-lg shadow-lg animate-pulse">
                <div className="p-6">
                    <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
                        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                    </div>
                    
                    <div className="space-y-8">
                        {/* Main card skeleton */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                            <div className="flex flex-col md:flex-row md:items-end gap-5">
                                <div className="md:w-1/3">
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
                                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:flex-1">
                                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Increase Reset Code Section skeleton */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
                            <div className="flex flex-col md:flex-row md:items-end gap-4">
                                <div className="md:w-1/3">
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
                                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                                </div>
                                <div className="md:flex-1">
                                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Increase Free Code Section skeleton */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
                            <div className="flex flex-col md:flex-row md:items-end gap-4">
                                <div className="md:w-1/3">
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
                                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                                </div>
                                <div className="md:flex-1">
                                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Results Section skeleton */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                            <div className="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                            </div>
                            
                            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                                    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                                    <div className="w-full md:w-64 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                </div>
                                
                                <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                                    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                                    <div className="w-full md:w-64 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="grow bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <div className="p-6">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
                    <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold">Code Generator</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Generate and manage access codes for {assetAccountData?.getSpecificAssetAccount?.asset?.sellerItemID || 'this asset'}
                    </p>
                </div>
                
                <div className="space-y-8">
                    {/* Main card with input and primary actions */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col md:flex-row md:items-end gap-5">
                            <div className="md:w-1/3">
                                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                    OTP days
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Calendar className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input 
                                        type="number"
                                        className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                                        value={otpDays}
                                        onChange={(e) => setOtpDays(e.target.value)}
                                        placeholder="Enter days"
                                    />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:flex-1">
                                <button
                                    type="button"
                                    onClick={generateDayCode}
                                    disabled={loading}
                                    className={`w-full px-5 py-2.5 ${loading && currentAction === 'daycode' ? 'bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'} focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center justify-center h-10`}
                                >
                                    {loading && currentAction === 'daycode' ? (
                                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing...</>
                                    ) : (
                                        'Day Code'
                                    )}
                                </button>
                                <button
                                    type="button"
                                    onClick={generateResetCodeHandler}
                                    disabled={loading}
                                    className={`w-full px-5 py-2.5 ${loading && currentAction === 'reset' ? 'bg-orange-500' : 'bg-orange-600 hover:bg-orange-700'} focus:ring-4 focus:ring-orange-300 text-white font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center justify-center h-10`}
                                >
                                    {loading && currentAction === 'reset' ? (
                                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing...</>
                                    ) : (
                                        'Reset Code'
                                    )}
                                </button>
                                <button
                                    type="button"
                                    onClick={generateFreeCodeHandler}
                                    disabled={loading}
                                    className={`w-full px-5 py-2.5 ${loading && currentAction === 'free' ? 'bg-green-500' : 'bg-green-600 hover:bg-green-700'} focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center justify-center h-10`}
                                >
                                    {loading && currentAction === 'free' ? (
                                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing...</>
                                    ) : (
                                        'Free Code'
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Increase Reset Code Section */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Increase Reset Days</h3>
                        <div className="flex flex-col md:flex-row md:items-end gap-4">
                            <div className="md:w-1/3">
                                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                    Days to increase
                                </label>
                                <input 
                                    type="number"
                                    className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                                    value={increaseResetDays}
                                    onChange={(e) => setIncreaseResetDays(e.target.value)}
                                    placeholder="Enter days"
                                />
                            </div>
                            <div className="md:flex-1">
                                <button
                                    type="button"
                                    onClick={increaseResetCodeHandler}
                                    disabled={loading}
                                    className={`w-full md:w-auto px-5 py-2.5 ${loading && currentAction === 'increaseReset' ? 'bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'} focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center justify-center h-10`}
                                >
                                    {loading && currentAction === 'increaseReset' ? (
                                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing...</>
                                    ) : (
                                        <><RotateCcw className="w-4 h-4 mr-2" /> Increase Reset Code</>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Increase Free Code Section */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Increase Free Days</h3>
                        <div className="flex flex-col md:flex-row md:items-end gap-4">
                            <div className="md:w-1/3">
                                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                    Days to increase
                                </label>
                                <input 
                                    type="number"
                                    className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                                    value={increaseFreeDays}
                                    onChange={(e) => setIncreaseFreeDays(e.target.value)}
                                    placeholder="Enter days"
                                />
                            </div>
                            <div className="md:flex-1">
                                <button
                                    type="button"
                                    onClick={increaseFreeCodeHandler}
                                    disabled={loading}
                                    className={`w-full md:w-auto px-5 py-2.5 ${loading && currentAction === 'increaseFree' ? 'bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'} focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center justify-center h-10`}
                                >
                                    {loading && currentAction === 'increaseFree' ? (
                                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing...</>
                                    ) : (
                                        <><Unlock className="w-4 h-4 mr-2" /> Increase Free Code</>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Results Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                        <div className="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                            <h3 className="font-medium text-gray-800 dark:text-gray-200">Generated Codes</h3>
                        </div>
                        
                        <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                                <div className="font-medium text-gray-800 dark:text-gray-200 flex items-center">
                                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-1 rounded mr-2">HEX</span>
                                    OTP (64bit Hex)
                                </div>
                                <div className="flex items-center w-full md:w-auto">
                                    <div className="relative flex-1 md:flex-initial">
                                        <input
                                            type="text"
                                            value={hexOTP}
                                            readOnly
                                            className="form-input pr-10 w-full md:w-64 rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-0"
                                            placeholder="Generated hex code will appear here"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => copyToClipboard(hexOTP, 'hex')}
                                            className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                            disabled={!hexOTP}
                                        >
                                            {copiedHex ? (
                                                <Check className="w-5 h-5 text-green-500" />
                                            ) : (
                                                <Copy className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                                <div className="font-medium text-gray-800 dark:text-gray-200 flex items-center">
                                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-semibold px-2.5 py-1 rounded mr-2">DEC</span>
                                    OTP (Padded Dec)
                                </div>
                                <div className="flex items-center w-full md:w-auto">
                                    <div className="relative flex-1 md:flex-initial">
                                        <input
                                            type="text"
                                            value={decOTP}
                                            readOnly
                                            className="form-input pr-10 w-full md:w-64 rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-0"
                                            placeholder="Generated decimal code will appear here"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => copyToClipboard(decOTP, 'dec')}
                                            className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                            disabled={!decOTP}
                                        >
                                            {copiedDec ? (
                                                <Check className="w-5 h-5 text-green-500" />
                                            ) : (
                                                <Copy className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}