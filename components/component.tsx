import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { ConstructionIcon, TypeIcon, CodeIcon } from 'lucide-react'

export function Component() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Elevate Your Product with Our Expertise
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Our team of seasoned designers and developers are here to transform your ideas into exceptional
                  digital products.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
            <Image
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="services">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Crafting Exceptional Digital Experiences
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                From ideation to deployment, our team of experts will guide you through every step of the product
                development process.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <ConstructionIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-xl font-bold">UI/UX Design</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Crafting visually stunning and intuitive user interfaces.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <TypeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-xl font-bold">Prototyping</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Bringing your ideas to life with interactive prototypes.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <CodeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-xl font-bold">Full-stack Development</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Delivering scalable and performant web applications.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Work</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Showcasing Our Craft</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Take a look at some of the exceptional digital products we&apos;ve created for our clients.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-1">
              <Image
                alt="Project 1"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <h3 className="text-xl font-bold">Project 1</h3>
              <p className="text-gray-500 dark:text-gray-400">
                A modern and responsive web application for a leading e-commerce brand.
              </p>
            </div>
            <div className="grid gap-1">
              <Image
                alt="Project 2"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <h3 className="text-xl font-bold">Project 2</h3>
              <p className="text-gray-500 dark:text-gray-400">
                A sleek and intuitive mobile app for a fitness-focused startup.
              </p>
            </div>
            <div className="grid gap-1">
              <Image
                alt="Project 3"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <h3 className="text-xl font-bold">Project 3</h3>
              <p className="text-gray-500 dark:text-gray-400">
                A feature-rich web platform for a leading SaaS company.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="testimonials">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from the satisfied clients who have trusted us to deliver exceptional digital products.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-1">
              <div className="flex items-start gap-4">
                <Image
                  alt="Client 1"
                  className="rounded-full"
                  height="64"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width="64"
                />
                <div>
                  <p className="text-lg font-bold">John Doe</p>
                  <p className="text-gray-500 dark:text-gray-400">CEO, Acme Inc.</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                &quot;The team at Acme Product Development delivered an exceptional product that has transformed our
                business. Their attention to detail and commitment to excellence is unparalleled.&quot;
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-start gap-4">
                <Image
                  alt="Client 2"
                  className="rounded-full"
                  height="64"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width="64"
                />
                <div>
                  <p className="text-lg font-bold">Jane Smith</p>
                  <p className="text-gray-500 dark:text-gray-400">CTO, Startup X</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                &quot;Working with Acme Product Development was a game-changer for us. Their team&apos;s expertise and
                collaborative approach helped us bring our vision to life in a way that exceeded our expectations.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Get in Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let&apos;s Discuss Your Project</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Fill out the form below or schedule a call to learn how we can help bring your product vision to life.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md space-y-2 pt-8">
            <form className="flex flex-col gap-4">
              <Input className="w-full" placeholder="Name" type="text" />
              <Input className="w-full" placeholder="Email" type="email" />
              <Textarea className="w-full" placeholder="Message" />
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
