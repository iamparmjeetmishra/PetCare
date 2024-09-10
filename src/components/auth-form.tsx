"use client";
import { logIn, signUp } from "@/actions/actions";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import AuthFormBtn from "./auth-form-btn";
import { useFormState } from "react-dom";

type TAuthFormProps = {
	type: "logIn" | "signUp";
};

export default function AuthForm({ type }: TAuthFormProps) {
	const [signUpError, dispatchSignup] = useFormState(
		signUp,
		undefined
	);
	const [logInError, dispatchLogIn] = useFormState(logIn, undefined);
	return (
		<form
			action={type === "logIn" ? dispatchLogIn : dispatchSignup}
			className="flex flex-col gap-4"
		>
			<div className="space-y-1">
				<Label htmlFor="email">Email</Label>
				<Input id="email" name="email" type="email" required />
			</div>
			<div className="space-y-1">
				<Label htmlFor="password">Passowrd</Label>
				<Input
					id="password"
					name="password"
					type="password"
					required
				/>
			</div>
			<AuthFormBtn type={type} />
			{signUpError && (
				<p className="text-red-500 text-sm">
					{signUpError.message}
				</p>
			)}
         {logInError && (
				<p className="text-red-500 text-sm">
					{logInError.message}
				</p>
			)}
		</form>
	);
}
