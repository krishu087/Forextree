import { useState, useEffect } from 'react';

const FirmsTable = () => {
  const [firms, setFirms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFirmsData = async () => {
      try {
        const response = await fetch('/api/getfirearraydata');
       
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setFirms(data.data.firms);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFirmsData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg font-semibold">Error: {error}</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Top Prop Trading Firms</h1>

      <div className="overflow-x-auto rounded-2xl shadow-xl ring-1 ring-gray-200">
        <table className="w-full table-auto text-sm text-left text-gray-700">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr className="text-xs uppercase tracking-wider text-gray-600">
              <th className="px-6 py-4">Firm</th>
              <th className="px-6 py-4">Rating</th>
              <th className="px-6 py-4">Reviews</th>
              <th className="px-6 py-4">Country</th>
              <th className="px-6 py-4">Years</th>
              <th className="px-6 py-4">Max Allocation</th>
              <th className="px-6 py-4">Promo</th>
              <th className="px-6 py-4">Assets</th>
              <th className="px-6 py-4">Platforms</th>
            </tr>
          </thead>
          <tbody>
            {firms.map((firm, idx) => (
              <tr
                key={firm._id}
                className={`${
                  idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } border-b hover:bg-gray-100 transition-colors duration-150`}
              >
                <td className="px-6 py-4 font-semibold text-gray-900">{firm.firm}</td>
                <td className="px-6 py-4 flex items-center gap-1 text-yellow-500">
                  ★ <span className="text-gray-700">{firm.rank}</span>
                </td>
                <td className="px-6 py-4">{firm.reviews}</td>
                <td className="px-6 py-4">{firm.country}</td>
                <td className="px-6 py-4">{firm.years_in_operation}</td>
                <td className="px-6 py-4">{firm.max_allocations}</td>
                <td className="px-6 py-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded">
                    {firm.promo}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {firm.assets.map((asset, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full"
                      >
                        {asset}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {firm.platforms.map((platform, i) => (
                      <span
                        key={i}
                        className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5 rounded-full"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-500 text-center mt-4">
        Scroll sideways on mobile to view full data
      </p>
    </section>
  );
};

export default FirmsTable;
