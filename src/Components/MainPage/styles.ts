import styled from "styled-components";

export const MainBox = styled.div`
  width: 100%;
  padding: 20px 10px;
`;

export const Title = styled.h1`
  font-size: 48px;
  weight: 700;
`;

export const Form = styled.form`
  padding: 20px 0;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  input {
    margin: 10px 0px;
    height: 40px;
    padding: 0 0 0 10px;
    border: none;
  }

  #info {
    font-size: 12px;
    padding: 0 0 0 0;
  }

  button {
    width: 50%;
    height: 40px;
    margin: 20px 0px;
    border: none;
    background-color: #04d361;
    color: #fff;
  }
`;

export const ScheduleList = styled.div`
  width: 100%;
  margin: 20px 0px;
`;

export const ScheduleBox = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  margin: 20px 0;

  #description {
    padding: 10px 10px 20px 10px;
    p {
      word-wrap: break-word;
    }
  }

  #date {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px 5px 10px;

    button {
      width: 100px;
      height: 30px;
      border: none;
      background-color: #ff0000;
      color: #fff;
    }
  }
`;
