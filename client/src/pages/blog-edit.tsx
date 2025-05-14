import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
import BlogEditor from '@/components/blog/BlogEditor';
import { useToast } from '@/components/ui/use-toast';
import api from '@/lib/axios';

const BlogEdit = () => {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const [location, params] = useLocation();
  const { toast } = useToast();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchBlog = async () => {
      try {
        const response = await api.get(`/blogs/${params.id}`);
        if (response.data.author._id !== user._id) {
          toast({
            title: 'Unauthorized',
            description: 'You can only edit your own blog posts',
            variant: 'destructive'
          });
          navigate('/blog');
          return;
        }
        setBlog(response.data);
      } catch (error: any) {
        toast({
          title: 'Error',
          description: error.response?.data?.message || 'Failed to fetch blog post',
          variant: 'destructive'
        });
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [user, navigate, params.id, toast]);

  if (!user || loading) {
    return null;
  }

  if (!blog) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Blog Post</h1>
      <BlogEditor
        mode="edit"
        initialData={{
          id: blog._id,
          title: blog.title,
          content: blog.content,
          category: blog.category,
          readTime: blog.readTime
        }}
      />
    </div>
  );
};

export default BlogEdit; 