import { SignIn } from "@clerk/clerk-react";
import { AuthLayout } from "../../components/layout";

export default function SignInPage() {
	return (
		<AuthLayout>
			<SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
		</AuthLayout>
	);
}
