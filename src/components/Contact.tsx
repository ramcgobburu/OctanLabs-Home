import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium text-primary">
              CONTACT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Connect with Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay in touch with us for updates, support, and valuable insights. We&apos;re 
            here to help you every step of the way!
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-14">
            <Card className="rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Location:</h3>
                    <p className="text-muted-foreground">
                      123 Maple Lane, Springfield, IL 62704
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Call us:</h3>
                    <p className="text-muted-foreground">
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email us:</h3>
                    <p className="text-muted-foreground">
                      contact@octanlabs.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours:</h3>
                    <p className="text-muted-foreground">
                      Tuesday to Saturday, 9 AM - 5 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstname" className="block text-sm font-medium mb-2">
                    Firstname
                  </label>
                  <Input
                    id="firstname"
                    placeholder="Leopoldo"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium mb-2">
                    Lastname
                  </label>
                  <Input
                    id="lastname"
                    placeholder="Miranda"
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="contact@bundui.com"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="consultation">Free Consultation</SelectItem>
                    <SelectItem value="demo">Book a Demo</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={4}
                  className="bg-background"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}