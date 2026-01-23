"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { ContactModalProvider } from "@/contexts/ContactModalContext";
import ContactModal from "@/components/ContactModal/ContactModal";

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <ContactModalProvider>
        {children}
        <ContactModal />
      </ContactModalProvider>
    </ThemeProvider>
  );
}

