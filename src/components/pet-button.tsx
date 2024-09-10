"use client";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogHeader,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import PetForm from "./pet-form";
import { useState } from "react";
import { flushSync } from "react-dom";

type action = "add" | "edit" | "checkout";

type PetButtonProp = {
	actionType: action;
	disabled?: boolean;
	className?: string;
	onClick?: () => void;
	children?: React.ReactNode;
};

export default function PetButton({
	actionType,
	disabled,
	className,
	onClick,
	children,
}: PetButtonProp) {
	const [isFormOpen, setIsFormOpen] = useState(false);

	if (actionType === "checkout") {
		return (
			<Button
				disabled={disabled}
				onClick={onClick}
				className={className}
				variant="secondary"
			>
				{children}
			</Button>
		);
	}
	return (
		<Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
			<DialogTrigger asChild>
				{actionType === "add" ? (
					<Button className={className} size="icon">
						<PlusIcon />
					</Button>
				) : (
					<Button className={className} variant="secondary">
						{children}
					</Button>
				)}
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						{actionType === "add" ? "Add a new pet" : "Edit pet"}
					</DialogTitle>
				</DialogHeader>
				<PetForm
					actionType={actionType}
					onFormSubmission={() => {
						flushSync(() => {
							setIsFormOpen(false);
						});
					}}
				/>
			</DialogContent>
		</Dialog>
	);
}
