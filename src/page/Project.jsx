import React, { useState, useRef }from 'react';
import '../styles/Project.css';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import CalcModal from '../component/Modal/CalculateMeetTime';
import Picker from 'emoji-picker-react';

const ProjectTitle = styled.div`
    width: 40%;
    background-color: #bbe1ff;
    border-radius: 30px;
    margin-left: 20px;
    text-align: left;
    padding: 1%;
    margin-top: 5px;
`

function Project() {
    const [isOpen, setIsOpen] = useState(false);
    const [emoji, setEmoji] = useState(null);
    const ref = useRef();
    const [emojiOpen, setEmojiOpen] = useState(false);

    const closeModalFunction = (x) => {
        setIsOpen(x);
    }

    const onChangeEmoji = (event, emojiObj) => {
        setEmoji(emojiObj);
    }

    const onChangeEmojiOpen = () => {
        console.log(emojiOpen);
        setEmojiOpen(!emojiOpen);
    }

    return (
        <div>
            <div className='top'>
                <ProjectTitle>
                    {emoji ? (
                        <span type='button' onClick={onChangeEmojiOpen} 
                        style={{marginLeft: '10px'}}>{emoji.emoji}</span>
                    ) : (
                        <span type='button' onClick={onChangeEmojiOpen} 
                        style={{marginLeft: '10px'}}>😊</span>
                    )}
                    {emojiOpen === true ? (
                        <div>
                        <Picker native onEmojiClick={onChangeEmoji}
                            style={{
                                position: 'fixed',
                                top: '0',
                                left: '0',
                                bottom: '0',
                                right: '0',
                                zIndex: '0',
                            }}
                        ></Picker>
                        </div>
                    ) : (
                        null
                    )}
                    <span className='titleText'>웹 개발 프로젝트</span>
                </ProjectTitle>
            </div>
            <span className='add'><Link>+ 칸반보드 추가하기</Link></span>
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