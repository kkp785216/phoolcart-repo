import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Play, Volume2, Share2 } from "lucide-react";
import Link from "next/link";
import { getCategoryById, getItemById } from "@/lib/library-data";
import { notFound } from "next/navigation";

interface ItemPageProps {
  params: {
    category: string;
    item: string;
  };
}

export default function ItemPage({ params }: ItemPageProps) {
  const category = getCategoryById(params.category);
  const item = getItemById(params.category, params.item);

  if (!category || !item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href={`/library/${params.category}`}>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to {category.name}
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-4xl">{category.icon}</div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-balance">
                  {item.title}
                </h1>
                {item.description && (
                  <p className="text-sm md:text-base opacity-90 text-pretty mt-1">
                    {item.description}
                  </p>
                )}
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">
                    {category.name}
                  </Badge>
                  {item.youtubeId && (
                    <Badge
                      variant="outline"
                      className="text-xs bg-transparent border-primary-foreground/20 text-white"
                    >
                      <Volume2 className="w-3 h-3 mr-1" />
                      Audio Available
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Reading Content */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <BookOpen className="w-6 h-6 text-primary" />
                {item.title} - Complete Text
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Reading Mode Content */}
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg p-6 md:p-8">
                  <div className="text-center mb-8">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      {item.title}
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                  </div>

                  <div className="space-y-4 text-foreground leading-relaxed">
                    {item.content.split("\n").map((line, index) => {
                      const trimmedLine = line.trim();
                      if (!trimmedLine)
                        return <div key={index} className="h-4" />;

                      // Check if line is a heading or special formatting
                      if (
                        trimmedLine.includes("॥") ||
                        trimmedLine.startsWith("ॐ") ||
                        trimmedLine.includes("दोहा")
                      ) {
                        return (
                          <div
                            key={index}
                            className="text-center font-semibold text-primary text-lg md:text-xl py-2"
                          >
                            {trimmedLine}
                          </div>
                        );
                      }

                      // Regular verse lines
                      return (
                        <div
                          key={index}
                          className="text-center text-base md:text-lg py-1 hover:bg-primary/5 rounded px-2 transition-colors"
                        >
                          {trimmedLine}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Audio Section */}
          {item.youtubeId && (
            <Card className="mt-8 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Play className="w-5 h-5 text-primary" />
                  Listen to {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0&modestbranding=1`}
                    title={`${item.title} Audio`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Listen along while reading for proper pronunciation and
                  rhythm. Audio helps enhance your spiritual practice and
                  devotion.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Reading Tips Section */}
          <Card className="mt-8 border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BookOpen className="w-5 h-5 text-primary" />
                Reading Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    For Best Experience
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      Read with devotion and concentration
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      Follow along with audio for pronunciation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      Maintain a peaceful environment
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      Face east or north direction if possible
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Spiritual Benefits
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      Enhances spiritual connection
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      Brings peace and tranquility
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      Purifies mind and heart
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      Removes negative energies
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between">
            <Link href={`/library/${params.category}`}>
              <Button
                variant="outline"
                className="w-full sm:w-auto bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                More {category.name}
              </Button>
            </Link>
            <Link href="/library">
              <Button
                variant="outline"
                className="w-full sm:w-auto bg-transparent"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Library
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              May this sacred recitation bring you peace and spiritual
              fulfillment
            </p>
            <p className="text-sm">
              "मन्त्रहीनं क्रियाहीनं भक्तिहीनं सुरेश्वर" - Without devotion, all
              practices are incomplete
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
