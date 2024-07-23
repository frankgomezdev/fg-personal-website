import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpeg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Franklin Gomez</title>
        <meta
          name="description"
          content="I’m Franklin Gomez. I live in Boston, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I&apos;m Franklin Gomez, a passionate Software Engineer and AI Engineer.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                My journey into the world of tech began at the renowned full-stack bootcamp, 100Devs, where I honed my skills and discovered my love for crafting seamless digital experiences.
              </p>
              <p>
              Off the screen, I&apos;m an avid soccer enthusiast – you&apos;ll often find me cheering on both Real Madrid and Arsenal, fueling my competitive spirit. Baseball is another passion of mine, with the Red Sox holding a special place in my heart.
              </p>
              <p>
              When I&apos;m not coding or catching a game, I&apos;m immersed in the world of music production and DJing. I&apos;m on a thrilling journey of learning the art of mixing beats, and in my downtime, I indulge in manga and anime, transporting myself to captivating realms
              </p>
              <p>
              As for my aspirations, I&apos;m <em>dedicated</em> to making the web a more inclusive space for everyone. Professionally, I&apos;m working towards the role of a Front-End Development Manager, while on a personal front, I&apos;m on track to make my dream of owning a home a reality within the next two years.
              </p>
              <p>
              Join me on this exciting ride as I blend technology, sports, music, and culture, all while striving to create a more accessible and dynamic digital landscape.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://github.com/frankgomezdev" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/fgomezj/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:franklingomezdev@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                franklingomezdev@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
