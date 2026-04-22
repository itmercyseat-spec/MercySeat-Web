import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Image, Video, X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import membersImg from "@/assets/members.jpg";
import leadershipImg from "@/assets/leadership.jpg";
import pastorImg from "@/assets/pastor.jpg";
import mansMinistryImg from "@/assets/mans-ministry.jpg";
import youthPrayerImg from "@/assets/gallery/youth-prayer.jpeg";
import musicBandImg from "@/assets/gallery/music-band.jpeg";
import pastorAndWifeImg from "@/assets/gallery/pastor-and-wife.jpeg";
import worshipServiceImg from "@/assets/gallery/worship-service.jpeg";
import worshipTeamImg from "@/assets/gallery/worship-team.jpeg";
import congregationPrayerImg from "@/assets/gallery/congregation-prayer.jpeg";
import youthWorshipImg from "@/assets/gallery/youth-worship.jpeg";
import sundayServiceImg from "@/assets/gallery/sunday-service.jpeg";
import musiciansImg from "@/assets/gallery/musicians.jpeg";
import apostleCasual1Img from "@/assets/gallery/apostle-casual-1.jpeg";
import apostleCasual2Img from "@/assets/gallery/apostle-casual-2.jpeg";
import apostleAndWife2Img from "@/assets/gallery/apostle-and-wife-2.jpeg";
import apostleAndWife3Img from "@/assets/gallery/apostle-and-wife-3.jpeg";
import apostlePreaching1Img from "@/assets/gallery/apostle-preaching-1.jpeg";
import apostlePreaching2Img from "@/assets/gallery/apostle-preaching-2.jpeg";
import mrsMolefeSpeakingImg from "@/assets/gallery/mrs-molefe-speaking.jpeg";
import apostleFormal1Img from "@/assets/gallery/apostle-formal-1.jpeg";
import apostleReadingBibleImg from "@/assets/gallery/apostle-reading-bible.jpeg";
import apostleAndWifeFormalImg from "@/assets/gallery/apostle-and-wife-formal.jpeg";

type Category = "all" | "apostle" | "mrs-molefe" | "pastor-wife" | "members" | "music";

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Photos" },
  { value: "apostle", label: "Apostle T.I. Molefe" },
  { value: "mrs-molefe", label: "Mrs P.P. Molefe" },
  { value: "pastor-wife", label: "Pastor & Wife" },
  { value: "members", label: "Church Members" },
  { value: "music", label: "Music Ministry" },
];

const photos = [
  // Apostle T.I. Molefe
  { id: 1, src: pastorImg, title: "Apostle T.I. Molefe", category: "apostle" as const },
  { id: 2, src: apostleFormal1Img, title: "Apostle T.I. Molefe – Formal Portrait", category: "apostle" as const },
  { id: 3, src: apostleCasual1Img, title: "Apostle T.I. Molefe – Casual", category: "apostle" as const },
  { id: 4, src: apostleCasual2Img, title: "Apostle T.I. Molefe – Smiling", category: "apostle" as const },
  { id: 5, src: apostlePreaching1Img, title: "Apostle T.I. Molefe – Preaching", category: "apostle" as const },
  { id: 6, src: apostlePreaching2Img, title: "Apostle T.I. Molefe – At the Podium", category: "apostle" as const },
  { id: 7, src: apostleReadingBibleImg, title: "Apostle T.I. Molefe – Reading Bible", category: "apostle" as const },

  // Mrs P.P. Molefe
  { id: 8, src: mrsMolefeSpeakingImg, title: "Mrs P.P. Molefe – Speaking", category: "mrs-molefe" as const },

  // Pastor & Wife
  { id: 9, src: pastorAndWifeImg, title: "Apostle T.I. & Mrs P.P. Molefe", category: "pastor-wife" as const },
  { id: 10, src: apostleAndWifeFormalImg, title: "Apostle & Wife – Formal Portrait", category: "pastor-wife" as const },
  { id: 11, src: apostleAndWife2Img, title: "Apostle & Wife – Together", category: "pastor-wife" as const },
  { id: 12, src: apostleAndWife3Img, title: "Apostle & Wife – Fellowship", category: "pastor-wife" as const },

  // Church Members
  { id: 13, src: membersImg, title: "Church Members", category: "members" as const },
  { id: 14, src: leadershipImg, title: "Church Leadership", category: "members" as const },
  { id: 15, src: sundayServiceImg, title: "Sunday Service Worship", category: "members" as const },
  { id: 16, src: youthWorshipImg, title: "Youth Worship Service", category: "members" as const },
  { id: 17, src: worshipServiceImg, title: "Prayer Service", category: "members" as const },
  { id: 18, src: youthPrayerImg, title: "Youth in Prayer", category: "members" as const },
  { id: 19, src: congregationPrayerImg, title: "Congregation in Prayer", category: "members" as const },

  // Music Ministry
  { id: 20, src: worshipTeamImg, title: "Worship Team Leading Praise", category: "music" as const },
  { id: 21, src: musicBandImg, title: "Music Ministry Band", category: "music" as const },
  { id: 22, src: musiciansImg, title: "Keyboard & Drums", category: "music" as const },
  { id: 23, src: mansMinistryImg, title: "Men's Ministry", category: "music" as const },
];

const videos = [
  {
    id: 1,
    title: "Back to God Conference Day 1",
    url: "https://youtu.be/z0NYAeVVEwo",
    thumbnail: "https://img.youtube.com/vi/z0NYAeVVEwo/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Live to Pray & Pray to Live",
    url: "https://youtu.be/hoA1RmDHfJo",
    thumbnail: "https://img.youtube.com/vi/hoA1RmDHfJo/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "How can the Ark of the Lord come to me?",
    url: "https://youtu.be/f5FyIhp_hpI",
    thumbnail: "https://img.youtube.com/vi/f5FyIhp_hpI/maxresdefault.jpg",
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const filteredPhotos = selectedCategory === "all"
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  const currentPhotoIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto);
  const currentPhoto = filteredPhotos[currentPhotoIndex];

  const handlePrevious = () => {
    if (currentPhotoIndex > 0) {
      setSelectedPhoto(filteredPhotos[currentPhotoIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentPhotoIndex < filteredPhotos.length - 1) {
      setSelectedPhoto(filteredPhotos[currentPhotoIndex + 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-divine flex items-center justify-center shadow-glow">
                <Images className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore moments from our services, events, and fellowship gatherings
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="photos" className="flex items-center gap-2">
                <Image className="w-4 h-4" />
                Photos
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                Videos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="photos">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                    className="transition-all duration-200"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPhotos.map((photo) => (
                  <Card
                    key={photo.id}
                    className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
                    onClick={() => setSelectedPhoto(photo.id)}
                  >
                    <CardContent className="p-0 relative">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white font-semibold p-4">{photo.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredPhotos.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No photos in this category yet.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <a
                    key={video.id}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0 relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1" />
                          </div>
                        </div>
                      </CardContent>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground line-clamp-2">
                          {video.title}
                        </h3>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Photo Lightbox */}
      <Dialog open={selectedPhoto !== null} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-none">
          {currentPhoto && (
            <div className="relative">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 text-white/80 hover:text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {currentPhotoIndex > 0 && (
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
              )}
              {currentPhotoIndex < filteredPhotos.length - 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              )}

              <img
                src={currentPhoto.src}
                alt={currentPhoto.title}
                className="w-full max-h-[80vh] object-contain"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">{currentPhoto.title}</h3>
                <p className="text-white/70 text-sm mt-1">
                  {currentPhotoIndex + 1} of {filteredPhotos.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
