"use client";

import Image from "next/image";
import avatar from "../../public/images/avater.png";
import clientImg from "../../public/images/client.png";
import globe from "../../public/images/globe.png";
import Category from "~/components/Category";
import EmployerCard from "~/components/EmpolyerCard";
import FeaturedJobs from "~/components/featuredJobs";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import { useState, useRef, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { joblistings, partners, categories } from "~/data/data";
export default function Home() {
  const visibleProfiles = joblistings.map((job) => ({ profile: job.profile }));
  const [selectedJobs, setSelectedJobs] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showAllProfiles, setShowAllProfiles] = useState(false);
  const jobsPerPage = 6;
  const profilesToShow = showAllProfiles
    ? visibleProfiles
    : visibleProfiles.slice(0, 6);

  const filteredJobs = joblistings.filter(
    (job) => selectedJobs === null || job.profile === selectedJobs,
  );

  const paginatedJobs = filteredJobs.slice(
    currentPage * jobsPerPage,
    (currentPage + 1) * jobsPerPage,
  );

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current as HTMLElement | null;
    if (!scrollContainer) return;

    const slide = () => {
      if (scrollContainer && window.innerWidth < 1024) {
        // Auto-scroll only on mobile
        scrollContainer.scrollBy({ left: 200, behavior: "smooth" });

        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          setTimeout(() => {
            scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
          }, 2000);
        }
      }
    };

    const slideInterval = setInterval(slide, 2000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gray-50">
      <Navbar />

      <header className="mt-16 flex flex-col items-center justify-between bg-rose-50 p-20 transition-all duration-300 md:mt-20 md:flex-row">
        <div className="max-w-lg md:text-left">
          <h1 className="tex-2xl font-bold text-gray-900 transition-all duration-300 md:text-5xl">
            Find The Job That Fits Your Life
          </h1>
          <p className="mt-4 text-gray-600">
            Resume-Library is a true performance-based job board. Enjoy custom
            hiring products and access to up to 10,000 new resume registrations
            daily, with no subscriptions or user licenses.
          </p>
        </div>
        <div className="relative mt-6 md:mt-0">
          <Image
            src={avatar}
            alt="Happy Candidate"
            width={400}
            height={400}
            className="transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute left-8 top-40 flex animate-bounce items-center space-x-2 rounded-full bg-white p-2 shadow-md">
            <Image
              src={clientImg}
              alt="User"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-semibold text-green-600">
              480+ Happy Candidates
            </span>
          </div>
        </div>
      </header>

      <section className="Partners bg-gray-800 p-12 text-white">
        <div className="text-center">
          <h1 className="pb-6 text-2xl font-bold leading-[28px] md:text-3xl">
            Over 100,000 recruiters use My portal to modernize their hiring.
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-28 transition-transform duration-300 hover:scale-110 md:w-40"
            >
              <Image src={partner} alt="Partner Logo" width={150} height={50} />
            </div>
          ))}
        </div>
      </section>

      <section className="category bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Browse by Categories
          </h2>

          {/* Mobile View: Horizontal Scroll */}
          <div
            ref={scrollRef}
            className="scrollbar-hide flex w-96 flex-shrink-0 gap-4 overflow-x-auto scroll-smooth sm:w-auto lg:hidden"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {categories.map((category, index) => (
              <Category key={index} A={category} />
            ))}
          </div>

          {/* Desktop View: Grid Layout */}
          <div className="hidden grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-5">
            {categories.map((category, index) => (
              <Category key={index} A={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="Featured-jobs bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Featured Jobs
          </h2>
          <p className="text-md mb-8 text-center text-gray-900">
            Find the right career opportunity for you
          </p>

          {/* Profile Selection Buttons */}
          <div className="flex flex-wrap justify-center gap-2 text-center">
            {profilesToShow.map((JobProfile: { profile: string }, index) => (
              <button
                key={`${JobProfile.profile}-${index}`}
                className={`rounded-full border border-gray-300 px-5 py-2 font-medium transition-all ${
                  selectedJobs === JobProfile.profile
                    ? "bg-green-600 text-white"
                    : "text-gray-900 hover:bg-gray-800 hover:text-white"
                }`}
                onClick={() =>
                  setSelectedJobs(
                    selectedJobs === JobProfile.profile
                      ? null
                      : JobProfile.profile,
                  )
                }
              >
                {JobProfile.profile}
              </button>
            ))}

            {/* More / Show Less Button */}
            {visibleProfiles.length > 6 && (
              <button
                className="rounded-full border border-gray-300 px-5 py-2 font-medium text-gray-900 transition-all hover:bg-gray-800 hover:text-white"
                onClick={() => setShowAllProfiles(!showAllProfiles)}
              >
                {showAllProfiles ? "Show Less ▲" : "More ▼"}
              </button>
            )}
          </div>

          {/* Filtered Job List */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:gap-10">
            {paginatedJobs.map((details, index) => (
              <FeaturedJobs key={index} job={details} />
            ))}
          </div>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="mt-6 flex justify-center space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`h-4 w-4 rounded-full border-2 ${
                    index === currentPage ? "bg-gray-900" : "border-gray-500"
                  }`}
                  onClick={() => setCurrentPage(index)}
                ></button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="Featured-jobs">
        <div className="flex flex-col items-center justify-between p-10 md:flex-row">
          {/* Left Section with World Map and Stats */}
          <div className="relative flex w-full justify-center md:w-1/2">
            <div className="relative flex h-96 w-96 items-center justify-center rounded-full">
              {/* <Globe className="w-48 h-48 text-gray-400" /> */}
              <Image src={globe} alt="" width={500} height={500}></Image>
            </div>
            {/* Floating Stats */}
            <div className="absolute left-5 top-10 rounded-xl p-3 shadow-lg">
              <p className="text-xl font-bold">198+</p>
              <p className="text-sm text-gray-500">Countries</p>
            </div>
            <div className="absolute bottom-10 left-10 rounded-xl bg-white p-3 shadow-lg">
              <p className="text-xl font-bold">1 million+</p>
              <p className="text-sm text-gray-500">Candidates</p>
            </div>
            <div className="absolute bottom-40 left-40 rounded-xl bg-white p-3 shadow-lg">
              <p className="text-xl font-bold">350k</p>
              <p className="text-sm text-gray-500">Job Search Success</p>
            </div>
          </div>

          {/* Right Section with Text and Features */}
          <div className="mt-10 w-full md:mt-0 md:w-1/2 md:pl-10">
            <h2 className="mb-4 text-3xl font-bold">
              Get the job that&apos;s right for you
            </h2>
            <p className="mb-6 text-gray-600">
              Search millions of jobs and get the inside scoop on companies with
              employee reviews, personalized salary tools, and more.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-green-500" /> Access to
                millions of job seekers
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-green-500" /> Only pay for the
                candidates you want to contact
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-green-500" /> Post unlimited
                jobs for free—all from one place
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-green-500" /> Premium job
                placement on SimplyHired, Indeed, & over 100 job sites
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-green-500" /> Hiring solutions
                & pricing that works with seasonal hiring changes
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="employers bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Top Employers</h2>
        <p className="text-md mb-8 text-gray-900">
          Showing companies based on reviews and recent job openings
        </p>

        {/* Mobile View: Auto Scrolling */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide lg:hidden min-w-full"
          style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
        >
          {joblistings.map((details, index) => (
            <EmployerCard key={index} {...details} />
          ))}
        </div>

        {/* Desktop View: Grid Layout */}
        <div className="hidden lg:grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {joblistings.map((details, index) => (
            <EmployerCard key={index} {...details} />
          ))}
        </div>
      </div>
    </section>
      <Footer />
    </div>
  );
}
