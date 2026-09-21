"use client";

import Script from "next/script";
import { useEffect, useId, useState } from "react";

const EMBED_SCRIPT_ID = "instagram-embed-script";
const EMBED_SCRIPT_SRC = "https://www.instagram.com/embed.js";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

interface InstagramEmbedProps {
  url: string;
  title?: string;
  className?: string;
}

function normalizeInstagramUrl(url: string): string {
  const trimmed = url.trim().replace(/\/$/, "");
  return `${trimmed}/`;
}

function processInstagramEmbeds() {
  window.instgrm?.Embeds.process();
}

export function InstagramEmbed({
  url,
  title = "Instagram post",
  className = "",
}: InstagramEmbedProps) {
  const [scriptReady, setScriptReady] = useState(false);
  const embedKey = useId();
  const permalink = normalizeInstagramUrl(url);

  useEffect(() => {
    if (window.instgrm) {
      processInstagramEmbeds();
    }
  }, [permalink, embedKey]);

  useEffect(() => {
    if (scriptReady) {
      processInstagramEmbeds();
    }
  }, [scriptReady, permalink, embedKey]);

  return (
    <div className={className}>
      <div
        className="w-full max-w-[540px] mx-auto min-h-[440px] sm:min-h-[560px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
        aria-label={title}
      >
        <blockquote
          key={embedKey}
          className="instagram-media m-0 min-w-0 w-full max-w-[540px]"
          data-instgrm-captioned
          data-instgrm-permalink={permalink}
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "12px",
            boxShadow: "none",
            margin: 0,
            maxWidth: "540px",
            minWidth: "280px",
            padding: 0,
            width: "100%",
          }}
        >
          <a
            href={permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-12 text-center text-sm text-gray-600 hover:text-[#E6007E]"
          >
            View this post on Instagram
          </a>
        </blockquote>
      </div>

      <Script
        id={EMBED_SCRIPT_ID}
        src={EMBED_SCRIPT_SRC}
        strategy="lazyOnload"
        onLoad={() => {
          setScriptReady(true);
          processInstagramEmbeds();
        }}
      />

      <p className="mt-4 text-center text-sm text-gray-600">
        Video not loading?{" "}
        <a
          href={permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#E6007E] hover:underline"
        >
          Watch on Instagram
        </a>
      </p>
    </div>
  );
}
