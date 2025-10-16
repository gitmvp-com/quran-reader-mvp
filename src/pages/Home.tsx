import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center space-y-4 py-12">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Read the Quran
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A simple and beautiful Quran reader with Arabic text and English translation
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="glass-effect border-none shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Start Reading
            </CardTitle>
            <CardDescription>
              Browse all 114 Surahs of the Holy Quran with Arabic text and English translations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/quran">
              <Button className="w-full" size="lg">
                Browse Surahs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="glass-effect border-none shadow-lg">
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>✨ Beautiful Arabic typography with Amiri font</li>
              <li>🌍 English translations for every verse</li>
              <li>📱 Responsive design for all devices</li>
              <li>🎨 Clean and modern interface</li>
              <li>🚀 Fast and lightweight</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;