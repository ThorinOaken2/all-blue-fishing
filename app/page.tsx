import { Hero } from '@/components/hero'
import { MakerSection } from '@/components/maker-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { StorySection } from '@/components/story-section'
import { WhySection } from '@/components/why-section'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StorySection />
        <MakerSection />
        <WhySection />
      </main>
      <SiteFooter />
    </>
  )
}
