import * as React from "react";
import { UserButton, useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import { HelpCircle, Phone } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { CustomTooltip } from "../../ui/custom/custom-tooltip";

export default function DashboardLayout() {
	const { userId, isLoaded } = useAuth();
	const navigate = useNavigate();

	React.useEffect(() => {
		if (!userId) {
			navigate("/sign-in");
		}
	}, []);

	if (!isLoaded) return "Loading...";

	return (
		<div className="w-screen h-screen">
			<header className="w-full h-20 p-6 flex items-center justify-between border-b border-zinc-200">
				<h1 className="font-bold text-xl text-zinc-800">
					<span className="underline decoration-indigo-500 mr-2 border-2 border-zinc-800 rounded-xl p-2">
						Go
					</span>
					ploader
				</h1>
				<div className="w-1/3">
					<Input placeholder="Search..." />
				</div>
				<div className="flex items-center space-x-4">
					<CustomTooltip text="Contact">
						<Button variant="ghost" size="icon" className="w-8 h-8 p-1.5">
							<Phone className="text-sm" />
						</Button>
					</CustomTooltip>
					<CustomTooltip text="Help">
						<Button variant="ghost" size="icon" className="w-8 h-8 p-1.5">
							<HelpCircle className="text-sm" />
						</Button>
					</CustomTooltip>
					<UserButton />
				</div>
			</header>
			<main className="w-screen px-6 py-4">
				<Outlet />
			</main>
		</div>
	);
}
