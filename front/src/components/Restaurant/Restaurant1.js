import React, { useState, useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import object1 from "../../assets/img/Building/realBuilding.glb";
import object2 from "../../assets/img/Building/s1_table1.glb";
import object3 from "../../assets/img/Building/s1_table2.glb";
import {State1} from "./State1";
import {State2} from "./State2";
import Navbar2 from "../Nav/NavBar2";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import tableState1_1 from "../../assets/img/Signs/available1.glb";
import tableState1_2 from "../../assets/img/Signs/inuse1.glb";
import tableState1_3 from "../../assets/img/Signs/occupied1.glb";
import tableState1_4 from "../../assets/img/Signs/reserved1.glb";
import human1 from "../../assets/img/Human/Human_sit1-1.glb"; //glb파일 변경
import human3 from "../../assets/img/Human/Human_sit1-2.glb"; //glb파일 변경
import * as THREE from 'three';



const ShowInterior1 = () => {
    const store = useLoader(GLTFLoader, object1);
    const table1 = useLoader(GLTFLoader, object2);
    const table2 = useLoader(GLTFLoader, object3);
    const movePage = useNavigate();

    const moveRes1 = () => {
        movePage("/Reservation11")
    }
    const moveRes2 = () => {
        movePage("/Reservation12");
    }

    return (
        <>
            <Navbar2/>
            <div className="SContent-container">
                <div className="SInner-container">
                    <Canvas
                        style={{
                            width: "650px",
                            height: "650px",
                            position: "center",
                            margin: "0 auto",
                        }}
                        camera={{position: [80, 80, 80]}}
                        shadows
                    >
                        <primitive
                            object={store.scene}
                            scale={2}
                            position={[0, 0, 0]}
                            // children-0-castShadow
                        />
                        <primitive
                            object={table1.scene}
                            scale={3}
                            position={[-8, -6, -20]}
                            // children-0-castShadow
                            onClick={moveRes1}
                        />

                        {/*<State1 state={state1}/>*/}

                        <State1 />
                        <primitive
                            object={table2.scene}
                            scale={3}
                            position={[30, -6, -20]}
                            // children-0-castShadow
                            onClick={moveRes2}
                        />

                        {/*<State2 state={state2}/>*/}
                        <State2 />
                        <directionalLight intensity={1}/>
                        <ambientLight intensity={1.2}/>
                        <spotLight
                            intensity={0.1}
                            angle={0.1}
                            penumbra={1}
                            // children-0-castShadow
                        />

                        <OrbitControls target={[0, 1, 0]}/>
                    </Canvas>
                </div>
            </div>
        </>

    );
};

export default ShowInterior1;