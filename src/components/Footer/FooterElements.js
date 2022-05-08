import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.footer`
background-color: #193366;
`;

export const FormWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;

@media screen and (max-width: 400px){
height: 80%;
}
`;

export const Icon =styled(Link)`
margin-left: 32px;
margin-top: 12px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px){
margin-left: 16px;
margin-top: 8px;
}
`;

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;


@media screen and (max-width: 480px){
padding: 10px;
}
`;

export const Form = styled.form`
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;

@media screen and (max-width: 480px){
    padding: 32px 32px;
    width: auto;
}
`;
export const FormH1= styled.h1`
 margin-top: 90px;
 margin-bottom: 35px;
 color: #fff;
 font-size: 20px;
 font-weight; 400;
 text-align: center;
`;

export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;

`;

export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
color: #000;
font-size: 20px;
cursor: pointer;
`;

export const FormButton = styled.button`
padding: 16px 0;
border: none;
border-radius: 4px;
color: #000;
font-size: 20px;
cursor: pointer;
`;

export const Text = styled.textarea`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
color: #000;
font-size: 20px;
cursor: pointer;
`;

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
margin : auto auto;
margin-top: 10px;
flex-direction: column;
justify-content: center;
`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px; auto 0 auto;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`;

export const SocialLogo = styled(Link)`
color: #fff;
justify-self: start;
cursor : pointer;
text-decorition: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;
`;

export const WebSiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`;

export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
`;


 
