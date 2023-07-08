import Link from "next/link";
import NavLink from "./NavLink";

const navLinks = [
    {
        path:'/',
        title: 'Home'
    },
    {
        path:'/about',
        title: 'about'
    },
    {
        path:'/profile',
        title: 'Profile'
    },
    {
        path:'/blogs',
        title: 'Blogs'
    },
    {
        path:'/dashboard',
        title: 'DashBoard'
    },
   
]

const NavBar = () => {
    return (
        <nav className="flex items-center container mx-auto justify-between">
           <h1 className="text-3xl font-semibold">Next hero</h1> 
           <ul className="flex items-center justify-center">
             {
                navLinks.map(({path,title}) => <li className="mr-3" key={path}>
                    <NavLink href={path}>{title}</NavLink>
                </li>)
             }
           </ul>
        </nav>
    );
};

export default NavBar;