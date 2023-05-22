import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logoYoupi from '../../assets/images/youpi-logo.png'
export default function Navigationbar(){
  return(
    <nav className='fixed top-0 left-0 z-50 w-[100vw] h-[12vh]'>
      <div className="flex h-28 justify-between px-8 py-2 items-center bg-white shadow-lg">
        <div className="h-14">
          <Link to={"/"}>
            <img src={logoYoupi} alt="logo-youpi" className="h-14 bg-white"/>

          </Link>
        </div>
        <div className="w-1/4 flex justify-between items-center">
          <Link to={"/"} className="text-black text-xl bg-white hover">Order</Link>
          <Link to={"/about-us"} className="text-black text-xl bg-white">About</Link>
          <Link to={"/"} className="text-black text-xl bg-white">History</Link>
        </div>
        <div className="flex justify-between items-center">
          <Link to={"/"} className="bg-orange-500 rounded-2xl py-3 px-8 text-white font-bold text-lg hover:bg-orange-400">LOGIN</Link>
          <Link to={"/"} className="bg-red-500 rounded-2xl ml-2 py-3 px-8 text-white font-bold text-lg hover:bg-red-400">REGISTER</Link>
        </div>
      </div>
    </nav>
  )
}

function ActiveVerif({to, children, ...props}){
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path:resolvedPath.pathname,end:true});
  return(
    <li className={isActive?"text-slate-100":"text-black"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );

}