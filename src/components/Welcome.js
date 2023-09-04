import React, { useState } from 'react';

import '../css/Welcome.css'

import Modal from 'react-modal';
import Menu from './Menu';

import { AiOutlineCloseCircle } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
import { useMediaQuery } from 'react-responsive';

function Welcome({setStartSurvey}) {

    const mobileSize = useMediaQuery({query: '(max-width: 930px)'})
    const tabletSize = useMediaQuery({query: '(min-width: 931px)'})
    const monitorSize = useMediaQuery({query: '(min-width: 1500px)'})
    
    const [aboutModalVisible, setAboutModalVisible] = useState(false)
    const [disclosureModalVisible, setDisclosureModalVisible] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false)

    const closeModal = () => {
        setAboutModalVisible(false)
        setDisclosureModalVisible(false)
    }

    const handleAffiliateDisclosureClick = () => {
        setMenuVisible(false)
        setDisclosureModalVisible(true)
    }

    const handleAboutUsClick = () => {
        setMenuVisible(false)
        setAboutModalVisible(true)
    }

    const showMenu = () => {
        setMenuVisible(true)
    }

    Modal.setAppElement('#root')

    return (
        <div className={tabletSize ? 'mainWelcomeContainerTablet' : 'mainWelcomeContainerMobile'}>
            <Modal isOpen={aboutModalVisible}>
                <AiOutlineCloseCircle size={30} className='closeBtn' onClick={closeModal} />
                {monitorSize ? <img alt='' className='modalImageMonitor' src={require('../images/gift.png')} /> :
                tabletSize ? <img alt='' className='modalImageTablet' src={require('../images/gift.png')} /> : null
                }
                <h1 className='modalHeading'>What We Do</h1>
                <p className={monitorSize ? 'modalParaMonitor' : tabletSize ? 'modalParaTablet' : 'modalParaMobile'}>
                    Gift shopping can sometimes <strong>be way more of a headache than it has to be.</strong> The ideas don't always come easy. The solution?
                </p>
                <p className={monitorSize ? 'modalParaMonitor' : tabletSize ? 'modalParaTablet' : 'modalParaMobile'}>
                    <strong>Let us do the work for you!</strong> Simply describe who you are shopping for, and let our AI engine do all of the heavy lifting for you.
                    You will now be able to do all of your gift shopping <strong>within minutes!</strong>
                </p>
                <p className={monitorSize ? 'modalParaMonitor' : tabletSize ? 'modalParaTablet' : 'modalParaMobile'}>
                    Have questions or want to contact us? Send us an email at <strong>support@usegiftr.com</strong>. We look forward to talking with you!
                </p>
            </Modal>
            <Modal isOpen={disclosureModalVisible}>
                <AiOutlineCloseCircle size={30} className='closeBtn' onClick={closeModal} />
                {monitorSize ? <img alt='' className='modalImageMonitor' src={require('../images/shoppingBag.png')} /> :
                tabletSize ? <img alt='' className='modalImageTablet' src={require('../images/shoppingBag.png')} /> : null
                }
                <h1 className='modalHeading'>Affiliate Disclosure</h1>
                <p className={monitorSize ? 'modalParaMonitor' : tabletSize ? 'modalParaTablet' : 'modalParaMobile'}>
                    If you decide to purchase one of the products that our AI engine recommends, we will earn a small commission from Amazon.
                </p>
                <p className={monitorSize ? 'modalParaMonitor' : tabletSize ? 'modalParaTablet' : 'modalParaMobile'}>
                    This commission comes at <strong>NO extra cost from your end.</strong> It is simply a way for Amazon to compensate us for recommending their products to others like you!
                </p>
            </Modal>
            {menuVisible && <Menu setMenuVisible={setMenuVisible} handleAboutUsClick={handleAboutUsClick} handleAffiliateDisclosureClick={handleAffiliateDisclosureClick} /> }
            <div>
                {monitorSize && <img src={require('../images/cornerPicThree.png')} alt='' className='cornerPicThree' />}
                {monitorSize && <img src={require('../images/cornerPicTwo.png')} alt='' className='cornerPicTwo' />}
                {(monitorSize || tabletSize) && <div className='cornerPicOne'></div>}
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img className='logo' alt='gift logo' src={require('../images/giftr-logo.png')} />
                    {mobileSize ? <AiOutlineMenu onClick={showMenu}  size={30} color='white' className='menuIcon' />
                    :
                    <div className={monitorSize ? 'headerLinksContainerMonitor' : 'headerLinksContainerTablet'}>
                        <p className='headerLink' onClick={handleAboutUsClick}>About Us</p>
                        <p className='headerLink' onClick={handleAffiliateDisclosureClick}>Affiliate Disclosure</p>
                    </div>
                    }
                </div>
                    <h2 className={monitorSize ? 'headingMonitor' : tabletSize ? 'headingTablet' : 'headingMobile'}>Find the Best Gifts on Amazon with AI-Powered Ideas.</h2>
                    <h3 className='welcomeSubheading'>Generate quick gift ideas for any occassion.</h3>
                    <div className={monitorSize ? 'stepsContainerMonitor' : 'stepsContainerTablet'}>
                            <div className={monitorSize ? 'stepContainerMonitor' : 'stepContainerTablet'}>
                                <img className={monitorSize ? 'stepsMonitor' : tabletSize ? 'stepsTablet' : 'stepsMobile'} alt='step 1' src={require('../images/step1.png')} />
                                <h1 className={monitorSize ? 'stepText' : 'stepTextTablet'}>Tell us a bit about the person you are shopping for.</h1>
                            </div>
                            <div className={monitorSize ? 'stepContainerMonitor' : 'stepContainerTablet'}>
                                <img className={monitorSize ? 'stepsMonitor' : tabletSize ? 'stepsTablet' : 'stepsMobile'} alt='step 1' src={require('../images/step2.png')} />
                                <h1 className={monitorSize ? 'stepText' : 'stepTextTablet'}>Wait a few seconds.</h1>
                            </div>
                            <div className={monitorSize ? 'stepContainerMonitor' : 'stepContainerTablet'}>
                                <img className={monitorSize ? 'stepsMonitor' : tabletSize ? 'stepsTablet' : 'stepsMobile'} alt='step 1' src={require('../images/step3.png')} />
                                <h1 className={monitorSize ? 'stepText' : 'stepTextTablet'}>Ta-da! A plethora of gift ideas at your fingertips!</h1>
                            </div>
                            <div onClick={() => setStartSurvey(true)} className='button'>
                                    <h1>Start Here</h1>
                            </div>
                    </div>
            </div>
        </div>
    );
}

export default Welcome;