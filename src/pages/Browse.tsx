import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Filter, Star, Grid, List } from "lucide-react";

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Mock data for items
  const items = [
    {
      id: 1,
      title: "Vintage Leather Jacket",
      category: "Outerwear",
      size: "M",
      condition: "Excellent",
      points: 120,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center",
      user: "Sarah M.",
      location: "New York, NY",
      description: "Classic brown leather jacket in excellent condition. Perfect for fall and winter."
    },
    {
      id: 2,
      title: "Designer Silk Dress",
      category: "Dresses",
      size: "S",
      condition: "Like New",
      points: 200,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&crop=center",
      user: "Emma K.",
      location: "Los Angeles, CA",
      description: "Elegant silk dress from designer brand. Worn only once to a special event."
    },
    {
      id: 3,
      title: "Casual Denim Jeans",
      category: "Bottoms",
      size: "L",
      condition: "Good",
      points: 80,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center",
      user: "Alex R.",
      location: "Chicago, IL",
      description: "Comfortable straight-leg denim jeans. Great for everyday wear."
    },
    {
      id: 4,
      title: "Cozy Knit Sweater",
      category: "Tops",
      size: "M",
      condition: "Very Good",
      points: 100,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&crop=center",
      user: "Maria L.",
      location: "Seattle, WA",
      description: "Soft wool blend sweater perfect for cold weather. No pills or damages."
    },
    {
      id: 5,
      title: "Summer Floral Dress",
      category: "Dresses",
      size: "M",
      condition: "Excellent",
      points: 90,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop&crop=center",
      user: "Lily C.",
      location: "Miami, FL",
      description: "Beautiful floral print dress perfect for summer occasions."
    },
    {
      id: 6,
      title: "Professional Blazer",
      category: "Outerwear",
      size: "S",
      condition: "Like New",
      points: 150,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center",
      user: "Rachel T.",
      location: "Boston, MA",
      description: "Sharp navy blazer perfect for professional settings. Tailored fit."
    }
  ];

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="tops">Tops</SelectItem>
                  <SelectItem value="bottoms">Bottoms</SelectItem>
                  <SelectItem value="dresses">Dresses</SelectItem>
                  <SelectItem value="outerwear">Outerwear</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sizes</SelectItem>
                  <SelectItem value="xs">XS</SelectItem>
                  <SelectItem value="s">S</SelectItem>
                  <SelectItem value="m">M</SelectItem>
                  <SelectItem value="l">L</SelectItem>
                  <SelectItem value="xl">XL</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              Showing {filteredItems.length} items
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1"
        }`}>
          {filteredItems.map((item) => (
            <Link key={item.id} to={`/item/${item.id}`} className="group">
              <Card className={`overflow-hidden hover:shadow-elevated transition-smooth group-hover:scale-105 ${
                viewMode === "list" ? "flex" : ""
              }`}>
                <div className={`overflow-hidden ${
                  viewMode === "list" ? "w-48 h-48" : "aspect-square"
                }`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <CardContent className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <Badge variant="outline">Size {item.size}</Badge>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">by {item.user}</p>
                  <p className="text-sm text-muted-foreground mb-3">{item.location}</p>
                  {viewMode === "list" && (
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  )}
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

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No items found matching your search.</p>
            <Button asChild className="mt-4">
              <Link to="/add-item">List Your First Item</Link>
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Browse;