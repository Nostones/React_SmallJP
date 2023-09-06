import styled from "styled-components";
import {createContext, useContext, useState} from "react";
import {words} from "../lang.ts";

const Home = () => {
  return <div />
}


const Content = () => {
  const locale = useContext(LocaleContext)
  return <div>
    <p>{words[locale].content}</p>
    <Home />
  </div>
}

const LocaleContext = createContext<'vi' | 'en'>('vi');

function changeLanguage() {
  const [locale, setLocale] = useState<'vi' | 'en'>('vi')
  setLocale(locale === 'vi' ? 'en' : 'vi');
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`

const Paragraph = styled.p<{ inputColor?: string; }>`
  color: ${props => props.inputColor || 'red'};
  font-size: 30px;
`

const Button = styled.button`
  margin: 10px;
`

export default Home
