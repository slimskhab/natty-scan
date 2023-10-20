import React from 'react';
import "./HomepageFooter.css"
import LastDonations from '../lastDonations/LastDonations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
function HomepageFooter(props) {
    return (
        <div className='homepage-footer'>
            <LastDonations />
            <div className='homepage-footer-container'>
                <div>            <img src="/logo.png" style={{ height: 83, width: 83, justifyContent: "center" }}></img>
                </div>

                <nav style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", paddingTop: "50px" }}>
                    <ul className='footer-bar'>
                        <li className='nav-text'>Home</li>
                        <li className='nav-text'>How It Works</li>
                        <li className='nav-text'>Donations</li>
                        <li className='nav-text'>Privacy & Legacy</li>
                        <li className='nav-text' style={{ border: "none" }}>Terms & Conditions</li>
                    </ul>
                    <ul className='footer-bar'>
                        <li className='nav-text'>+216 22 156 111</li>
                        <li className='nav-text' style={{ border: "none" }}>slimsskhab@gmail.com</li>
                    </ul>
                </nav>
            </div>
            <div className='homepage-copyrights-container'>
                <div className='socialmedia-container'>
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
<path d="M23.7942 22.9437H28.0432L29.7428 16.1454H23.7942V12.7462C23.7942 10.9956 23.7942 9.347 27.1934 9.347H29.7428V3.63638C29.1887 3.5633 27.0965 3.39844 24.887 3.39844C20.2727 3.39844 16.9959 6.21466 16.9959 11.3865V16.1454H11.8971V22.9437H16.9959V37.3902H23.7942V22.9437Z" fill="white"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
  <path d="M20.4667 15.2956C19.1144 15.2956 17.8175 15.8327 16.8613 16.7889C15.9051 17.7452 15.3679 19.042 15.3679 20.3943C15.3679 21.7466 15.9051 23.0435 16.8613 23.9997C17.8175 24.9559 19.1144 25.4931 20.4667 25.4931C21.819 25.4931 23.1159 24.9559 24.0721 23.9997C25.0283 23.0435 25.5655 21.7466 25.5655 20.3943C25.5655 19.042 25.0283 17.7452 24.0721 16.7889C23.1159 15.8327 21.819 15.2956 20.4667 15.2956ZM20.4667 11.8964C22.7205 11.8964 24.882 12.7917 26.4757 14.3854C28.0693 15.979 28.9647 18.1405 28.9647 20.3943C28.9647 22.6481 28.0693 24.8096 26.4757 26.4033C24.882 27.9969 22.7205 28.8923 20.4667 28.8923C18.2129 28.8923 16.0514 27.9969 14.4578 26.4033C12.8641 24.8096 11.9688 22.6481 11.9688 20.3943C11.9688 18.1405 12.8641 15.979 14.4578 14.3854C16.0514 12.7917 18.2129 11.8964 20.4667 11.8964ZM31.514 11.4715C31.514 12.0349 31.2902 12.5753 30.8918 12.9737C30.4934 13.3721 29.953 13.596 29.3895 13.596C28.8261 13.596 28.2857 13.3721 27.8873 12.9737C27.4889 12.5753 27.2651 12.0349 27.2651 11.4715C27.2651 10.908 27.4889 10.3677 27.8873 9.96924C28.2857 9.57083 28.8261 9.347 29.3895 9.347C29.953 9.347 30.4934 9.57083 30.8918 9.96924C31.2902 10.3677 31.514 10.908 31.514 11.4715ZM20.4667 6.79761C16.2619 6.79761 15.5753 6.80951 13.6191 6.89619C12.2866 6.95908 11.3926 7.13753 10.5632 7.46045C9.86912 7.71529 9.24163 8.12374 8.72765 8.65526C8.19569 9.16922 7.78668 9.79668 7.53114 10.4908C7.20822 11.3236 7.02976 12.2159 6.96858 13.5467C6.8802 15.423 6.8683 16.0791 6.8683 20.3943C6.8683 24.6008 6.8802 25.2857 6.96688 27.242C7.02976 28.5727 7.20822 29.4684 7.52944 30.2961C7.81837 31.0354 8.15829 31.5674 8.72255 32.1317C9.29531 32.7027 9.82729 33.0444 10.5581 33.3265C11.3977 33.6511 12.2917 33.8313 13.6174 33.8925C15.4937 33.9808 16.1498 33.991 20.465 33.991C24.6715 33.991 25.3564 33.9791 27.3127 33.8925C28.6417 33.8296 29.5357 33.6511 30.3668 33.3299C31.0603 33.0738 31.6875 32.6655 32.2024 32.1351C32.7751 31.564 33.1167 31.032 33.3989 30.2995C33.7218 29.4633 33.902 28.5693 33.9631 27.2403C34.0515 25.3656 34.0617 24.7079 34.0617 20.3943C34.0617 16.1895 34.0498 15.5029 33.9631 13.5467C33.9003 12.2176 33.7201 11.3202 33.3989 10.4908C33.1427 9.79742 32.7344 9.17021 32.2041 8.65526C31.6903 8.12303 31.0628 7.71398 30.3685 7.45875C29.5357 7.13583 28.6417 6.95738 27.3127 6.89619C25.438 6.80781 24.7837 6.79761 20.4667 6.79761ZM20.4667 3.39844C25.0845 3.39844 25.6607 3.41543 27.4741 3.50041C29.2825 3.58539 30.5164 3.86922 31.599 4.29072C32.7207 4.72242 33.6657 5.30708 34.6107 6.25035C35.4749 7.09996 36.1436 8.12769 36.5703 9.26202C36.9901 10.3447 37.2756 11.5786 37.3606 13.3886C37.4405 15.2004 37.4626 15.7765 37.4626 20.3943C37.4626 25.0121 37.4456 25.5883 37.3606 27.4C37.2756 29.2101 36.9901 30.4423 36.5703 31.5266C36.1448 32.6615 35.4759 33.6895 34.6107 34.5383C33.7608 35.4022 32.7332 36.0709 31.599 36.4979C30.5164 36.9177 29.2825 37.2033 27.4741 37.2882C25.6607 37.3681 25.0845 37.3902 20.4667 37.3902C15.8489 37.3902 15.2728 37.3732 13.4593 37.2882C11.6509 37.2033 10.4187 36.9177 9.33441 36.4979C8.19964 36.0721 7.17173 35.4033 6.32273 34.5383C5.45838 33.6888 4.78964 32.661 4.36311 31.5266C3.94161 30.444 3.65778 29.2101 3.5728 27.4C3.49122 25.5883 3.47083 25.0121 3.47083 20.3943C3.47083 15.7765 3.48782 15.2004 3.5728 13.3886C3.65778 11.5769 3.94161 10.3464 4.36311 9.26202C4.78841 8.127 5.45731 7.09899 6.32273 6.25035C7.17197 5.38565 8.19981 4.71686 9.33441 4.29072C10.417 3.86922 11.6492 3.58539 13.4593 3.50041C15.2728 3.42053 15.8489 3.39844 20.4667 3.39844Z" fill="white"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
  <path d="M31.0809 3.82422H36.7031L24.4202 17.8628L38.8701 36.9662H27.5543L18.6926 25.3801L8.55286 36.9662H2.92722L16.065 21.9503L2.2049 3.82422H13.8046L21.8147 14.4144L31.0775 3.82422H31.0809ZM29.1077 33.601H32.223L12.1135 7.01265H8.7704L29.1077 33.601Z" fill="white"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
  <path d="M12.005 8.49853C12.0045 9.40005 11.6459 10.2645 11.0082 10.9016C10.3704 11.5388 9.5056 11.8965 8.60408 11.896C7.70256 11.8956 6.83815 11.537 6.201 10.8992C5.56385 10.2614 5.20615 9.39665 5.2066 8.49513C5.20706 7.59362 5.56561 6.7292 6.2034 6.09205C6.84119 5.4549 7.70596 5.09721 8.60748 5.09766C9.509 5.09811 10.3734 5.45667 11.0106 6.09445C11.6477 6.73224 12.0054 7.59702 12.005 8.49853ZM12.1069 14.4131H5.30858V35.6919H12.1069V14.4131ZM22.8483 14.4131H16.084V35.6919H22.7803V24.5257C22.7803 18.3052 30.8874 17.7273 30.8874 24.5257V35.6919H37.6008V22.2142C37.6008 11.7278 25.6017 12.1187 22.7803 17.2684L22.8483 14.4131Z" fill="white"/>
</svg>
                </div>
            <span className='copyrights-text'>Copyright © 2023 NattyScan | Made with <FontAwesomeIcon style={{ color: 'red', fontSize: '24px' }} icon={faHeart} /> By Slim Skhab</span>
            </div>
        </div>
    );
}

export default HomepageFooter;