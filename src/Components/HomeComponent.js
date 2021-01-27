import React, { Component } from 'react'
import '../css/Login.css'
import { Link } from 'react-router-dom'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import banner from '../Images/banner.jpg'
import onlineveg from '../Images/onlineveg.jpg'
import phone from '../Images/phone.jpg'

class HomeComponent extends Component {

    render() {
        return (

            <div>

                <Link
                    to="/login"
                    className="heading"
                    style={{ position: 'absolute', fontSize: '24px', lineHeight: '44px', left: '1750px', top: '150px' }}>
                    LOGIN
                </Link>
                <div className="slide-container" style={{ position: 'relative', top: '25px', left: '10px' }}>
                    <Slide style={{ position: 'relative', height: '100%' }}>
                        <div className="each-slide" >
                            <div style={{ backgroundImage: `url(${phone})` }}>
                                <p style={{ position: 'relative', height: '700px' }}></p>
                                
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${onlineveg})` }}>
                                <p style={{ position: 'relative', height: '700px' }}></p>
                                
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${banner})` }}>
                                <p style={{ position: 'relative', height: '700px' }}></p>
                                
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>

        )
    }
}

export default HomeComponent


