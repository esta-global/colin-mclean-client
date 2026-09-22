import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Current Topics in Investment | Lecture by Colin McLean",
  description:
    "Presentation slides and material for Current Topics in Investment Management at Heriot-Watt University by Colin McLean.",
  path: "/lectures/current-topics-in-investment",
});

const PDF_URL = "/documents/current-topics-in-investment.pdf";

export default function LecturePresentationPage() {
  return (
    <main className="lecture-page-main">
      <div className="container" style={{ paddingTop: "2.5rem", paddingBottom: "4rem" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#747a73",
              textDecoration: "none",
              marginBottom: "1rem",
            }}
          >
            ← Back to Home
          </Link>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#bd921e",
                  fontWeight: 700,
                  margin: "0 0 0.5rem 0",
                }}
              >
                Lecture 02 • Presentation Deck
              </p>
              <h1
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontWeight: 500,
                  lineHeight: 1.15,
                  margin: 0,
                  color: "#1d211c",
                }}
              >
                Current Topics in Investment
              </h1>
              <p style={{ color: "#61675f", marginTop: "0.5rem", fontSize: "0.95rem" }}>
                Heriot-Watt University • March 2026 • Colin McLean
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="site-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.65rem 1.25rem",
                  borderRadius: "4px",
                  backgroundColor: "#bd921e",
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Open in Full Tab <Arrow />
              </a>

              <a
                href={PDF_URL}
                download="current-topics-in-investment.pdf"
                className="lecture-btn-download"
                style={{
                  padding: "0.65rem 1.25rem",
                  fontSize: "0.85rem",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Presentation (PDF)
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "80vh",
            minHeight: "550px",
            border: "1px solid #dfe1da",
            borderRadius: "6px",
            overflow: "hidden",
            background: "#2a2d32",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          }}
        >
          <object
            data={PDF_URL}
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ display: "block" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                color: "#ffffff",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
                Unable to display PDF preview in this browser.
              </p>
              <div style={{ display: "flex", gap: "1rem" }}>
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#bd921e",
                    padding: "0.6rem 1.2rem",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Open PDF in New Tab
                </a>
                <a
                  href={PDF_URL}
                  download="current-topics-in-investment.pdf"
                  style={{
                    color: "#ffffff",
                    border: "1px solid #ffffff",
                    padding: "0.6rem 1.2rem",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Download PDF
                </a>
              </div>
            </div>
          </object>
        </div>
      </div>
    </main>
  );
}
