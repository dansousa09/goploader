import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";

export default function HomePage() {
	const navigate = useNavigate();
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-700">
			<h1 className="font-bold text-8xl text-white">
				<span className="underline decoration-sky-500 mr-2 border rounded-xl p-4">
					Go
				</span>
				ploader
			</h1>
			<Separator className="w-1/2 my-24" />
			<div className="w-xl flex flex-col space-y-2">
				<Button
					className="border border-zinc-300 transition-all hover:shadow-xl hover:from-indigo-700 hover:to-indigo-500 active:from-indigo-500 active:to-indigo-700"
					onClick={() => navigate("/dashboard")}
				>
					Start uploading
				</Button>
				<Button
					className="border border-zinc-300 transition-all hover:shadow-xl hover:from-indigo-700 hover:to-indigo-500 active:from-indigo-500 active:to-indigo-700"
					onClick={() => navigate("/contact")}
				>
					Contact
				</Button>
			</div>
		</div>
	);
}
