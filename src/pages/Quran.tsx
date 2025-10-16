import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Loader2 } from "lucide-react";

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

const Quran = () => {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => {
        setSurahs(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching surahs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">The Holy Quran</h1>
        <p className="text-muted-foreground">Select a Surah to begin reading</p>
      </div>

      <ScrollArea className="h-[70vh]">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {surahs.map((surah) => (
            <Link key={surah.number} to={`/quran/${surah.number}`}>
              <Card className="glass-effect border-none shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">{surah.number}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg mb-1">{surah.englishName}</h3>
                      <p className="text-2xl quran-font text-primary mb-2">{surah.name}</p>
                      <p className="text-sm text-muted-foreground mb-1">
                        {surah.englishNameTranslation}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {surah.numberOfAyahs} verses
                        </span>
                        <span className="capitalize">{surah.revelationType}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Quran;