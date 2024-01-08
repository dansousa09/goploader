export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-screen h-screen flex items-center justify-between">
			<div className="w-1/2 h-full flex items-center justify-center">
				{children}
			</div>
			<div className="bg-zinc-800 w-1/2 h-full flex items-center justify-center">
				<h1 className="font-bold text-8xl text-zinc-100">
					<span className="underline decoration-indigo-500 mr-2 border-4 rounded-xl p-4">
						Go
					</span>
					ploader
				</h1>
			</div>
		</div>
	);
};
