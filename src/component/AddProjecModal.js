import React from 'react';
import styled from 'styled-components';

function Modal(props) {
    return (
        <div>
            <h3>Create your project</h3>
            <form>
                <table>
                    <tr>
                        <td><b>Project title</b></td>
                        <td><TextInput type="text"></TextInput></td>
                    </tr>
                    <tr>
                        <td><b>Person</b></td>
                        <td><TextInput type="text"></TextInput></td>
                    </tr>
                    <tr>
                        <td><b>description</b></td>
                        <td><TextInput type="text"></TextInput></td>
                    </tr>
                </table>
                <CreateButton>create</CreateButton>
            </form>
        </div>
    );
}

const TextInput = styled.input`
    border-width: 1px;
    border-color: gray;
`

const CreateButton = styled.button`
    font-family: 'GmarketSansMedium';
`

export default Modal;