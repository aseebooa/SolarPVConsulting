import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { Resend } from "resend";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Resend with API Key from environment
  // User needs to add RESEND_API_KEY to their secrets
  const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

  // API routes
  app.post("/api/contact", async (req, res) => {
    const { name, company, contact, message } = req.body;

    console.log("Received contact form submission:", { name, company, contact, message });

    if (!resend) {
      console.warn("RESEND_API_KEY not found. Email not sent, but data logged.");
      return res.json({ 
        success: true, 
        message: "Message received (Simulation mode: RESEND_API_KEY missing)" 
      });
    }

    try {
      const { data, error } = await resend.emails.send({
        from: 'Navig-8 Contact <onboarding@resend.dev>',
        to: ['asveen.seebooa@gmail.com'],
        subject: `New Discussion Request: ${company}`,
        html: `
          <h1>New Discussion Request</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Contact:</strong> ${contact}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ success: false, error: error.message });
      }

      res.json({ success: true, data });
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
