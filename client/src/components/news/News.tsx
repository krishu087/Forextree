import { useState } from "react";

interface NewsArticle {
  id: number;
  title: string;
  image: string;
  author: string;
  date: string;
  tags: string[];
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "EUR/USD Forecast: Euro Breaks Above 1.1500 Following Bullish Momentum",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D", 
    author: "Julian Pineda, CFA",
    date: "Today 03:55 PM",
    tags: ["FOREX", "EURO", "EUROZONE", "ECB", "EUR/USD"],
  },
  {
    id: 2,
    title: "USD/JPY Falls Toward 2024 Low to Push RSI into Oversold Zone",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D", 
    author: "David Song",
    date: "Today 03:05 PM",
    tags: ["USD/JPY", "TRADE IDEAS", "DAVID SONG"],
  },
  {
    id: 3,
    title: "USD/CAD Eyes 1.3740 and Nasdaq Tests 18,000 on Shaken US Confidence",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D", 
    author: "Razan Hilal, CMT",
    date: "Today 01:06 PM",
    tags: ["US DOLLAR", "NASDAQ", "USD/CAD", "TRUMP"],
  },
];

const News = () => {
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsArticles.map((article) => (
        <div
          key={article.id}
          className="bg-black/30 backdrop-blur-sm text-white rounded-xl shadow-lg overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-yellow-400/10 hover:border-yellow-400/20 card-hover"
          onMouseEnter={() => setHoveredArticle(article.id)}
          onMouseLeave={() => setHoveredArticle(null)}
        >
          <div className="relative overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className={`w-full h-48 object-cover transition-transform duration-500 ${
                hoveredArticle === article.id ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
          </div>
          <div className="p-4 relative z-10">
            <h3 className="text-lg font-semibold mb-2 line-clamp-2 hover:text-yellow-400 transition-colors duration-200">
              {article.title}
            </h3>
            <p className="text-sm text-gray-300 mb-2">{article.author}</p>
            <p className="text-sm text-gray-400 mb-4">{article.date}</p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-yellow-400/10 text-yellow-400 px-2 py-1 rounded-full border border-yellow-400/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
