import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Star,
  Calendar,
  Phone,
  Clock,
  Languages,
  ArrowLeft,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { getPanditBySlug } from "@/lib/pandit-data";

interface PanditProfilePageProps {
  params: {
    slug: string;
  };
}

export default function PanditProfilePage({ params }: PanditProfilePageProps) {
  const pandit = getPanditBySlug(params.slug);

  if (!pandit) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to All Pandit Jis</span>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <img
              src={pandit.photo || "/placeholder.svg"}
              alt={`${pandit.name} - Pandit Ji`}
              className="w-32 h-32 rounded-full object-cover border-4 border-primary-foreground/20"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2 text-balance">
                {pandit.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-primary-foreground/90">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{pandit.nativePlace}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{pandit.experience} Experience</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  <span className="font-medium">{pandit.rating}/5.0</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a href={`tel:${pandit.contactNumber}`} className="block">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Now
                </Button>
              </a>
              <p className="text-sm text-primary-foreground/80 text-center">
                {pandit.contactNumber}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  About Pandit Ji
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {pandit.detailedExperience}
                </p>
              </CardContent>
            </Card>

            {/* Ceremonies & Services */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Ceremonies & Services
                </CardTitle>
                <CardDescription>
                  Specialized rituals and ceremonies performed by Pandit Ji
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {pandit.ceremonies.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-foreground mb-3">
                      {category.category}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {category.rituals.map((ritual, ritualIndex) => (
                        <div
                          key={ritualIndex}
                          className="flex items-center gap-2 p-2 bg-muted rounded-md"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">
                            {ritual}
                          </span>
                        </div>
                      ))}
                    </div>
                    {index < pandit.ceremonies.length - 1 && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Testimonials */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Client Testimonials
                </CardTitle>
                <CardDescription>
                  What families say about their experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pandit.testimonials.map((testimonial, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-foreground">
                        {testimonial.name}
                      </h5>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-secondary text-secondary"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      <span className="font-medium">Ceremony:</span>{" "}
                      {testimonial.ceremony}
                    </p>
                    <p className="text-sm text-muted-foreground italic text-pretty">
                      "{testimonial.review}"
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Info */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      {pandit.contactNumber}
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Availability</p>
                    {pandit.availability.map((time, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        {time}
                      </p>
                    ))}
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Languages className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Languages</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {pandit.languages.map((language, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Areas Covered */}
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Areas Covered</CardTitle>
                <CardDescription>
                  Pincodes and localities served
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {pandit.areas.map((area, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs justify-center py-1 text-white"
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  Main Specialties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {pandit.specialties.map((specialty, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 bg-primary/5 rounded-md"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium text-foreground">
                        {specialty}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href={`tel:${pandit.contactNumber}`} className="block">
                  <Button className="w-full" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a
                  href={`https://wa.me/${pandit.contactNumber}`}
                  className="block"
                >
                  <Button
                    variant="outline"
                    className="w-full bg-green-500 text-white hover:bg-green-500/90 hover:text-white"
                    size="lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                    >
                      <path
                        fill="currentColor"
                        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                      ></path>
                    </svg>
                    Send Message
                  </Button>
                </a>
                <Button
                  variant="secondary"
                  className="w-full text-white"
                  size="lg"
                >
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
