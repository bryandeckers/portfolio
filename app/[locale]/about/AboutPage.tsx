"use client";
import PageHeader from "@/components/PageHeader";
import { Icon } from "@iconify/react";
import { Link } from '@/i18n/routing';
import myself2 from "@/public/images/myself2.jpeg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AboutPage = () => {
  const t = useTranslations('AboutPage');
  return (
    <main className="container mt-40 mb-5">
      <PageHeader title={t('about')} />

      <section className="">
        <div className="flex justify-between mb-10 gap-20">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col justify-between mb-5">
              <div className="mb-5">
                <p dangerouslySetInnerHTML={{ __html: t.raw('aboutpart1') }}></p>
                <p className="mt-5" dangerouslySetInnerHTML={{ __html: t.raw('aboutpart2') }}></p>
                <p className="mt-5" dangerouslySetInnerHTML={{ __html: t.raw('aboutpart3') }}></p>
                <p className="mt-5" dangerouslySetInnerHTML={{ __html: t.raw('aboutpart4') }}></p>
              </div>
              <div className="flex flex-col lg:flex-row gap-5 items-center">
                <Link
                  href="/CVBryanDeckers.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-customblack text-white px-4 py-2 rounded-md"
                >
                  {t('downloadresume')}
                </Link>
                <Link
                  href="/contact"
                  className="bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                  {t('contact')}
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <Image
              src={myself2}
              alt="Image of myself on the landing page"
              priority={true}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-40 mb-10">
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold mt-20 mb-3">{t('education')}</h2>
          <p>{t('educationexperience')}</p>
          <div className="flex flex-col gap-10 mt-5">
            <div className="border px-4 py-6 rounded-lg">
              <p className="text-xl font-semibold">
                {t('education1title')}
              </p>
              <p className="text-gray-500 mt-3 mb-5">
                {t('education1time')}
              </p>
              <p>
                {t('education1description')}
              </p>
              <p className="mt-3">
                These projects were for real clients or companies some of which are featured
                in my{" "}
                <Link href="/projects" className="hover:underline text-blue-500">
                  projects
                </Link>{" "}
                page
              </p>
            </div>

            <div className="border px-4 py-6 rounded-lg mb-5">
              <p className="text-xl font-semibold">
                {t('education2title')}
              </p>
              <p className="text-gray-500 mt-3 mb-5">
                {t('education2time')}
              </p>
              <p>{t('education2description')}</p>
              <p>
                My thesis is still featured on their{" "}
                <Link
                  href="https://www.handelsschoolhasselt.be/nl/studie/5-6-applicatie-en-databeheer"
                  target="_blank"
                  className="hover:underline text-blue-500"
                >
                  website
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <h2 className="text-2xl font-semibold mt-10 lg:mt-20 mb-3">{t('work')}</h2>
          <p>{t('workexperience')}</p>
          <div className="flex flex-col gap-10 mt-5">
            <div className="border px-4 py-6 rounded-lg">
              <p className="text-xl font-semibold">
                {t('work1title')}
              </p>
              <p className="text-gray-500 mt-3 mb-5">
                {t('work1time')}
              </p>
              <p>{t('work1description1')}</p>
              <p className="mt-3">{t('work1description2')}</p>
              <p className="mt-3">Projects for non-profit organizations, small and large companies, examples can be <Link href="/projects" className="text-blue-500">here</Link></p>
            </div>

            <div className="border px-4 py-6 rounded-lg mb-5">
              <p className="text-xl font-semibold">
                {t('work2title')}
              </p>
              <p className="text-gray-500 mt-3 mb-5">
                {t('work2time')}
              </p>
              <p>{t('work2description1')}</p>
              <p>{t('work2description2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="mt-10">
        <div className="flex flex-col lg:flex-row gap-14 mb-20 lg:mb-5">
          <div className="flex gap-5 items-center justify-center md:justify-normal">
            <p className="text-lg font-bold">{t('tech')}</p>
            <p className="text-2xl hidden md:block">|</p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-14 justify-center md:justify-start items-center">
            <Icon icon="devicon:nextjs-wordmark" className="text-7xl" />
            <Icon icon="devicon:tailwindcss" className="text-5xl" />
            <Icon icon="devicon:react" className="text-4xl" />
            <Icon icon="devicon:javascript" className="text-4xl" />
            <Icon icon="devicon:typescript" className="text-4xl" />
            <Icon icon="devicon:laravel" className="text-4xl" />
            <Icon icon="devicon:python" className="text-4xl" />
            <Icon icon="devicon:html5" className="text-4xl" />
            <Icon icon="devicon:css3" className="text-4xl" />
            <Icon icon="devicon:prisma" className="text-4xl" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-14 mb-20 lg:mb-5">
          <div className="flex gap-5 items-center justify-center md:justify-normal">
            <p className="text-lg font-bold">{t('tools')}</p>
            <p className="text-2xl hidden md:block">|</p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-14 justify-center md:justify-start items-center">
            <Icon icon="devicon:figma" className="text-4xl" />
            <Icon icon="devicon:vscode" className="text-4xl" />
            <Icon icon="devicon:git" className="text-4xl" />
            <Icon icon="devicon:github" className="text-4xl" />
            <Icon icon="devicon:postman" className="text-4xl" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-14 mb-20 lg:mb-5">
          <div className="flex gap-5 items-center justify-center md:justify-normal">
            <p className="text-lg font-bold">{t('database')}</p>
            <p className="text-2xl hidden md:block">|</p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-14 justify-center md:justify-start items-center">
            <Icon icon="devicon:mysql" className="text-4xl" />
            <Icon icon="devicon:sqlite" className="text-4xl" />
            <Icon icon="devicon:postgresql" className="text-4xl" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
