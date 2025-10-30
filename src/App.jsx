import { useState } from 'react'
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon, EnvelopeIcon, HeartIcon, ClipboardDocumentIcon, FunnelIcon, Squares2X2Icon, UserIcon, BuildingOfficeIcon, VideoCameraIcon, ClockIcon, BookOpenIcon, ArrowTopRightOnSquareIcon, TicketIcon, PlusIcon, ArrowDownIcon, ArrowUpIcon, CheckCircleIcon, DocumentArrowDownIcon, ArrowLeftIcon, MagnifyingGlassIcon, ArrowPathIcon, TrashIcon, KeyIcon, DocumentDuplicateIcon, ServerStackIcon, CircleStackIcon } from '@heroicons/react/24/outline'

// Navbar mirip SumoPod
function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="container-wide flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border bg-white">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-indigo-600">
                <path d="M4 7.5L12 3l8 4.5v9L12 21l-8-4.5v-9Z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            <span className="font-semibold text-gray-900">SumoPod</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 ml-6">
            <NavLink to="/home" className={({isActive})=>`text-sm ${isActive? 'text-indigo-600 font-semibold':'text-gray-700'}`}>Home</NavLink>
            <NavLink to="/templates" className={({isActive})=>`text-sm ${isActive? 'text-indigo-600 font-semibold':'text-gray-700'}`}>Templates</NavLink>
            <NavLink to="/pricing" className={({isActive})=>`text-sm ${isActive? 'text-indigo-600 font-semibold':'text-gray-700'}`}>Pricing</NavLink>
            <NavLink to="/features" className={({isActive})=>`text-sm ${isActive? 'text-indigo-600 font-semibold':'text-gray-700'}`}>Features</NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={()=>setOpen(o=>!o)} className="md:hidden inline-flex items-center gap-2 rounded-md border p-2 text-gray-700" aria-label="Open menu">
            {open ? <XMarkIcon className="h-5 w-5"/> : <Bars3Icon className="h-5 w-5"/>}
          </button>
          <Link to="/login" className="hidden md:inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-gray-700">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4"><path d="M8 12h8M12 8l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Login
          </Link>
          <Link to="/register" className="hidden md:inline-block rounded-md bg-indigo-600 px-3 py-2 text-sm text-white">Get Started</Link>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="container-wide py-3 grid gap-2">
            <NavLink to="/home" onClick={()=>setOpen(false)} className={({isActive})=>`rounded-md px-3 py-2 text-sm ${isActive? 'bg-indigo-50 text-indigo-700':'text-gray-700'}`}>Home</NavLink>
            <NavLink to="/templates" onClick={()=>setOpen(false)} className={({isActive})=>`rounded-md px-3 py-2 text-sm ${isActive? 'bg-indigo-50 text-indigo-700':'text-gray-700'}`}>Templates</NavLink>
            <NavLink to="/pricing" onClick={()=>setOpen(false)} className={({isActive})=>`rounded-md px-3 py-2 text-sm ${isActive? 'bg-indigo-50 text-indigo-700':'text-gray-700'}`}>Pricing</NavLink>
            <NavLink to="/features" onClick={()=>setOpen(false)} className={({isActive})=>`rounded-md px-3 py-2 text-sm ${isActive? 'bg-indigo-50 text-indigo-700':'text-gray-700'}`}>Features</NavLink>
            <div className="mt-2 flex items-center gap-2">
              <Link to="/login" onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-gray-700">Login</Link>
              <Link to="/register" onClick={()=>setOpen(false)} className="rounded-md bg-indigo-600 px-3 py-2 text-sm text-white">Get Started</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

// Halaman Home
function Home() {
  return (
    <section className="container-wide py-24 text-center">
      <h1 className="mx-auto max-w-4xl text-5xl sm:text-6xl font-bold tracking-tight">
        <span className="text-indigo-600">Deploy your App</span>
        <br />
        in <span className="text-gray-900">15 Seconds!</span>
      </h1>
      <div className="mt-10 flex items-center justify-center gap-4">
        <Link to="/register" className="rounded-md bg-indigo-600 px-5 py-2.5 text-white shadow">Get Started</Link>
        <Link to="/templates" className="rounded-md border px-5 py-2.5 text-gray-700">See App Templates</Link>
      </div>
    </section>
  )
}

// Halaman Templates
function Templates() {
  const [query, setQuery] = useState('')
  const [pill, setPill] = useState('All')
  const pills = ['All', 'Business', 'Productivity', 'Communication', 'Entertainment']
  const cards = [
    {title:'n8n', desc:'Workflow automation tool with 200+ integrations. Similar to Zapier', price:'Rp 15.000', tags:['Automation','Integration'], badge:'Productivity'},
    {title:'Activepieces', desc:'Open source workflow automation tool, an alternative to Zapier.', price:'Rp 85.000', tags:['Automation','Integration','Open Source'], badge:'Productivity'},
    {title:'WAHA Plus Cloud', desc:'Self-hosted WhatsApp HTTP API (REST API) for unlimited sessions...', price:'Rp 20.000', tags:['WhatsApp API','Messaging','Self-hosted'], badge:'Communication'},
  ]
  const filtered = cards.filter(c => {
    const matchPill = pill === 'All' || c.badge === pill
    const q = query.trim().toLowerCase()
    const matchQuery = q === '' || c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q) || c.tags.some(t=>t.toLowerCase().includes(q))
    return matchPill && matchQuery
  })
  return (
    <section className="container-wide py-16">
      <h2 className="text-4xl font-bold text-center">Application Templates</h2>
      <p className="text-center mt-2 text-gray-600">Choose from our curated collection of application templates and deploy them in seconds</p>
      <div className="mt-10 flex justify-center">
        <input value={query} onChange={e=>setQuery(e.target.value)} className="w-full max-w-2xl rounded-md border px-4 py-2" placeholder="Search templates..." />
        <div className="ml-3 flex items-center gap-2">
          <button className="rounded-md border px-3 py-2">
            <FunnelIcon className="h-5 w-5"/>
          </button>
          <button className="rounded-md border px-3 py-2">
            <Squares2X2Icon className="h-5 w-5"/>
          </button>
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-2 flex-wrap">
        {pills.map((p)=> (
          <button key={p} onClick={()=>setPill(p)} className={`rounded-full border px-4 py-1 text-sm ${p===pill? 'bg-indigo-50 border-indigo-200 text-indigo-700':'text-gray-700'}`}>{p}</button>
        ))}
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((c)=> (
          <div key={c.title} className="rounded-xl border bg-white p-5">
            <div className="flex justify-between items-start">
              <div className="text-xs rounded-md bg-gray-100 px-2 py-1 text-gray-700">{c.badge}</div>
            </div>
            <h3 className="mt-3 font-semibold">{c.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{c.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {c.tags.map(t=> (
                <span key={t} className="text-xs rounded-md bg-indigo-50 text-indigo-700 px-2 py-1">{t}</span>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-700">{c.price} <span className="text-gray-400">/month</span></div>
            <div className="mt-4 flex gap-3">
              <button className="rounded-md bg-indigo-600 text-white px-4 py-2 text-sm">Deploy Now</button>
              <button className="rounded-md border px-3 py-2 text-sm"><HeartIcon className="h-4 w-4"/></button>
              <button className="rounded-md border px-3 py-2 text-sm"><ClipboardDocumentIcon className="h-4 w-4"/></button>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-6 text-center text-sm text-gray-500">No templates match your filters.</p>
      )}
    </section>
  )
}

// Halaman Pricing
function Pricing() {
  return (
    <section className="container-wide py-16">
      <h2 className="text-4xl font-bold text-center">Simple, Transparent Pricing</h2>
      <p className="text-center mt-2 text-gray-600">Get started with SumoPod today and experience the power of container management</p>
      <div className="mt-10 flex justify-center">
        <div className="max-w-md w-full rounded-2xl border bg-white p-6 text-center shadow-sm">
          <div className="text-sm font-medium">Start Today</div>
          <div className="mt-2 text-5xl font-extrabold text-indigo-600">FREE</div>
          <p className="mt-2 text-sm text-gray-600">All the features you need to manage containers and applications effectively</p>
          <div className="mt-6 grid gap-3">
            <Link to="/home" className="rounded-md bg-indigo-600 px-4 py-2 text-white">Get Started</Link>
            <Link to="/templates" className="rounded-md border px-4 py-2 text-gray-700">See App Templates</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Halaman Features
function Features() {
  const features = [
    {title:'Container Marketplace', desc:'Explore and purchase from our extensive container library, all verified and ready for instant deployment.'},
    {title:'One-Click Deployment', desc:'Deploy containers to your infrastructure with one click, eliminating complex configuration processes.'},
    {title:'Automatic Updates', desc:'Keep your containers and applications up to date with automatic version updates and security patches.'},
  ]
  return (
    <section className="container-wide py-16">
      <h2 className="text-4xl font-bold text-center">Everything you need in one platform</h2>
      <p className="text-center mt-2 text-gray-600">SumoPod offers comprehensive solutions for container and application management</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(f => (
          <div key={f.title} className="rounded-2xl border bg-white p-6">
            <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center">
              <svg className="h-5 w-5 text-indigo-600" viewBox="0 0 24 24" fill="none"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" strokeWidth="1.5"/></svg>
            </div>
            <div className="mt-4 font-semibold">{f.title}</div>
            <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// Halaman Login (email OTP UI)
function Login() {
  const [email, setEmail] = useState('')
  return (
    <section className="container-wide py-16 flex justify-center">
      <div className="max-w-md w-full rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-center">Welcome back</h2>
        <p className="mt-1 text-center text-sm text-gray-600">Sign in to your account to continue</p>
        <div className="mt-6">
          <button className="w-full rounded-md border px-4 py-2 text-sm flex items-center justify-center gap-2">
            <span className="inline-block h-4 w-4 rounded-sm bg-red-500" />
            Sign in with Google
          </button>
          <div className="my-4 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-500">Or continue with email</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <label className="text-sm font-medium">Email address</label>
          <div className="mt-2 flex items-center rounded-md border px-3">
            <EnvelopeIcon className="h-4 w-4 text-gray-400"/>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="you@example.com" className="w-full px-2 py-2 outline-none text-sm" />
          </div>
          <button className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-white text-sm">Send Verification Code</button>
          <p className="mt-4 text-center text-xs text-gray-500">Don't have an account? <Link className="text-indigo-600" to="/register">Create Account</Link></p>
        </div>
      </div>
    </section>
  )
}

function Register() {
  const [form, setForm] = useState({first:'', last:'', company:'', email:''})
  const set = (k)=> (e)=> setForm(prev=>({...prev, [k]: e.target.value}))
  return (
    <section className="container-wide py-16 flex justify-center">
      <div className="max-w-lg w-full rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Create your account</h2>
        <p className="mt-1 text-center text-sm text-gray-600">Start managing your containers today</p>
        <div className="mt-6">
          <button className="w-full rounded-md border px-4 py-2 text-sm flex items-center justify-center gap-2">
            <span className="inline-block h-4 w-4 rounded-sm bg-red-500" />
            Sign up with Google
          </button>
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-500">Or sign up with email</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium">First Name</label>
              <div className="mt-2 flex items-center rounded-md border px-3">
                <UserIcon className="h-4 w-4 text-gray-400"/>
                <input value={form.first} onChange={set('first')} placeholder="John" className="w-full px-2 py-2 outline-none text-sm" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Last Name</label>
              <div className="mt-2 flex items-center rounded-md border px-3">
                <UserIcon className="h-4 w-4 text-gray-400"/>
                <input value={form.last} onChange={set('last')} placeholder="Doe" className="w-full px-2 py-2 outline-none text-sm" />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <label className="text-sm font-medium">Company Name</label>
            <div className="mt-2 flex items-center rounded-md border px-3">
              <BuildingOfficeIcon className="h-4 w-4 text-gray-400"/>
              <input value={form.company} onChange={set('company')} placeholder="Acme Inc" className="w-full px-2 py-2 outline-none text-sm" />
            </div>
          </div>
          <div className="mt-3">
            <label className="text-sm font-medium">Email address</label>
            <div className="mt-2 flex items-center rounded-md border px-3">
              <EnvelopeIcon className="h-4 w-4 text-gray-400"/>
              <input value={form.email} onChange={set('email')} placeholder="you@example.com" className="w-full px-2 py-2 outline-none text-sm" />
            </div>
          </div>
          <button className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-white text-sm">Create Account</button>
          <p className="mt-4 text-center text-xs text-gray-500">Already have an account? <Link className="text-indigo-600" to="/login">Sign in</Link></p>
        </div>
      </div>
    </section>
  )
}

function Dashboard() {
  const isTrans = true
  return (
    <div className="container-wide py-6">
      <div className="grid grid-cols-12 gap-6">
        <DashboardSidebar />
        <main className="col-span-12 sm:col-span-9 lg:col-span-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{isTrans ? 'Billing' : 'Payments'}</h1>
              <p className="text-sm text-gray-600">Manage your {isTrans ? 'balance and view transaction history' : 'payments and view payment history'}</p>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/dashboard/billing/redeem" className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-gray-700"><TicketIcon className="h-4 w-4"/> Redeem</Link>
              <Link to="/dashboard/billing/add-credit" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white"><PlusIcon className="h-4 w-4"/> Add Credit</Link>
            </div>
          </div>
          <div className="mt-6 rounded-xl border bg-white p-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                <ClipboardDocumentIcon className="h-5 w-5 text-indigo-600"/>
              </div>
              <div>
                <div className="text-sm text-gray-600">Current Credits</div>
                <div className="text-xl font-semibold">Rp 0</div>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-xl border bg-white">
            <div className="flex items-center gap-2 border-b px-4 py-3">
              <NavLink to="/dashboard/billing" end className={({isActive})=>`inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm ${isActive? 'bg-indigo-50 text-indigo-700':'text-gray-700'}`}>
                Transactions
              </NavLink>
              <NavLink to="/dashboard/billing/payments" className={({isActive})=>`inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm ${isActive? 'bg-indigo-50 text-indigo-700':'text-gray-700'}`}>
                Payments
              </NavLink>
            </div>
            <div className="p-0">
              {isTrans ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="text-gray-500">
                        <th className="px-4 py-3 text-left font-medium">DATE</th>
                        <th className="px-4 py-3 text-left font-medium">DESCRIPTION</th>
                        <th className="px-4 py-3 text-left font-medium">TYPE</th>
                        <th className="px-4 py-3 text-left font-medium">AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        {date:'10/22/2025', desc:'Renew HabukWebCo (monthly)', type:'Usage', amount:'Rp -30.000 credits', positive:false},
                        {date:'10/22/2025', desc:'Credit purchase: 30000 credits', type:'Purchase', amount:'+Rp 30.000 credits', positive:true},
                        {date:'9/18/2025', desc:'Service purchase: HabukWebCo (monthly)', type:'Usage', amount:'Rp -30.000 credits', positive:false},
                        {date:'9/18/2025', desc:'Credit purchase: 10000 credits', type:'Purchase', amount:'+Rp 10.000 credits', positive:true},
                        {date:'8/12/2025', desc:'Service purchase: belajar n8n (monthly)', type:'Usage', amount:'Rp -30.000 credits', positive:false},
                        {date:'8/12/2025', desc:'Credit purchase: 50000 credits', type:'Purchase', amount:'+Rp 50.000 credits', positive:true},
                      ].map((r,i)=> (
                        <tr key={i}>
                          <td className="px-4 py-3">{r.date}</td>
                          <td className="px-4 py-3">{r.desc}</td>
                          <td className="px-4 py-3">
                            <span className={`inline-flex items-center gap-1 ${r.type==='Usage'? 'text-red-600':'text-green-600'}`}>
                              {r.type==='Usage' ? <ArrowDownIcon className="h-4 w-4"/> : <ArrowUpIcon className="h-4 w-4"/>}
                              {r.type}
                            </span>
                          </td>
                          <td className={`px-4 py-3 ${r.positive? 'text-green-600':'text-red-600'}`}>{r.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="text-gray-500">
                        <th className="px-4 py-3 text-left font-medium">DATE</th>
                        <th className="px-4 py-3 text-left font-medium">AMOUNT</th>
                        <th className="px-4 py-3 text-left font-medium">CREDITS</th>
                        <th className="px-4 py-3 text-left font-medium">STATUS</th>
                        <th className="px-4 py-3 text-left font-medium">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        {date:'10/22/2025', amount:'Rp 30.000', credits:'30,000 credits'},
                        {date:'9/18/2025', amount:'Rp 10.000', credits:'10,000 credits'},
                        {date:'8/12/2025', amount:'Rp 50.000', credits:'50,000 credits'},
                      ].map((r,i)=> (
                        <tr key={i}>
                          <td className="px-4 py-3">{r.date}</td>
                          <td className="px-4 py-3">{r.amount}</td>
                          <td className="px-4 py-3">{r.credits}</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                              <CheckCircleIcon className="h-4 w-4"/> Completed
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <button className="inline-flex items-center gap-2 rounded-md border px-3 py-1 text-xs"><DocumentArrowDownIcon className="h-4 w-4"/> Invoice</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
          {showAddCredit && <AddCreditModal amount={amount} setAmount={setAmount} />}
          {showRedeem && <RedeemVoucherModal />}
        </main>
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <section className="container-wide py-16 text-center">
      <h2 className="text-2xl font-bold">Page not found</h2>
      <p className="mt-2 text-gray-600">The page you are looking for doesn’t exist.</p>
      <Link to="/home" className="mt-4 inline-block rounded-md bg-indigo-600 px-4 py-2 text-white">Back to Home</Link>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container-wide py-8 flex items-center justify-between">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} SumoPod Clone</div>
        <div className="flex items-center gap-4 text-sm">
          <Link to="/features" className="text-gray-700">Features</Link>
          <Link to="/pricing" className="text-gray-700">Pricing</Link>
          <Link to="/templates" className="text-gray-700">Templates</Link>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const { pathname } = useLocation()
  const hideChrome = pathname.startsWith('/dashboard')
  return (
    <div className="min-h-screen">
      {!hideChrome && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardLearn />} />
        {/* Billing routes */}
        <Route path="/dashboard/billing" element={<DashboardBilling tab="transactions" />} />
        <Route path="/dashboard/billing/payments" element={<DashboardBilling tab="payments" />} />
        <Route path="/dashboard/billing/add-credit" element={<DashboardBilling tab="transactions" showAddCredit />} />
        <Route path="/dashboard/billing/add credit" element={<DashboardBilling tab="transactions" showAddCredit />} />
        <Route path="/dashboard/billing/redeem" element={<DashboardBilling tab="transactions" showRedeem />} />
        {/* Services routes */}
        <Route path="/dashboard/services" element={<DashboardServices />} />
        <Route path="/dashboard/services/manage" element={<ManageService />} />
        <Route path="/dashboard/services/addservice" element={<AddService />} />
        <Route path="/dashboard/services/deployservice" element={<DeployService />} />
        {/* Infrastructure routes */}
        <Route path="/dashboard/vps" element={<DashboardVPS />} />
        <Route path="/dashboard/vps/createvps" element={<CreateVPS />} />
        <Route path="/dashboard/database" element={<DashboardDatabase />} />
        <Route path="/dashboard/database/createdatabase" element={<CreateDatabase />} />
        {/* Community routes */}
        <Route path="/dashboard/community" element={<DashboardCommunity />} />
        <Route path="/dashboard/community/n8ntemplates/contoh" element={<N8nTemplateDetail />} />
        <Route path="/dashboard/community/creator" element={<CreatorDashboard />} />
        <Route path="/dashboard/community/creator/profile" element={<CreatorProfile />} />
        <Route path="/dashboard/community/creator/create" element={<CreatorCreate />} />
        {/* Learn routes */}
        <Route path="/dashboard/learn" element={<DashboardLearn />} />
        <Route path="/dashboard/learn/course" element={<LearnCourse />} />
        <Route path="/dashboard/learn/course/startlearning" element={<StartLearning />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideChrome && <Footer />}
    </div>
  )
}

export default App

function AddCreditModal({ onClose, amount, setAmount }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4">
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between px-6 pt-6">
          <h3 className="text-xl font-semibold">Top Up Balance</h3>
          <Link to="/dashboard/billing" className="rounded-md p-2 text-gray-500 hover:bg-gray-100" aria-label="Close">✕</Link>
        </div>
        <div className="p-6">
          <label className="text-sm font-medium">Amount (Rp)</label>
          <input value={amount} onChange={e=>setAmount(e.target.value)} className="mt-2 w-full rounded-xl border px-3 py-2" />
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[50000,100000,200000].map(v=> (
              <button key={v} onClick={()=>setAmount(String(v))} className="rounded-xl border px-4 py-3 text-sm">{`Rp ${v.toLocaleString('id-ID')}`}</button>
            ))}
          </div>
        </div>
        <div className="px-6 pb-6">
          <button className="w-full rounded-xl bg-indigo-500 px-4 py-3 text-white font-medium">Top Up</button>
        </div>
      </div>
    </div>
  )
}

function RedeemVoucherModal() {
  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4">
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between px-6 pt-6">
          <h3 className="text-xl font-semibold">Redeem Voucher</h3>
          <Link to="/dashboard/billing" className="rounded-md p-2 text-gray-500 hover:bg-gray-100" aria-label="Close">✕</Link>
        </div>
        <div className="p-6">
          <label className="text-sm font-medium">Voucher Code</label>
          <div className="mt-2 flex items-center rounded-xl border px-3">
            <input placeholder="ENTER VOUCHER CODE" className="w-full px-2 py-2 outline-none" />
            <TicketIcon className="h-5 w-5 text-gray-400"/>
          </div>
          <div className="mt-6 rounded-xl border p-4">
            <div className="text-sm font-medium">Security Verification</div>
            <div className="mt-3 flex items-center gap-3 rounded-lg bg-green-50 p-3">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <div>
                <div className="text-sm font-semibold text-green-700">Success!</div>
                <div className="text-xs text-gray-600">Please complete the security verification to proceed with redeeming.</div>
              </div>
              <div className="ml-auto text-xs text-gray-500">CLOUDFLARE <span className="underline">Privacy</span> · <span className="underline">Terms</span></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 pb-6">
          <Link to="/dashboard/billing" className="rounded-xl border px-4 py-2 text-sm">Cancel</Link>
          <Link to="/dashboard/billing" className="rounded-xl bg-indigo-500 px-4 py-2 text-sm text-white">Redeem</Link>
        </div>
      </div>
    </div>
  )
}

function DashboardSidebar() {
  return (
    <aside className="col-span-12 sm:col-span-3 lg:col-span-2 rounded-xl border bg-white p-4">
      <div className="flex items-center gap-2 px-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border bg-white">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-indigo-600"><path d="M4 7.5L12 3l8 4.5v9L12 21l-8-4.5v-9Z" stroke="currentColor" strokeWidth="1.5" /></svg>
        </span>
        <span className="font-semibold">SumoPod</span>
      </div>
      <nav className="mt-6 grid gap-6 text-sm">
        <div>
          <div className="px-2 text-xs font-semibold text-gray-400">LEARNING</div>
          <NavLink to="/dashboard/learn" end className={({isActive})=>`mt-2 block rounded-md px-2 py-1 ${isActive? 'bg-indigo-50 text-indigo-700':'text-gray-700'}`}>Learn</NavLink>
          <NavLink to="/dashboard/community" className={({isActive})=>`mt-1 block rounded-md px-2 py-1 ${isActive? 'bg-indigo-50 text-indigo-700':'text-gray-700'}`}>Community</NavLink>
        </div>
        <div>
          <div className="px-2 text-xs font-semibold text-gray-400">SERVICES</div>
          <a className="mt-2 block rounded-md px-2 py-1 text-gray-700">AI</a>
          <NavLink to="/dashboard/services" className={({isActive})=>`mt-1 block rounded-md px-2 py-1 ${isActive? 'bg-indigo-50 text-indigo-700':'text-gray-700'}`}>Services</NavLink>
        </div>
        <div>
          <div className="px-2 text-xs font-semibold text-gray-400">INFRASTRUCTURE</div>
          <NavLink to="/dashboard/vps" className={({isActive})=>`mt-2 block rounded-md px-2 py-1 ${isActive? 'bg-indigo-50 text-indigo-700':'text-gray-700'}`}>VPS</NavLink>
          <NavLink to="/dashboard/database" className={({isActive})=>`mt-1 block rounded-md px-2 py-1 ${isActive? 'bg-indigo-50 text-indigo-700':'text-gray-700'}`}>Database</NavLink>
        </div>
        <div>
          <div className="px-2 text-xs font-semibold text-gray-400">ACCOUNT</div>
          <NavLink to="/dashboard/billing" className={({isActive})=>`mt-2 block rounded-md px-2 py-1 ${isActive? 'bg-indigo-50 text-indigo-700':'text-gray-700'}`}>Billing</NavLink>
          <a className="mt-1 block rounded-md px-2 py-1 text-gray-700">Affiliate</a>
          <a className="mt-1 block rounded-md px-2 py-1 text-gray-700">Settings</a>
          <a className="mt-1 block rounded-md px-2 py-1 text-gray-700">Support</a>
        </div>
      </nav>
    </aside>
  )
}

function DashboardBilling({ tab = 'transactions', showAddCredit = false, showRedeem = false }) {
  const [amount, setAmount] = useState('0')
  const isTrans = tab === 'transactions'
  return (
    <div className="container-wide py-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <DashboardSidebar />
        {/* Content */}
        <main className="col-span-12 sm:col-span-9 lg:col-span-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{isTrans ? 'Billing' : 'Payments'}</h1>
              <p className="text-sm text-gray-600">Manage your {isTrans ? 'balance and view transaction history' : 'payments and view payment history'}</p>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/dashboard/billing/redeem" className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-gray-700"><TicketIcon className="h-4 w-4"/> Redeem</Link>
              <Link to="/dashboard/billing/add-credit" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white"><PlusIcon className="h-4 w-4"/> Add Credit</Link>
            </div>
          </div>
          <div className="mt-6 rounded-xl border bg-white p-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                <ClipboardDocumentIcon className="h-5 w-5 text-indigo-600"/>
              </div>
              <div>
                <div className="text-sm text-gray-600">Current Credits</div>
                <div className="text-xl font-semibold">Rp 0</div>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-xl border bg-white">
            <div className="flex items-center gap-2 border-b px-4 py-3">
              <NavLink to="/dashboard/billing" end className={({isActive})=>`inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm ${isActive? 'bg-indigo-50 text-indigo-700':'text-gray-700'}`}>
                Transactions
              </NavLink>
              <NavLink to="/dashboard/billing/payments" className={({isActive})=>`inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm ${isActive? 'bg-indigo-50 text-indigo-700':'text-gray-700'}`}>
                Payments
              </NavLink>
            </div>
            <div className="p-0">
              {isTrans ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="text-gray-500">
                        <th className="px-4 py-3 text-left font-medium">DATE</th>
                        <th className="px-4 py-3 text-left font-medium">DESCRIPTION</th>
                        <th className="px-4 py-3 text-left font-medium">TYPE</th>
                        <th className="px-4 py-3 text-left font-medium">AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        {date:'10/22/2025', desc:'Renew HabukWebCo (monthly)', type:'Usage', amount:'Rp -30.000 credits', positive:false},
                        {date:'10/22/2025', desc:'Credit purchase: 30000 credits', type:'Purchase', amount:'+Rp 30.000 credits', positive:true},
                        {date:'9/18/2025', desc:'Service purchase: HabukWebCo (monthly)', type:'Usage', amount:'Rp -30.000 credits', positive:false},
                        {date:'9/18/2025', desc:'Credit purchase: 10000 credits', type:'Purchase', amount:'+Rp 10.000 credits', positive:true},
                        {date:'8/12/2025', desc:'Service purchase: belajar n8n (monthly)', type:'Usage', amount:'Rp -30.000 credits', positive:false},
                        {date:'8/12/2025', desc:'Credit purchase: 50000 credits', type:'Purchase', amount:'+Rp 50.000 credits', positive:true},
                      ].map((r,i)=> (
                        <tr key={i}>
                          <td className="px-4 py-3">{r.date}</td>
                          <td className="px-4 py-3">{r.desc}</td>
                          <td className="px-4 py-3">
                            <span className={`inline-flex items-center gap-1 ${r.type==='Usage'? 'text-red-600':'text-green-600'}`}>
                              {r.type==='Usage' ? <ArrowDownIcon className="h-4 w-4"/> : <ArrowUpIcon className="h-4 w-4"/>}
                              {r.type}
                            </span>
                          </td>
                          <td className={`px-4 py-3 ${r.positive? 'text-green-600':'text-red-600'}`}>{r.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="text-gray-500">
                        <th className="px-4 py-3 text-left font-medium">DATE</th>
                        <th className="px-4 py-3 text-left font-medium">AMOUNT</th>
                        <th className="px-4 py-3 text-left font-medium">CREDITS</th>
                        <th className="px-4 py-3 text-left font-medium">STATUS</th>
                        <th className="px-4 py-3 text-left font-medium">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        {date:'10/22/2025', amount:'Rp 30.000', credits:'30,000 credits'},
                        {date:'9/18/2025', amount:'Rp 10.000', credits:'10,000 credits'},
                        {date:'8/12/2025', amount:'Rp 50.000', credits:'50,000 credits'},
                      ].map((r,i)=> (
                        <tr key={i}>
                          <td className="px-4 py-3">{r.date}</td>
                          <td className="px-4 py-3">{r.amount}</td>
                          <td className="px-4 py-3">{r.credits}</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                              <CheckCircleIcon className="h-4 w-4"/> Completed
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <button className="inline-flex items-center gap-2 rounded-md border px-3 py-1 text-xs"><DocumentArrowDownIcon className="h-4 w-4"/> Invoice</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
          {showAddCredit && <AddCreditModal amount={amount} setAmount={setAmount} />}
          {showRedeem && <RedeemVoucherModal />}
        </main>
      </div>
    </div>
  )
}

// HAPUS blok duplikasi di bawah ini (NotFound, Footer, App, export default kedua)

function DashboardServices() {
  return (
    <div className="container-wide py-16 grid grid-cols-12 gap-6">
      {/* Sidebar */}
      <DashboardSidebar />
      {/* Main */}
      <main className="col-span-12 sm:col-span-9 lg:col-span-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Services</h1>
            <p className="text-sm text-gray-600">Manage your managed services</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-gray-700"><ArrowPathIcon className="h-4 w-4"/> Refresh</button>
            <Link to="/dashboard/services/addservice" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white"><PlusIcon className="h-4 w-4"/> Add Service</Link>
          </div>
        </div>
        <div className="mt-4 rounded-xl border bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-gray-500">
                  <th className="px-4 py-3 text-left font-medium">NAME</th>
                  <th className="px-4 py-3 text-left font-medium">TYPE</th>
                  <th className="px-4 py-3 text-left font-medium">STATUS</th>
                  <th className="px-4 py-3 text-left font-medium">PLAN</th>
                  <th className="px-4 py-3 text-left font-medium">AUTO RENEWAL</th>
                  <th className="px-4 py-3 text-left font-medium">EXPIRY</th>
                  <th className="px-4 py-3 text-left font-medium">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3">HabukWebCo</td>
                  <td className="px-4 py-3">n8n Plus</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">active</span>
                  </td>
                  <td className="px-4 py-3">
                    <div>Monthly</div>
                    <div className="text-gray-500">Rp 30.000</div>
                  </td>
                  <td className="px-4 py-3">
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="peer sr-only" />
                      <span className="peer-checked:bg-indigo-600 peer-checked:translate-x-5 inline-block h-5 w-10 rounded-full bg-gray-200 transition relative">
                        <span className="absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow transition peer-checked:left-5"></span>
                      </span>
                    </label>
                  </td>
                  <td className="px-4 py-3">
                    <div>18/11/2025</div>
                    <div className="text-gray-500">(20 days left)</div>
                  </td>
                  <td className="px-4 py-3">
                    <Link to="/dashboard/services/manage" className="rounded-md border px-3 py-1 text-xs">Manage</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

function ManageService() {
  return (
    <div className="container-wide py-16 grid grid-cols-12 gap-6">
      {/* Sidebar (same as Services) */}
      <DashboardSidebar />
      {/* Main */}
      <main className="col-span-12 sm:col-span-9 lg:col-span-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/dashboard/services" className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-gray-700"><ArrowLeftIcon className="h-4 w-4"/> Back</Link>
            <h1 className="text-2xl font-bold">HabukWebCo <span className="ml-2 inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">active</span></h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-md bg-red-600 px-3 py-2 text-sm text-white"><TrashIcon className="h-4 w-4"/> Delete</button>
            <button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-gray-700"><ArrowPathIcon className="h-4 w-4"/> Restart</button>
            <button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-gray-700"><KeyIcon className="h-4 w-4"/> Reset Password</button>
          </div>
        </div>
        <div className="mt-6 rounded-xl border bg-white">
          <div className="border-b px-4 sm:px-6">
            <nav className="flex gap-2">
              <span className="inline-flex items-center gap-2 rounded-md bg-indigo-50 px-3 py-2 text-sm text-indigo-700">Access</span>
              <span className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700">Monitor</span>
              <span className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700">Logs</span>
              <span className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700">Upgrade & new</span>
              <span className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700">Configuration</span>
            </nav>
          </div>
          <div className="p-4 sm:p-6">
            <div className="text-sm font-medium">Access</div>
            <p className="mt-1 text-sm text-gray-600">Connect to your service using these endpoints</p>
            <div className="mt-4 rounded-lg border">
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-100">🔒</span>
                  <div className="text-sm font-medium">Admin Console</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-md border px-3 py-1 text-xs text-gray-700"><DocumentDuplicateIcon className="h-4 w-4"/></button>
                </div>
              </div>
              <div className="border-t px-4 py-3">
                <div className="flex items-center gap-2">
                  <input value="https://n8n-tgksojy0p4uf.n8x.web.id" readOnly className="w-full rounded-md border px-3 py-2 text-sm" />
                  <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white"><ArrowTopRightOnSquareIcon className="h-4 w-4"/> Open</button>
                </div>
                <p className="mt-2 text-xs text-gray-600">Administrative interface for managing your service settings and data.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function AddService() {
  const cards = [
    {title:'Activepieces', desc:'Automation Alternative to Zapier, easier than n8n', price:'Starts from Rp 60.000/month'},
    {title:'Go WhatsApp by Aldinokemal', desc:'Simple, Light, Easy WhatsApp Unofficial API', price:'Starts from Rp 15.000/month'},
    {title:'n8n', desc:'Automation using n8n', price:'Starts from Rp 15.000/month'},
    {title:'WAHA Plus Cloud', desc:'WhatsApp API Unofficial with WAHA Plus', price:'Starts from Rp 20.000/month'},
    {title:'Wuzapi', desc:'Lightweight WhatsApp Unofficial Multi Session', price:'Starts from Rp 20.000/month'},
  ]
  return (
    <div className="container-wide py-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/dashboard/services" className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-gray-700"><ArrowLeftIcon className="h-4 w-4"/> Back</Link>
          <h1 className="text-2xl font-bold">Add Service</h1>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="relative w-full max-w-md">
          <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-gray-400"/>
          <input className="w-full rounded-md border pl-10 pr-3 py-2 text-sm" placeholder="Search service categories..." />
        </div>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c)=> (
          <div key={c.title} className="rounded-xl border bg-white p-5">
            <div className="flex items-start justify-between">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">☁️</span>
            </div>
            <h3 className="mt-3 font-semibold">{c.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{c.desc}</p>
            <div className="mt-3 text-sm text-gray-700">{c.price}</div>
            <Link to="/dashboard/services/deployservice" className="mt-4 inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm text-white">Deploy</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

function DeployService() {
  const [template, setTemplate] = useState('n8n Basic')
  const [cycle, setCycle] = useState('Monthly')
  const prices = {
    'n8n Basic': 15000,
    'n8n Plus': 30000,
    'n8n Pro': 60000,
    'n8n Max': 120000,
    'n8n XMAX': 180000,
  }
  const fmt = (v)=>`Rp ${v.toLocaleString('id-ID')}`
  const calcCost = ()=>{
    const m = prices[template]
    if(cycle==='Monthly') return `${fmt(m)}/month`
    if(cycle==='Quarterly') return fmt(m*3)+`/3 months`
    if(cycle==='Biannual') return fmt(m*6)+`/6 months`
    if(cycle==='Yearly') return fmt(m*12)+`/year`
    return fmt(m)
  }
  return (
    <div className="container-wide py-16 grid grid-cols-12 gap-6">
      {/* Left */}
      <div className="col-span-12 lg:col-span-8">
        <div className="flex items-center gap-3">
          <Link to="/dashboard/services/addservice" className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-gray-700"><ArrowLeftIcon className="h-4 w-4"/> Back to Categories</Link>
          <h1 className="text-2xl font-bold">Deploy n8n</h1>
        </div>
        <div className="mt-6 rounded-xl border bg-white p-6">
          <div className="text-lg font-semibold">Service Configuration</div>
          <label className="mt-3 block text-sm font-medium">Service Name</label>
          <input className="mt-2 w-full rounded-md border px-3 py-2" placeholder="Enter your service name" />
        </div>
        <div className="mt-6 rounded-xl border bg-white p-6">
          <div className="text-lg font-semibold">Choose Template</div>
          <div className="mt-4 grid gap-3">
            {['n8n Basic','n8n Plus','n8n Pro','n8n Max','n8n XMAX'].map(t=> (
              <label key={t} className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 ${template===t? 'ring-2 ring-indigo-500':'hover:bg-gray-50'}`}>
                <input type="radio" name="template" checked={template===t} onChange={()=>setTemplate(t)} />
                <div className="flex-1">
                  <div className="font-medium">{t}</div>
                  <div className="mt-1 text-xs text-gray-600">{t==='n8n Basic' && 'Only for Small and Simple Tasks, NOT FOR CHATBOT OR AI AGENT'}{t==='n8n Plus' && 'Minimal Requirement for Building Chatbot and AI Agent'}{t==='n8n Pro' && 'Good Performance for Chatbot, AI Agent, and Automations'}{t==='n8n Max' && 'AWESOME Performance for Chatbot, AI Agent, and Automations'}{t==='n8n XMAX' && 'AWESOME Performance for Chatbot, AI Agent, and Automations'}</div>
                </div>
                <div className="text-sm text-gray-700">{fmt(prices[t])}/month</div>
              </label>
            ))}
          </div>
        </div>
        <div className="mt-6 rounded-xl border bg-white p-6">
          <div className="text-lg font-semibold">Choose Billing Cycle</div>
          <div className="mt-4 grid gap-3">
            {['Monthly','Quarterly','Biannual','Yearly'].map(c=> (
              <label key={c} className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 ${cycle===c? 'ring-2 ring-indigo-500 bg-indigo-50':'hover:bg-gray-50'}`}>
                <div>
                  <div className="font-medium">{c}</div>
                  <div className="text-xs text-gray-600">{c==='Monthly' && 'Billed monthly'}{c==='Quarterly' && 'Billed every 3 months'}{c==='Biannual' && 'Billed every 6 months'}{c==='Yearly' && 'Billed annually'}</div>
                </div>
                <input type="radio" name="cycle" checked={cycle===c} onChange={()=>setCycle(c)} />
                <div className="text-sm text-gray-700">{c==='Monthly'? fmt(prices[template])+'/month' : calcCost()}</div>
              </label>
            ))}
          </div>
        </div>
      </div>
      {/* Right */}
      <aside className="col-span-12 lg:col-span-4">
        <div className="rounded-xl border bg-white p-6">
          <div className="text-lg font-semibold">Deployment Summary</div>
          <div className="mt-3 grid gap-2 text-sm">
            <div className="flex items-center justify-between"><span className="text-gray-600">Service Type</span><span>n8n</span></div>
            <div className="flex items-center justify-between"><span className="text-gray-600">Template</span><span>{template}</span></div>
            <div className="flex items-center justify-between"><span className="text-gray-600">Billing Cycle</span><span>{cycle}</span></div>
          </div>
          <div className="mt-4 rounded-lg border p-4">
            <div className="text-sm text-gray-600">Cost</div>
            <div className="text-xl font-semibold">{calcCost()}</div>
          </div>
          <button className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-white">Deploy Service</button>
        </div>
      </aside>
    </div>
  )
}

function DashboardVPS() {
  return (
    <div className="container-wide py-16 grid grid-cols-12 gap-6">
      <DashboardSidebar />
      <main className="col-span-12 sm:col-span-9 lg:col-span-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Virtual Private Servers</h1>
            <p className="text-sm text-gray-600">Manage your virtual private servers</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-gray-700"><ArrowPathIcon className="h-4 w-4"/> Refresh</button>
            <Link to="/dashboard/vps/createvps" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white"><ServerStackIcon className="h-4 w-4"/> Create VPS</Link>
          </div>
        </div>
        <div className="mt-4 rounded-xl border bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-gray-500">
                  <th className="px-4 py-3 text-left font-medium">NAME</th>
                  <th className="px-4 py-3 text-left font-medium">STATUS</th>
                  <th className="px-4 py-3 text-left font-medium">PLAN</th>
                  <th className="px-4 py-3 text-left font-medium">AUTO RENEWAL</th>
                  <th className="px-4 py-3 text-left font-medium">EXPIRY</th>
                  <th className="px-4 py-3 text-left font-medium">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-gray-600">No VPS found matching your criteria</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

function CreateVPS() {
  const [name, setName] = useState('')
  const [region, setRegion] = useState('Jakarta')
  const regions = [
    { id:'Jakarta', label:'Jakarta', sub:'Indonesia', flag:'🇮🇩', available:true },
    { id:'Singapore', label:'Singapore', sub:'Singapore', flag:'🇸🇬', available:false },
  ]
  return (
    <div className="container-wide py-16 grid grid-cols-12 gap-6">
      <DashboardSidebar />
      <main className="col-span-12 sm:col-span-9 lg:col-span-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="flex items-center gap-2">
            <Link to="/dashboard/vps" className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm text-gray-700"><ArrowLeftIcon className="h-4 w-4"/> Back</Link>
          </div>
          <h1 className="mt-3 text-2xl font-bold">Create VPS</h1>
          <p className="text-sm text-gray-600">Configure your virtual private server</p>
          <div className="mt-6 space-y-6">
            <div className="rounded-xl border bg-white p-4 sm:p-6">
              <label className="text-sm font-medium">VPS Name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter VPS name (minimum 3 characters)" className="mt-2 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="rounded-xl border bg-white p-4 sm:p-6">
              <div className="font-medium">Select Region</div>
              <p className="mt-1 text-sm text-gray-600">Choose the region closest to your users for better performance.</p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {regions.map(r=> (
                  <button key={r.id} onClick={()=>r.available && setRegion(r.id)} className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left ${region===r.id? 'border-indigo-300 bg-indigo-50':'hover:bg-gray-50'}`} disabled={!r.available}>
                    <div>
                      <div className="font-medium flex items-center gap-2">{r.flag} {r.label} {region===r.id && <span className="ml-2 inline-flex items-center rounded-full bg-indigo-100 px-2 py-0.5 text-xs text-indigo-700">Selected</span>}</div>
                      <div className="text-sm text-gray-500">{r.sub}</div>
                    </div>
                    {!r.available ? (
                      <span className="text-xs rounded-md bg-gray-100 px-2 py-1 text-gray-600">Coming Soon</span>
                    ) : (
                      <span className="text-indigo-600">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-xl border bg-white p-4 sm:p-6">
              <div className="font-medium">Select Server Plan</div>
              <p className="mt-1 text-sm text-gray-600">Choose the plan that best fits your needs.</p>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-gray-500">
                      <th className="px-4 py-2 text-left font-medium">Provider</th>
                      <th className="px-4 py-2 text-left font-medium">CPU</th>
                      <th className="px-4 py-2 text-left font-medium">Ram</th>
                      <th className="px-4 py-2 text-left font-medium">Storage</th>
                      <th className="px-4 py-2 text-left font-medium">Egress</th>
                      <th className="px-4 py-2 text-left font-medium">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={6} className="px-4 py-12 text-center text-gray-600">No VPS options available for selected region</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <aside className="col-span-12 lg:col-span-4">
          <div className="rounded-xl border bg-white p-4 sm:p-6">
            <div className="font-semibold">Configuration Summary</div>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex items-center justify-between"><dt className="text-gray-600">VPS Name</dt><dd className="font-medium">{name.trim().length>=3? name : 'Not specified'}</dd></div>
              <div className="flex items-center justify-between"><dt className="text-gray-600">Operating System</dt><dd className="font-medium">Ubuntu 24.04 LTS</dd></div>
              <div className="flex items-center justify-between"><dt className="text-gray-600">Region</dt><dd className="font-medium">{region==='Jakarta'? '🇮🇩 Jakarta' : '🇸🇬 Singapore'}</dd></div>
            </dl>
            <div className="mt-4 rounded-lg border p-4 text-center text-sm text-gray-600">No plan selected</div>
            <div className="mt-4 flex items-center justify-between text-sm"><span className="text-gray-600">Total Cost</span><span className="font-semibold text-indigo-700">Rp 0/month</span></div>
            <button className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm text-white">Create VPS</button>
          </div>
        </aside>
      </main>
    </div>
  )
}

function DashboardLearn() {
  return (
    <div className="container-wide py-16 grid grid-cols-12 gap-6">
      <DashboardSidebar />
      <main className="col-span-12 sm:col-span-9 lg:col-span-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50"><BookOpenIcon className="h-6 w-6 text-indigo-600"/></span>
            <div>
              <h1 className="text-2xl font-bold">Learn</h1>
              <p className="text-sm text-gray-600">Jelajahi materi pembelajaran, tutorial, dan kursus.</p>
            </div>
          </div>
          <Link to="/dashboard/learn/course" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white">Mulai Course</Link>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map(i=> (
            <div key={i} className="rounded-xl border bg-white overflow-hidden">
              <div className="h-32 bg-gray-100 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-12 w-12 text-gray-300"><rect x="4" y="4" width="16" height="16" rx="4" /></svg>
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-500">Kursus</div>
                <div className="font-semibold">Dasar Automasi No-Code</div>
                <p className="mt-1 text-sm text-gray-600">Belajar alur kerja, integrasi, dan praktik terbaik.</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-500">6 Modul • 2 jam</span>
                  <Link to="/dashboard/learn/course" className="text-sm text-indigo-600">Lihat</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

function LearnCourse() {
  return (
    <div className="container-wide py-16 grid grid-cols-12 gap-6">
      <DashboardSidebar />
      <main className="col-span-12 sm:col-span-9 lg:col-span-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <h1 className="text-2xl font-bold">Dasar Automasi No-Code</h1>
          <p className="text-sm text-gray-600">Pelajari konsep inti automasi dan bangun alur kerja pertama Anda.</p>
          <div className="mt-6 rounded-xl border bg-white">
            <div className="flex items-center gap-2 border-b px-4 py-3 text-sm">
              <button className="rounded-md px-3 py-1 bg-indigo-50 text-indigo-700">Curriculum</button>
              <button className="rounded-md px-3 py-1">Overview</button>
              <button className="rounded-md px-3 py-1">Resources</button>
            </div>
            <div className="p-4 space-y-3">
              {[
                {t:'Pengantar Automasi', d:'Memahami konsep dan use case.'},
                {t:'Mengenal Trigger & Action', d:'Cara kerja event dan aksi.'},
                {t:'Membuat Workflow Pertama', d:'Langkah-langkah praktis.'},
                {t:'Integrasi API Sederhana', d:'Koneksi layanan eksternal.'},
                {t:'Error Handling', d:'Strategi dan tips.'},
                {t:'Publikasi & Monitoring', d:'Menjalankan dan memantau.'},
              ].map((m,i)=> (
                <div key={i} className="rounded-lg border p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{i+1}. {m.t}</div>
                      <div className="text-xs text-gray-500">{m.d}</div>
                    </div>
                    <Link to="/dashboard/learn/course/startlearning" className="text-sm text-indigo-600">Mulai</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <aside className="col-span-12 lg:col-span-4">
          <div className="rounded-xl border bg-white p-4">
            <div className="font-semibold">Informasi Kursus</div>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex items-center justify-between"><dt className="text-gray-600">Level</dt><dd className="font-medium">Beginner</dd></div>
              <div className="flex items-center justify-between"><dt className="text-gray-600">Durasi</dt><dd className="font-medium">2 Jam</dd></div>
              <div className="flex items-center justify-between"><dt className="text-gray-600">Modul</dt><dd className="font-medium">6</dd></div>
            </dl>
            <Link to="/dashboard/learn/course/startlearning" className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm text-white">Start Learning</Link>
          </div>
        </aside>
      </main>
    </div>
  )
}

function StartLearning() {
  return (
    <div className="container-wide py-16 grid grid-cols-12 gap-6">
      <DashboardSidebar />
      <main className="col-span-12 sm:col-span-9 lg:col-span-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500">Modul 1 dari 6</div>
              <h1 className="text-2xl font-bold">Pengantar Automasi</h1>
            </div>
            <div className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm"><ClockIcon className="h-4 w-4"/> 20 menit</div>
          </div>
          <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
            <div className="h-2 w-1/6 rounded-full bg-indigo-600"></div>
          </div>
          <div className="mt-6 space-y-6">
            <div className="rounded-xl border bg-white p-4">
              <div className="font-medium">Video Pembelajaran</div>
              <div className="mt-3 h-56 w-full rounded-lg bg-gray-100 flex items-center justify-center">
                <VideoCameraIcon className="h-10 w-10 text-gray-300"/>
              </div>
            </div>
            <div className="rounded-xl border bg-white p-4">
              <div className="font-medium">Materi Ringkas</div>
              <p className="mt-2 text-sm text-gray-700">Automasi membantu mengeksekusi alur kerja berulang secara konsisten. Pada modul ini Anda akan memahami konsep trigger dan action, serta contoh use case.</p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
                <li>Konsep dasar automasi</li>
                <li>Komponen utama: Trigger & Action</li>
                <li>Contoh alur kerja sederhana</li>
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <Link to="/dashboard/learn/course" className="rounded-md border px-4 py-2 text-sm">Sebelumnya</Link>
              <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white">Lanjut</button>
            </div>
          </div>
        </div>
        <aside className="col-span-12 lg:col-span-4">
          <div className="rounded-xl border bg-white p-4">
            <div className="font-semibold">Progress</div>
            <ol className="mt-3 space-y-2 text-sm">
              {['Pengantar Automasi','Trigger & Action','Workflow Pertama','Integrasi API','Error Handling','Publikasi & Monitoring'].map((t,i)=> (
                <li key={i} className={`flex items-center justify-between rounded-md px-3 py-2 ${i===0? 'bg-indigo-50 text-indigo-700':'bg-white'}`}>
                  <span>{i+1}. {t}</span>
                  {i===0 && <CheckCircleIcon className="h-4 w-4"/>}
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </main>
    </div>
  )
}

function DashboardDatabase() {
  return (
    <div className="container-wide py-16 grid grid-cols-12 gap-6">
      <DashboardSidebar />
      <main className="col-span-12 sm:col-span-9 lg:col-span-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Managed Databases</h1>
            <p className="text-sm text-gray-600">Manage your PostgreSQL, MySQL, and MariaDB databases</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-gray-700"><ArrowPathIcon className="h-4 w-4"/> Refresh</button>
            <Link to="/dashboard/database/createdatabase" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white"><CircleStackIcon className="h-4 w-4"/> Create Database</Link>
          </div>
        </div>
        <div className="mt-4 rounded-xl border bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-gray-500">
                  <th className="px-4 py-3 text-left font-medium">NAME</th>
                  <th className="px-4 py-3 text-left font-medium">STATUS</th>
                  <th className="px-4 py-3 text-left font-medium">USAGE</th>
                  <th className="px-4 py-3 text-left font-medium">AUTO RENEWAL</th>
                  <th className="px-4 py-3 text-left font-medium">PRICE</th>
                  <th className="px-4 py-3 text-left font-medium">EXPIRY</th>
                  <th className="px-4 py-3 text-left font-medium">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={7} className="px-4 py-16 text-center">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">💾</div>
                    <div className="mt-2 text-sm text-gray-600">No databases found</div>
                    <Link to="/dashboard/database/createdatabase" className="mt-3 inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-xs text-white"><PlusIcon className="h-4 w-4"/> Create Database</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

function CreateDatabase() {
  const [dbName, setDbName] = useState('')
  const [size, setSize] = useState(1)
  const [type, setType] = useState('Shared')
  const pricePerGb = 10000
  const cost = size * pricePerGb
  return (
    <div className="container-wide py-16 grid grid-cols-12 gap-6">
      <DashboardSidebar />
      <main className="col-span-12 sm:col-span-9 lg:col-span-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="flex items-center gap-2">
            <Link to="/dashboard/database" className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm text-gray-700"><ArrowLeftIcon className="h-4 w-4"/> Back</Link>
          </div>
          <h1 className="mt-3 text-2xl font-bold">Create Database</h1>
          <p className="text-sm text-gray-600">Choose a database type and configure your managed database</p>
          <div className="mt-6 space-y-6">
            <div className="rounded-xl border bg-white p-4 sm:p-6">
              <div className="font-medium">Database Configuration</div>
              <label className="mt-3 block text-sm font-medium">Database Name</label>
              <input value={dbName} onChange={e=>setDbName(e.target.value)} placeholder="my-database" className="mt-2 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
              <p className="mt-1 text-xs text-gray-500">Choose a unique name for your database instance</p>
            </div>
            <div className="rounded-xl border bg-white p-4 sm:p-6">
              <div className="font-medium">Select Database Type</div>
              <div className="mt-4 rounded-lg border bg-gray-50 p-8 text-center">
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-white">💾</div>
                <div className="mt-2 text-sm text-gray-600">No Database Types Available</div>
                <p className="mt-1 text-xs text-gray-500">Database types are currently not available. Please try again later or contact support if this issue persists.</p>
              </div>
            </div>
            <div className="rounded-xl border bg-white p-4 sm:p-6">
              <div className="font-medium">Storage Size</div>
              <p className="mt-1 text-sm text-gray-600">Choose the storage size for your database.</p>
              <div className="mt-4">
                <input type="range" min={1} max={20} value={size} onChange={e=>setSize(Number(e.target.value))} className="w-full"/>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span>Storage: {size} GB</span>
                  <span className="text-gray-600">Storage cost: Rp {(size*pricePerGb).toLocaleString('id-ID')}/month</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl border bg-white p-4 sm:p-6">
              <div className="font-medium">Database Type</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <button onClick={()=>setType('Shared')} className={`rounded-xl border px-4 py-3 text-left ${type==='Shared'? 'border-indigo-300 bg-indigo-50':'hover:bg-gray-50'}`}>
                  <div className="font-medium">Shared</div>
                  <div className="text-sm text-gray-600">Cost-effective shared database instance</div>
                </button>
                <button disabled className="rounded-xl border px-4 py-3 text-left opacity-60">
                  <div className="font-medium">Dedicated</div>
                  <div className="text-sm text-gray-600">High-performance dedicated database instance</div>
                  <div className="mt-2 inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700">Coming Soon</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <aside className="col-span-12 lg:col-span-4">
          <div className="rounded-xl border bg-white p-4 sm:p-6">
            <div className="font-semibold">Summary</div>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex items-center justify-between"><dt className="text-gray-600">Database Type</dt><dd className="font-medium">{type}</dd></div>
              <div className="flex items-center justify-between"><dt className="text-gray-600">Storage Size</dt><dd className="font-medium">{size} GB</dd></div>
              <div className="flex items-center justify-between"><dt className="text-gray-600">Type</dt><dd className="font-medium">{type}</dd></div>
            </dl>
            <div className="mt-4 flex items-center justify-between text-sm"><span className="text-gray-600">Storage Cost</span><span className="font-semibold text-indigo-700">Rp {cost.toLocaleString('id-ID')}/month</span></div>
            <button className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm text-white">Create Database</button>
          </div>
        </aside>
      </main>
    </div>
  )
}

// Community Pages
function DashboardCommunity() {
  const [search, setSearch] = useState('')
  const templates = [
    { id: 1, name: 'Contoh - Kirim Email Otomatis', desc: 'Workflow n8n untuk kirim email berkala', likes: 123, downloads: 456 },
    { id: 2, name: 'Notion Sync', desc: 'Sinkronisasi data ke Notion', likes: 98, downloads: 210 },
    { id: 3, name: 'Webhook to Sheets', desc: 'Simpan data webhook ke Google Sheets', likes: 67, downloads: 180 },
  ]
  const creators = [
    { id: 1, name: 'Creator A', templates: 12, likes: 540 },
    { id: 2, name: 'Creator B', templates: 7, likes: 320 },
  ]
  const filtered = templates.filter(t => t.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="container-wide py-16 grid grid-cols-12 gap-6">
      <DashboardSidebar />
      <main className="col-span-12 sm:col-span-9 lg:col-span-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Community</h1>
            <p className="text-sm text-gray-600">Temukan template n8n, kreator, dan diskusi</p>
          </div>
          <Link to="/dashboard/community/creator/create" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm text-white">
            <PlusIcon className="h-4 w-4"/> Buat Template
          </Link>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <div className="relative w-full max-w-lg">
            <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-gray-400"/>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Cari template..." className="w-full rounded-xl border pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"/>
          </div>
          <Link to="/dashboard/community/n8ntemplates/contoh" className="rounded-md border px-3 py-2 text-sm">Lihat Contoh</Link>
        </div>
        <div className="mt-8">
          <div className="flex items-center gap-2 text-sm">
            <button className="rounded-md bg-indigo-50 px-3 py-1.5 text-indigo-700">N8n Templates</button>
            <Link to="/dashboard/community/creator" className="rounded-md px-3 py-1.5 text-gray-700 hover:bg-gray-50">Creators</Link>
            <button className="rounded-md px-3 py-1.5 text-gray-700 hover:bg-gray-50" disabled>Discussions</button>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(t => (
              <div key={t.id} className="rounded-xl border bg-white p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <p className="text-sm text-gray-600">{t.desc}</p>
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700">
                    <HeartIcon className="h-3 w-3"/> {t.likes}
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-gray-600">
                  <span>Downloads: {t.downloads}</span>
                  <Link to="/dashboard/community/n8ntemplates/contoh" className="rounded-md border px-2 py-1">Detail</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <div className="font-medium">Creators Spotlight</div>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {creators.map(c => (
                <div key={c.id} className="rounded-xl border bg-white p-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">{c.name[0]}</div>
                    <div>
                      <div className="font-semibold">{c.name}</div>
                      <div className="text-sm text-gray-600">{c.templates} templates • {c.likes} likes</div>
                    </div>
                  </div>
                  <Link to="/dashboard/community/creator" className="mt-3 inline-flex rounded-md border px-3 py-1.5 text-sm">Lihat Creator</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function N8nTemplateDetail() {
  return (
    <div className="container-wide py-16 grid grid-cols-12 gap-6">
      <DashboardSidebar />
      <main className="col-span-12 sm:col-span-9 lg:col-span-10">
        <div className="flex items-center gap-2">
          <Link to="/dashboard/community" className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm text-gray-700"><ArrowLeftIcon className="h-4 w-4"/> Back</Link>
        </div>
        <h1 className="mt-3 text-2xl font-bold">Contoh Template n8n</h1>
        <p className="text-sm text-gray-600">Detail template, preview, dan aksi</p>
        <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-xl border bg-white p-4">
              <div className="h-40 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">Preview Area</div>
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1"><HeartIcon className="h-3 w-3"/> 120</span>
                <span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1"><ClipboardDocumentIcon className="h-3 w-3"/> 340 downloads</span>
              </div>
              <div className="mt-4">
                <div className="font-medium">Deskripsi</div>
                <p className="text-sm text-gray-600">Workflow untuk mengirim email otomatis setiap hari dengan data dari Google Sheets.</p>
              </div>
              <div className="mt-4">
                <div className="font-medium">Langkah Utama</div>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
                  <li>Ambil data dari Google Sheets</li>
                  <li>Proses dengan Function Node</li>
                  <li>Kirim email melalui SMTP</li>
                </ul>
              </div>
            </div>
          </div>
          <aside className="col-span-12 lg:col-span-4">
            <div className="rounded-xl border bg-white p-4">
              <div className="font-semibold">Aksi</div>
              <button className="mt-3 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm text-white">Gunakan Template</button>
              <button className="mt-2 w-full rounded-md border px-4 py-2 text-sm">Download JSON</button>
              <button className="mt-2 w-full rounded-md border px-4 py-2 text-sm">Simpan</button>
              <div className="mt-4">
                <div className="font-semibold">Creator</div>
                <div className="mt-2 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">C</div>
                  <div>
                    <div className="font-medium">Creator A</div>
                    <Link to="/dashboard/community/creator/profile" className="text-sm text-indigo-700">Lihat Profil</Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

function CreatorDashboard() {
  const stats = [
    { label: 'Templates', value: 12 },
    { label: 'Likes', value: 540 },
    { label: 'Downloads', value: 3200 },
  ]
  const myTemplates = [
    { id: 1, name: 'Contoh - Kirim Email Otomatis', likes: 120, downloads: 340 },
    { id: 2, name: 'Notion Sync', likes: 80, downloads: 200 },
  ]
  return (
    <div className="container-wide py-16 grid grid-cols-12 gap-6">
      <DashboardSidebar />
      <main className="col-span-12 sm:col-span-9 lg:col-span-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Creator Dashboard</h1>
            <p className="text-sm text-gray-600">Ringkasan performa dan template Anda</p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/dashboard/community/creator/create" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm text-white"><PlusIcon className="h-4 w-4"/> Buat Template</Link>
            <Link to="/dashboard/community/creator/profile" className="rounded-md border px-4 py-2 text-sm">Profil</Link>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map(s => (
            <div key={s.label} className="rounded-xl border bg-white p-4">
              <div className="text-sm text-gray-600">{s.label}</div>
              <div className="mt-1 text-2xl font-bold">{s.value}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-xl border bg-white">
          <div className="flex items-center justify-between border-b p-4">
            <div className="font-medium">My Templates</div>
            <Link to="/dashboard/community/creator/create" className="rounded-md border px-3 py-1.5 text-sm">Create New</Link>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Likes</th>
                <th className="px-4 py-2">Downloads</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {myTemplates.map(t => (
                <tr key={t.id} className="border-t">
                  <td className="px-4 py-2 font-medium">{t.name}</td>
                  <td className="px-4 py-2">{t.likes}</td>
                  <td className="px-4 py-2">{t.downloads}</td>
                  <td className="px-4 py-2 text-right"><Link to="/dashboard/community/n8ntemplates/contoh" className="rounded-md border px-3 py-1.5">Detail</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

function CreatorProfile() {
  return (
    <div className="container-wide py-16 grid grid-cols-12 gap-6">
      <DashboardSidebar />
      <main className="col-span-12 sm:col-span-9 lg:col-span-10">
        <h1 className="text-2xl font-bold">Creator Profile</h1>
        <p className="text-sm text-gray-600">Kelola identitas publik Anda</p>
        <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <div className="rounded-xl border bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">C</div>
                <div>
                  <div className="font-semibold">Creator A</div>
                  <div className="text-sm text-gray-600">Pembuat template n8n</div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xs text-gray-600">Templates</div>
                  <div className="text-lg font-bold">12</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Likes</div>
                  <div className="text-lg font-bold">540</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Downloads</div>
                  <div className="text-lg font-bold">3200</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-xl border bg-white p-4">
              <div className="font-medium">Edit Profile</div>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-sm">Nama</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" placeholder="Creator A"/>
                </div>
                <div>
                  <label className="text-sm">Website</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" placeholder="https://..."/>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Bio</label>
                  <textarea className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" rows={3} placeholder="Tuliskan bio singkat"></textarea>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white">Simpan</button>
                <button className="rounded-md border px-4 py-2 text-sm">Batal</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function CreatorCreate() {
  return (
    <div className="container-wide py-16 grid grid-cols-12 gap-6">
      <DashboardSidebar />
      <main className="col-span-12 sm:col-span-9 lg:col-span-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="flex items-center gap-2">
            <Link to="/dashboard/community/creator" className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm text-gray-700"><ArrowLeftIcon className="h-4 w-4"/> Back</Link>
          </div>
          <h1 className="mt-3 text-2xl font-bold">Buat Template</h1>
          <p className="text-sm text-gray-600">Isi detail template untuk dipublikasikan</p>
          <div className="mt-6 space-y-6">
            <div className="rounded-xl border bg-white p-4">
              <div className="font-medium">Informasi Template</div>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-sm">Nama Template</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" placeholder="Contoh - Kirim Email Otomatis"/>
                </div>
                <div>
                  <label className="text-sm">Kategori</label>
                  <select className="mt-1 w-full rounded-xl border px-3 py-2 text-sm">
                    <option>Automation</option>
                    <option>Integrations</option>
                    <option>Data</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Deskripsi</label>
                  <textarea className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" rows={3} placeholder="Jelaskan fungsi template"></textarea>
                </div>
              </div>
            </div>
            <div className="rounded-xl border bg-white p-4">
              <div className="font-medium">File Template</div>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-sm">Upload JSON</label>
                  <input type="file" className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"/>
                </div>
                <div>
                  <label className="text-sm">Atau URL</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" placeholder="https://..."/>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500">Hanya UI, belum ada penyimpanan backend.</p>
            </div>
          </div>
        </div>
        <aside className="col-span-12 lg:col-span-4">
          <div className="rounded-xl border bg-white p-4">
            <div className="font-semibold">Ringkasan</div>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex items-center justify-between"><dt className="text-gray-600">Kategori</dt><dd className="font-medium">Automation</dd></div>
              <div className="flex items-center justify-between"><dt className="text-gray-600">Publik</dt><dd className="font-medium">Ya</dd></div>
            </dl>
            <button className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm text-white">Publish</button>
            <button className="mt-2 w-full rounded-md border px-4 py-2 text-sm">Simpan Draft</button>
          </div>
        </aside>
      </main>
    </div>
  )
}
