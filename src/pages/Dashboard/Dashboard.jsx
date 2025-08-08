import React from 'react'
import UpholsteryQuotes from '../UpholsteryQuotes/UpholsteryQuotes'
import PillowOrders from '../PillowOrders/PillowOrders';
import Bookings from '../Bookings/Bookings';
import FabricManagement from '../FabricManagement/FabricManagement';
import OrderTracker from '../OrderTracker/OrderTracker';

import Card from '../../components/Card/Card';




function Dashboard() {
  return (
    <div className="p-4 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <Card value="24" label="New Quotes Submitted" />
        <Card value="12" label="Pending Orders" />
        <Card value="7" label="Completed Orders" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <Card value="24" label="New Quotes Submitted" />
        <Card value="12" label="Pending Orders" />
        <Card value="7" label="Completed Orders" />
      </div>
      <UpholsteryQuotes />
      <PillowOrders />
      <Bookings showSearch={false} />
      <FabricManagement />
      <OrderTracker />
    </div>
  );
}

export default Dashboard