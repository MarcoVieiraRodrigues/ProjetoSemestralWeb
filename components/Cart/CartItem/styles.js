import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  media: {
    height: 280,
    width: '180'
  },
  cardContent: {
    display: 'inline',
    justifyContent: 'space-between'
  },
  cartActions: {
    justifyContent: 'space-between'
  },
  buttons: {
    display: 'flex',
    alignItems: 'center'
  }
}))
