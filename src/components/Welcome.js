import React, { useState } from 'react';

import '../Welcome.css'

import Modal from 'react-modal';
import Menu from './Menu';

import { AiOutlineCloseCircle } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
import { useMediaQuery } from 'react-responsive';

function Welcome({setStartSurvey}) {

    const windowSizeQuery = useMediaQuery({query: '(max-width: 500px)'})

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
        <>
            <Modal isOpen={aboutModalVisible}>
                <AiOutlineCloseCircle size={30} className='closeBtn' onClick={closeModal} />
                {!windowSizeQuery && <img alt='' className='modalImage' src={require('../gift.png')} /> }
                <h1 className='modalHeading'>What We Do</h1>
                <p className={windowSizeQuery ? 'modalParaMobile' : 'modalPara'}>
                    Gift shopping can sometimes <strong>be way more of a headache than it has to be.</strong> When the ideas aren't churning, instead of being a fun activity,
                    it can quickly induce all sorts of unneeded stress about picking out a gift for that special someone.
                </p>
                <p className={windowSizeQuery ? 'modalParaMobile' : 'modalPara'}>
                    The solution? <strong>Let us do the work for you!</strong> Simply describe who you are shopping for, and let our AI engine do all of the heavy lifting for you.
                    You will now be able to do all of your gift shopping <strong>within minutes!</strong>
                </p>
                <p className={windowSizeQuery ? 'modalParaMobile' : 'modalPara'}>
                    Have questions or want to contact us? Send us an email at <strong>support@usegiftr.com</strong>. We look forward to talking with you!
                </p>
            </Modal>
            <Modal isOpen={disclosureModalVisible}>
                <AiOutlineCloseCircle size={30} className='closeBtn' onClick={closeModal} />
                {!windowSizeQuery && <img alt='' className='modalImage' src={require('../shoppingBag.png')} />}
                <h1 className='modalHeading'>Affiliate Disclosure</h1>
                <p className={windowSizeQuery ? 'modalParaMobile' : 'modalPara'}>
                    If you decide to purchase one of the products that our AI engine recommends, we will earn a small commission from Amazon.
                </p>
                <p className={windowSizeQuery ? 'modalParaMobile' : 'modalPara'}>
                    This commission comes at <strong>NO extra cost from your end.</strong> It is simply a way for Amazon to compensate us for recommending their products to others like you!
                </p>
            </Modal>
            {menuVisible && <Menu setMenuVisible={setMenuVisible} handleAboutUsClick={handleAboutUsClick} handleAffiliateDisclosureClick={handleAffiliateDisclosureClick} /> }
            {windowSizeQuery ?  <AiOutlineMenu onClick={showMenu}  size={30} color='white' className='menuIcon' />
            :
            <div className='headerLinksContainer'>
                <p className='headerLink' onClick={handleAboutUsClick}>About Us</p>
                <p className='headerLink' onClick={handleAffiliateDisclosureClick}>Affiliate Disclosure</p>
            </div>
            }
            <div className='container'>
                {!windowSizeQuery && <img src={require('../cornerPicThree.png')} alt='' className='cornerPicThree' />}
                {!windowSizeQuery && <img src={require('../cornerPicTwo.png')} alt='' className='cornerPicTwo' />}
                <div className='cornerPicOne'></div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img className='logo' alt='gift logo' src={require('../giftr-logo.png')} />
                </div>
                <h2 className={windowSizeQuery ? 'headingMobile' : 'heading'}>Find the Best Gifts with AI-Powered Gift Shopping.</h2>
                <h3 className='welcomeSubheading'>Generate quick gift ideas for any occassion.</h3>
                <div className={windowSizeQuery ? 'stepsContainerMobile' : 'stepsContainer'}>
                        <div className={windowSizeQuery ? 'stepContainerMobile' : 'stepContainer'}>
                            <img className='steps' alt='step 1' src={require('../step1.png')} />
                            <h1 className={windowSizeQuery? 'stepTextMobile' : 'stepText'}>Tell us a bit about the person you are shopping for.</h1>
                        </div>
                        <div className={windowSizeQuery ? 'stepContainerMobile' : 'stepContainer'}>
                            <img className='steps' alt='step 1' src={require('../step2.png')} />
                            <h1 className={windowSizeQuery? 'stepTextMobile' : 'stepText'}>Wait a few seconds.</h1>
                        </div>
                        <div className={windowSizeQuery ? 'stepContainerMobile' : 'stepContainer'}>
                            <img className='steps' alt='step 1' src={require('../step3.png')} />
                            <h1 className={windowSizeQuery? 'stepTextMobile' : 'stepText'}>Ta-da! Dozens of gift ideas at your fingertips!</h1>
                        </div>
                </div>
                <div onClick={() => setStartSurvey(true)} className='button'>
                        <h1>Start Here</h1>
                </div>
            </div>
        </>
    );
}

export default Welcome;