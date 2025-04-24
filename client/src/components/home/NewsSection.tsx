import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import News from "@/components/news/News";

const NewsSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="gradient-text">Latest</span> Market News
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Stay updated with the most recent developments in the forex market to inform your trading decisions.
            </p>
          </div>
          <Button variant="secondary" size="default" className="mt-4 md:mt-0" asChild>
            <Link href="/news">
              <a>View All News</a>
            </Link>
          </Button>
        </div>
        
        <News />
      </div>
    </div>
  );
};

export default NewsSection;
