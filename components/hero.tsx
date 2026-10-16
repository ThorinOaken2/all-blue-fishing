import Image from 'next/image'

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
      <div className="flex flex-col gap-6">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">3D Printed Fishing Lures</p>
        <h1 className="text-balance font-serif text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          Where all the seas meet.
        </h1>
        <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
          The All Blue Fishing is a lure business by Juan Resendez — a veteran and angler from South Texas who makes
          3D printed fishing lures.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://TheAllBlueFishing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Shop the Lures
          </a>
          <a
            href="#story"
            className="rounded-md border border-primary px-6 py-3 font-medium text-primary transition-colors hover:bg-accent"
          >
            Read the Story
          </a>
        </div>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src="/images/lures.png"
          alt="Blue and silver 3D printed fishing lures resting on a wooden dock by the water"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  )
}
