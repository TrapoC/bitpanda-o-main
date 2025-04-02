import { useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PriceTable } from "@/components/crypto/price-table";
import { useCryptoStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Prices = () => {
  const { cryptocurrencies, loading, error, fetchCryptocurrencies } = useCryptoStore();

  useEffect(() => {
    fetchCryptocurrencies();
  }, [fetchCryptocurrencies]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Cryptocurrency Prices</h1>
                <p className="text-muted-foreground">
                  Live prices and market data for top cryptocurrencies
                </p>
              </div>
              <div className="w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search cryptocurrencies..."
                    className="pl-8 w-full md:w-[250px]"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card">
              {loading ? (
                <div className="text-center py-12">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
                  <p className="mt-4 text-muted-foreground">Loading cryptocurrency data...</p>
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <p className="text-destructive mb-4">{error}</p>
                  <Button onClick={() => fetchCryptocurrencies()}>Try Again</Button>
                </div>
              ) : (
                <PriceTable cryptocurrencies={cryptocurrencies} />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Prices;