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

  return (
    <>
      <AvatarImage img={people2} style={style.avatar_img}/>
      <Avatar img={people2} name="Smith"/>
      <AvatarList list={alist}/>
    </>
  )
}

export default App
