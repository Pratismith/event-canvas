import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Search, Globe } from "lucide-react";
import { events, sectors, locations, eventTypes } from "@/data/events";

export function EventsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("All Sectors");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedEventType, setSelectedEventType] = useState("all");

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === "All Sectors" || event.sector === selectedSector;
    const matchesLocation = selectedLocation === "All Locations" || event.location === selectedLocation;
    const matchesType = selectedEventType === "all" || event.eventType === selectedEventType;
    return matchesSearch && matchesSector && matchesLocation && matchesType;
  });

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const startStr = start.toLocaleDateString("en-IN", { month: "short", day: "numeric" });
    const endStr = end.toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" });
    return `${startStr} - ${endStr}`;
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedSector("All Sectors");
    setSelectedLocation("All Locations");
    setSelectedEventType("all");
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-accent to-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Discover
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-2 mb-4">
              Events & Exhibitions
            </h2>
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
            <Select value={selectedSector} onValueChange={setSelectedSector}>
              <SelectTrigger className="w-full sm:w-48 h-12">
                <SelectValue placeholder="Sector" />
              </SelectTrigger>
              <SelectContent>
                {sectors.map((sector) => (
                  <SelectItem key={sector} value={sector}>
                    {sector}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-full sm:w-48 h-12">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedEventType} onValueChange={setSelectedEventType}>
              <SelectTrigger className="w-full sm:w-40 h-12">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {eventTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="py-16">
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
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      {event.sector}
                    </Badge>
                    {event.status === "live" && (
                      <Badge className="bg-destructive text-destructive-foreground animate-pulse">
                        Live Now
                      </Badge>
                    )}
                    {event.hasOnlineAccess && (
                      <Badge variant="outline" className="bg-background/90 backdrop-blur-sm border-primary text-primary">
                        <Globe className="h-3 w-3 mr-1" />
                        Online
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
                      <span>{formatDateRange(event.startDate, event.endDate)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {event.exhibitorCount} Exhibitors
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
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}