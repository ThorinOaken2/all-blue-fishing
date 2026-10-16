import { ArrowUpRight } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center">
        <h2 className="text-balance font-serif text-3xl font-semibold md:text-4xl">Set sail for the All Blue</h2>
        <p className="max-w-md text-muted-foreground">See the lures and read more at the official site.</p>
        <a
          href="https://TheAllBlueFishing.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-coral px-6 py-3 font-bold text-coral-foreground transition-opacity hover:opacity-90"
        >
          TheAllBlueFishing.com
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-muted-foreground md:flex-row">
          <p className="font-serif font-semibold text-primary">The All Blue Fishing</p>
          <p>Made by Juan Resendez &middot; South Texas</p>
        </div>
      </div>
    </footer>
  )
}
