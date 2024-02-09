import styled from "styled-components";

export const Main = styled.section`
`

export const FolderNav = styled.nav`
   border: 1px solid #005aa5;
   width: 10%;
   height: 100vh;
   transition: width .5s ease-in-out;

   h3{
      text-align: left;
      margin-left: 15px;
   }

   &:hover{
      width: 20%;
   }
`

export const Folderstyle = styled.ul`
   position: relative;
   list-style-type: none;
   padding: 0;
   margin: 0;
   letter-spacing: 1.2px;


   hr{
      width: 90%;
      margin: 10px 0;
   }

   li{
      position: relative;
      padding-left: 10px;
      margin-left: 5px;
      margin-bottom: 2px;
      cursor: pointer;

      div{
         &:hover{
            color: #005aa5;
         }
      }

      span{
         vertical-align: text-top;
         margin-right: 3px;
         z-index: 2;
      }

      &:has(ul){
         position: relative;
         list-style-type: none;
      }
   }
`

export const FolderChildren = styled.li`
      div{
         position: relative;

         &:hover{
            color: tomato;
         }

         &:not(:first-child) {
            border-bottom: 1px solid black;
         }

         &:after{
            content: '';
            position: absolute;
            top: -14px;
            left: -8px;
            bottom: 10px;
            width: 10px;
            border-left: 3px solid #005aa5;
            z-index: -1;
         }

          &:before{
            content: '';
            position: absolute;
            top: 0px;
            left: -8px;
            bottom: 10px;
            width: 12px;
            border-bottom: 3px solid #005aa5;
            z-index: -1;
         } 
      }
`