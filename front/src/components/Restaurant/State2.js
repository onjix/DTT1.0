import React, {useEffect, useState, useRef} from "react";
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import tableState2_1 from "../../assets/img/Signs/available2.glb";
import tableState2_2 from "../../assets/img/Signs/inuse2.glb";
import tableState2_3 from "../../assets/img/Signs/occupied2.glb";
import tableState2_4 from "../../assets/img/Signs/reserved2.glb";
import human1 from "../../assets/img/Human/Human_sit1-1.glb"; //glb파일 변경
import human3 from "../../assets/img/Human/Human_sit1-2.glb"; //glb파일 변경
import * as THREE from 'three';
import axios from "axios";

export const State2 = () => {
    const [reservations2, setReservations2] = useState([]);
    const tableAvail2 = useLoader(GLTFLoader, tableState2_1);
    const tableInuse2 = useLoader(GLTFLoader, tableState2_2);
    const tableOccupied2 = useLoader(GLTFLoader, tableState2_3);
    const tableReserved2 = useLoader(GLTFLoader, tableState2_4);
    const [state2, setState2] = useState("");
    const Human1 = useLoader(GLTFLoader, human1);
    const animations_H1 = Human1.animations; //sit1애니메이션
    const Human3 = useLoader(GLTFLoader, human3);
    const animations_H3 = Human3.animations; //sit2애니메이션
    // console.log("data2: " + props.state);

    useEffect(() => {
        // AnimationMixer 생성
        const mixer1 = new THREE.AnimationMixer(Human1.scene);
        const mixer3 = new THREE.AnimationMixer(Human3.scene);

        // 애니메이션 액션 생성 및 재생
        if (animations_H1 && animations_H1.length > 0) {
            animations_H1.forEach((clip) => {
                const action = mixer1.clipAction(clip);
                action.play();
            });
        }

        if (animations_H3 && animations_H3.length > 0) {
            animations_H3.forEach((clip) => {
                const action = mixer3.clipAction(clip);
                action.play();
            });
        }

        // 렌더링 루프에서 애니메이션 업데이트
        const animate = () => {
            const deltaTime = clock.getDelta(); // deltaTime은 프레임 간의 시간 간격입니다.
            mixer1.update(deltaTime);
            mixer3.update(deltaTime);
            requestAnimationFrame(animate);
        };

        const clock = new THREE.Clock();
        animate(); // 애니메이션 루프 시작
    }, [animations_H1], [animations_H3]);

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        useEffect(() => {
            function tick() {
                savedCallback.current();
            }

            if (delay !== null) {
                const intervalId = setInterval(tick, delay);
                return () => {
                    clearInterval(intervalId);
                };
            }
        }, [delay]);
    }

    const fetchData2 = async () => {
        try {
            const response1 = await fetch("/table/1/2/status");
            const data1 = await response1.json();
            setState2(data1);
            console.log(state2);

            // const response2 = await axios.get("/reservations/time");
            // if (response2.status === 200) {
            //     const data2 = response2.data;
            //     setReservations2(data2);
            //
            //     const today = new Date();
            //     reservations2.forEach((reservation) => {
            //         if (reservation.date === today) {
            //             setState2(4);
            //         }
            //     });
            //     console.log(reservations2);
            // } else {
            //     console.error("Failed to fetch reservations:", response2.status);
            // }
            //
        } catch (error) {
            console.log("에러:", error);
        }
    };

    useInterval(fetchData2, 5000);

    if (state2 === 3) {
        return (
            <>
                <primitive
                    object={tableReserved2.scene}
                    scale={4.5}
                    position={[30, 3, -20]}
                />
            </>
        );
    } else if (state2 === 2) {
        return (
            <>
                <primitive
                    object={tableOccupied2.scene}
                    scale={4.5}
                    position={[30, 3, -20]}
                />
                <primitive
                    object={Human3.scene}
                    scale={0.13}
                    position={[19, 5, -24.5]}
                    rotation={[0, Math.PI / 2, 0]}
                />
            </>
        );
    } else if (state2 === 1) {
        return (
            <>
                <primitive
                    object={tableInuse2.scene}
                    scale={5.5}
                    position={[30, 3, -20]}
                />
                <primitive
                    object={Human3.scene}
                    scale={0.13}
                    position={[19, 5, -24.5]}
                    rotation={[0, Math.PI / 2, 0]}
                />
            </>
        );
    } else if (state2 === 0) {
        return (
            <>
                <primitive
                    object={tableAvail2.scene}
                    scale={4.5}
                    position={[30, 3, -20]}
                />
            </>
        );
    } else {
        return (
            <>
                <primitive
                    object={tableAvail2.scene}
                    scale={4.5}
                    position={[30, 3, -20]}
                />
            </>
        );
    }
};
