'use client';

import { WhatsAppIcon } from '@/components/icons';
import { buildGeneralWhatsAppMessage, buildWhatsAppUrl } from '@/lib/whatsapp';

export function WhatsAppFab() {
  const href = buildWhatsAppUrl(buildGeneralWhatsAppMessage());

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-4 text-white shadow-lg transition-all hover:scale-105 hover:bg-[#1ebe57] md:px-5"
      aria-label="Chat with MyCurves on WhatsApp"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden font-medium md:inline">WhatsApp</span>
    </a>
  );
}
