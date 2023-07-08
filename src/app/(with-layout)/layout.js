import NavBar from "@/components/HomeSection/BigSection/NavBar";
import { children } from "react";


const withLayout = ({children}) => {
    return (
        <div>
             {/* <nav>
          <a href='/'> home </a>
        </nav> */}
        <NavBar></NavBar>
            {children}

            <footer>Footer my</footer>
        </div>
    );
};

export default withLayout;