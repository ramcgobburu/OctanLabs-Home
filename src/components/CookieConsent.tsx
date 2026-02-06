"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = typeof window !== "undefined" ? localStorage.getItem("cookie-consent") : null;
    if (!consent) setShowBanner(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize
            content. By clicking &quot;Accept All&quot;, you consent to our use of cookies.{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={handleDecline} className="text-sm">
            Decline
          </Button>
          <Button size="sm" onClick={handleAccept} className="text-sm">
            Accept All
          </Button>
          <button
            onClick={handleDecline}
            className="p-1 hover:bg-muted rounded"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
