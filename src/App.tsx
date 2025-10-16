import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer.tsx";
import Index from "./pages/Index";
import Careers from "./pages/Careers";
import Tender from "./pages/Tenders.tsx";
import WorkDetails from "./pages/workDetails.tsx";
import NewsDetails from "./pages/News-details.tsx";
import RefundPolicy from "./pages/RefundPolicy.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/tenders" element={<Tender />} />
          <Route path="/work-Details" element={<WorkDetails />} />
          <Route path="/news-Details" element={<NewsDetails />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
