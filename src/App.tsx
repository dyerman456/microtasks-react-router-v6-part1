import styles from "./components/Site.module.css";
import {NavLink, Outlet} from "react-router-dom";
import {S} from "./components/pages/_styles.ts";

const PATH = {
  PAGE1: '/adidas',
  PAGE2: '/puma',
  PAGE3: '/abibas',
  PRICES: '/prices',
  ERROR404: '/error404',
} as const

export const App = () => {
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PRICES}>Prices</NavLink></S.NavWrapper>
        </div>
        <div className={styles.content}>
          {/*<Routes>*/}

          {/*  <Route path={'adidas/:id'} element={<Model arr={adidasArr}/>}/>*/}
          {/*  <Route path={'puma/:id'} element={<Model arr={pumaArr}/>}/>*/}

          {/*  <Route path="/*" element={<Error404/>}/>*/}

          {/*</Routes>*/}
          <Outlet/>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}
