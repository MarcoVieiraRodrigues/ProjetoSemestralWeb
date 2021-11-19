import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  root: {
    flexGrow: 1
  },
  video: {
    marginTop: '100px',
    width: '900px',
    height: '500px'
  },
  title: {
    marginTop: '100px'
  },
  icons: {
    marginTop: '50px',
    padding: '30px 20px',
    background: '#eff'
  },
  
}))
