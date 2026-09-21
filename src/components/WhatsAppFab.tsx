'use client';

import { WhatsAppIcon } from '@/components/icons';
import { BookFittingButton } from '@/components/BookFittingButton';
import { buildGeneralWhatsAppMessage, buildWhatsAppUrl } from '@/lib/whatsapp';

export function WhatsAppFab() {
  const href = buildWhatsAppUrl(buildGeneralWhatsAppMessage());

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 pb-[env(safe-area-inset-bottom)] md:bottom-6 md:right-6 md:gap-3"
      aria-label="Quick actions"
    >
      <BookFittingButton
        variant="primary"
        className="min-h-11 rounded-full px-4 py-3 text-xs shadow-lg transition-all hover:scale-105 sm:text-sm md:px-5"
      >
        <span className="hidden sm:inline">Book a fitting</span>
        <span className="sm:hidden">Book fitting</span>
      </BookFittingButton>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-all hover:scale-105 hover:bg-[#1ebe57] md:px-5"
        aria-label="Chat with MyCurves on WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="hidden font-medium md:inline">WhatsApp</span>
      </a>
    </div>
  );
}
