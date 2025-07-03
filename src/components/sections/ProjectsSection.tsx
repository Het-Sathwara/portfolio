import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function ProjectsSection() {
	const [selectedProject, setSelectedProject] = useState(0);

	const projects = [
		{
			title: "GuardRail",
			description: "An enterprise-grade AI safety and evaluation framework designed to assess and monitor the safety, reliability, and ethical behavior of large language models (LLMs). Features include hallucination detection, bias testing, safety assessment, and ethical reasoning evaluation.",
			type: "machine learning",	
			technologies: ["Python", "PyTorch", "Hugging Face", "Gradio", "Pandas", "NumPy"],
			link: "https://github.com/Het-Sathwara/guardrail-pro"
		},
		{
			title: "Null-llm",
			description: "Maximize Return With Minimize Risk NULL-v1 is a cutting-edge trading AI that leverages Deep Q-Networks (DQN) to master financial markets. By learning from real-time data, it autonomously develops high-performance strategies with built-in risk management—stop-loss, position sizing, and portfolio balancing..",
			type: "deep learning",
			technologies: ["Python", "TensorFlow","Keras", "Streamlit", "Gym-style Environment","Deep Q-Learning","Double DQN","TA-Lib"],
			link: "https://github.com/Het-Sathwara/Null-llm"
		},
		
	];

	const projectTypes: Record<string, string> = {
		"machine learning": "text-amber-400",
		"deep learning": "text-emerald-400",
		webdev: "text-cyan-400",
		fullstack: "text-cyan-400",
		databases: "text-blue-400",
	};

	const techColors: Record<string, string> = {
		Python: "bg-yellow-900/30 text-yellow-400",
		TensorFlow: "bg-orange-900/30 text-orange-400",
		Keras: "bg-pink-900/30 text-pink-400",
		Streamlit: "bg-red-900/30 text-red-400",
		"Gym-style Environment": "bg-green-900/30 text-green-400",
		"Deep Q-Learning": "bg-blue-900/30 text-blue-400",
		"Double DQN": "bg-indigo-900/30 text-indigo-400",
		"TA-Lib": "bg-purple-900/30 text-purple-400",
		PyTorch: "bg-red-900/30 text-red-500",
		"Hugging Face": "bg-yellow-900/30 text-yellow-500",
		Gradio: "bg-violet-900/30 text-violet-400",
		Pandas: "bg-blue-900/30 text-blue-300",
		NumPy: "bg-teal-900/30 text-teal-400"
	};

	return (
		<div className="h-full flex flex-col py-6 md:py-10">
			<div className="mx-auto w-full max-w-6xl px-4 md:px-0">
				<Card className="mb-4 h-16 flex flex-nowrap overflow-x-auto">
					<div className="flex w-[80%] h-full items-center p-4 text-white/50 text-sm md:text-base">
						PROJECTS_AND_EXPERIMENTS
					</div>
					<div className="flex w-[20%] border-l h-full items-center justify-center p-4 font-mono bg-black/20 min-w-0">
						<span className="truncate text-xs md:text-base">
							[{selectedProject + 1}/{projects.length}]
						</span>
					</div>
				</Card>

				<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-h-[calc(100vh-10rem)] overflow-auto">
					<Card className="lg:col-span-2 lg:row-span-1 p-4 md:p-6">
						<div className="text-3xl md:text-4xl font-bold mb-2">
							<span className="text-white">projects</span>
							<span>.</span>
						</div>
						<div className="text-base md:text-lg opacity-70 mb-6">
							things I've built when procrastinating on other things
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
							{projects.map((project, index) => (
								<button
									key={`project-${project.title}`}
									type="button"
									className={`p-3 md:p-4 rounded transition-all text-left
										${
											index === selectedProject
												? "bg-white/10 shadow-lg"
												: "bg-black/20 hover:bg-white/5"
										}`}
									onClick={() => setSelectedProject(index)}
								>
									<div className="font-bold truncate text-sm md:text-base">{project.title}</div>
									<div
										className={`text-xs md:text-sm ${projectTypes[project.type as keyof typeof projectTypes]}`}
									>
										{project.type}
									</div>
								</button>
							))}
						</div>
					</Card>

					<Card className="lg:col-span-2 lg:row-span-2 p-4 md:p-6">
						<CardContent className="p-0 h-full flex flex-col">
							<div className="text-xl md:text-2xl font-bold mb-2">
								{projects[selectedProject].title}
							</div>
							<div
								className={`text-xs md:text-sm ${projectTypes[projects[selectedProject].type as keyof typeof projectTypes]} mb-4`}
							>
								{projects[selectedProject].type}
							</div>

							<div className="prose prose-invert max-w-none mb-8">
								<p className="text-base md:text-lg">
									{projects[selectedProject].description}
								</p>
							</div>

							<div className="mt-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
								<div className="flex flex-col">
									<div className="text-xs md:text-sm opacity-70 mb-2">
										Technologies used
									</div>
									<div className="flex flex-wrap gap-2">
										{projects[selectedProject].technologies.map((tech) => (
											<span
												key={`tech-${tech}`}
												className={`text-xs md:text-sm px-2 py-1 rounded ${techColors[tech] || "bg-cyan-900/30 text-cyan-400"}`}
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								<div>
									<a
										href={projects[selectedProject].link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center px-3 md:px-4 py-2 bg-white/10 hover:bg-white/20 rounded transition-colors"
									>
										<span className="mr-2 text-sm md:text-base">View project</span>
										<span className="text-xs">→</span>
									</a>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="lg:col-span-2 lg:row-span-1 p-4 md:p-6 flex flex-col">
						<div className="prose prose-invert max-w-none">
							<p className="text-base md:text-lg">
								i build projects to explore new technologies and solve
								interesting problems. each one is a
								<span className="italic text-white">
									{" "}
									playground for experimentation
								</span>{" "}
								and learning.
							</p>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
