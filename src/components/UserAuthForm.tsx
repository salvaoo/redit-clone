'use client'

import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { Icons } from "@/components/Icons"
import { toast } from "@/hooks/use-toast"

interface UserAuthFormProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {
   const [isLoading, setIsLoading] = useState<boolean>(false)

   const loginWithGoogle = async () => {
      setIsLoading(true)

      try {
         await signIn()
      } catch (error) {
         toast({
            title: "There was a problem",
            description: "There was an error logging in with Google. Please try again",
            variant: "destructive",
         })
      } finally {
         setIsLoading(false)
      }
   }

   return (
      <div className={cn("flex justify-center", className)} {...props}>
         <Button onClick={loginWithGoogle} isLoading={isLoading} size='sm' className="w-full">
            {isLoading ? null : <Icons.google className="w-4 h-4 mr-2" />}
            Google
         </Button>
      </div>
      
   )
}