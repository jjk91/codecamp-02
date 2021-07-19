import {AndroidOutlined} from '@ant-design/icons'

export default function LibarisePage(){

    function onClickIcon(event){
        console.log(event.target)
    }

    return( 
        <>
            <div>라이브러리 페이지</div>
            <AndroidOutlined />
        </>
    )

}