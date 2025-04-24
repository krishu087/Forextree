
import { useState } from "react";

const newsArticles = [
  {
    id: 1,
    title: "EUR/USD Forecast: Euro Breaks Above 1.1500 Following Bullish Momentum",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image path
    author: "Julian Pineda, CFA",
    date: "Today 03:55 PM",
    tags: ["FOREX", "EURO", "EUROZONE", "ECB", "EUR/USD"],
  },
  {
    id: 2,
    title: "USD/JPY Falls Toward 2024 Low to Push RSI into Oversold Zone",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image path
    author: "David Song",
    date: "Today 03:05 PM",
    tags: ["USD/JPY", "TRADE IDEAS", "DAVID SONG"],
  },
  {
    id: 3,
    title: "USD/CAD Eyes 1.3740 and Nasdaq Tests 18,000 on Shaken US Confidence",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image path
    author: "Razan Hilal, CMT",
    date: "Today 01:06 PM",
    tags: ["US DOLLAR", "NASDAQ", "USD/CAD", "TRUMP"],
  },
];

export default function LatestNews() {
  return (
    <div className="bg-yellow-500 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-8">Latest articles</h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white text-blue-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{article.author}</p>
                <p className="text-sm text-gray-500 mb-4">{article.date}</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
