import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";

export default function HomePage() {
	const navigate = useNavigate();
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center">
			<h1 className="font-bold text-8xl text-zinc-800">
				<span className="underline decoration-indigo-500 mr-2 border-4 rounded-xl p-4">
					Go
				</span>
				ploader
			</h1>
			<Separator className="w-1/2 my-24" />
			<div className="w-xl flex flex-col space-y-2">
				<Button
					size="sm"
					className="transition-all hover:shadow"
					onClick={() => navigate("/dashboard")}
				>
					Start uploading
				</Button>
				<Button
					size="sm"
					className="transition-all hover:shadow"
					onClick={() => navigate("/contact")}
				>
					Contact
				</Button>
			</div>
		</div>
	);
}
