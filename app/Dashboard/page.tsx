"use client";

// pages/dashboard/index.tsx
import React, { useEffect, useState } from 'react';
import SideMenu from '../components/SideMenu';
import { auth } from '../lib/firebaseAuth';
import { FaBars } from 'react-icons/fa';

const page: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    const [navOpen, setNavOpen] = useState(false);

    const recentOrders = [
        { number: 'WU88191111', date: 'January 22, 2023', total: '$36.00' },
        { number: 'WU88191112', date: 'January 23, 2023', total: '$45.00' },
        { number: 'WU88191113', date: 'January 25, 2023', total: '$28.00' },
    ];

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            console.log("user eee", user.displayName);
            
            setUser(user);
          } else {
            setUser(null);
          }
        });
    
        return () => unsubscribe();
    }, []);

    const openNav = () => {
        setNavOpen(true);
        console.log("icon clicked");
        
    }

  return (
    <div className="flex h-screen bg-gray-100">

      <SideMenu navOpen={navOpen} />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
            <div className='mb-8 lg:hidden z-50'>
                <FaBars onClick={openNav} />
            </div>
            <div className='w-full flex justify-end items-center'>
                {user ? (
                <p className='text-xs font-medium'>Welcome {user.displayName}</p>
                ) : (
                <p className='italic text-xs font-medium'>Welcome...</p>
                )}
            </div>
          <h1 className="text-3xl font-bold mb-6">Recent Orders</h1>
          <ul>
            {recentOrders.map((order, index) => (
              <li key={index} className="border-b border-gray-300 py-2">
                <div className="text-gray-600">{order.date}</div>
                <div className="font-bold">Order #{order.number}</div>
                <div>Total: {order.total}</div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default page;
