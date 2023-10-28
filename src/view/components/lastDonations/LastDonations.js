import React from 'react';
import './LastDonations.css';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setContainerRef } from '../../../features/InPageNav';
function LastDonations(props) {
    const containerRef = useRef(null);

    const scrollToId = useSelector((state) => state.pageNavStore.ref);

const dispatch=useDispatch();
  useEffect(() => {
    if (scrollToId === 'donations' && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
      dispatch(setContainerRef(null));
    }
  }, [scrollToId]);

    return (
        <div style={{ display: "flex", justifyContent: "center" }} ref={containerRef}>
            <div className='lastdonation-container'>
                <h1 className='lastdonation-title'>
                    Recent Donations
                </h1>
                <div className='donation-container'>
                    <div className='donation-item'>
                        <span className='lastdonation-text'>Slim Skhab</span>
                        <span className='lastdonation-sum'>2000$</span>
                    </div>
                    <div className='donation-item'>
                        <span className='lastdonation-text'>Slim Skhab</span>
                        <span className='lastdonation-sum'>2000$</span>
                    </div>
                    <div className='donation-item'>
                        <span className='lastdonation-text'>Slim Skhab</span>
                        <span className='lastdonation-sum'>2000$</span>
                    </div>
                    <div className='donation-item'>
                        <span className='lastdonation-text'>Slim Skhab</span>
                        <span className='lastdonation-sum'>2000$</span>
                    </div>
                    <div className='donation-item'>
                        <span className='lastdonation-text'>Slim Skhab</span>
                        <span className='lastdonation-sum'>2000$</span>
                    </div>
                    <div className='donation-item'>
                        <span className='lastdonation-text'>Slim Skhab</span>
                        <span className='lastdonation-sum'>2000$</span>
                    </div>
                    <div className='donation-item'>
                        <span className='lastdonation-text'>Slim Skhab</span>
                        <span className='lastdonation-sum'>2000$</span>
                    </div>
                    <div className='donation-item'>
                        <span className='lastdonation-text'>Slim Skhab</span>
                        <span className='lastdonation-sum'>2000$</span>
                    </div>
                    <div className='donation-item'>
                        <span className='lastdonation-text'>Slim Skhab</span>
                        <span className='lastdonation-sum'>2000$</span>
                    </div>
                    <div className='donation-item'>
                        <span className='lastdonation-text'>Slim Skhab</span>
                        <span className='lastdonation-sum'>2000$</span>
                    </div>
                    

                </div>
            </div>
        </div>
    );
}

export default LastDonations;