import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Menu, X, ChevronRight, BookOpen, GraduationCap, Newspaper, Users, ArrowRight } from 'lucide-react'

function useToggle(initial = false) {
  const [open, setOpen] = React.useState(initial)
  const toggle = () => setOpen((o) => !o)
  const close = () => setOpen(false)
  return { open, toggle, close }
}

const navItems = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Profil', href: '#profil' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Berita', href: '#berita' },
  { label: 'Kontak', href: '#kontak' },
]

function Navbar() {
  const mobile = useToggle(false)
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#beranda" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 shadow-lg shadow-red-500/30" />
              <div className="leading-tight">
                <p className="text-white font-semibold tracking-wide">Disdik Semarang Kab.</p>
                <p className="text-xs text-white/70">Dinas Pendidikan Kabupaten Semarang</p>
              </div>
            </a>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#layanan" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/30">
                Portal Layanan
                <ChevronRight size={16} />
              </a>
            </div>
            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white" onClick={mobile.toggle} aria-label="Toggle Menu">
              {mobile.open ? <X /> : <Menu />}
            </button>
          </div>
          {mobile.open && (
            <div className="md:hidden px-4 pb-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={mobile.close} className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white">
                    {item.label}
                  </a>
                ))}
                <a href="#layanan" onClick={mobile.close} className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/30">
                  Portal Layanan
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="beranda" className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">{/* 3D Background */}
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradient for red/orange vibe */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,80,80,0.35),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(255,140,66,0.35),transparent_35%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-400" />
          Modernisasi Layanan Pendidikan Kabupaten Semarang
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Menuju Pendidikan Berkelas Dunia
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Website resmi Dinas Pendidikan Kabupaten Semarang dengan tampilan baru yang lebih modern, ringan, dan informatif. Jelajahi informasi, layanan, dan berita terbaru.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#layanan" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-white shadow-lg shadow-red-500/30">
            Jelajahi Layanan
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
          </a>
          <a href="#berita" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/15">
            Lihat Berita
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: 'Sekolah', v: '800+' },
            { k: 'Guru', v: '12k+' },
            { k: 'Siswa', v: '150k+' },
            { k: 'Layanan', v: '25+' },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
              <p className="text-xl font-bold text-white">{s.v}</p>
              <p className="text-xs">{s.k}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 text-white/90 shadow-sm">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/30">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 group-hover:gap-3 transition-all">
        Selengkapnya <ChevronRight size={16} />
      </div>
    </motion.div>
  )
}

function Services() {
  const items = [
    { icon: GraduationCap, title: 'Data Pendidikan', desc: 'Statistik sekolah, guru, dan siswa yang terintegrasi dan akurat.' },
    { icon: BookOpen, title: 'Program & Kurikulum', desc: 'Informasi program, kurikulum, dan peningkatan mutu pendidikan.' },
    { icon: Users, title: 'Layanan Masyarakat', desc: 'Pengajuan layanan, pengaduan, dan konsultasi secara online.' },
    { icon: Newspaper, title: 'Berita & Pengumuman', desc: 'Update kegiatan, pengumuman resmi, dan liputan terkini.' },
  ]
  return (
    <section id="layanan" className="relative z-10 bg-[#0b0c10] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,80,80,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-white sm:text-4xl">
            Layanan Utama
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-2 text-white/70">
            Akses cepat ke fitur penting untuk sekolah, guru, orang tua, dan masyarakat.
          </motion.p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <FeatureCard key={it.title} icon={it.icon} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function News() {
  const news = [
    { title: 'Peluncuran Portal Layanan Terpadu', date: '10 Nov 2025', tag: 'Pengumuman' },
    { title: 'Workshop Kurikulum Merdeka 2025', date: '03 Nov 2025', tag: 'Kegiatan' },
    { title: 'Seleksi Guru Berprestasi Kabupaten', date: '25 Okt 2025', tag: 'Informasi' },
  ]
  return (
    <section id="berita" className="relative z-10 bg-[#0b0c10] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,140,66,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Berita Terbaru</h2>
            <p className="mt-2 text-white/70">Rangkuman informasi dan aktivitas terbaru kami.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">
            Arsip Berita <ChevronRight size={16} />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => (
            <motion.article key={n.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="h-32 bg-gradient-to-br from-red-500/40 to-orange-500/40" />
              <div className="p-5">
                <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white/80">{n.tag}</span>
                <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-white group-hover:text-white">{n.title}</h3>
                <p className="mt-1 text-xs text-white/60">{n.date}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/80">
                  Baca selengkapnya <ChevronRight size={16} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="kontak" className="relative bg-[#0a0b0e]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,80,80,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 shadow-lg shadow-red-500/30" />
              <div className="leading-tight">
                <p className="text-white font-semibold tracking-wide">Disdik Semarang Kab.</p>
                <p className="text-xs text-white/70">Dinas Pendidikan Kabupaten Semarang</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Berkomitmen pada pelayanan prima, transparansi, dan peningkatan kualitas pendidikan di Kabupaten Semarang.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Tautan</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#profil" className="hover:text-white">Profil</a></li>
              <li><a href="#layanan" className="hover:text-white">Layanan</a></li>
              <li><a href="#berita" className="hover:text-white">Berita</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Kontak</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Jl. Contoh No. 123, Ungaran</li>
              <li>Email: disdik@semarangkab.go.id</li>
              <li>Telepon: (024) 123-456</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Ikuti Kami</h4>
            <p className="mt-3 text-sm text-white/70">Media sosial resmi untuk info cepat dan akurat.</p>
            <div className="mt-3 flex items-center gap-2">
              <a href="#" className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/15">Facebook</a>
              <a href="#" className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/15">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Dinas Pendidikan Kabupaten Semarang. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0c10]">
      <Navbar />
      <Hero />
      <Services />
      <News />
      <Footer />
    </div>
  )
}
