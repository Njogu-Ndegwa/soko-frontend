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

const dummyCustomers = [
  {
    id: 'CUST-001',
    name: 'John Kamau',
    phone_number: '+254712345678',
    email: 'john.kamau@techsolutions.co.ke',
    location: 'Westlands, Nairobi',
    current_plan: 'Home Premium',
    service_type: 'PPPOE',
    account_balance: 2300,
    connection_status: 'ONLINE',
    status: 'ACTIVE',
    last_login: '2024-06-12T08:30:00Z',
    created_at: '2024-01-15T10:00:00Z',
    data_usage_current_month: 85.5
  },
  {
    id: 'CUST-002',
    name: 'Grace Wanjiku',
    phone_number: '+254798765432',
    email: 'grace.wanjiku@mediahouse.co.ke',
    location: 'Karen, Nairobi',
    current_plan: 'Business Static IP',
    service_type: 'STATIC',
    account_balance: -1500,
    connection_status: 'LIMITED',
    status: 'ACTIVE',
    last_login: '2024-06-11T16:45:00Z',
    created_at: '2024-02-10T14:30:00Z',
    data_usage_current_month: 156.2
  },
  {
    id: 'CUST-003',
    name: 'David Mwangi',
    phone_number: '+254723456789',
    email: 'david.mwangi@gmail.com',
    location: 'Kiambu',
    current_plan: 'Home Starter',
    service_type: 'PPPOE',
    account_balance: 0,
    connection_status: 'OFFLINE',
    status: 'PENDING',
    last_login: '2024-06-08T12:20:00Z',
    created_at: '2024-06-01T09:15:00Z',
    data_usage_current_month: 45.8
  },
  {
    id: 'CUST-004',
    name: 'Lisa Achieng',
    phone_number: '+254756789012',
    email: 'lisa.achieng@connectisp.co.ke',
    location: 'Kilimani, Nairobi',
    current_plan: 'SME Dedicated',
    service_type: 'STATIC',
    account_balance: 7500,
    connection_status: 'ONLINE',
    status: 'ACTIVE',
    last_login: '2024-06-12T14:10:00Z',
    created_at: '2024-03-20T11:00:00Z',
    data_usage_current_month: 245.7
  },
  {
    id: 'CUST-005',
    name: 'Tom Ochieng',
    phone_number: '+254787654321',
    email: 'tom.ochieng@retailchain.co.ke',
    location: 'Industrial Area, Nairobi',
    current_plan: 'Corporate Enterprise',
    service_type: 'STATIC',
    account_balance: -3200,
    connection_status: 'OFFLINE',
    status: 'SUSPENDED',
    last_login: '2024-06-05T09:30:00Z',
    created_at: '2024-01-08T15:45:00Z',
    data_usage_current_month: 0
  },
  {
    id: 'CUST-006',
    name: 'Emily Njeri',
    phone_number: '+254734567890',
    email: 'emily.njeri@coffeeshop.co.ke',
    location: 'Thika Road',
    current_plan: 'Home Ultra',
    service_type: 'PPPOE',
    account_balance: 1200,
    connection_status: 'ONLINE',
    status: 'ACTIVE',
    last_login: '2024-06-12T10:15:00Z',
    created_at: '2024-04-12T13:20:00Z',
    data_usage_current_month: 189.3
  },
  {
    id: 'CUST-007',
    name: 'Peter Kariuki',
    phone_number: '+254745678901',
    email: 'peter.kariuki@homeuser.net',
    location: 'Kasarani, Nairobi',
    current_plan: 'Student Package',
    service_type: 'PPPOE',
    account_balance: 500,
    connection_status: 'ONLINE',
    status: 'ACTIVE',
    last_login: '2024-06-12T07:45:00Z',
    created_at: '2024-05-01T08:30:00Z',
    data_usage_current_month: 42.1
  },
  {
    id: 'CUST-008',
    name: 'Ann Mutua',
    phone_number: '+254712348765',
    email: 'ann.mutua@datacenter.co.ke',
    location: 'CBD, Nairobi',
    current_plan: 'Business Static IP',
    service_type: 'STATIC',
    account_balance: 12000,
    connection_status: 'ONLINE',
    status: 'ACTIVE',
    last_login: '2024-06-12T11:20:00Z',
    created_at: '2024-02-28T16:10:00Z',
    data_usage_current_month: 298.4
  }
]

export default function FleetTableWrapper() {
  return (
    <SelectedItemsProvider>
      <FleetTable />
    </SelectedItemsProvider>
  )
}

function FleetTable() {
   const [customers, setCustomers] = useState<any>(dummyCustomers)
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
            M-Pesa Transactions
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