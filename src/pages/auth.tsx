import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AuthForm } from "@/components/auth/auth-form";

const Auth = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-md mx-auto">
            <AuthForm />
          </div>
        </div>```
      </main>
      <Footer />
    </div>
  );
};

export default Auth;