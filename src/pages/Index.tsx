import { lazy, Suspense } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";

// Lazy load heavier components for better performance
const About = lazy(() =>
  import("@/components/About").then((m) => ({ default: m.About }))
);
const Projects = lazy(() =>
  import("@/components/Projects").then((m) => ({ default: m.Projects }))
);
const Expertise = lazy(() =>
  import("@/components/Expertise").then((m) => ({ default: m.Expertise }))
);
const Contact = lazy(() =>
  import("@/components/Contact").then((m) => ({ default: m.Contact }))
);

// Loading skeleton
const SectionSkeleton = () => (
  <div className="section flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Expertise />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
