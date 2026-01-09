import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  MapPin, 
  Globe, 
  Mail, 
  Phone, 
  ArrowLeft,
  ExternalLink,
  Store
} from "lucide-react";
import { getEventById, getExhibitorsByEventId } from "@/data/events";

const EventExhibitors = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = eventId ? getEventById(eventId) : undefined;
  const allExhibitors = eventId ? getExhibitorsByEventId(eventId) : [];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Get unique categories from exhibitors
  const categories = ["All Categories", ...Array.from(new Set(allExhibitors.map(e => e.category)))];

  const filteredExhibitors = allExhibitors.filter((exhibitor) => {
    const matchesSearch = 
      exhibitor.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exhibitor.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || exhibitor.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (!event) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Event Not Found</h1>
          <p className="text-muted-foreground mb-8">The event you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/events">Browse Events</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={`/events/${event.id}`} 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {event.title}
          </Link>
          
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">{event.sector}</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Exhibitors at {event.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore {event.exhibitorCount}+ exhibitors showcasing their products and services. 
              Visit digital stalls, connect with representatives, and discover solutions.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search exhibitors by name or description..."
                className="pl-10 h-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-56 h-12">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
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
        </div>
      </section>

      {/* Exhibitors Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredExhibitors.length}</span> exhibitors
            </p>
          </div>

          {filteredExhibitors.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExhibitors.map((exhibitor) => (
                <Card 
                  key={exhibitor.id} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <CardContent className="p-0">
                    {/* Header with Logo */}
                    <div className="p-6 bg-accent/50 flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-background flex items-center justify-center overflow-hidden border border-border">
                        <img 
                          src={exhibitor.companyLogo} 
                          alt={exhibitor.companyName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg text-foreground truncate group-hover:text-primary transition-colors">
                          {exhibitor.companyName}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {exhibitor.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            Stall {exhibitor.stallNumber}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {exhibitor.description}
                      </p>

                      {/* Products */}
                      <div className="mb-4">
                        <p className="text-xs text-muted-foreground mb-2">Products & Services:</p>
                        <div className="flex flex-wrap gap-1">
                          {exhibitor.products.slice(0, 3).map((product, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {product}
                            </Badge>
                          ))}
                          {exhibitor.products.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{exhibitor.products.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span className="truncate">{exhibitor.contactEmail}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          <span>{exhibitor.contactPhone}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-4 border-t border-border">
                        {exhibitor.hasDigitalStall && (
                          <Button className="flex-1" size="sm">
                            <Store className="h-4 w-4 mr-1" />
                            Visit Digital Stall
                          </Button>
                        )}
                        {exhibitor.website && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={exhibitor.website} target="_blank" rel="noopener noreferrer">
                              <Globe className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Store className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground mb-4">No exhibitors found</p>
              <Button variant="outline" onClick={() => { setSearchTerm(""); setSelectedCategory("All Categories"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Want to explore more?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get full access to all exhibitor stalls, product catalogs, and direct communication with representatives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to={`/events/${event.id}/access`}>
                Get Event Access
                <ExternalLink className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to={`/events/${event.id}`}>
                Back to Event
                <ArrowLeft className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventExhibitors;
