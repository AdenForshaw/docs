import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThirdwebProvider } from 'thirdweb/react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Create a client
const queryClient = new QueryClient();

// Create Root component with proper context usage
export default function Root({ children }) {
  const {siteConfig} = useDocusaurusContext();
  const clientId = siteConfig.customFields.THIRDWEB_CLIENT_ID;

  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider clientId={clientId}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </ThirdwebProvider>
    </QueryClientProvider>
  );
}