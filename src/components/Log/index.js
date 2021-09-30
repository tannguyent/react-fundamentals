import React, { useState, useEffect } from 'react'
import { Console, Hook, Unhook } from 'console-feed'
import { Box, Flex } from 'components/Layout'
import Button from 'components/Button'
import Text from 'components/Text'

const LogsContainer = () => {
  const [logs, setLogs] = useState([])

  // run once!
  useEffect(() => {
    Hook(
      window.console,
      (log) => setLogs((currLogs) => [...currLogs, log]),
      false
    )

    return () => Unhook(window.console)
  }, [])

  return (
    <Box position='fixed' bottom='0' left='0' right='0' height='400px' overflow='auto' bg='black'>
        <Flex justifyContent='space-between' alignItems='center' bg='gray700'>
          <Text color='white'>Hello console log!</Text>
          <Button iconName='window-close' onClick={() => setLogs([])}>Clear Log</Button>
        </Flex>
        <Console logs={logs} variant="dark" />
    </Box>)
}

export default LogsContainer