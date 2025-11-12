import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import {
  Menu,
  X,
  Search,
  ChevronRight,
  Wallet,
  Star,
  Gamepad2,
  Shield,
  CreditCard,
  MessageCircle,
  Send,
  Instagram,
  Zap,
  ChevronDown,
} from 'lucide-react'

// DATA MOCKUP — gaya katalog seperti duniagames: kategori, banner, rating, dan denom
const CATEGORIES = [
  { id: 'all', label: 'Semua' },
  { id: 'game', label: 'Game' },
  { id: 'pulsa', label: 'Pulsa' },
  { id: 'voucher', label: 'Voucher' },
]

const PRODUCTS = [
  {
    id: 'mlbb',
    title: 'Mobile Legends',
    category: 'game',
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1618556450994-c0a996cc3e3d?q=80&w=1600&auto=format&fit=crop',
    desc: 'Top up Diamond ML cepat & aman.',
    denoms: [
      { id: 'dm14', label: '14 Diamonds', price: 5000 },
      { id: 'dm28', label: '28 Diamonds', price: 9000 },
      { id: 'dm86', label: '86 Diamonds', price: 26000 },
      { id: 'dm172', label: '172 Diamonds', price: 50000 },
      { id: 'dm344', label: '344 Diamonds', price: 98000 },
    ],
  },
  {
    id: 'genshin',
    title: 'Genshin Impact',
    category: 'game',
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1600&auto=format&fit=crop',
    desc: 'Genesis Crystal instant delivery.',
    denoms: [
      { id: 'gc60', label: '60 GC', price: 15000 },
      { id: 'gc300', label: '300+30 GC', price: 75000 },
      { id: 'gc980', label: '980+110 GC', price: 235000 },
      { id: 'gc1980', label: '1980+260 GC', price: 470000 },
    ],
  },
  {
    id: 'ff',
    title: 'Free Fire',
    category: 'game',
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1600&auto=format&fit=crop',
    desc: 'Diamond Free Fire murah.',
    denoms: [
      { id: 'dm50', label: '50 Diamonds', price: 8000 },
      { id: 'dm140', label: '140 Diamonds', price: 22000 },
      { id: 'dm355', label: '355 Diamonds', price: 53000 },
    ],
  },
  {
    id: 'pulsa-telkomsel',
    title: 'Pulsa Telkomsel',
    category: 'pulsa',
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop',
    desc: 'Isi pulsa semua nominal.',
    denoms: [
      { id: 'p10', label: '10.000', price: 12000 },
      { id: 'p25', label: '25.000', price: 27000 },
      { id: 'p50', label: '50.000', price: 52000 },
      { id: 'p100', label: '100.000', price: 102000 },
    ],
  },
  {
    id: 'spotify',
    title: 'Spotify Premium',
    category: 'voucher',
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop',
    desc: 'Voucher Premium Individual.',
    denoms: [
      { id: 'sp1', label: '1 Bulan', price: 45000 },
      { id: 'sp3', label: '3 Bulan', price: 120000 },
      { id: 'sp6', label: '6 Bulan', price: 220000 },
    ],
  },
]

const PAYMENTS = [
  { id: 'dana', name: 'DANA', number: '085706400133' },
  { id: 'gopay', name: 'GOPAY', number: '085706400133' },
  { id: 'qris', name: 'QRIS', image: 'https://files.catbox.moe/r40rux.jpg' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100">
      <Navbar />
      <Hero />
      <Products />
      <Showcase />
      <Contact />
      <Footer />
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = React.useState(false)
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Top Up' },
    { id: 'showcase', label: 'Showcase' },
    { id: 'contact', label: 'Contact' },
  ]
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/35">
          <div className="h-16 px-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-600 to-rose-600 grid place-items-center shadow-lg shadow-red-500/20">
                <Zap size={18} />
              </div>
              <span className="font-semibold tracking-wide">VELLIXAO</span>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <a key={l.id} href={`#${l.id}`} className="px-4 py-2 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition">
                  {l.label}
                </a>
              ))}
            </nav>
            <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-lg hover:bg-white/5">
              {open ? <X /> : <Menu />}
            </button>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden border-t border-white/10"
              >
                <div className="p-2 grid">
                  {links.map((l) => (
                    <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition">
                      {l.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative pt-36 overflow-hidden">
      {/* Blood gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-40 blur-3xl opacity-20 bg-[radial-gradient(50%_60%_at_30%_20%,#ef4444,transparent)]" />
        <div className="absolute -inset-40 blur-3xl opacity-10 bg-[radial-gradient(50%_50%_at_80%_30%,#7f1d1d,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-5xl sm:text-6xl font-black tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-rose-300 to-rose-500">Anime • 3D • Dark Blood</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-5 text-lg text-zinc-300 max-w-xl">
              Personal brand VELLIXAO dengan karakter anime Jepang dan sentuhan 3D smooth. Fokus pada pengalaman premium, bukan animasi berlebihan.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#products" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/20">
                Mulai Top Up <ChevronRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white">
                Hubungi Saya
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2"><Shield size={16}/> Aman & Cepat</span>
              <span className="inline-flex items-center gap-2"><Gamepad2 size={16}/> Banyak Game</span>
              <span className="inline-flex items-center gap-2"><Star size={16}/> Rating Tinggi</span>
            </div>
          </div>

          {/* Right: Spline + Anime character card overlay */}
          <div className="relative h-[420px] sm:h-[520px]">
            <div className="absolute inset-0 hidden lg:block">
              <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" />
            </div>
            <div className="absolute bottom-4 right-4 left-4 lg:left-auto lg:right-8 lg:bottom-8">
              <AnimeCharacterCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimeCharacterCard() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative max-w-md ml-auto rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-red-600/30 via-rose-600/10 to-transparent blur-2xl" />
      <div className="relative">
        {/* Gambar karakter anime Jepang (placeholder, bisa diganti gambar pilihan) */}
        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop" alt="Anime Character" className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold">VELLIXAO • Digital Ops</h3>
          <p className="text-sm text-zinc-400 mt-1">Karakter anime bergaya futuristik mewakili coding, server, dan desain.</p>
        </div>
      </div>
    </motion.div>
  )
}

function Products() {
  const [query, setQuery] = React.useState('')
  const [cat, setCat] = React.useState('all')
  const [active, setActive] = React.useState(null) // product id for modal

  const filtered = PRODUCTS.filter((p) =>
    (cat === 'all' || p.category === cat) && p.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section id="products" className="relative py-20">
      <div className="absolute inset-x-0 top-0">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Top Up & Produk</h2>
            <p className="text-zinc-400 mt-1">Tampilan katalog profesional ala duniagames: cari, filter, pilih denom, lalu bayar.</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari game atau produk" className="w-full sm:w-80 pl-9 pr-3 py-2 rounded-lg bg-white/5 border border-white/10 outline-none text-sm placeholder:text-zinc-500" />
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button key={c.id} onClick={() => setCat(c.id)} className={`px-3 py-1.5 rounded-full text-sm border transition ${cat === c.id ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white border-transparent' : 'bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10'}`}>
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <motion.div key={p.id} whileHover={{ y: -4 }} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur">
              <div className="relative">
                <img src={p.img} alt={p.title} className="h-40 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold drop-shadow">{p.title}</h3>
                    <p className="text-xs text-zinc-300/90 drop-shadow">{p.desc}</p>
                  </div>
                  <div className="px-2 py-1 rounded-md bg-black/50 backdrop-blur border border-white/10 text-xs flex items-center gap-1">
                    <Star size={12} className="text-yellow-400" /> {p.rating}
                  </div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="text-xs text-zinc-400">Mulai dari <span className="text-white font-medium">Rp {formatIDR(p.denoms[0].price)}</span></div>
                <button onClick={() => setActive(p)} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm">
                  Pilih Denom <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <ProductModal product={active} onClose={() => setActive(null)} />
      </div>
    </section>
  )
}

function ProductModal({ product, onClose }) {
  const [selected, setSelected] = React.useState(null)
  React.useEffect(() => { setSelected(null) }, [product])
  return (
    <AnimatePresence>
      {product && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />
          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ type: 'spring', stiffness: 180, damping: 20 }} className="relative w-full sm:w-[560px] mx-4 sm:mx-0 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-zinc-950 to-zinc-900">
            <div className="relative h-36">
              <img src={product.img} alt={product.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-3 left-4 right-14">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-sm text-zinc-300">{product.desc}</p>
              </div>
              <button onClick={onClose} className="absolute top-3 right-3 p-2 rounded-lg bg-black/50 backdrop-blur border border-white/10"><X size={16} /></button>
            </div>

            <div className="p-4">
              <h4 className="font-medium mb-2">Pilih Denominasi</h4>
              <div className="grid grid-cols-2 gap-2">
                {product.denoms.map((d) => (
                  <button key={d.id} onClick={() => setSelected(d)} className={`px-3 py-3 rounded-lg border text-sm text-left transition ${selected?.id === d.id ? 'border-transparent bg-gradient-to-r from-red-600 to-rose-600 text-white' : 'bg-white/5 border-white/10 hover:bg-white/10 text-zinc-200'}`}>
                    <div className="font-medium">{d.label}</div>
                    <div className="text-xs text-zinc-300">Rp {formatIDR(d.price)}</div>
                  </button>
                ))}
              </div>

              <div className="mt-5">
                <h4 className="font-medium mb-2">Metode Pembayaran</h4>
                <div className="grid sm:grid-cols-3 gap-2">
                  {PAYMENTS.map((p) => (
                    <div key={p.id} className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm">
                      <div className="font-medium flex items-center gap-2"><CreditCard size={14}/> {p.name}</div>
                      {p.number && <div className="text-xs text-zinc-400 mt-1">{p.number}</div>}
                      {p.image && <img src={p.image} alt="QRIS" className="mt-2 rounded border border-white/10" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="text-sm text-zinc-400">Total</div>
                <div className="text-lg font-semibold">Rp {formatIDR(selected?.price || 0)}</div>
              </div>

              <button disabled={!selected} className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white disabled:opacity-50 disabled:cursor-not-allowed">
                <Wallet size={18}/> Pesan Sekarang
              </button>
              <p className="mt-2 text-xs text-zinc-500">Setelah pembayaran, konfirmasi via WhatsApp/Telegram untuk proses cepat.</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Showcase() {
  return (
    <section id="showcase" className="relative py-20">
      <div className="absolute inset-x-0 top-0">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-3 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Showcase 3D</h2>
            <p className="text-zinc-400 mt-1">Sentuhan 3D yang ringan: latar Spline + kartu karakter anime Jepang.</p>
          </div>
          <a href="#home" className="inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white">Kembali ke atas <ChevronUpIcon /></a>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-5">
          <motion.div whileHover={{ y: -4 }} className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04]">
            <div className="aspect-[16/9] bg-black">
              <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Hero 3D Ringan</h3>
              <p className="text-sm text-zinc-400 mt-1">Model 3D dimuat di area spesifik agar tidak membebani halaman.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04]">
            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop" alt="Anime" className="aspect-[16/9] object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">Karakter Anime Jepang</h3>
              <p className="text-sm text-zinc-400 mt-1">Gaya visual otentik yang mencerminkan kegiatan digital VELLIXAO.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-x-0 top-0">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <h3 className="font-semibold">Hubungi Saya</h3>
            <p className="text-sm text-zinc-400 mt-1">Fast response via WhatsApp/Telegram, email juga tersedia.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a target="_blank" href="https://wa.me/6285706400133" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10"><MessageCircle size={18}/> WhatsApp</a>
              <a target="_blank" href="https://t.me/VELLIX_AO" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10"><Send size={18}/> Telegram</a>
              <a target="_blank" href="https://www.instagram.com/vellix_cc" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10"><Instagram size={18}/> Instagram</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <h3 className="font-semibold">Pembayaran</h3>
            <div className="mt-3 grid sm:grid-cols-3 gap-3 text-sm">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="font-medium">DANA</div>
                <div className="text-xs text-zinc-400">085706400133</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="font-medium">GOPAY</div>
                <div className="text-xs text-zinc-400">085706400133</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="font-medium">QRIS</div>
                <img src="https://files.catbox.moe/r40rux.jpg" alt="QRIS" className="mt-2 rounded border border-white/10" />
              </div>
            </div>
            <p className="mt-3 text-xs text-zinc-500">Email: <a className="text-rose-400" href="mailto:aurcusojapan@gmail.com">aurcusojapan@gmail.com</a></p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} VELLIXAO • Futuristic Anime 3D</div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1"><Star size={14} className="text-yellow-400"/> Premium</span>
            <span className="inline-flex items-center gap-1"><Shield size={14} className="text-emerald-400"/> Aman</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function ChevronUpIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

function formatIDR(n) {
  return new Intl.NumberFormat('id-ID').format(n)
}
