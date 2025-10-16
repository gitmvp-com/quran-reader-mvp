import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";

interface Ayah {
  number: number;
  text: string;
  numberInSurah: number;
}

interface SurahData {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
  ayahs: Ayah[];
}

const SurahDetail = () => {
  const { surahNumber } = useParams();
  const [surahArabic, setSurahArabic] = useState<SurahData | null>(null);
  const [surahEnglish, setSurahEnglish] = useState<SurahData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`).then(res => res.json()),
      fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/en.asad`).then(res => res.json())
    ])
      .then(([arabicData, englishData]) => {
        setSurahArabic(arabicData.data);
        setSurahEnglish(englishData.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching surah:", error);
        setLoading(false);
      });
  }, [surahNumber]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!surahArabic || !surahEnglish) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Failed to load surah</p>
        <Link to="/quran">
          <Button className="mt-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Surahs
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Link to="/quran">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Surahs
        </Button>
      </Link>

      <Card className="glass-effect border-none shadow-lg">
        <CardHeader className="text-center space-y-2 pb-4">
          <CardTitle className="text-3xl quran-font text-primary">
            {surahArabic.name}
          </CardTitle>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold">{surahArabic.englishName}</h2>
            <p className="text-muted-foreground">
              {surahArabic.englishNameTranslation}
            </p>
            <p className="text-sm text-muted-foreground">
              {surahArabic.numberOfAyahs} verses · {surahArabic.revelationType}
            </p>
          </div>
        </CardHeader>
      </Card>

      <ScrollArea className="h-[65vh]">
        <div className="space-y-6">
          {surahArabic.ayahs.map((ayah, index) => (
            <Card key={ayah.number} className="glass-effect border-none shadow-md">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{ayah.numberInSurah}</span>
                    </div>
                    <p className="text-2xl md:text-3xl quran-font leading-relaxed text-right flex-1" dir="rtl">
                      {ayah.text}
                    </p>
                  </div>
                  <div className="pl-11">
                    <p className="text-muted-foreground leading-relaxed">
                      {surahEnglish.ayahs[index]?.text}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default SurahDetail;