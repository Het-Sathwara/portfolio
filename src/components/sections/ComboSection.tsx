import { Card } from "@/components/ui/card";
import { useState } from "react";

type TabType = "skills" | /*"testimonials"*/  "tools";

interface Skill {
	name: string;
	category: "ml_languages" | "libraries" | "deep_learning" | "nlp" | "cv" | "classic_ml" | "llm_tools";
	color: string;
	icon?: string;
}

{/*interface Testimonial {
	quote: string;
	author: string;
	position: string;
	company: string;
}*/}

interface Tool {
	name: string;
	description: string;
	category: "development" | "design" | "productivity";
	link?: string;
}

export default function ComboSection() {
	const [activeTab, setActiveTab] = useState<TabType>("skills");

	const skills: Skill[] = [
		{
			name: "Python",
			category: "ml_languages",
			color: "bg-blue-600",
			icon: "🐍",
		},
		{
			name: "NumPy",
			category: "ml_languages",
			color: "bg-blue-400",
			icon: "🔢",
		},
		{
			name: "Pandas",
			category: "ml_languages",
			color: "bg-purple-400",
			icon: "🐼",
		},
		{
			name: "Matplotlib",
			category: "ml_languages",
			color: "bg-green-500",
			icon: "📊",
		},
		{
			name: "Seaborn",
			category: "ml_languages",
			color: "bg-teal-400",
			icon: "📈",
		},
		{
			name: "Plotly",
			category: "ml_languages",
			color: "bg-cyan-400",
			icon: "📉",
		},
		{
			name: "PyTorch",
			category: "deep_learning",
			color: "bg-orange-500",
			icon: "🔥",
		},
		{
			name: "TensorFlow",
			category: "deep_learning",
			color: "bg-yellow-600",
			icon: "⚡",
		},
		{
			name: "JAX",
			category: "deep_learning",
			color: "bg-purple-500",
			icon: "🚀",
		},
		{
			name: "HuggingFace",
			category: "nlp",
			color: "bg-yellow-400",
			icon: "🤗",
		},
		{
			name: "spaCy",
			category: "nlp",
			color: "bg-blue-500",
			icon: "🔤",
		},
		{
			name: "NLTK",
			category: "nlp",
			color: "bg-green-600",
			icon: "📝",
		},
		{
			name: "OpenCV",
			category: "cv",
			color: "bg-blue-700",
			icon: "👁️",
		},
		{
			name: "Detectron2",
			category: "cv",
			color: "bg-red-500",
			icon: "🔍",
		},
		{
			name: "YOLO",
			category: "cv",
			color: "bg-gray-500",
			icon: "👀",
		},
		{
			name: "Scikit-learn",
			category: "classic_ml",
			color: "bg-orange-400",
			icon: "🧠",
		},
		{
			name: "XGBoost",
			category: "classic_ml",
			color: "bg-green-500",
			icon: "🚄",
		},
		{
			name: "LightGBM",
			category: "classic_ml",
			color: "bg-teal-500",
			icon: "💡",
		},
		{
			name: "LangChain",
			category: "llm_tools",
			color: "bg-emerald-500",
			icon: "⛓️",
		},
		{
			name: "LlamaIndex",
			category: "llm_tools",
			color: "bg-amber-500",
			icon: "🦙",
		},
		{
			name: "vLLM",
			category: "llm_tools",
			color: "bg-purple-600",
			icon: "🚅",
		},
	];

	// const testimonials: Testimonial[] = [
	// 	{
	// 		quote:
	// 			"One of the most talented developers I've ever worked with. Combines deep technical knowledge with a keen eye for design and user experience.",
	// 		author: "Sarah Johnson",
	// 		position: "CTO",
	// 		company: "TechVentures Inc",
	// 	},
	// 	{
	// 		quote:
	// 			"Consistently delivers clean, well-documented code that exceeds expectations. A natural problem solver who can tackle complex challenges with elegant solutions.",
	// 		author: "Michael Chen",
	// 		position: "Lead Developer",
	// 		company: "InnovateLabs",
	// 	},
	// 	{
	// 		quote:
	// 			"An exceptional collaborator who elevates the entire team. Brings both technical excellence and creative thinking to every project.",
	// 		author: "Aisha Patel",
	// 		position: "Product Manager",
	// 		company: "DigitalCraft",
	// 	},
	// 	{
	// 		quote:
	// 			"Rare combination of technical depth and communication skills. Can translate complex technical concepts into terms anyone can understand.",
	// 		author: "James Wilson",
	// 		position: "CEO",
	// 		company: "BuildFast",
	// 	},
	// ];

	const tools: Tool[] = [
		{
			name: "VS Code",
			description:
				"A lightweight yet powerful code editor by Microsoft.",
			category: "development",
		
		},
		{
			name: "oh-my-zsh",
			description:
				"The ultimate Zsh configuration framework for your terminal.",
			category: "development",
			
		},
		{
			name: "Arch Linux",
			description:
				"Lightweight and flexible Linux distribution for full customization",
			category: "development",
		},
		{
			name: "Figma",
			description:
				"Collaborative interface design tool for prototyping and design systems",
			category: "design",
			link: "https://www.figma.com/",
		},
		{
			name: "Notion",
			description:
				"All-in-one workspace for notes, tasks, wikis, and databases",
			category: "productivity",
			link: "https://www.notion.so/",
		},
		{
			name: "Obsidian",
			description:
				"Knowledge base that works on local Markdown files for personal knowledge management",
			category: "productivity",
			link: "https://obsidian.md/",
		},
		{
			name: "GitHub Copilot",
			description: "AI pair programmer that suggests code in real-time",
			category: "development",
			link: "https://github.com/features/copilot",
		},
		{
			name: "Docker",
			description:
				"Containerization platform for consistent development environments",
			category: "development",
			link: "https://www.docker.com/",
		},
	];

	const categoryColors = {
		ml_languages: "text-blue-400",
		libraries: "text-purple-400",
		deep_learning: "text-orange-400",
		nlp: "text-yellow-400",
		cv: "text-blue-500",
		classic_ml: "text-green-400",
		llm_tools: "text-emerald-400",
		development: "text-cyan-400",
		design: "text-pink-400",
		productivity: "text-green-400",
	};

	const categoryBgColors = {
		ml_languages: "bg-blue-400/10 border-blue-400/30",
		libraries: "bg-purple-400/10 border-purple-400/30",
		deep_learning: "bg-orange-400/10 border-orange-400/30",
		nlp: "bg-yellow-400/10 border-yellow-400/30",
		cv: "bg-blue-500/10 border-blue-500/30",
		classic_ml: "bg-green-400/10 border-green-400/30",
		llm_tools: "bg-emerald-400/10 border-emerald-400/30",
	};

	return (
		<div className="h-full flex flex-col py-6 md:py-10">
			<div className="mx-auto w-full max-w-6xl px-4 md:px-0">
				<Card className="mb-4 h-16 flex flex-nowrap overflow-x-auto">
					<div className="flex w-[80%] h-full items-center p-4 text-white/50 text-sm md:text-base">
						TOOLS_SKILLS_AND_KUDOS
					</div>
					<div className="flex w-[20%] border-l h-full items-center justify-center p-2 md:p-4 font-mono bg-black/20 min-w-0">
						<span className="whitespace-nowrap text-xs md:text-base">[{activeTab}]</span>
					</div>
				</Card>

				<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 flex-grow overflow-hidden">
					{/* Sidebar */}
					<Card className="lg:col-span-1 p-4 md:p-6">
						<div className="text-3xl md:text-4xl font-bold mb-2">
							<span className="text-white">combo</span>
							<span>.</span>
						</div>
						<div className="text-base md:text-lg opacity-70 mb-8">
							skills, praise & toolkit
						</div>

						<div className="flex flex-col gap-3">
							{(["skills", "tools"] as TabType[]).map((tab) => (
								<button
									key={tab}
									type="button"
									onClick={() => setActiveTab(tab)}
									className={`px-4 py-3 border rounded-lg text-sm transition-all text-left 
                    ${
											activeTab === tab
												? "border-white border-opacity-30 bg-black/30"
												: "border-white/10 hover:border-white/30"
										}`}
								>
									<div className="font-bold mb-1">{tab}</div>
									<div className="text-xs opacity-70">
										{tab === "skills" && "what I'm good at"}
										{/*{tab === "testimonials" && "what others say"}*/}
										{tab === "tools" && "what I use daily"}
									</div>
								</button>
							))}
						</div>

						<div className="mt-8 font-mono text-xs opacity-70 bg-black/20 p-3 rounded">
							<div className="mb-2">$ cat highlights.txt</div>
							<div className="ml-2">- years of experience: 1+</div>
							<div className="ml-2">- projects completed: 3+</div>
							<div className="ml-2">- coffee consumed: ∞</div>
						</div>
					</Card>

					{/* Main Content */}
					<Card className="lg:col-span-3 p-4 md:p-4">
						{/* Skills Tab */}
						{activeTab === "skills" && (
							<div>
								<h2 className="text-xl md:text-2xl font-bold mb-6">Technical Expertise</h2>

								<div className="mb-6 grid grid-cols-1 gap-8">
									{["ml_languages", "deep_learning", "nlp", "cv", "classic_ml", "llm_tools"].map(
										(category) => {
											const categorySkills = skills.filter(
												(skill) => skill.category === category,
											);
											if (categorySkills.length === 0) return null;

											return (
												<div key={category} className="mb-2">
													<div
														className={`text-base md:text-lg font-semibold mb-3 ${categoryColors[category as keyof typeof categoryColors]}`}
													>
														{category === "ml_languages" ? "languages & libraries"
															: category === "deep_learning" ? "Deep Learning"
															: category === "nlp" ? "NLP"
															: category === "cv" ? "Computer Vision"
															: category === "classic_ml" ? "Classic ML"
															: category === "llm_tools" ? "LLM Tools"
															: category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' ')}
													</div>
													<div className="flex flex-wrap gap-3">
														{categorySkills.map((skill) => (
															<div
																key={skill.name}
																className={`px-3 md:px-4 py-2 rounded-lg border ${categoryBgColors[skill.category as keyof typeof categoryBgColors]} hover:bg-black/30 transition-all`}
															>
																<div className="flex items-center gap-2">
																	{skill.icon && <span>{skill.icon}</span>}
																	<span className="text-sm md:text-base">{skill.name}</span>
																</div>
															</div>
														))}
													</div>
												</div>
											);
										},
									)}
								</div>

								<div className="bg-black/10 p-4 md:p-5 rounded border border-white/5">
									<div className="flex items-center gap-3">
										<div className="text-lg md:text-xl">💭</div>
										<p className="italic text-xs md:text-sm opacity-80">
											<a
												href="https://www.youtube.com/watch?v=2_O5YHX4urE"
												target="_blank"
												rel="noopener noreferrer"
											>
												"i don't do if, buts and maybes. i do absolutes." - a
												legendary liverpool fan.
											</a>
										</p>
									</div>
								</div>
							</div>
						)}

						{/* Testimonials Tab
						{activeTab === "testimonials" && (
							<div>
								<h2 className="text-2xl font-bold mb-6">What People Say</h2>
								<div className="grid grid-cols-1 gap-6">
									{testimonials.map((testimonial) => (
										<Card
											key={`testimonial-${testimonial.author.toLowerCase().replace(/\s+/g, "-")}`}
											className="p-0 overflow-hidden transition-transform hover:transform hover:scale-[1.01]"
										>
											<div className="h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 w-full" />
											<CardContent className="p-6">
												<p className="italic text-lg mb-4">
													"{testimonial.quote}"
												</p>
												<div className="flex items-center justify-between">
													<div>
														<div className="font-bold">
															{testimonial.author}
														</div>
														<div className="text-sm opacity-70">
															{testimonial.position} at {testimonial.company}
														</div>
													</div>
													<div className="text-4xl opacity-20">"</div>
												</div>
											</CardContent>
										</Card>
									))}
								</div>
							</div>
						)} */}

						{/* Tools Tab */}
						{activeTab === "tools" && (
							<div>
								<h2 className="text-xl md:text-2xl font-bold mb-6">My Toolkit</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{tools.map((tool) => (
										<div
											key={tool.name}
											className="bg-black/20 p-4 rounded flex flex-col"
										>
											<div className="flex justify-between items-start mb-2">
												<div className="font-bold text-sm md:text-base">{tool.name}</div>
												<div
													className={`text-xs ${categoryColors[tool.category]} px-2 py-1 rounded bg-black/30`}
												>
													{tool.category}
												</div>
											</div>
											<p className="text-xs md:text-sm opacity-80 flex-grow mb-3">
												{tool.description}
											</p>
											{tool.link && (
												<a
													href={tool.link}
													target="_blank"
													rel="noopener noreferrer"
													className="text-xs underline self-end hover:text-white transition-colors"
												>
													Learn more
												</a>
											)}
										</div>
									))}
								</div>

								<div className="mt-8 font-mono text-xs">
									<div className="opacity-70 mb-2">$ echo $SHELL</div>
									<div className="ml-2">/usr/bin/zsh with oh-my-zsh</div>
									<div className="opacity-70 mb-2 mt-4">$ echo $EDITOR</div>
									<div className="ml-2">nvim</div>
								</div>
							</div>
						)}
					</Card>
				</div>
			</div>
		</div>
	);
}
