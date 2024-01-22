import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { FaLock } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-800 to-blue-600">
      <div className="space-y-6 flex flex-col items-center text-center">
        <div className="flex items-center space-x-4">
          <FaLock className="text-white w-12 h-12" />
          <h1 className="text-6xl font-semibold text-white drop-shadow-md">
            AUTH
          </h1>
        </div>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
