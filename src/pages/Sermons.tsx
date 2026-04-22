import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Play, Calendar, ExternalLink, Mic } from "lucide-react";
import { useState } from "react";

const sermons = [
  {
    id: 1,
    title: "A Man After God's Heart",
    preacher: "T.I Molefe",
    date: "November 17, 2025",
    series: "Faith Foundations",
    duration: "45 mins",
    description: "Discover what it means to be a man after God's own heart and live according to His will.",
    youtubeUrl: "https://youtu.be/F7zYOgJzEoc",
    youtubeId: "F7zYOgJzEoc"
  },
  {
    id: 2,
    title: "Back to God Conference Day 1",
    preacher: "P Molefe",
    date: "November 10, 2025",
    series: "Conference",
    duration: "38 mins",
    description: "A powerful message from the Back to God Conference calling believers to return to their first love.",
    youtubeUrl: "https://youtu.be/z0NYAeVVEwo",
    youtubeId: "z0NYAeVVEwo"
  },
  {
    id: 3,
    title: "Live to Pray & Pray to Live",
    preacher: "T.I Molefe",
    date: "November 3, 2025",
    series: "Prayer Life",
    duration: "42 mins",
    description: "Understanding the importance of prayer as the foundation of a victorious Christian life.",
    youtubeUrl: "https://youtu.be/hoA1RmDHfJo",
    youtubeId: "hoA1RmDHfJo"
  },
  {
    id: 4,
    title: "How Can the Ark of the Lord Come to Me?",
    preacher: "P Molefe",
    date: "October 27, 2025",
    series: "Presence of God",
    duration: "50 mins",
    description: "Preparing our hearts and homes to receive the presence of God.",
    youtubeUrl: "https://youtu.be/f5FyIhp_hpI",
    youtubeId: "f5FyIhp_hpI"
  },
  {
    id: 5,
    title: "Iyasebenza Lento kaThixo",
    preacher: "T.I Molefe",
    date: "October 20, 2025",
    series: "Faith in Action",
    duration: "47 mins",
    description: "A testimony of God's faithfulness and how His power works in our lives.",
    youtubeUrl: "https://youtu.be/iSMp7GK_vJ4",
    youtubeId: "iSMp7GK_vJ4"
  },
  {
    id: 6,
    title: "New Wine Requires New Wineskin",
    preacher: "P Molefe",
    date: "October 13, 2025",
    series: "Spiritual Renewal",
    duration: "40 mins",
    description: "Embracing transformation and preparing ourselves for what God is doing in this season.",
    youtubeUrl: "https://youtu.be/Rsqt0cbB2Is",
    youtubeId: "Rsqt0cbB2Is"
  }
];

const Sermons = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const handlePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-divine flex items-center justify-center shadow-glow">
                <Mic className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Sermons & Teachings
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Listen to inspiring messages and grow in your faith journey
            </p>
          </div>

          {/* Featured Sermon */}
          <Card className="mb-12 bg-gradient-worship border-primary/20">
            <CardContent className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-4">
                    Latest Sermon
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    {sermons[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-lg">
                    {sermons[0].description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {sermons[0].date}
                    </span>
                    <span>•</span>
                    <span>Preacher: {sermons[0].preacher}</span>
                    <span>•</span>
                    <span>{sermons[0].duration}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={() => setPlayingId(playingId === sermons[0].id ? null : sermons[0].id)}
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {playingId === sermons[0].id ? "Hide Video" : "Watch Now"}
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.open(sermons[0].youtubeUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open on YouTube
                    </Button>
                  </div>
                  
                  {/* YouTube Embed */}
                  {playingId === sermons[0].id && (
                    <div className="mt-6">
                      <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${sermons[0].youtubeId}?autoplay=1`}
                          title={sermons[0].title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  )}
                </div>
                
                {playingId !== sermons[0].id && (
                  <div className="bg-gradient-divine rounded-lg p-8 text-white text-center">
                    <BookOpen className="w-20 h-20 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-semibold mb-2">
                      Series: {sermons[0].series}
                    </p>
                    <p className="text-white/80">
                      Part of our ongoing teaching series on building strong foundations of faith
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Sermon Archive */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Recent Sermons
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sermons.slice(1).map((sermon) => (
              <Card key={sermon.id} className="hover:shadow-soft transition-shadow">
                <CardHeader>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {sermon.series}
                  </span>
                  <CardTitle className="text-xl mt-2">{sermon.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {sermon.description}
                  </p>
                  
                  {/* YouTube Embed for sermon cards */}
                  {playingId === sermon.id && sermon.youtubeId && (
                    <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${sermon.youtubeId}?autoplay=1`}
                        title={sermon.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  )}
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground border-t border-border pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{sermon.date}</span>
                    </div>
                    <div>Preacher: {sermon.preacher}</div>
                    <div>Duration: {sermon.duration}</div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      onClick={() => handlePlay(sermon.id)}
                      size="sm"
                      className="flex-1"
                      variant={playingId === sermon.id ? "secondary" : "default"}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {playingId === sermon.id ? "Hide Video" : "Watch"}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => window.open(sermon.youtubeUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Card */}
          <Card className="mt-12 bg-muted/50">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-3 text-foreground">
                Stay Connected with God's Word
              </h3>
              <p className="text-muted-foreground mb-4">
                New sermons are uploaded every week. Subscribe to never miss a message!
              </p>
              <p className="text-sm text-muted-foreground">
                For questions about our teachings or to request prayer, contact us at{" "}
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

export default Sermons;
