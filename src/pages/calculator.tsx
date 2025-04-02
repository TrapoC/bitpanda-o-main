import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { InvestmentCalculator } from "@/components/calculator/investment-calculator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Calculator = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight">Investment Calculator</h1>
              <p className="text-muted-foreground">
                Plan your cryptocurrency investment strategy and visualize potential returns
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Tabs defaultValue="bitcoin" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="bitcoin">Bitcoin</TabsTrigger>
                    <TabsTrigger value="ethereum">Ethereum</TabsTrigger>
                    <TabsTrigger value="custom">Custom</TabsTrigger>
                  </TabsList>
                  <TabsContent value="bitcoin">
                    <InvestmentCalculator />
                  </TabsContent>
                  <TabsContent value="ethereum">
                    <InvestmentCalculator />
                  </TabsContent>
                  <TabsContent value="custom">
                    <InvestmentCalculator />
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About This Calculator</CardTitle>
                    <CardDescription>
                      Understand how we calculate potential returns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      This calculator uses a compound interest formula to estimate the future value of your investments.
                      It assumes that returns are compounded monthly and that your monthly contributions are made at the
                      beginning of each month.
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      Remember that cryptocurrency investments are subject to high volatility and past performance is not
                      indicative of future results. This calculator is for educational purposes only.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Investment Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Consider dollar-cost averaging to reduce the impact of volatility</li>
                      <li>• Only invest what you can afford to lose</li>
                      <li>• Diversify your investment portfolio</li>
                      <li>• Research thoroughly before investing</li>
                      <li>• Think long-term rather than trying to time the market</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Calculator;