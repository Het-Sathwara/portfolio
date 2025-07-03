import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
//import WorkSection from "@/components/sections/WorkSection";
import BlogsSection from "@/components/sections/BlogsSection";
import ComboSection from "@/components/sections/ComboSection";
import ContactSection from "@/components/sections/ContactSection";
import Navbar from "@/components/Navbar";

export default function HomePage() {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-grow">
				<section className="min-h-screen md:h-screen md:mb-[400px]" id="hero">
					<HeroSection />
				</section>
				{/*<section className="min-h-screen md:h-screen" id="work">
					<WorkSection />
				</section>*/}
				<section className="min-h-screen md:h-screen" id="projects">
					<ProjectsSection />
				</section>
				<section className="min-h-screen md:h-screen" id="blogs">
					<BlogsSection />
				</section>
				<section className="min-h-screen md:h-screen md:mb-[400px]" id="combo">
					<ComboSection />
				</section>
				<section className="min-h-screen md:h-screen" id="contact">
					<ContactSection />
				</section>
			</main>
		</div>
	);
}
