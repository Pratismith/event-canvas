// TypeScript interfaces for Event-related entities
// Structured for easy MongoDB mapping

export type EventStatus = "upcoming" | "live" | "completed";
export type EventType = "online" | "offline" | "hybrid";
export type Sector = 
  | "IT & Technology" 
  | "Tourism" 
  | "Infrastructure" 
  | "Startups" 
  | "Manufacturing" 
  | "Culture"
  | "Agriculture";

export interface Event {
  id: string;
  title: string;
  description: string;
  sector: Sector;
  location: string;
  venue: string;
  startDate: string;
  endDate: string;
  image: string;
  organizerName: string;
  organizerLogo?: string;
  exhibitorCount: number;
  status: EventStatus;
  eventType: EventType;
  hasOnlineAccess: boolean;
  highlights: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Exhibitor {
  id: string;
  eventId: string;
  companyName: string;
  companyLogo: string;
  description: string;
  category: string;
  stallNumber: string;
  contactEmail: string;
  contactPhone: string;
  website?: string;
  products: string[];
  hasDigitalStall: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TicketType {
  id: string;
  eventId: string;
  name: string;
  type: "online" | "offline";
  price: number;
  currency: string;
  benefits: string[];
  isAvailable: boolean;
  maxQuantity?: number;
  soldCount: number;
}

export interface AccessPass {
  id: string;
  userId: string;
  eventId: string;
  ticketTypeId: string;
  purchaseDate: string;
  validFrom: string;
  validUntil: string;
  status: "active" | "expired" | "cancelled";
}
