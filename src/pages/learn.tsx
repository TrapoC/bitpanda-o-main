import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, TrendingUp, Shield, Wallet, BarChart3, HelpCircle } from "lucide-react";

const Learn = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-8 md:py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Learn About Cryptocurrency</h1>
              <p className="text-muted-foreground mt-4 text-lg">
                Expand your knowledge with our comprehensive educational resources
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="basics" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                <TabsTrigger value="basics">Basics</TabsTrigger>
                <TabsTrigger value="investing">Investing</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="wallets">Wallets</TabsTrigger>
                <TabsTrigger value="trading">Trading</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basics" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <div className="mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <CardTitle>What is Bitcoin?</CardTitle>
                      <CardDescription>Understanding the world's first cryptocurrency</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Bitcoin is a decentralized digital currency created in 2009 by an unknown person or group using the name Satoshi Nakamoto. 
                        It operates without a central authority or banks managing transactions.
                      </p>
                      <p className="mt-4">
                        Instead, Bitcoin is managed by a peer-to-peer network using a technology called blockchain, 
                        which serves as a public ledger of all transactions.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <CardTitle>How Does Blockchain Work?</CardTitle>
                      <CardDescription>The technology behind cryptocurrencies</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Blockchain is a distributed ledger technology that records transactions across many computers. 
                        This ensures that the record cannot be altered retroactively without altering all subsequent blocks.
                      </p>
                      <p className="mt-4">
                        This technology creates a secure, transparent system where transactions can be verified by anyone, 
                        eliminating the need for a trusted third party like a bank.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <CardTitle>Types of Cryptocurrencies</CardTitle>
                      <CardDescription>Beyond Bitcoin: Exploring the crypto ecosystem</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        While Bitcoin was the first cryptocurrency, thousands of alternative cryptocurrencies now exist. 
                        These include Ethereum, which introduced smart contracts, Ripple, designed for international payments, 
                        and stablecoins like USDC, which are pegged to traditional currencies.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <CardTitle>Cryptocurrency Mining</CardTitle>
                      <CardDescription>How new coins are created and transactions verified</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Mining is the process by which new coins are created and transactions are added to the blockchain. 
                        Miners use powerful computers to solve complex mathematical problems, and when successful, 
                        they are rewarded with new coins and transaction fees.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="investing" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <div className="mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <CardTitle>Investment Strategies</CardTitle>
                      <CardDescription>Approaches to cryptocurrency investing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        There are several strategies for investing in cryptocurrencies, including:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>HODLing (buying and holding for the long term)</li>
                        <li>Dollar-cost averaging (investing fixed amounts regularly)</li>
                        <li>Trading (buying and selling based on market movements)</li>
                        <li>Diversification (spreading investments across multiple cryptocurrencies)</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <CardTitle>Risk Management</CardTitle>
                      <CardDescription>Protecting your cryptocurrency investments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Cryptocurrency investing involves significant risks due to market volatility. 
                        Effective risk management strategies include:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Only investing what you can afford to lose</li>
                        <li>Setting stop-loss orders when trading</li>
                        <li>Diversifying your portfolio</li>
                        <li>Staying informed about market developments</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="security" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Shield className="h-6 w-6" />
                    </div>
                    <CardTitle>Securing Your Investments</CardTitle>
                    <CardDescription>Best practices for cryptocurrency security</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Securing your cryptocurrency investments is crucial. Here are some best practices:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Use hardware wallets for long-term storage</li>
                      <li>Enable two-factor authentication on all accounts</li>
                      <li>Use strong, unique passwords</li>
                      <li>Be cautious of phishing attempts</li>
                      <li>Keep your software and devices updated</li>
                      <li>Back up your wallet keys and store them securely</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="wallets" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Wallet className="h-6 w-6" />
                    </div>
                    <CardTitle>Cryptocurrency Wallets</CardTitle>
                    <CardDescription>Understanding different wallet types</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Cryptocurrency wallets are tools that store your private keys, allowing you to access and manage your digital assets. 
                      There are several types of wallets:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li><strong>Hardware Wallets:</strong> Physical devices that store keys offline (most secure)</li>
                      <li><strong>Software Wallets:</strong> Applications installed on computers or smartphones</li>
                      <li><strong>Web Wallets:</strong> Online services accessible through browsers</li>
                      <li><strong>Paper Wallets:</strong> Physical documents containing keys printed on paper</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="trading" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <CardTitle>Trading Basics</CardTitle>
                    <CardDescription>Introduction to cryptocurrency trading</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Cryptocurrency trading involves buying and selling digital assets to profit from price movements. 
                      Key concepts include:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li><strong>Market Orders:</strong> Buy or sell at the current market price</li>
                      <li><strong>Limit Orders:</strong> Buy or sell at a specified price or better</li>
                      <li><strong>Stop Orders:</strong> Convert to market orders when a specified price is reached</li>
                      <li><strong>Technical Analysis:</strong> Using charts and indicators to predict price movements</li>
                      <li><strong>Fundamental Analysis:</strong> Evaluating a cryptocurrency's underlying value</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="faq" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <HelpCircle className="h-6 w-6" />
                    </div>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>Common questions about cryptocurrency</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Is Bitcoin safe?</h3>
                        <p className="text-muted-foreground">
                          Bitcoin itself is secure, but how you store and manage your Bitcoin can introduce risks. 
                          Using reputable exchanges and secure wallets is essential.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">How do I start investing in cryptocurrency?</h3>
                        <p className="text-muted-foreground">
                          Start by researching and understanding cryptocurrencies, then choose a reputable exchange, 
                          create an account, verify your identity, and make your first purchase.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">What determines cryptocurrency prices?</h3>
                        <p className="text-muted-foreground">
                          Cryptocurrency prices are determined by supply and demand, market sentiment, adoption rates, 
                          regulatory news, technological developments, and macroeconomic factors.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">Are cryptocurrencies legal?</h3>
                        <p className="text-muted-foreground">
                          Legality varies by country. Some countries fully embrace cryptocurrencies, 
                          others have restrictions, and a few have banned them entirely. 
                          Always check your local regulations.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Learn;