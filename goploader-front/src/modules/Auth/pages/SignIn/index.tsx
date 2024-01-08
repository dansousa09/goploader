import { SignIn } from "@clerk/clerk-react";
import { AuthLayout } from "../../components/layout";

export default function SignInPage() {
	return (
		<AuthLayout>
			<SignIn afterSignInUrl="/dashboard" signUpUrl="/sign-up" />
		</AuthLayout>
	);
}
