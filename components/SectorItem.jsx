export default function SectorItem({ letter, title, description }) {
  return (
    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
      <div className="bg-[#FFC402] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
        <span className="text-2xl font-bold text-[#0A0F17]">{letter}</span>
      </div>
      <h4 className="text-lg font-semibold text-[#0A0F17] mb-2 group-hover:text-[#FFC402] transition-colors duration-300">
        {title}
      </h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
} 