import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Navbar2 from "../Nav/NavBar2";

const SimpleInfo = () => {
  const [testStr1, setTestStr1] = useState(0);
  const [testStr2, setTestStr2] = useState(0);
  const [testStr3, setTestStr3] = useState(0);
  const [testStr4, setTestStr4] = useState(0);
  const statePrint1 = () => {
    if (testStr1 === 3) {
      return (
          <div>
            <h3 className="Table-color3">예약 테이블입니다.</h3>
          </div>
      );
    } else if (testStr1 === 2) {
      return (
          <div>
            <h3 className="Table-color2">테이블 점유 중입니다.</h3>
          </div>
      );
    } else if (testStr1 === 1) {
      return (
          <div>
            <h3 className="Table-color1">테이블이 사용중입니다.</h3>
          </div>
      );
    } else {
      return (
          <div>
            <h3 className="Table-color0">테이블 비어있습니다.</h3>
          </div>
      );
    }
  };

  const statePrint2 = () => {
    if (testStr2 === 3) {
      return (
          <div>
            <h3 className="Table-color3">예약 테이블입니다.</h3>
          </div>
      );
    } else if (testStr2 === 2) {
      return (
          <div>
            <h3 className="Table-color2">테이블 점유 중입니다.</h3>
          </div>
      );
    } else if (testStr2 === 1) {
      return (
          <div>
            <h3 className="Table-color1">테이블이 사용중입니다.</h3>
          </div>
      );
    } else {
      return (
          <div>
            <h3 className="Table-color0">테이블 비어있습니다.</h3>
          </div>
      );
    }
  };
  const statePrint3 = () => {
    if (testStr3 === 3) {
      return (
          <div>
            <h3 className="Table-color3">예약 테이블입니다.</h3>
          </div>
      );
    } else if (testStr3 === 2) {
      return (
          <div>
            <h3 className="Table-color2">테이블 점유 중입니다.</h3>
          </div>
      );
    } else if (testStr3 === 1) {
      return (
          <div>
            <h3 className="Table-color1">테이블이 사용중입니다.</h3>
          </div>
      );
    } else {
      return (
          <div>
            <h3 className="Table-color0">테이블 비어있습니다.</h3>
          </div>
      );
    }
  };
  const statePrint4 = () => {
    if (testStr4 === 3) {
      return (
          <div>
            <h3 className="Table-color3">예약 테이블입니다.</h3>
          </div>
      );
    } else if (testStr4 === 2) {
      return (
          <div>
            <h3 className="Table-color2">테이블 점유 중입니다.</h3>
          </div>
      );
    } else if (testStr4 === 1) {
      return (
          <div>
            <h3 className="Table-color1">테이블이 사용중입니다.</h3>
          </div>
      );
    } else {
      return (
          <div>
            <h3 className="Table-color0">테이블 비어있습니다.</h3>
          </div>
      );
    }
  };

  // function useInterval(callback, delay) {
  //   const savedCallback = useRef();
  //
  //   useEffect(() => {
  //     savedCallback.current = callback;
  //   }, [callback]);
  //
  //   useEffect(() => {
  //     function tick() {
  //       savedCallback.current();
  //     }
  //
  //     if (delay !== null) {
  //       const intervalId = setInterval(tick, delay);
  //       return () => {
  //         clearInterval(intervalId);
  //       };
  //     }
  //   }, [delay]);
  // }
  //
  // const fetchData = async () => {
  //   try {
  //     const response1 = await axios.get("/table/1/1/status");
  //     const response2 = await axios.get("/table/1/2/status");
  //     const response3 = await axios.get("/table/2/1/status");
  //     const response4 = await axios.get("/table/2/2/status");
  //
  //     setTestStr1(response1.data);
  //     setTestStr2(response2.data);
  //     setTestStr3(response3.data);
  //     setTestStr4(response4.data);
  //     console.log(response1);
  //     console.log(response2);
  //   } catch (error) {
  //     console.log("에러:", error);
  //   }
  // };
  //
  // useInterval(fetchData, 3000);
  return (
      <>
        <Navbar2 />
        <div className="SContent-container">
          <div className="SInner-container">
            <div style={{ textAlign: "center" }} className="S-container">
              <h2>현재 테이블 사용현황입니다.</h2>
            </div>
            <div className="Shop1-container">
              <div className="Shop1Inner-container">
                <h2>매장 1의 테이블 현황</h2>
                <div className="table-container">
                  <div className="Table1-container">
                    <div>
                      <h2>1번 테이블</h2>
                    </div>
                    <div>{statePrint1()}</div>
                  </div>
                  <div className="Table2-container">
                    <div>
                      <h2>2번 테이블</h2>
                    </div>
                    <div>{statePrint2()}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Shop2-container">
              <div className="Shop2Inner-container">
                <h2>매장 2의 테이블 현황</h2>
                <div className="table-container">
                  <div className="Table2-container">
                    <div>
                      <h2>1번 테이블</h2>
                    </div>
                    <div>{statePrint3()}</div>
                  </div>
                  <div className="Table2-container">
                    <div>
                      <h2>2번 테이블</h2>
                    </div>
                    <div>{statePrint4()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default SimpleInfo;