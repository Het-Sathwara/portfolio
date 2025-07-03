import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";

const COMING_SOON = true;

type BlogCategory = "all" | "programming" | "philosophy" | "life";

interface BlogPost {
	title: string;
	excerpt: string;
	date: string;
	category: Exclude<BlogCategory, "all">;
	readTime: string;
	slug: string;
}

export default function BlogsSection() {
	const [activeCategory, setActiveCategory] = useState<BlogCategory>("all");

	const blogPosts: BlogPost[] = [
		{
			title: "Building Resilient Systems with Circuit Breakers",
			excerpt:
				"How to implement fault tolerance in distributed applications with the circuit breaker pattern.",
			date: "2023-12-05",
			category: "programming",
			readTime: "8 min",
			slug: "circuit-breakers",
		},
		{
			title: "The Paradox of Choice in Modern Software Development",
			excerpt:
				"Why having too many technologies and frameworks is making us less productive.",
			date: "2023-11-20",
			category: "programming",
			readTime: "6 min",
			slug: "paradox-of-choice",
		},
		{
			title: "Stoicism and Debugging: Accepting What You Cannot Control",
			excerpt:
				"Applying stoic philosophy to remain calm during challenging debugging sessions.",
			date: "2023-10-15",
			category: "philosophy",
			readTime: "7 min",
			slug: "stoicism-debugging",
		},
		{
			title: "The Joy of Being Perpetually Curious",
			excerpt:
				"How maintaining a childlike wonder can lead to greater happiness and fulfillment.",
			date: "2023-09-28",
			category: "life",
			readTime: "5 min",
			slug: "perpetual-curiosity",
		},
		{
			title: "Existentialism and Creative Coding",
			excerpt:
				"Finding meaning through creating digital art and generative systems.",
			date: "2023-08-12",
			category: "philosophy",
			readTime: "9 min",
			slug: "existentialism-coding",
		},
		{
			title: "Digital Minimalism: My Month Without Social Media",
			excerpt:
				"What I learned from taking a break from the constant stream of information.",
			date: "2023-07-19",
			category: "life",
			readTime: "6 min",
			slug: "digital-minimalism",
		},
	];

	const categoryColors = {
		programming: "text-cyan-400 border-cyan-400/30",
		philosophy: "text-amber-400 border-amber-400/30",
		life: "text-emerald-400 border-emerald-400/30",
		all: "text-white/70 border-white/30",
	};

	const filteredPosts =
		activeCategory === "all"
			? blogPosts
			: blogPosts.filter((post) => post.category === activeCategory);

	return (
		<div className="h-full flex flex-col py-6 md:py-10">
			<div className="mx-auto w-full max-w-6xl px-4 md:px-0">
				<Card className="mb-4 h-16 flex flex-nowrap overflow-x-auto">
					<div className="flex w-[80%] h-full items-center p-4 text-white/50 text-sm md:text-base">
						THOUGHTS_AND_RAMBLINGS
					</div>
					<div className="flex w-[20%] border-l h-full items-center justify-center p-4 font-mono bg-black/20 min-w-0">
						<span className="truncate text-xs md:text-base">
							{COMING_SOON
								? "SOON"
								: `[${filteredPosts.length} post${filteredPosts.length !== 1 ? "s" : ""}]`}
						</span>
					</div>
				</Card>

				{COMING_SOON ? (
					<Card className="p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[50vh]">
						<div className="text-4xl md:text-5xl font-bold mb-4">Coming Soon</div>
						<div className="text-lg md:text-xl opacity-70 max-w-lg mb-8">
							I'm currently brewing some interesting thoughts. The blog section
							will be available shortly.
						</div>
					</Card>
				) : (
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-4 max-h-[calc(100vh-10rem)] overflow-hidden">
						<Card className="lg:col-span-2 p-4 overflow-auto">
							<div className="text-3xl md:text-4xl font-bold mb-2">
								<span className="text-white">blogs</span>
								<span>.</span>
							</div>
							<div className="text-base md:text-lg opacity-70 mb-8">
								where i think out loud to the void of the internet
							</div>

							<div className="flex flex-wrap gap-3 mb-6">
								{(
									["all", "programming", "philosophy", "life"] as BlogCategory[]
								).map((category) => (
									<button
										key={category}
										type="button"
										onClick={() => setActiveCategory(category)}
										className={`px-3 md:px-4 py-2 border rounded-full text-xs md:text-sm transition-all
                   					${
															activeCategory === category
																? `${categoryColors[category]} border-opacity-100 bg-black/30`
																: "border-white/10 hover:border-white/30"
														}`}
									>
										{category}
									</button>
								))}
							</div>

							<div className="space-y-4">
								{filteredPosts.map((post) => (
									<Link
										key={post.slug}
										to={`/blog/${post.slug}`}
										className="block group"
									>
										<div className="bg-black/20 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg">
											<div className="p-4 md:p-6">
												<div
													className={`text-xs inline-block px-2 py-1 rounded ${categoryColors[post.category]} bg-black/30 mb-2`}
												>
													{post.category}
												</div>
												<h2 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
													{post.title}
												</h2>
												<p className="text-xs md:text-sm text-muted-foreground mb-3">
													{new Date(post.date).toLocaleDateString()}
												</p>
												<p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
													{post.excerpt}
												</p>
											</div>
										</div>
									</Link>
								))}
							</div>
						</Card>

						<Card className="lg:col-span-3 p-4 md:p-6">
							<div className="prose prose-invert max-w-none">
								<p className="text-base md:text-lg">
									i write about my experiences, thoughts, and learnings in the
									world of technology and beyond. each post is a{" "}
									<span className="italic text-white">
										window into my mind
									</span>
									.
								</p>
							</div>
						</Card>
					</div>
				)}
			</div>
		</div>
	);
}
