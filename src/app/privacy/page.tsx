import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            ← Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>

        <div className="space-y-6">
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              OctanLabs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Name and contact information (email, phone number)</li>
              <li>Business information and project details</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and store
              certain information. You can instruct your browser to refuse all cookies or to indicate when a
              cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:contact@octanlabs.com" className="text-primary hover:underline">
                contact@octanlabs.com
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
