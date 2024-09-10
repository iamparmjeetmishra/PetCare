"use client";
import { usePetContext } from "@/lib/hooks";
import { TPet } from "@/lib/types";
import Image from "next/image";
import Logo from "./logo";
import PetButton from "./pet-button";

export default function PetDetails() {
	const { selectedPet } = usePetContext();
	return (
		<section className="flex flex-col h-full w-full">
			{!selectedPet ? (
				<EmptyView />
			) : (
				<>
					<TopBar pet={selectedPet} />
					<OtherInfo pet={selectedPet} />
					<Notes pet={selectedPet} />
				</>
			)}
		</section>
	);
}

type Pet = {
	pet: TPet;
};

function TopBar({ pet }: Pet) {
	const { handleCheckoutPet } = usePetContext();

	return (
		<div className="flex items-center bg-white px-8 py-5 border-b border-lightBlack">
			<Image
				src={pet.imageUrl}
				alt={pet.name}
				height={75}
				width={75}
				className="size-[75px] rounded-full object-cover"
			/>
			<h2 className="text-3xl font-semibold leading-7 ml-5">
				{pet.name}
			</h2>
			<div className="ml-auto flex gap-4">
				<PetButton actionType={"edit"} >Edit</PetButton>
				<PetButton
					actionType={"checkout"}
					onClick={async () => await handleCheckoutPet(pet.id)}
				>
					Checkout
				</PetButton>
			</div>
		</div>
	);
}

function OtherInfo({ pet }: Pet) {
	return (
		<div className="flex justify-around py-10 px-5 text-center">
			<div>
				<h3 className="text-xs font-medium uppercase text-zinc-700">
					Owner name
				</h3>
				<p className="mt-1 text-lg text-zinc-800">{pet.ownerName}</p>
			</div>
			<div>
				<h3 className="text-xs font-medium uppercase text-zinc-700">
					Age
				</h3>
				<p className="mt-1 text-lg text-zinc-800">{pet.age}</p>
			</div>
		</div>
	);
}

function Notes({ pet }: Pet) {
	return (
		<section className="bg-white h-full p-7 rounded-md mb-9 mx-8 border border-lightBlack">
			{pet.notes}
		</section>
	);
}

function EmptyView() {
	return (
		<div className="flex flex-col items-center justify-center h-full">
			<Logo />
			<p className="text-2xl font-semibold">No Pet Selected</p>
		</div>
	);
}
