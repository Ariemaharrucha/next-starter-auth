import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md shadow-lg p-6 rounded-lg">
        <h1 className="text-2xl text-center">Login</h1>
        <form action="" className="space-y-4 mt-5">
          <Label>Email</Label>
          <Input type="email" />
          <Label>Password</Label>
          <Input type="password" />
          <Button type="submit" className="mt-4 w-full cursor-pointer">
            Login
          </Button>
          <Button variant="outline" className="mt-2 w-full cursor-pointer">
            Login with Google
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
