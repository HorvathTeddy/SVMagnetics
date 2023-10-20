import React from 'react'
import { 
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesWrapper2,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesDiv,
    ServicesLinks,
} from './ProductsElements'
import Icon3 from '../../images/magnetics-hero.png'
import emaHero from '../../images/mech-assembly-hero.png'
import fiberHero from '../../images/fiber-hero.png'
import coaxialHero from '../../images/coaxial-hero.png'
import ncaHero from '../../images/nycoil-hero.png'

const services = () => {
  return (
    <ServicesContainer id='products'>
        <ServicesH1>
            Our Products
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesH2>
                    Magnetics
                </ServicesH2>
                <ServicesIcon src={Icon3} />
                <ServicesDiv>
                    <ServicesLinks to='/magnetics'>Learn More</ServicesLinks>
                </ServicesDiv>
            </ServicesCard>
            <ServicesCard>
                <ServicesH2>
                    Electro-Mechanical Assemblies
                </ServicesH2>
                <ServicesIcon src={emaHero} />
                <ServicesDiv>
                    <ServicesLinks to='/electro-mechanical-assemblies'>Learn More</ServicesLinks>
                </ServicesDiv>
            </ServicesCard>
            <ServicesCard>
                <ServicesH2>
                    Fiber-Optic Cables
                </ServicesH2>
                <ServicesIcon src={fiberHero} />
                <ServicesDiv>
                    <ServicesLinks to='/fiber-optic-cables'>Learn More</ServicesLinks>
                </ServicesDiv>
            </ServicesCard>
        </ServicesWrapper>
        <ServicesWrapper2>
            <ServicesCard>
                <ServicesH2>
                    Coaxial Cables
                </ServicesH2>
                <ServicesIcon src={coaxialHero} />
                <ServicesDiv>
                    <ServicesLinks to='/coaxial-cables'>Learn More</ServicesLinks>
                </ServicesDiv>
            </ServicesCard>
            <ServicesCard>
                <ServicesH2>
                    Nycoil™ Cable Assemblies
                </ServicesH2>
                <ServicesIcon src={ncaHero} />
                <ServicesDiv>
                    <ServicesLinks to='/nycoil-cable-assemblies'>Learn More</ServicesLinks>
                </ServicesDiv>
            </ServicesCard>
        </ServicesWrapper2>
    </ServicesContainer>
  )
}

export default services
