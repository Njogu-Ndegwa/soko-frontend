'use client'

import { useEffect, useState } from 'react';
import FormPlan from '../../add/customerForm';
import { useAlert } from '@/app/contexts/alertContext';
import { useRouter } from 'next/navigation';
import { AnyARecord } from 'dns';
import { PlanInterface } from '../../constants';
// import { useLazyGetSpecificPlanQuery } from '../../queries';

export default function EditPlanClient({ id }: { id: string }) {
  const [planData, setPlanData] = useState<AnyARecord | null>(null);
  const [loading, setLoading] = useState(false);
  const { alert } = useAlert();
  const router = useRouter();

  // Use the lazy query hook to fetch plan data
  // const [getPlan, { data, error, loading: queryLoading }] = useLazyGetSpecificPlanQuery({
  //   planId: id
  // });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Execute the query to get plan data
        // await getPlan({
        //   variables: {
        //     planId: id
        //   }
        // });
        
        // For now, simulate fetching data
        setTimeout(() => {
          setPlanData({
            id: id,
            name: 'Sample Plan',
            connectionType: 'Fiber',
            price: 29.99,
            speed: '100 Mbps',
            durationDays: 30
          });
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.error('Error fetching plan:', err);
        alert({ text: 'Failed to load plan data', type: 'error' });
        setLoading(false);
        // router.push('/accounts/plans');
      }
    };

    fetchData();
  }, [id]);

  // Update plan data when query results arrive
  // useEffect(() => {
  //   if (data?.getSpecificPlan) {
  //     setPlanData(data.getSpecificPlan);
  //     setLoading(false);
  //   }
  // }, [data]);

  // Handle errors
  // useEffect(() => {
  //   if (error) {
  //     console.error('GraphQL error:', error);
  //     alert({ text: 'Failed to load plan data', type: 'error' });
  //     router.push('/accounts/plans');
  //     setLoading(false);
  //   }
  // }, [error]);

  // Map the GraphQL response to the format expected by FormPlan
  const mapToFormPlanData = () => {
    if (!planData) return null;

    // Convert the GraphQL response structure to match Plan format
    const formattedData: PlanInterface = {
      id: planData.id,
      name: planData.name,
      connectionType: planData.connectionType,
      price: planData.price,
      speed: planData.speed,
      durationDays: planData.durationDays
    };

    return formattedData;
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return <FormPlan editData={mapToFormPlanData()} />;
}