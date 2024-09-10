"use client";
import { createCheckoutSession } from "@/actions/actions";
import H1 from "@/components/h1";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useTransition } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type TPaymentProps = {
	searchParams: { [key: string]: string | string[] | undefined };
};

export default function PaymentPage({ searchParams }: TPaymentProps) {
	const [isPending, startTransition] = useTransition();
	const { data: session, update, status } = useSession();
	const router = useRouter()
	return (
		<main className="flex flex-col gap-3 items-center">
			<H1>PetCare access requires payment</H1>
			{searchParams.success && (
				<>
					<p className="text-green-700">
						Payment successfull. You now have lifetime access to
						PetCare.
					</p>
					<Button
						onClick={async () => {
							await update(true);
							router.push('/app/dashboard')
						}}
						className="flex items-center gap-2"
						disabled={status === 'loading' || session?.user.hasAccess}
					>
						<span>Access dashboard</span>
						<ArrowRightIcon />
					</Button>
				</>
			)}
			{!searchParams.success && (
				<Button
					disabled={isPending}
					onClick={async () => {
						startTransition(async () => {
							await createCheckoutSession();
						});
					}}
				>
					Buy lifetime access for $255
				</Button>
			)}
			{searchParams.cancelled && (
				<>
					<p className="text-red-700">
						Payment cancelled. You can try again.
					</p>
				</>
			)}
		</main>
	);
}
