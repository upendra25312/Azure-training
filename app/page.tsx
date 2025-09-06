"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AccordionItem } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp, Book, CheckCircle2, GraduationCap, MoonStar, SunMedium, UsersRound } from "lucide-react";

export default function Page() {
  const [dark, setDark] = useState(false);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const d = stored ? stored === "dark" : prefers;
    setDark(d);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <header className="sticky top-0 z-50 bg-neutral-50/80 dark:bg-neutral-900/60 backdrop-blur-md border-b border-black/10 dark:border-white/10">
        <div className="container-max flex items-center justify-between py-3">
          <Link href="#" className="font-semibold tracking-wide text-primary">YourBrand</Link>
          <nav className="hidden md:flex gap-5 text-sm">
            {["Overview","Courses","Schedule","Trainer","Outcomes","FAQs","Enroll"].map((id)=> (
              <a key={id} className="opacity-80 hover:opacity-100" href={`#${id.toLowerCase()}`}>{id}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={()=>setDark(!dark)} aria-label="Toggle dark mode">
              {dark ? <SunMedium className="size-4" /> : <MoonStar className="size-4" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>

      <section className="gradient-hero section">
        <div className="container-max grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl leading-tight mb-4">Master Microsoft Azure — Learn by Building</h1>
            <p className="text-lg opacity-90 mb-6">Weekend cohorts • Hands-on labs • Certification prep (AZ-900, AZ-104, AZ-305, AZ-700)</p>
            <div className="flex flex-wrap gap-3">
              <Link href="https://azure.microsoft.com/en-in/free/" target="_blank" rel="noopener noreferrer"><Button>Start Free Azure Trial</Button></Link>
              <Link href="/curriculum.pdf" target="_blank" rel="noopener noreferrer"><Button variant="secondary">Download Curriculum (PDF)</Button></Link>
              <Link href="https://techcommunity.microsoft.com/category/azure" target="_blank" rel="noopener noreferrer"><Button variant="outline">Join Community</Button></Link>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {icon: <GraduationCap className="size-5"/>, label: "Hands-on Labs"},
                {icon: <Book className="size-5"/>, label: "Real Projects"},
                {icon: <UsersRound className="size-5"/>, label: "Doubt Support"},
                {icon: <CheckCircle2 className="size-5"/>, label: "Job-ready"},
              ].map((f,i)=> (
                <Card key={i} className="p-4">
                  <div className="flex items-center gap-2">{f.icon}<span>{f.label}</span></div>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="glass p-6">
              <h3 className="font-medium mb-2">What you’ll build</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Storage + Functions mini app</li>
                <li>• App Service + Database deployment</li>
                <li>• VNet + Private Endpoint demo</li>
              </ul>
              <Image className="mt-6 rounded-xl border border-black/10 dark:border-white/10" src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c37bbce-f05f-4562-8b59-dfbcde93bb40/Microsoft_Azure_Training_classes_by_Upendra.png" alt="Azure Training illustrative" width={800} height={450} />
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="section">
        <div className="container-max grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {t:"Learn-by-doing", d:"Guided labs and code-alongs—ship real Azure resources."},
            {t:"Certification-first", d:"Structured prep for AZ-900, AZ-104, AZ-305, AZ-700."},
            {t:"Weekend-friendly", d:"Live online, designed for working professionals."},
            {t:"Community", d:"Stay accountable with peers, mentors, and meetups."}
          ].map((b,i)=> (
            <Card key={i}>
              <CardTitle>{b.t}</CardTitle>
              <CardDescription className="mt-2">{b.d}</CardDescription>
            </Card>
          ))}
        </div>
      </section>

      <section id="courses" className="section bg-neutral-100 dark:bg-neutral-950">
        <div className="container-max">
          <h2 className="font-serif text-3xl mb-6">Courses</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {t:"AZ-900: Fundamentals", url:"https://learn.microsoft.com/en-us/certifications/exams/az-900/", badge:"Beginner", one:"Cloud basics & services"},
              {t:"AZ-104: Administrator", url:"https://learn.microsoft.com/en-us/certifications/exams/az-104/", badge:"Associate", one:"Manage core Azure workloads"},
              {t:"AZ-305: Architect", url:"https://learn.microsoft.com/en-us/certifications/exams/az-305/", badge:"Architect", one:"Design secure, scalable solutions"},
              {t:"AZ-700: Network Engineer", url:"https://www.learn.microsoft.com/en-us/credentials/certifications/azure-network-engineer-associate/?practice-assessment-type=certification", badge:"Network", one:"Design & implement networking"}
            ].map((c,i)=> (
              <Card key={i}>
                <div className="flex items-center justify-between">
                  <CardTitle>{c.t}</CardTitle>
                  <Badge>{c.badge}</Badge>
                </div>
                <CardDescription className="mt-2">{c.one}</CardDescription>
                <Link href={c.url} target="_blank" rel="noopener noreferrer"><Button className="mt-4">Syllabus</Button></Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="section">
        <div className="container-max grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-serif text-3xl mb-4">Schedule & Pricing</h2>
            <p className="text-lg">Weekend Cohort: <strong>Sat–Sun, 8–11 AM IST</strong></p>
            <p className="text-lg">Total Fee: <strong>₹20,000</strong></p>
            <p className="opacity-80 mt-2">Live online • Capstone + mocks • Community support</p>
          </div>
          <div className="glass p-6">
            <p className="text-sm opacity-80"><em>Note:</em> If you see any difference between schedule notes across sections, the cohort email will confirm the final timing.</p>
          </div>
        </div>
      </section>

      <section id="trainer" className="section bg-neutral-100 dark:bg-neutral-950">
        <div className="container-max grid md:grid-cols-2 gap-8 items-start">
          <div className="glass p-6 flex gap-4 items-center">
            <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center font-serif text-xl">UK</div>
            <div>
              <h3 className="font-medium text-xl">Trainer: Upendra Kumar</h3>
              <p className="opacity-80 text-sm">Cloud architect & instructor with hands-on Azure delivery experience. Focus on practical labs and exam outcomes.</p>
              <div className="flex gap-3 mt-3">
                <Link href="https://www.credly.com/" target="_blank" rel="noopener noreferrer"><Button variant="outline">Credly Badges</Button></Link>
                <Link href="https://learn.microsoft.com/" target="_blank" rel="noopener noreferrer"><Button variant="outline">Microsoft Transcript</Button></Link>
                <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><Button variant="outline">LinkedIn</Button></Link>
              </div>
            </div>
          </div>
          <div className="glass p-6" id="outcomes">
            <h4 className="font-medium mb-2">Outcomes</h4>
            <ul className="space-y-2">
              {["Real Azure deployments (Storage, Functions, AKS basics)","Certification prep & practice tests","Portfolio-ready labs & templates","Interview guidance"].map((o,i)=>(
                <li key={i} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-primary"/>{o}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="faqs" className="section">
        <div className="container-max max-w-3xl">
          <h2 className="font-serif text-3xl mb-6">FAQs</h2>
          <div className="glass p-4">
            {[
              {q:"Do I need prior cloud experience?", a:"No. AZ-900 covers fundamentals, and we ease you into hands-on labs."},
              {q:"Will I get lab access?", a:"Yes. We use free-tier Azure resources and sandbox scenarios wherever possible."},
              {q:"Are sessions recorded?", a:"Recordings are provided subject to policy; live participation is encouraged."},
              {q:"Do you provide an invoice?", a:"Yes, on request after enrollment."},
              {q:"What if I miss a class?", a:"We share notes and pointers; you can join the next cohort’s matching session."},
              {q:"Refund policy?", a:"Full refund before cohort start; thereafter pro-rated case-by-case."}
            ].map((f,i)=>(<AccordionItem key={i} q={f.q} a={f.a}/>))}
          </div>
        </div>
      </section>

      <section id="enroll" className="section bg-neutral-100 dark:bg-neutral-950">
        <div className="container-max grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="font-serif text-3xl mb-3">Enroll</h2>
            <p className="opacity-80">We’ll confirm your slot within 24h.</p>
            <form className="mt-4 grid gap-3" onSubmit={(e)=>e.preventDefault()}>
              <Input placeholder="Name" required/>
              <Input type="email" placeholder="Email" required/>
              <Input placeholder="WhatsApp number" required/>
              <select className="h-11 rounded-xl border border-black/20 dark:border-white/20 bg-white/80 dark:bg-white/10 px-3 text-sm">
                <option>AZ-900</option><option>AZ-104</option><option>AZ-305</option><option>AZ-700</option>
              </select>
              <Textarea placeholder="Any notes (optional)" />
              <div className="flex gap-3">
                <Link href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer"><Button>Fill Intake Form</Button></Link>
                <Link href="mailto:trainer@example.com"><Button variant="outline">Email us</Button></Link>
              </div>
            </form>
          </div>
          <div className="glass p-6">
            <h4 className="font-medium mb-2">Payment</h4>
            <p className="text-sm opacity-80">Total Fee: ₹20,000 • Live online</p>
            <div className="mt-3">
              <p className="text-sm">UPI ID: <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded">trainer@upi</code>
                <button className="ml-2 underline" onClick={()=>navigator.clipboard.writeText("trainer@upi")}>Copy</button>
              </p>
              <p className="text-xs opacity-70 mt-2">After payment, email the screenshot or attach it in the intake form.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="section pt-10">
        <div className="container-max text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="opacity-70">© {new Date().getFullYear()} YourBrand</p>
          <div className="flex gap-4 opacity-80">
            <Link href="#" className="hover:underline">Privacy</Link>
            <Link href="#" className="hover:underline">Terms</Link>
            <Link href="#" className="hover:underline">Contact</Link>
          </div>
          <p className="opacity-60 text-xs">All trademarks belong to their owners. Educational use only.</p>
        </div>
      </footer>

      {showTop && (
        <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg" aria-label="Back to top">
          <ArrowUp className="size-5"/>
        </button>
      )}
    </main>
  );
}