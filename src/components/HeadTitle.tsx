type HeadTitleProps = {
    title: string,
    desc: string
};

export default function HeadTitle({title, desc}: HeadTitleProps) {
  return (
    <div className="mx-3 bg-black py-5 px-3 rounded-lg flex flex-col items-center text-center gap-1">
      <h1 className="text-white text-2xl font-main font-semibold">{title}</h1>
      <p className="font-secondary text-main text-sm">{desc}</p>
    </div>
  )
}
