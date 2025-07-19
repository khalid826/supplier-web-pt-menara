export default function MissionVisionItem({ icon, title, content }) {
  return (
    <div className="group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up bg-white rounded-2xl shadow-xl p-8">
      <div className="text-[#FFC402] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#0A0F17] mb-4 group-hover:text-[#FFC402] transition-colors duration-300 text-center">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-center">{content}</p>
    </div>
  )
} 