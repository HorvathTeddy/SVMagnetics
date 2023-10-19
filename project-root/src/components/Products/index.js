import React from 'react'
import { 
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesWrapper2,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP, 
    ServicesDiv,
    ServicesLinks,
    ElectroImageContainter,
    ElectroImage,
} from './ProductsElements'
import Icon1 from '../../images/penny.png'
import Icon2 from '../../images/magnetics-fab2.jpg'
import Icon3 from '../../images/magnetics-hero.png'
import widget1 from '../../images/widget1.jpg'
import widget2 from '../../images/widget2.jpg'
import widget3 from '../../images/widget3.jpg'
import widget4 from '../../images/widget4.jpg'
import widget5 from '../../images/widget5.jpg'
import widget6 from '../../images/widget6.jpg'
import widget7 from '../../images/widget7.jpg'
import widget8 from '../../images/widget8.jpg'
import ProductsNavbar from './ProductsNavbar'

const services = () => {
  return (
    <ServicesContainer id='products'>
        <ServicesH1>
            Products
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesH2>
                    Magnetics
                </ServicesH2>
                <ServicesDiv>
                    <ServicesLinks to='/magnetics'>Magnetics</ServicesLinks>
                </ServicesDiv>
            </ServicesCard>
            <ServicesCard>
                <ServicesH2>
                    Electro-Mechanical Assemblies
                </ServicesH2>
                <ServicesDiv>
                    <ServicesLinks to='/electro-mechanical-assemblies'>Electro-Mechanical Assemblies</ServicesLinks>
                </ServicesDiv>
            </ServicesCard>
            <ServicesCard>
                <ServicesH2>
                    Fiber-Optic Cables
                </ServicesH2>
                <ServicesDiv>
                    <ServicesLinks to='/fiber-optic-cables'>Fiber-Optic Cables</ServicesLinks>
                </ServicesDiv>
            </ServicesCard>
        </ServicesWrapper>
        <ServicesWrapper2>
            <ServicesCard>
                <ServicesH2>
                    Coaxial Cables
                </ServicesH2>
                <ServicesDiv>
                    <ServicesLinks to='/coaxial-cables'>Coaxial Cables</ServicesLinks>
                </ServicesDiv>
            </ServicesCard>
            <ServicesCard>
                <ServicesH2>
                    Nycoil™ Cable Assemblies
                </ServicesH2>
                <ServicesDiv>
                    <ServicesLinks to='/nycoil-cable-assemblies'>Nycoil™ Cable Assemblies</ServicesLinks>
                </ServicesDiv>
            </ServicesCard>
        </ServicesWrapper2>
    </ServicesContainer>
  )
}

export default services
