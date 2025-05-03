import TutorialsList from '@/components/tutorials/TutorialsList';

const TutorialsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Forex Trading Tutorials</h1>
        <p className="text-muted-foreground mb-8">
          Learn forex trading from beginner to advanced levels with our comprehensive video tutorials.
          Click on any tutorial to watch the full video on YouTube.
        </p>
        <TutorialsList />
      </div>
    </div>
  );
};

export default TutorialsPage;