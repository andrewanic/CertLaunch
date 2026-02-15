import StarRating from './StarRating';

interface School {
  name: string;
  priceRange: string;
  format: string;
  rating: number;
  reviews: number;
  features: string[];
  description: string;
  affiliateUrl: string;
}

export default function SchoolCard({ school, rank }: { school: School; rank: number }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:border-accent/40 hover:shadow-lg transition-all duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm shrink-0">
              #{rank}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-text">{school.name}</h3>
              <p className="text-sm text-text-lighter">{school.format}</p>
            </div>
          </div>
          <div className="text-right shrink-0">
            <p className="font-semibold text-primary text-lg">{school.priceRange}</p>
          </div>
        </div>

        <StarRating rating={school.rating} reviews={school.reviews} />

        <p className="text-sm text-text-light mt-3 leading-relaxed">{school.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {school.features.map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-dark"
            >
              ✓ {feature}
            </span>
          ))}
        </div>

        <a
          href={school.affiliateUrl}
          className="mt-5 block w-full text-center bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          rel="noopener noreferrer sponsored"
        >
          Visit School →
        </a>
      </div>
    </div>
  );
}
