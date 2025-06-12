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

const dummyTickets = [
  {
    ticket_number: 'TKT-2024-001234',
    title: 'PPPoE connection keeps disconnecting',
    description: 'Customer experiencing frequent PPPoE disconnections every 2-3 hours, affecting business operations',
    requester_name: 'John Kamau',
    requester_email: 'john.kamau@techsolutions.co.ke',
    assigned_to: 'Sarah Wilson',
    category: 'CONNECTIVITY',
    priority: 'HIGH',
    status: 'OPEN',
    created_at: '2024-06-10T09:30:00Z',
    updated_at: '2024-06-10T09:30:00Z',
    due_date: '2024-06-12T17:00:00Z',
    source: 'EMAIL'
  },
  {
    ticket_number: 'TKT-2024-001235',
    title: 'Static IP not accessible from outside',
    description: 'Static IP address 41.90.64.15 not reachable from external networks, port forwarding issues',
    requester_name: 'Grace Wanjiku',
    requester_email: 'grace.wanjiku@mediahouse.co.ke',
    assigned_to: 'Mike Johnson',
    category: 'NETWORK',
    priority: 'MEDIUM',
    status: 'IN_PROGRESS',
    created_at: '2024-06-09T14:15:00Z',
    updated_at: '2024-06-11T10:20:00Z',
    due_date: '2024-06-15T17:00:00Z',
    source: 'WEB_FORM'
  },
  {
    ticket_number: 'TKT-2024-001236',
    title: 'Billing discrepancy for hotspot usage',
    description: 'Customer billed for 50GB but usage logs show only 35GB consumed in May 2024',
    requester_name: 'David Mwangi',
    requester_email: 'david.mwangi@gmail.com',
    assigned_to: 'Alex Chen',
    category: 'BILLING',
    priority: 'CRITICAL',
    status: 'RESOLVED',
    created_at: '2024-06-08T11:45:00Z',
    updated_at: '2024-06-09T16:30:00Z',
    due_date: '2024-06-08T23:59:00Z',
    source: 'PHONE'
  },
  {
    ticket_number: 'TKT-2024-001237',
    title: 'RADIUS authentication failing',
    description: 'Multiple PPPoE users unable to authenticate, RADIUS server returning access-reject',
    requester_name: 'Lisa Achieng',
    requester_email: 'lisa.achieng@connectisp.co.ke',
    assigned_to: null,
    category: 'AUTHENTICATION',
    priority: 'CRITICAL',
    status: 'PENDING',
    created_at: '2024-06-11T08:00:00Z',
    updated_at: '2024-06-11T08:00:00Z',
    due_date: '2024-06-11T18:00:00Z',
    source: 'CHAT'
  },
  {
    ticket_number: 'TKT-2024-001238',
    title: 'Bandwidth upgrade request',
    description: 'Business customer requesting upgrade from 10Mbps to 50Mbps dedicated line',
    requester_name: 'Tom Ochieng',
    requester_email: 'tom.ochieng@retailchain.co.ke',
    assigned_to: 'Sarah Wilson',
    category: 'SERVICE_REQUEST',
    priority: 'MEDIUM',
    status: 'CLOSED',
    created_at: '2024-06-07T13:20:00Z',
    updated_at: '2024-06-08T09:45:00Z',
    due_date: '2024-06-10T17:00:00Z',
    source: 'EMAIL'
  },
  {
    ticket_number: 'TKT-2024-001239',
    title: 'Hotspot portal not redirecting',
    description: 'Users connecting to WiFi hotspot not getting redirected to login portal, direct internet access',
    requester_name: 'Emily Njeri',
    requester_email: 'emily.njeri@coffeeshop.co.ke',
    assigned_to: 'Mike Johnson',
    category: 'HOTSPOT',
    priority: 'HIGH',
    status: 'IN_PROGRESS',
    created_at: '2024-06-11T16:10:00Z',
    updated_at: '2024-06-12T08:30:00Z',
    due_date: '2024-06-13T17:00:00Z',
    source: 'WEB_FORM'
  },
  {
    ticket_number: 'TKT-2024-001240',
    title: 'Data allowance not updating',
    description: 'PPPoE user data consumption not reflecting in billing system, showing 0GB used',
    requester_name: 'Peter Kariuki',
    requester_email: 'peter.kariuki@homeuser.net',
    assigned_to: 'Alex Chen',
    category: 'BILLING',
    priority: 'MEDIUM',
    status: 'OPEN',
    created_at: '2024-06-12T07:15:00Z',
    updated_at: '2024-06-12T07:15:00Z',
    due_date: '2024-06-14T17:00:00Z',
    source: 'PHONE'
  },
  {
    ticket_number: 'TKT-2024-001241',
    title: 'Static IP pool exhaustion',
    description: 'Unable to assign new static IP addresses, pool appears to be full in Nairobi region',
    requester_name: 'Ann Mutua',
    requester_email: 'ann.mutua@datacenter.co.ke',
    assigned_to: null,
    category: 'INFRASTRUCTURE',
    priority: 'HIGH',
    status: 'OPEN',
    created_at: '2024-06-12T10:30:00Z',
    updated_at: '2024-06-12T10:30:00Z',
    due_date: '2024-06-13T12:00:00Z',
    source: 'EMAIL'
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
   const [customers, setCustomers] = useState<any>(dummyTickets)
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
          <Link
            href="/payments/payment-plans/add" // Replace with your desired path
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
          </Link>
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