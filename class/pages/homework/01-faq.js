import {Wrapper, Head, Body, Headtop, Search, Headbody, Information
    , Myimage, Photo, Name, Arrow1, Headfooter, Notice, Event
    , Faq, Qna, Qtext, Q01title, Grounp, Notice1, Arrow2
    ,Footer, Grounp1, Grounp2, Footertext, Footertext1
    , Myhome, Eatsroad, Like, My} from '../../styles/01-faq.styles'


export default function Home (){
    return (
        <Wrapper>
            <Head>
                <Headtop>
                    <Search src="/images/ic-58-main-search-black.png"/>
                </Headtop>
                <Headbody>
                    <Information>마이</Information>
                    <Myimage>
                        <Photo src="/images/img-60-profile-image.png"/>
                        <Name>임정아</Name>
                        <Arrow1 src="/images/ic-28-arrow.png" />
                    </Myimage>
                </Headbody>
                <Headfooter>
                    <Notice>공지사항</Notice>
                    <Event>이벤트</Event>
                    <Faq>FAQ</Faq>
                    <Qna>Q&A</Qna>
                </Headfooter>
            </Head>
            <Body>
                <Qtext>
                    <Grounp>
                        <Q01title>Q.01</Q01title>
                        <Notice1>리뷰 작성은 어떻게 하나요?</Notice1>
                    </Grounp>
                    <Arrow2 src="/images/ic-70-arrow-right_2.png"/>
                </Qtext>
                <Qtext>
                    <Grounp>
                        <Q01title>Q.02</Q01title>
                        <Notice1>리뷰 수정/삭제는 어떻게 하나요?</Notice1>
                    </Grounp>
                    <Arrow2 src="/images/ic-70-arrow-right_2.png"/>
                </Qtext>
                <Qtext>
                    <Grounp>
                        <Q01title>Q.03</Q01title>
                        <Notice1>아이디/비밀번호를 잊어버렸어요.</Notice1>
                    </Grounp>
                    <Arrow2 src="/images/ic-70-arrow-right_2.png"/>
                </Qtext>
                <Qtext>
                    <Grounp>
                        <Q01title>Q.04</Q01title>
                        <Notice1>회원탈퇴를 하고싶어요.</Notice1>
                    </Grounp>
                    <Arrow2 src="/images/ic-70-arrow-right_2.png"/>
                </Qtext>
                <Qtext>
                    <Grounp>
                        <Q01title>Q.05</Q01title>
                        <Notice1>출발지 설정은 어떻게 하나요?</Notice1>
                    </Grounp>
                    <Arrow2 src="/images/ic-70-arrow-right_2.png"/>
                </Qtext>
                <Qtext>
                    <Grounp>
                        <Q01title>Q.06</Q01title>
                        <Notice1>비밀번호를 변경하고 싶어요.</Notice1>
                    </Grounp>
                    <Arrow2 src="/images/ic-70-arrow-right_2.png"/>
                </Qtext>
            </Body>
            <Footer>
                <Grounp1>
                    <Myhome src="/images/ic-58-main-home-unselected.png"/>
                    <Footertext>홈</Footertext>
                </Grounp1>
                <Grounp1>
                    <Eatsroad src="/images/ic-58-main-location-unselected.png"/>
                    <Footertext>잇츠로드</Footertext>
                </Grounp1>
                <Grounp1>
                    <Like src="/images/ic-58-main-like-unselected.png"/>
                    <Footertext>마이찜</Footertext>
                </Grounp1>
                <Grounp2>
                    <My src="/images/ic-58-main-my-selected.png"/>
                    <Footertext1>마이</Footertext1>
                </Grounp2>

            </Footer>
        </Wrapper>


    )
    
}