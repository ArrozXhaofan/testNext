import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-950 flex justify-center items-center">

      <div>

        <Link href={'/users'}>
          <button
            className='bg-green-900 font-bold text-white px-5 py-2
          hover:rounded-xl hover:px-24 duration-500 ease-in-out transition-all hover:bg-green-400
           hover:text-neutral-700 active:scale-75 active:opacity-75'
          >Entrar</button>
        </Link>
      </div>

    </main>
  )
}
