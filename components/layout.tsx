import NowPlayingModule from './now-playing'

const Layout = ({ children }) => {
    return (
        <div>
            { children }
            <NowPlayingModule />
        </div>
    );
};

export default Layout;