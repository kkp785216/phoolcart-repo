import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, User, Flame, Heart, Star } from "lucide-react";
import Link from "next/link";
import { libraryData } from "@/lib/library-data";

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Flame className="w-8 h-8 text-yellow-200" />
              <BookOpen className="w-12 h-12 text-white" />
              <Star className="w-8 h-8 text-yellow-200" />
            </div>
            <h1 className="text-4xl font-bold text-balance text-white mb-2">
              Online Library
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <User className="w-5 h-5 text-yellow-200" />
              <Link
                href="/"
                className="text-yellow-200 hover:text-white transition-colors underline decoration-dotted"
              >
                Consult with our Expert Pandit Jis
              </Link>
              <Heart className="w-4 h-4 text-yellow-200" />
            </div>
            <p className="text-xl opacity-90 text-pretty max-w-2xl mx-auto text-white">
              Explore our collection of sacred texts, devotional hymns, and
              spiritual literature. Access Chalisas, Aartis, Stutis, and Paths
              with audio support for enhanced devotion.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Browse Categories
          </h2>
          <p className="text-muted-foreground">
            Select a category to explore our collection of sacred texts and
            devotional content.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {libraryData.map((category) => (
            <Card
              key={category.id}
              className="hover:shadow-lg transition-all duration-300 border-border group hover:border-primary/30"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-pretty">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">
                    {category.items.length}{" "}
                    {category.items.length === 1 ? "item" : "items"} available
                  </p>
                </div>

                <Link href={`/library/${category.id}`} className="block">
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors cursor-pointer">
                    Explore {category.name}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-muted rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Library Features
            </h3>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              Our digital library offers a comprehensive collection of Hindu
              sacred texts with modern conveniences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Sacred Texts
              </h4>
              <p className="text-sm text-muted-foreground">
                Complete collection of Chalisas, Aartis, Stutis, and Paths in
                original Sanskrit and Hindi
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 text-secondary">🎵</div>
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Audio Support
              </h4>
              <p className="text-sm text-muted-foreground">
                Listen to devotional recitations with embedded audio for proper
                pronunciation and rhythm
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 text-accent">📱</div>
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Mobile Friendly
              </h4>
              <p className="text-sm text-muted-foreground">
                Access your favorite devotional content anywhere, anytime on any
                device
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Start Your Spiritual Journey
          </h3>
          <p className="text-muted-foreground mb-6 text-pretty max-w-xl mx-auto">
            Begin exploring our sacred collection and deepen your spiritual
            practice with authentic texts and audio guidance.
          </p>
          <Link href="/library/chalisas">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer text-white"
            >
              Start with Chalisas
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
