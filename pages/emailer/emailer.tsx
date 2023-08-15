import React from 'react';
import Image from 'next/image';

const MyComponent: React.FC = () => {

    const container = {
        border: '2px solid white',
        backgroundColor: 'white',
        height:'1100px'
    }

    const containerStyle = {
        width: '700px',
        height: '1000px',
        margin: '0 auto',
        padding: '20px',
        marginTop: '80px',
        backgroundColor: '#fff',
        // background: 'linear-gradient(to bottom, rgba(207, 216, 220, 1), rgba(243, 247, 255, 1), rgba(12, 117, 175, 1))',
        background: 'linear-gradient(to bottom, rgba(207, 216, 220, 1), rgba(243, 247, 255, 1), rgba(243, 247, 255, 1) ,rgba(12, 117, 175, 1), rgba(12, 117, 175, 1))',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
        border: "1px solid rgba(207, 216, 220, 1)",

    };

    const imageStyle = {
        // border: "1px solid purple",
        margin: "0 auto",
        marginTop: "60px",
        display: 'flex',
        justifyContent: 'center',
    }

    const cardContainer = {
        color: "red",
        // border: "1px solid rgba(12, 117, 175, 1)",
        background: "white",
        width: "540px",
        height: "650px",
        padding: "20px",
        margin: '0 auto',
        marginTop: '50px',
        zIndex: '1'
    }

    const paraStyle = {
        color: 'rgba(50, 50, 77, 1)',
        fontWeight: '700',
        fontSize: '16px',
        borderBottom: "1px solid rgba(207, 216, 220, 1)",
        paddingBottom: "20px"
    }

    const cardStyle = {
        width: '500px',
        height: '292px',
        // border: '1px solid gold',
        color: 'rgba(50, 50, 77, 1)',
        borderBottom: "1px solid rgba(207, 216, 220, 1)"
    }

    const cardStyle2: React.CSSProperties = {
        // border: "1px solid red",
        height: "260px",
        marginTop: "20px",
        display: 'flex',
        flexDirection: 'column',
    }

    return (
        <div style={container}>
            <div style={containerStyle}>

                <Image src={'.././logosvg.svg'} width={120} height={60} alt='svt' style={imageStyle} />

                <div style={cardContainer}>

                    <p style={paraStyle}> Two Factor Authentication Code </p>

                    <div style={cardStyle}>
                        <p style={{ color: 'rgba(0, 0, 0, 1)' }}>Dear [Full Name],</p>
                        <br></br>
                        <p> Here is your two factor authentication code. Please use the same to sign in and use the application.</p>
                        <br></br>
                        <p style={{ fontSize: '28px' }}>289976</p>
                        <br></br>
                        <p> The code is valid for 30 min. Please do not share this code with anyone. </p>
                        <br></br>
                        <p>  For further information, please contact us at {' '}
                            <a href='/' style={{ color: 'blue' }}>support@svt.com.</a> </p>
                        <br></br>
                        <br></br>
                        ---
                        <br></br>
                        The SVT Team

                    </div>

                    <div style={cardStyle2}>
                        <div>
                            <p style={{ color: 'rgba(50, 50, 77, 1)' }}>This is a system-generated message. Please do not reply.</p>
                        </div>
                        <br></br>

                        <div>
                            <p style={{ color: 'rgba(165, 165, 186, 1)', fontSize: '13px' }}> This communication is strictly confidential and intended solely for the use of the individual or entity to whom it has been addressed. If you have received this in error please notify SVT and delete all copies from your system as soon as possible. If you are not the named addressee you should not disseminate, distribute or copy this communication or its contents and any reliance on any information provided is strictly prohibited.</p>
                        </div>

                        <br></br>
                        <div>
                            <p style={{ color: 'rgba(165, 165, 186, 1)', fontSize: '13px' }}> SVT is, unless otherwise stated, the owner or authorised user of any and all trade marks, copyright, patented material, database rights and all other intellectual property rights used or documented in this email and its contents. This is provided to you 'as is' without warranties or representations (whether express or implied) of any kind. No part of this communication may be published, distributed, extracted, re-utilised, or reproduced in any material form, except as permitted by the <span style={{ color: 'rgba(50, 50, 77, 1)', fontSize: '13px' }}>General Terms and Conditions</span>, as expressly agreed in writing by caeleste or as otherwise permitted by applicable law.
                            </p>
                        </div>
                    </div>

                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <Image src={'/twitter1.png'} width={22} height={22} alt='tweet' style={{ marginRight: '10px' }} />
                    <Image src={'/linkedin1.png'} width={22} height={22} alt='linkedIn' style={{ marginLeft: '10px' }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', fontSize: '16px' }}>
                    <a href="/">www.website.com</a>

                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', }}>
                    <Image src={'/loadingDots.png'} width={30} height={10} alt='loading' />
                </div>


                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', fontSize:'16px'}}>
                    <p>© SVT, USA 2023</p>
                </div>
            </div>


        </div>
    );
};

export default MyComponent;
