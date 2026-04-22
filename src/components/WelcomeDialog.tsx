import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const WelcomeDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      setTimeout(() => {
        setIsOpen(true);
      }, 1000);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasSeenWelcome", "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-divine flex items-center justify-center shadow-glow">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">
            Welcome to Mercy Seat Family Fellowship
          </DialogTitle>
          <DialogDescription className="text-center space-y-4 pt-4">
            <p>
              We're delighted to have you here! Join us this Sunday for worship, fellowship, and spiritual growth.
            </p>
            <div className="bg-muted p-4 rounded-lg space-y-1">
              <p className="font-semibold text-foreground">Sunday Service</p>
              <p className="text-foreground text-sm">08h00 – Intercession</p>
              <p className="text-foreground text-sm">09h00 – 11h30 Worship Service</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Led by Apostle T.I. & Mrs P.P. Molefe
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 mt-4">
          <Button onClick={handleClose} className="w-full bg-primary hover:bg-primary/90">
            Explore Our Church
          </Button>
          <Button onClick={handleClose} variant="outline" className="w-full">
            Remind Me Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
