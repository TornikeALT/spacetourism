import { Outlet, useLocation } from "react-router";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import homeDesktopBg from '../images/home/background-home-desktop.jpg';
import homeTabletBg from '../images/home/background-home-tablet.jpg';
import destinationDesktopBg from '../images/destination/background-destination-desktop.jpg';
import destinationTabletBg from '../images/destination/background-destination-tablet.jpg';
import crewDesktopBg from '../images/crew/background-crew-desktop.jpg';
import crewTabletBg from '../images/crew/background-crew-tablet.jpg';
import technologyDesktopBg from '../images/technology/background-technology-desktop.jpg';
import technologyTabletBg from '../images/technology/background-technology-tablet.jpg';

function RootLayout() {
    const location = useLocation();
    const [backgroundImage, setBackgroundImage] = useState('');
    const [backGroundColor, setBackGroundColor] = useState('')


    useEffect(() => {
        // Set the background image in the document's body style
        document.body.style.backgroundImage = `url(${backgroundImage})`;

        const handleResize = () => {
            const pageName = location.pathname.toLowerCase();
            let bgURL = '';
            let bgColor = '';

            switch (pageName) {
                // setting color and background image depend on pagename
                case '/':
                    bgURL = window.innerWidth <= 1024 ? homeTabletBg : homeDesktopBg;
                    bgColor = '#43556d';
                    break;
                case '/destination':
                    bgURL = window.innerWidth <= 1024 ? destinationTabletBg : destinationDesktopBg;
                    bgColor = '#222836';
                    break;
                case '/crew':
                    bgURL = window.innerWidth <= 1024 ? crewTabletBg : crewDesktopBg;
                    bgColor = '#2f2f37'
                    break;
                case '/technology':
                    bgURL = window.innerWidth <= 1024 ? technologyTabletBg : technologyDesktopBg;
                    bgColor = '#151724';
                    break;
                default:
                    bgURL = window.innerWidth <= 1024 ? homeTabletBg : homeDesktopBg;
                    break;
            }
            setBackgroundImage(bgURL);
            setBackGroundColor(bgColor)
        };

        handleResize();//Calling func to listen to resize

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [backgroundImage, location]);

    return (
        <>
            <Navigation backGroundColor={backGroundColor} />
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    );
}

export default RootLayout;
