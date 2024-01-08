import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../../ui/tooltip";

type Props = {
	children: React.ReactNode;
	text?: string;
	align?: "center" | "start" | "end";
	side?: "top" | "bottom" | "left" | "right";
};

export const CustomTooltip = ({
	children,
	text,
	align = "center",
	side = "bottom",
}: Props) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<div>{children}</div>
				</TooltipTrigger>
				<TooltipContent align={align} side={side}>
					<p>{text}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
