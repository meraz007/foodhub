import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <Container>
        <div className="text-center">
          <div className="text-9xl font-bold text-gray-200 mb-4">404</div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" variant="primary">
                <Home className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
            <Link href="/category/chocolate">
              <Button size="lg" variant="outline">
                <Search className="w-5 h-5" />
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}


