import React from "react";

const PizzaSummary = ({ orders }) => {
  console.log("order summary: ", orders);
  // Group data by pizza name and size
  const summary = orders.reduce((acc, order) => {
    const { name, size, qty } = order;
    if (!acc[name]) {
      acc[name] = {
        small: 0,
        medium: 0,
        large: 0,
        single: 0,
        double: 0,
        regular: 0,
      };
    }
    acc[name][size] += parseInt(qty, 10);
    return acc;
  }, {});

  return (
    <div className="mt-10 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Pizza Order Summary</h2>
      {Object.keys(summary).length > 0 ? (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Pizza Name</th>
              <th className="p-2 text-center">Small</th>
              <th className="p-2 text-center">Medium</th>
              <th className="p-2 text-center">Large</th>
              <th className="p-2 text-center">Single</th>
              <th className="p-2 text-center">Double</th>
              <th className="p-2 text-center">Regular</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(summary).map(([pizza, sizes], index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{pizza}</td>
                <td className="p-2 text-center">{sizes.small}</td>
                <td className="p-2 text-center">{sizes.medium}</td>
                <td className="p-2 text-center">{sizes.large}</td>
                <td className="p-2 text-center">{sizes.single}</td>
                <td className="p-2 text-center">{sizes.double}</td>
                <td className="p-2 text-center">{sizes.regular}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600 text-center">No data available.</p>
      )}
    </div>
  );
};

export default PizzaSummary;
