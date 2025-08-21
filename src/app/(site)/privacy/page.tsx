import Section from "@/components/Section";

export default function PrivacyPage() {
	return (
		<Section title="Privacy Policy" lead="How we handle your data and your rights.">
			<div className="prose prose-neutral">
				<h3>Introduction</h3>
				<p>This policy explains what data we collect, why we collect it, and how it is used and stored.</p>
				<h3>Information we collect</h3>
				<ul>
					<li>Contact details you submit (name, email, phone, message)</li>
					<li>Basic analytics and site usage data</li>
				</ul>
				<h3>How we use your information</h3>
				<p>We use your information to respond to enquiries, provide services, and improve our website.</p>
				<h3>Your rights</h3>
				<p>You may request access, correction, or deletion of your personal data at any time.</p>
				<h3>Contact</h3>
				<p>For any questions about this policy, please contact us using the details on the Contact page.</p>
			</div>
		</Section>
	);
} 