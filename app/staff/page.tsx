import StaffSection from '../components/StaffSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Our Team | VyperBD',
  description: 'Meet the VyperBD team — the people behind your hosting experience.',
}

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      <Navbar />
      <StaffSection />
      <Footer />
    </div>
  )
}
