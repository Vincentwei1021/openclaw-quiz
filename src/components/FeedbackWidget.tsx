"use client";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message.trim(), email: email.trim() || undefined, url: window.location.href, timestamp: new Date().toISOString() }),
      });
      if (res.ok) {
        setStatus("success");
        setTimeout(() => { setOpen(false); setStatus("idle"); setMessage(""); setEmail(""); }, 2000);
      } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Send feedback"
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-110 hover:brightness-110"
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-80 animate-scale-in">
          <Card className="shadow-2xl ring-1 ring-border/50">
            <CardContent className="p-5">
              {status === "success" ? (
                <div className="text-center py-4">
                  <p className="text-2xl mb-2">🎉</p>
                  <p className="font-semibold text-foreground">Thanks!</p>
                  <p className="text-sm text-muted-foreground">We&apos;ll review your feedback.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-sm font-bold text-foreground mb-3">Send Feedback</h3>
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="What's on your mind?"
                    rows={3}
                    required
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring resize-none"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email (optional, for replies)"
                    className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
                  />
                  {status === "error" && <p className="mt-2 text-xs text-destructive">Something went wrong. Try again.</p>}
                  <Button
                    type="submit"
                    disabled={status === "loading" || !message.trim()}
                    className="mt-3 w-full"
                  >
                    {status === "loading" ? "Sending..." : "Send Feedback"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
