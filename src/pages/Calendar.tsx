import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar as CalendarIcon, ZoomIn, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import calendarImage from "@/assets/church-calendar-2026.jpeg";

const Calendar = () => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-divine flex items-center justify-center shadow-glow">
                <CalendarIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
              Church Calendar 2026
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Governance &amp; Dominion — our official calendar of events for the year
            </p>
            <p className="text-sm text-muted-foreground mt-2 inline-flex items-center gap-1">
              <ZoomIn className="w-4 h-4" /> Tap the calendar to zoom in
            </p>
          </div>

          <button
            type="button"
            onClick={() => setZoomed(true)}
            className="block w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-soft border border-border bg-card cursor-zoom-in group relative"
            aria-label="Zoom calendar"
          >
            <img
              src={calendarImage}
              alt="Mercy Seat Family Fellowship Calendar 2026 – Governance & Dominion"
              className="w-full h-auto block transition-transform group-hover:scale-[1.02]"
              loading="eager"
            />
            <span className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-md">
              <ZoomIn className="w-5 h-5 text-foreground" />
            </span>
          </button>
        </div>
      </main>

      <Dialog open={zoomed} onOpenChange={setZoomed}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto p-0 bg-background/95 border-none overflow-auto">
          <DialogTitle className="sr-only">Church Calendar 2026 (Zoomed)</DialogTitle>
          <button
            onClick={() => setZoomed(false)}
            className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-background"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
          <img
            src={calendarImage}
            alt="Mercy Seat Family Fellowship Calendar 2026 – Zoomed"
            className="w-auto max-w-none h-auto block"
            style={{ minWidth: "100%" }}
          />
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Calendar;
