import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, BookOpen, Music, Baby, Handshake } from "lucide-react";
import mensMinistryImage from "@/assets/mans-ministry.jpg";
import youthPrayerImg from "@/assets/gallery/youth-prayer.jpeg";
import worshipTeamImg from "@/assets/gallery/worship-team.jpeg";
import congregationPrayerImg from "@/assets/gallery/congregation-prayer.jpeg";
import sundayServiceImg from "@/assets/gallery/sunday-service.jpeg";
import youthWorshipImg from "@/assets/gallery/youth-worship.jpeg";

const departments = [
  {
    id: 1,
    name: "Joshua Generation",
    subtitle: "Youth Ministry",
    icon: Users,
    cardBg: "bg-gradient-to-br from-primary to-church-purple-dark",
    textColor: "text-white",
    bulletBg: "bg-white",
    image: youthWorshipImg,
    description: "Grooming a purpose-driven and God-fearing generation.",
    who: "Ages 13–25",
    activities: ["Friday night fellowship", "Youth camps & retreats", "Community service", "Mentorship programs"],
  },
  {
    id: 2,
    name: "Merciful Hearts",
    subtitle: "Children's Ministry",
    icon: Baby,
    cardBg: "bg-gradient-to-br from-accent to-church-gold-dark",
    textColor: "text-accent-foreground",
    bulletBg: "bg-primary",
    image: youthPrayerImg,
    description: "Grooming children who will be adults that are firmly rooted in Christ.",
    who: "Ages 3–12",
    activities: ["Sunday School", "Vacation Bible School", "Children's choir", "Holiday programs"],
  },
  {
    id: 3,
    name: "Psalmists of Mercy",
    subtitle: "Music Ministry",
    icon: Music,
    cardBg: "bg-gradient-to-br from-church-purple-light to-primary",
    textColor: "text-white",
    bulletBg: "bg-accent",
    image: worshipTeamImg,
    description: "Skillfully and excellently leading people into God's presence through Biblically aligned songs.",
    who: "All ages welcome",
    activities: ["Sunday worship", "Choir practice", "Instrumental training", "Creative arts"],
  },
  {
    id: 4,
    name: "Vessels of Mercy",
    subtitle: "Women's Ministry",
    icon: Heart,
    cardBg: "bg-gradient-to-br from-accent to-church-gold-light",
    textColor: "text-accent-foreground",
    bulletBg: "bg-primary",
    image: congregationPrayerImg,
    description: "Empowering women of all ages, from all walks of life to fulfill their God-given purpose.",
    who: "All women",
    activities: ["Monthly fellowship", "Bible study groups", "Prayer circles", "Skills workshops"],
  },
  {
    id: 5,
    name: "Champions of Mercy",
    subtitle: "Men's Ministry",
    icon: Handshake,
    cardBg: "bg-gradient-to-br from-primary to-church-purple-dark",
    textColor: "text-white",
    bulletBg: "bg-accent",
    image: mensMinistryImage,
    description: "Empowering men of all ages, from all walks of life to claim back their positions of being the heads and fulfilling their God-ordained purpose on earth.",
    who: "All men",
    activities: ["Men's breakfast meetings", "Accountability groups", "Leadership development", "Sports & fellowship"],
  },
  {
    id: 6,
    name: "Prayer & Bible Study",
    subtitle: "Weekly Gathering",
    icon: BookOpen,
    cardBg: "bg-gradient-to-br from-church-purple-light to-accent",
    textColor: "text-white",
    bulletBg: "bg-white",
    image: sundayServiceImg,
    description: "A weekly gathering to top-up, recharge and align.",
    who: "Everyone",
    activities: ["Weekly Bible study", "New believers' classes", "Discipleship programs", "Scripture memorization"],
  },
];

const Departments = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-divine flex items-center justify-center shadow-glow">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Departments
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your place to serve and grow
            </p>
          </div>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <Card key={dept.id} className={`${dept.cardBg} border-0 overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02]`}>
                {dept.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={dept.image} 
                      alt={dept.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <dept.icon className={`w-6 h-6 ${dept.textColor}`} />
                    </div>
                    <div>
                      <CardTitle className={`text-xl ${dept.textColor}`}>{dept.name}</CardTitle>
                      <p className={`text-xs ${dept.textColor} opacity-80 font-medium`}>{dept.subtitle}</p>
                      <p className={`text-xs ${dept.textColor} opacity-60`}>{dept.who}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className={`${dept.textColor} opacity-90 font-medium`}>
                    {dept.description}
                  </p>
                  <ul className="space-y-1">
                    {dept.activities.map((activity, i) => (
                      <li key={i} className={`flex items-center gap-2 text-sm ${dept.textColor} opacity-80`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${dept.bulletBg}`} />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="mt-12 bg-gradient-to-r from-primary via-church-purple to-accent border-0">
            <CardContent className="p-8 lg:p-12 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Find Your Place to Serve
              </h3>
              <p className="text-white/90 max-w-xl mx-auto">
                Contact us at <a href="tel:0624194169" className="underline font-semibold">062 419 4169</a> to get involved.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Departments;
