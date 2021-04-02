import styled from 'styled-components';
import { Layout, Form, Button, Typography } from 'antd';
import { Span } from 'interface/formInterface';

const { Sider } = Layout;
const { Title } = Typography;

export const CustomLayout = styled(Layout)`
  min-height: 100vh;
`;
export const CustomSider = styled(Sider)`
  min-width: 700px !important ;
  background-color: #999999;
  @media (max-width: 1110px) {
    display: none;
  }
`;
export const CustomButtonForm = styled(Form.Item)`
  .ant-form-item-control-input-content {
    margin-left: 45%;
    /* border:1px solid; */
    display: flex;
    justify-content: space-between;
  }

  /* transform:translate(-50px,-200px); */
  /* @media (max-width:900px){
transform:translateY(-200px); */
  /* transform:translateX(00px); */
`;
export const CustomButtonForm2 = styled(Form.Item)`
  margin-bottom: 5px;
  .ant-form-item-control-input-content {
    margin-left: 0%;
    /* border:1px solid; */
    display: flex;
    justify-content: space-between;
  }
  .ant-form-item {
    margin-bottom: 0;
  }
`;
export const DivIconPlugin = styled.div`
  max-width: 150px;
  max-height: 150px;
  min-height: 50px;
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonNoBorder = styled.div`
  border: none;
  outline: none;
  cursor: pointer;
`;
export interface Prop {
  margin?: String | Boolean;
  // premier: string
}
export const SignTitle = styled(Title)`
  text-align: center;
  margin-bottom: 20px;
  margin-bottom: 20px !important;
`;

export const DivIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Div = styled.div`
  width: 350px;
`;
export const SpanImg = styled.span`
  border-radius: 2rem;
  float: left;
  height: 2.8rem;
  width: 2.8rem;
  background-color: white;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const SpanText = styled.span`
  position: absolute;
  padding-top: 0.8rem;
  left: 1rem;
  right: 6.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inherit;
  z-index: 1;
  line-height: 1.3rem;
`;
export const MissPass = styled.a`
  float: right;
`;
export const IconAnt = styled.span<Span>`
  font-size: 1rem;
  margin-top: -5px;
  padding-right: 3px;
  /* margin-left: 54px; */
  /* margin-left: ${(props) => (props.right ? '59px' : '')}; */
  /* margin-left: ${(props) => (props.left ? '-12px' : '')}; */
  /* margin-top: ${(props) => (props.left ? '-7px' : '')}; */
`;
export const ButtonIcon = styled(Button)<Prop>`
  width: 30px;
  outline: none;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-right: ${(props) => (props.margin ? '5px' : '')};
  margin-right: ${(props) => (props.margin ? '10px' : '')};
`;
export const NameIcon = styled.span`
  font-size: 16px;
`;
