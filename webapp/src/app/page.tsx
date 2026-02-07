import type { ReactNode } from "react";
import { FaFacebook, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { LuClipboardCheck, LuTable2 } from "react-icons/lu";
import {
  MdAutoAwesome,
  MdDeliveryDining,
  MdLocationPin,
  MdOutlineChat,
  MdOutlineInventory,
  MdOutlineLocalPhone,
  MdOutlinePerson,
  MdOutlineSearch,
  MdOutlineSend,
} from "react-icons/md";
import { TbFileSpreadsheet, TbMapPin } from "react-icons/tb";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { HiOutlineChartPie } from "react-icons/hi";

type WorkflowNode = {
  title: string;
  description: string;
  icon: ReactNode;
  accent: string;
};

const workflowNodes: WorkflowNode[] = [
  {
    title: "Facebook Ads",
    description: "Click-to-WhatsApp campaign",
    icon: <FaFacebook className="text-[#1877F2]" />,
    accent: "from-sky-100 to-white",
  },
  {
    title: "WhatsApp Cloud API",
    description: "Incoming lead messages",
    icon: <FaWhatsapp className="text-[#25D366]" />,
    accent: "from-emerald-100 to-white",
  },
  {
    title: "AI Chatbot",
    description: "Auto replies & product info",
    icon: <MdAutoAwesome className="text-[#075E54]" />,
    accent: "from-teal-100 to-white",
  },
  {
    title: "Order Capture",
    description: "Structured form submission",
    icon: <LuClipboardCheck className="text-[#3B82F6]" />,
    accent: "from-blue-100 to-white",
  },
  {
    title: "Google Sheets",
    description: "Central order database",
    icon: <TbFileSpreadsheet className="text-[#0F9D58]" />,
    accent: "from-green-100 to-white",
  },
  {
    title: "Telegram Alerts",
    description: "Ops team notifications",
    icon: <FaTelegramPlane className="text-[#3B82F6]" />,
    accent: "from-indigo-100 to-white",
  },
  {
    title: "Dispatch Rider",
    description: "One-click delivery dispatch",
    icon: <MdDeliveryDining className="text-[#FF8A00]" />,
    accent: "from-amber-100 to-white",
  },
];

const chatbotBranches = [
  {
    title: "View product price",
    message: "Spin Mop | GHS 200\nAir Fryer | GHS 950",
  },
  {
    title: "Order now",
    message: "Perfect! Let’s capture your details to process delivery.",
  },
  {
    title: "Delivery areas",
    message: "Accra • Tema • Kasoa • Spintex • East Legon",
  },
  {
    title: "FAQs",
    message: "Delivery within 24hrs. Payment on delivery available.",
  },
];

const orders = [
  {
    customer: "Kwame Mensah",
    phone: "+233 55 123 4567",
    location: "Kasoa",
    product: "Spin Mop",
    status: "New",
    date: "Jun 18, 2024",
  },
  {
    customer: "Ama Boateng",
    phone: "+233 24 987 6543",
    location: "Tema",
    product: "Air Fryer",
    status: "Confirmed",
    date: "Jun 18, 2024",
  },
  {
    customer: "Yaw Owusu",
    phone: "+233 20 555 7788",
    location: "East Legon",
    product: "Blender Pro",
    status: "Dispatched",
    date: "Jun 17, 2024",
  },
  {
    customer: "Akosua Nyame",
    phone: "+233 50 444 0011",
    location: "Spintex",
    product: "Water Dispenser",
    status: "Delivered",
    date: "Jun 17, 2024",
  },
];

const analytics = [
  {
    label: "Conversations handled",
    value: "482",
    trend: "+32%",
    detail: "Automated this week",
  },
  {
    label: "Orders captured",
    value: "126",
    trend: "+18%",
    detail: "vs last 7 days",
  },
  {
    label: "Dispatch success",
    value: "94%",
    trend: "+4%",
    detail: "Riders completed",
  },
  {
    label: "Response time",
    value: "Instant",
    trend: "-6s",
    detail: "Manual fallback 18%",
  },
];

const statusStyles: Record<string, string> = {
  New: "bg-emerald-100 text-emerald-700",
  Confirmed: "bg-blue-100 text-blue-700",
  Dispatched: "bg-amber-100 text-amber-700",
  Delivered: "bg-slate-100 text-slate-700",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-6 pb-20 pt-16 lg:px-12">
        <header className="flex flex-col gap-6 rounded-3xl bg-white/80 p-10 shadow-lg shadow-slate-200/60 ring-1 ring-slate-100 backdrop-blur">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
            <BsLightningCharge className="text-base" />
            WhatsApp + n8n Automations
          </span>
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
              WhatsApp Sales Automation Dashboard
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              Automate Facebook Ad chats, capture orders, and dispatch deliveries instantly.
              A modern workflow hub built for Ghana-based ecommerce teams.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
              <MdOutlineSend className="text-slate-400" />
              Real-time WhatsApp pipelines
            </div>
            <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
              <TbMapPin className="text-slate-400" />
              Delivery-ready customer intel
            </div>
            <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
              <HiOutlineChartPie className="text-slate-400" />
              Growth analytics & SLA tracking
            </div>
          </div>
        </header>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Workflow Visual</h2>
            <p className="text-slate-600">
              n8n orchestration connecting Facebook Ads, WhatsApp Cloud API, AI chatbots, and last-mile logistics.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-10 shadow-md shadow-slate-200/60 ring-1 ring-slate-100">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-1 flex-col items-center gap-8 md:flex-row md:items-stretch md:gap-6">
                {workflowNodes.map((node, idx) => (
                  <div key={node.title} className="flex flex-col items-center md:flex-1">
                    <div
                      className={`relative flex w-full max-w-[220px] flex-col gap-3 rounded-2xl bg-gradient-to-br ${node.accent} p-6 text-center shadow-lg shadow-slate-200`}
                    >
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                        {node.icon}
                      </div>
                      <div className="space-y-1">
                        <p className="text-base font-semibold text-slate-900">{node.title}</p>
                        <p className="text-sm text-slate-600">{node.description}</p>
                      </div>
                    </div>
                    {idx !== workflowNodes.length - 1 && (
                      <div className="my-4 flex flex-col items-center text-slate-300">
                        <span className="hidden h-px w-12 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 md:block" />
                        <span className="block text-2xl md:hidden">↓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-slate-900">WhatsApp Chatbot Flow Builder</h2>
            <p className="text-slate-600">
              Drag-and-drop conversation paths power instant replies for Ghanaian shoppers.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="rounded-3xl bg-white p-8 shadow-md shadow-slate-200/60 ring-1 ring-slate-100">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                <IoChatbubbleEllipses className="text-lg text-emerald-500" />
                Live conversation flow
              </div>
              <div className="mt-6 flex flex-col gap-6">
                <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <span className="absolute -top-3 left-6 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow">
                    Trigger
                  </span>
                  <p className="text-sm font-semibold text-slate-500">Customer says</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">“Hi”</p>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="relative rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
                    <span className="absolute -top-3 left-6 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow">
                      Bot reply
                    </span>
                    <p className="text-sm font-semibold text-emerald-600">
                      Welcome to Agile Shop 🇬🇭
                    </p>
                    <p className="mt-3 text-slate-600">
                      How can we help you today? Choose an option below to get started.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {chatbotBranches.map((branch) => (
                        <button
                          key={branch.title}
                          className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600 transition hover:border-emerald-400 hover:bg-emerald-100"
                        >
                          {branch.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {chatbotBranches.map((branch) => (
                      <div
                        key={branch.title}
                        className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                      >
                        <span className="absolute -top-3 left-5 flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white shadow">
                          <MdOutlineChat className="text-base" />
                          {branch.title}
                        </span>
                        <p className="whitespace-pre-line text-sm text-slate-600">{branch.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-md shadow-slate-200/60 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-slate-900">Order capture form</h3>
              <p className="mt-1 text-sm text-slate-500">
                Structured WhatsApp form pushes qualified orders into Google Sheets.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { label: "Name", icon: <MdOutlinePerson className="text-slate-400" /> },
                  { label: "Location", icon: <MdLocationPin className="text-slate-400" /> },
                  { label: "Product", icon: <MdOutlineInventory className="text-slate-400" /> },
                  { label: "Quantity", icon: <LuTable2 className="text-slate-400" /> },
                  { label: "Phone number", icon: <MdOutlineLocalPhone className="text-slate-400" /> },
                ].map((field) => (
                  <label
                    key={field.label}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 shadow-sm"
                  >
                    <span className="text-lg">{field.icon}</span>
                    <span>{field.label}</span>
                  </label>
                ))}
              </div>
              <button className="mt-6 w-full rounded-xl bg-[#3B82F6] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-[#2563EB]">
                Save to Google Sheets
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-slate-900">Order Management Dashboard</h2>
            <p className="text-slate-600">
              CRM-style controls sync data with Google Sheets in real-time.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-md shadow-slate-200/60 ring-1 ring-slate-100">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500">
                <MdOutlineSearch className="text-base" />
                <span>Search customers, phone numbers, products…</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["All statuses", "Payment method", "Location"].map((filter) => (
                  <button
                    key={filter}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-emerald-200 hover:text-emerald-600"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-100 text-left text-sm">
                <thead className="text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Customer Name</th>
                    <th className="px-4 py-3">Phone Number</th>
                    <th className="px-4 py-3">Location</th>
                    <th className="px-4 py-3">Product Ordered</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {orders.map((order) => (
                    <tr key={order.customer} className="bg-white transition hover:bg-slate-50">
                      <td className="px-4 py-4 font-medium text-slate-900">{order.customer}</td>
                      <td className="px-4 py-4 text-slate-600">{order.phone}</td>
                      <td className="px-4 py-4 text-slate-600">{order.location}</td>
                      <td className="px-4 py-4 text-slate-600">{order.product}</td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                            statusStyles[order.status] ?? "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-slate-600">{order.date}</td>
                      <td className="px-4 py-4 text-right">
                        <button className="inline-flex items-center gap-2 rounded-full bg-[#3B82F6] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-[#2563EB]">
                          <MdDeliveryDining className="text-base" />
                          Dispatch Rider
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr,1.1fr]">
          <div className="rounded-3xl bg-white p-7 shadow-md shadow-slate-200/60 ring-1 ring-slate-100">
            <h2 className="text-2xl font-semibold text-slate-900">Telegram Notification Preview</h2>
            <p className="mt-1 text-slate-600">
              Instant order alerts keep operations aligned across channels.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-72 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-inner">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold">Telegram • Ops Squad</span>
                  <span>2m ago</span>
                </div>
                <div className="mt-4 space-y-3 rounded-2xl bg-white p-5 shadow-lg shadow-slate-200">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    NEW ORDER <span className="text-lg">🔔</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>
                      <span className="font-medium text-slate-900">Customer:</span> Kwame
                    </p>
                    <p>
                      <span className="font-medium text-slate-900">Product:</span> Spin Mop
                    </p>
                    <p>
                      <span className="font-medium text-slate-900">Location:</span> Kasoa
                    </p>
                    <p>
                      <span className="font-medium text-slate-900">Amount:</span> GHS 200
                    </p>
                  </div>
                  <button className="w-full rounded-xl bg-[#3B82F6] py-2 text-sm font-semibold text-white shadow-md shadow-blue-200">
                    Open Order
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-md shadow-slate-200/60 ring-1 ring-slate-100">
            <h2 className="text-2xl font-semibold text-slate-900">Delivery Dispatch Panel</h2>
            <p className="mt-1 text-slate-600">
              Rider assignment modal pushes live instructions via WhatsApp or Telegram.
            </p>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <MdDeliveryDining className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Dispatch Rider Modal</p>
                    <p className="text-xs text-slate-500">Triggered from order table</p>
                  </div>
                </div>
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="rounded-xl bg-white p-4 shadow-sm">
                      <p className="font-semibold text-slate-900">Customer details</p>
                    <p>Kwame • +233 55 123 4567</p>
                    <p>Kasoa, Accra</p>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="font-semibold text-slate-900">Order summary</p>
                    <p>Spin Mop • Qty 1</p>
                    <p>Collect GHS 200</p>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="font-semibold text-slate-900">Google Maps preview</p>
                    <div className="mt-2 h-32 rounded-xl bg-gradient-to-br from-emerald-100 via-white to-emerald-50"></div>
                  </div>
                </div>
                <button className="w-full rounded-xl bg-[#25D366] py-3 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition hover:bg-[#1EB855]">
                  Send Delivery Request
                </button>
              </div>
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Message preview to rider</p>
                <div className="space-y-3 rounded-xl bg-slate-50 p-5 text-sm text-slate-600 shadow-inner">
                  <p>
                    <span className="font-semibold text-slate-900">Pickup:</span> Warehouse, Spintex
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Dropoff:</span> Kwame • Kasoa
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Cash to collect:</span> GHS 200
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Notes:</span> Call on arrival, deliver within 2 hrs.
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900 p-4 text-xs text-slate-200">
                  WhatsApp Cloud API → Delivery Riders group
                </div>
                <button className="flex items-center justify-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
                  <FaWhatsapp className="text-base" />
                  Send via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-slate-900">Analytics Overview</h2>
            <p className="text-slate-600">
              Track automation health, sales velocity, and response efficiency.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {analytics.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-200/60"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                    {item.label}
                  </p>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600">
                    {item.trend}
                  </span>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-4xl font-bold text-slate-900">{item.value}</p>
                  <span className="text-xs text-slate-400">{item.detail}</span>
                </div>
                <div className="relative h-16 overflow-hidden rounded-2xl bg-slate-100">
                  <div className="absolute inset-0 flex items-end gap-1 p-3">
                    {Array.from({ length: 7 }).map((_, index) => (
                      <span
                        key={index}
                        className="flex-1 rounded-full bg-gradient-to-t from-emerald-200 to-emerald-500"
                        style={{ height: `${40 + Math.sin(index + 1) * 20 + 30}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="rounded-3xl bg-slate-900 p-8 text-slate-100 shadow-lg shadow-slate-500/20">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold">
                Built with WhatsApp Cloud API + n8n for agile African ecommerce teams.
              </p>
              <p className="text-sm text-slate-400">
                A lightweight alternative to Hifinox focused on clarity, automation, and speed-to-fulfillment.
              </p>
            </div>
            <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-md shadow-slate-500/30 transition hover:bg-slate-100">
              View Automation Playbook
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
