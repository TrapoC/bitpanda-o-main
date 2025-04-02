import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold mb-4">BitVest</h3>
          <p className="text-sm text-muted-foreground">
            The easiest and most secure platform to invest in Bitcoin and other cryptocurrencies.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/prices" className="text-muted-foreground hover:text-foreground">
                Cryptocurrency
              </Link>
            </li>
            <li>
              <Link to="/calculator" className="text-muted-foreground hover:text-foreground">
                Investment Calculator
              </Link>
            </li>
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/learn" className="text-muted-foreground hover:text-foreground">
                Learn
              </Link>
            </li>
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 border-t pt-4">
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} BitVest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}