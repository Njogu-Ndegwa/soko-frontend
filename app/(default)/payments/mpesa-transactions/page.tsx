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

const dummyPayments = [
  {
    id: 'P-001',
    user_id: 'U-1001',
    amount: 1500,
    paybill_account: 'ACC123',
    reference_no: 'REF-001',
    created_at: '2025-06-10T09:15:00Z',
  },
  {
    id: 'P-002',
    user_id: 'U-1002',
    amount: 2750,
    paybill_account: 'ACC456',
    reference_no: 'REF-002',
    created_at: '2025-06-11T14:27:00Z',
  },
  {
    id: 'P-003',
    user_id: 'U-1003',
    amount: 800,
    paybill_account: 'ACC789',
    reference_no: 'REF-003',
    created_at: '2025-06-12T08:03:00Z',
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
   const [customers, setCustomers] = useState<any>(dummyPayments)
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