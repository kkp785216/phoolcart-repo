import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Calendar, Phone, BookOpen } from "lucide-react"
import Link from "next/link"
import { panditJis } from "@/lib/pandit-data"

export default function PanditListingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-6">
              <Link href="/" className="text-xl font-bold">
                PanditJi
              </Link>
              <div className="hidden md:flex items-center gap-4">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  Find Pandits
                </Link>
                <Link href="/library" className="hover:opacity-80 transition-opacity flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Online Library
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <Link href="/library">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <BookOpen className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </nav>

          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2 text-balance">Find Experienced Pandit Jis</h1>
            <p className="text-xl opacity-90 text-pretty">
              Connect with qualified Hindu priests for all your spiritual ceremonies and rituals
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-2">Available Pandit Jis in Your Area</h2>
          <p className="text-muted-foreground">
            Browse through our verified and experienced Pandit Jis. Click on any profile to view detailed information.
          </p>
        </div>

        {/* Pandit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {panditJis.map((pandit) => (
            <Card key={pandit.id} className="hover:shadow-lg transition-shadow duration-300 border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <img
                    src={pandit.photo || "/placeholder.svg"}
                    alt={`${pandit.name} - Pandit Ji`}
                    className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-primary/20"
                  />
                </div>
                <CardTitle className="text-xl text-foreground">{pandit.name}</CardTitle>
                <CardDescription className="flex items-center justify-center gap-1 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {pandit.nativePlace}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Rating and Experience */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    <span className="font-medium text-foreground">{pandit.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{pandit.experience}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground text-pretty">{pandit.description}</p>

                {/* Specialties */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {pandit.specialties.slice(0, 3).map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs text-white">
                        {specialty}
                      </Badge>
                    ))}
                    {pandit.specialties.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{pandit.specialties.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Areas Covered */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Areas Covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {pandit.areas.slice(0, 2).map((area, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                    {pandit.areas.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{pandit.areas.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Link href={`/pandit/${pandit.id}`} className="flex-1">
                    <Button className="w-full" size="sm">
                      View Profile
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="px-3 bg-transparent">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg p-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Explore Our Online Library</h3>
            </div>
            <p className="text-muted-foreground mb-6 text-pretty max-w-2xl mx-auto">
              Access our comprehensive collection of sacred texts, devotional hymns, and spiritual literature. Read
              Chalisas, Aartis, Stutis, and Paths with audio support for enhanced devotion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/library">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Browse Library
                </Button>
              </Link>
              <Link href="/library/chalisas">
                <Button variant="outline" size="lg" className="bg-transparent">
                  Start with Chalisas
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-muted rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Need Help Finding the Right Pandit Ji?</h3>
          <p className="text-muted-foreground mb-6 text-pretty">
            Our team can help you find the perfect Pandit Ji for your specific ceremony or ritual requirements.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Contact Us for Assistance
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">🕉️ Connecting devotees with experienced Pandit Jis 🕉️</p>
            <p className="text-sm">"धर्मो रक्षति रक्षितः" - Dharma protects those who protect it</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
