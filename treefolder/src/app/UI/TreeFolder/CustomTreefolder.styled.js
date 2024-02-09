import styled, { keyframes, css } from "styled-components";

export const Main = styled.section`
`

export const FolderNav = styled.nav`
   background-color: #005aa5;
   color: white;
   position: relative;
   width: ${props => props.$navbarWidth}px;
   max-width: 500px;
   min-width: 250px;
   padding: 10px 10px ;
   height: 100vh;

   h3{
      text-align: left;
      margin-left: 15px;
   }
`

const FirstArrowAnimation = keyframes`
   0% {
      left: 2px;
      opacity: 0;
   }

   50% {
      left: 6px;
      opacity: 1;
   }

   100% {
      left: 2px;
      opacity: 0;
   }
`;

const SecondArrowAnimation = keyframes`
   0% {
      left: 10px;
      opacity: 0;
   }

   50% {
      left: 14px;
      opacity: 1;
   }

   100% {
      left: 10px;
      opacity: 0;
   }
`;

export const ResizeButton = styled.button`
   position: absolute;
   top: -4.4%;
   right: -15px;
   height: 100vh;
   cursor: col-resize;
   outline: transparent;
   border: transparent;
   color: transparent;
   background: transparent;

   &::after {
      content: '';
      position: absolute;
      top: 50%;
      bottom: 50%;
      left: 2px;
      transform: translate(-50%, -50%);
      width: 10px;
      aspect-ratio: 1/1;
      border-left: 3px solid #005aa5;
      border-bottom: 3px solid #005aa5;
      transform: rotate(-135deg);
      animation: ${FirstArrowAnimation} .8s ease-in-out infinite;
   }

   &::before {
      content: '';
      position: absolute;
      top: 50%;
      bottom: 50%;
      left: 10px;
      transform: translate(-50%, -50%);
      width: 10px;
      aspect-ratio: 1/1;
      border-left: 3px solid #005aa5;
      border-bottom: 3px solid #005aa5;
      transform: rotate(-135deg);
      animation: ${SecondArrowAnimation} .8s ease-in-out infinite;
   }
`;

export const Folderstyle = styled.ul`
   position: relative;
   list-style-type: none;
   padding: 0;
   margin: 0;
   font-size: 14px;

   hr{
      width: 100%;
      margin: 10px 0 5px;
      border: 1px solid white;
   }

   li{
      position: relative;
      padding-left: 10px;
      margin-left: 5px;
      margin-bottom: 2px;
      font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      cursor: pointer;

      ::selection{
         display: none;
      }
      span{
         vertical-align: text-top;
         margin-right: 8px;
         z-index: 2;
      }

      &:has(ul){
         position: relative;
         list-style-type: none;
      }
   }
`

export const FolderContainer = styled.section`
  background-color: rgb(47, 120, 182);
  border-radius: 3px;
  padding: 7px 5px 0px;
  margin-bottom: 3px;
`

export const FolderDropdown = styled.li`
  position: relative;
  height: ${props => props.$openFolder ? 'auto' : '20px'};
  transition: height 5ms ease;
  overflow: hidden;

  &::before{
   content: '';
   position: absolute;
   top: 5px;
   right: 20px;
   width: 5px;
   height: 5px;
   border-left: 2px solid white;
   border-bottom: 2px solid white;
   transform: rotate(-45deg); //135deg
  }
`

export const FolderChildren = styled.li`
   div{
      position: relative;

      &:hover{
         text-decoration: underline;
      } 

      &:not(:first-child) {
         border-bottom: 1px solid black;
      }

      &:after{
         content: '';
         position: absolute;
         top: -14px;
         left: -9px;
         bottom: 10px;
         width: 10px;
         border-left: 3px solid white;
         
      }

      &:before{
         content: '';
         position: absolute;
         top: 0px;
         left: -8.7px;
         bottom: 10px;
         width: 12px;
         border-bottom: 3px solid white;
      } 
   }
`