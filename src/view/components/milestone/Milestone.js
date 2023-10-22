import React from 'react';
import "./Milestone.css";
function Milestone(props) {
    console.log(props.isActive);
    return (
        <div className="milestone-box">
            <div className='milestone' style={{background:props.isActive?props.milestoneActiveColor:"white"}}>
                <div className='milestone-name'>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M24 4C24.4898 4.00006 24.9627 4.17991 25.3287 4.50543C25.6948 4.83095 25.9287 5.2795 25.986 5.766L26 6V8.628C29.3918 9.07046 32.5421 10.6219 34.9606 13.0407C37.3791 15.4596 38.93 18.6102 39.372 22.002L42 22C42.5097 22.0006 43 22.1958 43.3707 22.5457C43.7414 22.8956 43.9645 23.3739 43.9943 23.8828C44.0242 24.3917 43.8586 24.8928 43.5315 25.2837C43.2043 25.6746 42.7402 25.9258 42.234 25.986L42 26H39.372C38.9296 29.3915 37.3785 32.5416 34.96 34.9601C32.5416 37.3785 29.3915 38.9296 26 39.372V42C25.9994 42.5098 25.8042 43.0001 25.4543 43.3707C25.1043 43.7414 24.6261 43.9645 24.1172 43.9943C23.6083 44.0242 23.1072 43.8587 22.7163 43.5315C22.3254 43.2043 22.0742 42.7402 22.014 42.234L22 42V39.372C18.6089 38.9292 15.4592 37.3779 13.0411 34.9595C10.6231 32.5411 9.07224 29.3912 8.62998 26H5.99998C5.49022 25.9994 4.99992 25.8042 4.62924 25.4543C4.25857 25.1044 4.03551 24.6261 4.00564 24.1172C3.97576 23.6083 4.14133 23.1072 4.46851 22.7163C4.79569 22.3254 5.25979 22.0742 5.76598 22.014L5.99998 22H8.62798C9.07075 18.6089 10.622 15.4592 13.0405 13.0411C15.4589 10.6231 18.6088 9.07226 22 8.63V6C22 5.46957 22.2107 4.96086 22.5858 4.58579C22.9608 4.21071 23.4695 4 24 4ZM24 12.5C20.95 12.5 18.0249 13.7116 15.8683 15.8683C13.7116 18.0249 12.5 20.95 12.5 24C12.5 27.05 13.7116 29.9751 15.8683 32.1317C18.0249 34.2884 20.95 35.5 24 35.5C27.05 35.5 29.975 34.2884 32.1317 32.1317C34.2884 29.9751 35.5 27.05 35.5 24C35.5 20.95 34.2884 18.0249 32.1317 15.8683C29.975 13.7116 27.05 12.5 24 12.5ZM24 16C26.1217 16 28.1565 16.8429 29.6568 18.3431C31.1571 19.8434 32 21.8783 32 24C32 26.1217 31.1571 28.1566 29.6568 29.6569C28.1565 31.1571 26.1217 32 24 32C21.8782 32 19.8434 31.1571 18.3431 29.6569C16.8428 28.1566 16 26.1217 16 24C16 21.8783 16.8428 19.8434 18.3431 18.3431C19.8434 16.8429 21.8782 16 24 16Z" fill={props.milestoneColor} />
                        </svg>
                        <span className='milestone-icon'>{props.milestoneNumber}</span>
                    </div>
                    <span style={{ paddingLeft: 20 }}>
                        {props.milestoneName}
                    </span>
                </div>
                <span className='milestone-range'>{props.milestoneRange}</span>
            </div>
        </div>
    );
}

export default Milestone;