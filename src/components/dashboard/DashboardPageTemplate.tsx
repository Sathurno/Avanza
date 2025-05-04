'use client';

import React, { ReactNode } from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardLayout from './DashboardLayout';
import DashboardSidebar from './DashboardSidebar';

interface DashboardPageTemplateProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const DashboardPageTemplate: React.FC<DashboardPageTemplateProps> = ({ 
  children, 
  title, 
  description 
}) => {
  return (
    <>
      <DashboardHeader />
      <DashboardLayout>
        <DashboardSidebar />
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">{title}</h1>
                {description && <p className="text-gray-600">{description}</p>}
              </div>
            </div>
          </div>
          
          {children}
        </div>
      </DashboardLayout>
    </>
  );
};

export default DashboardPageTemplate; 