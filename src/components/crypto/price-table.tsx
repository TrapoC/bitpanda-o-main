import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type Cryptocurrency } from "@/lib/store";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface PriceTableProps {
  cryptocurrencies: Cryptocurrency[];
}

export function PriceTable({ cryptocurrencies }: PriceTableProps) {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">24h Change</TableHead>
            <TableHead className="text-right">Market Cap</TableHead>
            <TableHead className="text-right">Volume (24h)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cryptocurrencies.map((crypto, index) => {
            const isPositiveChange = crypto.price_change_percentage_24h >= 0;
            
            return (
              <TableRow key={crypto.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <img 
                      src={crypto.image} 
                      alt={crypto.name} 
                      className="w-6 h-6 rounded-full"
                    />
                    <span>{crypto.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {crypto.symbol.toUpperCase()}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  ${crypto.current_price.toLocaleString()}
                </TableCell>
                <TableCell className={cn(
                  "text-right",
                  isPositiveChange ? "text-green-500" : "text-red-500"
                )}>
                  <div className="flex items-center justify-end">
                    {isPositiveChange ? 
                      <ArrowUp className="h-3 w-3 mr-1" /> : 
                      <ArrowDown className="h-3 w-3 mr-1" />
                    }
                    {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  ${crypto.market_cap.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  ${crypto.total_volume.toLocaleString()}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}