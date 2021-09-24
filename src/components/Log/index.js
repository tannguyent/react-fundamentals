import React, { useState, useEffect } from 'react'
import { Console, Hook, Unhook } from 'console-feed'
import styled from 'styled-components';

const LogsWrapper = styled.div`
    background-color: rgb(36, 36, 36);
    position: fixed;
    bottom: 0;
    height: 100px;
    left: 0;
    right: 0;
    overflow: auto;
`;

const LogsContainer = () => {
  const [logs, setLogs] = useState([])

  // run once!
  useEffect(() => {
    Hook(
      window.console,
      (log) => setLogs((currLogs) => [...currLogs, log]),
      false
    )

    console.log(`Hello console log!`)

    return () => Unhook(window.console)
  }, [])

  return (
    <LogsWrapper>
        <Console logs={logs} variant="dark" />
    </LogsWrapper>)
}

export default LogsContainer