import { HeartIcon, StarIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid'
const cards = [
  {
    name: 'Best Price Guarantee',
    description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
    icon: PaperAirplaneIcon,
  },
  {
    name: 'Best Travel Agency',
    description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
    icon: HeartIcon,
  },
  {
    name: 'Trust and Safety',
    description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
    icon: StarIcon,
  },
]
export default function About() {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Welcome to Fusion</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
        {cards.map((card) => (
          <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
            <card.icon className="h-7 w-5 flex-none text-blue-400" aria-hidden="true" />
            <div className="text-base leading-7">
              <h3 className="font-semibold text-white">{card.name}</h3>
              <p className="mt-2 text-gray-300">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
