import { Icons } from "@/components/Icons"
import { UserAuthForm } from "@/components/UserAuthForm"
import Link from "next/link"

const SignIn = () => {
   return (
      <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
         <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="w-6 h-6 mx-auto" />
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm max-w-xs mx-auto">
               By continuing, you agree to our User Agreement and Privacy Policy.
            </p>

            {/* sign in form */}
            <UserAuthForm />

            <p className="px-8 text-center text-sm text-zinc-700">
               New to Breadit?{' '}
               <Link href="/sign-up" className="hover:text-zinc-800 text-sm underline underline-offset-4"> Sign Up</Link>
            </p>
         </div>
      </div>
   )
}

export default SignIn