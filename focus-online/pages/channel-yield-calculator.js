import React, { useState, useEffect } from 'react';

const RevenueCalculator = () => {
  const [numRooms, setNumRooms] = useState(10);
  const [avgDailyRate, setAvgDailyRate] = useState(100);
  const [occupancyRate, setOccupancyRate] = useState(70);
  
  // Booking channels
  const [directBookings, setDirectBookings] = useState(40);
  const [otaBookings, setOtaBookings] = useState(40);
  const [stoBookings, setStoBookings] = useState(20);
  
  // Cost components
  const [directMonthlyCost, setDirectMonthlyCost] = useState(500);
  const [otaCommission, setOtaCommission] = useState(15);
  const [stoCommission, setStoCommission] = useState(20);
  
  // Revenue calculations
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [directRevenue, setDirectRevenue] = useState(0);
  const [otaRevenue, setOtaRevenue] = useState(0);
  const [stoRevenue, setStoRevenue] = useState(0);
  
  // Profit calculations
  const [directProfit, setDirectProfit] = useState(0);
  const [otaProfit, setOtaProfit] = useState(0);
  const [stoProfit, setStoProfit] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);

  useEffect(() => {
    calculateRevenue();
  }, [numRooms, avgDailyRate, occupancyRate, directBookings, otaBookings, stoBookings, 
      directMonthlyCost, otaCommission, stoCommission]);

  const calculateRevenue = () => {
    const occupancyDecimal = occupancyRate / 100;
    const daily = numRooms * avgDailyRate * occupancyDecimal;
    const monthly = daily * 30;
    
    // Calculate revenue by channel
    const directRev = monthly * (directBookings / 100);
    const otaRev = monthly * (otaBookings / 100);
    const stoRev = monthly * (stoBookings / 100);
    
    setMonthlyRevenue(monthly);
    setDirectRevenue(directRev);
    setOtaRevenue(otaRev);
    setStoRevenue(stoRev);
    
    // Calculate profit (revenue minus costs) for each channel
    const directP = directRev - directMonthlyCost;
    const otaP = otaRev * (1 - otaCommission / 100);
    const stoP = stoRev * (1 - stoCommission / 100);
    
    setDirectProfit(directP);
    setOtaProfit(otaP);
    setStoProfit(stoP);
    setTotalProfit(directP + otaP + stoP);
  };
  
  // Calculate total percentage (but don't force it to 100%)
  const [totalPercentage, setTotalPercentage] = useState(100);
  
  useEffect(() => {
    const total = directBookings + otaBookings + stoBookings;
    setTotalPercentage(total);
  }, [directBookings, otaBookings, stoBookings]);

  return (
    <div className="bg-storm-dark py-12">
        
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-24">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Property Channel ROI</h2>
        
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="numRooms">
            Number of Rooms
            </label>
            <input
            id="numRooms"
            type="number"
            min="1"
            value={numRooms}
            onChange={(e) => setNumRooms(parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="avgRate">
            Average Daily Rate ($)
            </label>
            <input
            id="avgRate"
            type="number"
            min="0"
            step="0.01"
            value={avgDailyRate}
            onChange={(e) => setAvgDailyRate(parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="occupancy">
            Occupancy Rate (%)
            </label>
            <input
            id="occupancy"
            type="number"
            min="0"
            max="100"
            value={occupancyRate}
            onChange={(e) => setOccupancyRate(parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="directBookings">
                Direct Bookings (%)
            </label>
            <input
                id="directBookings"
                type="number"
                min="0"
                max="100"
                value={directBookings}
                onChange={(e) => setDirectBookings(parseFloat(e.target.value) || 0)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            
            <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="directCost">
                Direct Monthly Cost ($)
            </label>
            <input
                id="directCost"
                type="number"
                min="0"
                value={directMonthlyCost}
                onChange={(e) => setDirectMonthlyCost(parseFloat(e.target.value) || 0)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            
            <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="otaBookings">
                OTA Bookings (%)
            </label>
            <input
                id="otaBookings"
                type="number"
                min="0"
                max="100"
                value={otaBookings}
                onChange={(e) => setOtaBookings(parseFloat(e.target.value) || 0)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            
            <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="otaCommission">
                OTA Commission (%)
            </label>
            <input
                id="otaCommission"
                type="number"
                min="0"
                max="100"
                value={otaCommission}
                onChange={(e) => setOtaCommission(parseFloat(e.target.value) || 0)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            
            <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="stoBookings">
                STO Bookings (%)
            </label>
            <input
                id="stoBookings"
                type="number"
                min="0"
                max="100"
                value={stoBookings}
                onChange={(e) => setStoBookings(parseFloat(e.target.value) || 0)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            
            <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="stoCommission">
                STO Commission (%)
            </label>
            <input
                id="stoCommission"
                type="number"
                min="0"
                max="100"
                value={stoCommission}
                onChange={(e) => setStoCommission(parseFloat(e.target.value) || 0)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
        </div>
        
        <div className="p-2 mb-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className={`text-sm text-center ${totalPercentage === 100 ? "text-gray-600" : "text-red-600 font-medium"}`}>
            Total: {totalPercentage}% {totalPercentage !== 100 && "(Note: Percentages don't add up to 100%)"}
            </div>
        </div>
        
        <div className="mb-6">
            <div className="p-4 mb-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Monthly Revenue</h3>
            <div className="text-3xl font-bold text-blue-700">${monthlyRevenue.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
            <div className="text-sm text-gray-600 mt-2">Based on {occupancyRate}% occupancy over 30 days</div>
            </div>
            
            <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-gray-800">Direct Bookings ({directBookings}%)</h3>
                <div className="text-sm bg-green-100 px-2 py-1 rounded">
                    Cost: ${directMonthlyCost.toLocaleString()}/month
                </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                <div>
                    <div className="text-sm text-gray-700">Revenue</div>
                    <div className="text-xl font-bold text-green-700">${directRevenue.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
                </div>
                <div>
                    <div className="text-sm text-gray-700">Cost</div>
                    <div className="text-xl font-bold text-red-600">
                    ${directMonthlyCost.toLocaleString(undefined, {maximumFractionDigits: 2})}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-700">Net Profit</div>
                    <div className={`text-xl font-bold ${directProfit >= 0 ? "text-green-700" : "text-red-700"}`}>
                    ${directProfit.toLocaleString(undefined, {maximumFractionDigits: 2})}
                    </div>
                </div>
                </div>
            </div>
            
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-gray-800">OTA Bookings ({otaBookings}%)</h3>
                <div className="text-sm bg-amber-100 px-2 py-1 rounded">
                    Commission: {otaCommission}%
                </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                <div>
                    <div className="text-sm text-gray-700">Revenue</div>
                    <div className="text-xl font-bold text-amber-700">${otaRevenue.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
                </div>
                <div>
                    <div className="text-sm text-gray-700">Commission</div>
                    <div className="text-xl font-bold text-red-600">
                    ${(otaRevenue * otaCommission / 100).toLocaleString(undefined, {maximumFractionDigits: 2})}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-700">Net Profit</div>
                    <div className="text-xl font-bold text-amber-700">
                    ${otaProfit.toLocaleString(undefined, {maximumFractionDigits: 2})}
                    </div>
                </div>
                </div>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-gray-800">STO Bookings ({stoBookings}%)</h3>
                <div className="text-sm bg-purple-100 px-2 py-1 rounded">
                    Commission: {stoCommission}%
                </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                <div>
                    <div className="text-sm text-gray-700">Revenue</div>
                    <div className="text-xl font-bold text-purple-700">${stoRevenue.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
                </div>
                <div>
                    <div className="text-sm text-gray-700">Commission</div>
                    <div className="text-xl font-bold text-red-600">
                    ${(stoRevenue * stoCommission / 100).toLocaleString(undefined, {maximumFractionDigits: 2})}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-700">Net Profit</div>
                    <div className="text-xl font-bold text-purple-700">
                    ${stoProfit.toLocaleString(undefined, {maximumFractionDigits: 2})}
                    </div>
                </div>
                </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-gray-800">Total</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                <div>
                    <div className="text-sm text-gray-700">Total Revenue</div>
                    <div className="text-xl font-bold text-gray-700">${monthlyRevenue.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
                </div>
                <div>
                    <div className="text-sm text-gray-700">Total Costs</div>
                    <div className="text-xl font-bold text-red-600">
                    ${(monthlyRevenue - totalProfit).toLocaleString(undefined, {maximumFractionDigits: 2})}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-700">Total Net Profit</div>
                    <div className="text-xl font-bold text-gray-700">
                    ${totalProfit.toLocaleString(undefined, {maximumFractionDigits: 2})}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default RevenueCalculator;