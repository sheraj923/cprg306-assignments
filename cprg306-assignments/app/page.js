import page from "./week-2/page"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black-500">CPRG 306 : Web Development 2 - Assignments</h1>
        <ul className="mt-8 space-y-4">
          <li>
            <Link href="/week-2" className="flex items-center text-xl font-bold text-black-500 hover:text-blue-500 transition-colors duration-300">
              week-2
            </Link>
          </li>
          <li>
            <Link href="/week-3" className="flex items-center text-xl font-bold text-black-500 hover:text-blue-500 transition-colors duration-300">
              week-3
            </Link>
          </li>
          <li>
            <Link href="/week-4" className="flex items-center text-xl font-bold text-black-500 hover:text-blue-500 transition-colors duration-300">
              week-4
            </Link>
          </li>
          <li>
            <Link href="/week-5" className="flex items-center text-xl font-bold text-black-500 hover:text-blue-500 transition-colors duration-300">
             week-5
            </Link>
          </li>
          <li>
            <Link href="/week-6" className="flex items-center text-xl font-bold text-black-500 hover:text-blue-500 transition-colors duration-300">
            week-6
            </Link>
          </li>
          <li>
            <Link href="/week-7" className="flex items-center text-xl font-bold text-black-500 hover:text-blue-500 transition-colors duration-300">
              week-7
            </Link>
          </li>
          <li>
            <Link href="/week-8" className="flex items-center text-xl font-bold text-black-500 hover:text-blue-500 transition-colors duration-300">
             week-8
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )}
