'use client';

import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardWelcome from '@/components/dashboard/DashboardWelcome';
import ProgressCard from '@/components/dashboard/ProgressCard';
import DocumentsCard from '@/components/dashboard/DocumentsCard';
import NotificationsCard from '@/components/dashboard/NotificationsCard';
import ProceduresList from '@/components/dashboard/ProceduresList';
import PaymentsList from '@/components/dashboard/PaymentsList';

export default function Dashboard() {
  return (
    <>
      <DashboardHeader />
      <DashboardLayout>
        <DashboardSidebar />
        <div className="flex-1">
          <DashboardWelcome name="Juan" />
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
            <div className="xl:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                <ProgressCard />
                <DocumentsCard />
              </div>
            </div>
            <NotificationsCard />
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <ProceduresList />
            <PaymentsList />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
} 