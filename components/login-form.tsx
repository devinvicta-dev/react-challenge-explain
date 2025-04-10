"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignInFormData, signInSchema } from "@/models/schemas/sign-in";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl");
  // const router = useRouter();

  const onSubmit = async (data: SignInFormData) => {
    console.log(data);

    // const signInPromise = new Promise((resolve, reject) => {
    //   signIn("credentials", {
    //     email: data.email,
    //     password: data.password,
    //     callbackUrl: callbackUrl ?? FrontendRoutes.ORDERS,
    //     redirect: false,
    //   })
    //     .then((result) => {
    //       resolve(result);
    //       console.log(result);

    //     })
    //     .catch((error) => reject(error));
    // });

    // toast.promise(signInPromise, {
    //   loading: "Logging in...",
    //   success: () => {
    //     router.push(FrontendRoutes.ORDERS);
    //     return  "Logged in successfully!";
    //   },
    //   error: (error) => {
    //     console.error(error);
    //     return "Invalid email or password";
    //   },
    // });
    // Call your login logic here
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" {...register("password")} />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </div>

            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
