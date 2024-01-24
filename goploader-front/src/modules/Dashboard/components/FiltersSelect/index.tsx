import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../../../components/ui/select";
import { cn } from "../../../../lib/utils";

type Props = {
	placeholder: string;
	options: {
		value: string;
		label: string;
		icon?: React.ReactNode;
	}[];
	className?: string;
};

export function FiltersSelect({ placeholder, options, className }: Props) {
	return (
		<Select>
			<SelectTrigger className={cn(className, "w-[180px]")}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{options.map((option) => (
					<SelectItem value={option.value} className="flex flex-row">
						<div className="flex items-center gap-2 pl-4">
							<span>{option.icon}</span>
							<span>{option.label}</span>
						</div>
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
