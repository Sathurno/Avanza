'use client';

import React from 'react';

const NotificationsCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-gray-900">Notificaciones</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800">Ver todas</button>
      </div>
      <div className="space-y-4 flex-grow">
        <div className="p-4 rounded-lg bg-blue-50 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-gray-900">Documento recibido</p>
          <p className="text-xs text-gray-600 mt-1">Tu programa de estudios ha sido recibido para revisión.</p>
          <p className="text-xs text-gray-400 mt-2">Hoy, 10:45 AM</p>
        </div>
        <div className="p-4 rounded-lg bg-red-50 border-l-4 border-red-500 hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-gray-900">Documento faltante</p>
          <p className="text-xs text-gray-600 mt-1">Necesitamos tu DNI o Pasaporte para continuar.</p>
          <p className="text-xs text-gray-400 mt-2">Ayer, 15:30 PM</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-50 border-l-4 border-gray-300 hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-gray-900">Pago confirmado</p>
          <p className="text-xs text-gray-600 mt-1">Hemos recibido tu pago inicial de 350€.</p>
          <p className="text-xs text-gray-400 mt-2">15/04/2023, 09:15 AM</p>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100 text-center">
        <a href="/dashboard/notificaciones" className="text-xs text-blue-600 hover:text-blue-800">
          Ver todas las notificaciones →
        </a>
      </div>
    </div>
  );
};

export default NotificationsCard; 