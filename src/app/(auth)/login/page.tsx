import AuthForm from "@/components/auth-form";
import H1 from "@/components/h1";
import Link from "next/link";

export default function LoginPage() {
	return <main>
		<H1 className="text-center">Log In</H1>
		<AuthForm type="logIn" />
		<p className="text-sm">
			{"Don't"} have an account? {" "} 
			<Link href='/signup' className="font-semibold text-grass-500">Sign up</Link>
		</p>
	</main>
}
