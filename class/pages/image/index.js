import styled from "@emotion/styled"

const MyImg = styled.img`
    width: 100px;
    height: 100px;
    position: relative;
`
const MyImg2 = styled.img`
    width: 30px;
    height: 10px;
    background-color: white;
    position: absolute;
    top: 90px;
    left: 35px;
` 
const Background = styled.img`

`

// codecamp\class\public\images\ic-58-main-location-unselected.png
    const MyDiv = styled.div`
        width: 100px;
        height: 100px;
        /* background-color: red; */
        background-image: url("/images/img-60-profile-image@3x.png");
        background-size: 100%;
    
    `

export default function ImagePage(){

    return (
        <>
            <MyImg src="/images/img-60-profile-image@2x.png"/>
            <MyImg2 src="/images/ic-58-main-location-unselected@3x.png"/>
            <MyDiv />
            <div>이미지 연습</div>
        </>
        
    )

}