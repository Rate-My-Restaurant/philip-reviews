import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Pictures from './Pictures';

const PhotoNumber = styled.span`
  text-align: left;
  font-size: 12px;
  line-height: 18px;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 400;
`
const PhotoIcon = styled.svg `
  width: 18px;
  height: 18px;
  fill: #666;
  overflow: hidden;
`

const UploadDate = styled.span`
  text-align: left;
  color: #757280;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`

const CheckinDate = styled.span`
  text-align: left;
  color: 757280;
  font-size: 12px;
  line-height: 18px;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 400;
`;

const CheckinIcon = styled.svg `
  width: 18px;
  height: 18px;
  fill: #0077bc;
  overflow: hidden;
`

const ReviewText = styled.div `
  color: #2b273c;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  word-break: break-word!important;
  overflow-wrap: break-word!important;
`

const SeeAllPhotos = styled.div `
  font-size: 14px;
  line-height: 20px;
  color: #00838f;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  text-decoration: none;
`
const EmojiText = styled.span `
  text-align: left;
  color: #757280;
  font-size: 12px;
  line-height: 18px;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 400;
`

const ReportFlag = styled.span `
  display: inline-block;
  padding: 7px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 12px;
  line-height: 18px;
  color: #757280;
  background: transparent;
  box-shadow: none;
  white-space: nowrap;
`

const ReplyBox = styled.div `
  display: block;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 4px;
  background-color: #f4f4f4;
  border-color: #eeeeef;
  border-left: 1px solid #eeeeef;
  border-bottom: 1px solid #eeeeef;
  border-right: 1px solid #eeeeef;
  border-top: 1px solid #eeeeef;
  padding-bottom: 24px!important;
  padding-top: 24px!important;
  padding-right: 24px!important;
  padding-left: 24px!important;
`

const ReplyFrom = styled.span `
  text-align: left;
  color: #757280;
  font-weight: 700
  font-size: 12px;
  line-height: 18px;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
`

const ReplyText = styled.span `
color: #2b273c;
font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 20px;
text-align: left;
word-break: break-word!important;
overflow-wrap: break-word!important;
border-collapse: collapse;
border-spacing: 0;
`


// const Button = styled.button`
//   cursor: pointer;
//   background: transparent;
//   font-size: 16px;
//   border-radius: 3px;
//   color: ${props => (props.primary ? 'violet' : 'palevioletred')};
//   border: ${props => props.primary ? '2px solid violet' : '2px solid palevioletred'};
//   margin: 0 1em;
//   padding: 0.25em 1em;
//   transition: 0.5s all ease-out;

//   $:hover {
//     color: white;
//     background-color: ${props =>
//     props.primary ? 'violet' : 'palevioletred'};
//   }
// `;

const ReviewItem = (props) => (
  <div>
    <div>
      <span>{props.reviewItem.stars} Stars</span>
      <UploadDate>{props.reviewItem.uploadDate}</UploadDate>
    </div>
    <div>
      {
        props.reviewItem.pictures.length > 0 &&
        <PhotoNumber>
            <PhotoIcon xmlns="http://www.w3.org/2000/CheckinIcon" viewBox="0 0 18 18" class="icon_svg">
              <path d="M15 15H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2zM9 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z">
              </path>
            </PhotoIcon> {props.reviewItem.pictures.length} photos
        </PhotoNumber>
      }
      {
        props.reviewItem.restaurantVisit > 0 &&
        <CheckinDate>
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 18 18" class="icon_svg" fill="#0077bc">
            <path d="M18 9l-2.136-1.84.932-2.66-2.772-.525-.524-2.77-2.66.93L8.997 0 7.163 2.136 4.5 1.206l-.525 2.77-2.77.524.932 2.66L0 9l2.137 1.84-.932 2.66 2.77.525.526 2.77 2.664-.932L8.998 18l1.84-2.137 2.662.932.524-2.77 2.772-.524-.932-2.66L18 9zm-9.85 3.23L5.324 9.4l1.13-1.13 1.698 1.696 3.396-3.395 1.13 1.134-4.525 4.525z">
            </path>
          </svg>
            {props.reviewItem.restaurantVisit} check-in
        </CheckinDate>

      }
    </div>
    <ReviewText>{props.reviewItem.content}</ReviewText>
    {
      props.reviewItem.pictures.map(picture => {
        return <Pictures picture={picture} />
      })
    }
    {
      props.reviewItem.pictures.length > 0 &&
      <SeeAllPhotos>
        See all photos from {props.reviewItem.userName} for {props.reviewItem.restaurantName}
      </SeeAllPhotos>
    }
    <div>
      <EmojiText>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon_svg"><path d="M12 1a11 11 0 0 1 11 11c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-15.82a5.56 5.56 0 0 1 3 10.26V17a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1.56a5.56 5.56 0 0 1 3-10.26zM11 17h2v-1h-2v1zm2.56-3a3.58 3.58 0 1 0-3.12 0h3.12z"></path>
        </svg> Useful {props.reviewItem.emojiUseful}
      </EmojiText>
      <EmojiText>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon_svg"><path d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11a11 11 0 0 1-11 11zm0-20a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-4.5 8a1.5 1.5 0 0 1 3 0h-3zm6 0a1.5 1.5 0 0 1 3 0h-3zm-7.21 2h11.46a.26.26 0 0 1 .25.29c-.57 3.25-3 5.71-6 5.71s-5.43-2.46-5.96-5.71a.26.26 0 0 1 .25-.29z"></path>
        </svg> Funny {props.reviewItem.emojiFunny}</EmojiText>
      <EmojiText>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon_svg"><path d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11a11 11 0 0 1-11 11zm0-20a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-7.48 7.56a.43.43 0 0 1 .41-.56h14.14a.43.43 0 0 1 .41.56l-.85 2.53a3 3 0 0 1-2.8 2 3 3 0 0 1-2.8-2l-.28-.85a.8.8 0 0 0-.75-.54.8.8 0 0 0-.75.54l-.28.85a3 3 0 0 1-2.8 2 3 3 0 0 1-2.8-2l-.85-2.53zm3.18 5.63a16.3 16.3 0 0 0 8.6 0 .25.25 0 0 1 .26.39A5.71 5.71 0 0 1 12 19a5.71 5.71 0 0 1-4.56-2.42.25.25 0 0 1 .26-.39z"></path>
        </svg>Cool {props.reviewItem.emojiCool}
        </EmojiText>
      <ReportFlag>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="icon_svg"><path d="M6 10V3c4.976 1.098 4.024-1 8 0v7c-4.024-.976-3.024 1.024-8 0zM4 2h1v14H4V2z"></path>
        </svg>
      </ReportFlag>
    </div>
      {
        props.reviewItem.reply &&
        <ReplyBox>
          <ReplyFrom>Comment from {props.reviewItem.restaurantName}
          </ReplyFrom><br/>
          <ReplyText>{props.reviewItem.reply}
          </ReplyText>
        </ReplyBox>
      }
  </div>
);
export default ReviewItem;
