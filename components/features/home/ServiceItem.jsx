export default function ServiceItem({ icon, title, description }) {
  return (
    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
      <div className="text-[#FFC402] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#0A0F17] mb-3 group-hover:text-[#FFC402] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
} 