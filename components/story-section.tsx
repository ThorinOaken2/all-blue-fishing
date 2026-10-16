export function StorySection() {
  return (
    <section id="story" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr] md:py-28">
        <div>
          <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary-foreground/80">
              <span aria-hidden="true" className="h-1 w-8 rounded-full bg-coral" />
              The Story
            </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight md:text-5xl">
            The legend of the All Blue
          </h2>
        </div>
        <div className="flex flex-col gap-6 text-lg leading-relaxed text-primary-foreground/90">
          <p>
            The All Blue is the idea that all the seas of the world meet at one single point — a place where every fish
            in the world can thrive together.
          </p>
          <p>
            It&apos;s a dream made popular by the famous anime series <cite className="not-italic font-semibold">One Piece</cite>,
            and it&apos;s the spirit behind this business: a love for the water, the fish that live in it, and the pursuit
            of something legendary every time a line is cast.
          </p>
        </div>
      </div>
    </section>
  )
}
