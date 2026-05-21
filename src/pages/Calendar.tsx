import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar as CalendarIcon } from "lucide-react";
import calendarImage from "@/assets/church-calendar-2026.jpeg";

const Calendar = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
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
          </div>

          {/* Calendar Image */}
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-soft border border-border bg-card">
            <img
              src={calendarImage}
              alt="Mercy Seat Family Fellowship Calendar 2026 – Governance & Dominion"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Calendar;
