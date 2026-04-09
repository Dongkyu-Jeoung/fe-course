import Logo from './common/Logo.jsx'
import Image from './common/Logo.jsx'
import people1 from './assets/people1.webp'


export default function App () {
    return (
        <>
            <Logo img="https://www.lottecinema.co.kr/NLCHS/Content/images/common/logo_footer.gif"
                alt="Lotte LOGO"
                w="150px"
                h="50px"/>
            <Logo img="https://cgv.co.kr/_next/image?url=https%3A%2F%2Fcdn.cgv.co.kr%2Fcgvpomscontent%2Fstatic%2Fpublic%2Fimages%2Fmco%2Flogo%2Flogo_cgv.png&w=256&q=75"
                alt="CGV LOGO"
                w="100px"
                h="40px"/>
            <Image img={people1}
                alt="프로필사진"
                w="100px"
                h="150px"/>
            <Image img="https://cf2.lottecinema.co.kr/lotte_image/2026/Farewell/Farewell_980180_33.jpg"
                alt="패왕별희"
                w="100%"
                h=""/>
        </>
    )
}