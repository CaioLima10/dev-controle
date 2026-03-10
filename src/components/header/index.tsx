import Link from "next/link";
import { FiLogOut, FiUser } from "react-icons/fi";

export function Header() {
  return(
    <header className="w-full flex items-center px-4 py-2 h-20 bg-zinc-900">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link href={"/"}>
          <h1 className="text-xl font-bold pl-1 hover:tracking-wide transition-all">
            <span className="text-blue-500">DEV</span> CONTROLE
          </h1>
        </Link>

        <div className="flex gap-4">
          <button className="hover:text-blue-500" title="login">
            <Link href={"/dashboard"}>
              <FiUser size={26}/>
            </Link>
          </button>

          <button className="hover:text-red-500" title="logout">
            <Link href={"/"}>
              <FiLogOut size={26}/>
            </Link>
          </button>
        </div>
      </div>
          
    </header>
  )
}