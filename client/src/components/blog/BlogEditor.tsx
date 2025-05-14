import { useState } from 'react';
import { useLocation } from 'wouter';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import api from '@/lib/axios';

interface User {
  _id: string;
  name: string;
  email: string;
}

interface BlogEditorProps {
  initialData?: {
    id?: string;
    title: string;
    content: string;
    category: string;
    readTime: string;
  };
  mode: 'create' | 'edit';
}

const BlogEditor = ({ initialData, mode }: BlogEditorProps) => {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    content: initialData?.content || '',
    category: initialData?.category || '',
    readTime: initialData?.readTime || ''
  });

  const categories = [
    'Trading Basics',
    'Risk Management',
    'Technical Analysis',
    'Trading Psychology',
    'Market News'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.title.trim()) {
      toast({
        title: 'Error',
        description: 'Title is required',
        variant: 'destructive'
      });
      return;
    }

    if (!formData.content.trim()) {
      toast({
        title: 'Error',
        description: 'Content is required',
        variant: 'destructive'
      });
      return;
    }

    if (!formData.category) {
      toast({
        title: 'Error',
        description: 'Please select a category',
        variant: 'destructive'
      });
      return;
    }

    if (!formData.readTime.trim()) {
      toast({
        title: 'Error',
        description: 'Read time is required',
        variant: 'destructive'
      });
      return;
    }

    if (!user) {
      toast({
        title: 'Authentication Required',
        description: 'Please log in to create or edit blog posts.',
        variant: 'destructive'
      });
      return;
    }

    setLoading(true);
    try {
      if (mode === 'create') {
        const response = await api.post('/blogs', {
          ...formData,
          userId: user.id
        });
        toast({
          title: 'Success',
          description: 'Blog post created successfully!'
        });
        navigate('/blog');
      } else {
        const response = await api.put(`/blogs/${initialData?.id}`, formData);
        toast({
          title: 'Success',
          description: 'Blog post updated successfully!'
        });
        navigate('/blog');
      }
    } catch (error: any) {
      console.error('Blog operation failed:', error);
      toast({
        title: 'Error',
        description: error.response?.data?.message || 'Failed to save blog post. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <Input
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter blog title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Content</label>
          <Textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            placeholder="Write your blog content here..."
            className="min-h-[200px]"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Read Time</label>
            <Input
              value={formData.readTime}
              onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
              placeholder="e.g., 5 min read"
              required
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/blog')}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? 'Saving...' : mode === 'create' ? 'Create Post' : 'Update Post'}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default BlogEditor; 