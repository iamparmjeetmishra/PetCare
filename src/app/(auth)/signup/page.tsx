import AuthForm from "@/components/auth-form";
import H1 from "@/components/h1";
import Link from "next/link";

// type TSignUpPage = {
// 	type: "login" | "signup";
// };


export default function SignupPage() {
	return <main>
	<H1 className="text-center">Sign up</H1>
	<AuthForm type='signUp' />
	<p className="text-sm mt-4">
		Already have an account? {" "} 
		<Link href='/login' className="font-semibold text-grass-500">Log in</Link>
	</p>
</main>
}
