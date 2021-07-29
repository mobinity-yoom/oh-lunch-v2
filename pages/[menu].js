import { useEffect } from "react";

const MenuDetail = ({ menu }) => {

    
    // return page
    return (
        <Layout boardWidth="1200px" mobileWidth="100%">
          <h2>주문 상세 : {id}</h2>
          <OrderBoard type="edit" state={state} onChange={onChange} id={id} />
          {/*<div style ={{ display : "none" }}>
            <OrderPrint state={state}/>
      </div>*/}
        </Layout>
      );
}

// MenuDetail.propTypes = {
//     id: PropTypes.any,
// };
  
MenuDetail.getInitialProps = (req) => {
    return { menu: req.query.menu };
};

export default MenuDetail;