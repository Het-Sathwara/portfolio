import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import twitterImg from "@/assets/twitter.png";
import githubImg from "@/assets/github.png";

export default function ContactSection() {
	const [copied, setCopied] = useState(false);
	// To configure Formspree:
	// 1. Go to https://formspree.io and sign up
	// 2. Create a new form and get the form ID (it looks like "abcdefgh")
	// 3. Replace "mblogogg" below with your new form ID
	const [formState, handleSubmit] = useForm("mpwdbvzv");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// Reset form when submission is successful
	if (formState.succeeded) {
		setTimeout(() => {
			setFormData({ name: "", email: "", message: "" });
		}, 500);
	}

	const copyEmail = () => {
		navigator.clipboard.writeText("het.work01@gmail.com");
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const socialLinks = [
		{ name: "github", url: "https://github.com/Het-Sathwara", icon: "github.svg" },
		{
			name: "twitter",
			url: "https://twitter.com/HetSathwara",
			icon: "twitter.svg",
		},
	];

	const availabilityStatus = {
		status: "limited" as const,
		message: "limited availability for new projects",
		nextAvailable: "December 2025",
	};

	const languages = ["English", "Gujarati", "Hindi"];

	const statusColors = {
		available: "text-emerald-400",
		limited: "text-amber-400",
		unavailable: "text-rose-400",
	} as const;

	const handleReset = () => {
		setFormData({ name: "", email: "", message: "" });
	};

	const brainSVG = (
		<img src={githubImg} alt="Github" className="w-17 h-6" />
	);

	const neuralSVG = (
		<img src={twitterImg} alt="Twitter" className="w-5 h-5" />
	);

	return (
		<div className="h-full flex flex-col py-6 md:py-10">
			<div className="mx-auto w-full max-w-6xl px-4 md:px-0">

				<Card className="mb-4 h-16 flex flex-nowrap overflow-x-auto">
					<div className="flex w-[80%] h-full items-center p-4 text-white/50 text-sm md:text-base">
						SAY_HELLO_OR_WHATEVER
					</div>
					<div className="flex w-[20%] border-l h-full items-center justify-center p-2 md:p-4 font-mono bg-black/20 min-w-0">
						<span className="whitespace-nowrap text-xs md:text-base">[connect]</span>
					</div>
				</Card>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 max-h-[calc(100vh-10rem)] overflow-auto h-full items-stretch">
					{/* Contact Form */}
					<Card className="lg:col-span-6 p-4 md:p-6 h-full flex flex-col flex-1">
						<div className="text-3xl md:text-4xl font-bold mb-2">
							<span className="text-white">contact</span>
							<span>.</span>
						</div>
						<div className="text-base md:text-lg opacity-70 mb-8">
							let's connect and make something cool
						</div>

						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="space-y-2">
								<label
									htmlFor="name"
									className="text-sm md:text-base font-medium"
								>
									name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									className="w-full p-2 md:p-3 bg-black/20 border border-white/10 rounded focus:outline-none focus:border-white/30 text-sm md:text-base"
									required
								/>
								<ValidationError
									prefix="Name"
									field="name"
									errors={formState.errors}
								/>
							</div>

							<div className="space-y-2">
								<label
									htmlFor="email"
									className="text-sm md:text-base font-medium"
								>
									email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									className="w-full p-2 md:p-3 bg-black/20 border border-white/10 rounded focus:outline-none focus:border-white/30 text-sm md:text-base"
									required
								/>
								<ValidationError
									prefix="Email"
									field="email"
									errors={formState.errors}
								/>
							</div>

							<div className="space-y-2">
								<label
									htmlFor="message"
									className="text-sm md:text-base font-medium"
								>
									message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleInputChange}
									className="w-full p-2 md:p-3 bg-black/20 border border-white/10 rounded focus:outline-none focus:border-white/30 min-h-[100px] text-sm md:text-base"
									required
								/>
								<ValidationError
									prefix="Message"
									field="message"
									errors={formState.errors}
								/>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<button
									type="submit"
									disabled={formState.submitting}
									className="flex-1 px-4 py-2 md:py-3 bg-white/10 hover:bg-white/20 rounded transition-colors text-sm md:text-base"
								>
									{formState.submitting ? "sending..." : "send message"}
								</button>
								<button
									type="button"
									onClick={handleReset}
									className="px-4 py-2 md:py-3 border border-white/10 hover:border-white/30 rounded transition-colors text-sm md:text-base"
								>
									reset
								</button>
							</div>
						</form>
					</Card>

					<div className="lg:col-span-6 flex flex-col h-full flex-1">
						{/* Social Links */}
						<Card className="p-4 md:p-6 mb-4 flex-1">
							<div className="text-2xl font-bold mb-4">
								<span className="text-white">connect</span>
								<span>.</span>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
								{socialLinks.map((link) => (
									<a
										key={link.name}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center p-3 rounded bg-black/30 hover:bg-black/50 transition-colors"
									>
										<div className="w-5 h-5 md:w-6 md:h-6 mr-3 flex items-center justify-center">
											{link.name === "github" ? brainSVG : link.name === "twitter" ? neuralSVG : null}
										</div>
										<span className="text-sm md:text-base">{link.name}</span>
									</a>
								))}
							</div>

							<div className="mt-4">
								<div className="text-base md:text-lg mb-2">direct email</div>
								<button
									type="button"
									className="flex items-center justify-between w-full p-3 rounded bg-black/20 hover:bg-black/30 cursor-pointer text-left transition-colors"
									onClick={copyEmail}
									aria-pressed={copied}
								>
									<span className="font-mono text-sm md:text-base">het.work01@gmail.com</span>
									<span className="text-xs">
										{copied ? "copied!" : "click to copy"}
									</span>
								</button>
							</div>
						</Card>
						{/* Availability */}
						<Card className="p-4 md:p-6 mb-4 flex-1">
							<div className="text-2xl font-bold mb-4">
								<span className="text-white">availability</span>
								<span>.</span>
							</div>

							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="text-sm md:text-base">status</div>
									<div
										className={`text-sm md:text-base ${statusColors[availabilityStatus.status]}`}
									>
										{availabilityStatus.status}
									</div>
								</div>

								<div className="flex items-center justify-between">
									<div className="text-sm md:text-base">next available</div>
									<div className="text-sm md:text-base">
										{availabilityStatus.nextAvailable}
									</div>
								</div>

								<div className="flex items-center justify-between">
									<div className="text-sm md:text-base">languages</div>
									<div className="text-sm md:text-base">
										{languages.join(", ")}
									</div>
								</div>
							</div>
						</Card>
						{/* One-liner pitch box at the bottom */}	
						<Card className="p-4 md:p-6 flex items-center justify-center text-center bg-black/30 border border-white/10 font-semibold text-lg md:text-xl mt-auto">
							🚀 Let's build something amazing together.
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
