import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
import { useEffect } from 'react';
import BlogEditor from '@/components/blog/BlogEditor';
import { useToast } from '@/components/ui/use-toast';

const BlogCreate = () => {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) {
      toast({
        title: 'Authentication Required',
        description: 'Please log in to create blog posts.',
        variant: 'destructive'
      });
      navigate('/login');
    }
  }, [user, navigate, toast]);

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>
      <BlogEditor mode="create" />
    </div>
  );
};

export default BlogCreate; 