import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "../ui/button"
 
function SignIn() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Button disabled>Loading...</Button>
  }
  if (session) {
    return <div className="flex items-center gap-x-2">
       <p>Signed in as {session?.user?.email}</p>
       <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  }
  
  return <Button onClick={() => signIn()}>Sign In</Button>
}

export default SignIn