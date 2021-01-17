import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ShowSmile } from './ShowSmile';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      // overflow: 'scroll',
      // overflowY: 'hidden',
      padding: theme.spacing(0, 3),
      marginTop: 75,
    },
    paper: {
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
    navbar: {
      overflow: 'hidden',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      left: 0,
      backgroundColor: '#333',
    },

    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    right: {
      float: 'right',
      marginBottom: 10
    },

  }),
);

export const Form = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [activeMemberIdx, setActiveMemberIdx] = useState<null | number>(null);

  const handleOpen = (idx: number) => {
    setActiveMemberIdx(idx);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [members, setMembers] = React.useState([
    {
      name: 'Aushev',
      emoji: '🙄',
    },
  ]);

  const handleSelectEmoji = (emj: string) => {
    setMembers(members.map((member, idx) => {
      if (idx === activeMemberIdx) {
        member.emoji = emj;
      }

      return member;
    }));

    handleClose();
  };

  const addMember = () => {
    setMembers([...members, {
      name: `Участник ${members.length}`,
      emoji: '🙄',
    }]);
  };

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Scroll to Elevate App Bar</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth={'sm'} className={classes.root}>
        <TextField id="outlined-basic" style={{ width: '100%' }} label="Название игры" variant="outlined"/>
        {members.map((member, idx) => {
          return (
            <div key={'member-' + idx}>
              <Paper className={classes.paper}>
                <Grid container
                      direction="row"
                      justify="flex-end"
                      alignItems="center"
                      spacing={2}>
                  <Grid item>
                    <Avatar onClick={handleOpen.bind(null, idx)} className={classes.small}>{member.emoji}</Avatar>
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <TextField id="outlined-basic" style={{ width: '100%' }} label={`Участник #${idx + 1}`}
                               variant="outlined"/>
                  </Grid>
                </Grid>
              </Paper>
              {idx === members.length - 1 &&
              <Button onClick={addMember} className={classes.right} variant="contained" color="primary">+</Button>}
            </div>
          );
        })}


        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
        >
          <div className={classes.paper}>
            <ShowSmile handleSelectEmoji={handleSelectEmoji}/>
          </div>
        </Modal>
      </Container>
    </div>
  );
};