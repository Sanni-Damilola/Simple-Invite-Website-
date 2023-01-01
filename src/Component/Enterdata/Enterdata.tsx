import React, { useState, useRef } from "react";
import styled from "styled-components";
import img from "../Asset/default.png";
import video from "../Asset/short.mp4";
import html2canvas from "html2canvas";
import { NavLink } from "react-router-dom";
import bg from "../Asset/bg.jpg";
import small from "../Asset/small.jpg";

const Enterdata: React.FC = () => {
  const [image, setimage] = useState<string>(img);
  const [name, setname] = useState<string>("");
  const [show, setshow] = useState<boolean>(false);
  const [show1, setshow1] = useState<boolean>(false);

  const func = (e: any) => {
    console.log(e);
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setimage(save);
  };

  const printRef: any = React.useRef();

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  const funcshow = () => {
    setshow(true);
  };

  return (
    <Container ref={printRef}>
      <Wrapper>
        <Wrap>
          <Pre>
            EXPERINCE <span>CODE THAT WORKS</span>
          </Pre>
          <H5>TECH</H5>
          <Pre>
            THE LEVELER <span>IN THE 21st CENTURY</span>
          </Pre>
        </Wrap>
        <Imageinfo>
          <Image src={image} />
          <Imageinput
            id="pix"
            type={"file"}
            accept="image/jpg, image/png, image/jpeg"
            onChange={func}
          />
          <Imagelabel htmlFor="pix">enter your image</Imagelabel>
        </Imageinfo>
        <br />
        <Textwrapper>
          <Capture>
            {name ? "My Name is " : "Hi Dear What's your name ?"}
            <Strong>{name}</Strong> <br />
          </Capture>
          <br />
          <Input
            value={name}
            onChange={(e: any) => {
              setname(e.target.value);
            }}
            placeholder="Enter your name"
          />
          <br />
          {name.trim() !== "" && image !== img ? (
            <Button onClick={funcshow}>next page</Button>
          ) : null}
        </Textwrapper>
        <Footer>
          <span>17|12|22 10:00AM PROMPT</span>
          <pre>
            POWERED BT <i>CODELAB SET06</i>
          </pre>
          <p>Copyright © 2022 Sanni Damilola</p>
        </Footer>
      </Wrapper>
      <Video autoPlay={true} muted playsInline loop={true} src={video} />
      {show ? (
        <Nextpage>
          <i>CODELAB</i>
          <br />
          <br />
          <br />
          <Image1 src={image} />
          <br />
          <br />
          <br />
          <Capture1>
            {"My Name is "}
            <Strong1>{name}</Strong1>
            {"I will be there.".toUpperCase()}
          </Capture1>
          <br />
          <br />
          <Circle>
            <Small src={small} />
          </Circle>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Text>
            <h3>
              17th Of <pre>DECEMBER.</pre>
            </h3>
            <span>Ajeromi Time : 10am prompt</span>
          </Text>
          <Download onClick={handleDownloadImage} >Download as picture</Download>
        </Nextpage>
      ) : null}
    </Container>
  );
};

export default Enterdata;

const Download = styled.button`
  padding: 4px 10px;
  cursor: pointer;
  background-color: blue;
  color: white;
  float: right;
  font-weight: 6-00;
  margin-right: 20px;
  margin-top: 10px;
  border-radius: 5px;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    color: white;
    margin: 0;
    font-size: 40px;
    font-weight: bold;
    border-right: 2px solid white;
    pre {
      margin: 0;
      color: rgb(251, 175, 27);
    }
    margin-left: 10px;
  }

  span {
    color: white;
    width: 160px;
    margin-left: 20px;
    font-size: 16px;
    font-weight: 500;
  }
`;

const Small = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  border-radius: 50%;
`;

const Circle = styled.div`
  width: 150px;
  height: 150px;
  margin-left: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Nextpage = styled.div`
  width: 100%;
  position: absolute;
  padding-bottom: 30px;
  top: 0;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 999;

  i {
    font-size: 40px;
    color: white;
    margin-left: 10px;
    font-weight: bolder;
  }
`;

const Footer = styled.div`
  span {
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 2px;
  }

  pre {
    letter-spacing: 2px;
    font-size: 17px;
    font-weight: 500;
    margin: 0;

    i {
      font-weight: bold;
      color: rgb(251, 175, 27);
    }
  }

  p {
    font-size: 14px;
  }

  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  @media screen and (max-width: 420px) {
    flex-direction: column;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  margin-bottom: 30px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media screen and (max-width: 960px) {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

const Pre = styled.pre`
  color: white;
  font-size: 18px;
  margin: 0;
  span {
    color: rgb(251, 175, 27);
    font-size: 18px;
  }

  @media screen and (max-width: 420px) {
    font-size: 15px;

    span {
      font-size: 15px;
    }
  }
`;

const H5 = styled.h5`
  color: white;
  margin: 0;
  text-decoration: underline;
  text-decoration-color: rgb(251, 175, 27);
  font-size: 20px;

  @media screen and (max-width: 420px) {
    font-size: 15px;
  }
`;

const Textwrapper = styled.div`
  margin-left: 20px;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 12px;
  text-align: center;

  @media screen and (max-width: 420px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 960px) {
    flex-wrap: wrap;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;

  @media screen and (max-width: 420px) {
    object-fit: cover;
  }
  @media screen and (max-width: 960px) {
    object-fit: cover;
  }
`;

const Strong = styled.strong`
  color: rgb(251, 175, 27);
  margin-left: 10px;
  font-weight: 800;
  text-transform: capitalize;
  width: 100%;
  margin: 0;
`;
const Strong1 = styled.strong`
  color: rgb(251, 175, 27);
  margin-left: 10px;
  font-weight: 800;
  text-transform: capitalize;
  width: 100%;
  margin: 0;
  font-size: 26px;
  letter-spacing: 2px;
`;

const Button = styled.div`
  cursor: pointer;
  padding: 10px 15px;
  background-color: blue;
  text-decoration: none;
  border-radius: 10px;
  color: rgb(251, 175, 27);
  :hover {
    color: white;
    background-size: 100% 100%;
  }
  transition: all 360ms;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 18px;
  box-shadow: rgb(251, 175, 27) 0px 50px 100px -20px,
    rgb(251, 175, 27) 0px 30px 60px -30px;
  background-image: linear-gradient(
    transparent 0,
    transparent 10%,
    black 90%,
    black 100%
  );

  background-position-x: left;
  background-repeat: no-repeat;
  background-size: 26% 100%;
`;

const Capture = styled.span`
  font-size: 19px;
  font-weight: 900;
  color: blue;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 200px;
  flex-wrap: wrap;
`;
const Capture1 = styled.span`
  font-size: 30px;
  font-weight: 900;
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  width: 300px;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 999;

  @media screen and (max-width: 420px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 960px) {
    flex-wrap: wrap;
  }
`;

const Imageinfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const Image = styled.img`
  object-fit: cover;
  width: 158px;
  height: 158px;
  border-radius: 10px;
  border: 2px solid #000629;
`;
const Image1 = styled.img`
  object-fit: cover;
  width: 93%;
  height: 400px;
  border-radius: 10px;
  margin-left: 10px;
  border: 2px solid #000629;
`;
const Imagelabel = styled.label`
  text-transform: capitalize;
  background-color: #000629;
  color: white;
  cursor: pointer;
  padding: 15px 20px;
  border-radius: 5px;
  margin: 15px 0;
  transition: all 360ms;
  :hover {
    transform: scale(0.9);
  }
`;
const Imageinput = styled.input`
  display: none;
`;
const Input = styled.input`
  border: 1px solid #000269;
  height: 40px;
  padding-left: 10px;
  border-radius: 3px;
  @media screen and (max-width: 420px) {
    font-size: 15px;
  }
  max-width: 150px;
  ::placeholder {
    font-size: 18px;
  }
`;
