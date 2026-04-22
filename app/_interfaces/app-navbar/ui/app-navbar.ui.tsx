import Image from "next/image"


export const AppNavbar = () => {
  return <div className="@container/navbar w-full h-12">
    <div className='grid grid-cols-12 h-full px-2 font-body'>
      <div className="col-span-3 self-center">
        <Image src="logo.svg" alt="logo" width={107} height={27} />

      </div>

      <nav className="col-span-7 self-center">
        <ul className="flex gap-x-2">
          {['Configure', 'Tv Stands', 'Power', 'Accessories', 'Pro'].map(item => {
            return <li className="px-2 py-1" key={item}>{item}</li>
          })}
        </ul>

      </nav>

      <div className="col-span-2 justify-self-end self-center">
        <span>search</span>
        <span>cart</span>
      </div>
    </div>
  </div>
}
