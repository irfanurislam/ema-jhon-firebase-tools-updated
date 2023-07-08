import Link from "next/link";

const navlinks = [
    {
        path:'/dashboard',
        title:'Dashboard'
    },
    {
        path:'/dashboard/add-product',
        title:'add products'
    },
    {
        path:'/dashboard/manage-product',
        title:'Manage prodcuts'
    },
    {
        path:'/',
        title:'Home'
    },
  
]

const Sidebar = () => {
    return (
        <aside className="mr-10">
            <h1 className="text-blue-500 text-3xl font-semibold">Dashboard main</h1>
            <ul>
                {
                  navlinks.map(({path,title}) => <li key={path}>
                    <Link href={path}>{title}</Link>
                  </li>)
                }
            </ul>
        </aside>
    );
};

export default Sidebar;