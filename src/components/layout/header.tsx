import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Link } from "react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full bg-primary p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary-foreground"
              >
                <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
              </svg>
            </div>
            <span className="text-xl font-bold">BitVest</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/prices" className="text-sm font-medium hover:text-primary">
              Prices
            </Link>
            <Link to="/calculator" className="text-sm font-medium hover:text-primary">
              Calculator
            </Link>
            <Link to="/learn" className="text-sm font-medium hover:text-primary">
              Learn
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:flex gap-2">
            <Button variant="outline" asChild>
              <Link to="/auth?mode=login">Log in</Link>
            </Button>
            <Button asChild>
              <Link to="/auth?mode=signup">Sign up</Link>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={cn(
          "container pb-4 md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-2">
          <Link
            to="/prices"
            className="px-2 py-1 rounded-md hover:bg-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            Prices
          </Link>
          <Link
            to="/calculator"
            className="px-2 py-1 rounded-md hover:bg-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            Calculator
          </Link>
          <Link
            to="/learn"
            className="px-2 py-1 rounded-md hover:bg-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            Learn
          </Link>
          <div className="flex gap-2 mt-2">
            <Button variant="outline" asChild className="flex-1">
              <Link to="/auth?mode=login" onClick={() => setIsMenuOpen(false)}>
                Log in
              </Link>
            </Button>
            <Button asChild className="flex-1">
              <Link to="/auth?mode=signup" onClick={() => setIsMenuOpen(false)}>
                Sign up
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}