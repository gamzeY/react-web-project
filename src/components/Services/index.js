import React from 'react';
import Icon1 from '../../../public/images/svg3.svg';
import Icon2 from '../../../public/images/svg4.svg';
import Icon3 from '../../../public/images/svg6.svg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id= 'services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Software Development</ServicesH2>
                    <ServicesP>Services blablab lablablablablab lablablablablab lablablab lablablablabla blablablabla.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Project Management</ServicesH2>
                    <ServicesP>PMI methods for cost,blablab lablablablablab lablablablablab lablablab lablablablabla blablablabla</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>IT Assessment & Executive Advising</ServicesH2>
                    <ServicesP>Value-add services blablab lablablablablab lablablablablab lablablab lablablablabla blablablabla</ServicesP>
                </ServicesCard>
                
            </ServicesWrapper>
        </ServicesContainer>
    )
};

export default Services;
