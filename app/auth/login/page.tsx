import { LoginForm } from "@/components/auth/login-form";
import { CircleArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const LoginPage = () => {
	return (
		 <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href={"/"}>
					<CircleArrowLeft className="hidden sm:flex text-blue-600" />
				</Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="https://res.cloudinary.com/dcwsgwsfw/image/upload/v1752390797/Group_1_2_zcdjt4.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          fill
        />
      </div>
    </div>
	);
};

export default LoginPage;