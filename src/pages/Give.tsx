import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heart, Building2, Church, Sparkles } from "lucide-react";

const Give = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Give / Tithe
            </h1>
            <p className="text-muted-foreground">
              Thank you for your generous heart. You can support the ministry of
              Mercy Seat Family Fellowship using the banking details below.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-soft border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Banking Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase text-muted-foreground font-semibold">Account Name</p>
                  <p className="font-medium">MERCY SEAT FAMILY FELLOWSHIP</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-muted-foreground font-semibold">Bank</p>
                  <p className="font-medium">Absa</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-muted-foreground font-semibold">Account Number</p>
                  <p className="font-medium">9279706030</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-muted-foreground font-semibold">Reference</p>
                  <p className="font-medium">Your Name + Tithe / Offering</p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <p>
                  "Each of you should give what you have decided in your heart to give,
                  not reluctantly or under compulsion, for God loves a cheerful giver."
                  <span className="block italic mt-1">— 2 Corinthians 9:7</span>
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-primary pt-2">
                <Church className="w-4 h-4" />
                <span>For full banking details, please contact the church office.</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Give;
