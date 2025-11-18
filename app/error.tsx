'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Home, RefreshCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <Container>
        <div className="text-center">
          <div className="text-9xl mb-4">😕</div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Something went wrong!
          </h1>
          <p className="text-lg text-gray-600 mb-4 max-w-md mx-auto">
            We're sorry, but something unexpected happened. Please try again.
          </p>
          {error.message && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8 max-w-md mx-auto">
              <p className="text-sm text-red-800 font-mono">{error.message}</p>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={reset}
              size="lg"
              variant="primary"
            >
              <RefreshCcw className="w-5 h-5" />
              Try Again
            </Button>
            <Link href="/">
              <Button size="lg" variant="outline">
                <Home className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

