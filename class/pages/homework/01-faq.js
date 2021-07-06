import {Wrapper, Top, Wifi, Network, Battery, Time, Head, Headtop, Search, Headbody, Information, Myimage, Photo, Name, Arrow1, Headfooter, Notice, Event, Faq, Qna} from '../../styles/Homewrok.styles'

export default function Home (){
    return (
        <Wrapper>
            <Top>
                <Wifi></Wifi>
                <Network></Network>
                <Battery></Battery>
                <Time>12:30</Time>
            </Top>

            <Head>
                <Headtop>
                    <Search></Search>
                    {/* <Image src="search_black.png"></Image> */}
                    {/* <img src='Search_black.png' />            */}
                </Headtop>
                <Headbody>
                    <Information>마이</Information>
                    <Myimage>
                        <Photo></Photo>
                        <Name>임정아</Name>
                        <Arrow1></Arrow1>
                    </Myimage>
                </Headbody>
                <Headfooter>
                    <Notice>공지사항</Notice>
                    <Event>이벤트</Event>
                    <Faq>FAQ</Faq>
                    <Qna>Q&A</Qna>
                </Headfooter>
            </Head>
        </Wrapper>


    )
    
}