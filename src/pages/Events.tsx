import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "lucide-react";

// Import event posters
import governanceConference from "@/assets/events/governance-conference.jpeg";
import teachersNeeded from "@/assets/events/teachers-needed.jpeg";
import womensConference from "@/assets/events/womens-conference.jpeg";
import crossoverService from "@/assets/events/crossover-service.jpeg";
import worshipNight from "@/assets/events/worship-night.jpeg";
import fullArmor from "@/assets/events/full-armor.jpeg";

interface Event {
  id: number;
  title: string;
  dateValue: Date;
  image: string;
}

// Current date for comparison (January 16, 2026)
const currentDate = new Date("2026-01-16");

const allEvents: Event[] = [
  {
    id: 1,
    title: "Governance & Dominion Conference 2026",
    dateValue: new Date("2026-01-29"),
    image: governanceConference
  },
  {
    id: 2,
    title: "Teachers Needed - Children's Church",
    dateValue: new Date("2026-12-31"), // Ongoing recruitment
    image: teachersNeeded
  },
  {
    id: 3,
    title: "Going Back to God - Women's Conference 2025",
    dateValue: new Date("2025-10-25"),
    image: womensConference
  },
  {
    id: 4,
    title: "Cross Over Service - More Than Conquerors",
    dateValue: new Date("2025-12-31"),
    image: crossoverService
  },
  {
    id: 5,
    title: "Worship Night",
    dateValue: new Date("2025-11-28"),
    image: worshipNight
  },
  {
    id: 6,
    title: "The Full Armor",
    dateValue: new Date("2025-12-29"),
    image: fullArmor
  }
];

const upcomingEvents = allEvents
  .filter(event => event.dateValue >= currentDate)
  .sort((a, b) => a.dateValue.getTime() - b.dateValue.getTime());

const pastEvents = allEvents
  .filter(event => event.dateValue < currentDate)
  .sort((a, b) => b.dateValue.getTime() - a.dateValue.getTime());

const EventCard = ({ event }: { event: Event }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
    <img 
      src={event.image} 
      alt={event.title}
      className="w-full h-auto object-cover"
    />
  </Card>
);

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-divine flex items-center justify-center shadow-glow">
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Church Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with all our special events, conferences, and gatherings
            </p>
          </div>

          {/* Tabs for Upcoming and Past Events */}
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="upcoming" className="text-base">
                Upcoming Events ({upcomingEvents.length})
              </TabsTrigger>
              <TabsTrigger value="past" className="text-base">
                Past Events ({pastEvents.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              {upcomingEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">
                      No upcoming events at the moment. Check back soon!
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="past">
              {pastEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">
                      No past events to display.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          {/* Contact Info */}
          <Card className="mt-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                For More Information
              </h3>
              <p className="text-muted-foreground">
                Contact us at <span className="text-primary font-medium">+27 62 419 4169</span> or visit us at{" "}
                <span className="text-primary font-medium">687 Elephant Street, Villa Lisa, Boksburg</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;