import React from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 960px;
  margin: 16px auto;
  display: grid;
  justify-items: center;
`;

const Label = styled.label``;

const Search = props => {
  return (
    <Form onSubmit={props.getValue}>
      <Label>
        <input type="input" name="valueName" />
        <button>submit</button>
      </Label>
    </Form>
  );
};

export default Search;
