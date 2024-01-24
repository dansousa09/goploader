import { Grid2X2, Menu } from "lucide-react";
import { Switch } from "../../../components/ui/switch";
import { Separator } from "../../../components/ui/separator";
import { FiltersSelect } from "../components/FiltersSelect";
import { fileType, lastModified } from "../mocks/filters-values";

export default function DashboardPage() {
	return (
		<>
			<section className="w-full flex justify-between">
				<h1 className="font-bold text-2xl">Dashboard</h1>
				<div className="flex space-x-4 items-center justify-center">
					<div className="flex items-center space-x-4">
						<FiltersSelect {...fileType} />
						<FiltersSelect {...lastModified} />
					</div>
					<Separator orientation="vertical" className="h-4" />
					<div className="flex items-center space-x-2">
						<Menu className="h-4" />
						<Switch />
						<Grid2X2 className="h-4" />
					</div>
				</div>
			</section>
		</>
	);
}
