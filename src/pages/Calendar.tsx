import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Sunday Service",
    date: "Every Sunday",
    time: "10:00 AM - 12:00 PM",
    location: "Main Sanctuary",
    type: "Service",
    description: "Join us for worship, praise, and powerful preaching"
  },
  {
    id: 2,
    title: "Youth Fellowship",
    date: "Every Friday",
    time: "6:00 PM - 8:00 PM",
    location: "Youth Hall",
    type: "Youth",
    description: "Young people gathering for fellowship, games, and spiritual growth"
  },
  {
    id: 3,
    title: "Prayer Meeting",
    date: "Every Wednesday",
    time: "6:00 PM - 7:30 PM",
    location: "Prayer Room",
    type: "Prayer",
    description: "Corporate prayer and intercession for our community and world"
  },
  {
    id: 4,
    title: "Women's Ministry",
    date: "First Saturday",
    time: "9:00 AM - 11:00 AM",
    location: "Fellowship Hall",
    type: "Ministry",
    description: "Empowering women through faith, fellowship, and service"
  },
  {
    id: 5,
    title: "Children's Sunday School",
    date: "Every Sunday",
    time: "10:00 AM - 11:00 AM",
    location: "Children's Wing",
    type: "Children",
    description: "Bible lessons and activities for children aged 3-12"
  },
  {
    id: 6,
    title: "Bible Study",
    date: "Every Thursday",
    time: "7:00 PM - 8:30 PM",
    location: "Main Hall",
    type: "Study",
    description: "Deep dive into Scripture with interactive discussions"
  }
];

const getTypeColor = (type: string) => {
  const colors = {
    Service: "bg-primary text-primary-foreground",
    Youth: "bg-secondary text-secondary-foreground",
    Prayer: "bg-church-purple text-white",
    Ministry: "bg-church-gold text-foreground",
    Children: "bg-church-blue text-foreground",
    Study: "bg-accent text-accent-foreground"
  };
  return colors[type as keyof typeof colors] || "bg-muted";
};

const Calendar = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-divine flex items-center justify-center shadow-glow">
                <CalendarIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Church Calendar
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay connected with all our services, events, and ministry activities
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-soft transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <Badge className={getTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2 border-t border-border">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <Card className="mt-12 bg-gradient-worship border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Join Us for Any Event
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                All are welcome at Mercy Seat Family Fellowship. Whether you're visiting for the first time 
                or have been with us for years, we'd love to see you at our events.
              </p>
              <p className="text-sm text-muted-foreground">
                For more information about specific events, please contact us at{" "}
                <span className="text-primary font-medium">info@mercyseat.org</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Calendar;
