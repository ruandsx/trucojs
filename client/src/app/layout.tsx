"use client";

import { GlobalStyles } from "@/layout/themes";

import StyledComponentsRegistry from "@/lib/registry";
import { AuthProvider } from "@/contexts/auth";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/contexts/theme";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <ThemeToggle>
              <GlobalStyles />
              <AuthProvider>{children}</AuthProvider>
            </ThemeToggle>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
