import { useState, VFC } from "react";
import styled from "styled-components";
import { helpQustionDataType } from "../../assets/type/dataType";
import { DefaultButton } from "../atoms/button/DefaultButton";

type HiddenAnswerPropsType = {
    isClick: boolean;
};

type propsType = {
    data: helpQustionDataType;
};

export const HelpQuestion: VFC<propsType> = (props) => {
    const { data } = props;
    const [isClick, setIsClick] = useState(false);
    return (
        <SComponentContainer>
            <SQuestion>
                <h2>{"質問:" + data.qustion}</h2>
                <DefaultButton onClick={() => setIsClick(!isClick)}>
                    詳細
                </DefaultButton>
            </SQuestion>
            <SHiddenAnswer isClick={isClick}>
                <div>{data.answer}</div>
            </SHiddenAnswer>
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    margin: 10px;
`;

const SQuestion = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
`;

const SHiddenAnswer = styled.div<HiddenAnswerPropsType>`
    overflow: hidden;
    transition: 0.8s;
    width: 100%;
    border-radius: 5px 5px 5px 5px;
    box-sizing: border-box;
    border: 3px solid;
    font-size: 24px;

    height: ${(props) => (props.isClick ? "auto" : 0)};
    opacity: ${(props) => (props.isClick ? 1 : 0)};
`;
