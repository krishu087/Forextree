import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PropFirms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Prop Trading Firms</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Compare and choose the best prop trading firms to grow your trading career.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Prop Firm Cards */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">FTMO</h3>
          <p className="text-muted-foreground mb-4">
            One of the most popular prop trading firms with flexible funding options.
          </p>
          <Button className="w-full">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">The5ers</h3>
          <p className="text-muted-foreground mb-4">
            Progressive funding model with no time limits on challenges.
          </p>
          <Button className="w-full">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">MyForexFunds</h3>
          <p className="text-muted-foreground mb-4">
            Fast-growing prop firm with competitive profit splits.
          </p>
          <Button className="w-full">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default PropFirms; 