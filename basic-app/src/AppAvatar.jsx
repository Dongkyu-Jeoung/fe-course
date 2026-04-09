import AvatarImage from "./components/avatar/AvatarImage.jsx"
import AvatarImageList from "./components/avatar/AvatarImageList.jsx"
import AvatarList from "./components/avatar/AvatarList.jsx"
import Avatar from "./components/avatar/Avatar.jsx"
import style from "./components/avatar/Avatar.module.css"

import people1 from './assets/people1.webp'
import people2 from './assets/people2.webp'
import people3 from './assets/people3.webp'


function App() {

  const alist = [
    {img : people1, name : 'Smith'},
    {img : people2, name : 'James'},
    {img : people3, name : 'Anne'}
  ];

  const alist2 = [
    {img : "https://cf.lottecinema.co.kr//Media/Event/c7cf96b70ebd44849b56332b8ca48d9a.jpg",
      style : style.avatar_img_circle
    },
    {img : "https://cf.lottecinema.co.kr//Media/Event/c7cf96b70ebd44849b56332b8ca48d9a.jpg",
      style : style.avatar_img_circle
    },
    {img : "https://cf.lottecinema.co.kr//Media/Event/c7cf96b70ebd44849b56332b8ca48d9a.jpg",
      style : style.avatar_img_circle
    }
  ];

  return (
    <>
      <AvatarImage img={people2} style={style.avatar_img}/>
      <Avatar img={people2} name="Smith"/>
      <AvatarList list={alist}/>
      {/* <AvatarImageList list={alist2}/> */}
    </>
  )
}

export default App
