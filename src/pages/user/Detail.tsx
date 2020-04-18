import React, { Component } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col } from "antd";
import moment from "moment";
import { observer, inject } from "mobx-react";
import {
  UserDetailBusiness,
  IUserDetailBusiness,
} from "src/business/user/userDetailBusiness";
import { IUserModel } from "@common/interface";

@inject(UserDetailBusiness)
@observer
class UserDetail extends Component<IUserDetailBusiness> {
  render() {
    return <DetailView user={this.props.user} getUser={this.props.getUser} />;
  }
}

function DetailView(props: {
  user: IUserModel;
  getUser: (userId: string) => void;
}) {
  let { id } = useParams();
  props.getUser(id ?? "");
  return (
    <div>
      {Object.entries(props.user).map((x) => {
        let [objectEntriekey, objectEntrieValue] = x;        
        return (
          <ItemView
            name={objectEntriekey}
            value={getValue(objectEntriekey, objectEntrieValue)}
          />
        );
      })}
      <Row className="DetailRow">
        <Col span={12} push={1}>
          <Link to={"/User"}>Go Back Index</Link>
        </Col>
      </Row>
    </div>
  );

  function getValue(
    objectEntriekey: string,
    objectEntrieValue: string
  ): string {
    let value = "";
    let objectEntrieValueType = typeof objectEntrieValue;
    if (
      objectEntrieValueType === "string" ||
      objectEntrieValueType === "number"
    ) {
      if (objectEntriekey === "birthday") {
        value = moment(objectEntrieValue).format("MM/DD/YYYY hh:mm:ss");
      } else {
        value = objectEntrieValue.toString();
      }
    }
    return value;
  }
}

function ItemView(nameValue: { name: string; value: string }) {
  return (
    <Row className="DetailRow">
      <Col span={6} push={6}>
        {nameValue.name} :
      </Col>
      <Col span={18} push={1}>
        {nameValue.value}
      </Col>
    </Row>
  );
}

interface IUserDetailProps extends IUserDetailBusiness {}

interface IUserDetailState {}

export default UserDetail;
