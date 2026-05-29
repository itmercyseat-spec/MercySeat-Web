import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WelcomeDialog } from "@/components/WelcomeDialog";
import { InstallPrompt } from "@/components/InstallPrompt";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Calendar,
  Users,
  BookOpen,
  Clock,
  MapPin,
  Phone,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import heroImage from "@/assets/members.jpg";
import pastorImage from "@/assets/pastor.jpg";
import churchLogo from "@/assets/church-logo.png";

const Index = () => {
  const [watchOnlineOpen, setWatchOnlineOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      <WelcomeDialog />
      <InstallPrompt />

      {/* Hero Section with Critical Info */}
      <section className="relative min-h-[650px] flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/90" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <img
            src={churchLogo}
            alt="Mercy Seat Family Fellowship"
            className="w-24 h-24 mx-auto mb-4 object-contain drop-shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg">
            Mercy Seat Family Fellowship
          </h1>
          <p className="text-lg md:text-xl text-accent font-semibold mb-2 drop-shadow-md">
            The Dwelling Place of God's Tangible Presence
          </p>
          <p className="text-white/90 mb-6 text-base">
            Christ Centred and Family Driven
          </p>

          {/* Key Info Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-white/90">
            <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-accent" />
              <span>Sundays 08h00 – 11h30</span>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=678+Elephant+St,+Villa+Liza,+Boksburg,+1459"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/25 transition-colors"
            >
              <MapPin className="w-4 h-4 text-accent" />
              <span>678 Elephant St, Villa Liza</span>
            </a>
            <a
              href="tel:0624194169"
              className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/25 transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>062 419 4169</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-glow text-base"
            >
              Join Us This Sunday
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary font-semibold"
              onClick={() => setWatchOnlineOpen(true)}
            >
              <Play className="w-4 h-4 mr-1" />
              Watch Online
            </Button>
            <Link to="/give">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-white/90 font-bold w-full"
              >
                Give / Tithe
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Watch Online Coming Soon Dialog */}
      <Dialog open={watchOnlineOpen} onOpenChange={setWatchOnlineOpen}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader className="items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="text-2xl">Coming Soon!</DialogTitle>
            <DialogDescription className="text-base pt-2">
              The Watch Online feature is currently under development. Soon
              you'll be able to watch our live services and past sermons right
              here!
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setWatchOnlineOpen(false)} className="mt-4">
            Got It
          </Button>
        </DialogContent>
      </Dialog>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/calendar">
            <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-primary hover:scale-[1.02]">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Upcoming Events</h3>
                  <p className="text-muted-foreground text-sm">
                    Stay connected with our church calendar
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/departments">
            <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-accent hover:scale-[1.02]">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Departments</h3>
                  <p className="text-muted-foreground text-sm">
                    Find your place in our vibrant ministries
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/sermons">
            <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-primary hover:scale-[1.02]">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Sermons</h3>
                  <p className="text-muted-foreground text-sm">
                    Listen to inspiring messages
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                A Church Family United in Purpose
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Led by Apostle T.I. and Mrs P.P. Molefe, Mercy Seat Family
                Fellowship is a Christ-centred, family-driven community where
                believers worship, learn, and grow together.
              </p>
              <Button className="bg-primary hover:bg-primary/90 font-semibold">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <img
                src={pastorImage}
                alt="Apostle T.I. & Mrs P.P. Molefe"
                className="rounded-lg shadow-soft w-full h-[500px] object-cover object-top"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/30 rounded-lg -z-10" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary to-church-purple-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Vision */}
            <Card className="bg-white border-0 overflow-hidden shadow-xl relative rounded-lg h-full">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `url(${churchLogo})`,
                  backgroundSize: "60%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right bottom",
                }}
              />
              <CardContent className="p-8 relative text-center h-full flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-bold">
                    Our Vision
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  Rebuilding Strong Families In and For Christ
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A community where every family is strengthened in faith,
                  united in love, and empowered to reflect God's design for
                  family life.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="bg-accent border-0 overflow-hidden shadow-xl relative rounded-lg h-full">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `url(${churchLogo})`,
                  backgroundSize: "60%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right bottom",
                }}
              />
              <CardContent className="p-8 relative text-center h-full flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                    Our Mission
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-accent-foreground">
                  We Are Committed To
                </h2>
                <ul className="space-y-3 text-left">
                  {[
                    { t: "Restoring family values.", r: "Ephesians 6:1-4" },
                    { t: "Reviving true worship to God.", r: "John 4:24" },
                    {
                      t: "Equipping and enriching leaders.",
                      r: "Romans 12:11-12",
                    },
                    {
                      t: "Reaching out to the community.",
                      r: "Matthew 28:19-20",
                    },
                  ].map((m, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-accent-foreground font-semibold text-sm">
                          {m.t}
                        </p>
                        <p className="text-accent-foreground/60 text-xs italic">
                          {m.r}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="bg-church-pink border-0 overflow-hidden shadow-xl relative rounded-lg h-full">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `url(${churchLogo})`,
                  backgroundSize: "60%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right bottom",
                }}
              />
              <CardContent className="p-8 relative text-center h-full flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                    Our Values
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2 text-white">
                  Founded on LEVELS
                </h2>
                <p className="text-white/80 mb-4 italic text-xs">
                  Love · Empathy · Versatility · Excellence · Loyalty · Service
                </p>
                <ul className="space-y-3 text-left">
                  {[
                    {
                      title: "Love",
                      desc: "The foundation of everything we do.",
                    },
                    {
                      title: "Empathy",
                      desc: "We carry each other's burdens.",
                    },
                    {
                      title: "Versatility",
                      desc: "Flexible, yet rooted in God's word.",
                    },
                    { title: "Excellence", desc: "We serve with excellence." },
                    {
                      title: "Loyalty",
                      desc: "Supporting the church's vision.",
                    },
                    {
                      title: "Service",
                      desc: "Serving God by serving His people.",
                    },
                  ].map((v, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold text-sm">
                          {v.title}
                        </p>
                        <p className="text-white/80 text-xs">{v.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-divine text-white border-0">
          <CardContent className="p-12 text-center">
            <img
              src={churchLogo}
              alt="Mercy Seat Family Fellowship"
              className="w-20 h-20 mx-auto mb-6 object-contain"
            />
            <h2 className="text-3xl font-bold mb-4">
              Experience God's Love With Us
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              The dwelling place of God's tangible presence.
              <br />
              We are Christ Centred and Family Driven.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold"
              >
                Plan Your Visit
              </Button>
              <Link to="/give">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
                >
                  Give / Tithe
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
