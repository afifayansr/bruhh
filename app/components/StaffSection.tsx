"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Shield, Users } from "lucide-react"
import { FaDiscord, FaFacebook, FaWhatsapp } from "react-icons/fa"

// ─────────────────────────────────────────────
//  ADD YOUR STAFF HERE
// ─────────────────────────────────────────────
const staff = [
  {
    name: "Ayan",
    role: "Owner & Founder",
    avatar: "",
    badge: "Owner",
    bio: "MERN Stack developer with 3+ years of experience in full-stack development, hosting infrastructure, and product development. Founded VyperBD to bring affordable, reliable hosting to the region.",
    skills: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js", "REST APIs", "Web Development", "Deployment", "Hosting Infrastructure", "Product Development"],
    experience: "3+ Years",
    website: "https://afifayan.fun",
    discord: "",
    facebook: "",
    whatsapp: "",
  },
  {
    name: "Maruf",
    role: "CEO",
    avatar: "",
    badge: "CEO",
    bio: "Leads VyperBD's operations, product strategy, and business development. Responsible for shaping the company's direction and maintaining operational quality across all services.",
    skills: ["Leadership", "Operations", "Product Strategy", "Business Development", "Multi Development"],
    experience: "",
    website: "",
    discord: "",
    facebook: "",
    whatsapp: "",
  },
  {
    name: "Ajmain Arabi",
    role: "Sys Manager",
    avatar: "",
    badge: "Manager",
    bio: "Student, freelancer, and full-stack developer with 3.5 years of experience. Manages system infrastructure, server configuration, and Minecraft development for VyperBD's hosted services.",
    skills: ["System Management", "Full Stack Development", "Minecraft Development", "Server Management", "Infrastructure", "Freelancing"],
    experience: "3.5 Years",
    website: "",
    discord: "",
    facebook: "",
    whatsapp: "",
  },
  {
    name: "Abdus Samad",
    role: "Minecraft Developer",
    avatar: "",
    badge: "Developer",
    bio: "Minecraft server developer with 3 years of hands-on experience in server development, configuration, optimization, and infrastructure management for VyperBD's Minecraft hosting services.",
    skills: ["Minecraft Development", "Server Development", "Configuration", "Optimization", "Minecraft Infrastructure"],
    experience: "3 Years",
    website: "",
    discord: "",
    facebook: "",
    whatsapp: "",
  },
]

const badgeColorMap: Record<string, string> = {
  Owner:      "bg-yellow-500",
  "Co-Owner": "bg-orange-500",
  Admin:      "bg-red-500",
  Manager:    "bg-purple-500",
  Support:    "bg-green-600",
  Developer:  "bg-blue-500",
  Staff:      "bg-gray-500",
}

export default function StaffSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0a0b0f] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-green-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center gap-2 card-primary px-4 py-2 rounded-tl-2xl rounded-br-2xl mb-5 border border-secondary">
            <Shield className="w-4 h-4 icon-text-primary" />
            <span className="icon-text-primary text-sm font-medium">The Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white orbitron-font mb-4">
            Meet Our{" "}
            <span className="icon-text-primary">Staff</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            The dedicated people behind VyperBD — here to ensure your hosting experience is always top-tier.
          </p>
        </motion.div>

        {/* Staff grid */}
        {staff.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center py-24 gap-4"
          >
            <Users className="w-16 h-16 text-green-400/40" />
            <p className="text-gray-400 dark:text-gray-500 text-lg">Staff info coming soon…</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {staff.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="relative bg-white dark:bg-gray-900/30 border border-secondary rounded-2xl overflow-hidden hover:shadow-green-500/10 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600" />

                {/* Avatar */}
                <div className="flex justify-center pt-8 pb-4">
                  {member.avatar ? (
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-green-500/30 shadow-lg"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      {member.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="px-5 pb-5 flex flex-col flex-1 items-center text-center gap-2">
                  <span className={`text-xs font-bold text-white px-3 py-0.5 rounded-full ${badgeColorMap[member.badge] ?? "bg-gray-500"}`}>
                    {member.badge}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white orbitron-font">{member.name}</h3>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">{member.role}</p>
                  {member.bio && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{member.bio}</p>
                  )}

                  {/* Skills */}
                  {(member as any).skills?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {((member as any).skills as string[]).map((skill: string) => (
                        <span key={skill} className="text-xs px-2 py-0.5 rounded-md bg-green-500/10 border border-green-500/20 text-green-400">{skill}</span>
                      ))}
                    </div>
                  )}

                  {/* Experience + website */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-800/40 w-full">
                    {(member as any).experience && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">{(member as any).experience} experience</span>
                    )}
                    {(member as any).website && (
                      <a href={(member as any).website} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-green-500 hover:text-green-400 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Portfolio
                      </a>
                    )}
                  </div>

                  {/* Social icons */}
                  {((member.discord || member.facebook || member.whatsapp)) && (
                    <div className="flex gap-3 mt-2 w-full">
                      {member.discord && (
                        <a href={`https://discord.com/users/${member.discord}`} target="_blank" rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-[#5865F2]/10 hover:bg-[#5865F2]/20 flex items-center justify-center transition-colors">
                          <FaDiscord className="w-4 h-4 text-[#5865F2]" />
                        </a>
                      )}
                      {member.facebook && (
                        <a href={member.facebook} target="_blank" rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 flex items-center justify-center transition-colors">
                          <FaFacebook className="w-4 h-4 text-blue-500" />
                        </a>
                      )}
                      {member.whatsapp && (
                        <a href={`https://wa.me/${member.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-green-500/10 hover:bg-green-500/20 flex items-center justify-center transition-colors">
                          <FaWhatsapp className="w-4 h-4 text-green-500" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
