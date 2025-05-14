import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Tutorial {
  id: string;
  title: string;
  description: string;
  videoId: string;
  thumbnail: string;
}

const tutorials: Tutorial[] = [
  {
    id: '1',
    title: 'Forex Trading for Beginners',
    description: 'Learn the basics of forex trading, including how to read charts, understand currency pairs, and make your first trade.',
    videoId: 'RunUl7eFx44',
    thumbnail: 'https://img.youtube.com/vi/RunUl7eFx44/maxresdefault.jpg'
  },
  {
    id: '2',
    title: 'Advanced Forex Trading Strategies',
    description: 'Master advanced trading techniques, risk management, and how to develop your own trading strategy.',
    videoId: 'NlrCNNe_Ou0',
    thumbnail: 'https://img.youtube.com/vi/NlrCNNe_Ou0/maxresdefault.jpg'
  },
  {
    id: '3',
    title: 'Technical Analysis Fundamentals',
    description: 'Learn essential technical analysis concepts, chart patterns, and indicators for successful trading.',
    videoId: 'CRv2a0COLYw',
    thumbnail: 'https://img.youtube.com/vi/CRv2a0COLYw/maxresdefault.jpg'
  },
  {
    id: '4',
    title: 'Risk Management in Forex Trading',
    description: 'Discover effective risk management strategies to protect your capital and maximize profits.',
    videoId: 'bGsa1ueg2Zg',
    thumbnail: 'https://img.youtube.com/vi/bGsa1ueg2Zg/maxresdefault.jpg'
  },
  {
    id: '5',
    title: 'Forex Trading Psychology',
    description: 'Understand the psychological aspects of trading and how to maintain discipline in the markets.',
    videoId: 'GmdXkAOMwAM',
    thumbnail: 'https://img.youtube.com/vi/GmdXkAOMwAM/maxresdefault.jpg'
  },
  {
    id: '6',
    title: 'Forex Trading Strategies for Beginners',
    description: 'Step-by-step guide to developing and implementing effective forex trading strategies.',
    videoId: 'ivTaQIa5hqE',
    thumbnail: 'https://img.youtube.com/vi/ivTaQIa5hqE/maxresdefault.jpg'
  }
];

const TutorialsList = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Forex Trading Tutorials</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {tutorials.map((tutorial) => (
          <Card key={tutorial.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative aspect-video">
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href={`https://www.youtube.com/watch?v=${tutorial.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </a>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl mb-2">{tutorial.title}</CardTitle>
              <p className="text-muted-foreground">{tutorial.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TutorialsList; 