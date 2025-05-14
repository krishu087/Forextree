import { useAuth } from '@/contexts/AuthContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Settings, 
  Calendar, 
  Bell, 
  Shield,
  Activity,
  BookOpen,
  ThumbsUp,
  MessageSquare,
  Share2,
  Edit,
  Trash2,
  Clock,
  Loader2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import api from '@/lib/api';

interface Blog {
  _id: string;
  title: string;
  content: string;
  category: string;
  readTime: string;
  createdAt: string;
  likes: number;
  comments: number;
}

const Profile = () => {
  const { user, loading: authLoading } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [userBlogs, setUserBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    if (!authLoading && !user) {
      setLocation('/login');
    }
  }, [user, authLoading, setLocation]);

  useEffect(() => {
    if (user) {
      console.log('User object in profile:', user);
      console.log('User ID:', user.id);
      fetchUserBlogs();
    } else {
      console.log('No user found, redirecting to login');
    }
  }, [user]);

  const fetchUserBlogs = async () => {
    try {
      setLoading(true);
      
      if (!user?.id) {
        console.error('User ID is missing:', { user });
        throw new Error('User ID is not available');
      }

      console.log('Fetching blogs for user:', {
        userId: user.id,
        user: user
      });

      const response = await api.get(`/blogs/user/${user.id}`);
      
      console.log('Blogs response:', {
        status: response.status,
        data: response.data,
        headers: response.headers
      });
      
      if (!response.data) {
        throw new Error('No data received from server');
      }
      
      setUserBlogs(response.data);
    } catch (error: any) {
      console.error('Error fetching blogs:', {
        message: error.message,
        status: error.status,
        data: error.data,
        stack: error.stack
      });
      
      toast({
        title: 'Error',
        description: error.message || 'Failed to load your blogs. Please try again later.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBlog = async (blogId: string) => {
    try {
      setLoading(true);
      await api.delete(`/blogs/${blogId}`);
      
      toast({
        title: 'Success',
        description: 'Blog post deleted successfully'
      });
      
      // Refresh the blog list
      await fetchUserBlogs();
    } catch (error: any) {
      console.error('Failed to delete blog:', error);
      
      toast({
        title: 'Error',
        description: error.message || 'Failed to delete blog post. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* User Profile Card */}
        <Card className="md:col-span-1 p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <Button 
                size="icon" 
                variant="outline" 
                className="absolute bottom-0 right-0 rounded-full"
              >
                <Settings className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-muted-foreground">{user.email}</p>
              <p className="text-sm text-muted-foreground mt-2">
                Member since {new Date().toLocaleDateString()}
              </p>
            </div>
            <div className="w-full space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Shield className="w-4 h-4 mr-2" />
                Security
              </Button>
            </div>
          </div>
        </Card>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Tabs Section */}
          <Card className="p-6">
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="posts">My Posts</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="drafts">Drafts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="posts" className="mt-6">
                {loading ? (
                  <div className="flex items-center justify-center min-h-[200px]">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  </div>
                ) : userBlogs.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">You haven't created any blog posts yet.</p>
                    <Button 
                      className="mt-4" 
                      onClick={() => setLocation('/blog/create')}
                    >
                      Create Your First Blog Post
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {userBlogs.map((blog, index) => (
                      <motion.div
                        key={blog._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{blog.category}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => setLocation(`/blog/edit/${blog._id}`)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleDeleteBlog(blog._id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">{blog.content}</p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <ThumbsUp className="w-4 h-4 mr-1" />
                              {blog.likes || 0}
                            </span>
                            <span className="flex items-center">
                              <MessageSquare className="w-4 h-4 mr-1" />
                              {blog.comments || 0}
                            </span>
                            <span className="flex items-center">
                              <Share2 className="w-4 h-4 mr-1" />
                              Share
                            </span>
                          </div>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {formatDate(blog.createdAt)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="activity" className="mt-6">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Activity tracking coming soon!</p>
                </div>
              </TabsContent>

              <TabsContent value="drafts" className="mt-6">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Drafts feature coming soon!</p>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile; 