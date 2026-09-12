import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Clock3, Headphones, Menu, ShieldCheck } from "lucide-react";

import heroImage from "../assets/industrial-hero.jpg";
import pipesImage from "../assets/industrial-pipes.jpg";
import factoryImage from "../assets/solution-factory.jpg";
import warehouseImage from "../assets/solution-warehouse.jpg";
import labImage from "../assets/solution-lab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexora Systems — Teknik dan Logistik Industri" },
      { name: "description", content: "Sistem teknik, peralatan, dan logistik terintegrasi untuk fasilitas industri Indonesia." },
      { property: "og:title", content: "Nexora Systems — Teknik dan Logistik Industri" },
      { property: "og:description", content: "Solusi menyeluruh untuk pabrik, gudang, klinik, dan laboratorium." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const solutions = [
  {
    number: "01",
    title: "Untuk fasilitas produksi",
    description: "Peralatan teknologi, sistem teknik, dan otomasi untuk proses manufaktur.",
    image: factoryImage,
    alt: "Lengan robot otomatis di fasilitas produksi",
  },
  {
    number: "02",
    title: "Untuk kompleks pergudangan",
    description: "Sistem penyimpanan, perlengkapan, dan integrasi logistik yang terukur.",
    image: warehouseImage,
    alt: "Lorong rak tinggi di gudang modern",
  },
  {
    number: "03",
    title: "Untuk klinik dan laboratorium",
    description: "Peralatan khusus dan sistem pendukung untuk fasilitas medis serta riset.",
    image: labImage,
    alt: "Laboratorium modern dengan peralatan presisi",
  },
];

const stages = [
  ["01", "Analisis kebutuhan", "Mempelajari target, proses, dan kondisi fasilitas untuk memahami kebutuhan utama."],
  ["02", "Pemilihan solusi", "Menawarkan sistem teknis dan peralatan yang sesuai dengan proyek Anda."],
  ["03", "Pengadaan dan instalasi", "Mengatur logistik, pengiriman, pemasangan, dan commissioning seluruh sistem."],
  ["04", "Layanan dan dukungan", "Menjaga operasional melalui servis dan pemeliharaan sepanjang siklus kerja."],
];

function Brand() {
  return (
    <a href="#top" className="flex shrink-0 items-center gap-3" aria-label="Vector Systems, kembali ke atas">
      <span className="brand-mark" aria-hidden="true">V</span>
      <span className="logo-name uppercase">
        Vector<br /><span className="logo-sublabel">Systems</span>
      </span>
    </a>
  );
}

function ArrowLink({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <a href="#contact" className={light ? "action-link action-link-light" : "action-link action-link-primary"}>
      <span>{children}</span><ArrowRight aria-hidden="true" />
    </a>
  );
}

function Index() {
  return (
    <main id="top" className="overflow-hidden bg-background text-foreground">
      <section className="hero-shell relative min-h-[650px] lg:min-h-[760px]">
        <img src={heroImage} alt="Fasilitas produksi modern dengan mesin industri" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-shade absolute inset-0" />
        <header className="relative z-10 mx-auto grid max-w-[1480px] grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-6 py-7 text-hero-foreground md:px-12 lg:grid-cols-[auto_1fr_auto]">
          <Brand />
          <nav className="nav-links hidden min-w-0 items-center justify-center gap-8 lg:flex" aria-label="Navigasi utama">
            <a href="#solutions">Solusi</a><a href="#industries">Industri</a><a href="#stages">Tahapan</a>
            <a href="#service">Layanan</a><a href="#about">Tentang kami</a><a href="#contact">Kontak</a>
          </nav>
          <a href="#contact" className="button-label hidden items-center gap-8 rounded-sm bg-primary px-6 py-3 text-primary-foreground lg:flex">Diskusikan proyek <ArrowRight size={15} /></a>
          <a href="#solutions" aria-label="Buka menu" className="grid size-10 place-items-center border border-hero-foreground/25 lg:hidden"><Menu size={20} /></a>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[550px] max-w-[1480px] items-end px-6 pb-14 md:px-12 lg:min-h-[650px] lg:pb-20">
          <div className="max-w-[700px] text-hero-foreground">
            <h1 className="hero-title">Teknik, layanan,<br />dan logistik<br />dalam satu proses</h1>
            <p className="hero-body mt-7 max-w-[490px] text-hero-foreground/78">Kami menyediakan sistem teknik dan peralatan untuk fasilitas komersial dan industri. Andal. Tepat waktu. Dengan satu pihak yang bertanggung jawab.</p>
            <div className="mt-8 flex flex-wrap gap-4"><ArrowLink>Diskusikan proyek</ArrowLink><ArrowLink light>Lihat solusi</ArrowLink></div>
          </div>
        </div>
        <a href="#about" aria-label="Gulir ke bawah" className="absolute bottom-8 right-7 z-10 grid size-11 place-items-center rounded-full border border-hero-foreground/40 text-hero-foreground md:right-12"><ArrowDown size={18} /></a>
      </section>

      <section id="about" className="mx-auto grid max-w-[1480px] gap-12 px-6 py-20 md:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
        <div className="max-w-[570px]">
          <p className="eyebrow">Filosofi kami</p>
          <h2 className="philosophy-title mt-8">Menghadirkan sistem<br />yang dapat Anda<br />andalkan</h2>
          <p className="section-body mt-7 max-w-[540px] text-muted-foreground">Kami menyatukan keahlian teknik, peralatan berkualitas, logistik terencana, dan layanan dalam satu proses—mulai dari perancangan hingga pengoperasian tanpa gangguan.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="trust-item"><ShieldCheck /><span>Andal dan<br />berkualitas</span></div>
            <div className="trust-item"><Clock3 /><span>Tepat waktu<br />dan sesuai anggaran</span></div>
            <div className="trust-item"><Headphones /><span>Layanan di<br />setiap tahap</span></div>
          </div>
        </div>
        <img src={pipesImage} alt="Sistem perpipaan baja dengan katup biru" loading="lazy" width={1200} height={912} className="h-[420px] w-full rounded-[22px] object-cover lg:h-[500px]" />
      </section>

      <section id="solutions" className="mx-auto max-w-[1480px] px-6 pb-20 md:px-12 lg:pb-24">
        <p className="eyebrow mb-8">Solusi untuk industri</p>
        <div id="industries" className="grid gap-4 md:grid-cols-3">
          {solutions.map((solution) => (
            <article key={solution.number} className="solution-card group relative min-h-[510px] overflow-hidden rounded-[22px]">
              <img src={solution.image} alt={solution.alt} loading="lazy" width={800} height={1104} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
              <div className="solution-shade absolute inset-0" />
              <div className="relative flex h-full min-h-[510px] flex-col justify-end p-7 text-hero-foreground md:p-8">
                <span className="mb-auto text-sm font-medium">{solution.number}</span>
                <h3 className="card-title max-w-[290px]">{solution.title}</h3>
                <p className="card-description mt-3 max-w-[330px] text-hero-foreground/75">{solution.description}</p>
                <a href="#contact" aria-label={`Pelajari ${solution.title}`} className="mt-7 grid size-12 place-items-center rounded-full bg-background text-foreground"><ArrowRight size={19} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="stages" className="mx-auto max-w-[1480px] px-6 pb-16 md:px-12 lg:pb-20">
        <p className="eyebrow mb-8">Tahapan pengadaan</p>
        <div className="grid overflow-hidden rounded-[22px] border border-border md:grid-cols-2 lg:grid-cols-4">
          {stages.map(([number, title, copy], index) => (
            <article key={number} className={`stage p-7 lg:p-8 ${index ? "border-t border-border md:border-l md:border-t-0" : ""}`}>
              <div className="flex items-center justify-between text-muted-foreground"><span className="step-number">{number}</span><span className="grid size-8 place-items-center rounded-full bg-foreground text-background"><ArrowRight size={14} /></span></div>
              <h3 className="step-heading mt-7">{title}</h3>
              <p className="card-description mt-3 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="service" className="mx-auto max-w-[1480px] px-6 pb-16 md:px-12 lg:pb-20">
        <div id="contact" className="cta-panel grid items-center gap-8 rounded-[24px] bg-primary px-8 py-9 text-primary-foreground md:grid-cols-[1.1fr_1fr_auto] md:px-12">
          <h2 className="cta-title">Siap mendiskusikan<br />proyek Anda?</h2>
          <p className="card-description text-primary-foreground/75">Hubungi kami—kami akan memilih solusi yang tepat dan menyiapkan penawaran untuk kebutuhan Anda.</p>
          <a href="mailto:hello@nexorasystems.id" className="button-label flex items-center justify-between gap-10 rounded-sm bg-background px-7 py-4 text-foreground">Diskusikan proyek <ArrowRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}