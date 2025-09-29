import ThemeToggle from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium">Welcome to GradJourney</h2>
        <ThemeToggle />
      </div>
      <p className="text-muted-foreground">A project-based roadmap to land your first dev job.</p>
      <Button>Get Started</Button>
    </section>
  )
}
