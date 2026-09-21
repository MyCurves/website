'use client';

import { WhatsAppIcon } from '@/components/icons';
import { BookFittingButton } from '@/components/BookFittingButton';
import { buildGeneralWhatsAppMessage, buildWhatsAppUrl } from '@/lib/whatsapp';

export function WhatsAppFab() {
  const href = buildWhatsAppUrl(buildGeneralWhatsAppMessage());

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <BookFittingButton
        variant="primary"
        className="rounded-full px-4 py-3 text-sm shadow-lg transition-all hover:scale-105 md:px-5"
      >
        Book a fitting
      </BookFittingButton>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-4 text-white shadow-lg transition-all hover:scale-105 hover:bg-[#1ebe57] md:px-5"
        aria-label="Chat with MyCurves on WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="hidden font-medium md:inline">WhatsApp</span>
      </a>
    </div>
  );
}
