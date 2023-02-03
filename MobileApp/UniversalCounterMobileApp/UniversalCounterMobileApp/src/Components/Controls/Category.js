import React from "react";
import {Button} from "@rneui/themed";

const Category = props => {
  return (
    <Button
      key={props.category.Id}
      title={props.category.Name}
      // icon={{
      //   name: 'user',
      //   type: 'font-awesome',
      //   size: 15,
      //   color: 'white',
      // }}
      buttonStyle={{
        width: 70,
        height: 70,
        borderRadius: 70,
      }}
    />
  )
}

export default Category;
