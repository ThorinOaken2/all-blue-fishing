export function WhySection() {
  return (
    <section id="why" className="border-y border-border bg-muted">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-20 text-center md:py-28">
        <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary">
            <span aria-hidden="true" className="h-1 w-8 rounded-full bg-coral" />
            Why It Matters
          </p>
        <h2 className="text-balance font-serif text-4xl font-semibold leading-tight md:text-5xl">
          More than a lure — a look inside the craft
        </h2>
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          This site is a window into the business and into why Juan loves creating these lures. Every piece brings
          together a passion for fishing, South Texas roots, and the dream of the All Blue — a place where every fish can
          thrive.
        </p>
      </div>
    </section>
  )
}
