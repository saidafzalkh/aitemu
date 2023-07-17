"use client";

import { SessionProvider as NextSessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";
import { Provider as BalancerProvider } from "react-wrap-balancer";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children?: React.ReactNode;
};

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export const SessionProvider = ({ children }: Props) => {
  return <NextSessionProvider>{children}</NextSessionProvider>;
};

export const QueryProvider = ({ children }: Props) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <QueryProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BalancerProvider>{children}</BalancerProvider>
        </ThemeProvider>
      </QueryProvider>
    </SessionProvider>
  );
};

export default Providers;
