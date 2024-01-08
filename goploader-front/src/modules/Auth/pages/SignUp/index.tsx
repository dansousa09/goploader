import { SignUp } from "@clerk/clerk-react";
import { AuthLayout } from "../../components/layout";

export default function SignUpPage() {
	return (
		<AuthLayout>
			<SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
		</AuthLayout>
	);
}
