import { Card, CardContent } from "@/components/ui/card";
import { type Cryptocurrency } from "@/lib/store";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface PriceCardProps {
  crypto: Cryptocurrency;
}

export function PriceCard({ crypto }: PriceCardProps) {
  const isPositiveChange = crypto.price_change_percentage_24h >= 0;

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={crypto.image} 
              alt={crypto.name} 
              className="w-8 h-8 rounded-full"
            />
            <div>
              <h3 className="font-medium">{crypto.name}</h3>
              <p className="text-xs text-muted-foreground">{crypto.symbol.toUpperCase()}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">${crypto.current_price.toLocaleString()}</p>
            <p className={cn(
              "text-xs flex items-center justify-end",
              isPositiveChange ? "text-green-500" : "text-red-500"
            )}>
              {isPositiveChange ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
              {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}