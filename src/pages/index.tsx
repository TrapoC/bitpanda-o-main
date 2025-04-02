import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PriceCard } from "@/components/crypto/price-card";
import { useCryptoStore } from "@/lib/store";
import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, TrendingUp, Shield, BookOpen } from "lucide-react";
import { EducationCard } from "@/components/learn/education-card";

const Index = () => {
  const { cryptocurrencies, loading, error, fetchCryptocurrencies } = useCryptoStore();

  useEffect(() => {
    fetchCryptocurrencies();
  }, [fetchCryptocurrencies]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Invest in Bitcoin and Cryptocurrencies with Confidence
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  BitVest makes cryptocurrency investing simple, secure, and accessible for everyone. Start your journey today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" asChild>
                    <Link to="/auth?mode=signup">Get Started</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/learn">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative lg:block">
                <div className="relative h-[350px] w-full overflow-hidden rounded-lg bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1000&auto=format&fit=crop"
                    alt="Bitcoin visualization"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Crypto Prices Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Popular Cryptocurrencies</h2>
                <p className="text-muted-foreground">
                  Track the latest prices and trends
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/prices" className="flex items-center gap-2">
                  View All Prices
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {loading ? (
              <div className="text-center py-8">Loading cryptocurrency data...</div>
            ) : error ? (
              <div className="text-center py-8 text-destructive">
                Error loading cryptocurrency data. Please try again later.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cryptocurrencies.slice(0, 4).map((crypto) => (
                  <PriceCard key={crypto.id} crypto={crypto} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Why Choose BitVest?
              </h2>
              <p className="text-muted-foreground mt-2 md:text-lg">
                The smart way to invest in cryptocurrencies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">Smart Investment Tools</h3>
                <p className="text-muted-foreground">
                  Advanced calculators and portfolio tracking to optimize your investments.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">Bank-Grade Security</h3>
                <p className="text-muted-foreground">
                  Your investments are protected with industry-leading security measures.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">Educational Resources</h3>
                <p className="text-muted-foreground">
                  Learn everything you need to know about cryptocurrency investing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Preview */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Plan Your Investment Journey
                </h2>
                <p className="text-muted-foreground">
                  Use our investment calculator to see how your Bitcoin investments could grow over time.
                  Set your initial investment, monthly contributions, and time horizon to visualize your potential returns.
                </p>
                <Button asChild>
                  <Link to="/calculator">Try Our Calculator</Link>
                </Button>
              </div>
              <div className="relative rounded-lg overflow-hidden bg-muted p-2">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                  alt="Investment calculator"
                  className="rounded-lg object-cover w-full h-[300px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Learn About Cryptocurrency
              </h2>
              <p className="text-muted-foreground mt-2 md:text-lg">
                Expand your knowledge with our educational resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <EducationCard
                title="Bitcoin Basics"
                description="Learn the fundamentals of Bitcoin and how it works."
                icon={<BookOpen className="h-6 w-6" />}
                link="/learn"
              />
              <EducationCard
                title="Investment Strategies"
                description="Discover different approaches to cryptocurrency investing."
                icon={<TrendingUp className="h-6 w-6" />}
                link="/learn"
              />
              <EducationCard
                title="Security Best Practices"
                description="Keep your cryptocurrency investments safe and secure."
                icon={<Shield className="h-6 w-6" />}
                link="/learn"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="rounded-lg bg-primary p-8 md:p-10 text-primary-foreground text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-4">
                Ready to Start Your Investment Journey?
              </h2>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Join thousands of investors who trust BitVest for their cryptocurrency investments.
                Sign up today and take control of your financial future.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/auth?mode=signup">Create Your Account</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;