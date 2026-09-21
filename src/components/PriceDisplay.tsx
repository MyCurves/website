import { formatPriceDetail } from '@/lib/format-price';

interface PriceDisplayProps {
  price?: number | null;
  salePrice?: number | null;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-4xl',
};

export function PriceDisplay({
  price,
  salePrice,
  className = '',
  size = 'md',
}: PriceDisplayProps) {
  const { display, original, onRequest } = formatPriceDetail(price, salePrice);

  if (onRequest) {
    return (
      <p className={`font-semibold text-[#E6007E] ${sizeClasses[size]} ${className}`}>
        {display}
      </p>
    );
  }

  return (
    <div className={`flex items-baseline gap-3 ${className}`}>
      <p className={`font-bold text-[#E6007E] ${sizeClasses[size]}`}>{display}</p>
      {original && (
        <p className="text-xl text-gray-400 line-through">{original}</p>
      )}
    </div>
  );
}
