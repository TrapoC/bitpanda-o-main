import { useState, useEffect } from "react";
import { useCalculatorStore } from "@/lib/store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InvestmentCalculator() {
  const { 
    initialInvestment, 
    monthlyContribution, 
    years, 
    expectedReturn,
    setInitialInvestment,
    setMonthlyContribution,
    setYears,
    setExpectedReturn
  } = useCalculatorStore();
  
  const [futureValue, setFutureValue] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [totalReturn, setTotalReturn] = useState(0);

  useEffect(() => {
    // Calculate future value using compound interest formula
    const monthlyRate = expectedReturn / 100 / 12;
    const totalMonths = years * 12;
    
    // Calculate future value of initial investment
    const initialFV = initialInvestment * Math.pow(1 + monthlyRate, totalMonths);
    
    // Calculate future value of monthly contributions
    let contributionFV = 0;
    if (monthlyRate > 0) {
      contributionFV = monthlyContribution * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
    } else {
      contributionFV = monthlyContribution * totalMonths;
    }
    
    const calculatedFutureValue = initialFV + contributionFV;
    const calculatedTotalInvested = initialInvestment + (monthlyContribution * totalMonths);
    
    setFutureValue(calculatedFutureValue);
    setTotalInvested(calculatedTotalInvested);
    setTotalReturn(calculatedFutureValue - calculatedTotalInvested);
  }, [initialInvestment, monthlyContribution, years, expectedReturn]);

  const handleInitialInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setInitialInvestment(value);
  };

  const handleMonthlyContributionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setMonthlyContribution(value);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Investment Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="initialInvestment">Initial Investment</Label>
              <div className="w-24">
                <Input
                  id="initialInvestment"
                  type="number"
                  min="0"
                  value={initialInvestment}
                  onChange={handleInitialInvestmentChange}
                />
              </div>
            </div>
            <Slider
              value={[initialInvestment]}
              min={0}
              max={10000}
              step={100}
              onValueChange={(value) => setInitialInvestment(value[0])}
            />
            <span className="text-xs text-muted-foreground">
              ${initialInvestment.toLocaleString()}
            </span>
          </div>

          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="monthlyContribution">Monthly Contribution</Label>
              <div className="w-24">
                <Input
                  id="monthlyContribution"
                  type="number"
                  min="0"
                  value={monthlyContribution}
                  onChange={handleMonthlyContributionChange}
                />
              </div>
            </div>
            <Slider
              value={[monthlyContribution]}
              min={0}
              max={1000}
              step={10}
              onValueChange={(value) => setMonthlyContribution(value[0])}
            />
            <span className="text-xs text-muted-foreground">
              ${monthlyContribution.toLocaleString()}/month
            </span>
          </div>

          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="years">Investment Period</Label>
              <span className="text-sm font-medium">{years} years</span>
            </div>
            <Slider
              value={[years]}
              min={1}
              max={30}
              step={1}
              onValueChange={(value) => setYears(value[0])}
            />
            <span className="text-xs text-muted-foreground">
              {years} years
            </span>
          </div>

          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="expectedReturn">Expected Annual Return</Label>
              <span className="text-sm font-medium">{expectedReturn}%</span>
            </div>
            <Slider
              value={[expectedReturn]}
              min={0}
              max={30}
              step={0.5}
              onValueChange={(value) => setExpectedReturn(value[0])}
            />
            <span className="text-xs text-muted-foreground">
              {expectedReturn}% per year
            </span>
          </div>

          <div className="mt-6 grid gap-4 rounded-lg bg-muted p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Future Value</p>
                <p className="text-2xl font-bold">${futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Invested</p>
                <p className="text-2xl font-bold">${totalInvested.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Return</p>
              <p className="text-2xl font-bold text-green-500">
                ${totalReturn.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}