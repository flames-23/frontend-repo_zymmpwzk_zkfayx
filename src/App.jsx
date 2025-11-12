import React, { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Menu, X, Home, User, BadgeCheck, Package, Globe, Wrench, Phone, Instagram, Send, MessageCircle, Wallet, ShieldCheck, Cpu, Gamepad2, Star, Zap } from 'lucide-react'

const socials = [
  { label: 'WhatsApp', href: 'https://wa.me/6285706400133', icon: MessageCircle },
  { label: 'Telegram', href: 'https://t.me/VELLIX_AO', icon: Send },
  { label: 'Instagram', href: 'https://www.instagram.com/vellix_cc', icon: Instagram },
]

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skill', label: 'Skill', icon: BadgeCheck },
  { id: 'produk', label: 'Produk', icon: Package },
  { id: 'web', label: 'Web', icon: Globe },
  { id: 'service', label: 'Service', icon: Wrench },
  { id: 'contact', label: 'Contact', icon: Phone },
]

function useSmoothScroll() {
  React.useEffect(() => {
    const handler = (e) => {
      const target = e.target.closest('[data-scroll]')
      if (!target) return
      e.preventDefault()
      const id = target.getAttribute('data-scroll')
      const el = document.getElementById(id)
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])
}

export default function App() {
  useSmoothScroll()
  const [open, setOpen] = React.useState(false)

  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-zinc-100 selection:bg-orange-500/30 selection:text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-orange-500 to-amber-600 grid place-items-center shadow-lg shadow-orange-500/20">
                <Zap size={18} />
              </div>
              <span className="font-bold tracking-wide">VELLIXAO</span>
            </div>

            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  data-scroll={n.id}
                  className="px-3 py-2 rounded-md text-sm/none hover:text-white text-zinc-300 hover:bg-white/5 transition flex items-center gap-2"
                >
                  <n.icon size={16} /> {n.label}
                </a>
              ))}
            </nav>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-md hover:bg-white/5">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/5">
            <div className="px-4 py-2 grid">
              {navItems.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  data-scroll={n.id}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md text-sm hover:text-white text-zinc-300 hover:bg-white/5 transition flex items-center gap-2"
                >
                  <n.icon size={16} /> {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero with Spline */}
      <section id="home" className="relative min-h-[92vh] pt-24">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[70vh] flex flex-col items-start justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-amber-300 to-yellow-500">
                VELLIXAO
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-4 max-w-2xl text-zinc-300 text-lg"
            >
              Programmer • Desainer • Developer — membangun produk digital dengan sentuhan futuristik, performa tinggi, dan pengalaman 3D yang halus.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/10 transition">
                  <s.icon size={18} /> {s.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="Tentang Saya" subtitle="Siapa saya dan apa yang saya kerjakan">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <p className="text-zinc-300">
              Saya adalah pembuat produk digital yang fokus pada pengalaman visual 3D, animasi halus, dan desain antarmuka gelap berkelas. Saya menggabungkan estetika anime-futuristic dengan engineering yang rapi untuk menghadirkan website dan layanan digital yang powerful.
            </p>
            <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
              {[
                { icon: ShieldCheck, label: 'Keamanan & Stabilitas' },
                { icon: Cpu, label: 'Performa Tinggi' },
                { icon: Star, label: 'Desain Premium' },
              ].map((i) => (
                <li key={i.label} className="flex items-center gap-2 text-zinc-300"><i.icon size={16} className="text-amber-400" />{i.label}</li>
              ))}
            </ul>
          </Card>
          <Card className="relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-tr from-orange-500/20 via-amber-400/10 to-yellow-300/10 blur-2xl" />
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {new Array(4).fill(null).map((_, i) => (
                <div key={i} className="aspect-video rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 grid place-items-center text-zinc-400">
                  <span className="text-xs">Anime 3D • Visual {i + 1}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skill" title="Keahlian" subtitle="Teknologi dan kemampuan utama">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Frontend Futuristik', desc: 'React, Tailwind, Framer Motion, 3D Spline', icon: Globe },
            { title: 'Backend Solid', desc: 'API cepat, arsitektur rapi & aman', icon: ShieldCheck },
            { title: 'Automasi & Tools', desc: 'DevOps ringan, integrasi payment', icon: Wrench },
            { title: 'Game & Scripting', desc: 'Roblox, Game Guardian, tooling custom', icon: Gamepad2 },
          ].map((s) => (
            <Card key={s.title}>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-white/5 border border-white/10 text-amber-400"><s.icon size={18} /></div>
                <div>
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="text-sm text-zinc-400 mt-1">{s.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Produk */}
      <Section id="produk" title="Produk" subtitle="Solusi digital siap pakai">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Panel Pterodactyl', desc: 'Panel game server modern untuk mengelola server dengan mudah dan aman.' },
            { title: 'Hosting & VPS', desc: 'Hosting cepat & VPS bertenaga untuk kebutuhan aplikasi dan game.' },
            { title: 'Script/Cheat Game', desc: 'Koleksi script & tools terkurasi untuk berbagai game (gunakan secara bijak).' },
            { title: 'Top Up Game (All Kategori)', desc: 'Dukungan top up untuk berbagai judul game, proses cepat dan aman.' },
            { title: 'Isi Pulsa & Lainnya', desc: 'Layanan pengisian pulsa dan produk digital sejenis lainnya.' },
            { title: 'Custom Request', desc: 'Butuh sesuatu yang spesifik? Saya sediakan solusi tailor-made.' },
          ].map((p) => (
            <Card key={p.title}>
              <h4 className="font-semibold text-white">{p.title}</h4>
              <p className="text-sm text-zinc-400 mt-2">{p.desc}</p>
            </Card>
          ))}
        </div>

        {/* Pembayaran */}
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <Card>
            <h4 className="font-semibold mb-2 flex items-center gap-2"><Wallet className="text-amber-400" size={18}/> Metode Pembayaran</h4>
            <ul className="text-zinc-300 text-sm space-y-1">
              <li>DANA: 085706400133 (a.n. VELLIXAO)</li>
              <li>GOPAY: 085706400133</li>
              <li>QRIS: scan gambar di samping</li>
            </ul>
            <p className="text-xs text-zinc-500 mt-3">Konfirmasi transaksi via WhatsApp/Telegram untuk proses cepat.</p>
          </Card>
          <Card>
            <div className="grid sm:grid-cols-2 gap-4 items-center">
              <div>
                <h5 className="font-medium mb-2">QRIS</h5>
                <p className="text-sm text-zinc-400">Scan untuk pembayaran instan melalui aplikasi pilihan kamu.</p>
              </div>
              <img src="https://files.catbox.moe/r40rux.jpg" alt="QRIS" className="w-full rounded-lg border border-white/10" />
            </div>
          </Card>
        </div>
      </Section>

      {/* Web */}
      <Section id="web" title="Web" subtitle="Koleksi proyek & sumber belajar">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: 'Game Guardian & Roblox Tools',
              desc: 'Tooling untuk modding, analisis memori, dan otomasi untuk Roblox & Android (penggunaan etis sangat dianjurkan).',
              points: ['Dokumentasi langkah demi langkah', 'Contoh script siap pakai', 'Update berkala']
            },
            {
              title: 'Rekapan Pembelajaran Coding',
              desc: 'Catatan belajar, snippet, dan best-practice dari pengalaman harian membangun produk digital.',
              points: ['Frontend/Backend', 'DevOps ringan', 'Desain sistem']
            },
            {
              title: 'Script Roblox',
              desc: 'Kumpulan script Roblox yang teruji, mudah dipahami, dan siap dikustomisasi.',
              points: ['Struktur rapi', 'Komentar jelas', 'Optimasi performa']
            },
          ].map((w) => (
            <Card key={w.title}>
              <h4 className="font-semibold">{w.title}</h4>
              <p className="text-sm text-zinc-400 mt-2">{w.desc}</p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1">
                {w.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2"><Star size={14} className="text-amber-400" /> {pt}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section id="service" title="Service" subtitle="Jasa yang dapat dipesan">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Pembuatan Website 3D', desc: 'Website dark-anime dengan animasi halus & integrasi Spline.' },
            { title: 'Setting Panel & VPS', desc: 'Instalasi Pterodactyl, optimasi server & keamanan.' },
            { title: 'Integrasi Pembayaran', desc: 'DANA, GOPAY, QRIS, notifikasi & rekap transaksi.' },
            { title: 'UI/UX Design', desc: 'Desain antarmuka modern, tema gelap premium.' },
            { title: 'Scripting Game', desc: 'Tooling dan script custom sesuai kebutuhan.' },
            { title: 'Consulting', desc: 'Arahan teknis, arsitektur, dan perencanaan produk.' },
          ].map((s) => (
            <Card key={s.title}>
              <h4 className="font-semibold">{s.title}</h4>
              <p className="text-sm text-zinc-400 mt-2">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Hubungi saya untuk diskusi & order">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h4 className="font-semibold mb-2">Koneksi Cepat</h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/10 transition">
                  <s.icon size={18} /> {s.label}
                </a>
              ))}
            </div>
          </Card>
          <Card>
            <h4 className="font-semibold mb-2">Detail</h4>
            <ul className="text-sm text-zinc-300 space-y-2">
              <li>Email: <a className="text-amber-400 hover:underline" href="mailto:aurcusojapan@gmail.com">aurcusojapan@gmail.com</a></li>
              <li>Preferensi komunikasi: WhatsApp/Telegram</li>
              <li>Jam aktif: 09.00 – 22.00 WIB</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">© {year} VELLIXAO. Semua hak dilindungi.</p>
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="inline-flex items-center gap-1"><Cpu size={14} className="text-amber-400"/> Futuristic • Anime • 3D</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20">
      <div className="absolute inset-x-0 top-0 -z-0">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
            {subtitle && <p className="text-zinc-400 mt-2">{subtitle}</p>}
          </div>
          {children}
        </motion.div>
      </div>
    </section>
  )
}

function Card({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 ${className}`}
    >
      {children}
    </motion.div>
  )
}
