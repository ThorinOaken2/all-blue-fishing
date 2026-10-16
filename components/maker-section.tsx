import Image from 'next/image'
import { Anchor, Fish, Printer } from 'lucide-react'

const facts = [
  { icon: Anchor, title: 'Veteran', text: 'Juan is a veteran, and his lures reflect that.' },
  { icon: Fish, title: 'South Texas Angler', text: 'Fishing is something Juan loves, and South Texas is home.' },
  { icon: Printer, title: '3D Printed', text: 'Every lure is a 3D printed piece that Juan makes himself.' },
]

export function MakerSection() {
  return (
    <section id="maker" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
      <div className="relative order-last aspect-[4/5] overflow-hidden rounded-xl md:order-first">
        <Image
          src="/images/coast.png"
          alt="An angler casting from a wooden pier on a calm South Texas bay at dawn"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">The Maker</p>
        <h2 className="text-balance font-serif text-4xl font-semibold leading-tight md:text-5xl">Juan Resendez</h2>
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          A veteran from South Texas who loves to fish. Juan wants every lure he makes to reflect that — a veteran, an
          angler, and a proud South Texan.
        </p>
        <ul className="mt-2 flex flex-col gap-5">
          {facts.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
