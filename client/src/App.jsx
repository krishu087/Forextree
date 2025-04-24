import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Calculator from "@/pages/calculator";
import Comparison from "@/pages/comparison";
import News from "@/pages/news";
import Signup from "@/pages/signup";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Tutorials from "@/pages/tutorials";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/comparison" component={Comparison} />
          <Route path="/news" component={News} />
          <Route path="/signup" component={Signup} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/tutorials" component={Tutorials} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;