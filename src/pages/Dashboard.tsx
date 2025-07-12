import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  User, 
  Settings, 
  Star, 
  MapPin, 
  Plus,
  Edit,
  Trash2,
  Package,
  Repeat,
  TrendingUp,
  Heart
} from "lucide-react";

const Dashboard = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    location: "San Francisco, CA",
    joinDate: "2023-06-15",
    points: 450,
    totalSwaps: 12,
    rating: 4.7,
    bio: "Sustainable fashion enthusiast. Love finding new homes for quality pieces!"
  };

  // Mock listings data
  const myListings = [
    {
      id: 1,
      title: "Classic White Shirt",
      category: "Tops",
      size: "L",
      condition: "Excellent",
      points: 80,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=200&fit=crop&crop=center",
      status: "Active",
      views: 23,
      likes: 5
    },
    {
      id: 2,
      title: "Blue Denim Jeans",
      category: "Bottoms",
      size: "L",
      condition: "Good",
      points: 70,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop&crop=center",
      status: "Pending Swap",
      views: 45,
      likes: 8
    },
    {
      id: 3,
      title: "Summer Dress",
      category: "Dresses",
      size: "M",
      condition: "Like New",
      points: 120,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=200&fit=crop&crop=center",
      status: "Swapped",
      views: 67,
      likes: 12
    }
  ];

  // Mock purchases/swaps data
  const mySwaps = [
    {
      id: 1,
      title: "Vintage Leather Jacket",
      category: "Outerwear",
      points: 150,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=200&fit=crop&crop=center",
      date: "2024-01-10",
      status: "Completed",
      seller: "Sarah M."
    },
    {
      id: 2,
      title: "Silk Scarf",
      category: "Accessories",
      points: 60,
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=200&h=200&fit=crop&crop=center",
      date: "2024-01-05",
      status: "In Transit",
      seller: "Emma K."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="text-2xl">{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold text-foreground mb-1">{user.name}</h1>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{user.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{user.rating}</span>
                      </div>
                      <span>Member since {new Date(user.joinDate).getFullYear()}</span>
                    </div>
                  </div>
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
                
                <p className="text-muted-foreground mb-4">{user.bio}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{user.points}</div>
                    <div className="text-sm text-muted-foreground">Points</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{user.totalSwaps}</div>
                    <div className="text-sm text-muted-foreground">Total Swaps</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{myListings.length}</div>
                    <div className="text-sm text-muted-foreground">Active Listings</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="listings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="swaps">My Swaps</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          {/* My Listings Tab */}
          <TabsContent value="listings" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">My Listings</h2>
              <Button asChild>
                <Link to="/add-item">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Item
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myListings.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge 
                      className={`absolute top-2 right-2 ${
                        item.status === 'Active' ? 'bg-green-500' :
                        item.status === 'Pending Swap' ? 'bg-yellow-500' :
                        'bg-blue-500'
                      }`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{item.category}</Badge>
                      <Badge variant="outline">Size {item.size}</Badge>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-primary font-bold">{item.points} points</span>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{item.views} views</span>
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          <span>{item.likes}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Trash2 className="h-3 w-3 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Swaps Tab */}
          <TabsContent value="swaps" className="space-y-6">
            <h2 className="text-xl font-semibold">My Swaps & Purchases</h2>
            
            <div className="space-y-4">
              {mySwaps.map((swap) => (
                <Card key={swap.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 overflow-hidden rounded-lg">
                        <img
                          src={swap.image}
                          alt={swap.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-foreground">{swap.title}</h3>
                          <Badge 
                            variant={swap.status === 'Completed' ? 'default' : 'secondary'}
                          >
                            {swap.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>From {swap.seller}</span>
                          <span>•</span>
                          <span>{swap.points} points</span>
                          <span>•</span>
                          <span>{new Date(swap.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm">View Details</Button>
                        {swap.status === 'Completed' && (
                          <Button variant="outline" size="sm">Leave Review</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">You earned 150 points</span> from swapping your "Vintage Leather Jacket"
                      </p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Repeat className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">New swap request</span> for your "Summer Dress"
                      </p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Heart className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">Someone liked</span> your "Classic White Shirt"
                      </p>
                      <p className="text-xs text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;