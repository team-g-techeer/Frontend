import React, { useState }from 'react';
import '../styles/Project.css';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import CalcModal from '../component/Modal/CalculateMeetTime';
import Modal from '../component/Modal/AddProjecModal';

const ProjectTitle = styled.div`
    width: 40%;
    background-color: #bbe1ff;
    border-radius: 30px;
    margin-left: 20px;
    padding: 1%;
    text-align: left;
    margin-top: 10px;
`

function Project() {
    const [isOpen, setIsOpen] = useState(false);

    const closeModalFunction = (x) => {
        setIsOpen(x);
    }

    // const [modalOpen, setModalOpen] = useState(false);

    // const openModal = () => {
    //   setModalOpen(true);
    // };
    // const closeModal = () => {
    //   setModalOpen(false);
    // };

    return (
        <div>
            <div className='top'>
                <ProjectTitle>
                    <span className='titleText'>(이모지) 프로젝트 제목</span>
                </ProjectTitle>
            </div>
            <span className='add'>
            {/* <button onClick={openModal}>모달팝업</button> */}
            <Link href='#'>+ 칸반보드 추가하기</Link></span>
            {/* <Modal open={modalOpen} close={closeModal} header="Modal heading">
        // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달
        팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
      </Modal> */}
            <div className='left2'>
                <span className='sideText'>Meet Schedule</span>
                <p className='setTime'><Link onClick={function () {setIsOpen(true)}}>회의 시간 설정하기</Link></p>
                {isOpen === true ?
                        <CalcModal closeModalFunction={closeModalFunction}></CalcModal>
                        : null
                }
            </div>
        </div>

    );
}

export default Project;