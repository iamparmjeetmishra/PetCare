"use client";
import { usePetContext, useSearchContext } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function PetList() {
	const { pets, selectedPetId, handleChangeSelectedPetId } =
		usePetContext();
	const { searchQuery } = useSearchContext();

	const filterdPets = pets.filter((pet) =>
		pet.name.toLowerCase().includes(searchQuery)
	);

	return (
		<ul className="bg-white border-b border-black/5">
			{filterdPets.map((pet) => (
				<li key={pet.id}>
					<button
						onClick={() => handleChangeSelectedPetId(pet.id)}
						className={cn(
							"flex h-[70px] items-center gap-4 px-5 text-base hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] w-full transition",
							{
								"bg-[#EFF1F2] ": pet.id === selectedPetId,
							}
						)}
					>
						<Image
							src={pet.imageUrl}
							alt={pet.name}
							width={45}
							height={45}
							className="size-[45px] rounded-full object-cover"
						/>
						<p className="font-semibold">{pet.name}</p>
					</button>
				</li>
			))}
		</ul>
	);
}
