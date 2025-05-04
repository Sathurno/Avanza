'use client';

import React, { useState } from 'react';
import DashboardPageTemplate from '@/components/dashboard/DashboardPageTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBell, 
  faExclamationTriangle, 
  faCheckCircle, 
  faInfoCircle,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';

const NotificationsPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const notifications = [
    {
      id: 1,
      type: 'info',
      title: 'Documento recibido',
      message: 'Tu programa de estudios ha sido recibido para revisión.',
      date: 'Hoy, 10:45 AM',
      isRead: false
    },
    {
      id: 2,
      type: 'error',
      title: 'Documento faltante',
      message: 'Necesitamos tu DNI o Pasaporte para continuar con el trámite. Por favor, súbelo lo antes posible.',
      date: 'Ayer, 15:30 PM',
      isRead: false
    },
    {
      id: 3,
      type: 'success',
      title: 'Pago confirmado',
      message: 'Hemos recibido tu pago inicial de 350€. Tu trámite avanza según lo previsto.',
      date: '15/04/2023, 09:15 AM',
      isRead: true
    },
    {
      id: 4,
      type: 'info',
      title: 'Nuevo paso completado',
      message: 'La fase de revisión documental ha sido completada. Pasaremos al siguiente paso del proceso.',
      date: '10/04/2023, 11:20 AM',
      isRead: true
    },
    {
      id: 5,
      type: 'warning',
      title: 'Revisión pendiente',
      message: 'Tu certificado de notas está pendiente de revisión por el departamento académico.',
      date: '05/04/2023, 14:45 PM',
      isRead: true
    }
  ];
  
  const filteredNotifications = activeTab === 'all' 
    ? notifications 
    : activeTab === 'unread' 
      ? notifications.filter(n => !n.isRead) 
      : notifications.filter(n => n.type === activeTab);
      
  const unreadCount = notifications.filter(n => !n.isRead).length;
  
  const getTypeStyles = (type) => {
    switch(type) {
      case 'info':
        return { icon: faInfoCircle, bgColor: 'bg-blue-50', borderColor: 'border-blue-500', iconColor: 'text-blue-500' };
      case 'error':
        return { icon: faExclamationTriangle, bgColor: 'bg-red-50', borderColor: 'border-red-500', iconColor: 'text-red-500' };
      case 'success':
        return { icon: faCheckCircle, bgColor: 'bg-green-50', borderColor: 'border-green-500', iconColor: 'text-green-500' };
      case 'warning':
        return { icon: faExclamationTriangle, bgColor: 'bg-yellow-50', borderColor: 'border-yellow-500', iconColor: 'text-yellow-500' };
      default:
        return { icon: faBell, bgColor: 'bg-gray-50', borderColor: 'border-gray-500', iconColor: 'text-gray-500' };
    }
  };
  
  return (
    <DashboardPageTemplate 
      title="Notificaciones"
      description="Mantente al día con las actualizaciones de tu proceso"
    >
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex overflow-x-auto border-b border-gray-200">
          <button
            className={`py-4 px-6 text-sm font-medium whitespace-nowrap focus:outline-none ${
              activeTab === 'all'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('all')}
          >
            Todas
          </button>
          <button
            className={`py-4 px-6 text-sm font-medium whitespace-nowrap focus:outline-none ${
              activeTab === 'unread'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('unread')}
          >
            No leídas <span className="ml-1 bg-blue-100 text-blue-800 text-xs rounded-full px-2 py-0.5">{unreadCount}</span>
          </button>
          <button
            className={`py-4 px-6 text-sm font-medium whitespace-nowrap focus:outline-none ${
              activeTab === 'info'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('info')}
          >
            Informativas
          </button>
          <button
            className={`py-4 px-6 text-sm font-medium whitespace-nowrap focus:outline-none ${
              activeTab === 'warning'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('warning')}
          >
            Alertas
          </button>
          <button
            className={`py-4 px-6 text-sm font-medium whitespace-nowrap focus:outline-none ${
              activeTab === 'error'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('error')}
          >
            Errores
          </button>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification) => {
                const styles = getTypeStyles(notification.type);
                
                return (
                  <div 
                    key={notification.id} 
                    className={`p-4 rounded-lg ${styles.bgColor} border-l-4 ${styles.borderColor} relative ${
                      !notification.isRead ? 'shadow-sm' : ''
                    }`}
                  >
                    {!notification.isRead && (
                      <span className="absolute top-4 right-4 h-2 w-2 bg-blue-500 rounded-full"></span>
                    )}
                    <div className="flex">
                      <div className={`flex-shrink-0 ${styles.iconColor} mt-1`}>
                        <FontAwesomeIcon icon={styles.icon} />
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">
                            {notification.title}
                          </p>
                          <div className="flex items-center">
                            <p className="text-xs text-gray-500 ml-auto">
                              {notification.date}
                            </p>
                            <button className="ml-2 text-gray-400 hover:text-gray-600 p-1">
                              <FontAwesomeIcon icon={faEllipsisH} />
                            </button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mt-1">{notification.message}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faBell} className="text-gray-400 text-2xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No hay notificaciones</h3>
                <p className="text-gray-500">Te avisaremos cuando haya novedades en tu proceso</p>
              </div>
            )}
          </div>
          
          {filteredNotifications.length > 0 && (
            <div className="mt-8 flex justify-end">
              <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                Marcar todas como leídas
              </button>
            </div>
          )}
        </div>
      </div>
    </DashboardPageTemplate>
  );
};

export default NotificationsPage; 