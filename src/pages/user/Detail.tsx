// import React, { Component } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Row, Col } from "antd";
// import { GetUser } from "./Api";
// import moment from "moment";
// import _ from "lodash";

// class UserDetail extends Component {
//   state = {
//     id: 0,
//   };

//   render() {
//     return <DetailView />;
//   }
// }

// function DetailView() {
//   let { id } = useParams();
//   var user = GetUser(id ?? "");
//   console.log(user);
//   return (
//     <div>
//       {Object.entries(user).map((x) => {
//         let [objectEntriekey, objectEntrieValue] = x;
//         console.log(objectEntriekey);
//         return (
//           <ItemView
//             name={objectEntriekey}
//             value={getValue(objectEntriekey, objectEntrieValue)}
//           />
//         );
//       })}
//       <Row>
//         <Col span={12} push={1}>
//           <Link to={"/User"}>Go Back Index</Link>
//         </Col>
//       </Row>
//     </div>
//   );

//   function getValue(
//     objectEntriekey: string,
//     objectEntrieValue: string
//   ): string {
//     let value = "";
//     let objectEntrieValueType = typeof objectEntrieValue;
//     if (
//       objectEntrieValueType === "string" ||
//       objectEntrieValueType === "number"
//     ) {
//       if (objectEntriekey === "birthday") {
//         value = moment(objectEntrieValue).format("MM/DD/YYYY hh:mm:ss");
//       } else {
//         value = objectEntrieValue.toString();
//       }
//     }
//     return value;
//   }
// }

// function ItemView(nameValue: { name: string; value: string }) {
//   return (
//     <Row>
//       <Col span={6} push={6}>
//         {nameValue.name} :
//       </Col>
//       <Col span={18} push={1}>
//         {nameValue.value}
//       </Col>
//     </Row>
//   );
// }

// export default UserDetail;

export default null;
