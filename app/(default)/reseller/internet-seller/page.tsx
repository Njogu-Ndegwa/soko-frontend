'use client'
// ManufacturersTable.tsx
import { useState, useEffect } from 'react'
import Table from '@/components/table/table'
import { FleetInterface, CustomerInterface } from '../../accounts/types'
// import { getFleets, reassignFleetToAgent, assignFleetToAgent, getCustomers } from '../services/inventoryService'

import Link from 'next/link';
import DynamicDropdown from '@/components/dropdown-dynamic';
import { getDistributorAgents, } from '@/app/(auth)/services/authService';

import { AgentInterface } from '@/app/(auth)/services/authService'
import { useSelectedItems } from '@/app/selected-items-context';
import DateSelect from '@/components/date-select';
import FilterButton from '@/components/dropdown-filter';
import { SelectedItemsProvider } from '@/app/selected-items-context';
import Alert from '@/components/alert';
import { useAlert } from '@/app/contexts/alertContext';
import FeedbackModal from '@/components/feedback-modal';
import { columns, dropdownOptions } from "./tableColumns";
import { actions } from './tableActions';
import { SearchableListModal } from '@/components/seachable-list-modal';
import { useAuth } from '@/lib/auth-context';
import PaginationClassic from '@/components/pagination-classic';
import  SearchForm  from '@/components/search-form';

const dummyResellers = [
  {
    id: 'RSL-001',
    business_name: 'TechConnect Solutions',
    contact_person: 'John Kamau',
    phone_number: '+254712345678',
    email: 'john@techconnect.co.ke',
    location: 'Nakuru',
    coverage_area: 'Nakuru Town, Naivasha',
    total_clients: 245,
    active_clients: 198,
    allocated_bandwidth: 500,
    bandwidth_used: 387,
    account_balance: 85000,
    commission_rate: 15,
    monthly_commission: 42500,
    status: 'ACTIVE',
    joined_date: '2023-03-15T10:00:00Z',
    last_payment: '2024-06-01T14:30:00Z'
  },
  {
    id: 'RSL-002',
    business_name: 'Coastal Net Services',
    contact_person: 'Grace Wanjiku',
    phone_number: '+254798765432',
    email: 'grace@coastalnet.co.ke',
    location: 'Mombasa',
    coverage_area: 'Mombasa Island, Nyali, Bamburi',
    total_clients: 156,
    active_clients: 134,
    allocated_bandwidth: 300,
    bandwidth_used: 245,
    account_balance: -25000,
    commission_rate: 12,
    monthly_commission: 18600,
    status: 'ACTIVE',
    joined_date: '2023-07-22T11:15:00Z',
    last_payment: '2024-05-15T09:45:00Z'
  },
  {
    id: 'RSL-003',
    business_name: 'Mountain View ISP',
    contact_person: 'David Mwangi',
    phone_number: '+254723456789',
    email: 'david@mountainview.co.ke',
    location: 'Nyeri',
    coverage_area: 'Nyeri Town, Karatina, Othaya',
    total_clients: 89,
    active_clients: 67,
    allocated_bandwidth: 200,
    bandwidth_used: 123,
    account_balance: 15000,
    commission_rate: 10,
    monthly_commission: 8900,
    status: 'PENDING',
    joined_date: '2024-05-10T08:30:00Z',
    last_payment: null
  },
  {
    id: 'RSL-004',
    business_name: 'Lake Region Networks',
    contact_person: 'Lisa Achieng',
    phone_number: '+254756789012',
    email: 'lisa@lakeregion.co.ke',
    location: 'Kisumu',
    coverage_area: 'Kisumu City, Ahero, Maseno',
    total_clients: 312,
    active_clients: 289,
    allocated_bandwidth: 750,
    bandwidth_used: 634,
    account_balance: 120000,
    commission_rate: 18,
    monthly_commission: 67500,
    status: 'ACTIVE',
    joined_date: '2022-11-08T13:20:00Z',
    last_payment: '2024-06-05T16:10:00Z'
  },
  {
    id: 'RSL-005',
    business_name: 'Border Connect Ltd',
    contact_person: 'Tom Ochieng',
    phone_number: '+254787654321',
    email: 'tom@borderconnect.co.ke',
    location: 'Busia',
    coverage_area: 'Busia Town, Malaba',
    total_clients: 67,
    active_clients: 0,
    allocated_bandwidth: 150,
    bandwidth_used: 0,
    account_balance: -45000,
    commission_rate: 8,
    monthly_commission: 0,
    status: 'SUSPENDED',
    joined_date: '2023-09-12T15:45:00Z',
    last_payment: '2024-03-20T11:30:00Z'
  },
  {
    id: 'RSL-006',
    business_name: 'Central Kenya Networks',
    contact_person: 'Emily Njeri',
    phone_number: '+254734567890',
    email: 'emily@centralkenya.co.ke',
    location: 'Thika',
    coverage_area: 'Thika Town, Ruiru, Juja',
    total_clients: 178,
    active_clients: 156,
    allocated_bandwidth: 400,
    bandwidth_used: 298,
    account_balance: 67000,
    commission_rate: 14,
    monthly_commission: 28400,
    status: 'ACTIVE',
    joined_date: '2023-01-18T09:00:00Z',
    last_payment: '2024-06-08T12:45:00Z'
  },
]

export default function FleetTableWrapper() {
  return (
    <SelectedItemsProvider>
      <FleetTable />
    </SelectedItemsProvider>
  )
}

function FleetTable() {
   const [customers, setCustomers] = useState<any>(dummyResellers)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [agents, setAgents] = useState<AgentInterface[]>([])
  const { setSelectedItems, selectedItems } = useSelectedItems()
  const [selectedAgentId, setSelectedAgentId] = useState<number | null>(null);
  const [isBannerOpen, setBannerOpen] = useState(false)
  const [dangerModalOpen, setDangerModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const { alert } = useAlert()
  const { distributorId } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

    const getAllAssetAccounts = () => {

    }


  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    getAllAssetAccounts();
  }, [debouncedSearchTerm]);

  const fetchAgents = async () => {
    try {
      const data = await getDistributorAgents()
      setAgents(data)
    }
    catch (err) {

    }
    finally {

    }

  }

  useEffect(() => {
    // fetchAgents()
    // fetchCustomers()
    getAllAssetAccounts()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000); // Simulate loading delay
  },[])

  const handleSelectionChange = (selectedIds: any[]) => {
    setSelectedItems(selectedIds)
  }

  const handleAgentSelect = (agent: any) => {
    setSelectedAgentId(agent.id); // Just set the ID, no actor here
  };

  const handleDropdownItemSelect = (option: any) => {
    setSelectedOption(option.id)
    if (option.id === 0) {
      setDangerModalOpen(true);
    } else if (option.id === 1 || option.id === 2) {
      setIsOpen(true)
    }
  }
  
  const loadData = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    // fetchCustomers();
    setSelectedItems([]);
  };

  const handleActionClick = async (actor: string) => {
    // if (selectedAgentId) {
    //   if (actor === "assign") {
    //     assignFleetToAgent({ agent_id: selectedAgentId, fleet_ids: selectedItems })
    //     alert({ text: "Fleet Assignment started Successfully", type: "success" })
    //     loadData()
    //   } else if (actor === "reAssign") {
    //     await reassignFleetToAgent({ new_agent_id: selectedAgentId, fleet_ids: selectedItems })
    //     alert({ text: "Fleet ReAssignment started Successfully", type: "success" })
    //     loadData()
    //   }
    // } else {
    //   alert({ text: "Select an Agent First", type: "error" })
    // }
  };

  const filteredAgents = agents.filter(agent =>
    agent.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      <FeedbackModal
        isOpen={dangerModalOpen}
        setIsOpen={setDangerModalOpen}
        variant="danger"
        title={`Delete ${1} customer?`}
        content="Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum."
        confirmButtonLabel="Yes, Delete it"
      />
      <SearchableListModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Select an Agent"
        items={filteredAgents}
        searchPlaceholder="Search for an agent..."
        searchValue={searchQuery}
        onSearch={setSearchQuery}
        renderItem={(agent) => agent.email}
        onSelect={handleAgentSelect}
        selectedItemId={selectedAgentId}
        actionLabel={selectedOption === 1 ? 'Assign Item' : 'Re-assign Item'}
        onAction={() => handleActionClick(selectedOption === 1 ? 'assign' : 'reAssign')}
      />
      {/* Header section */}
      <div className="sm:flex sm:justify-between sm:items-center mb-5">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
            Internet Resellers
          </h1>
        </div>

        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
        <SearchForm
          placeholder="Search" 
          searchTerm={searchTerm}
          setSearchTerm={handleSearch}
        />
          {/* <Link
            href="/accounts/customers/add" // Replace with your desired path
            className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white flex items-center justify-center"
          >
            <svg
              className="fill-current shrink-0 xs:hidden"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="max-xs:sr-only">Add</span>
          </Link> */}
        </div>
      </div>
      <div className="sm:flex sm:justify-between sm:items-center mb-5">

        {/* Left side */}
        <div className="mb-4 sm:mb-0">
          <ul className="flex flex-wrap -m-1">
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-800 transition">All <span className="ml-1 text-gray-400 dark:text-gray-500">{20}</span></button>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Delete button */}
          <DynamicDropdown options={dropdownOptions} onDropdownItemSelect={handleDropdownItemSelect} />
          {/* Dropdown */}
          <DateSelect />
          {/* Filter button */}
          <FilterButton align="right" />
        </div>

      </div>
      {/* Table section */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl">
        <Table
          data={customers}
          columns={columns}
          totalCount={customers.length}
          selectable
          actions={(row) => actions({ row, onDelete: loadData })}
          onSelectionChange={handleSelectionChange}
          isLoading={loading}
        />
      </div>
      <div className="mt-8">
        
      </div> 
    </div>
  )
}