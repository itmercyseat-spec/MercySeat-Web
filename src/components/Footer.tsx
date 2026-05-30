import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import churchLogo from "@/assets/church-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={churchLogo} alt="Mercy Seat Family Fellowship" className="h-12 w-auto" />
              <span className="font-bold text-accent">MSFF</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              A place where families grow together in faith, love, and service.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Led by Apostle T.I. &amp; Mrs P.P. Molefe
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-accent mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:0624194169" className="text-sm hover:text-accent transition-colors">062 419 4169</a>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm">info@mercyseat.org</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Boksburg", addr: "678 Elephant St, Villa Liza, Boksburg, 1459", clickable: true },
                  { label: "Tshepisong", addr: "4780 Cnr Abraham Tiro & Dulcie September Street, Phase 7, Tshepisong", clickable: false },
                  { label: "Mpumalanga", addr: "Schoesmandal Station, KaSombo, Mpumalanga", clickable: true },
                ].map((loc) => {
                  const content = (
                    <>
                      <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        <span className="font-semibold text-accent">{loc.label}: </span>
                        {loc.addr}
                      </span>
                    </>
                  );
                  return loc.clickable ? (
                    <a
                      key={loc.label}
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.addr)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={loc.label} className="flex items-start gap-2 text-primary-foreground/80">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-accent mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-6">
              <a href="https://www.facebook.com/MercySeatFamilyFellowship/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@MercySeat-ff" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-primary-foreground/60">Sunday Service</p>
              <p className="font-semibold text-accent">08h00 Intercession</p>
              <p className="font-semibold text-accent">09h00 – 11h30 Worship</p>
            </div>
          </div>

          {/* Give */}
          <div>
            <h3 className="font-semibold text-accent mb-4">Support Us</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Your tithes and offerings make a difference.
            </p>
            <Link to="/give">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold w-full">
                <Heart className="w-4 h-4 mr-2" />
                Give / Tithe
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Mercy Seat Family Fellowship. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
