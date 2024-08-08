import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";

const Login = () => {
  return (
    <form>
      <div className="mt-4">
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          placeholder="Enter your Email..."
          className="mt-1"
          type="email"
        />
      </div>
      <div className="mt-4">
        <Label htmlFor="password">Password</Label>
        <Input
          name="email"
          type="password"
          placeholder="Enter your Password..."
          className="mt-1"
        />
        <div className="text-right font-bold">
          <Link href="/forgot-password">Forgot Password?</Link>
        </div>
      </div>
      <div className="mt-4">
        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default Login;
