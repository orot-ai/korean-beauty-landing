import {
  MdEmojiEvents,
  MdSchool,
  MdAttachMoney,
  MdStar,
  MdBrush,
  MdAutoAwesome
} from 'react-icons/md'

export default function Artists() {
  const artists = [
    {
      name: 'Master Jang',
      credentials: [
        { icon: <MdEmojiEvents className="w-6 h-6 text-amber-700" />, text: '7+ years experience', chinese: '7年以上經驗' },
        { icon: <MdSchool className="w-6 h-6 text-amber-700" />, text: 'Sanyuk University Professor', chinese: '三育保健大學教授' },
        { icon: <MdAttachMoney className="w-6 h-6 text-amber-700" />, text: '1 Billion KRW in revenue', chinese: '累積10億韓元業績' },
        { icon: <MdStar className="w-6 h-6 text-amber-700" />, text: '1000+ satisfied clients', chinese: '1000位以上滿意客戶' }
      ]
    },
    {
      name: 'Master Choi',
      credentials: [
        { icon: <MdEmojiEvents className="w-6 h-6 text-amber-700" />, text: 'Expert in hair stroke technique', chinese: '毛髮筆觸技術專家' },
        { icon: <MdBrush className="w-6 h-6 text-amber-700" />, text: 'Specialized in natural looks', chinese: '專精自然妝感' },
        { icon: <MdStar className="w-6 h-6 text-amber-700" />, text: 'Award-winning artist', chinese: '獲獎紋繡師' },
        { icon: <MdAutoAwesome className="w-6 h-6 text-amber-700" />, text: 'Premium service provider', chinese: '頂級服務提供者' }
      ]
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-12">
        <div className="absolute top-24 right-32 w-88 h-88 bg-beige-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-16 left-16 w-96 h-96 bg-warm-300 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-nude-200 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-beige-900 mb-4">
            Meet Your Artists
          </h2>
          <p className="text-lg text-beige-700">認識您的紋繡師</p>
          <p className="text-beige-600 mt-2">Korea's most trusted semi-permanent makeup specialists</p>
          <p className="text-sm text-beige-500">韓國最值得信賴的半永久化妝專家</p>
        </div>

        {/* Artists Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="bg-white shadow-xl p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {/* Artist Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-beige-900 mb-2">
                  {artist.name}
                </h3>
                <div className="w-16 h-1 bg-beige-400 mx-auto"></div>
              </div>

              {/* Credentials */}
              <ul className="space-y-4">
                {artist.credentials.map((credential, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mr-3 flex-shrink-0 flex items-center justify-center">
                      {typeof credential.icon === 'string' ? (
                        <span className="text-2xl">{credential.icon}</span>
                      ) : (
                        credential.icon
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-beige-700 font-medium">{credential.text}</p>
                      <p className="text-beige-600 text-sm">{credential.chinese}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}