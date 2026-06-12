export function Marquee({
  items,
  accent = false,
}: {
  items: string[]
  accent?: boolean
}) {
  // duplica os itens para o loop ser contínuo
  const doubled = [...items, ...items]
  return (
    <div className={`marquee ${accent ? 'marquee--accent' : ''}`}>
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
