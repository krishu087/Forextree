import { Router, Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import Profile from "@/pages/profile";
import Blog from "@/pages/blog";
import BlogCreate from "@/pages/blog-create";
import BlogEdit from "@/pages/blog-edit";
import Comparison from "@/pages/comparison";
import Tutorials from "@/pages/tutorials";
import News from "@/pages/news";
import Calculator from "@/pages/calculator";
import PropFirms from "@/pages/prop-firms";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Switch>
              <Route path="/blog/create" component={BlogCreate} />
              <Route path="/blog/edit/:id" component={BlogEdit} />
              <Route path="/blog" component={Blog} />
              <Route path="/profile" component={Profile} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/comparison" component={Comparison} />
              <Route path="/tutorials" component={Tutorials} />
              <Route path="/news" component={News} />
              <Route path="/calculator" component={Calculator} />
              <Route path="/prop-firms" component={PropFirms} />
              <Route path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
