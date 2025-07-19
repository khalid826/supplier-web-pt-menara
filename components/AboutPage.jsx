import FadeInOnScroll from "./FadeInOnScroll";
import SectorItem from "./SectorItem";
import MissionVisionItem from "./MissionVisionItem";
import { Target, Eye, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <FadeInOnScroll variant="up">
      <div className="py-24 animate-fade-in min-h-screen">
        <div className="max-w-screen-2xl mx-auto px-8 sm:px-10 lg:px-16">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl font-bold text-[#0A0F17] mb-6">About PT Menara Adhi Sitara</h1>
            <p className="text-xl text-gray-600">Your trusted partner in electrical and instrumentation solutions</p>
          </div>

          <div className="space-y-16">
            {/* Company Profile */}
            <div className="bg-white rounded-2xl shadow-xl p-12 transform hover:scale-[1.02] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F17] mb-6">Company Profile</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#FFC402] to-[#e6b002] rounded-2xl p-8 text-center">
                  <Users className="h-24 w-24 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Established Excellence</h3>
                  <p className="text-white/90">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <MissionVisionItem
                icon={<Target className="h-12 w-12 text-[#FFC402]" />}
                title="Our Mission"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
              <MissionVisionItem
                icon={<Eye className="h-12 w-12 text-[#FFC402]" />}
                title="Our Vision"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
            </div>

            {/* Sectors We Serve */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-12 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-[#0A0F17] mb-10 text-center">Sectors We Serve</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <SectorItem
                  letter="A"
                  title="Sector 1"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <SectorItem
                  letter="A"
                  title="Sector 2"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <SectorItem
                  letter="A"
                  title="Sector 3"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  )
}