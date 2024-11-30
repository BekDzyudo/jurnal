import React from 'react'
import { Link} from 'react-router-dom'

function Header() {
  return (
    <div className='bg-slate-200 py-5 mb-10'>
        <div className='align-elements flex justify-between items-center'>
        <Link to="/" className='font-semibold text-base'>TA'LIM FAN VA <br/> INNOVATSIYA JURNALI</Link>
        <nav className='flex items-center'>
            <ul className='menu menu-horizontal rounded-box'>
                <li>
                    <Link className='text-base'>Bosh sahifa</Link>
                </li>
                <li>
                    <Link className='text-base'>Jurnal</Link>
                </li>
                <li>
                    <Link className='text-base' to="/nashrlar">Nashrlar</Link>
                </li>
                <li>
                    <Link className='text-base'>Talabnoma</Link>
                </li>
                <li>
                    <Link className='text-base'>Yangiliklar</Link>
                </li>
                <li>
                    <Link className='text-base'>Bog'lanish</Link>
                </li>
            </ul>
            <form action="">
                <select className='menu outline-none rounded bg-slate-200 text-base'>
                    <option className='bg-none text-base' value="uzbek">O‘zbekcha</option>
                    <option className='bg-none text-base' value="rus">Русский</option>
                    <option className='bg-none text-base' value="english">English</option>
                </select>
            </form>
        </nav>
        </div>
    </div>
  )
}

export default Header