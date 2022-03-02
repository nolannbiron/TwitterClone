import React from "react"
import styled from "@emotion/styled"

export const AppWrapper = styled.div`
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  overflow-x: hidden;
`

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;

  ${({ theme }: any) => theme.breakpoints.sm} {
    background-size: auto;
  }

  ${({ theme }: any) => theme.mediaQueries.lg} {
    min-height: 90vh;
  }
`