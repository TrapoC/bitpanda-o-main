import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

interface EducationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export function EducationCard({ title, description, icon, link }: EducationCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Content can be added here if needed */}
      </CardContent>
      <CardFooter>
        <Button variant="ghost" asChild className="w-full justify-between">
          <Link to={link}>
            <span>Learn more</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}