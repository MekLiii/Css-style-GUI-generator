import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import RangeInput from "../Atoms/BoxShadowAtoms/RangeInput";
import ColorPicker from "../Atoms/BoxShadowAtoms/ColorPicker";
import { CopyOutline } from "react-ionicons";

function BoxShadow() {
  const [horizontal, setHorizontal] = useState([0]);
  const [vertical, setVertical] = useState([0]);
  const [blur, setBlur] = useState([50]);
  const [spread, setSpread] = useState([0]);
  const [inset, setInset] = useState(false);
  const [color, setColor] = useState({ hex: "#000000" });
  const [colorOpen, setColorOpen] = useState(false);

  return (
    <Box onClick={colorOpen ? () => setColorOpen(false) : null}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Container>
          <OperationBox>
            <InputBox>
              <LabelBox>
                <Label>Horizontal</Label>
                <p>{horizontal}</p>
              </LabelBox>
              <RangeInput
                value={horizontal}
                setValue={(value) => setHorizontal(value)}
              />
            </InputBox>
            <InputBox>
              <LabelBox>
                <Label>vertical</Label>
                <p>{vertical}</p>
              </LabelBox>
              <RangeInput
                value={vertical}
                setValue={(value) => setVertical(value)}
              />
            </InputBox>
            <InputBox>
              <LabelBox>
                <Label>Blur</Label>
                <p>{blur}</p>
              </LabelBox>
              <RangeInput
                value={blur}
                setValue={(value) => setBlur(value)}
                min={0}
              />
            </InputBox>
            <InputBox>
              <LabelBox>
                <Label>Spread</Label>
                <p>{spread}</p>
              </LabelBox>
              <RangeInput
                value={spread}
                setValue={(value) => setSpread(value)}
              />
            </InputBox>
            <InputBox>
              <LabelBox>
                <Label>Inset</Label>
                <p>{inset}</p>
                <CheckBoxWrapper>
                  <CheckBox
                    id="checkbox"
                    type="checkbox"
                    value={inset}
                    onChange={() => setInset(!inset)}
                  />
                  <CheckBoxLabel htmlFor="checkbox" />
                </CheckBoxWrapper>
              </LabelBox>
            </InputBox>
            <InputBox>
              <LabelBox>
                <Label>Color</Label>
                <p>{inset}</p>
                <ColorBox
                  color={color.hex}
                  onClick={() => setColorOpen(!colorOpen)}
                />
                {colorOpen && (
                  <ColorPicker
                    color={color}
                    onChangeComplete={(color) => setColor(color)}
                  />
                )}
              </LabelBox>
            </InputBox>
          </OperationBox>
          <OperationBox
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <OutputBox
              horizontal={horizontal}
              vertical={vertical}
              blur={blur}
              spread={spread}
              inset={inset}
              color={color.hex}
              s
            />
            <CodeBox>
              <IconBox>
                <CopyOutline
                  color={"#fff"}
                  title={"Copy"}
                  height="25px"
                  width="25px"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `box-shadow:${
                        inset && "inset"
                      } ${horizontal}px ${vertical}px ${blur}px ${spread}px ${
                        color.hex
                      };
                    -webkit-box-shadow:${
                      inset && "inset"
                    } ${horizontal}px ${vertical}px ${blur}px ${spread}px ${
                        color.hex
                      };
                    -moz-box-shadow:${
                      inset && "inset"
                    } ${horizontal}px ${vertical}px ${blur}px ${spread}px ${
                        color.hex
                      };
                    
                    `
                    );
                  }}
                />
              </IconBox>
              <StyledCode>
                box-shadow:{inset && "inset"} {horizontal + "px"}{" "}
                {vertical + "px"} {blur + "px"} {spread + "px"} {color.hex};
              </StyledCode>
              <StyledCode>
                -webkit-box-shadow:{inset && "inset"} {horizontal + "px"}{" "}
                {vertical + "px"} {blur + "px"} {spread + "px"} {color.hex};
              </StyledCode>
              <StyledCode>
                -moz-box-shadow:{inset && "inset"} {horizontal + "px"}{" "}
                {vertical + "px"} {blur + "px"} {spread + "px"} {color.hex};
              </StyledCode>
            </CodeBox>
          </OperationBox>
        </Container>
      </motion.div>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #08aeea;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const OperationBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: #f5f5f5;
  -webkit-box-shadow: 0px 0px 14px -3px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 14px -3px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 14px -3px rgba(66, 68, 90, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InputBox = styled.div`
  flex: 1;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #474747;
  &:last-child {
    border-bottom: none;
  }
`;
const LabelBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
`;
const Label = styled.label``;

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #08aeea;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const ColorBox = styled.div`
  width: 50px;
  height: 50px;
  background: ${(props) => props.color || "#000000"};
  cursor: pointer;
  border: 1px solid black;
  border-radius: 50%;
`;

const CodeBox = styled.div`
  width: 90%;
  height: 200px;
  background-color: #292929;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const StyledCode = styled.p`
  color: white;
  font-size: 20px;
`;
const IconBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-right: 20px;
`;

const OutputBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
  box-shadow: ${(props) => props.inset && "inset"}
    ${(props) => props.horizontal + "px"} ${(props) => props.vertical + "px"}
    ${(props) => props.blur + "px"} ${(props) => props.spread + "px"}
    ${(props) => props.color};
`;

export default BoxShadow;
