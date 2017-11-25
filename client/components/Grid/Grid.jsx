import React from 'react'
import classNames from 'classnames'
import {
  Container as DefaultContainer,
  Col as DefaultCol,
  Row as DefaultRow
} from 'react-grid-system'
import styles from './grid.scss'

export const Container = props => (
  <DefaultContainer
    fluid={true}
  >
    <div className={styles.container}>
      {props.children}
    </div>
  </DefaultContainer>
)

export const Content = props => {
  const contentClass = classNames(
    styles.content,
    props.className
  )

  return (
    <div className={contentClass}>
      {props.children}
    </div>
  )
}

export const Box = props => {
  const contentClass = classNames(
    styles.box,
    props.className
  )

  return (
    <div className={contentClass}>
      {props.children}
    </div>
  )
}

export const Row = props => {
  const {
    horizontalMargin,
    children
  } = props

  const rowClass = classNames(
    styles.row,
    {
      [styles.horizontalMargin]: horizontalMargin
    }
  )

  return (
    <DefaultRow className={rowClass}>
      {children}
    </DefaultRow>
  )
}

export const Col = props => (
  <DefaultCol {...props}>
    {props.children}
  </DefaultCol>
)