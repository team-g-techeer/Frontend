import React, { useState } from 'react';
import '../styles/Main.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import '../styles/Calendar.css';
import moment from 'moment';
import styled from 'styled-components';
import AddModal from '../component/Modal/AddProjecModal';

const ProjectDiv = styled.div`
    width: 90%;
    background-color: #b9dcf8;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 30px;
    padding: 11px;
`;


function Main() {
    const [value, onChangeDate] = useState(new Date());    //초기값은 현재의 날짜
    const [isCheck, setChecked] = useState(true);

    const onChangeHandle = () => {
        setChecked(!isCheck);
        console.log(isCheck);
    }

    const marks = [
        "18-07-2022",
        "12-07-2022",
        "22-07-2022"
    ];

    const [isOpen, setIsOpen] = useState(false);

    const closeModalFunction = (x) => {
        setIsOpen(x);
    }

    return (
        <div>
            <div className='left'>
                <img src='assets/imgs/dog.jpg' style={{
                width: 80,
                height: 80,
                borderRadius: '70%',
                verticalAlign: 'middle',
            }} alt="profile"></img>
            <div>
            마리님, 환영합니다!<br></br>
                <Link style={{
                    fontSize: '10px'
                }}>마이페이지</Link> <span style={{
                    fontSize: '10px'
                }}>|</span> <Link to="/logout"style={{
                    fontSize: '10px'
                }}>로그아웃</Link>
            </div>
               <Calendar onChange={onChangeDate} value={value}
               tileClassName={({date, view}) => {
                if(marks.find(x => x === moment(date).format('DD-MM-YYYY'))) {
                    return 'highlight'
                }
               }}></Calendar>
            </div>
            <div className='right'>
                <img className='logoImage2' alt='logo' src='assets/imgs/logo_x.png' ></img>
                <div className='schedule'></div>
                <div className="subRight">
                    <div className='todo'>
                        To Do List
                        <input type='checkbox' style={{textAlign: 'left'}}
                        checked={isCheck}
                        onChange={onChangeHandle}
                        value='옆으로 갔으면 좋겠당'
                        ></input>
                    </div>
                    <div className='projectList'>
                        Project
                        <p className='addProject'><Link onClick={function () {setIsOpen(true)}}>+프로젝트 추가하기</Link></p>
                        {isOpen === true ?
                        <AddModal closeModalFunction={closeModalFunction}></AddModal>
                        : null
                        }
                        <ProjectDiv><Link className='proTitle' to="/project">😊 웹 개발 프로젝트</Link></ProjectDiv>
                        <ProjectDiv><Link className='proTitle' to="/project">🐇 산책 동아리</Link></ProjectDiv>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Main;