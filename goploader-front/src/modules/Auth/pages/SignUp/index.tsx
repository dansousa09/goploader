import { SignUp } from "@clerk/clerk-react";
import { AuthLayout } from "../../components/layout";

export default function SignUpPage() {
	return (
		<AuthLayout>
			<SignUp afterSignUpUrl="/dashboard" signInUrl="/sign-in" />
		</AuthLayout>
	);
}
