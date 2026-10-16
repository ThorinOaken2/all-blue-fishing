function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

const socials = [
  {
    href: 'https://youtube.com/@TheAllBlue_Piece',
    label: 'YouTube',
    handle: '@TheAllBlue_Piece',
    Icon: YouTubeIcon,
  },
  {
    href: 'https://instagram.com/theallbluefishingchronicles',
    label: 'Instagram',
    handle: '@theallbluefishingchronicles',
    Icon: InstagramIcon,
  },
  {
    href: 'https://instagram.com/theallbluefishinglures',
    label: 'Instagram',
    handle: '@theallbluefishinglures',
    Icon: InstagramIcon,
  },
]

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-3">
      {socials.map(({ href, label, handle, Icon }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Icon className="size-5 text-primary" />
            <span>{handle}</span>
            <span className="sr-only">{`on ${label}`}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export function SocialIcons() {
  return (
    <ul className="flex items-center gap-1">
      {socials.map(({ href, label, handle, Icon }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${handle} on ${label}`}
            className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            <Icon className="size-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  )
}
