import { TPetBtnAction } from "@/lib/types";
import { Button } from "./ui/button";

type TPetFormBtnProps = {
	actionType: TPetBtnAction;
};

export default function PetFormBtn({ actionType }: TPetFormBtnProps) {
	return (
		<Button type="submit">
			{actionType === "add" ? "Add a new pet" : "Edit pet"}
		</Button>
	);
}
