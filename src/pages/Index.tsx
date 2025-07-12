import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Recycle, 
  Users, 
  Shirt, 
  Star, 
  ArrowRight, 
  Leaf, 
  Heart,
  Search,
  Plus,
  TrendingUp
} from "lucide-react";

const Index = () => {
  // Mock data for featured items
  const featuredItems = [
    {
      id: 1,
      title: "Vintage Leather Jacket",
      category: "Outerwear",
      size: "M",
      condition: "Excellent",
      points: 120,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center",
      user: "Sarah M."
    },
    {
      id: 2,
      title: "Designer Silk Dress",
      category: "Dresses",
      size: "S",
      condition: "Like New",
      points: 200,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&crop=center",
      user: "Emma K."
    },
    {
      id: 3,
      title: "Casual Denim Jeans",
      category: "Bottoms",
      size: "L",
      condition: "Good",
      points: 80,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center",
      user: "Alex R."
    },
    {
      id: 4,
      title: "Cozy Knit Sweater",
      category: "Tops",
      size: "M",
      condition: "Very Good",
      points: 100,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&crop=center",
      user: "Maria L."
    }
  ];

  const categories = [
    { name: "Tops", icon: Shirt, count: 245 },
    { name: "Bottoms", icon: Shirt, count: 189 },
    { name: "Dresses", icon: Shirt, count: 156 },
    { name: "Outerwear", icon: Shirt, count: 98 },
    { name: "Shoes", icon: Shirt, count: 234 },
    { name: "Accessories", icon: Shirt, count: 167 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Sustainable Fashion
              <span className="block text-primary-glow">Starts Here</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              Join the movement to reduce textile waste. Exchange, swap, and discover 
              pre-loved clothing while earning points for sustainable choices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-4">
                <Link to="/signup">
                  Start Swapping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/browse">
                  Browse Items
                  <Search className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">12,500+</h3>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                <Recycle className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">45,000+</h3>
              <p className="text-muted-foreground">Items Swapped</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">2.3M kg</h3>
              <p className="text-muted-foreground">Textile Waste Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-muted-foreground">
              Find exactly what you're looking for
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/browse?category=${category.name.toLowerCase()}`}
                className="group"
              >
                <Card className="hover:shadow-card transition-smooth cursor-pointer group-hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-3">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} items</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Items
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover amazing pre-loved fashion pieces
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <Link key={item.id} to={`/item/${item.id}`} className="group">
                <Card className="overflow-hidden hover:shadow-elevated transition-smooth group-hover:scale-105">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{item.category}</Badge>
                      <Badge variant="outline">Size {item.size}</Badge>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">by {item.user}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold">{item.points} points</span>
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm ml-1">{item.condition}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link to="/browse">
                View All Items
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How ReWear Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to sustainable fashion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary text-primary-foreground rounded-full mb-6">
                <Plus className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">1. List Your Items</h3>
              <p className="text-muted-foreground">
                Upload photos and details of clothing items you no longer wear. 
                Set swap preferences or point values.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary text-primary-foreground rounded-full mb-6">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">2. Discover & Request</h3>
              <p className="text-muted-foreground">
                Browse thousands of items from other users. Request swaps or 
                use points to claim items you love.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary text-primary-foreground rounded-full mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">3. Swap & Enjoy</h3>
              <p className="text-muted-foreground">
                Complete exchanges safely through our platform. Enjoy your new 
                wardrobe while helping the environment!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Wardrobe?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of fashion lovers making a positive impact on the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-4">
              <Link to="/signup">
                Get Started Free
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
              <Link to="/add-item">
                List Your First Item
                <Plus className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
