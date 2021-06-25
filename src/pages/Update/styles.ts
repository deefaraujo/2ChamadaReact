import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
min-height: 100vh;

form {
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 400px;
  margin: 0 auto;
  margin-top: 100px;

  input {
    margin-bottom: 10px;
  }

  input[type=text] {
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
  }

  button {
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background: #CD5C5C;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }

  input, button {
    border-radius: 6px;
    font-size: 14px;
    margin: 4px;
  }

  button:hover {
    transform: scale(1.1);
  }
}
`

