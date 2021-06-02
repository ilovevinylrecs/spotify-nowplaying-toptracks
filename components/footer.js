import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./now-playing'))

export default function Footer () {
    return (
        <div>
            <center>
            <DynamicComponent />
            </center>
        </div>
    );
}
