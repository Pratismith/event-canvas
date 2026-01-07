import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Search, Filter } from "lucide-react";
import itExpo from "@/assets/events/it-expo.jpg";
import tourismExpo from "@/assets/events/tourism-expo.jpg";
import startupExpo from "@/assets/events/startup-expo.jpg";
import infrastructureExpo from "@/assets/events/infrastructure-expo.jpg";

const allEvents = [
  {
    id: 1,
    title: "TechIndia IT Expo 2026",
    category: "IT & Technology",
    location: "Bangalore, India",
    date: "March 15-18, 2026",
    image: itExpo,
    exhibitors: 120,
    isLive: true,
    description: "India's largest IT and technology exhibition featuring cutting-edge software, hardware, and digital solutions.",
  },
  {
    id: 2,
    title: "Tourism & Travel Fair",
    category: "Tourism",
    location: "Dubai, UAE",
    date: "April 5-8, 2026",
    image: tourismExpo,
    exhibitors: 85,
    isLive: false,
    description: "Explore destinations worldwide, connect with travel agencies, and discover exclusive travel packages.",
  },
  {
    id: 3,
    title: "Startup India Summit",
    category: "Startups",
    location: "Mumbai, India",
    date: "May 20-22, 2026",
    image: startupExpo,
    exhibitors: 200,
    isLive: false,
    description: "Connect with innovative startups, investors, and industry leaders shaping the future of business.",
  },
  {
    id: 4,
    title: "Build & Infrastructure Expo",
    category: "Infrastructure",
    location: "Delhi, India",
    date: "June 10-13, 2026",
    image: infrastructureExpo,
    exhibitors: 95,
    isLive: false,
    description: "Showcasing the latest in construction, building materials, and infrastructure development.",
  },
  {
    id: 5,
    title: "AgriTech Innovation Fair",
    category: "Agriculture",
    location: "Hyderabad, India",
    date: "July 8-11, 2026",
    image: itExpo,
    exhibitors: 75,
    isLive: false,
    description: "Agricultural technology and innovation exhibition for modern farming solutions.",
  },
  {
    id: 6,
    title: "Cultural Heritage Exhibition",
    category: "Culture",
    location: "Guwahati, India",
    date: "August 15-18, 2026",
    image: tourismExpo,
    exhibitors: 60,
    isLive: false,
    description: "Celebrating cultural diversity with traditional crafts, arts, and heritage displays.",
  },
];

const categories = [
  "All Categories",
  "IT & Technology",
  "Tourism",
  "Startups",
  "Infrastructure",
  "Agriculture",
  "Culture",
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Explore Events
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover exhibitions across sectors—IT, Tourism, Infrastructure, Startups, and more. Access them digitally from anywhere.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search events by name or location..."
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

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredEvents.length}</span> events
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      {event.category}
                    </Badge>
                    {event.isLive && (
                      <Badge className="bg-destructive text-destructive-foreground animate-pulse">
                        Live Now
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-xl text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {event.exhibitors} Exhibitors
                    </span>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Explore Event →
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">No events found</p>
              <Button variant="outline" onClick={() => { setSearchTerm(""); setSelectedCategory("All Categories"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
