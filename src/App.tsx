import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import NotificationBell from "@/components/NotificationBell";

import Index from "./pages/Index";
import About from "./pages/About";
import CallForPapers from "./pages/CallForPapers";
import SpecialSessions from "./pages/SpecialSessions";
import Committee from "./pages/Committee";
import Registration from "./pages/Registration";
import Speakers from "./pages/Speakers";
import AcceptedPapers from "./pages/AcceptedPapers";
import Venue from "./pages/Venue";
import Contact from "./pages/Contact";
import Sponsorship from "./pages/Sponsorship";
import CameraReady from "./pages/CameraReady";
import Templates from "./pages/Templates";
import NotFound from "./pages/NotFound";

// Committee pages
import PatronsGeneralChairs from "./pages/committee/PatronsGeneralChairs";
import OrganizingCommittee from "./pages/committee/OrganizingCommittee";
import AdvisoryCommittees from "./pages/committee/AdvisoryCommittees";
import TechnicalProgramCommittee from "./pages/committee/TechnicalProgramCommittee";
import PublicationPlenaryChairs from "./pages/committee/PublicationPlenaryChairs";
import SupportingCommittees from "./pages/committee/SupportingCommittees";
import WomenInEngineering from "./pages/committee/WomenInEngineering";
import TrackChairs from "./pages/committee/TrackChairs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <NotificationBell />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/special-sessions" element={<SpecialSessions />} />
          <Route path="/camera-ready" element={<CameraReady />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/committee/patrons-general-chairs" element={<PatronsGeneralChairs />} />
          <Route path="/committee/organizing-committee" element={<OrganizingCommittee />} />
          <Route path="/committee/advisory-committees" element={<AdvisoryCommittees />} />
          <Route path="/committee/technical-program-committee" element={<TechnicalProgramCommittee />} />
          <Route path="/committee/publication-plenary-chairs" element={<PublicationPlenaryChairs />} />
          <Route path="/committee/supporting-committees" element={<SupportingCommittees />} />
          <Route path="/committee/women-in-engineering" element={<WomenInEngineering />} />
          <Route path="/committee/track-chairs" element={<TrackChairs />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/accepted-papers" element={<AcceptedPapers />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
