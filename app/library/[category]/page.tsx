import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Play, Clock } from "lucide-react";
import Link from "next/link";
import { getCategoryById } from "@/lib/library-data";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryById(params.category);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/library">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-5xl">{category.icon}</div>
            <div>
              <h1 className="text-3xl font-bold text-balance">
                {category.name}
              </h1>
              <p className="text-lg opacity-90 text-pretty">
                {category.description}
              </p>
              <p className="text-sm opacity-75 mt-1">
                {category.items.length}{" "}
                {category.items.length === 1 ? "item" : "items"} available
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Available {category.name}
          </h2>
          <p className="text-muted-foreground">
            Click on any item to read the complete text and listen to audio
            recitations.
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.items.map((item) => (
            <Card
              key={item.id}
              className="hover:shadow-lg transition-all duration-300 border-border group hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors text-balance">
                      {item.title}
                    </CardTitle>
                    {item.description && (
                      <CardDescription className="mt-2 text-pretty">
                        {item.description}
                      </CardDescription>
                    )}
                  </div>
                  <div className="ml-4">
                    <BookOpen className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs text-white">
                    <BookOpen className="w-3 h-3 mr-1" />
                    Full Text
                  </Badge>
                  {item.youtubeId && (
                    <Badge variant="outline" className="text-xs">
                      <Play className="w-3 h-3 mr-1" />
                      Audio Available
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    Reading Mode
                  </Badge>
                </div>

                {/* Preview Text */}
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {item.content
                      .split("\n")
                      .find((line) => line.trim().length > 0)
                      ?.substring(0, 120)}
                    ...
                  </p>
                </div>

                {/* Action Button */}
                <Link
                  href={`/library/${params.category}/${item.id}`}
                  className="block"
                >
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Read {item.title}
                    <BookOpen className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {category.items.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">{category.icon}</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No {category.name} Available
            </h3>
            <p className="text-muted-foreground mb-6">
              We're working on adding more content to this category. Please
              check back soon.
            </p>
            <Link href="/library">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Browse Other Categories
              </Button>
            </Link>
          </div>
        )}

        {/* Category Info */}
        {category.items.length > 0 && (
          <div className="mt-16 bg-muted rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                About {category.name}
              </h3>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto mb-6">
                {category.description}. Each text includes the complete original
                content with optional audio support for enhanced spiritual
                practice and proper pronunciation.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Complete Texts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  <span>Audio Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Reading Mode</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">Explore the sacred wisdom of {category.name}</p>
            <p className="text-sm">
              "श्रद्धावान् लभते ज्ञानम्" - The faithful attain knowledge
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
