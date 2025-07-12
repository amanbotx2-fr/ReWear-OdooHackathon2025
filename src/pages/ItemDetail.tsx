import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Star, 
  MapPin, 
  Calendar, 
  Heart, 
  Share2, 
  MessageCircle,
  ArrowLeft,
  ShoppingCart,
  Repeat
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ItemDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // Mock item data - in real app, fetch based on id
  const item = {
    id: 1,
    title: "Vintage Leather Jacket",
    category: "Outerwear",
    size: "M",
    condition: "Excellent",
    points: 120,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544441892-794166f1e3be?w=600&h=600&fit=crop&crop=center"
    ],
    user: {
      name: "Sarah M.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      location: "New York, NY",
      rating: 4.8,
      swaps: 23
    },
    description: "This classic brown leather jacket is in excellent condition with minimal signs of wear. It features a timeless design with a front zipper, two side pockets, and a comfortable fit. Perfect for fall and winter seasons. The leather is still supple and the zipper works smoothly. Originally purchased from a high-end boutique.",
    brand: "Vintage Collection",
    color: "Brown",
    material: "Genuine Leather",
    datePosted: "2024-01-15",
    tags: ["vintage", "leather", "jacket", "brown", "winter"],
    availability: "Available",
    swapPreferences: ["Similar outerwear", "Dresses (Size S-M)", "Designer accessories"]
  };

  const relatedItems = [
    {
      id: 2,
      title: "Denim Jacket",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&h=200&fit=crop&crop=center",
      points: 80
    },
    {
      id: 3,
      title: "Wool Coat",
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=200&h=200&fit=crop&crop=center",
      points: 180
    },
    {
      id: 4,
      title: "Bomber Jacket",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=200&fit=crop&crop=center",
      points: 95
    }
  ];

  const handleSwapRequest = () => {
    toast({
      title: "Swap Request Sent!",
      description: "Sarah M. will be notified of your swap request. Connect Supabase for full functionality.",
    });
  };

  const handleRedeemPoints = () => {
    toast({
      title: "Points Redemption",
      description: "You need to be logged in to redeem with points. Connect Supabase for authentication.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/browse">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Browse
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {item.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg cursor-pointer">
                  <img
                    src={image}
                    alt={`${item.title} ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{item.category}</Badge>
                <Badge variant="outline">Size {item.size}</Badge>
                <Badge className="bg-green-100 text-green-800">{item.availability}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{item.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="text-2xl font-bold text-primary">{item.points} points</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1">{item.condition}</span>
                </div>
              </div>
            </div>

            {/* Owner Info */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={item.user.avatar} />
                    <AvatarFallback>{item.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.user.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{item.user.location}</span>
                      <span>•</span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1">{item.user.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{item.user.swaps} swaps</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button size="lg" className="w-full" onClick={handleSwapRequest}>
                <Repeat className="h-5 w-5 mr-2" />
                Request Swap
              </Button>
              <Button size="lg" variant="outline" className="w-full" onClick={handleRedeemPoints}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Redeem with Points
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Heart className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Item Specifications */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Item Details</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Brand:</span>
                    <span className="ml-2 font-medium">{item.brand}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Color:</span>
                    <span className="ml-2 font-medium">{item.color}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Material:</span>
                    <span className="ml-2 font-medium">{item.material}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Posted:</span>
                    <span className="ml-2 font-medium">
                      {new Date(item.datePosted).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Description */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-3">Description</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">Swap Preferences:</h4>
              <div className="flex flex-wrap gap-2">
                {item.swapPreferences.map((pref, index) => (
                  <Badge key={index} variant="outline">{pref}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">#{tag}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Items */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Similar Items</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedItems.map((relatedItem) => (
              <Link key={relatedItem.id} to={`/item/${relatedItem.id}`} className="group">
                <Card className="overflow-hidden hover:shadow-card transition-smooth group-hover:scale-105">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedItem.image}
                      alt={relatedItem.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">{relatedItem.title}</h4>
                    <span className="text-primary font-bold">{relatedItem.points} points</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ItemDetail;