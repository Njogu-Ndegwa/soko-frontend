

'use client'
import { useEffect, useState } from 'react'
import { useAlert } from '@/app/contexts/alertContext'
import { 
  Check, Loader2, Calendar, DollarSign, FileText, 
  CreditCard, Clock, AlertTriangle, Tag, Info
} from 'lucide-react'
import { useLazygetSpecificAssetAccountsForClientQuery } from '../../queries'
import { useLazyGetAllPayPlanTemplatesQuery } from '../../../payment-plans/queries'
import { useRouter } from 'next/navigation'
import useUpdateAssetAccount from '../../hook/useUpdateAssetAccount'
import AssetAccountRequired from '../../asset-account-required'
interface PlanDetail {
  pName: string
  pValue: string
}

interface PaymentPlanTemplate {
  _id: string
  planName: string
  planDescription: string
  useUpfront: boolean | null
  planDetails: PlanDetail[]
  createdAt: string
}

interface AssetAccount {
  _id: string
  accountStage: string
  asset: {
    _id: string
    sellerItemID: string
  }
  paymentPlan: {
    planName: string
    planDescription: string
    useUpfront: boolean | null
    planDetails: PlanDetail[]
  } | null
}

export default function LinkPaymentPlan({ itemId }: { itemId: string }) {
    // Check if we're in create mode ('new') or edit mode
    const isCreateMode = itemId === 'new';
    const { alert } = useAlert()
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [submitting, setSubmitting] = useState(false)
    const [templates, setTemplates] = useState<any[]>([])
    const [selectedTemplateId, setSelectedTemplateId] = useState<string>('')
    
    // Form states for editable fields
    const [planName, setPlanName] = useState<string>('')
    const [upfrontIncludedDays, setUpfrontIncludedDays] = useState<string>('')
    const [planDescription, setPlanDescription] = useState<string>('')
    const [freeCodePrice, setFreeCodePrice] = useState<string>('')
    const [upfrontPrice, setUpfrontPrice] = useState<string>('')
    const [hourPrice, setHourPrice] = useState<string>('')
    const [daysToCutoff, setDaysToCutoff] = useState<string>('')
    const [expectedPaid, setExpectedPaid] = useState<string>('')
    const [minimumPaymentAmount, setMinimumPaymentAmount] = useState<string>('')
    const [useUpfront, setUseUpfront] = useState<boolean>(false)
    
    // Get the templates query
    const [getTemplates, { data: templatesData, loading: templatesLoading }] = useLazyGetAllPayPlanTemplatesQuery()
    
    // Get specific asset account query for editing mode
    const [getAssetAccount, { data: assetAccountData, loading: assetAccountLoading }] = useLazygetSpecificAssetAccountsForClientQuery({
        id: itemId
    })
    
    // Update asset account mutation
    const { updateAssetAccount } = useUpdateAssetAccount((data) => {
      alert({ text: 'Payment plan linked successfully', type: 'success' })
      resetForm()
      setSelectedTemplateId('')
    })
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                
                // Always fetch templates
                await getTemplates()
                
                // If in edit mode, fetch the asset account data
                if (!isCreateMode) {
                    await getAssetAccount()
                }
            } catch (error) {
                console.error('Error fetching data:', error)
                alert({ text: 'Failed to load data', type: 'error' })
            } finally {
                setLoading(false)
            }
        }
        
        fetchData()
    }, [getTemplates, getAssetAccount, isCreateMode, alert])
    
    // Process templates data when it changes
    useEffect(() => {
        if (templatesData && templatesData.getAllPayPlanTemplates?.page?.edges) {
            const templatesArray = templatesData.getAllPayPlanTemplates.page.edges
                .filter(edge => edge.node)
                .map(edge => edge.node)
            
            setTemplates(templatesArray)
            console.log('Templates loaded:', templatesArray)
        }
    }, [templatesData])

    const findPlanDetailValue = (planDetails: any[], name: string): string => {
        const detail = planDetails.find(detail => detail.pName === name)
        return detail ? detail.pValue : ''
    }
    
    const handleTemplateSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const templateId = e.target.value
        setSelectedTemplateId(templateId)
        
        if (!templateId) {
            resetForm()
            return
        }
        
        const selectedTemplate = templates.find(template => template._id === templateId)
        if (selectedTemplate) {
            console.log('Selected template:', selectedTemplate)
            
            // Populate form with template data
            setPlanName(selectedTemplate.planName || '')
            setPlanDescription(selectedTemplate.planDescription || '')
            setUseUpfront(selectedTemplate.useUpfront === true)
            
            // Get values from planDetails array
            setUpfrontPrice(findPlanDetailValue(selectedTemplate.planDetails, 'upFrontPrice'))
            setUpfrontIncludedDays(findPlanDetailValue(selectedTemplate.planDetails, 'uFrontDaysIncluded'))
            setFreeCodePrice(findPlanDetailValue(selectedTemplate.planDetails, 'freecodePrice'))
            setHourPrice(findPlanDetailValue(selectedTemplate.planDetails, 'hourPrice'))
            setDaysToCutoff(findPlanDetailValue(selectedTemplate.planDetails, 'daysToCutOff'))
            setExpectedPaid(findPlanDetailValue(selectedTemplate.planDetails, 'expectedPaid'))
            setMinimumPaymentAmount(findPlanDetailValue(selectedTemplate.planDetails, 'minimumPaymentAmount'))
        }
    }
    
    const resetForm = () => {
        setPlanName('')
        setUpfrontIncludedDays('')
        setPlanDescription('')
        setFreeCodePrice('')
        setUpfrontPrice('')
        setHourPrice('')
        setDaysToCutoff('')
        setExpectedPaid('')
        setMinimumPaymentAmount('')
        setUseUpfront(false)
    }

    // Process asset account data for editing mode
    useEffect(() => {
        if (assetAccountData && assetAccountData.getSpecificAssetAccount) {
            const account = assetAccountData.getSpecificAssetAccount
            console.log('Asset account data for payment plan:', account)
            
            // Check if payment plan exists
            if (account.paymentPlan) {
                const paymentPlan = account.paymentPlan
                
                // Set payment plan details
                setPlanName(paymentPlan.planName || '')
                setPlanDescription(paymentPlan.planDescription || '')
                // setUseUpfront(paymentPlan.useUpfront === true)
                
                // Process plan details if available
                if (paymentPlan.planDetails && Array.isArray(paymentPlan.planDetails)) {
                    const planDetails = paymentPlan.planDetails
                    
                    setUpfrontPrice(findPlanDetailValue(planDetails, 'upFrontPrice'))
                    setUpfrontIncludedDays(findPlanDetailValue(planDetails, 'uFrontDaysIncluded'))
                    setFreeCodePrice(findPlanDetailValue(planDetails, 'freecodePrice'))
                    setHourPrice(findPlanDetailValue(planDetails, 'hourPrice'))
                    setDaysToCutoff(findPlanDetailValue(planDetails, 'daysToCutOff'))
                    setExpectedPaid(findPlanDetailValue(planDetails, 'expectedPaid'))
                    setMinimumPaymentAmount(findPlanDetailValue(planDetails, 'minimumPaymentAmount'))
                }
            }
        }
    }, [assetAccountData])
    
    // Initialize form with default values for better UX
    useEffect(() => {
        if (!selectedTemplateId && templates.length === 0 && !loading && !assetAccountData?.getSpecificAssetAccount?.paymentPlan) {
            // Set some reasonable defaults for empty form
            setDaysToCutoff('30')
            setHourPrice('0.00')
            setUpfrontPrice('0.00')
            setFreeCodePrice('0.00')
            setMinimumPaymentAmount('0.00')
            setExpectedPaid('0.00')
            setUpfrontIncludedDays('0')
        }
    }, [loading, templates, selectedTemplateId, assetAccountData])
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        setSubmitting(true)
        
        try {
            // Create the payment plan structure matching the required payload format
            const paymentPlan = {
                planName,
                planDescription,
                useUpfront,
                planDetails: [
                    { pName: 'upFrontPrice', pValue: upfrontPrice },
                    { pName: 'freecodePrice', pValue: freeCodePrice },
                    { pName: 'daysToCutOff', pValue: daysToCutoff },
                    { pName: 'minimumPaymentAmount', pValue: minimumPaymentAmount },
                    { pName: 'uFrontDaysIncluded', pValue: upfrontIncludedDays },
                    { pName: 'hourPrice', pValue: hourPrice },
                    { pName: 'expectedPaid', pValue: expectedPaid }
                ]
            }
            
            // Log the payload before submitting
            const payload = {
                updateAssetAccountInput: {
                    paymentPlan,
                    assetAccountId: itemId
                }
            }
            console.log('Submitting payment plan:', payload)
            
            // Call the mutation to update the asset account
            await updateAssetAccount({
                variables: payload
            })
            
        } catch (error) {
            console.error('Error linking payment plan:', error)
            alert({ text: 'Failed to link payment plan', type: 'error' })
        } finally {
            setSubmitting(false)
        }
    }
    
    // Calculate whether we're actually loading
    const isLoading = loading || templatesLoading || assetAccountLoading
    
    // If we're in create mode, show a warning instead of the form
    if (isCreateMode) {
        return <AssetAccountRequired stageName="Payment Plan" />
    }

    if (isLoading) {
        return (
            <div className="grow bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <div className="p-6">
                    <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
                        <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
                        <div className="h-4 w-48 bg-gray-100 dark:bg-gray-800 rounded animate-pulse"></div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
                        <div className="h-6 w-72 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
                        <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
                        <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-6">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i}>
                                        <div className="h-4 w-32 bg-gray-100 dark:bg-gray-800 rounded animate-pulse mb-2"></div>
                                        <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-6">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i}>
                                        <div className="h-4 w-32 bg-gray-100 dark:bg-gray-800 rounded animate-pulse mb-2"></div>
                                        <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="h-10 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="grow bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <div className="p-6">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
                    <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold">Link Payment Plan</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Select a template and customize payment plan details</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Template Selection */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Select Payment Plan Template (Optional)</h3>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FileText className="h-5 w-5 text-gray-400" />
                            </div>
                            <select
                                className="form-select pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                                value={selectedTemplateId}
                                onChange={handleTemplateSelect}
                                disabled={isLoading}
                            >
                                <option value="">Create custom payment plan</option>
                                {templates.map(template => (
                                    <option key={template._id} value={template._id}>
                                        {template.planName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            Select a template to pre-fill the form, or create a custom payment plan below.
                        </p>
                    </div>
                    
                    {/* Plan Details Form - Always visible, populated from template if selected */}
                    <>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Payment Plan Details</h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Left Column */}
                                    <div className="space-y-6">
                                        {/* Plan Name */}
                                        <div className="relative">
                                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                                Plan Name
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Tag className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input 
                                                    type="text"
                                                    className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                                                    value={planName}
                                                    onChange={(e) => setPlanName(e.target.value)}
                                                    placeholder="Plan name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Upfront Included Days */}
                                        <div className="relative">
                                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                                Upfront Included Days
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Calendar className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input 
                                                    type="number"
                                                    className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                                                    value={upfrontIncludedDays}
                                                    onChange={(e) => setUpfrontIncludedDays(e.target.value)}
                                                    placeholder="Days included in upfront payment"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Plan Description */}
                                        <div className="relative">
                                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                                Plan Description
                                            </label>
                                            <div className="relative">
                                                <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                                                    <Info className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <textarea 
                                                    className="form-textarea pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                                                    value={planDescription}
                                                    onChange={(e) => setPlanDescription(e.target.value)}
                                                    placeholder="Describe the payment plan"
                                                    rows={3}
                                                ></textarea>
                                            </div>
                                        </div>
                                        
                                        {/* Free Code Price */}
                                        <div className="relative">
                                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                                Free Code Price
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <DollarSign className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input 
                                                    type="number"
                                                    step="0.01"
                                                    className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                                                    value={freeCodePrice}
                                                    onChange={(e) => setFreeCodePrice(e.target.value)}
                                                    placeholder="0.00"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Upfront Price */}
                                        <div className="relative">
                                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                                Upfront Price
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <DollarSign className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input 
                                                    type="number"
                                                    step="0.01"
                                                    className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                                                    value={upfrontPrice}
                                                    onChange={(e) => setUpfrontPrice(e.target.value)}
                                                    placeholder="0.00"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Right Column */}
                                    <div className="space-y-6">
                                        {/* Hour Price */}
                                        <div className="relative">
                                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                                Hour Price
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <DollarSign className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input 
                                                    type="number"
                                                    step="0.01"
                                                    className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                                                    value={hourPrice}
                                                    onChange={(e) => setHourPrice(e.target.value)}
                                                    placeholder="0.00"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Days to Cut off */}
                                        <div className="relative">
                                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                                Days to Cut off
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <AlertTriangle className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input 
                                                    type="number"
                                                    className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                                                    value={daysToCutoff}
                                                    onChange={(e) => setDaysToCutoff(e.target.value)}
                                                    placeholder="Days before service cutoff"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Expected Paid */}
                                        <div className="relative">
                                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                                Expected Paid
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <DollarSign className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input 
                                                    type="number"
                                                    step="0.01"
                                                    className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                                                    value={expectedPaid}
                                                    onChange={(e) => setExpectedPaid(e.target.value)}
                                                    placeholder="0.00"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Minimum Payment Amount */}
                                        <div className="relative">
                                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                                Minimum Payment Amount
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <DollarSign className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input 
                                                    type="number"
                                                    step="0.01"
                                                    className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                                                    value={minimumPaymentAmount}
                                                    onChange={(e) => setMinimumPaymentAmount(e.target.value)}
                                                    placeholder="0.00"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Use Upfront */}
                                        <div className="relative">
                                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                                Use Upfront
                                            </label>
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={useUpfront}
                                                        onChange={(e) => setUseUpfront(e.target.checked)}
                                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                    />
                                                    <label htmlFor="use-upfront" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                                                        Enable upfront payment
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Summary Card */}
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-6 border border-gray-200 dark:border-gray-700">
                                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Payment Plan Summary</h3>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-gray-500 dark:text-gray-400">Plan Name:</p>
                                        <p className="font-medium text-gray-900 dark:text-gray-100">
                                            {planName || 'Not specified'}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 dark:text-gray-400">Hour Price:</p>
                                        <p className="font-medium text-gray-900 dark:text-gray-100">
                                            {hourPrice ? `$${hourPrice}` : 'Not specified'}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 dark:text-gray-400">Upfront Price:</p>
                                        <p className="font-medium text-gray-900 dark:text-gray-100">
                                            {upfrontPrice ? `$${upfrontPrice}` : 'Not specified'}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 dark:text-gray-400">Days Included:</p>
                                        <p className="font-medium text-gray-900 dark:text-gray-100">
                                            {upfrontIncludedDays ? `${upfrontIncludedDays} days` : 'Not specified'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Submit Button */}
                            <div className="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className={`px-6 py-3 ${submitting ? 'bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'} focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center h-10`}
                                >
                                    {submitting ? (
                                        <><Loader2 className="h-5 w-5 mr-2 animate-spin" /> Processing...</>
                                    ) : (
                                        <><Check className="h-5 w-5 mr-2" /> {selectedTemplateId ? 'Link Payment Plan' : 'Create Payment Plan'}</>
                                    )}
                                </button>
                            </div>
                        </>
                </form>
            </div>
        </div>
    )
}