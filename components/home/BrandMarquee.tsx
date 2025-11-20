'use client';

import Container from '@/components/ui/Container';

const brands = [
  {
    name: 'Nestlé',
    logo: 'https://1000logos.net/wp-content/uploads/2017/05/Nestle-Logo.png',
  },
  {
    name: 'Ferrero',
    logo: 'https://1000logos.net/wp-content/uploads/2020/09/Ferrero-Logo.png',
  },
  {
    name: 'Cadbury',
    logo: 'https://1000logos.net/wp-content/uploads/2017/03/Cadbury-Logo.png',
  },
  {
    name: 'Lindt',
    logo: 'https://1000logos.net/wp-content/uploads/2020/09/Lindt-Logo.png',
  },
  {
    name: 'Toblerone',
    logo: 'https://1000logos.net/wp-content/uploads/2020/09/Toblerone-Logo.png',
  },
  {
    name: 'Haribo',
    logo: 'https://1000logos.net/wp-content/uploads/2020/09/Haribo-Logo.png',
  },
  {
    name: 'Pringles',
    logo: 'https://1000logos.net/wp-content/uploads/2017/03/Pringles-Logo.png',
  },
  {
    name: 'Oreo',
    logo: 'https://1000logos.net/wp-content/uploads/2017/03/Oreo-Logo.png',
  },
  {
    name: 'Kit Kat',
    logo: 'https://1000logos.net/wp-content/uploads/2020/08/Kit-Kat-Logo.png',
  },
  {
    name: 'Milka',
    logo: 'https://1000logos.net/wp-content/uploads/2020/09/Milka-Logo.png',
  },
  {
    name: 'Kelloggs',
    logo: 'https://1000logos.net/wp-content/uploads/2017/02/Kelloggs-Logo.png',
  },
  {
    name: 'Lays',
    logo: 'https://1000logos.net/wp-content/uploads/2020/09/Lays-Logo.png',
  },
];

export default function BrandMarquee() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-200">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Trusted Global Brands
          </h2>
          <p className="text-gray-600">
            We bring you authentic products from world's leading brands
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Content */}
          <div className="flex animate-marquee hover:pause-marquee">
            {/* First Set of Logos */}
            {brands.map((brand, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: '150px', height: '80px', marginLeft: '20px', marginRight: '20px' }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            ))}
            {/* Duplicate Set for Seamless Loop */}
            {brands.map((brand, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: '150px', height: '80px', marginLeft: '20px', marginRight: '20px' }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Custom CSS for Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          animation: marquee 10s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

