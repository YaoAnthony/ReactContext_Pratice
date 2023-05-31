# ReactContext_Pratice
One kind of answer regarding the new react tutorial: https://react.dev/learn/passing-data-deeply-with-context


# testing

it just a component, thus you need create a react program by urself firstly. then connecting with this component as show below:

```

import css from "./mainpage.module.scss"
import ReactRebuild from "../../component/ReactRebuild"

const MainPage = ()=>{
    return(
        <div className={css.display}>
            <ReactRebuild />
        </div>
    )
}


export default MainPage


```
