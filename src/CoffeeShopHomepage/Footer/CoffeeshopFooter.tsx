import React from 'react'
import './CoffeeshopFooterStyle.scss'
import { SocialIcon } from 'react-social-icons'

const CoffeeshopFooter = () => {
    return (
        <>
            <div className='Footer'>

                <div className='FooterCopywright'>
                    &copy; CoffeeShop - Made with Love
                </div>

                <div className='socialmediaicons'>
                    {/* 
                        renders: github icon
                        url(on click): navigate to vimeo.com 
                    */}
                    <SocialIcon className='iconsdesign' network='facebook' url='https://www.facebook.com/' bgColor="white" fgColor="#3e2016" />
                    <SocialIcon className='iconsdesign' network='instagram' url='https://www.instagram.com/' bgColor="white" fgColor="#3e2016"/>
                    <SocialIcon className='iconsdesign' network='github' url='https://github.com/' bgColor="white" fgColor="#3e2016" />
                    <SocialIcon className='iconsdesign' network='twitter' bgColor="white" fgColor="#3e2016"/>

                </div>

            </div>
        </>
    )
}

export default CoffeeshopFooter;