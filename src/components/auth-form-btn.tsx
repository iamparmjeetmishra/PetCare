'use client'
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

type TAuthFormBtnProps = {
   type: "logIn" | "signUp"
}

export default function AuthFormBtn({ type }: TAuthFormBtnProps) {
   const {pending } = useFormStatus()
	return <Button disabled={pending} className="">
   {type === 'logIn' ? 'Log In' : "Sign Up"}
</Button>
}
