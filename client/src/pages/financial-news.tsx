import FinancialNews from '@/components/news/FinancialNews';

const FinancialNewsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Financial News & Events</h1>
        <FinancialNews />
      </div>
    </div>
  );
};

export default FinancialNewsPage; 