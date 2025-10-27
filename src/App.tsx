import styles from "./components/Site.module.css";
import {NavLink, Outlet} from "react-router-dom";
import {S} from "./components/pages/_styles.ts";

const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  ABIBAS: '/abibas',
  MODEL: '/:model/:id',
  PRICES: '/prices',
  PROTECTEDPAGE: '/protectedPage',
  ERROR404: '/error404',
} as const

export const App = () => {
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PRICES}>Prices</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PROTECTEDPAGE}>Protected Page</NavLink></S.NavWrapper>
        </div>
        <div className={styles.content}>
          <Outlet/>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}
