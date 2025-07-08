
// 'use client'
// // CustomersTable.tsx
// import { useState, useEffect } from 'react'
// import Table from '@/components/table/table'
// import Link from 'next/link';
// import DynamicDropdown from '@/components/dropdown-dynamic';
// import { getDistributorAgents, } from '@/app/(auth)/services/authService';
// import { useQuery, gql } from '@apollo/client';
// import { AgentInterface } from '@/app/(auth)/services/authService'
// import { useSelectedItems } from '@/app/selected-items-context';
// import DateSelect from '@/components/date-select';
// import FilterButton from '@/components/dropdown-filter';
// import { SelectedItemsProvider } from '@/app/selected-items-context';
// import Alert from '@/components/alert';
// import { useAlert } from '@/app/contexts/alertContext';
// import FeedbackModal from '@/components/feedback-modal';
// import { columns, dropdownOptions } from "./tableColumns";
// import { actions } from './tableActions';
// import { SearchableListModal } from '@/components/seachable-list-modal';
// import { useAuth } from '@/lib/auth-context';
// import PaginationClassic from '@/components/pagination-classic';
// import  SearchForm  from '@/components/search-form';

// // GraphQL Query
// const GET_MY_CUSTOMERS = gql`
//   query MyQuery {
//     myCustomers {
//       expiry
//       macAddress
//       id
//       name
//       phone
//       plan {
//         connectionType
//         durationDays
//         id
//         name
//         price
//         speed
//       }
//       pppoeUsername
//       staticIp
//       status
//     }
//   }
// `;

// interface Customer {
//   expiry: string | null;
//   macAddress: string | null;
//   id: number;
//   name: string;
//   phone: string;
//   plan: {
//     connectionType: string;
//     durationDays: number;
//     id: number;
//     name: string;
//     price: number;
//     speed: string;
//   };
//   pppoeUsername: string | null;
//   staticIp: string | null;
//   status: string;
// }

// export default function CustomersTableWrapper() {
//   return (
//     <SelectedItemsProvider>
//       <CustomersTable />
//     </SelectedItemsProvider>
//   )
// }

// function CustomersTable() {
//   const { data, loading: queryLoading, error: queryError, refetch } = useQuery(GET_MY_CUSTOMERS);
//   const [customers, setCustomers] = useState<Customer[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)
//   const [agents, setAgents] = useState<AgentInterface[]>([])
//   const { setSelectedItems, selectedItems } = useSelectedItems()
//   const [selectedAgentId, setSelectedAgentId] = useState<number | null>(null);
//   const [isBannerOpen, setBannerOpen] = useState(false)
//   const [dangerModalOpen, setDangerModalOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isOpen, setIsOpen] = useState(false)
//   const [selectedOption, setSelectedOption] = useState<number | null>(null);
//   const { alert } = useAlert()
//   const { distributorId } = useAuth();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

//   // Handle GraphQL data
//   useEffect(() => {
//     if (data?.myCustomers) {
//       setCustomers(data.myCustomers);
//       setLoading(false);
//     }
//   }, [data]);

//   // Handle GraphQL error
//   useEffect(() => {
//     if (queryError) {
//       setError(queryError.message);
//       setLoading(false);
//     }
//   }, [queryError]);

//   // Handle GraphQL loading
//   useEffect(() => {
//     setLoading(queryLoading);
//   }, [queryLoading]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedSearchTerm(searchTerm);
//     }, 500); // 500ms delay

//     return () => clearTimeout(timer);
//   }, [searchTerm]);

//   // Filter customers based on search term
//   const filteredCustomers = customers.filter(customer =>
//     customer.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
//     customer.phone.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
//     customer.plan?.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
//     customer.status.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
//   );

//   const fetchAgents = async () => {
//     try {
//       const data = await getDistributorAgents()
//       setAgents(data)
//     }
//     catch (err) {
//       console.error('Error fetching agents:', err);
//     }
//   }

//   useEffect(() => {
//     fetchAgents()
//   }, [])

//   const handleSelectionChange = (selectedIds: any[]) => {
//     setSelectedItems(selectedIds)
//   }

//   const handleAgentSelect = (agent: any) => {
//     setSelectedAgentId(agent.id);
//   };

//   const handleDropdownItemSelect = (option: any) => {
//     setSelectedOption(option.id)
//     if (option.id === 0) {
//       setDangerModalOpen(true);
//     } else if (option.id === 1) {
//       // Edit - you might want to handle this differently
//       setIsOpen(true)
//     } else if (option.id === 2 || option.id === 3) {
//       // Suspend/Activate
//       handleStatusChange(option.id === 2 ? 'suspend' : 'activate');
//     }
//   }

//   const handleStatusChange = (action: 'suspend' | 'activate') => {
//     if (selectedItems.length === 0) {
//       alert({ text: "Please select customers first", type: "error" })
//       return;
//     }
    
//     const actionText = action === 'suspend' ? 'suspended' : 'activated';
//     alert({ text: `${selectedItems.length} customer(s) ${actionText} successfully`, type: "success" })
//     loadData()
//   }
  
//   const loadData = async () => {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     refetch(); // Refetch GraphQL data
//     setSelectedItems([]);
//   };

//   const handleActionClick = async (actor: string) => {
//     // Handle actions based on your requirements
//     console.log('Action clicked:', actor, 'Selected items:', selectedItems);
//     alert({ text: "Action completed successfully", type: "success" })
//     loadData()
//   };

//   const filteredAgents = agents.filter(agent =>
//     agent.email.toLowerCase().includes(searchQuery.toLowerCase())
//   )

//   const handleSearch = (term: string) => {
//     setSearchTerm(term);
//   }

//   // Get status counts
//   const statusCounts = {
//     all: filteredCustomers.length,
//     active: filteredCustomers.filter(c => c.status === 'active').length,
//     inactive: filteredCustomers.filter(c => c.status === 'inactive').length,
//     suspended: filteredCustomers.filter(c => c.status === 'suspended').length,
//     expired: filteredCustomers.filter(c => c.status === 'expired').length,
//   };

//   // Handle error state
//   if (error) {
//     return (
//       <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
//         <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
//           <p>Error loading customers: {error}</p>
//           <button 
//             onClick={() => refetch()} 
//             className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
//       <FeedbackModal
//         isOpen={dangerModalOpen}
//         setIsOpen={setDangerModalOpen}
//         variant="danger"
//         title={`Delete ${selectedItems.length} customer${selectedItems.length !== 1 ? 's' : ''}?`}
//         content="Are you sure you want to delete the selected customer(s)? This action cannot be undone and will remove all their data including connection details."
//         confirmButtonLabel="Yes, Delete"
//       />
//       <SearchableListModal
//         isOpen={isOpen}
//         setIsOpen={setIsOpen}
//         title="Select an Agent"
//         items={filteredAgents}
//         searchPlaceholder="Search for an agent..."
//         searchValue={searchQuery}
//         onSearch={setSearchQuery}
//         renderItem={(agent) => agent.email}
//         onSelect={handleAgentSelect}
//         selectedItemId={selectedAgentId}
//         actionLabel="Assign Customers"
//         onAction={() => handleActionClick('assign')}
//       />

//       {/* Header section */}
//       <div className="sm:flex sm:justify-between sm:items-center mb-5">
//         <div className="mb-4 sm:mb-0">
//           <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
//             Customers
//           </h1>
//         </div>

//         <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
//           <SearchForm
//             placeholder="Search customers..." 
//             searchTerm={searchTerm}
//             setSearchTerm={handleSearch}
//           />
//           <Link
//             href="/clients/customers/add"
//             className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white flex items-center justify-center"
//           >
//             <svg
//               className="fill-current shrink-0 xs:hidden"
//               width="16"
//               height="16"
//               viewBox="0 0 16 16"
//               xmlns="http://www.w3.org/2000/svg"
//               aria-hidden="true"
//               focusable="false"
//             >
//               <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
//             </svg>
//             <span className="max-xs:sr-only">Add Customer</span>
//           </Link>
//         </div>
//       </div>

//       <div className="sm:flex sm:justify-between sm:items-center mb-5">
//         {/* Left side */}
//         <div className="mb-4 sm:mb-0">
//           <ul className="flex flex-wrap -m-1">
//             <li className="m-1">
//               <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-800 transition">
//                 All <span className="ml-1 text-gray-400 dark:text-gray-500">{filteredCustomers.length}</span>
//               </button>
//             </li>
//           </ul>
//         </div>

//         {/* Right side */}
//         <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
//           <DynamicDropdown options={dropdownOptions} onDropdownItemSelect={handleDropdownItemSelect} />
//           <DateSelect />
//           <FilterButton align="right" />
//         </div>
//       </div>

//       {/* Table section */}
//       <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl">
//         <Table
//           data={filteredCustomers}
//           columns={columns}
//           totalCount={filteredCustomers.length}
//           selectable
//           actions={(row) => actions({ row, onDelete: loadData })}
//           onSelectionChange={handleSelectionChange}
//           isLoading={loading}
//         />
//       </div>

//       <div className="mt-8">
//         <PaginationClassic />
//       </div> 
//     </div>
//   )
// }

'use client'
// RoutersTable.tsx
import { useState, useEffect } from 'react'
import Table from '@/components/table/table'
import Link from 'next/link';
import DynamicDropdown from '@/components/dropdown-dynamic';
import { getDistributorAgents, } from '@/app/(auth)/services/authService';
import { useQuery, gql } from '@apollo/client';
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

// GraphQL Query
const GET_MY_ROUTERS = gql`
  query MyQuery {
    myRouters {
      id
      name
      ipAddress
      port
    }
  }
`;

interface Router {
  id: number;
  name: string;
  ipAddress: string;
  port: number;
}

export default function RoutersTableWrapper() {
  return (
    <SelectedItemsProvider>
      <RoutersTable />
    </SelectedItemsProvider>
  )
}

function RoutersTable() {
  const { data, loading: queryLoading, error: queryError, refetch } = useQuery(GET_MY_ROUTERS);
  const [routers, setRouters] = useState<Router[]>([])
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

  // Handle GraphQL data
  useEffect(() => {
    if (data?.myRouters) {
      setRouters(data.myRouters);
      setLoading(false);
    }
  }, [data]);

  // Handle GraphQL error
  useEffect(() => {
    if (queryError) {
      setError(queryError.message);
      setLoading(false);
    }
  }, [queryError]);

  // Handle GraphQL loading
  useEffect(() => {
    setLoading(queryLoading);
  }, [queryLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Filter routers based on search term
  const filteredRouters = routers.filter(router =>
    router.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    router.ipAddress.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    router.port.toString().includes(debouncedSearchTerm.toLowerCase())
  );

  const fetchAgents = async () => {
    try {
      const data = await getDistributorAgents()
      setAgents(data)
    }
    catch (err) {
      console.error('Error fetching agents:', err);
    }
  }

  useEffect(() => {
    fetchAgents()
  }, [])

  const handleSelectionChange = (selectedIds: any[]) => {
    setSelectedItems(selectedIds)
  }

  const handleAgentSelect = (agent: any) => {
    setSelectedAgentId(agent.id);
  };

  const handleDropdownItemSelect = (option: any) => {
    setSelectedOption(option.id)
    if (option.id === 0) {
      setDangerModalOpen(true);
    } else if (option.id === 1) {
      setIsOpen(true)
    } else if (option.id === 2) {
      // Test Connection
      handleTestConnection();
    } else if (option.id === 3) {
      // Restart
      handleRestart();
    }
  }

  const handleTestConnection = () => {
    if (selectedItems.length === 0) {
      alert({ text: "Please select routers first", type: "error" })
      return;
    }
    
    alert({ text: `Testing connection for ${selectedItems.length} router(s)...`, type: "success" })
    loadData()
  }

  const handleRestart = () => {
    if (selectedItems.length === 0) {
      alert({ text: "Please select routers first", type: "error" })
      return;
    }
    
    alert({ text: `Restarting ${selectedItems.length} router(s)...`, type: "success" })
    loadData()
  }
  
  const loadData = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    refetch(); // Refetch GraphQL data
    setSelectedItems([]);
  };

  const handleActionClick = async (actor: string) => {
    // Handle actions based on your requirements
    console.log('Action clicked:', actor, 'Selected items:', selectedItems);
    alert({ text: "Action completed successfully", type: "success" })
    loadData()
  };

  const filteredAgents = agents.filter(agent =>
    agent.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  }

  // Handle error state
  if (error) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <p>Error loading routers: {error}</p>
          <button 
            onClick={() => refetch()} 
            className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      <FeedbackModal
        isOpen={dangerModalOpen}
        setIsOpen={setDangerModalOpen}
        variant="danger"
        title={`Delete ${selectedItems.length} router${selectedItems.length !== 1 ? 's' : ''}?`}
        content="Are you sure you want to delete the selected router(s)? This action cannot be undone and will remove all router configurations and connection data."
        confirmButtonLabel="Yes, Delete"
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
        actionLabel="Assign Routers"
        onAction={() => handleActionClick('assign')}
      />

      {/* Header section */}
      <div className="sm:flex sm:justify-between sm:items-center mb-5">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
            Routers
          </h1>
        </div>

        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          <SearchForm
            placeholder="Search routers..." 
            searchTerm={searchTerm}
            setSearchTerm={handleSearch}
          />
          <Link
            href="/assets/routers/add"
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
            <span className="max-xs:sr-only">Add Router</span>
          </Link>
        </div>
      </div>

      <div className="sm:flex sm:justify-between sm:items-center mb-5">
        {/* Left side */}
        <div className="mb-4 sm:mb-0">
          <ul className="flex flex-wrap -m-1">
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-800 transition">
                All <span className="ml-1 text-gray-400 dark:text-gray-500">{filteredRouters.length}</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          <DynamicDropdown options={dropdownOptions} onDropdownItemSelect={handleDropdownItemSelect} />
          <DateSelect />
          <FilterButton align="right" />
        </div>
      </div>

      {/* Table section */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl">
        <Table
          data={filteredRouters}
          columns={columns}
          totalCount={filteredRouters.length}
          selectable
          actions={(row) => actions({ row, onDelete: loadData })}
          onSelectionChange={handleSelectionChange}
          isLoading={loading}
        />
      </div>

      <div className="mt-8">
        <PaginationClassic />
      </div> 
    </div>
  )
}