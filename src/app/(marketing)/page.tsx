import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomPage() {
	return (
		<main className="bg-grass min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10">
			<Image
				src="/petcare-preview.png"
				alt="PetCare Dashboard"
				width={519}
				height={472}
			/>
			<div>
				<Logo />
				<h1 className="text-5xl font-semibold my-6 max-w-[500px] ">
					Manage your{" "}
					<span className="font-extrabold">pet daycare</span> with
					ease
				</h1>
				<p className="text-2xl font-medium max-w-[600px]">
					Use PetCare to easily keep track of pets under your care.
					Get Lifetime access for $255.
				</p>
				<div className="mt-10 space-x-4">
					<Button asChild>
						<Link href={"/signup"}>Signup</Link>
					</Button>
					<Button asChild variant={"outline"}>
						<Link href={"/login"}>Login</Link>
					</Button>
				</div>
			</div>
		</main>
	);
}
