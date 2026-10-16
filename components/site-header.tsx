import { SocialIcons } from './social-links'

const links = [
  { href: '#story', label: 'The Story' },
  { href: '#maker', label: 'The Maker' },
  { href: '#why', label: 'Why It Matters' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-lg font-semibold tracking-tight text-primary">
          The All Blue Fishing
        </a>
        <nav aria-label="Main" className="hidden gap-8 text-sm text-muted-foreground md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <SocialIcons />
          </div>
          <a
            href="https://TheAllBlueFishing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-coral px-4 py-2 text-sm font-bold text-coral-foreground transition-opacity hover:opacity-90"
          >
            Visit the Shop
          </a>
        </div>
      </div>
    </header>
  )
}
