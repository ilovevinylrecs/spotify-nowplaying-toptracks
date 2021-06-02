import Footer from './footer'
import NowPlayingModule from './now-playing'

const Layout = ({ children }) => {
    return (
        <div>
            { children }
            <NowPlayingModule />
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;