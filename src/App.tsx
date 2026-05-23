import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { StickyGiveButton } from "@/components/StickyGiveButton";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Calendar from "./pages/Calendar";
import Departments from "./pages/Departments";
import Sermons from "./pages/Sermons";
import Gallery from "./pages/Gallery";
import Give from "./pages/Give";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <StickyGiveButton />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/events" element={<Events />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/give" element={<Give />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
