"use client";

import ContactModal from "@/components/ContactModal/ContactModal";
import { ContactModalProvider } from "@/contexts/ContactModalContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

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
