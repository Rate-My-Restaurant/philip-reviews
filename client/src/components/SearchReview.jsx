import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


// under search bar, need to show
// # reviews mentioning "searched word"
// button next to it that says "Clear results x"

const SearchDiv = styled.div `
  border-color: #eeeeef;
  margin-bottom: 24px!important;
  display: block;
`
const SearchSortDiv = styled.div `
  margin-left: -24px;
  margin-right: -24px;
  border-collapse: separate;
  border-spacing: 24px 0;
  display: table;
  min-width: 30%;
  table-layout: auto;
  border-color: #eeeeef;
`
const SearchbarDiv = styled.div `
  border-collapse: collapse;
  border-spacing: 0;
  margin-left: 12px;
  margin-right: 12px;
  vertical-align: middle;
  box-sizing: border-box;
  display: table-cell;
`

const SearchLabel = styled.label `
  clip: rect(0 0 0 0);
  position: absolute;
  left: -9999px;
  top: auto;
  overflow: hidden;
  width: 1px;
  height: 1px;
  display: inline-block;
  margin: 0 0 6p;
  cursor: default;
  border-collapse: collapse;
  border-spacing: 0;
`
const LabelSpan = styled.span `
  text-align: left;
  color: #2b273c;
  font-weight: 700;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 20px;
`

const SearchInput = styled.input `
  margin: 0;
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  padding: 13px 15px;
  background-color: #fff;
  border: 1px solid #bbbac0;
  border-radius: 4px;
  transition: border-color .2s ease-in-out;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  -webkit-appearance: textfield;
  -webkit-rtl-ordering: logical;
  cursor: text;
`

const ButtonDiv = styled.div `
  box-sizing: border-box;
  display: table-cell;
  vertical-align: top;
  border-color: #eeeeef;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
`

const Button = styled.button `
  --mousedown-x: 30px;
  --mousedown-y: 29px;
  --button-width: 56px;
  margin-top: 0;
  position: relative;
  left: -4px;
  border-radius: 0 4px 4px 0;
  border: none;
  padding: 12px 16px 16px;
  height: 48px;
  color: #fff;
  background: #f43939;
  background-image: none;
  background-repeat: no-repeat;
  transition: all .8s;
  transition-property: background-image,background-color,background-position,background-size,border-color,box-shadow;
  background-position: calc(var(--mousedown-x) - calc(var(--button-width, 100px) * 200)/2) calc(var(--mousedown-y) - calc(var(--button-width, 100px) * 200)/2);
  background-size: calc(var(--button-width, 100px) * 200) calc(var(--button-width, 100px) * 200);
  display: inline-block;
  vertical-align: middle;
  margin: 0;
  cursor: pointer;
  text-align: center;
  overflow: visible;
  font-weight: normal;
  font: inherit;
  -webkit-appearance: button;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  align-items: flex-start;
  box-sizing: border-box;
`

const SearchReview = (props) => (
  <SearchDiv>
    <SearchSortDiv>
      <SearchbarDiv>
        <SearchLabel>
          <LabelSpan>Search within reviews</LabelSpan>
        </SearchLabel>
        <SearchInput type="text" value={props.searchedTerm} onChange={(e) => props.handleChange(e)} placeholder="Search within reviews"/>
        <ButtonDiv>
          <Button type="button" onClick={() => props.handleSubmit()}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon_svg">
                <path d="M22.46 21.05l-3.72-3.72a10 10 0 1 0-1.41 1.41l3.72 3.72a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41zM5.34 16.66A8 8 0 1 1 16.66 5.353 8 8 0 0 1 5.34 16.66z"></path>
              </svg>
            </span>
          </Button>
        </ButtonDiv>
    </SearchbarDiv>
      <div>
        <span>Sort by</span>
        <select value={props.sortValue} onChange={props.handleChangeSort}>
          <option value="newest first">Newest First</option>
          <option value="oldest first">Oldest First</option>
          <option value="highest rate">Highest Rate</option>
          <option value="lowest rate">Lowest Rate</option>
          <option value="elites">Elites</option>
        </select>
      </div>
    </SearchSortDiv>
    <span>
      {
        props.searchedTerm.length > 0 &&
        <div>
          <span>
            {props.searchedReviews.length} reviews mentioning "{props.searchedTerm}"
          </span>
          <span>
            <button type="button" onClick={() => props.handleSubmitClear()}> Clear results <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" class="icon_svg"><path d="M7.025 8.4l-2.122 2.12A1 1 0 0 1 3.49 9.106l2.12-2.122-2.12-2.12A1 1 0 1 1 4.903 3.45l2.122 2.12 2.12-2.12a1 1 0 1 1 1.415 1.41L8.44 6.98l2.12 2.123a1 1 0 0 1-1.414 1.414L7.026 8.4z"></path></svg>
            </button>
          </span>
        </div>
      }
    </span>
  </SearchDiv>
);

export default SearchReview;
