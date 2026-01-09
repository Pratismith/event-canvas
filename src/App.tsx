import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import EventExhibitors from "./pages/EventExhibitors";
import EventAccess from "./pages/EventAccess";
import About from "./pages/About";
import Exhibitors from "./pages/Exhibitors";
import Organizers from "./pages/Organizers";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import BusinessModel from "./pages/BusinessModel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetail />} />
          <Route path="/events/:eventId/exhibitors" element={<EventExhibitors />} />
          <Route path="/events/:eventId/access" element={<EventAccess />} />
          <Route path="/about" element={<About />} />
          <Route path="/exhibitors" element={<Exhibitors />} />
          <Route path="/organizers" element={<Organizers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/business-model" element={<BusinessModel />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
